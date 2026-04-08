import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { catchError } from 'rxjs/internal/operators/catchError';
import { CharacterList } from '../../model/characterList.type';
import { CharacterFilterService } from '../../service/character-filter.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-character-filter',
  imports: [HeaderComponent, ReactiveFormsModule],
  templateUrl: './character-filter.component.html',
  styleUrl: './character-filter.component.css'
})
export class CharacterFilterComponent {

  characterFilterService = inject(CharacterFilterService);
  characters = signal<Array<CharacterList>>([]);

  house = new FormControl('', { nonNullable: true });

  filterByHouse(): void {
    const houseValue = this.house.value.trim().toLowerCase();
    if (!houseValue) {
      this.characters.set([]);
      return;
    }

    this.characterFilterService
      .getCharactersByHouse(houseValue)
      .pipe(
        catchError((err) => {
          console.log(err);
          this.characters.set([]);
          throw err;
        })
      )
      .subscribe((characters) => {
        this.characters.set(characters);
      });
  }
}
