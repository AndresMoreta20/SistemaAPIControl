import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-editar-trabajador',
  templateUrl: './editar-trabajador.component.html',
  styleUrls: ['./editar-trabajador.component.css']
})
export class EditarTrabajadorComponent {
  constructor(route: ActivatedRoute) { };
  codigo : String = "";
  descripcion: String = "";



  onSubmit(){
    
  }
  ngOnInit(){
    //const param1 = this.route.snapshot.queryParamMap.get('param1');
    //const param2 = this.route.snapshot.queryParamMap.get('param2');
  
    //console.log(param1, param2);
  }

}
