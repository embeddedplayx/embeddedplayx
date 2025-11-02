import React from 'react'
import '../styles/components/FeatureCard.scss'

interface Feature {
  id: string
  title: string
  text: string
  image?: string
}

interface FeatureCardProps {
  feature: Feature
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="feature-card">
      {feature.image && (
        <div className="feature-card__media">
          <img src={feature.image} alt={feature.title} />
        </div>
      )}
      <div className="feature-card__content">
        <h3 className="feature-card__title">{feature.title}</h3>
        <p className="feature-card__text">{feature.text}</p>
      </div>
    </div>
  )
}

export default FeatureCard