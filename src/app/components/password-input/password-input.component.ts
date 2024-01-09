import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { drawBarComponent } from '../draw-bar/draw-bar.component';
import { PasswordStrengthService } from '../../services/password-strength.service';

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    drawBarComponent
  ],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss'
})

export class PasswordInputComponent {
  input: FormControl;
  strength: number;

  constructor (private PasswordStrengthService: PasswordStrengthService) {
    this.input = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.strength = 0;

    this.input.valueChanges.subscribe((password: string) => {
      this.strength = this.PasswordStrengthService.getStrength(password);
    });
  }

  _isCorrectLength (): boolean {
    return this.input.hasError('minlength');
  }
}
