import { Icon } from '../icons/Icon'
import { Typography } from '../Typography/Typography'

type AppLogoProps = {
  variant?: 'primary' | 'secondary'
}
export const AppLogo = ({ variant = 'primary' }: AppLogoProps) => {
  const variants = {
    primary: 'flex text-white flex-row items-center',
    secondary: 'flex text-primary-500 flex-row items-center',
  };
  const logoVariant = variants[variant];
  return (
    <div
      className={logoVariant}
    >
      <Icon width={44} height={44} icon="HouseLine" />
      <div className="flex flex-col ml-2">
        <span className="leading-6 font-inter font-semibold text-2xl">
          REIS
        </span>
        <Typography className="leading-4" variant={'bodys3'}>
          Real State
        </Typography>
      </div>
    </div>
  )
}
