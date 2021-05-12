import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../services/comunication.service';

@Component({
  selector: 'app-grand-child-a',
  templateUrl: './grand-child-a.component.html',
  styleUrls: ['./grand-child-a.component.scss']
})
export class GrandChildAComponent implements OnInit {

  mensaje: string;
  constructor(private comunicationService: ComunicationService) { }

  ngOnInit(){
    this.comunicationService.sendMessageObservable.subscribe(response=> {
      this.mensaje = response;
    });
  }

  changeText(mensaje: string){
    this.comunicationService.sendMessage(mensaje);
  }

}
