import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TablaPersonasComponent } from './tabla-personas/tabla-personas.component';
import { RouterModule } from '@angular/router';
import { AnadirPersonaComponent } from './anadir-persona/anadir-persona.component';
import { ModificarPersonaComponent } from './modificar-persona/modificar-persona.component';


@NgModule({
  declarations: [
    AppComponent,
    TablaPersonasComponent,
    AnadirPersonaComponent,
    ModificarPersonaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: TablaPersonasComponent},
      {path: 'insertar/:id', component: AnadirPersonaComponent},
      {path: 'modificar/:id', component: ModificarPersonaComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
