import React from 'react'
import './KeyFeatures.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

function KeyFeatures() {
    return (
        <div className="homePage__keyFeatures">
            <div className="homePage__keyFeaturesTitle">
                AMIRAS KEY FEATURES
            </div>
            <div className="homePage__keyFeaturesMiddleContainer">
                <div>
                    <CheckCircleIcon />
                    <p>Quality Assurance</p>
                </div>
                <div>
                    <LocalAtmIcon />
                    <p>Money Back Guarantee</p>
                </div>
                <div>
                    <VerifiedUserIcon />
                    <p>Accredited Certification</p>
                </div>
            </div>
        </div>
    )
}

export default KeyFeatures
