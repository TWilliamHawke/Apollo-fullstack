import { useState } from 'react'

type ShowCloseAnimationInput = {
  showAnimation: string
  hideAnimation: string
  duration: number
  action: () => void
}

type ShowCloseAnimationOutput = {
  style: { animation: string; transformOrigin: string }
  onAnimationEnd: () => void
  hideAnimationTrigger: () => void
}

type HookType = (data: ShowCloseAnimationInput) => ShowCloseAnimationOutput

export const useShowHideAnimation: HookType = ({
  showAnimation,
  hideAnimation,
  duration,
  action,
}) => {
  const [show, setShow] = useState(true)

  const style = {
    animation: `${show ? showAnimation : hideAnimation} ${duration}s`,
    transformOrigin: 'top',
  }

  const animationTrigger = () => {
    setShow(false)
  }

  const hideElement = () => {
    if (show) return
    action()
    setShow(true)
  }

  return {
    style,
    onAnimationEnd: hideElement,
    hideAnimationTrigger: animationTrigger,
  }
}
