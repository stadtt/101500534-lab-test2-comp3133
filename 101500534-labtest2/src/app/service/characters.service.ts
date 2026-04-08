import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  http = inject(HttpClient);

  getCharacters() {
    const url = "https://hp-api.onrender.com/api/characters";
    

}
