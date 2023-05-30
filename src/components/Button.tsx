import { FC, MouseEventHandler, PropsWithChildren } from 'react'

type ButtonProps = {
  disable?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
}
const Button: FC<PropsWithChildren<ButtonProps>> = ({
  onClick,
  disable,
  children,
}) => {
  return (
    <button
      disabled={disable}
      onClick={onClick}
      className="text-primary-foreground hover:bg-primary/90 focus-visible:ring-ring ring-offset-background inline-flex h-10 items-center justify-center rounded-md bg-amber-300 px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    >
      {children}
    </button>
  )
}

export default Button
