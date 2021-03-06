import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComunicationService {

  message: number;
  private sendMessageSubject = new Subject<number>(); //permite enviar mensajes a multiples observadores.
  sendMessageObservable = this.sendMessageSubject.asObservable();

  sendMessage(message: number){
    this.message = message;
    this.sendMessageSubject.next(message);
  }

}
