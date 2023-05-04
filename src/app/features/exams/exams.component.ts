import { Component, OnInit } from '@angular/core';
import { exams } from 'src/app/core/data/exams';
import { Exam } from 'src/app/core/models/exam.model';

@Component({
  selector: 'app-exams',
  templateUrl: './exams.component.html',
  styleUrls: ['./exams.component.scss'],
})
export class ExamsComponent implements OnInit {
  public exams: Exam[] = [];

  ngOnInit(): void {
    this.getExams();
  }

  getExams(): void {
    this.exams = exams;
  }
}
