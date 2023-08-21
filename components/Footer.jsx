

const Footer = () => {
    return (
  <footer className=' bg-[#D3BFB4] h-96 '>
          <div className="contain py-16 grid grid-cols-1 lg:grid-cols-2  gap-2">
              <div className="pt-9">
                    <h3 className='sub_head_text'>MyStore</h3>
                    <p className='desc'>Each piece of jewelry is <br/> crafted with care <br/> and attention to detail.</p>
              </div>
  
  <div className=" grid sm:grid-cols-1 lg:grid-cols-3">
    <div >
                  <h4>Contact Us</h4>
                  <br />
                  <div className=" desc flex flex-col gap-3">
                      <a href="#">Community</a>
                      <a href="#">Trending blogs</a>
                      <a href="#">Chatter for teams</a>
                  </div>
              </div>
              <div>
                  <h4>Service</h4>
                  <br />
                  <div className=" desc flex flex-col gap-3">
                      <a href="#">Craft</a>
                      <a href="#">Branding</a>
                      <a href="#">jewelry</a>
                  </div>
              </div>
              <div>
                  <h4>Support</h4>
                  <br />
                  <div className=" desc flex flex-col gap-3">
                      <a href="#">FAQS</a>
                      <a href="#">Piracy</a>
                      <a href="#">Policy</a>
                      <a href="#">Help</a>
                  </div>
              </div>
  </div>
              
          </div>
      </footer>
    )
  }
  
  export default Footer