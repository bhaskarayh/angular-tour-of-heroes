import { Component } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  standalone: true,
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  imports: [FormsModule, NgIf, NgFor, UpperCasePipe],
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  // };

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
