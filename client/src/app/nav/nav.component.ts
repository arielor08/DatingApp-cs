import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_service/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title: string = 'Dating App';
  isActive: string = 'is-active';
  userModel: any = {
    userName: '',
    password: ''
  }
  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    this.activeNavBurger();
  }

  public activeNavBurger(): string {
    return this.isActive = this.isActive ? '' : 'is-active'
  }

  public login(): void {
    this.accountService.login(this.userModel).subscribe(
      () => {
      },
      (error) => {
        console.error(error);
      }
    );
  }

  public logout() {
    this.accountService.logout();
  }
}
