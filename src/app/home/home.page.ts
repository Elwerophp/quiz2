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

  constructor(private chucknorrisService:ChucknorrisService,private chucklistaService:ListaService) {}

  broma:any;
  chucklista:any;

  ngOnInit(){
    this.chucknorrisService.getRandonJoke().subscribe((data)=>{
      this.broma=data;
    });
    this.chucklistaService.getlista().subscribe((data)=>{
      this.chucklista=data;
    })
  }

 
    
}