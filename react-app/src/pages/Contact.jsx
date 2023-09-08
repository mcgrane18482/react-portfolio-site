import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Contact() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = e => {
        const prop = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [prop]: value
        });
    };

    return (
        <main>
            <div className="first-section">
                <div className="accent-title">CONTACT ME</div>
            </div>

            <div className="contact-page-title">Let's get in touch: Send me an email and I will get back to you shortly!</div>

            <div className="contact-form">
                <form action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="b9f04702-606f-43d6-8286-c87d9fad54ed" />
                    <input onChange={handleInputChange} value={formData.name} name="name" type="text" className="contact-input" placeholder="Your name" />
                    <input onChange={handleInputChange} value={formData.email} type="email" name="email" className="contact-input" placeholder="Your email" />
                    <textarea onChange={handleInputChange} value={formData.message} name="message" cols="30" rows="10" className="contact-input-message" placeholder="Message" />
                    <button className="action-btn" >Send Message</button>
                </form>
            </div>


        </main>
    )
}

export default Contact;