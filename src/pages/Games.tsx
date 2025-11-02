import React from 'react';
import GameCard from '../components/games/GameCard';
import '../styles/components/GameCard.scss';
import '../styles/components/Games.scss';

const Games: React.FC = () => {
  // TODO: Load games data from API or JSON file
  const games = [
    {
      id: '1',
      title: 'Space Adventure',
      description: 'Explore the vast universe in this epic space adventure game.',
      price: 29.99,
      rating: 4.5,
      genre: ['Adventure', 'Sci-Fi', 'Action'],
      releaseDate: '2024-03-01',
      developer: 'PlayX Studios',
      publisher: 'PlayX',
      coverImage: '/assets/games/space-adventure.jpg',
      screenshots: ['/assets/games/space-adventure-1.jpg'],
      features: ['Epic storyline', 'Stunning graphics', 'Multiplayer mode'],
      systemRequirements: {
        minimum: {
          os: 'Windows 10',
          processor: 'Intel i5',
          memory: '8 GB RAM',
          graphics: 'NVIDIA GTX 1060',
          storage: '50 GB'
        },
        recommended: {
          os: 'Windows 11',
          processor: 'Intel i7',
          memory: '16 GB RAM',
          graphics: 'NVIDIA RTX 3060',
          storage: '50 GB'
        }
      }
    }
    // Add more games here
  ];

  return (
    <div className="games-page">
      <h1>Our Games</h1>
      <div className="games-grid">
        {games.map(game => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};

export default Games;