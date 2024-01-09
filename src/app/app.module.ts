import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { drawBarComponent } from './components/draw-bar/draw-bar.component';
import { PasswordInputComponent } from './components/password-input/password-input.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    drawBarComponent,
    PasswordInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
