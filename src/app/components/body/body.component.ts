import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

  //declarar variables que vamos a usar en la plantilla
  public titulo:string = "Angular 17";
  
  public datos={
    nombre:'Miguel',
    apellidos:'Baena'
  }

}
