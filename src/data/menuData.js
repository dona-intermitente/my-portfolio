import Dona from 'images/donut.svg';

const menus = [
    {
        image: {
            src: Dona,
            alt: 'Dona',
            text:'',
        },
        menu: [
            {
                name:'Proyectos',
                class:'projects',
                url:'/projects/'
            },
            {
                name:'Sobre mi',
                class:'working',
                url:'/anatomy/'
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