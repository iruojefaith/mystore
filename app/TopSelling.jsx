import Image from 'next/image';

const TopSelling = () => {
  return (
    
         <section className='contain m-auto gap-1 w-11/12'>
            <div className=' flex-center flex-col '>
              
            <h2 className='sub_head_text'>Top Selling Jewelry</h2>
            <p className='desc'>Necklace, Rings, Bracelet</p>
            </div>
        <div className='flex-center flex-row gap-2 '>
            <div className='flex flex-col gap-2'>
                <Image
              src="/topselling.png"
              alt="topselling Img"
              className=""
              width={400}
              height={400}
              priority
            /> 
             <Image
              src="/topselling2.png"
              alt="topselling Img"
              className=""
              width={400}
              height={400}
              priority
            />
             </div>
                
                <Image
              src="/topselling3.png"
              alt="topselling Img"
              className="object-fill "
              width={600}
              height={600}
              priority
            /> 
            </div>         
    </section>
    
  )
}

export default TopSelling;