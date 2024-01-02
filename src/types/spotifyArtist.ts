export interface ArtistResponse {
    external_urls: string;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface ArtistAlbumImageResponse {
    height: number;
    width: number;
    url: string;
}

export interface externalLinksResponse {
    spotify: string;
}

export interface ArtistAlbumResponse {
    album_group: string;
    album_type: string;
    artist: ArtistResponse[];
    available_markets: string[];
    external_urls: externalLinksResponse;
    href: string;
    id: string;
    images: ArtistAlbumImageResponse[];
    name: string;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
    type: string;
    uri: string;
}

export interface ArtistAlbumsResponse {
    href: string;
    items: ArtistAlbumResponse[];
    limit: number;
    next: string;
    offset: number;
    previous: string | null;
    total: number;
}
