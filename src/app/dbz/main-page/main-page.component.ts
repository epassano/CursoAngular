import { Component, OnInit } from '@angular/core';
import { TargetLocator } from 'selenium-webdriver';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {
personajes:Personaje[]=[
  {nombre:'GOKU',
   poder:15000
  },
  {nombre:'VEGETEA',
  poder:7500
  }
];
nuevo:Personaje={
  nombre:'Maestro Roshi',
  poder:100
}

  
}
