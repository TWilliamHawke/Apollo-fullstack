import { useState } from "react"

type useShowCloseAnimationType = {
  showAnimation: string
  hideAnimation: string,
  duration: number,
  action: () => void
}

type useShowCloseAnimationData = {
  style: {animation: string, transformOrigin: string}
  animationTrigger: () => void
  hideElement: () => void
}

export const useShowHideAnimation = ({
  showAnimation,
  hideAnimation,
  duration,
  action
}: useShowCloseAnimationType): useShowCloseAnimationData => {
  const [show, setShow] = useState(true)

  const style = {
    animation: `${show ? showAnimation : hideAnimation} ${duration}s`,
    transformOrigin: 'top'
  }

  const animationTrigger = () => {
    setShow(false)
  }

  const hideElement = () => {
    if(show) return;
    action()
    setShow(true)
  }


  return {
    style,
    animationTrigger,
    hideElement
  }

}