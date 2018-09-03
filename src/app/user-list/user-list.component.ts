import {Component, OnInit} from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DialogModalComponent } from '../dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent implements OnInit {
  users: User[] = [];
  bsModalRef: BsModalRef;
  selectedItem: User|null;
  constructor(
    private userService: UserService,
    private modalService: BsModalService
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
    const that = this;
    const initialState = {
      class: 'modal-sm',
      title: '',
      closeBtnName: 'No',
      doBtnName: 'Delete',
      body: 'Delete user ' + this.selectedItem.name + ' ?',
      onSave: function () {
        that.userService.delete(that.selectedItem).subscribe(x => {
          that.users = that.users.filter(u => u !== that.selectedItem);
          that.selectedItem = null;
          that.bsModalRef.hide();
        });
      }
    };
    this.bsModalRef = this.modalService.show(DialogModalComponent, {initialState});
  }
}
