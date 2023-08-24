

const Footer = () => {
    return (
  <footer className=' bg-[#D3BFB4]'>
          <div className="contain py-16 grid grid-cols-2 lg:grid-cols-5 gap-6">
              <div className="md:col-span-2 md:pt-9">
                    <h3 className='sub_head_text'>MyStore</h3>
                    <p className='sub_desc'>Each piece of jewelry is <br/> crafted with care <br/> and attention to detail.</p>
              </div>
  
  
    <div >
                  <h4 className="h4">Contact Us</h4>
                  <br />
                  <div className="sub_desc flex flex-col gap-1">
                      <a href="#">Community</a>
                      <a href="#">Trending blogs</a>
                      <a href="#">Chatter for teams</a>
                  </div>
              </div>
              <div>
                  <h4 className="h4">Service</h4>
                  <br />
                  <div className=" sub_desc flex flex-col gap-1">
                      <a href="#">Craft</a>
                      <a href="#">Branding</a>
                      <a href="#">jewelry</a>
                  </div>
              </div>
              <div>
                  <h4 className="h4">Support</h4>
                  <br />
                  <div className=" sub_desc flex flex-col gap-1">
                      <a href="#">FAQS</a>
                      <a href="#">Piracy</a>
                      <a href="#">Policy</a>
                      <a href="#">Help</a>
                  </div>
              </div>
  </div>

      </footer>
    )
  }
  
  export default Footer