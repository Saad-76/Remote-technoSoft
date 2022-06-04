import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./roadMapTwo.css";

const RoadMapTwo = () => {
  return (
    <>
      <div className="roadmap-two-heading-outer">
        <h3 className=" road-map-heading">ROADMAP: 2.0</h3>
      </div>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "transparent",
            color: "#fff",
            border: "none",
          }}
          iconStyle={{ background: "rgb(255,255,0)", color: "#fff" }}
        >
          <p> Play 2 Earn Game.</p>
          <p> Market place announcement.</p>
          <p> Airdrop of 2 Mystery boxes to each NFT holder.</p>
          <p> Partnership, a marketing campaign for P2E game.</p>
          <p> Release of Whitepaper and Tokenomics for our P2E game.</p>
          <p> Launch of game teaser.</p>
          <p> Distribution of tokens for long term holders.</p>
          <p> Market place available for P2E game NFT trades.</p>
          <p> A test run of the game exclusive for NFT holders.</p>
          <p>
            Roll out Global marketing campaign for P2E game with gaming
            publishers around the world.
          </p>
          <p> Global Launch of Play 2 Earn Game within Q4 2022 - Q1 2023.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "transparent",
            color: "#fff",
            border: "none",
          }}
          iconStyle={{ background: "rgb(255,255,0)", color: "#fff" }}
        >
          <h3 className="vertical-timeline-element-title">
            HOLDERS UTILITY 2.1 2 MILLION USD
          </h3>

          <p>
            We will surprise our holders with the unlocking of utilities 2.0.
          </p>
          <p>
            Utilities 2.0 will be unlocked only to the mint holders exclusively
            who have been holding long enough to reach level 2.0.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  );
};
export default RoadMapTwo;
