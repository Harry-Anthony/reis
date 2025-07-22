import { Typography } from '../Typography/Typography'

type ButtonProps = {
  variant: 'outline' | 'contained' | 'primary' | 'active'
  title: string
  isActive?: boolean
  customStyle?: string
}
export const Button = ({
  variant,
  title,
  isActive,
  customStyle,
}: ButtonProps) => {
  const buttonVariants = {
    outline:
      'bg-transparent border border-white text-white cursor hover:bg-primary-500 hover:border-primary-500',
    contained: 'bg-primary-500 text-white hover:bg-primary-400',
    primary: 'bg-primary-50 text-primary-500',
    active: 'bg-primary-500 text-white',
  }

  const buttonStyle = buttonVariants[variant]

  return (
    <div className={`flex flex-col items-center ${customStyle}`}>
      <button
        className={`transition duration-300 px-6 py-3 rounded-sm cursor-pointer ${buttonStyle}`}
      >
        <Typography variant="bodyreg2">{title}</Typography>
      </button>
      {isActive && <div className="triangle-up self-center mt-[-5px]"></div>}
    </div>
  )
}
