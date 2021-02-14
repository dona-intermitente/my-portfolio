import Dona from 'images/logo.svg';

const Menu = [
    {
        name:'Proyectos',
        alias:'projects',
        url:'/projects/'
    },
    {
        name:'Trabajando en',
        alias:'working',
        url:'/working/'
    },
    {
        name:'Contacto',
        alias:'contact',
        url:'/contact/'
    }
];

const Imagen = [
    {
        img: Dona,
        alt: 'Dona',
        text:'Anatomy de una dona',
        routeImg:'/anatomy/'
    }
]

export {Menu, Imagen};