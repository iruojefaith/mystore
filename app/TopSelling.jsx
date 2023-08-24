import Image from 'next/image';

const TopSelling = () => {
  return (
    <div className='mt-6 md:mt-9'>
        <div className='contain gap-1'>
            <div className=' flex-center flex-col '>
            <h2 className='sub_head_text'>Top Selling Jewelry</h2>
            <p className='desc'>Necklace, Rings, Bracelet</p>
            </div>
        <div className='flex-center flex-col md:flex-row gap-2 '>
            <div className='flex flex-col gap-2'>
                <Image
              src="/topselling.png"
              alt="topselling Img"
              className=""
              width={300}
              height={300}
              priority
            /> 
             <Image
              src="/topselling2.png"
              alt="topselling Img"
              className=""
              width={300}
              height={300}
              priority
            />
             </div>
                
                <Image
              src="/topselling3.png"
              alt="topselling Img"
              className="object-fill mb-3"
              width={400}
              height={400}
              priority
            /> 
            </div>         
    </div>
    </div>
       
    
  )
}

export default TopSelling;