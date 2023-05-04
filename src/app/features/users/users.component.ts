import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { users } from 'src/app/core/data/users';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public users: User[] = [];
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.users = users;
  }

  // getUsers(): void {
  //   this.userService.getUsers().subscribe({
  //     next: (response: User[]) => {
  //       this.users = response;
  //       console.log(this.users);
  //     },
  //     error: (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     },
  //   });
  // }
}
