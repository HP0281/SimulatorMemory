import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-configuration-environment',
  templateUrl: './configuration-environment.component.html',
  styleUrls: ['./configuration-environment.component.scss']
})
export class ConfigurationEnvironmentComponent implements OnInit {

  formEnv: FormGroup;
  @Output() memory: EventEmitter<number> = new EventEmitter;
  @Output() memoryP: EventEmitter<number> = new EventEmitter;
  @Output() unitTime: EventEmitter<number> = new EventEmitter;
  constructor(private fb: FormBuilder) {
    this.formEnv = this.initform();
   }

   ngOnInit(): void {
   }

  initform(): FormGroup {
    return this.fb.group({
      memoryT: new FormControl('', [Validators.required]),
      memoryP: new FormControl('', [Validators.required]),
      unitTime: new FormControl('', [Validators.required])
    })
  }

  emitMemory(){
    this.memory.emit(this.formEnv.get('memoryT')?.value);
  }
  emitMemoryP(event : any){
    this.memoryP.emit(event.value);
  }

  emitTime(){
    this.unitTime.emit(this.formEnv.get('unitTime')?.value);
  }

}
