import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WikiComponent } from './wiki/wiki.component';
import { ArticleComponent } from './article/article.component';

import { HistoryComponent } from './history/history.component';

const routes: Routes = [ // Indirizzi URL per il routing
  { path: '', component: WikiComponent }, 
  { path: 'article/:title', component: ArticleComponent },
  { path: 'results/:stringaDiRicerca', component: WikiComponent },
  { path: 'history', component: HistoryComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
