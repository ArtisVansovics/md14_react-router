import { useNavigate } from 'react-router-dom';
import rickAndMortyTitle from '../../assets/images/rick&morty_title.png';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
            <div className="box">
              <h1 className="page__title">About</h1>
              <img
                className="img"
                src={rickAndMortyTitle}
                alt="Rick and Morty title"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
