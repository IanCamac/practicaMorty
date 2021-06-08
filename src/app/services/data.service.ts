import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AllCharactersResponse, Result } from '../interface/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  URL_API = 'https://rickandmortyapi.com/api';
  public allCharacters: Result[] = [];
  public oneCharacter!: Result;
  constructor(private http: HttpClient) { 
  }

  getAllCharacter() {
    return this.http.get<AllCharactersResponse>(`${this.URL_API}/character`)
      .subscribe( (response: AllCharactersResponse) => {
        this.allCharacters = response.results;
      } )
  }

   getOneCharacter(id: number) {
    return this.http.get<Result>(`${this.URL_API}/character/${id}`)
      .subscribe( (response:Result) => {
        this.oneCharacter = response;
      })
  }

  getOneCharacterByName(name: string) {
    return this.http.get<AllCharactersResponse>(`${this.URL_API}/character?name=${name}`)
      .subscribe( (response: AllCharactersResponse) => {
        this.allCharacters = response.results;
      })
  }
}
