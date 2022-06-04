import FiveCharacters from "../../../assets/img/test-img/FiveCharacters.png";
import Image from "../../../assets/img/bg-img/bread.png";

const HeroContainer = () => {
  return (
    <>
      {/* <div className="homepage-image">
        <img src={FiveCharacters} alt="FiveCharacters" width="110%" />
      </div>
      <div>
        <div className="join-dicord-home-button">
          <a href="https://discord.gg/c6KVnyUX" title="" target="_blank">
            <button className=" join-discord-button">Join Our Team</button>
          </a>
        </div>
      </div> */}
      <div className="">
        <section className="hero- moving " id="">
          <div className="moving-bg "></div>

          <div className="col-md-12  home-content-style">
            <div className="col-md-6 ">
              <h1>
                {/* CONTACT<br></br> */}
                <span className="gradient-text">REMOTE TECHNO SOFT</span>{" "}
              </h1>
              <h1>
                SOFTWARE<br></br>
                <span className="gradient-text">COMPANY.</span>{" "}
              </h1>
            </div>
            <div className="col-md-6">
              <img src={Image} height="800px" width="500px" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroContainer;
