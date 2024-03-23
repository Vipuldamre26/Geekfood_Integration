import './homepagecontent.css';
import contentImg from '../../assets/content-img.avif';

const HomepageContent = () => {
    return(
        <div className='content-section'>
            <div className='content-section1'>
                <img src={contentImg}></img>
            </div>
            <div className='content-section2'>
                <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore, debitis.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, molestiae! Quidem est esse numquam odio deleniti, beatae, magni dolores provident quaerat totam eos, aperiam architecto eius quis quibusdam fugiat dicta.</p>
                <button>Get in touch</button>
            </div>
        </div>
    )
}

export default HomepageContent;