import ap from 'images/projects/campos-green-portada.png'
import a1 from 'images/projects/campos-green1.png'
import a2 from 'images/projects/campos-green2.png'
import a3 from 'images/projects/campos-green3.png'
import a4 from 'images/projects/campos-green4.png'
import a5 from 'images/projects/campos-green5.png'
import a6 from 'images/projects/campos-green6.png'
import a7 from 'images/projects/campos-green7.png'

import bp from 'images/projects/video-portada.png'
import b1 from 'images/projects/video1.png'
import b2 from 'images/projects/video2.png'
import b3 from 'images/projects/video3.png'
import b4 from 'images/projects/video4.png'

import cp from 'images/projects/obsequiar-portada.png'
import c1 from 'images/projects/obsequiar1.png'
import c2 from 'images/projects/obsequiar2.png'
import c3 from 'images/projects/obsequiar3.png'
import c4 from 'images/projects/obsequiar4.gif'
import c5 from 'images/projects/obsequiar5.png'

import dp from 'images/projects/morrocoy-portada.png'
import d1 from 'images/projects/morrocoy1.png'
import d2 from 'images/projects/morrocoy2.png'
import d3 from 'images/projects/morrocoy3.png'
import d4 from 'images/projects/morrocoy4.png'

import ep from 'images/projects/joel-portada.png'
import e1 from 'images/projects/joel1.png'
import e2 from 'images/projects/joel2.png'
import e3 from 'images/projects/joel3.png'

import fp from 'images/projects/diana-portada.png'
import f1 from 'images/projects/diana1.png'
import f2 from 'images/projects/diana2.png'
import f3 from 'images/projects/diana3.png'

import gp from 'images/projects/corcaribe-portada.png'
import g1 from 'images/projects/corcaribe1.png'
import g2 from 'images/projects/corcaribe2.png'
import g3 from 'images/projects/corcaribe3.png'
import g4 from 'images/projects/corcaribe4.png'

const projectsData = [
    {
        img: ap,
        text1: 'Campos Green',
        text2: '15/03/2021',
        content: [
            {
                img2: a1,
                text3: 'Refrescamiento de página web para empresa de productos y servicios agrícolas',
            },
            {
                img2: a2,
                text3: '-Mejora en la experiencia de usuario',
            },
            {
                img2: a3,
                text3: '-Coherencia estetica',
            },
            {
                img2: a4,
                text3: '-Organización de la información',
            },
            {
                img2: a5,
                text3: '-Accesibilidad',
            },
            {
                img2: a6,
                text3: 'Diseño responsive',
                class:'revers',
            },
            {
                img2: a7,
                text3: '-Adaptable a todo tipo de pantalla',
                class:'revers',
            }
        ]
    },
    {
        img: bp,
        text1: 'App de video',
        text2: '02/02/2021',
        content: [
            {
                img2: b1,
                text3: 'Diseño UX/UI para una Progresive Webs App (PWA) de videos '
            },
            {
                img2: b2,
                text3: 'Categorias',
                class: 'revers',
            },
            {
                img2: b3,
                text3: 'Preloader',
            },
            {
                img2: b4,
                text3: 'Video a pantalla completa',
                class: 'revers',
            }
        ]
    },
    {
        img: cp,
        text1: 'ObsequiAR',
        text2: '07/10/2020',
        content: [
            {
                img2: c1,
                text3: 'Diseño de imagen gráfica para empresa de regalos con Realidad Aumentada'
            },
            {
                img2: c2,
                text3: 'Grilla para Redes Sociales',
                class: 'revers',
            },
            {
                img2: c3,
                text3: 'Marcadores de realidad aumentada',
            },
            {
                img2: c4,
                text3: 'Edición de video',
                class: 'revers',
            },
            {
                img2: c5,
                text3: 'Diseño UX/UI de landing page',
            }
        ]
    },
    {
        img: dp,
        text1: 'Morrocoy Games',
        text2: '26/08/2020',
        content: [
            {
                img2: d1,
                text3: 'Diseño de imagen gráfica para reseñador de videojuegos',
            },
            {
                img2: d2,
                text3: 'Creación de logo',
            },
            {
                img2: d3,
                text3: 'Manual coorporativo',
                class: 'revers',
            },
            {
                img2: d4,
                text3: 'uso o aplicaciones',
                class: 'revers',
            }
        ]
    },
    {
        img: ep,
        text1: 'Joel blanco',
        text2: '10/03/2020',
        content: [
            {
                img2: e1,
                text3: 'Diseño de UX/UI para portfolio de developer',
            },
            {
                img2: e2,
                text3: '',
            },
            {
                img2: e3,
                text3: 'Creación de logo',
            }
        ]
    },
    {
        img: fp,
        text1: 'Diana Delivery',
        text2: '12/02/2020',
        content: [
            {
                img2: f1,
                text3: 'Diseño UX/UI para fiambreria delivery',
            },
            {
                img2: f2,
                text3: 'Ilustración de iconos',
            },
            {
                img2: f3,
                text3: 'Prototipo de alta fidelidad',
                class: 'revers',
            }
        ]
    },
    {
        img: gp ,
        text1: 'Corcaribe',
        text2: '27/10/2019',
        content: [
            {
                img2: g1,
                text3: 'Refrescamiento de marca para empresa de servicios tecnológicos',
            },
            {
                img2: g2,
                text3: 'Diseño de personajes basados en la empresa',
            },
            {
                img2: g3,
                text3: 'Ilustración coorporativa',
                class: 'revers',
            },
            {
                img2: g4,
                text3: 'Tarjeta de presentación',
                class: 'revers',
            }
        ]
    }
];

export default projectsData;