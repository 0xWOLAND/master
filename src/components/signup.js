import React from "react"
import Input from "./input"


class signup extends React.Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div id="Sign_Up_Cont">
                <h4 id="signup_title">
                Coming to the app store soon!
Andriod & IOS
                </h4>
                <p id="signup_subtitle">
                    If you're interested in changing the learning process — be our early adopter!
                </p>
                <Input style="container"/>
            </div>
        )
    }
}

export default signup;