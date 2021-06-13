import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  duration: number = 7000;
  close: string = 'Zamknij';


  constructor(private snackBar: MatSnackBar) { }

  displayMessage(message: string, action: string, duration: number): void {
    this.snackBar.open(message, action, {
      duration: duration
    });
  }

  displayDefaultMessage(message: string): void {
    this.displayMessage(message, this.close, this.duration);
  }

  displaySuccessMessage(message: string): void {
    this.displayDefaultMessage('OK: ' + message);
  }

  displayErrorMessage(message: string): void {
    this.displayDefaultMessage('Błąd: ' + message);
  }
}
