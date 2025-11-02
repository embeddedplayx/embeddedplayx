import React from 'react';
import FeatureCard from '../components/FeatureCard';
import '../styles/components/FeatureCard.scss';
import '../styles/components/About.scss';

const About: React.FC = () => {
  const features = [
    {
      id: 'mission',
      title: 'Our Mission',
      text: 'To provide high-quality, accessible gaming experiences to players around the world.',
      image: '/assets/icons/mission.svg'
    },
    {
      id: 'innovation',
      title: 'Innovation',
      text: 'We constantly push the boundaries of what\'s possible in browser-based gaming.',
      image: '/assets/icons/innovation.svg'
    },
    {
      id: 'community',
      title: 'Community',
      text: 'Building a vibrant, inclusive gaming community where everyone belongs.',
      image: '/assets/icons/community.svg'
    }
  ];

  return (
    <div className="about-page">
      <section className="hero">
        <h1>About PlayX</h1>
        <p className="subtitle">
          We're passionate about creating immersive gaming experiences that bring people together.
        </p>
      </section>

      <section className="features">
        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              feature={feature}
            />
          ))}
        </div>
      </section>

      <section className="story">
        <h2>Our Story</h2>
        <p>
          Founded in 2024, PlayX was born from a simple idea: make high-quality gaming accessible to everyone,
          regardless of their device or location. What started as a small team of passionate gamers has grown
          into a thriving platform that serves players worldwide.
        </p>
      </section>

      <section className="team">
        <h2>Our Team</h2>
        <p>
          We're a diverse team of developers, designers, and gaming enthusiasts working together to create
          the best possible gaming experience for our community.
        </p>
      </section>
    </div>
  );
};

export default About;