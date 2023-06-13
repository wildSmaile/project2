import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  name: string = "Bob";
  age :number = 18;

  imageSrc: string = "https://via.placeholder.com/350x150";

  constructor() { }

  ngOnInit(): void {
  }

  sayHello(): void  {
    alert("Bonjour !"+this.name);
  }
}
