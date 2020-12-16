import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import { AuthenticationService } from './modules/authentication/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  title = 'CPlayersUI';

  constructor(private _authService : AuthenticationService, private _route: Router) {}


  logoutUser() {
  this._authService.deleteToken();
  this._route.navigate(['/login']);
}
}
