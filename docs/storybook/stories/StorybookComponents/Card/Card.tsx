import React, {ReactNode} from 'react'
import './Card.css'

interface CardProps extends React.Component {
  children: ReactNode
  style: React.CSSProperties
}

export const Card = ({children, style}: CardProps) => {
  return (
    <div className="Card" style={style}>
      {children}
    </div>
  )
}
