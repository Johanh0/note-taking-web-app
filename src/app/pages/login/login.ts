import { Component, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Theme as ThemeService } from '../../services/theme';
import { Login as LoginType } from '../../models/login';
import { form, required, email, validate, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-login',
  imports: [NgOptimizedImage, FormField],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  protected themeService = inject(ThemeService);

  loginModel = signal<LoginType>({
    email: '',
    password: ''
  });

  loginForm = form(this.loginModel)

}
