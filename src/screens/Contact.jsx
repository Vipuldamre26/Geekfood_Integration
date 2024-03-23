import './contact.css';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import ContactContent from '../components/contact/ContactContent';

const Contact = () => {
    return(
        <div className='main'>
        <Navbar />
        <ContactContent />
        <Footer />
        </div>
    )
}


export default Contact;