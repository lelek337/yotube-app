import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { DetailsComponent } from 'src/app/youtube/pages/details/details.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { MatButtonModule } from '@angular/material/button';

import { ComentsCountComponent } from './pages/search-results/search-result-item/coments-count/coments-count.component';
import { DislikesCountComponent } from './pages/search-results/search-result-item/dislikes-count/dislikes-count.component';
import { LikesCountComponent } from './pages/search-results/search-result-item/likes-count/likes-count.component';
import { MoreButtonComponent } from './pages/search-results/search-result-item/more-button/more-button.component';
import { VideoThumbnailComponent } from './pages/search-results/search-result-item/video-thumbnail/video-thumbnail.component';
import { VideoTitleComponent } from 'src/app/youtube/pages/search-results/search-result-item/video-title/video-title.component';
import { ViewsCountComponent } from 'src/app/youtube/pages/search-results/search-result-item/views-count/views-count.component';
import { SearchResultItemComponent } from 'src/app/youtube/pages/search-results/search-result-item/search-result-item.component';
import { SearchResultsComponent } from 'src/app/youtube/pages/search-results/search-results.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddCardComponent } from 'src/app/youtube/components/add-card/add-card.component';

@NgModule({
  declarations: [
    DetailsComponent,
    ComentsCountComponent,
    DislikesCountComponent,
    LikesCountComponent,
    MoreButtonComponent,
    VideoThumbnailComponent,
    VideoTitleComponent,
    ViewsCountComponent,
    SearchResultItemComponent,
    SearchResultsComponent,
    AddCardComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    YoutubeRoutingModule,
    MatButtonModule,
    SharedModule,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: YoutubeInterceptor,
    //   multi: true,
    // },
  ],
})
export class YoutubeModule { }
