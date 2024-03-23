import './hero.css';

const Hero = () => {
    return (
        <div className='hero'>
            <div className='hero-content'>
                <h2>Let us find your </h2><h2 className='hero-content-h2'>Forever Food.</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!</p>
                <div className='hero-btn'>
                    <button className='btn1'>Search Now</button>
                    <button className='btn2'>Know more</button>
                </div>
            </div>
        </div>
    )
}


export default Hero;