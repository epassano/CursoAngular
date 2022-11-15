import { Component, OnInit } from '@angular/core';
import { TargetLocator } from 'selenium-webdriver';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent  {

nuevo:Personaje={
  nombre:'Maestro Roshi',
  poder:100
}


constructor(){} 
  
}
