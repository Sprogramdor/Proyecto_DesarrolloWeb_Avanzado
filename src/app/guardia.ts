import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Guardia implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/error']);
      return false;
    }
    return true;
  }
}