import React, { Component, ReactNode } from 'react';

type PropsType = {
  children: ReactNode
}

type StateType = {
  hasError: boolean
}

class ErrorBoundary extends Component<PropsType, StateType> {

  state = {
    hasError: false
  }

  static getDerivedStateFromError(): StateType {
    return {
      hasError: true
    }
  } 

  render(): ReactNode {
    const { hasError } = this.state

    if(!hasError) return this.props.children
    
    return (
      <div className='container mt-5'>
        <p className='error'>Something went wrong...</p>
      </div>
    );
  }
}

export default ErrorBoundary;