import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { FestivalListComponent } from './festivals/festival-list/festival-list.component';
import { FestivalDetailComponent } from './festivals/festival-detail/festival-detail.component';
import { FestivalItemComponent } from './festivals/festival-list/festival-item/festival-item.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { FavoriteEditComponent } from './favorite-list/favorite-edit/favorite-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FestivalsComponent,
    FestivalListComponent,
    FestivalDetailComponent,
    FestivalItemComponent,
    FavoriteListComponent,
    FavoriteEditComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
