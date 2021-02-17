import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lib2Module } from '../../../lib2/src';
import { Lib1Module } from '../../../lib1/src';

@NgModule({
  imports: [CommonModule, Lib1Module, Lib2Module],
  exports: [Lib1Module, Lib2Module],
})
export class MasterLibModule {}
