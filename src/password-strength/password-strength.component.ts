import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-strength',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './password-strength.component.html',
  styleUrl: './password-strength.component.scss'
})

export class PasswordStrengthComponent {
  password: string = '';
  colorInactive: string = 'gray';
  colorGreen: string = 'green';
  colorRed: string = 'red';
  colorYellow: string = 'yellow';
  indicatorSectionColor: string[] = [this.colorInactive, this.colorInactive, this.colorInactive];
  minLengthPassword: number = 8;

  displayStrengthLevel(n: number, color: string) {
    for (let i: number = 0; i < this.indicatorSectionColor.length; i += 1) {
      if ((i + 1) <= n) {
        this.indicatorSectionColor[i] = color;
      } else {
        this.indicatorSectionColor[i] = this.colorInactive;
      }
    }
  }
  
  getStrengthColor(level: number): string {
    const colors: string[] = [this.colorInactive, this.colorRed, this.colorYellow, this.colorGreen];

    if (level >= colors.length) {
      level = 0;
    }
    return colors[level];
  }

  getPasswordStrengt(pass: string): number {
    const lettersConsist: boolean = /[a-zA-Z]/.test(pass);
    const digitsConsist: boolean = /[0-9]/.test(pass);
    const symbolsConsist: boolean = /[^a-zA-Z0-9]/.test(pass);

    return Number(lettersConsist) + Number(digitsConsist) + Number(symbolsConsist);
  }
  
  checkPasswordStrength() {
    const password = this.password;

    if (password.length < this.minLengthPassword && password.length !== 0) {
      this.displayStrengthLevel(3, this.colorRed);
    } else {
      const passwordStrenght = this.getPasswordStrengt(password);
      
      this.displayStrengthLevel(passwordStrenght, this.getStrengthColor(passwordStrenght))
    }
  }
}
