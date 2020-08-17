import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import Announcer from "../announcer";

function FocusReset({ location, children }) {
  const [previousLocation, setPreviousLocation] = useState("");
  const [shouldAnnounce, setShouldAnnounce] = useState(true);

  let focusRef = React.createRef();

  useEffect(() => {
    if (focusRef.current && previousLocation !== location.pathname) {
      setPreviousLocation(location.pathname);
      setShouldAnnounce(true);
      window.scroll(0, 0);
      focusRef.current.focus();
    }
  }, [focusRef, previousLocation, location.pathname]);

  let currentLocation;
  if (location.pathname.includes("dashboard")) {
    currentLocation = location.pathname.split(/[/-]/).join(" ").trim();
  } else {
    currentLocation = "Profiles Page";
  }

  return (
    <FocusContainer tabIndex="-1" ref={focusRef}>
      {shouldAnnounce ? (
        <Announcer
          announcement={`Navigated to ${currentLocation} • Tech Profiles, press tab for skip links`}
        />
      ) : null}
      <ul>
        <li>
          <a href={`${location.pathname}#main-content`} className="skip-link">
            <span>Skip to Main Content</span>
          </a>
        </li>

        {currentLocation === "Profiles Page" ? (
          <li>
            <a href={`${location.pathname}#filters`} className="skip-link">
              <span>Skip to Filters</span>
            </a>
          </li>
        ) : (
          <>
            <li>
              <a
                href={`${location.pathname}#page-navigation`}
                className="skip-link"
              >
                <span>Skip to Page Navigation</span>
              </a>
            </li>
            <li>
              <a
                href={`${location.pathname}#profile-card`}
                className="skip-link"
              >
                <span>Skip to User Card</span>
              </a>
            </li>
          </>
        )}
      </ul>
      {children}
    </FocusContainer>
  );
}

const FocusContainer = styled.div`
  .skip-link {
    position: absolute;
    top: 2%;
    left: -999px;
    z-index: 15;

    &:focus {
      left: 2%;
    }

    span {
      display: inline-block;
      padding: 0.7em;
      background-color: antiquewhite;
      border: solid;
    }
  }
`;

export default withRouter(FocusReset);
