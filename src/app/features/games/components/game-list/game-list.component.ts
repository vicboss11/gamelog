import { Component, Input } from '@angular/core';
import { Game } from '@features/games/models/game.model';
import { GameCardComponent } from '../game-card/game-card.component';
import { GameCardAddComponent } from "../game-card-add/game-card-add.component";

@Component({
  selector: 'app-game-list',
  standalone: true,
  imports: [GameCardComponent, GameCardAddComponent],
  templateUrl: './game-list.component.html',
  styleUrl: './game-list.component.scss',
})
export class GameListComponent {
  @Input() h1?: string;

  games: Game[] = [
    {
      id: 1,
      name: 'Grand Theft Auto V',
      description: 'Description 1',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-188x250.jpg',
      rating: 5,
    },
    {
      id: 2,
      name: 'Grand Theft Auto V',
      description: 'Description 1',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/32989_IGDB-188x250.jpg',
      rating: 5,
    },
    {
      id: 3,
      name: 'Grand Theft Auto V',
      description: 'Description 1',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/32845_IGDB-188x250.jpg',
      rating: 5,
    },
    {
      id: 4,
      name: 'Grand Theft Auto V',
      description: 'Description 1',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/32927_IGDB-188x250.jpg',
      rating: 5,
    },
    {
      id: 5,
      name: 'Grand Theft Auto V',
      description: 'Description 1',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/32920_IGDB-188x250.jpg',
      rating: 5,
    },
    {
      id: 6,
      name: 'Grand Theft Auto V',
      description: 'Description 1',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/32933_IGDB-188x250.jpg',
      rating: 5,
    },
    {
      id: 7,
      name: 'Grand Theft Auto V',
      description: 'Description 1',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/32992_IGDB-188x250.jpg',
      rating: 5,
    },
    {
      id: 8,
      name: 'Grand Theft Auto V fsdf fsdf fsd fdfdfsdfsdfsdfsdfsd',
      description: 'Description 1',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/32132_IGDB-188x250.jpg',
      rating: 5,
    },
    {
      id: 9,
      name: 'Grand Theft Auto V',
      description: 'Description 1',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/32929_IGDB-188x250.jpg',
      rating: 5,
    },
    {
      id: 10,
      name: 'Grand Theft Auto V',
      description: 'Description 1',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/32728_IGDB-188x250.jpg',
      rating: 5,
    },
    {
      id: 11,
      name: 'Grand Theft Auto V',
      description: 'Description 1',
      image: 'https://static-cdn.jtvnw.net/ttv-boxart/3298_IGDB-188x250.jpg',
      rating: 5,
    },
  ];
}
