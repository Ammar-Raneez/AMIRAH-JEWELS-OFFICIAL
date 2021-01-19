import React from 'react'
import './MiddleSection.css'
import FaceIcon from '@material-ui/icons/Face';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import CreditCardIcon from '@material-ui/icons/CreditCard';

function MiddleSection() {
    return (
        <div className="homePage__middleSection">
            <div className="homePage__middleSectionTitle">
                YOUR EXPERIENCE MATTERS
            </div>
            <div className="homePage__middleSectionMiddleContainer">
                <div>
                    <FaceIcon />
                    <p>At your service</p>
                    <p className="homePage__middleSectionMiddleContainerDesc">
                        Our customer service
                        experts are always here to
                        help you
                    </p>
                </div>
                <div>
                    <CalendarTodayIcon />
                    <p>Book an appointment</p>
                    <p className="homePage__middleSectionMiddleContainerDesc">
                        We are happy to help you
                        in-store or virtual
                        appointments
                    </p>
                </div>
                <div>
                    <CreditCardIcon />
                    <p>Easy Payment</p>
                    <p className="homePage__middleSectionMiddleContainerDesc">
                        We provide easy payment
                        facilities at your convience
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MiddleSection
