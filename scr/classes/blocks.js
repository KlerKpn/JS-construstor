import {row, col, css} from '../utils'

class Block {
    constructor(value, options){
        this.value = value
        this.options = options
    }
    toHTML (){
        throw new Error ('Метод tohtml не реализован')
    }
}

export class TitleBlock extends Block{
    constructor(value, options){
        super(value, options)
    }

    toHTML(){
        const {tag , style} = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(style))
    }
    
}

export class TextBlock extends Block{
    constructor(value, options){
        super(value, options)
    }

    toHTML(){
        const {style} = this.options
        return row(col(`<p>${this.value}</p>`), css(style))
    }
}

export class ColumnsBlock extends Block{
    constructor(value, options){
        super( value, options)
    }

    toHTML(){
        const {style} = this.options
        const html = this.value.map(col).join('')
        return row(html, css(style))    
    }
}

export class ImageBlock extends Block{
    constructor(value, options){
        super( value, options)
    }

    toHTML(){
        const {imageStyle ,style, alt=''} = this.options
        return row(`<img src="${this.value}" style="${css(imageStyle)}" alt=${alt} />`, css(style))
    }
}