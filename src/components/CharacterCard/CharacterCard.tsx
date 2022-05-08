import React, { FC } from 'react';
import './CharacterCard.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

type CharacterCardProps = {
  id: number;
  name: string;
  image: string;
  species: string;
  gender: string;
}

const CharacterCard:FC<CharacterCardProps> = (
  {
    id, image, name, gender, species,
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
      <div className="character-card__row">
        <div className="character-card__column">
          <p className="character-card__text">
            Species:
          </p>
          <p className="character-card__text">
            Gender:
          </p>
        </div>
        <div className="character-card__column flex-start">
          <p className="character-card__text">
            {species}
          </p>
          <p className="character-card__text">
            {gender}
          </p>
        </div>
      </div>
      <Button
        title="Learn More"
        onClick={() => navigate(`/characters/${id}`)}
      />
    </div>
  );
};

export default CharacterCard;
