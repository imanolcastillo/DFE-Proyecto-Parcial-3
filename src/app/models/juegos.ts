export enum JuegoEstatus {
    Activo = 'Activo',
    Inactivo = 'Inactivo',
    Eliminado = 'Eliminado',
}

export interface Juego {
    id: number;
    imagen: string;
    nombre: string;
    genero: string;
    plataforma: string;
    estatus: JuegoEstatus;
    vendedor: string;
    precioVenta: number;
    descripcion: string;
}

export const listaCasasDummy: Juego[] = [
    {
        id: 1,
        imagen: '1.jpg',
        nombre: 'Super Mario Bros',
        genero: 'Plataformas',
        plataforma: 'Nintendo',
        estatus: JuegoEstatus.Activo,
        vendedor: 'Juan Perez',
        precioVenta: 100,
        descripcion: 'Juego de plataformas de Mario Bros',
    },
    {
        id: 2,
        imagen: '2.jpg',
        nombre: 'The Legend of Zelda',
        genero: 'Aventura',
        plataforma: 'Nintendo',
        estatus: JuegoEstatus.Activo,
        vendedor: 'Juan Perez',
        precioVenta: 100,
        descripcion: 'Juego de aventura de Zelda',
    },
    {
        id: 3,
        imagen: '3.jpg',
        nombre: 'Donkey Kong Country',
        genero: 'Plataformas',
        plataforma: 'Nintendo',
        estatus: JuegoEstatus.Activo,
        vendedor: 'Juan Perez',
        precioVenta: 100,
        descripcion: 'Juego de plataformas de Donkey Kong',
    },
    {
        id: 4,
        imagen: '4.jpg',
        nombre: 'Super Mario Kart',
        genero: 'Carreras',
        plataforma: 'Nintendo',
        estatus: JuegoEstatus.Activo,
        vendedor: 'Juan Perez',
        precioVenta: 100,
        descripcion: 'Juego de carreras de Mario Bros',
    },
    {
        id: 5,
        imagen: '5.jpg',
        nombre: 'Super Mario World',
        genero: 'Plataformas',
        plataforma: 'Nintendo',
        estatus: JuegoEstatus.Activo,
        vendedor: 'Juan Perez',
        precioVenta: 100,
        descripcion: 'Juego de plataformas de Mario Bros',
    },
    {
        id: 6,
        imagen: '6.jpg',
        nombre: 'Super Mario All Stars',
        genero: 'Plataformas',
        plataforma: 'Nintendo',
        estatus: JuegoEstatus.Activo,
        vendedor: 'Juan Perez',
        precioVenta: 100,
        descripcion: 'Juego de plataformas de Mario Bros',
    },
    {
        id: 7,
        imagen: '7.jpg',
        nombre: 'Super Mario All Stars + Super Mario World',
        genero: 'Plataformas',
        plataforma: 'Nintendo',
        estatus: JuegoEstatus.Activo,
        vendedor: 'Juan Perez',
        precioVenta: 100,
        descripcion: 'Juego de plataformas de Mario Bros',
    }
];