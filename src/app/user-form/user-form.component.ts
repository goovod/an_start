import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { GoogleMapService } from '../../services/google.map.service';
import { ActivatedRoute } from '@angular/router';

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

  editMode = false;
  model = new User();
  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private googleMapService: GoogleMapService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }
  onSubmit() {
    if (!this.userForm.valid) {
      return false;
    }

    this.model = Object.assign(this.model, this.userForm.value);

    if (!this.editMode) {
      this.userService.add(this.model).subscribe((user: User) => {
        this.location.back();
      });
    } else {
      this.userService.update(this.model).subscribe((user: User) => {
        this.location.back();
      });
    }
  }
  onReset() {
    this.userForm.setValue(this.model, {onlySelf: true});
  }
  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    if (id) {
      this.editMode = true;
      this.userService.get(id).subscribe((user: any) => {
        user.birthday = new Date(user.birthday);
        this.model = Object.assign(this.model, user);
        this.userForm.setValue(this.model);
      });
    }

    this.userForm = new FormGroup({
      'id': new FormControl(),
      'name': new FormControl(null, {
        validators: [ Validators.required, Validators.minLength(4)]
      }),
      'lastName': new FormControl(null, {
        validators: [ Validators.required, Validators.minLength(4)]
      }),
      'email': new FormControl(null, {
        validators: [ Validators.required, Validators.email ]
      }),
      'gender': new FormControl(null, {
        validators: [ Validators.required ]
      }),
      'birthday': new FormControl(null, {
        validators: [ Validators.required ]
      }),
      'address': new FormControl(null, {
        validators: [ Validators.required ]
      }),
      'status': new FormControl(null, {
        validators: [ Validators.required ]
      }),
      'latitude': new FormControl(),
      'longitude': new FormControl()
    });

    this.googleMapService.init(this.searchElementAddressRef, this.model, this.userForm);
  }
}
