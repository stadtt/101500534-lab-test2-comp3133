import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { catchError } from 'rxjs/internal/operators/catchError';
import { of } from 'rxjs';
import { CharactersService } from '../../service/characters.service';
import { CharacterList } from '../../model/characterList.type';
import { RouterLink } from '@angular/router';
import { CharacterFilterService } from '../../service/character-filter.service';
import { CharacterFilterComponent } from '../character-filter/character-filter.component';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, RouterLink, CharacterFilterComponent],
  templateUrl: './characterList.component.html',
  styleUrl: './characterList.component.css'
})

export class characterListComponent {
  charactersService = inject(CharactersService);
  characterFilterService = inject(CharacterFilterService);
  characters = signal<Array<CharacterList>>([]);
  allCharacters = signal<Array<CharacterList>>([]);

  ngOnInit(): void {
    this.charactersService
      .getCharacters()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((characters) => {
        this.characters.set(characters);
        this.allCharacters.set(characters);
      });
  
  }

  onHouseSelected(houseValue: string): void {
    if (!houseValue) {
      this.characters.set(this.allCharacters());
      return;
    }

    this.characterFilterService
      .getCharactersByHouse(houseValue)
      .pipe(
        catchError((err) => {
          console.log(err);
          this.characters.set([]);
          return of([] as Array<CharacterList>);
        })
      )
      .subscribe((characters) => {
        this.characters.set(characters);
      });
  }


}
