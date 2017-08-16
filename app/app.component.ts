import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  template: `
  <hero-form></hero-form>
  `
})

export class AppComponent {
 title = "Tour of Heroes";
 hero: Hero = {
   id: 1,
   name: 'Windstorm'
 };
}
