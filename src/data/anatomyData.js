import Dona from 'images/donut.svg';
import Pan from 'images/pan.svg';
import Dulse from 'images/dulse.svg';
import Deco from 'images/deco.svg';

const mapas = [
    {
        image: {
            src: Deco,
            alt: 'Dona',
        },
        menu: [
            {
                name:'Ingenio',
                class:'item1',
            },
            {
                name:'Pasión',
                class:'item2',
            },
        ]
    },
    {
        image: {
            src: Dulse,
            alt: 'Dona',
        },
        menu: [
            {
                name:'Empatia',
                class:'item1',
            },
            {
                name:'Lógica',
                class:'item2',
            },
        ]
    },
    {
        image: {
            src: Pan,
            alt: 'Dona',
        },
        menu: [
            {
                name:'Locura',
                class:'item1',
            },
            {
                name:'Optimismo',
                class:'item2',
            },
        ]
    },
    {
        image: {
            src: Dona,
            alt: 'Dona',
        },
        menu: [
            {
                name:"María Da Conceicao (sindi)",
                class:'item3',
            },
        ]
    }
]

export default mapas;