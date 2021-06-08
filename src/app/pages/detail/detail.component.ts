import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  id: number = 0;
  constructor(private dataService: DataService, private params: ActivatedRoute) { }

  ngOnInit(): void {
    this.params.params.subscribe(params => this.id = params.id);
    this.dataService.getOneCharacter(this.id);
  }

  get oneCharacter(){
    return this.dataService.oneCharacter;
  }

}
