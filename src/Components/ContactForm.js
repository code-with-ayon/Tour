import React from 'react'
import "./ContactFormStyless.css"

const ContactForm = () => {
  return (
    <div className='form-container'>
        <h1>Send message to us!</h1>
        <form>
            <input placeholder="Name"/>
            <input placeholder="Email"/>
            <input placeholder="Subject"/>
            <textarea placeholder="message" rows="4"></textarea>
            <button>Send us</button>
        </form>
    </div>
  )
}

export default ContactForm