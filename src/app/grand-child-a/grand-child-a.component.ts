import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ComunicationService } from '../services/comunication.service';

@Component({
  selector: 'app-grand-child-a',
  templateUrl: './grand-child-a.component.html',
  styleUrls: ['./grand-child-a.component.scss']
})
export class GrandChildAComponent implements OnInit {

  mensaje: number;
  constructor(private comunicationService: ComunicationService) { }

  ngOnInit(){
    this.comunicationService.sendMessageObservable.subscribe(response=> {
      this.mensaje = response;
    });
  }

  changeNumber(mensaje: number){
    this.comunicationService.sendMessage(mensaje);
  }

  isEmpty(value): boolean{
    return isNaN(value);
  }

}
