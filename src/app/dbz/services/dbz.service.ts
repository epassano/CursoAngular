import {Injectable} from '@angular/core'
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{

    private _personajes:Personaje[]=[
        {nombre:'GOKU',
         poder:15000
        },
        {nombre:'VEGETEA',
        poder:7500
        }
      ];
      get personajes():Personaje[]{
        return [...this._personajes];
      }
    constructor(){
        console.log('Servicio inicializado');
    }

}