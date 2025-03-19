import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [flipCard, setFlipCard] = useState(false);

  const toggleFlip = () => {
    setFlipCard((prev) => !prev);
  };

  return (

      <div className="contact-page">
        <div className="contact-container"> 
          <div className="flip-card" onClick={toggleFlip}>
            {flipCard ? "Reset" : "Animate"}
          </div>
          <div className="contact-wrapper">
            <div className={`envelope ${flipCard ? "active" : ""}`}>
              <div className="back paper"></div>
              <div className="content">
                <div className="form-wrapper">
                  <form>
                    <div className="top-wrapper">
                      <div className="input ">
                        <label>Name</label>
                        <input type="text" name="name" />
                      </div>
                      <div className="input">
                        <label>Phone</label>
                        <input type="text" name="phone" />
                      </div>
                      <div className="input">
                        <label>Email</label>
                        <input type="text" name="_replyto" />
                      </div>
                    </div>
                    <div className="bottom-wrapper">
                      <div className="input">
                        <label>Subject</label>
                        <input type="text" name="_subject" />
                      </div>
                      <div className="input">
                        <label>Message</label>
                        <textarea rows="5" name="message"></textarea>
                      </div>
                      <div className="submit">
                        <div className="submit-card" onClick={toggleFlip}>Send Mail</div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="front paper"></div>
            </div>
          </div>
        </div>
      </div>

  );
}
