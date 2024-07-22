import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementator',
  templateUrl: './incrementator.component.html',
  styleUrl: './incrementator.component.css'
})
export class IncrementatorComponent implements OnInit {
  
  ngOnInit() {
    this.btnClass = `btn ${this.btnClass}`
  }

  @Input() progreso: number = 60;
  @Input() btnClass: string = 'btn-primary'

  @Output() valorSalida: EventEmitter<number> = new EventEmitter()

  cambiarValor(valor: number){

    if (this.progreso >= 100 && valor >= 0) {
      this.valorSalida.emit(100)
      return this.progreso = 100;
    }

    if (this.progreso <= 0 && valor < 0) {
      this.valorSalida.emit(0)
      return this.progreso = 0;
    }

    this.progreso = this.progreso + valor
    return this.valorSalida.emit(this.progreso)
  }

  onChange( nuevoValor: number ){
    if (nuevoValor >= 100) {
      this.progreso = 100
    } else if (nuevoValor <= 0) {
      this.progreso = 0
    } else {
      this.progreso = nuevoValor
    }
  }
}
