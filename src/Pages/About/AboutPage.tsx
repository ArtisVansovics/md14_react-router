import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1 className="page__title">About</h1>
    </div>
  );
};

export default AboutPage;
