import { Component, OnInit } from '@angular/core';
import { UsersComponent } from './features/users/users.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private usersComponent: UsersComponent) {}

  ngOnInit(): void {
    // console.log(this.usersComponent.getUsers());
    // this.usersComponent.getUsers();
  }
}
