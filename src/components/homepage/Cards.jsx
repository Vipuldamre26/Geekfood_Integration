import './cards.css';
import cardImg from '../../assets/card-img.avif';

const data = [
    {
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime minima dicta amet, molestiae aliquam incidunt suscipit recusandae labore ratione doloremque, architecto et illo minus quo tenetur ducimus, voluptatibus repellendus fuga aperiam vel ab! Ipsam corrupti blanditiis dolorum! Officia assumenda rem nam, eveniet enim ad inventore laudantium est illum voluptatem quis.',
        img: cardImg,
        author: 'Gladis Lennon',
        post: 'Head of SEO'
    },
    {
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae incidunt perferendis soluta facilis voluptas dicta repudiandae quasi asperiores libero, exercitationem molestiae autem sapiente dolore nulla non consequatur. Eaque, dolores.',
        img: cardImg,
        author: 'Gladis Lennon',
        post: 'Head of SEO'
    },
    {
        para: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae similique sunt Animi a voluptatum quidem nulla quisquam natus velit provident earum esse, odio numquam labore recusandae.',
        img: cardImg,
        author: 'Gladis Lennon',
        post: 'Head of SEO'
    },
    {
        para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore vel quo deserunt quos expedita minima incidunt sed tempora, a architecto consectetur reprehenderit, in repellat voluptatum.',
        img: cardImg,
        author: 'Gladis Lennon',
        post: 'Head of SEO'
    },
    {
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloribus eius aut unde, dolores accusantium!',
        img: cardImg,
        author: 'Gladis Lennon',
        post: 'Head of SEO'
    },
    {
        para: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius ut necessitatibus, repudiandae qui dolor minima.',
        img: cardImg,
        author: 'Gladis Lennon',
        post: 'Head of SEO'
    }
]

const Cards = () => {
    return(
        <div className='cards'>
            {
                data.map((item) => {
                    return(
                        <div className='card'>
                            <div className='card-s1'>
                                <p>{item.para}</p>
                            </div>
                            <div className='card-s2'>
                                <img src={item.img}></img>
                                <div className='card-s3'>
                                    <h3>{item.author}</h3>
                                    <span>{item.post}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}




export default Cards;