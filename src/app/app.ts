import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Theme as ThemeService} from './services/theme';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  protected themeService = inject(ThemeService);

  ngOnInit(): void {
    document.documentElement.setAttribute('data-theme', this.themeService.theme());
  }
}
