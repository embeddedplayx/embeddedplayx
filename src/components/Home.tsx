import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Hero from './Hero';
import FeatureCard from './FeatureCard';
import GameCard from './games/GameCard';
import Button from './common/Button';
import '../styles/components/Home.scss';
import homeContent from '../data/homeContent.json';

interface HomeContent {
  hero: {
    title: string;
    subtitle?: string;
    backgroundImage?: string;
  };
  features: {
    id: string;
    title: string;
    text: string;
    image?: string;
  }[];
}

const Home: React.FC = () => {
  const content = homeContent as unknown as { hero: HomeContent['hero'], features: HomeContent['features'] };
  const { hero, features } = content;

  return (
    <main className="home">
      {/* Hero Banner Section */}
      <Hero 
        title={hero.title}
        subtitle={hero.subtitle}
        backgroundImage={hero.backgroundImage}
        ctaText="Start Gaming"
        onCtaClick={() => console.log('CTA clicked')}
      />

      {/* Features Section */}
      <section className="home__features">
        <div className="container">
          <h2>Why Choose PlayX?</h2>
          <div className="home__features-grid">
            {features.map((feature) => (
              <FeatureCard 
                key={feature.id}
                feature={feature}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Games Section */}
      <section className="home__games">
        <div className="container">
          <h2>Popular Games</h2>
          <div className="home__games-grid">
            <GameCard
              game={{
                id: "1",
                title: "Adventure Quest",
                description: "Embark on an epic journey",
                price: 29.99,
                coverImage: "/assets/game1.jpg",
                genre: ["Adventure", "RPG"],
                rating: 4.5
              }}
              onPlay={() => console.log("Play Adventure Quest")}
              onDetails={() => console.log("View Adventure Quest details")}
            />
            <GameCard
              game={{
                id: "2",
                title: "Space Warriors",
                description: "Conquer the galaxy",
                price: 24.99,
                coverImage: "/assets/game2.jpg",
                genre: ["Action", "Sci-Fi"],
                rating: 4.8
              }}
              onPlay={() => console.log("Play Space Warriors")}
              onDetails={() => console.log("View Space Warriors details")}
            />
            <GameCard
              game={{
                id: "3",
                title: "Racing Legends",
                description: "Feel the speed",
                price: 19.99,
                coverImage: "/assets/game3.jpg",
                genre: ["Racing", "Sports"],
                rating: 4.2
              }}
              onPlay={() => console.log("Play Racing Legends")}
              onDetails={() => console.log("View Racing Legends details")}
            />
          </div>
          <div className="home__games-cta">
            <Button variant="secondary" size="large">View All Games</Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="home__about">
        <div className="container">
          <div className="home__about-grid">
            <div className="home__about-content">
              <h2>About PlayX</h2>
              <p>PlayX is your ultimate destination for online gaming entertainment. We provide a seamless gaming experience with a vast collection of high-quality games.</p>
              <p>Our platform is built with the latest technology to ensure smooth gameplay and exceptional performance.</p>
              <Button variant="outline" size="medium">Learn More</Button>
            </div>
            <div className="home__about-image">
              <img src="/assets/about.jpg" alt="About PlayX" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="home__video">
        <div className="container">
          <div className="home__video-wrapper">
            <video poster="/assets/video-poster.jpg" controls>
              <source src="/assets/promo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="home__events">
        <div className="container">
          <h2>Upcoming Events</h2>
          <div className="home__events-grid">
            <div className="home__event-card">
              <div className="home__event-date">
                <span className="day">15</span>
                <span className="month">NOV</span>
              </div>
              <div className="home__event-content">
                <h3>Gaming Tournament</h3>
                <p>Join our monthly gaming tournament and win exciting prizes!</p>
                <Button variant="text">Learn More</Button>
              </div>
            </div>
            <div className="home__event-card">
              <div className="home__event-date">
                <span className="day">20</span>
                <span className="month">NOV</span>
              </div>
              <div className="home__event-content">
                <h3>New Game Launch</h3>
                <p>Be the first to experience our latest game release!</p>
                <Button variant="text">Register Now</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home