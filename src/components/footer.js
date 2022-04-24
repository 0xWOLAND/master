import React from "react"
import LargeLogo from "./images/large_logo.svg"
import Insta from "./images/insta.svg"
import LinkedIn from "./images/linkedin.svg"
class footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="footer_container">
                <img src={LargeLogo} id="large_logo" />
                <div id="footer_subcontainer">

                    <div className="footer_box">
                        <h4 id="contact_us">
                            Contact Us
                        </h4>
                        <h5 id="info_email">
                            support@catalystmarketplace.com
                        </h5>
                    </div>
                    <div className="footer_box">
                        <h5 id="follow_us">
                            Follow us on
                        </h5>
                        <div>

                            <a href="https://www.linkedin.com/company/catalyst-marketplace/">

                                <img src={LinkedIn} id="linkedin_logo" alt="instagram" />
                            </a>
                            <a href="https://instagram.com/catalyst.marketplace">
                                <img src={Insta} id="insta_logo" alt="linkedin" />

                            </a>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}


export default footer;