import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ShedulerService } from 'src/app/services/sheduler.service';

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrls: ['./process.component.scss']
})
export class ProcessComponent implements OnInit {

  formProcess: FormGroup;
  listainicial: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  dataReadys: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  dataFinish: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  memory:number;
  startP: boolean =false;
  lista:any[]=[];
  i=0;

  constructor(private fb:FormBuilder,
    public shedule: ShedulerService) {
    this.formProcess = this.initForm();
    this.shedule.procesosReady$.subscribe({
      next: resp => {
        this.dataReadys = new MatTableDataSource<any>(resp);
      }
    })
    this.shedule.procesosFinish$.subscribe({
      next: resp => {
        this.dataFinish = new MatTableDataSource<any>(resp);
      }
    })
    this.memory = this.shedule.memory;
  }
  initForm(): FormGroup {
    return this.fb.group({
      priority: new FormControl('', [Validators.required]),
      time: new FormControl('', [Validators.required]),
      size: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  create(){
    if (this.formProcess.valid) {
      this.i++;
      const proceso = {
        priority: this.formProcess.get('priority')?.value,
        time: this.formProcess.get('time')?.value,
        size: this.formProcess.get('size')?.value,
        pid: 'proceso '+this.i
      }
      this.shedule.createProccess(this.formProcess.value);

      this.lista.push(proceso);
      console.log('despues de crear',JSON.stringify(this.lista))
      this.listainicial = new MatTableDataSource<any>(this.lista);
      this.formProcess.reset();
    }
  }

  start(){
    this.shedule.start();
    this.startP = true;
  }
}
