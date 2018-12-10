import { Component, OnInit } from '@angular/core';
import { Artist } from '../models/artist.model';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.css']
})
export class FavoriteListComponent implements OnInit {
  artist: Artist[] = [
    new Artist('Dax J', 'Techno'),
    new Artist('Amelie Lens', 'Techno')
  ];

  constructor() { }

  ngOnInit() {
  }

}
