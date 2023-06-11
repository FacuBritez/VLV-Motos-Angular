import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {
  //años de experiencia
  year:number = new Date().getFullYear();
  constructor() { 
  }

  ngOnInit(): void {
  }
}
