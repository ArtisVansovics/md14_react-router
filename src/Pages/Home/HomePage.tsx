import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1 className="page__title">Home</h1>
    </div>
  );
};

export default HomePage;
