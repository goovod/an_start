import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  constructor(
    private userService: UserService,
  ) {}

  ngOnInit() {
    this.getUsers();
    this.userService.change.subscribe((user: User) => {
      this.users.push(user);
    });
  }
  getUsers(): void {
    const that = this;
    this.userService.getUsers()
      .subscribe(users => {
        users.map((item: any) => {
          item.birthday = new Date(item.birthday);
          that.users.push(Object.assign(new User(), item));
        });
      });
  }
  delete(user: User): void {
    this.users = this.users.filter(u => u !== user);
  }
}
