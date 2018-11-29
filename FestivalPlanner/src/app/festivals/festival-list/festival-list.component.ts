import { Component, OnInit } from '@angular/core';
import { Festival } from 'src/app/models/festival.model';

@Component({
  selector: 'app-festival-list',
  templateUrl: './festival-list.component.html',
  styleUrls: ['./festival-list.component.css']
})
export class FestivalListComponent implements OnInit {
  festivals : Festival[] = [
    new Festival('Best Festi Ever','Best artist ever','https://i.redd.it/r0czo9ekyuy11.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
