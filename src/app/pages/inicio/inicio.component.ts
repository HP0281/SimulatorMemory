import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShedulerService } from 'src/app/services/sheduler.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
  memory:number =0;
  time:number=0;

  constructor(private shedul: ShedulerService, private router: Router) { }

  ngOnInit(): void {
  }

  saveParams(){
    this.shedul.memory = this.memory;
    this.shedul.unitTime = this.time;
    this.router.navigate(['createProcess']);
  }

  AsignValues(event:any, value:string){
    console.log(value, event)
    value==='memory'? this.memory = event : this.time = event;
  }
}
