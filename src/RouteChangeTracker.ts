import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const RouteChangeTracker = () => {
  const location = useLocation();
  const [initialized, setInitialized] = useState(false);

  /* localhost는 인지 못하게  */
  useEffect(() => {
    if (!window.location.href.includes("localhost")) {
      ReactGA.initialize(
        process.env.REACT_APP_GOOGLE_ANALYTICKS_TRACKING_ID as string
      );
    }
    setInitialized(true);
  }, []);

  useEffect(() => {
    if (initialized) {
      ReactGA.pageview(location.pathname + location.search);
    }
  }, [initialized, location]);
};

export default RouteChangeTracker;
