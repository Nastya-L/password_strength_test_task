import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class PasswordStrengthService {
  getStrength (password: string): number {
    const lettersConsist: boolean = /[a-zA-Z]/.test(password);
    const digitsConsist: boolean = /[0-9]/.test(password);
    const symbolsConsist: boolean = /[^a-zA-Z0-9]/.test(password);

    return Number(lettersConsist) + Number(digitsConsist) + Number(symbolsConsist);
  }
}
