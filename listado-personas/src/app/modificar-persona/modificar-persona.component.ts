import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { ActivatedRoute } from '@angular/router';
import { AjaxServicioService } from '../ajax-servicio.service';
@Component({
  selector: 'app-modificar-persona',
  templateUrl: './modificar-persona.component.html',
  styleUrls: ['./modificar-persona.component.css']
})
export class ModificarPersonaComponent implements OnInit {

  private persona: Persona;
  private personaId;
  private datos: any;
  
  constructor(private serviciopAjax: AjaxServicioService, private rute: ActivatedRoute) {
    this.persona = { id: null, dni: "", nombre: "", apellidos: "" }
    this.personaId = this.rute.snapshot.params["id"];
  }

  ngOnInit() {
    this.serviciopAjax.selPersona(this.personaId).subscribe(datacos => {
      this.persona = datacos;
    });
  }

  aceptar() {
    this.serviciopAjax.modificar(this.persona).subscribe(datacos => {
      this.datos = datacos;
    });
  }

}
