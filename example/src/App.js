import React from "react"

import { OnMountFadeIn } from "react-gsap-animations"
import "react-gsap-animations/dist/index.css"

const App = () => {
  return (
    <>
      <OnMountFadeIn
        wrapperElement="h1"
        options={{
          delay: 10,
          direction: "left",
          distance: 10
        }}
      >
        Hello
      </OnMountFadeIn>
    </>
  )
}

export default App
