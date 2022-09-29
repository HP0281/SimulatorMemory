import { Component, OnInit } from '@angular/core';
import { ShedulerService } from 'src/app/services/sheduler.service';

@Component({
  selector: 'app-list-memory',
  templateUrl: './list-memory.component.html',
  styleUrls: ['./list-memory.component.scss']
})
export class ListMemoryComponent implements OnInit {

  list:any[]= [];
  constructor(private sheduler: ShedulerService) {
    this.sheduler.procesosPc$.subscribe({
      next: resp =>{
        this.list = resp;
      }
    })
   }

  ngOnInit(): void {
  }

}
