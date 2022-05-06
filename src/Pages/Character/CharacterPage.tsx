import { useNavigate } from 'react-router-dom';

const CharacterPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1 className="page__title">Character</h1>
    </div>
  );
};

export default CharacterPage;
