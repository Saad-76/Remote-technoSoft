import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Link } from "react-router-dom";
import "./roadMapOne.css";

const RoadMapOne = () => {
  return (
    <>
      <div className="roadmap-one-outer">
        <div className="road-map-heading-outer">
          <h1 className=" road-map-heading">OUR SERVICES</h1>
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
            <h3 className="vertical-timeline-element-title">WEB DEVELOPMENT</h3>
            <p>
              lorem Ipsm Lorem Ipsm lorem Ipsm Lorem Ipsm lorem Ipsm Lorem
              Ipsmlorem Ipsm Lorem
            </p>
            <p>
              {" "}
              lorem Ipsm Lorem Ipsm lorem Ipsm Lorem Ipsm lorem Ipsm Lorem
              Ipsmlorem Ipsm Lorem{" "}
            </p>

            {/* --------------launch-modal------------- */}
            <p
              className="roadmapOne-read-more"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
             HOW WE WORK??
            </p>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class=" modal-background-launch">
                  <div class="modal-body launch-modal-body">
                    <div className="background-color-launch-modal">
                      <div className="launch-content-here">
                        <h3>
                          <b>WEB DEVELOPMENT</b>
                        </h3>
                        <p>
                          lorem Ipsm Lorem Ipsm lorem Ipsm Lorem Ipsm lorem Ipsm
                          Lorem Ipsmlorem Ipsm Lorem Ipsmlorem Ipsm Lorem
                          Ipsmlorem Ipsm Lorem Ipsm lorem Ipsm Lorem Ipsm
                        </p>
                        <div class="close-button-modal launch-close-button">
                          <button
                            type="button"
                            className="close-button-launch-inner"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
            <h3 className="vertical-timeline-element-title">WEB DEVELOPMENT</h3>
            <p>
              lorem Ipsm Lorem Ipsm lorem Ipsm Lorem Ipsm lorem Ipsm Lorem
              Ipsmlorem Ipsm Lorem
            </p>
            <p>
              {" "}
              lorem Ipsm Lorem Ipsm lorem Ipsm Lorem Ipsm lorem Ipsm Lorem
              Ipsmlorem Ipsm Lorem{" "}
            </p>
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
            <h3 className="vertical-timeline-element-title">WEB DEVELOPMENT</h3>
            <p>
              lorem Ipsm Lorem Ipsm lorem Ipsm Lorem Ipsm lorem Ipsm Lorem
              Ipsmlorem Ipsm Lorem
            </p>
            <p>
              {" "}
              lorem Ipsm Lorem Ipsm lorem Ipsm Lorem Ipsm lorem Ipsm Lorem
              Ipsmlorem Ipsm Lorem{" "}
            </p>
            {/* -----------------mint modal---------- */}

            <p
              className="roadmapOne-read-more"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#mintModal"
            >
           How We Work??
            </p>

            <div
              class="modal fade"
              id="mintModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content modal-background-mint">
                  <div class="modal-body verticle-scroller-style modal-background-mint">
                    <div className="background-color-mint-modal">
                      <div className="mint-modal-content">
                        <h3 className="mint-heading-style">
                          <b>WEB DEVELOPMENT</b>
                        </h3>

                        <p>
                          lorem Ipsm Lorem Ipsm lorem Ipsm Lorem Ipsm lorem Ipsm
                          Lorem Ipsmlorem Ipsm Lorem
                        </p>
                        <p>
                          {" "}
                          lorem Ipsm Lorem Ipsm lorem Ipsm Lorem Ipsm lorem Ipsm
                          Lorem Ipsmlorem Ipsm Lorem{" "}
                        </p>

                        <div class="close-button-modal mint-modal-close">
                          <button
                            type="button"
                            className="mint-close-inner"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </VerticalTimelineElement>
    
        </VerticalTimeline>
      </div>
    </>
  );
};
export default RoadMapOne;
