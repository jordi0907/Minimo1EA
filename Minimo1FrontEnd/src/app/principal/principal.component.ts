import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


import { persona } from '../model/persona';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  personas: persona[];
  constructor(private personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
    this.personaService.getPersonas().subscribe( res =>{
      this.personas = res;
      console.log(this.personas);
    },err =>{
      console.log("error");
      Swal.fire('Error en la conexion', '', 'error');
    })
  }

  modificar(personaId){
    this.router.navigate(['/' + personaId]);
  }

}
