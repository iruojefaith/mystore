import Image from 'next/image';

const About = () => {
  return (
    <div className='my-16'>
         <div className='contain  flex flex-col-reverse md:flex-row m-auto gap-6 m:gap-6'>
      <div className='w-full md:w-[50%]'>
         <Image
              src="/About.png"
              alt="About Img"
              className="left-[5.5rem] object-fill"
              width={500}
              height={500}
              priority
            /> 
        </div>
            
       
            
            <div className='pt-0 md:pt-20 w-full md:w-[50%]'>
            <h2 className='sub_head_text flex-center'>The Brand</h2>
            <p className='desc'>Our jewelry brand was born from a love of beauty and a passion for craftsmanship. 
            Our founder&apos;s desire to create unique and meaningful jewelry led her to start the brand, and her vision has been at the heart of everything we do.
            <br/>
            <br/>Each piece of jewelry is crafted with care and attention to detail, and we strive to create pieces that are not only beautiful but also meaningful.</p> 
        </div>

    </div>
    </div>
      
    
  )
}

export default About