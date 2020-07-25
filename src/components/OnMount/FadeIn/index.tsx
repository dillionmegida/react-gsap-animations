import React, { useEffect, useRef } from "react"
import { TweenMax, Power3 } from "gsap"

interface Props {
  wrapperElement: any
  children: object
  options: { direction: string; distance: number; delay: number }
}

/**
 * Fade in component on mount, direction also application
 */
const OnMountFadeIn = ({
  wrapperElement = "div",
  children,
  options: { direction, distance = 0, delay = 0.5 },
  ...props
}: Props) => {
  const elRef = useRef(null)
  const Component = wrapperElement

  let directionToFade: object

  switch (direction) {
    case "right":
      directionToFade = { x: distance }
      break
    case "left":
      directionToFade = { x: -distance }
      break
    case "up":
      directionToFade = { y: distance }
      break
    case "down":
      directionToFade = { y: -distance }
      break
    default:
      directionToFade = { y: distance }
  }

  useEffect(() => {
    const currentElement = elRef.current
    TweenMax.to(currentElement, { css: { visibility: "visible" } })

    TweenMax.from(currentElement, delay, {
      ...directionToFade,
      opacity: 0,
      delay: Power3.easeIn
    })
  }, [elRef])

  return (
    <Component {...props} ref={elRef}>
      {children}
    </Component>
  )
}

export default OnMountFadeIn
