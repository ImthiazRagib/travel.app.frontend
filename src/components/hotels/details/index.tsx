import React from 'react';
import HotelDetailsPage from './hotel-details';
import HotelDescription from './hotel-description';

const HotelDetails: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen gap-4">
            <HotelDetailsPage name='The Palm Resort' location='Cox’s Bazar, Bangladesh' rating={4.5} pricePerNight={120} images={['https://dynamic-media-cdn.tripadvisor.com/media/photo-o/28/66/e0/f5/hotel-the-cox-today.jpg?w=900&h=500&s=1', "https://hotelthecoxtoday.com/img/gallery/gallery012.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHrL6RH1H_SMDn81DOHgw_py-8ksYvu5dUeoNUrArhfHzWF06icnBH6iRuAPq2CzaGi7A&usqp=CAU"]} description='A luxurious resort with a beautiful view of the sea.' amenities={['Free Wi-Fi', 'Pool', 'Gym']} />

            <HotelDescription description="<h2>About the Hotel</h2>
    <p>
      Nestled along the beautiful coastline, <strong>Sea View Resort</strong> offers a serene escape 
      with panoramic ocean views. Guests can enjoy <em>world-class amenities</em> and unmatched hospitality. 
    </p>

    <h3>Highlights</h3>
    <ul>
      <li>🏖️ Private beach access</li>
      <li>🍽️ 24-hour in-room dining</li>
      <li>💆 Full-service spa and wellness center</li>
      <li>🌐 Complimentary high-speed Wi-Fi</li>
    </ul>

    <h3>Policies</h3>
    <p>
      Check-in time is <strong>2:00 PM</strong> and check-out is <strong>11:00 AM</strong>. 
      Early check-in and late check-out are subject to availability and may incur additional charges.
    </p>

    <blockquote>
      “Your comfort and satisfaction are our top priorities.”
    </blockquote>" />
        </div>
    );
};

export default HotelDetails;
