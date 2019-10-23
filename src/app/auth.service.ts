import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public isAuthenticated(user: string, password: string): any{
    if (user === 'and' && password === '123'){
      this.router.navigate(['admin']);
    }
    else{
      this.router.navigate(['**']);
    }
  }
}
