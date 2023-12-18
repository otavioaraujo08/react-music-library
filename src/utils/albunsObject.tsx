import AllHopeIsGone from '@assets/images/AllHopeIsGone.jpg';
import Magma from '@assets/images/Magma.jpg';
import Mesmerize from '@assets/images/Mesmerize.jpg';

export interface AlbumDetails {
    id: number;
    title: string;
    artist: string;
    cover: string;
}

export const AlbunsObject: AlbumDetails[] = [
    {
        id: 0,
        title: 'All Hope Is Gone',
        artist: 'Slipknot',
        cover: AllHopeIsGone,
    },
    {
        id: 1,
        title: 'Magma',
        artist: 'Gojira',
        cover: Magma,
    },
    {
        id: 2,
        title: 'Mesmerize',
        artist: 'System Of A Down',
        cover: Mesmerize,
    },
];
