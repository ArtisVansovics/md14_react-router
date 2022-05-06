import { useNavigate } from 'react-router-dom';

const CharactersPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1 className="page__title">Characters</h1>
    </div>
  );
};

export default CharactersPage;
