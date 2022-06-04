import {React, useEffect} from "react";
import { useLocation } from "react-router-dom";import "./launch.css";

const Launch = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 4);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);
  return (
    <>
      <div className="background-color-launch">
        <div className="launch-content-here">
          <h3><b>LAUNCH 1.1</b> </h3>
          <p>
            Launch of our Discord, Website, and all other social media
            channels.
          </p>
          <p> Building a strong community, with over 150k+ in our Discord.</p>
          <p>
            Utilities announcement for mint holders of <b>1million USD</b>.
          </p>
          <p>
            Roll out an International marketing campaign with the biggest
            billboards the NFT world has yet to see, including Time Square.
          </p>
          <p>
            Release of META STREET APES promotional Rap in collaboration with
            leading rappers.
          </p>
          <p>
            OnBoard Influencers, Athletes, Singers, Producers & Successful
            community around the world, with highest social media reach.
          </p>
          <p>META STREET APES art sneak peek. </p>
          <p>META STREET APES art sneak peek. </p>
          <p>Competitions for the OG whitelist/500.</p>
          <p>Community whitelist/2000.</p>
          <p>
            Daily giveaway<b> whitelist spot, free mint spot and 1000$</b> to
            most active participating members.
          </p>





        </div>
      </div>
    </>
  );
};
export default Launch;
