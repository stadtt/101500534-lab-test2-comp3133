import { Component, inject, signal } from '@angular/core';
import { CharacterDetails } from '../../model/characterDetails.type';
import { CharacterDetailsService } from '../../service/character-details.service';
import { catchError } from 'rxjs/internal/operators/catchError';
import { HeaderComponent } from '../header/header.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-details',
  imports: [HeaderComponent],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent {
      
      characterDetailsSerice = inject(CharacterDetailsService);
      route = inject(ActivatedRoute);
  characterDetails = signal<CharacterDetails | null>(null);

      ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (!id) {
          return;
        }

        this.characterDetailsSerice
          .getCharacterDetails(id)
          .pipe(
            catchError((err) => {
              console.log(err);
              throw err;
            })
          )
          .subscribe((characterDetails) => {
            this.characterDetails.set(characterDetails[0] ?? null);
          });
      }


}
