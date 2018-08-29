import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { GoogleMapService } from '../../services/google.map.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

/**
 * @class UserFormComponent
 */
export class UserFormComponent implements OnInit {
  @ViewChild('search') public searchElementAddressRef: ElementRef;
  /**
   * @Input('model') public model: User;
   */
  model = new User();
  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private googleMapService: GoogleMapService
  ) {
  }
  onSubmit() {
    if (!this.userForm.valid) {
      return false;
    }

    console.log(this.userForm.value);

    this.model = Object.assign(this.model, this.userForm.value);
    this.userService.add(this.model).subscribe((user: User) => {
      this.userForm.reset();
      this.model = new User();
    });
  }
  onReset() {
    this.userForm.reset();
  }
  ngOnInit(): void {
    this.googleMapService.init(this.searchElementAddressRef, this.model);

    this.userForm = new FormGroup({
      'name': new FormControl(this.model.name, {
        validators: [ Validators.required, Validators.minLength(4)]
      }),
      'lastName': new FormControl(this.model.name, {
        validators: [ Validators.required, Validators.minLength(4)]
      }),
      'email': new FormControl(this.model.name, {
        validators: [ Validators.required, Validators.email ]
      }),
      'gender': new FormControl(this.model.name, {
        validators: [ Validators.required ]
      }),
      'birthday': new FormControl(this.model.name, {
        validators: [ Validators.required ]
      }),
      'address': new FormControl(this.model.name, {
        validators: [ Validators.required ]
      }),
    });
  }
}
