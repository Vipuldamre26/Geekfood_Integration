import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import FoodItems from '../components/food/FoodItems';
import './food.css';

const Food = () => {
    return (
        <div>
            <Navbar />
            <FoodItems />
            <Footer />
        </div>
    )
}

export default Food;