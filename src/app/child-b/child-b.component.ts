import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../services/comunication.service';

@Component({
  selector: 'app-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.scss']
})
export class ChildBComponent implements OnInit {
  mensaje: string;
  constructor(public comunicationService: ComunicationService) { }

  ngOnInit(): void {
  }

  receiveChanges(){
    this.mensaje = this.comunicationService.message;

  }

}
