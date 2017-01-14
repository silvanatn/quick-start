import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!
  `,
})

export class AppComponent  {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  } 
  title = 'Tour of Heros'; 
  //hero  = 'Windstorm';
}
