import { Component } from '@angular/core';
import { ChucknorrisService } from '../chucknorris.service';
import { ListaService } from '../lista.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private chucknorrisService:ChucknorrisService,private listaService:ListaService) {}

  broma:any;
  lista:any;

  ngOnInit(){
    this.chucknorrisService.getRandonJoke().subscribe((data)=>{
      this.broma=data;
    });
    this.listaService.getlista().subscribe((data)=>{
      this.lista=data;
    })
  }

 
    
}