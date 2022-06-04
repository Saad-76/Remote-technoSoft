import {React, useEffect} from "react";
import { useLocation } from "react-router-dom";import "./holders.css"

const Holders = () => {
  const routePath = useLocation();
  const onTop = () => {
    window.scrollTo(0, 4);
  }
  useEffect(() => {
    onTop()
  }, [routePath]);
  return (
    <>
      <div className="RoadmapOne-holder-background">
        <div className="holders-content-here">
          <h3><b> Legendary Reveal of 8 META STREET APES</b> </h3>
          <p>
            - 24hr First airdrop of <b>100,000$</b> to 8 Legendary NFT mint
            holders.
          </p>
          <p>
            - 48hr Giveaways of <b>100,000$</b> to the community in first 10 day
            of mint.
          </p>
          <p>-10days Holders wallets will be whitelisted for a new mint.</p>
          <p>
            - 25days Holders Airdrop of original 4k Render of 3D NFTs to the
            mint holders.
          </p>
          <p>
            - 30days Holders first exclusive invitation for <b>VIP</b> events,
            parties, and dinners in Miami, Toronto, London, and Dubai for mint
            holders.
          </p>
          <p>
            - 45days holders lucky draw for <b>3nights VIP</b> stay anywhere in
            the world for mint holders.
          </p>
          <p>
            - 50days Holders lucky draw for <b>50,000$</b> for mint holders.
          </p>
          <p>
            - 60days Holders exclusive invitation for <b>VIP</b> events,
            parties, and dinners in Miami,Toronto, London, and Dubai for mint
            holders.
          </p>
          <p className="style={text-align:center}">
            <b>Just imagine where we will be in 6 months.</b>
          </p>
          <p>
            - 75days Holder's wallets will be whitelisted for a limited
            exclusive mint pass.
          </p>
          <p>
            - 90days Holders Airdrop of Voxel avatars for the{" "}
            <b>@TheSandboxGame</b>. And yes, Voxel Apes are dope.
          </p>
          <p>
            -100days Holders lucky draw for <b>100,000$</b> for mint holders.
          </p>
          <p>
            -130days Holders access to <b>@TheSandbox</b> Metaverse.{" "}
          </p>
          <p>
            -180days Holders Airdrop of <b>2 Mystery boxes</b> to each NFT mint
            holder.
          </p>
          <p>
            - 200days Holders lucky draw for <b>200,000$</b> for mint holders.
          </p>
          <p>
            - 250days Holders <b>VIP</b> invitation to FORMULA 1 GRAND PRIX ABU
            DHABI EDITION
          </p>
          <p>
            - 280days Holders <b>VIP</b> invitation to NewYear parties in
            NewYork, Miami, Toronto, London, and Dubai for mint holders.
          </p>
          <p>
            - 300days Holders exclusive insight of <b>RoadMap 2.0</b> and
            activation of <b>2million USD</b> utilities for mint holders.{" "}
          </p>
        </div>
      </div>
    </>
  );
};
export default Holders;
