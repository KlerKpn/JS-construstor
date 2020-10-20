import image from './assets/134.png'
// const image = require('./assets/134.png')
import {TitleBlock, TextBlock, ColumnsBlock, ImageBlock} from './classes/blocks'

export const model = [
    new TitleBlock ( 'JS Constructor', { tag:'h2',
    style: {
        background: 'linear-gradient(to right, #ff0099, #493240)',
        color: '#fff',
        padding: '1.5rem',
        'text-align': 'center'
    }}
    ),

    new TextBlock ('Something cool', {
        style: {
            background: 'linear-gradient(to right, #210e44, #ff0999)',
            color: '#fff',
            'font-weight': 'bold',
            'font-size': '1.5rem',
            padding: '1rem',
        }
    }),

    new ImageBlock(image, {
        style: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyle:{
            width: '500px',
            height: 'auto'
        },
        alt: "картинка"
    }),

    new ColumnsBlock([
        'Приложение искючительно на чистом JavaScript, без использования библиотек',
        'Приложение искючительно на чистом JavaScript, без использования библиотек',
        'Приложение искючительно на чистом JavaScript, без использования библиотек'
    ], {
        style: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '1.5rem',
            'font-size': '1.3rem',   
        }
    })    
]