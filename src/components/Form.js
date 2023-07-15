import"./FormStyles.css";
import React from 'react'

const Form = () => {
    return (
        <div className="Form" >
        <form action="https://formsubmit.co/cd96872131077df52b7fa2979c4af8f8" method="POST">
                <label>Your Name</label>
                <input type="text" name="name"></input>

                <label>Email</label>
                <input type="Email" name="email"></input>

                <label>Subject</label>
                <input type="text" name="subject"></input>

                <label>Message</label>
                <textarea rows="6" name= "message" placeholder="Type your message here"/>
                <button className="btn">Submit</button>
                
        </form>
    </div>
    )
}

export default Form