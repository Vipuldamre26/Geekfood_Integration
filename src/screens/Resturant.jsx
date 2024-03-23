import './resturant.css';
import Navbar from '../components/common/Navbar';
import ResturantContent from '../components/resturantpage/ResturantContent';
import Footer from '../components/common/Footer';

const Resturant = () => {
    return(
        <div className='resturant'>
            <Navbar />
            <ResturantContent />
            <Footer />
        </div>
    )
}


export default Resturant;