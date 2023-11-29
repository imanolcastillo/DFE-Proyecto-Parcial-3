import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VistaComponent } from './vista/vista.component';



@NgModule({
  declarations: [
    VistaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VistaComponent
  ]
})
export class CatalogoModule { }
