import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { drawBarComponent } from './components/draw-bar/draw-bar.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, drawBarComponent, PasswordInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
}
