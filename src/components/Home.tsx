import React from 'react'
import Hero from './Hero'
import FeatureCard from './FeatureCard'
import '../styles/components/Home.scss'
import homeContent from '../data/homeContent.json'

interface HomeContent {
  hero: {
    title: string
    subtitle?: string
    backgroundImage?: string
  }
  features: {
    id: string
    title: string
    text: string
    image?: string
  }[]
}

const Home: React.FC = () => {
  const content = homeContent as unknown as { hero: HomeContent['hero'], features: HomeContent['features'] }
  const { hero, features } = content

  return (
    <main className="home-root">
      <Hero 
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        ctaText="Start Gaming"
        onCtaClick={() => console.log('CTA clicked')}
      />

      <section className="home-features">
        <div className="container">
          <h2 className="home-features__heading">Gaming Features</h2>
          <div className="home-features__grid">
            {features.map((feature) => (
              <FeatureCard 
                key={feature.id} 
                feature={feature} 
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home