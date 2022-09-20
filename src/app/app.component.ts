import { firebaseConfig } from './firebase.config';
import { initializeApp } from 'firebase/app';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './pages/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }

  clickCart() {
    if (!this.authService.isAuthenticated) {
      alert('Không có quyền truy cập !');
    }
  }

  isAuthenticated() {
    return this.authService.isAuthenticated;
  }

  logout() {
    this.authService.logout();
  }
}
