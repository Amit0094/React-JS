
function customRender(reactElement, container) {
    // version - 1
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)
    */

    // version - 2

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }

    container.appendChild(domElement)
}

// in customRender method i except where you call the function you just pass reactElement in this format , which is given below...

const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.getElementById('root')

customRender(reactElement, mainContainer)