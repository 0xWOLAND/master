import React from "react"
import first from "./images/first.svg"
import second from "./images/second.svg"
import third from "./images/third.svg"
import fourth from "./images/fourth.svg"
import fifth from "./images/fifth.svg"
class steps extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="five_steps_cont">
                <h4 id="Five_Simple_Steps">
                    5 Simple Steps
                </h4>
                <div id="step_cont">

                <div className="num_ele">
                    <p className="number" id="num_one">
                        1
                    </p>
                    <img src={first} className="image" />
                    <p className="text">
                        Scroll through filtered marketplace
                    </p>
                </div>
                <div className="num_ele">
                    <p className="number" id="num_two">
                        2
                    </p>
                    <img src={second} className="image" />
                    <p className="text">
                        Select a trainer at a monthly rate
                    </p>
                </div>
                <div className="num_ele">
                    <p className="number">
                        3
                    </p>
                    <img src={third} className="image" />
                    <p className="text">
                        Fill out trainer-sent survey
                    </p>
                </div>
                <div className="num_ele">
                    <p id="num_four" className="number">
                        4
                    </p>
                    <img src={fourth} className="image" />
                    <p className="text">
                        Recieve personalized video flow
                    </p>
                </div>
                <div className="num_ele">
                    <p className="number" id="num_five">
                        5
                    </p>
                    <img src={fifth} className="image" />
                    <p className="text">
                        Direct message trainer with questions
                    </p>
                </div>
                </div>
            </div>
        )
    }
}


export default steps;