import React from 'react';
import Card, { CardImage, CardBody, CardFooter } from '../common/Card';
import Button from '../common/Button';
import '../../styles/components/GameCard.scss';

interface Game {
  id: string;
  title: string;
  description: string;
  price: number;
  coverImage: string;
  genre: string[];
  rating: number;
}

interface GameCardProps {
  game: Game;
  onPlay?: () => void;
  onDetails?: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onPlay, onDetails }) => {
  return (
    <Card variant="hover" padding="none" className="game-card">
      <CardImage
        src={game.coverImage}
        alt={game.title}
        aspectRatio="16/9"
        overlay={
          <div className="game-card__rating">
            ★ {game.rating.toFixed(1)}
          </div>
        }
      />
      
      <CardBody>
        <div className="game-card__genres">
          {game.genre.map((genre) => (
            <span key={genre} className="game-card__genre">
              {genre}
            </span>
          ))}
        </div>
        
        <h3 className="game-card__title">
          {game.title}
        </h3>
        
        <p className="game-card__description">
          {game.description}
        </p>
      </CardBody>

      <CardFooter>
        <div className="game-card__actions">
          <div className="game-card__price">
            ${game.price.toFixed(2)}
          </div>
          
          <div className="game-card__buttons">
            <Button
              variant="ghost"
              size="small"
              onClick={onDetails}
            >
              Details
            </Button>
            
            <Button
              variant="primary"
              size="small"
              onClick={onPlay}
            >
              Play Now
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default GameCard;