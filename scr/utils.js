export function row(content, style){
    return `<div style="${style}" class="row">${content}</div>`
}

export function col(content, style){
    return `<div style="${style}" class="col-sm">${content}</div>`
}

export function css(style={}){
    const toString = key => `${key}: ${style[key]}`
    return Object.keys(style).map(toString).join(';') 
}