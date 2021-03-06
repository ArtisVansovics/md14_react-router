import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import characters, { getCharacter, Character } from '../../Data/CharactersData';
import Button from '../../components/Button/Button';

const CharacterPage = () => {
  const navigate = useNavigate();
  const [currentCharacter, setCurrentCharacter] = useState<Character>();
  const { id } = useParams();

  useEffect(() => {
    const character = getCharacter(Number(id));

    if (character) {
      setCurrentCharacter(character);
    } else {
      navigate('/characters');
    }
  }, [id]);

  const prevCharacter = Number(id) - 1;
  const nextCharacter = Number(id) + 1;

  return (
    <div className="page">
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12">
            <div className="box">
              <h1 className="page__title">{currentCharacter?.name}</h1>
              <div className="row center-xs">
                <div className="col-xs-12 col-sm-6">
                  <div className="box">
                    <Button
                      title="Previous Character"
                      onClick={() => navigate(`/characters/${prevCharacter}`)}
                      disabled={prevCharacter === 0}
                    />
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <div className="box">
                    <Button
                      title="Next Character"
                      onClick={() => navigate(`/characters/${nextCharacter}`)}
                      disabled={nextCharacter === characters.length + 1}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
            <div className="box">
              <img
                className="img"
                src={currentCharacter?.image}
                alt={currentCharacter?.name}
              />
            </div>
          </div>
          <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
            <div className="box box--character-info">
              <p className="page__text">
                {`Name: ${currentCharacter?.name}`}
              </p>
              <p className="page__text">
                {`Species: ${currentCharacter?.species}`}
              </p>
              {currentCharacter?.type && (
                <p className="page__text">
                  {`Type: ${currentCharacter?.type}`}
                </p>
              )}
              <p className="page__text">
                {`Gender: ${currentCharacter?.gender}`}
              </p>
              <p className="page__text">
                {`Status: ${currentCharacter?.status}`}
              </p>
              <p className="page__text">
                {`Origin: ${currentCharacter?.origin.name}`}
              </p>
              <p className="page__text">
                {`Location: ${currentCharacter?.location.name}`}
              </p>
              <p className="page__text">
                {`Created: ${currentCharacter?.created}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterPage;
