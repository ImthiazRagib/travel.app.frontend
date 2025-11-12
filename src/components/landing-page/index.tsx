import React from 'react';
import FlightSearch from '../features/flight/flight-search';
import LocationOffers from '../location-offers';
import FullWidthAd from '../primary/advertise/full-width-ad';
import FlightSearchBox from '../features/flight/flight-search-box';

const LandingPage: React.FC = () => {
    return (
        <div className="landing-page">
            {/* <FlightSearch /> */}
            <FlightSearchBox />
            <LocationOffers />
            <FullWidthAd
                imageSource="https://storage.googleapis.com/gz-main-prod-main/media/campaign/img_92fc9d8c-edc1-4456-a53e-23b8f63620cc.jpg"
                height={300}
                duration={10000}
                link="https://x.com"
            />
        </div>
    );
};

export default LandingPage;
