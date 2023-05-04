import { Component } from '@angular/core';
import { exams } from 'src/app/core/data/exams';
import { Exam } from 'src/app/core/models/exam.model';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss'],
})
export class ExamsComponent {
  public exams: Exam[] = [];

  getExams(): void {
    this.exams = exams;
  }
}
