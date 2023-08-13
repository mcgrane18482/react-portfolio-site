function Contact() {
    return (
        <main>
            <div className="first-section">
                <div className="accent-title">CONTACT ME</div>
            </div>

            <div className="contact-page-title">Let's get in touch: Send me an email and I will get back to you shortly!</div>

            <div className="contact-form">
                <form>
                    <input type="text" className="contact-input" placeholder="Your name" />
                    <input type="email" className="contact-input" placeholder="Your email" />
                    <textarea cols="30" rows="10" className="contact-input-message" placeholder="Message" />
                    <button className="send-btn">Send Message</button>
                </form>
            </div>
        </main>
    )
}

export default Contact;