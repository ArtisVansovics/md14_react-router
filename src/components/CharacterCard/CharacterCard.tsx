import React, { FC } from 'react';
import './CharacterCard.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

type CharacterCardProps = {
  id: number;
  name: string;
  image: string;
  species: string;
  origin: string;
}

const CharacterCard:FC<CharacterCardProps> = (
  {
    id, image, name, origin, species,
  },
) => {
  const navigate = useNavigate();

  return (
    <div className="character-card">
      <img
        className="character-card__img"
        src={image}
        alt={name}
      />
      <h3 className="character-card__title">
        {name}
      </h3>
      <p className="character-card__text">
        {`Species: ${species}`}
      </p>
      <p className="character-card__text">
        {`Origin: ${origin}`}
      </p>
      <Button
        title="Learn More"
        onClick={() => navigate(`/characters/${id}`)}
      />
    </div>
  );
};

export default CharacterCard;
