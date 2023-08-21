import Search from "@components/Search"

const NewsLetter = () => {
  return (
    <div className="bg-[#D3BFB4]">
        <div className="contain pt-8 pb-12 grid grid-cols-1 sm:grid-cols-2 gap-2 ">
              <div>
                    <h3 className='sub_head_text'>Join Our Newsletter</h3>
                    <p className='desc'>Stay up to date with the latest jewelry trends, exclusive discounts, 
                    and insider news by subscribing to our newsletter today!
                    </p>
              </div>
  
              <Search />
          </div>
   <hr />
    </div>
        
  )
}

export default NewsLetter