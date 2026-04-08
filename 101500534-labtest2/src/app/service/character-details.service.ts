import { inject, Injectable } from '@angular/core';
import { CharacterDetails } from '../model/characterDetails.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterDetailsService {

  http = inject(HttpClient);

  getCharacterDetails(id: number) {
    const url = `https://hp-api.onrender.com/api/characters/${id}`;
    return this.http.get<Array<CharacterDetails>>(url);
  }
}
