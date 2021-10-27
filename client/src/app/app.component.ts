import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_service/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  users: any;

  constructor(private htpp: HttpClient, private accountService: AccountService) { }

  ngOnInit(): void {
    this.getUsers();
    this.setCurrentUser();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  getUsers() {
    this.htpp.get('https://localhost:5001/api/users').subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
