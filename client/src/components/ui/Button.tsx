import React, { CSSProperties, MouseEvent } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  children: React.ReactNode
  style?: CSSProperties
  className?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  ariaLabel?: string
  href?: string
}

const Button = ({
  children,
  onClick,
  className,
  style,
  ariaLabel,
  href,
  ...rest
}: Props) => {
  if (href) {
    return (
      <Link to={href}>
        <a
          aria-label={ariaLabel}
          style={style}
       
          {...rest}
        >
          {children}
        </a>
      </Link>
    )
  }
  return (
    <button
      onClick={onClick}
      style={style}
      aria-label={ariaLabel}
  
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button