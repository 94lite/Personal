import React from "react";
import Image from 'next/image'

const Timeline = props => {
  return (
    <div className="timeline-page">
      <div className="timeline-year">2013</div>
      <div className="timeline-section">
        <div className="timeline-section-block left">
          <div className="timeline-entry">
            <div className="timeline-entry-title">
              <hr/>
              <span className="timeline-entry-month">March</span>
              <hr className="static-rule" />
            </div>
            <div className="timeline-entry-content">
              <div>A Bachelor's Degree in Engineering</div>
              <div>at the University of Auckland</div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="timeline-section-block right">
          <Image
            src="/E-DME-V-White.png"
            width="846"
            height="326"
            style={{
              flexGrow: 1,
              height: 0,
              width: "100%",
              objectFit: "contain"
            }}
          />
        </div>
      </div>
      <div className="timeline-year">2016</div>
      <div className="timeline-section">
        <div className="timeline-section-block left">
          <div className="timeline-entry">
            <div className="timeline-entry-title">
              <hr/>
              <span className="timeline-entry-month">November</span>
              <hr className="static-rule" />
            </div>
            <div className="timeline-entry-content">
              <div>Completing the Bachelor's Degree</div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="timeline-section-block right"></div>
      </div>
      <div className="timeline-year">2018</div>
      <div className="timeline-section">
        <div className="timeline-section-block left">
          <Image
            src="/E-DECE-V-White.png"
            width="846"
            height="326"
            style={{
              flexGrow: 1,
              height: 0,
              width: "100%",
              objectFit: "contain"
            }}
          />
        </div>
        <hr/>
        <div className="timeline-section-block right">
          <div className="timeline-entry">
            <div className="timeline-entry-title">
              <hr className="static-rule" />
              <span className="timeline-entry-month">March</span>
              <hr/>
            </div>
            <div className="timeline-entry-content">
              <div>A Master's Degree in Engineering Studies</div>
              <div>at the University of Auckland</div>
            </div>
          </div>
        </div>
      </div>
      <div className="timeline-year">2019</div>
      <div className="timeline-section">
        <div className="timeline-section-block left">
          <Image
            src="/grad-at-raglan-2.jpeg"
            width="4096"
            height="2730"
            style={{
              flexGrow: 1,
              height: 0,
              width: "100%",
              objectFit: "cover",
              objectPosition: "50% 33%",
              filter: "grayscale(100%)"
            }}
          />
        </div>
        <hr/>
        <div className="timeline-section-block right">
          <div className="timeline-entry">
            <div className="timeline-entry-title">
              <hr className="static-rule" />
              <span className="timeline-entry-month">November</span>
              <hr/>
            </div>
            <div className="timeline-entry-content">
              <div>Completing the Master's Degree</div>
            </div>
          </div>
        </div>
      </div>
      <div className="timeline-section">
        <div className="timeline-section-block left">
          <div className="timeline-entry">
            <div className="timeline-entry-title">
              <hr/>
              <span className="timeline-entry-month">December</span>
              <hr className="static-rule" />
            </div>
            <div className="timeline-entry-content">
              <div>An Internship at Orion Health</div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="timeline-section-block right">
          <Image
            src="/internship-presentation.jpeg"
            width="1767"
            height="1216"
            style={{
              flexGrow: 1,
              height: 0,
              width: "100%",
              objectFit: "cover",
              objectPosition: "50% 40%",
              filter: "grayscale(100%)"
            }}
          />
        </div>
      </div>
      <div className="timeline-year">2020</div>
      <div className="timeline-section">
        <div className="timeline-section-block left">
          <div className="timeline-entry">
            <div className="timeline-entry-title">
              <hr/>
              <span className="timeline-entry-month">May</span>
              <hr className="static-rule" />
            </div>
            <div className="timeline-entry-content">
              <div>Recruited as a Graduate Engineer</div>
              <div>at Orion Health</div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="timeline-section-block right">
          <Image
            src="/Orion-Health-Logo.png"
            width="290"
            height="96"
            style={{
              flexGrow: 1,
              height: 0,
              width: "100%",
              objectFit: "contain",
              filter: "grayscale(100%)"
            }}
          />
        </div>
      </div>
      <div className="timeline-year">2021</div>
      <div className="timeline-section">
        <div className="timeline-section-block left">
          <div className="timeline-entry">
            <div className="timeline-entry-title">
              <hr/>
              <span className="timeline-entry-month">May</span>
              <hr className="static-rule" />
            </div>
            <div className="timeline-entry-content">
              <div>Promoted to Junior Software Engineer (I)</div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="timeline-section-block right"></div>
      </div>
      <div className="timeline-year">2022</div>
      <div className="timeline-section">
        <div className="timeline-section-block left">
        <div className="timeline-entry">
          <div className="timeline-entry-title">
              <hr/>
              <span className="timeline-entry-month">May</span>
              <hr className="static-rule" />
            </div>
            <div className="timeline-entry-content">
              <div>Promoted to Junior Software Engineer (II)</div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="timeline-section-block right"></div>
      </div>
      <div className="timeline-year">2023</div>
      <div className="timeline-section">
        <div className="timeline-section-block left">
        <div className="timeline-entry">
          <div className="timeline-entry-title">
              <hr/>
              <span className="timeline-entry-month">November</span>
              <hr className="static-rule" />
            </div>
            <div className="timeline-entry-content">
              <div>Promoted to Intermediate Software Engineer (I)</div>
            </div>
          </div>
        </div>
        <hr/>
        <div className="timeline-section-block right"></div>
      </div>
    </div>
  )
};

export default Timeline;