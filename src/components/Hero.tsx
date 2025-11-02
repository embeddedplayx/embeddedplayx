import React from 'react'
import '../styles/components/Hero.scss'
import Button from './common/Button'

interface HeroProps {
  title: string
  subtitle?: string
  backgroundImage?: string
  ctaText?: string
  onCtaClick?: () => void
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  backgroundImage,
  ctaText,
  onCtaClick
}) => {
  const style = backgroundImage ? {
    backgroundImage: `url(${backgroundImage})`
  } : undefined

  return (
    <section className="hero" style={style}>
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="hero__title">{title}</h1>
        {subtitle && (
          <p className="hero__subtitle">{subtitle}</p>
        )}
        {ctaText && (
          <div className="hero__cta">
            <Button 
              variant="primary"
              size="large"
              onClick={onCtaClick}
            >
              {ctaText}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Hero