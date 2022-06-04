import React from "react";
import "./meetTeam.css";
import DiamondCopy from "../../assets/img/test-img/DiamondCopy.png";
import Captain from "../../assets/img/test-img/captain.jpg";
import General from "../../assets/img/test-img/General.jpg";
import Red_Yellow_Cap from "../../assets/img/test-img/Png/Red_Yellow_Cap.png";
import Son_of_Mask from "../../assets/img/test-img/Png/Son_of_Mask.png";
import Green_Glasses from "../../assets/img/test-img/Png/Green_Glasses.png";
import Spider_Ape from "../../assets/img/test-img/Png/Spider_Ape.png";
import Diamond_Eyes from "../../assets/img/test-img/Png/Diamond_Eyes.png";
import Commando from "../../assets/img/test-img/Jpeg/Commando.jpg";
import Gold_jacket from "../../assets/img/test-img/Jpeg/Gold_jacket.jpg";
import Black_Jacket from "../../assets/img/test-img/Jpeg/Black_Jacket.jpg";

const MeetTeam = () => {
  return (
    <>
      <div className="meet-our-team-outer">
        <h3 className="meet-team-heading">MEET THE TEAM</h3>
        <div className="col-md-12 pt-3">
          <div className="artist-section-part">
            <img className="diamond-image" src={Captain} alt="artist-image" />
            <h3><b>SATOSHI | ARTIST | FOUNDER</b></h3>
            <p className="artist-content"> 
              (<b>Founder</b> of META STREET APES, META GAME STUDIOS and Lead
              Digital Artist on the project)
            </p>
         
          </div>
        </div>
        <div className="col-md-12 pt-3">
          <div className="col-md-3 apes-inner-style">
          <img className="diamond-image" src={Commando} alt="" />
          <div className="team-image-pad">
            <h4 >GAME STORM STUDIOS </h4>  <p>DEVELOPER</p>
            </div>
          </div>
          <div className="col-md-3 apes-inner-style resp-image-pad">
          <img className="diamond-image" src={Gold_jacket} alt="" />
          <div className="team-image-pad">
            <h4 >FUEL LEADS  </h4>  <p>MARKETING</p>
            </div>
          </div>
          <div className="col-md-3 apes-inner-style resp-image-pad">
          <img className="diamond-image" src={Black_Jacket} alt="" />
          <div className="team-image-pad">
            <h4 >ALISA  </h4>  <p>  HEAD OF PR</p>
            </div>
          </div>
          <div className="col-md-3 apes-inner-style resp-image-pad">
            <img className="diamond-image" src={Green_Glasses} alt="" />
            <div className="team-image-pad">
            <h4 >ATLAS   </h4>  <p>PROJECT ADVISOR</p>
            </div>
          </div>
        </div>
        <div className="col-md-12 pt-3">
          <div className="col-md-3 apes-inner-style">
          <img className="diamond-image" src={Captain} alt="artist-image" />
            <div className="team-image-pad">
            <h4 >KRIOS </h4>  <p>HEAD MODERATOR</p>
            </div>
          </div>
          <div className="col-md-3 apes-inner-style resp-image-pad">
          <img className="diamond-image" src={Green_Glasses} alt="" />
            <div className="team-image-pad">
            <h4 >CHIEF </h4>  <p>MODERATOR</p>
            </div>
          </div>
          <div className="col-md-3 apes-inner-style resp-image-pad">
          <img className="diamond-image" src={Commando} alt="" />
            <div className="team-image-pad">
            <h4 >AHMED   </h4>  <p>MODERATOR</p>
            </div>
       
          </div>
          <div className="col-md-3 apes-inner-style resp-image-pad">
          <img className="diamond-image" src={Gold_jacket} alt="" />
            <div className="team-image-pad">
            <h4 >MALIK </h4>  <p>MODERATOR</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MeetTeam;
