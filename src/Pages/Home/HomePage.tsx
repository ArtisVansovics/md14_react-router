import rickAndMortyPoster from '../../assets/images/rick&morty.jpg';

const HomePage = () => (
  <div className="page">
    <div className="container">
      <div className="row center-xs">
        <div className="col-xs-12 col-sm-8">
          <div className="box">
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

export default HomePage;
