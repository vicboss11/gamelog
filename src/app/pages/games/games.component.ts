import { Component } from '@angular/core';
import { LayoutComponent } from "../../layouts/layout/layout.component";
import { GameCardComponent } from "../../features/games/components/game-card/game-card.component";
import { GameListComponent } from "../../features/games/components/game-list/game-list.component";
import { CreateGameModalComponent } from "../../features/games/components/create-game-modal/create-game-modal.component";

@Component({
  standalone: true,
  imports: [LayoutComponent, GameCardComponent, GameListComponent, CreateGameModalComponent],
  templateUrl: './games.component.html',
  styleUrl: './games.component.scss',
})
export class GamesComponent {}
