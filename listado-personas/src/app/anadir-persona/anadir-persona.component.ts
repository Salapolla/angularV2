import { Component, OnInit } from '@angular/core';
import {AjaxServicioService}from '../ajax-servicio.service';
import { Persona} from '../persona';
@Component({
  selector: 'app-anadir-persona',
  templateUrl: './anadir-persona.component.html',
  styleUrls: ['./anadir-persona.component.css']
})
export class AnadirPersonaComponent implements OnInit {
  public persona:Persona={id:-1,dni:"",nombre:"",apellidos:""};;
  private datos:any;
    constructor(private serviciopAjax: AjaxServicioService) { 
  
    }
  
    
   
  
    aceptar(dni,nombre,apellidos){
      this.serviciopAjax.anadir(dni,nombre,apellidos).subscribe(datacos => {
        this.datos=datacos;});
      }
    
  ngOnInit() {
  }

}
