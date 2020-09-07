import { useState } from "react"

type useShowCloseAnimationType = {
  showAnimation: string
  hideAnimation: string,
  duration: number,
  action: () => void
}

type useShowCloseAnimationData = {
  style: {animation: string}
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
    animation: `${show ? showAnimation : hideAnimation} ${duration}s`
  }

  const animationTrigger = () => {
    setShow(false)
  }

  const hideElement = () => {
    if(show) return;
    action()
  }


  return {
    style,
    animationTrigger,
    hideElement
  }

}