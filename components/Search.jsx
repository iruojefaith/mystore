import Button from "./Button"

const Search = ({btn}) => {
  return (
    <div className='flex justify-center gap-16 md:gap-32 h-16 w-[80% bg-white rounded-md'>
           <div className='flex items-center gap-4 text-[#626262] p-3 w-full'>
              <input className='h-16 w-[80%] p-2 rounded-md outline-none ' type="text" placeholder='enter your email' />
                <Button text="Subscribe" className={btn} /> 
              
           </div>
          
        </div>
  )
}

export default Search