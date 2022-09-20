import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { Injectable } from '@angular/core';
import { LoginForm, RegisterForm } from 'src/app/types/Auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;

  isLoading: boolean = false;

  passwordMatched: boolean = true;

  constructor() {}

  login(form: LoginForm) {
    if (this.isLoading) return;

    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
        alert('Yeahhh login success !');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
        alert('Credentials does not match our record.');
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  register(form: RegisterForm) {
    if (this.isLoading) return;

    this.isLoading = true;
    if (form.password !== form.confirm_password) {
      this.passwordMatched = false;
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthenticated = true;
      })
      .catch((error) => {
        this.isAuthenticated = false;
        const errorCode = error.code;
        const errorMessage = error.message;
      })
      .finally(() => {
        this.isLoading = false;
      });
  }
}
