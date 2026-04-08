import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { catchError } from 'rxjs/internal/operators/catchError';
import { CharactersService } from '../../service/characters.service';
import { CharacterList } from '../../model/characterList.type';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  charactersService = inject(CharactersService);
  characters = signal<Array<CharacterList>>([]);

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
      });
  
  }


}
