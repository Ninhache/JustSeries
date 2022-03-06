
const content = [];

let index = 1;

content.push(`<h2>HeyN${index++}</h2>`)
content.push(`<h2>HeyN${index++}</h2>`)
content.push(`<h2>HeyN${index++}</h2>`)

const MainPage = () => {
    return `<div><h1>Mainpage....</h1>${content.join("")}<div>`
}

MainPage.add = () => {
    content.push(`<h2>HeyN${index++}</h2>`)
}



export { MainPage }