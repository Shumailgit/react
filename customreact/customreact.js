function customRender(reactElement,container){
/*
const domElement=document.createElement(reactElement.type)
domElement.innerHTML=reactElement.childen
domElement.setAttribute('href',reactElement.props.href)
domElement.setAttribute('target',reactElement.props.target)
*/
const domElement=document.createElement(reactElement.type)
domElement.innerHTML=reactElement.childen
for(const prop in reactElement.props){
    if(prop=='children')continue
        domElement.setAttribute(prop,reactElement.props[prop])
    
}
container.appendChild(domElement)
}
const reactElement={
    type:'a',
    props:{
        href:"https://google.com",
        target:'_blank'
    },
    childen:'Click here to open google'
}
const mainContainer=document.querySelector('#root')

customRender(reactElement,mainContainer)