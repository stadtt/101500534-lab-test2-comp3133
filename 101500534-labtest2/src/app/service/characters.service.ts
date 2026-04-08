import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { CharacterList } from '../model/characterList.type';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  http = inject(HttpClient);

  getCharacters() {
    const url = "https://hp-api.onrender.com/api/characters";
    return this.http.get<Array<CharacterList>>(url);
  }

}
