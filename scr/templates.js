import {row, col, css} from './utils'

function title(block){
    const {tag , style} = block.options
    return row(col(`<${tag}>${block.value}</${tag}>`), css(style))
}

function text(block){  
    const {style} = block.options
    return row(col(`<p>${block.value}</p>`), css(style))
}

function columns(block){ 
    const {style} = block.options
    const html = block.value.map(col).join('')
    return row(html, css(style))    
}

function image(block){ 
    return row(`<img scr="${block.value}">`)
}

export const templates = {
    title,
    text,
    columns,
    image,
}