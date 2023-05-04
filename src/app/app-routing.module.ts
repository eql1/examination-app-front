import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './features/users/users.component';
import { ExamsComponent } from './features/exams/exams.component';

const routes: Routes = [
  { path: 'users-component', component: UsersComponent },
  { path: 'exams-component', component: ExamsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
