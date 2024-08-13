import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>Custom App | chai</h1>
    </div>
  )
}

// react at the end evaluated the returning portion into object or tree structure and then injected into DOM


// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://www.google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit Google'
// }

//  It is a variable that holds a JSX element,
const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = 'chai aur react'

const reactElement = React.createElement(
  'a',
  {href:'https://google.com' , target:'_blank'},
  'click me to visit google',
  anotherUser
)

// createElement is automatically injected through babel
// and i create a element by this method which is reactElement

createRoot(document.getElementById('root')).render(

  <App /> 

)



// at the end reactElement or any jsx return by function converted into object so that's why we cannot write whole js code because in object we only write key value pair.... suppose with if else -- you just write into inside object it obesely popup some errors