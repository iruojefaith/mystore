

import Image from 'next/image';
import Button from '@components/Button';
import About from './About/page';
import TopSelling from './TopSelling';

export default function Home() {
 
  return (
    <> 
    <section className="w-full h-[45rem] bg-[#D3BFB4] flex-center flex-col md:flex-row md:-mt-[10rem]">

    {/*className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"*/}
       <div className='w-[70%] md:-ml-10'> 
       
          <h1 className='head_text ' >
          Adore Yourself in Timeless Elegance Discover Our Exquisite Jewelry<br/> Collection Today
          </h1>
          <p className='desc'>
          Elevate your style and make a statement <br /> with our luxurious selection. Discover the 
          <br/>perfect addition to your jewelry box today.
          </p>

          <Button text="Shop Now" />
       

       </div>
       <div className='flex flex-row md:w-[20%] top-14 md:-ml-60 relative'>
      
            
            <Image
              src="/heroimg2.png"
              alt="Vercel Logo"
              className="  left-[5.5rem] absolute object-fill"
              width={400}
              height={400}
              priority
            /> 
            <Image
              src="/heroimg1.png"
              alt="Vercel Logo"
              className="top-36 md:-left-[5rem] relative object-fill"
              width={400}
              height={400}
              priority
            />
            
       </div>
          
      
    </section>
    <TopSelling />
    <About />
    </>
  )
}
