import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})

export class UsersDashboardComponent implements OnInit {
  public chartColors: any[] = [{ backgroundColor: ['#5cb85c', '#f0ad4e' ] }];
  public chartLabels: string[] = new User().getStatuses();
  public chartData: number[];
  public chartType = 'doughnut';
  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.chartData = [];
    this.chartLabels.forEach(item => this.chartData.push(0));
    this.getUsers();
  }
  getTotalCount(): number {
    return +this.chartData.reduce((a, b) => a + b);
  }
  getUsers(): void {
    const that = this;
    this.userService.getAll()
      .subscribe(users => {
        const data = [];
        users.map((user: User) => {
          for (const key in this.chartLabels) {
            if (user.status === this.chartLabels[key]) {
              !data[key] ? data[key] = 1 : data[key] += 1;
            }
          }
        });
        this.chartData = data;
      });
  }
}
