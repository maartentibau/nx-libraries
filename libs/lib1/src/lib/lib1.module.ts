import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib1ComponentComponent } from './lib1-component/lib1-component.component';

@NgModule({
  imports: [CommonModule],
  declarations: [Lib1ComponentComponent],
  exports: [Lib1ComponentComponent],
})
export class Lib1Module {}
