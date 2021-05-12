import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../services/comunication.service';

@Component({
  selector: 'app-grand-child-b',
  templateUrl: './grand-child-b.component.html',
  styleUrls: ['./grand-child-b.component.scss']
})
export class GrandChildBComponent implements OnInit {

  mensaje: string;
  constructor(public comunicationService: ComunicationService) { }

  ngOnInit(){
    this.comunicationService.sendMessageObservable.subscribe(response=> {
      this.mensaje = response;
    });
  }

  changeText(mensaje: string){
    this.comunicationService.sendMessage(mensaje);
  }

}
