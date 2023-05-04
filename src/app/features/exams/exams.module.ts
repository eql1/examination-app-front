import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamsComponent } from './exams.component';

@NgModule({
  declarations: [ExamsComponent],
  exports: [ExamsComponent],
  imports: [CommonModule],
})
export class ExamsModule {}
