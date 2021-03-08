import Dona from 'images/logo.svg';

const menus = [
    {
        image: {
            src: Dona,
            alt: 'Dona',
            text:'Anatomía de una dona',
            routeImg:'/anatomy/'
        },
        menu: [
            {
                name:'Proyectos',
                class:'projects',
                url:'/projects/'
            },
            {
                name:'Trabajando en',
                class:'working',
                url:'/working/'
            },
            {
                name:'Contacto',
                class:'contact',
                url:'/contact/'
            }
        ]
    } 
]

export default menus;