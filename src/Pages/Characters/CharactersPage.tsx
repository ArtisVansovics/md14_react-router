import { useEffect, useState } from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import { getCharacters, Character } from '../../Data/CharactersData';

const CharactersPage = () => {
  const [visibleCharacters, setVisibleCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const characters = getCharacters();
    setVisibleCharacters(characters);
  }, []);

  return (
    <div className="page">
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <div className="box">
              <h1 className="page__title">Characters</h1>
              <div className="card-container">
                {visibleCharacters.map(({
                  id, image, name, species, gender,
                }) => (
                  <CharacterCard
                    key={id}
                    id={id}
                    name={name}
                    image={image}
                    gender={gender}
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
