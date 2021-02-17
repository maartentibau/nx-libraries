import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2ComponentComponent } from './lib2-component/lib2-component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib2ComponentComponent],
  exports: [Lib2ComponentComponent],
})
export class Lib2Module {}
