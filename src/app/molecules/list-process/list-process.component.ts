import { Component, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ShedulerService } from 'src/app/services/sheduler.service';

@Component({
  selector: 'app-list-process',
  templateUrl: './list-process.component.html',
  styleUrls: ['./list-process.component.scss']
})
export class ListProcessComponent implements OnInit {

  displayedColumns: string[] = ['pid', 'priority', 'time', 'size'];

  @Input() dataSource = new MatTableDataSource<any> ([]);
  @Input() type:string='';

  constructor(private shedule: ShedulerService) {
  }

  ngOnInit(): void {
    if (this.type === 'ready') {
      this.displayedColumns.push('state');
    }
    if (this.type === 'finish') {
      this.displayedColumns.push('state');
      this.displayedColumns.push('finish');
    }
  }

}
