export function row(content, style){
    return `<div style="${style}" class="row">${content}</div>`
}

export function col(content, style){
    return `<div style="${style}" class="col-sm">${content}</div>`
}

export function css(style={}){
    if(typeof style === 'string') return style
    const toString = key => `${key}: ${style[key]}`
    return Object.keys(style).map(toString).join(';') 
}

export function block(type){
    return `
    <form name="${type}">
        <h5>${type}</h5>
        <div class="form-group">
            <input class='form=control form-control-sm' name="value" placeholder="value">
        </div>
        <div class="form-group">
            <input class='form=control form-control-sm' name="styles" placeholder="styles">
        </div>
        <button type="submit" class="btn btn-primary btn-sm" >Добавить</button>
    </form>
    <hr>
    `
}