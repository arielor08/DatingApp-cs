import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title: string = 'Dating App';
  isActive: string = 'is-active';
  userModel: any = {
    user: '',
    password: ''
  }
  constructor() { }

  ngOnInit(): void {
    this.activeNavBurger();
  }

  public activeNavBurger(): string {
    return this.isActive = this.isActive ? '' : 'is-active'
  }

  public login():void{
    console.log(this.userModel);
  }

}
