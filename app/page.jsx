

import Image from 'next/image';
import Button from '@components/Button';
import About from './About/page';
import TopSelling from './TopSelling';
import NewsLetter from './NewsLetter';
import Collections from './Collections';

export default function Home() {
 
  return (
    <> 
    <div className="w-full h-[63rem] md:h-[40rem] bg-[#D3BFB4] ">
<div className='contain grid grid-cols-1 lg:grid-cols-3 gap-2'>
   <div className='col-span-2'>    
          <h1 className='head_text ' >
          Adore Yourself in Timeless Elegance <br/>Discover Our Exquisite Jewelry<br/> Collection Today
          </h1>
          <p className='desc'>
          Elevate your style and make a statement <br /> with our luxurious selection. Discover the 
          <br/>perfect addition to your jewelry box today.
          </p>
          <div className='my-10'>
           <Button text="Shop Now" className="btn"/> 
          </div>
          
       

       </div>
       <div className='flex flex-row md:mt-[6rem] relative'>
       
            <Image
              src="/heroimg2.png"
              alt="header Image"
              className="  left-[2.5rem] md:left-[5.5rem] absolute object-fill"
              width={400}
              height={400}
              priority
            /> 
            <Image
              src="/heroimg1.png"
              alt="header Image"
              className="top-40 -left-[4rem] md:-left-[14rem] relative object-fill"
              width={400}
              height={400}
              priority
            />
            
       </div>
</div>
    {/*className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"*/}
      
          
      
    </div>
    <TopSelling />
    <About />
    <Collections />
    <NewsLetter/>
    </>
  )
}
