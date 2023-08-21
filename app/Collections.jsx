import Image from "next/image"

const Collections = () => {
  return (
    <div className="">
    <div className="contain pt-8 pb-12 grid grid-cols-1 sm:grid-cols-3 gap-10 ">
    <div>
    <div className="flex flex-center flex-col">
    <Image
              src="/creativedesign.png"
              alt="creativedesign Img"
              className=""
              width={50}
              height={50}
              priority
            /> 
        <h3>Creativity</h3>
        </div>
        <p className="desc ">create high-quality, handcrafted jewelry that is both beautiful and timeless. offer personalized and customized jewelry that tells a story and evokes emotions.</p>
    </div>
    <div >
        <div className="flex flex-center flex-col">
            <Image
              src="/management.png"
              alt="management Img"
              className="item-center"
              width={50}
              height={50}
              priority
            /> 
    <h3>Values</h3> 
        </div>
   
        <p className="desc">pride in creating pieces that are carefully crafted with the utmost attention to detail. a reflection of your unique style and sums up the personality. </p>
    </div>
    <div>
    <div className="flex flex-center flex-col">
        <Image
              src="/octagon.png"
              alt="octagon Img"
              className=""
              width={50}
              height={50}
              priority
            /> 
    <h3>Community</h3>
    </div>
    
        <p className="desc">
        We encourage creativity and self-expression, and we love to see how our customers incorporate our pieces into their own unique styles.
        </p>
    </div>
    </div>
    <div className="contain pt-8 pb-12 flex-center flex-col">
        <h2 className="sub_head_text mb-4">NEW COLLECTIONS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <Image
              src="/Rectangle 21.png"
              alt="newcollections Img"
              className=""
              width={300}
              height={300}
              priority
            />
             <Image
              src="/Rectangle 22.png"
              alt="newcollections Img"
              className=""
              width={300}
              height={300}
              priority
            />
             <Image
              src="/Rectangle 23.png"
              alt="newcollections Img"
              className=""
              width={300}
              height={300}
              priority
            />
        </div>

    </div>
    </div>
  )
}

export default Collections