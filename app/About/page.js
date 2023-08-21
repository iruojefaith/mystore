import Image from 'next/image';

const About = () => {
  return (
    
         <section className=' contain md:flex m-auto gap-4'>
      
            <div className='md:w-5/12 flex justify-end'>
        <Image
              src="/About.png"
              alt="About Img"
              className="left-[5.5rem] absolute object-fill"
              width={400}
              height={400}
              priority
            /> 
            
        </div>
            <div className='md:w-5/12 mt-4 '>
            <h2 className='sub_head_text'>The Brand</h2>
            <p className='desc'>Our jewelry brand was born from a love of beauty and a passion for craftsmanship. Our founder's desire to create unique and meaningful jewelry led her to start the brand, and her vision has been at the heart of everything we do.</p>
            <p className='desc'>Each piece of jewelry is crafted with care and attention to detail, and we strive to create pieces that are not only beautiful but also meaningful.</p> 
        </div>

    </section>
    
  )
}

export default About