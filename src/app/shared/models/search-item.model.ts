export interface Item {
  kind: string;
  etag: string;
  id: {
    kind?: string,
    videoId: string
  };
  snippet: Snippet;
  statistics: Statistics;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  tags: string[];
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage?: string,
  localized: Localized;
  defaultAudioLanguage: string;
}

interface Thumbnails {
  default: Thumbnails_Items;
  medium: Thumbnails_Items;
  high: Thumbnails_Items;
  standard: Thumbnails_Items;
  maxres: Thumbnails_Items;
}

interface Thumbnails_Items {
  url: string;
  width: number;
  height: number;
}

interface Localized {
  title: string;
  description: string;
}

interface Statistics {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  favoriteCount: string;
  commentCount: string;
}
