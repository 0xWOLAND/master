import "../style.css"
import React from "react";
import Example from "./modal.js"
import {Modal, Button} from 'react-bootstrap'
import db from "./firebase"

class input extends React.Component{
    constructor(props){
        super(props);
        this.state = {name: '',
         email : "",
          type_of_user: "client",
           show: false};
        this.style = props.style;
        
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validateName = this.validateName.bind(this);
    }

    handleChange(event){
        const target = event.target;
        this.setState({[target.name]: event.target.value});
    }
    handleClose(){
        this.setState({show: false})
    }

    validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    validateName(name){
        var re = /^(([A-Za-z]+[\-\']?)*([A-Za-z]+)?\s)+([A-Za-z]+[\-\']?)*([A-Za-z]+)?$/;
        return re.test(name);
    }
    handleSubmit(event){
        console.log(this.state);
        if(this.validateEmail(this.state.email) && this.validateName(this.state.name)){
            db.collection('info').add({
                'name': this.state.name,
                'email':this.state.email,
                'type_of_user': this.state.type_of_user
            })
            this.setState({show: true});
            console.log(this.state);
            document.getElementById("container").remove();
            event.preventDefault();
        }
        else if(!this.validateEmail(this.state.email) && !this.validateName(this.state.name)){
            alert("Please enter a valid email (Ex. testuser@catalystmarketplace.com) and name (Ex. John Doe)");
        }
        else if(!this.validateEmail(this.state.email)){
            alert("Please enter a valid email (Ex. testuser@catalystmarketplace.com)");
        }
        else{
            alert("Please enter first and last name (Ex. John Doe)");
        }
    }
        
    render() {
        return (
        

            <div id={this.style}>
                <form id="input_form" onSubmit={this.handleSubmit}>
                    <input type="text" name="name" class="question" id="nme" onChange={this.handleChange} required autocomplete="off" />
                    <label for="nme"><span>What's your name?</span></label>
                    <input type="text" name="email" class="question" id="eml" onChange={this.handleChange} required autocomplete="off" />
                    <label for="eml"><span>What's your email?</span></label>
                    
                    
                    <input type="radio" defaultChecked={true} id="Client" onChange={this.handleChange} name="type_of_user" value="Client"/>
                    <label for="Client" className="choice">Client</label>
                    <input type="radio" id="Trainer" name="type_of_user" onChange={this.handleChange} value="Trainer"/>
                    <label for="Trainer" className="choice">Trainer</label>
                    <input id="submit_button" type="submit" value="Sign Up" />
                </form>
                <Modal show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Thank you!</Modal.Title>
                </Modal.Header>
                <Modal.Body>You're signed up — be on the lookout for an email from us soon</Modal.Body>
                <Modal.Footer>
                    <Button id="close_modal" variant="secondary" onClick={this.handleClose}>
                    Close
                    </Button>
                </Modal.Footer>
                </Modal>
            </div>
        )
    }
} 


export default input;