import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import { getCharacters, Character } from '../../Data/CharactersData';
import rickAndMortyTitle from '../../assets/images/rick&morty_title.png';

const CharactersPage = () => {
  const [visibleCharacters, setVisibleCharacters] = useState<Character[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const characters = getCharacters();
    setVisibleCharacters(characters);
  });

  return (
    <div className="page">
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <div className="box">
              <h1 className="page__title">Characters</h1>
              <div className="card-container">
                {visibleCharacters.map(({
                  id, image, name, species, origin,
                }) => (
                  <CharacterCard
                    id={id}
                    name={name}
                    image={image}
                    origin={origin.name}
                    species={species}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharactersPage;
