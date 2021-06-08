import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  character = '';
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  
  search() {
    console.log(this.character)
    this.dataService.getOneCharacterByName(this.character);
  }
}
