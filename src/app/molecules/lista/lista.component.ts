import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  displayedColumns: string[] = ['pid', 'priority', 'time', 'size'];

  @Input() dataSource = new MatTableDataSource<any> ([]);
  constructor() { }

  ngOnInit(): void {
  }

}
