import React from 'react'
import './RoyalExperience.css'
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import { Slide } from 'react-awesome-reveal';

function RoyalExperience() {
    return (
        <div className="homePage__middleSection">
            <Slide>
                <div className="homePage__middleSectionTitle">
                    THE ROYAL EXPERIENCE
                </div>
            </Slide>
            <Slide delay={500} duration={2000}>
                <div className="homePage__middleSectionMiddleContainer">
                    <div>
                        <RoomServiceIcon />
                        <p>Amirah At Your Service</p>
                        <p className="homePage__middleSectionMiddleContainerDesc">
                            Our customer service
                            experts are always here to
                            help you
                        </p>
                    </div>
                    <div>
                        <CalendarTodayIcon />
                        <p>Book an Appointment</p>
                        <p className="homePage__middleSectionMiddleContainerDesc">
                            We are happy to help you
                            in-store or virtual
                            appointments
                        </p>
                    </div>
                    <div>
                        <MonetizationOnIcon />
                        <p>Easy Payment</p>
                        <p className="homePage__middleSectionMiddleContainerDesc">
                            We provide easy payment
                            facilities at your convience
                        </p>
                    </div>
                </div>
            </Slide>
        </div>
    )
}

export default RoyalExperience
