import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WikiComponent } from './wiki/wiki.component';
import { ArticleComponent } from './article/article.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [
    AppComponent,
    WikiComponent,
    ArticleComponent,
    NavigationComponent,
    SearchBoxComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
