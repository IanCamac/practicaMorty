import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Result } from '../../interface/character.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: Result[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAllCharacter();
   
  }
 
  get allCharacters() {
    return this.dataService.allCharacters;
  }

}
