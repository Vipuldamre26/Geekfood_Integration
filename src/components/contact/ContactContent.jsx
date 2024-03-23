import './contactcontent.css';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const ContactContent = () => {
    return (
        <div className='contact'>

            <div className='contact1'>

                <div className='contact1-main'>


                    <h1>GET IN TOUCH WITH US</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim adiqua minim veniam quis nostrud exercitation ullamco</p>

                    <div className='contact1-s1'>
                        <FaLocationDot className='icon' />
                        <div className='contact1-s2'>
                            <span className='span'>Our Location</span>
                            <span>99 S.t Jomblo Park Pekanbaru 28292. Indonesia</span>
                        </div>
                    </div>

                    <div className='contact1-s1'>
                        <FaPhoneSquareAlt className='icon' />
                        <div className='contact1-s2'>
                            <span className='span'>Phone Number</span>
                            <span>(+62)81 414 257 9980</span>
                        </div>
                    </div>

                    <div className='contact1-s1'>
                        <IoMail className='icon' />
                        <div className='contact1-s2'>
                            <span className='span'>Email Address</span>
                            <span>info@yourdomain.com</span>
                        </div>
                    </div>

                </div>
            </div>


            <div className='contact2'>

                <div className='contact2-s1'>

                    <input type='text' placeholder='Your Name'></input>
                    <input type='email' placeholder='Your Email'></input>
                    <input type='number' placeholder='Your Phone'></input>
                    <textarea placeholder='Your Message'></textarea>
                    <button>Submit</button>
                </div>


            </div>
        </div>
    )
}

export default ContactContent;