import { Typography } from '../Typography/Typography'

export type SectionTitleProps = {
  title: string;
  subtitle: string;
  variant?: 'primary' | 'secondary'
}
export const SectionTitle = ({ title, subtitle, variant = 'primary' }: SectionTitleProps) => {

  const mb = variant === "primary" ? "mb-[2.8125rem]" :  "mb-[0rem]"
  return (
    <div className="flex flex-col max-w-[696px] text-center">
      <Typography variant="h1" className={variant === "primary" ? "text-primary-800" : "text-gray-white"}>
        {title}
      </Typography>
      <Typography
        variant="bodyl3"
        className={`${variant === "primary" ? "text-gray-400" : 'text-gray-50'} mt-6 ${mb}`}
      >
        {subtitle}
      </Typography>
    </div>
  )
}
