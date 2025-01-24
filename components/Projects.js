import websiteImg1 from '../assets/shopping-cart-software-Thumbnail.png';
import websiteImg2 from '../assets/Restaurant-Booking-table.png';
import websiteImg3 from '../assets/book.png';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Console Ecommerce Shopping Cart System Website. Built with JAVA.',
                link: 'https://github.com/ramya-t1156/E_COMMERCE_SHOPPING_CART_SYSTEM'
            },
            {
                image: websiteImg2,
                description: 'A Console Restaurant Reservation System, Built with Java & SQL',
                link: 'https://github.com/ramya-t1156/RestaurantReservationSystem'
            },
            {
                image: websiteImg3,
                description: 'Book-Recommendation-System . Built with Python , HTML and Data Science',
                link: 'https://github.com/ramya-t1156/Book-Recommendation-System'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with Java , Python and SQL. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}