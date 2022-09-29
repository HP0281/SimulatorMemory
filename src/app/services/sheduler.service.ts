import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShedulerService {
  private pid=1;
  private _memory: number = 10;
  private _pagination: number = 0;
  private _unitTime: number = 100;
  finish: boolean = false;
  public get unitTime(): number {
    return this._unitTime;
  }
  public set unitTime(value: number) {
    this._unitTime = value;
  }
  private _listReady: any[] = [];
  public listInitial:any[] = [];
  private listFinish: any[] = [];
  public procesos$ = new Subject<any[]>();
  public procesosPc$ = new Subject<any[]>();
  public procesosReady$ = new Subject<any[]>();
  public procesosFinish$ = new Subject<any[]>();

  public get listReady(): any[] {
    return this._listReady;
  }
  public set listReady(value: any[]) {
    this._listReady = value;
  }
  private _listRun: any[] = [];
  public get listRun(): any[] {
    return this._listRun;
  }
  public set listRun(value: any[]) {
    this._listRun = value;
  }
  public get pagination(): number {
    return this._pagination;
  }
  public set pagination(value: number) {
    this._pagination = value;
  }

  public get memory(): number {
    return this._memory;
  }
  public set memory(value: number) {
    this._memory = value;
  }


  constructor() {

  }

  public createProccess(process:any){
    this.listInitial.push(process);
    let listAux =[];
    let inserted=false;
    process.pid = 'Proceso'+this.pid++;
    process.state = 'Preparado';
    if (this.listReady.length > 0) {
      this.listReady.forEach((element:any, index) =>{
        if (!inserted && element.priority === process.priority) {
            listAux.push(element);
            listAux.push(process);
            inserted = true;
        }else{
          if (element.priority > process.priority && !inserted) {
            listAux.push(process);
            listAux.push(element);
            inserted = true;

          }else{
            listAux.push(element);
          }
        }

      })
      if (!inserted) {
        listAux.push(process);
      }
    }else{
      listAux.push(process);
    }
    this.listReady = listAux;
    const list = this.listInitial;
    this.procesos$.next(list);
    this.procesosReady$.next(this.listReady);
  }

  public start(){
    this.listRun.push({size: this._memory, state: 'empty'});
    //this.iniciarlista();
    this.sheduler();
  }

  private validateSize(size:number){
    this.listRun.forEach((element:any) => {

    })
  }

  private desfragmentar(){
    let list=[];
    if (this.listRun.length > 0) {
      let sizeValue = 0;
      for (let i =0;  i < this.listRun.length; i++) {
        if (this.listRun[i].state === 'empty') {
          sizeValue = sizeValue+this.listRun[i].size;
        }else{
          if (sizeValue>0) {
            list.push({size: sizeValue, state: 'empty'})
          }
          list.push(this.listRun[i]);
        }
      }
      if (sizeValue>0) {
        list.push({size: sizeValue, state: 'empty'})
      }
    }
    this.listRun = list;
    console.log('desfragmendando lista'+JSON.stringify(list))
    this.procesosPc$.next(list);
  }

  private assignProccess(process:any):boolean{
    let list:any =[];
    let run = false;
    this.listRun.forEach((element:any) => {
      if (process.time > 0) {
        if (element.state ==='empty' && !run){
          if (element.size >= process.size) {
            process.state = 'Activo';
            list.push({size: process.size, state: 'full',time: process.time, pid: process})
            run = true;
            let sizeR = element.size - process.size;
            if (sizeR > 0) {
              list.push({size: sizeR, state: 'empty'})
            }
          }
          if (!run) {
            list.push(element);
          }
        }else{
          list.push(element);
        }
      }
    })
    this.listRun = list;
    console.log('pasando despues de asignar '+ JSON.stringify(list));
    this.procesosPc$.next(list);
    return run;
  }

  readyToActive(){
    console.log('entra')
    console.log('pasando a run antes de recorrer'+ JSON.stringify(this.listRun));
    let borrar:any[]=[];
    let interrupcion=false;
    for (let i = 0; i < this.listReady.length; i++) {
      if (!interrupcion) {
        if (this.assignProccess(this.listReady[i])) {

        }else{
          interrupcion = true;
          borrar.push(this.listReady[i]);
        }
      }else{
        borrar.push(this.listReady[i]);
      }
    }
    this.listReady = borrar;
    this.procesosReady$.next(this.listReady);


  }

  validateProcessPc(time:number){
    if (time> 0) {
      this.listRun.forEach((element:any, index) => {
        if (element.state != 'empty') {
          element.pid.time = element.pid.time - this.unitTime;
          console.log(element.pid.time)
          if (element.pid.time === 0) {
            element.pid.finish = time;
            element.pid.state = 'Finalizado';
            this.listFinish.push(element);
            this.listRun[index] = {size: element.size, state: 'empty'}
          }
        }
      })
      this.procesosPc$.next(this.listRun);
    }
  }

  sheduler(){
    let time= 0;
    this.readyToActive();
    var hilo = setInterval(()=>{
      this.validateProcessPc(time);
      this.desfragmentar();
      this.readyToActive();
      console.log('intervalo');
      time += 1;
      console.log('finalizacion'+ JSON.stringify(this.listFinish));
      if (this.listRun.length === 1 && this.listRun[0].state === 'empty') {
        clearInterval(hilo);
        this.procesosFinish$.next(this.listFinish);
        this.finish = true;
      }
    }, 1000)
  }
  private iniciarlista(){
    let list =[{state:'preparado', size: 5, time: 500, priority:0, pid: 'proceso1'},
    {state:'preparado', size: 3, time: 300, priority:1, pid: 'proceso2'},
    {state:'preparado', size: 2, time: 200, priority:2, pid: 'proceso3'},
    {state:'preparado', size: 6, time: 600, priority:3, pid: 'proceso4'},
    {state:'preparado', size: 2, time: 300, priority:4, pid: 'proceso5'},]
    list.forEach(element => {
      this.createProccess(element)
    })
  }

}
