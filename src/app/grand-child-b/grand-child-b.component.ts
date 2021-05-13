import { Component, OnInit } from '@angular/core';
import { ComunicationService } from '../services/comunication.service';

@Component({
  selector: 'app-grand-child-b',
  templateUrl: './grand-child-b.component.html',
  styleUrls: ['./grand-child-b.component.scss']
})
export class GrandChildBComponent implements OnInit {

  mensaje: number;
  constructor(public comunicationService: ComunicationService) { }

  ngOnInit(){    
  }

  getDouble(number){
    if (number){
      return number * 2;
    } 
  }
  getTriple(number){
    if (number){
      return number * 3;
    }
  }
  getHalf(number){
    if (number){
      return number / 2;
    }
  }
  getSquare(number){
    if (number){
      return number * number;
    }
  }
  getSquareRoot(number){
    if (number){
      if (number >= 0){
        return Math.sqrt(number);
      } else {
        return -1;
      }
      
    }
  }
  getSin(number){
    if (number){
      return Math.sin(number);
    }
  }
  getCos(number){
    if (number){
      return Math.cos(number);
    }
  }
  isPrime(number): boolean{
    if (number){
      var truncNumber = Math.trunc(number);
      for (var i = 2; i < truncNumber; i++){
        if (truncNumber % i === 0){
          return false
        }
      }
      return truncNumber !== 1;
    }
  }
  getInt(number){
    if (number){
      return Math.trunc(number);
    }
  }
}
