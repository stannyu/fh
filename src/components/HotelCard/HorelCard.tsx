import React from 'react';
import './hotel-card.scss';

const HotelCard = () => {
  return (
    <div className="hotel-card-wrapper">
      <div className="hotel-card-header">
        <p className="hotel-card-title">
          Standard Room <span>23M²</span>
        </p>
        <p className="hotel-card-header-control">
          Room info <span></span>
        </p>
      </div>
      <div className="hotel-card">
        <div className="hotel-card-image">
          <img
            src="https://room-matehotels.com/images/img/bruno/slide/5-mobile.jpg"
            alt=""
          />
        </div>
        <div className="hotel-card-details">
          <div className="hotel-card-details-row">
            <div className="hotel-card-details-row-info">
              <p className="info-details">
                <span className="two-guests"></span>Refundable • Free WiFi • Pay
                Later • Pay at Hotel
              </p>
            </div>
            <div className="hotel-card-details-row-control">
              <div className="price-details">
                <div className="price-details-tag">Private Deal</div>
                <p className="price-details-ammount">314</p>
              </div>
              <div className="add-control">
                <button>ADD</button>
              </div>
            </div>
          </div>

          <div className="hotel-card-details-row">
            <div className="hotel-card-details-row-info">
              <p className="info-details">
                <span className="two-guests"></span>Refundable • Free WiFi • Pay
                Later • Pay at Hotel
              </p>
            </div>
            <div className="hotel-card-details-row-control">
              <div className="price-details">
                <div className="price-details-tag">From $658</div>
                <p className="price-details-ammount">314</p>
              </div>
              <div className="add-control">
                <button>ADD</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
