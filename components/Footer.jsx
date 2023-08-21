

const Footer = () => {
    return (
  <footer className=' bg-[#D3BFB4]'>
          <div className="contain pt-8 pb-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              <div>
                    <h3 className='sub_head_text'>MyStore</h3>
                    <p className='desc'>Each piece of jewelry is crafted with care and attention to detail.</p>
              </div>
  
              <div>
                  <h4>Contact Us</h4>
                  <br />
                  <div className="flex flex-col">
                      <a href="#">Community</a>
                      <a href="#">Trending blogs</a>
                      <a href="#">Chatter for teams</a>
                  </div>
              </div>
              <div>
                  <h4>Service</h4>
                  <br />
                  <div className="flex flex-col">
                      <a href="#">Craft</a>
                      <a href="#">Branding</a>
                      <a href="#">jewelry</a>
                  </div>
              </div>
              <div>
                  <h4>Support</h4>
                  <br />
                  <div className="flex flex-col">
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