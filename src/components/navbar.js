import React from "react"
import "../style.css"
import logo from "../logo.svg"

class navbar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return <div>
            <img src={logo} id="logo" />
            <div id="navbar_container">
                <p onClick={() => document.getElementById("intro_container").scrollIntoView({ behavior: 'smooth', block: 'center' })} id="home_ele">Home</p>
                <p onClick={() => document.getElementById("five_steps_cont").scrollIntoView({ behavior: 'smooth', block: 'center' })} id="how_it_works_ele">How it Works</p>
             <div>
                <div onClick={() => document.getElementById("Sign_Up_Cont").scrollIntoView({ behavior: 'smooth', block: 'center' })} id="sign_up_container"></div>
                <p onClick={() => document.getElementById("Sign_Up_Cont").scrollIntoView({ behavior: 'smooth', block: 'center' })} id="sign_up_ele">Sign Up</p>

             </div>
            </div>
        </div>
    }
}

export default navbar;