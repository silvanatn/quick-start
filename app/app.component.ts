import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero}} details!
  `,
})

export class AppComponent  { 
  title = 'Tour of Heros'; 
  hero  = 'Windstorm';
}
