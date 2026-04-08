import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CharacterList } from '../model/characterList.type';

@Injectable({
  providedIn: 'root'
})
export class CharacterFilterService {

  http = inject(HttpClient);

  getCharactersByHouse(house: string) {
    const url = `https://hp-api.onrender.com/api/characters/house/${house}`;
    return this.http.get<Array<CharacterList>>(url);
  }

  
}
