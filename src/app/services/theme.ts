import { Injectable, signal } from '@angular/core';
import { Theme as ThemeType } from '../models/theme';

@Injectable({
  providedIn: 'root',
})
export class Theme {

  private currentTheme = signal<ThemeType>(this.themeInit());

  readonly theme = this.currentTheme.asReadonly();

  preferColorScheme(): ThemeType {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  
  themeInit(): ThemeType {
    const themeSaved = localStorage.getItem('theme') as ThemeType | null ;

    const initialTheme = themeSaved ? themeSaved : this.preferColorScheme()

    this.saveTheme(initialTheme);

    return initialTheme;
  }

  saveTheme(theme: ThemeType) {
    localStorage.setItem('theme', theme);
  }
  
}
