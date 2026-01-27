import { Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { Theme as ThemeService } from '../../services/theme';

@Component({
  selector: 'app-login',
  imports: [NgOptimizedImage],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  protected themeService = inject(ThemeService);
}
