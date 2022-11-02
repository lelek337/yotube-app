import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, distinctUntilChanged, map, mergeMap, Observable, of, Subject, switchMap } from 'rxjs';

import { Item } from 'src/app/shared/models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export default class YoutubeService {

  constructor(
    private http: HttpClient,
  ) {}

  public queryValue = new Subject<string>();

  videos$ = this.queryValue.pipe(
    this.liveSearch((res) => this.fetchvideos(res)),
  );

  liveSearch<T, R>(
    dataCb: (query: T) => Observable<R>,
    delay = 550,
  ) {
    return (source$: Observable<T>) => source$.pipe(
      distinctUntilChanged(),
      switchMap(dataCb),
      debounceTime(delay),
    );
  }

  fetchvideos(name: string): Observable<any> {
    if (name.length > 3) {
      return this.http.get<string>(`/search?&type=video&part=snippet&maxResults=10&q=${name}`).pipe(
        map((videoResponse: any) => {
          const idList: Item[] = videoResponse.items
            .map((item: Item) => item.id.videoId);
          return idList;
        }),
        mergeMap((idList) => this.http.get(`/videos?&id=${idList.join(',')}&part=snippet,statistics`)),
        map((res: any) => {
          const itemsList: Item[] = res.items;
          return itemsList;
        }),
      );
    }
    return of([]);
  }

  searchQuery(query: string) {
    this.queryValue.next(query);
  }
}
