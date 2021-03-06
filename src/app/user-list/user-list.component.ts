import {Component, OnInit} from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  users: User[] = [];
  selectedItem: User|null;
  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.selectedItem = null;
    this.getUsers();
    this.userService.changeEvent.subscribe((user: User) => {
      this.users.push(user);
    });
  }
  isSelected(user: User): boolean {
    if (this.selectedItem === null) {
      return false;
    }
    return user.id === this.selectedItem.id;
  }
  select(item: any): void {
    if (this.selectedItem === item) {
      this.selectedItem = null;
      return;
    }
    this.selectedItem = item;
  }
  getUsers(): void {
    const that = this;
    this.userService.getAll()
      .subscribe(users => {
        users.map((item: any) => {
          item.birthday = new Date(item.birthday);
          that.users.push(Object.assign(new User(), item));
        });
      });
  }
  showDeleteModal(): void {
    /**
     * place to modal
     */
      this.userService.delete(this.selectedItem).subscribe(x => {
        this.users = this.users.filter(u => u !== this.selectedItem);
        this.selectedItem = null;
      });
  }
}
