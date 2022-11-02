import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailsComponent } from 'src/app/youtube/pages/details/details.component';
import { SearchResultsComponent } from 'src/app/youtube/pages/search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    component: SearchResultsComponent,
    pathMatch: 'full',
  },
  {
    path: 'more',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {
}
