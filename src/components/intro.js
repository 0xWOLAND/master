import React from "react"
import Navbar from "./navbar"
import watch from "./watch.svg"
import dollar_sign from "./dollar_sign.svg"
import write from "./write.svg"
import person from "../person.svg"
import logo from "../logo.svg"
import "../style.css";
import "@fontsource/dm-sans";
class intro extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="intro_container">
                <Navbar />
                {/* <img src={logo} id="logo" /> */}
                <h1 className="group_3 group_2 rectangle_316">
                    Changing the way people learn.
                </h1>
                <p className="intro_text">
                    Introducing Catalyst, the world’s first
                    video-subscription marketplace for technique-based learning. Starting with yoga. Stay tuned!
                </p>
                <div>

                    <div id="list_container">
                        <div id="watch_container">
                        </div>
                        <img src={watch} id="watch" />

                        <h4 id="save_time">
                            Save Time
                        </h4>
                    </div>
                    <div>
                        <div id="save_money_container"></div>
                        <img src={dollar_sign} id="dollar_sign" />
                        <h4 id="save_money">
                            Save Money
                        </h4>
                    </div>
                    <div>
                        <div id="write_container"></div>
                        <img src={write} id="write_sign" />
                        <h4 id="get_personalization">
                            Personalization
                        </h4>
                    </div>
                </div>
                <img src={person} id="person" />
            </div>
        )
    }
}

export default intro;