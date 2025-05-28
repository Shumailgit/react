import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
const reactElement={
    type:'a',
    props:{
        href:"https://google.com",
        target:'_blank'
    },
    childen:'Click here to open google'
}
function MyApp(){
    return(
        <div>
            <h1>My app</h1>
        </div>
    )
}
const AnotherElement=(
    <a href="https://google.com" target='_blank'>Visit Google</a>
)
const areactElement=React.createElement(
    'a',
    {href:'https://google.com', target:"_blank"},'Click here to open google'
)
createRoot(document.getElementById('root')).render(

    areactElement

)
