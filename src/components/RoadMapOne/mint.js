import {React, useEffect} from "react";
import { useLocation } from "react-router-dom";

import "./mint.css";

const Mint = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 4);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);
  return (
    <>
      <div className="background-color-mint">
        <div className="mint-content-here">
          <h3>MINT 1.3</h3>
          <p>
            - 8888 NFT collection of META STREET APES will be minted on the
            Ethereum blockchain.
          </p>
          <p>- Mint price TBA</p>
          <p>- OpenSea's target floor price is 8 Ethereum.</p>
          <p>
            - We are focused on one thing making holder’s utilities the most
            iconic in any NFT project. 1million USD allocation for 2022.
          </p>
          <p>
            - We are focused on one thing making holder’s utilities the most
            iconic in any NFT project. 1million USD allocation for 2022.
          </p>
          <p>
            - Implementation of the marketing campaign for the lead up to Reveal
            Day.
          </p>
          <p>- Legendary Reveal of 8 META STREET APES </p>
        </div>
      </div>
    </>
  );
};
export default Mint;
