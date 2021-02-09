import React from 'react'
import { Container, Col, Row } from "react-bootstrap";


function FeedsProfileCard({user,users}) {
    return (
      <Row className="feedProfileCard">
        <div className="profileDetails_card">
          <div className="profileDetails_card__profile-bgr">
            <div className="profileDetails_card__profile-img">
              <img className="img-fluid" src={user?.image} />
            </div>
          </div>

          <div className="profileDetails_card__body">
            <div className="profileDetails__card-body-details mb-3">
              <h5>
                {user?.name} {user?.surname}
              </h5>
              <h4>{user?.title}</h4>

              <span className="feeds_profileDetails__card-contacts d-flex justify-content-between text-left">
                <div>
                  Connections
                  <br />
                  <span className="font-weight-semiBold">
                    Grow your network
                  </span>
                </div>
                <div>{users && users.length}</div>
              </span>
              <span className="feeds_profileDetails__card-contacts d-flex justify-content-start align-items-center text-left font-weight-semiBold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="16x16"
                  className="mercado-match mr-2"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path
                    d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                    fill="#f8c77e"
                  ></path>
                  <path
                    d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                    fill="#e7a33e"
                  ></path>
                </svg>
                See all Premium Features
              </span>
              <span className="feeds_profileDetails__card-contacts d-flex justify-content-start align-items-center text-center font-weight-semiBold">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  width="16"
                  height="16"
                                focusable="false"
                                className="mr-2"
                >
                  <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
                </svg>
                My Items
              </span>
            </div>
          </div>
        </div>
      </Row>
    );
}

export default FeedsProfileCard
