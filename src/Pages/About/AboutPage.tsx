import rickAndMortyTitle from '../../assets/images/rick&morty_title.png';

const AboutPage = () => (
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
      <div className="row center-xs">
        <div className="col-xs-12 col-sm-8 col-md-6">
          <div className="box">
            <p className="page__about">
              {/* eslint-disable-next-line max-len */}
              Rick and Morty is the Emmy award-winning half-hour animated hit comedy series on Adult Swim that follows a sociopathic genius scientist who drags his inherently timid grandson on insanely dangerous adventures across the universe. Rick Sanchez is living with his daughter Beth’s family and constantly bringing her, his son-in-law Jerry, granddaughter Summer, and grandson Morty into intergalactic escapades.
            </p>
            <p className="page__about">
              {/* eslint-disable-next-line max-len */}
              Rick and Morty stars Justin Roiland (Adventure Time), Sarah Chalke (Scrubs), Chris Parnell (Saturday Night Live), and Spencer Grammer (Greek). The series is created by Dan Harmon (Community) and Roiland, who also serve as executive producers.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AboutPage;
