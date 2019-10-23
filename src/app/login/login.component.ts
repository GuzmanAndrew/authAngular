import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string;
  password: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  public setValue() {
    this.authService.isAuthenticated(this.user, this.password)
  }
}
