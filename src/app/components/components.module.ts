import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { BaseChartDirective } from 'ng2-charts';

import { IncrementatorComponent } from './incrementator/incrementator.component';
import { DonaComponent } from './dona/dona.component';



@NgModule({
  declarations: [
    IncrementatorComponent,
    DonaComponent
  ],
  exports:[
    IncrementatorComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BaseChartDirective
  ]
})
export class ComponentsModule { }
