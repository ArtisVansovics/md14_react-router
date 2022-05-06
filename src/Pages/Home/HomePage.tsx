import { useNavigate } from 'react-router-dom';
import rickAndMortyPoster from '../../assets/images/rick&morty.jpg';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-12 col-sm-8">
            <div className="box">
              <h1 className="page__title">Home</h1>
              <img
                className="img"
                src={rickAndMortyPoster}
                alt="Rick and Morty poster"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
