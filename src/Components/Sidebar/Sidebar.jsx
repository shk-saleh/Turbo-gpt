import { useContext, useState } from 'react'
import './Sidebar.css'
import { Context } from '../../Context/Context';

const Sidebar = () => {

  const [extended, setExtended] = useState(false);
  const {onSent, recentPrompt, setprevPrompt, newChat} = useContext(Context);

  const displayPrompt = async (prompt) =>{
    setprevPrompt(prompt);
    await onSent(prompt);
  }


  return (
    <>
      <span className='absolute w-80 h-80 rounded-full left-[-100px] top-[-100px] z-[-1] blur-[70px] shining'></span>
      <div className='max-[450px]:hidden flex flex-col justify-between h-[605px] rounded-md max-w-64 p-3 m-4 text-white bg-[#77777740] shadow-md' style={{ width: extended ? "20rem" : "3.3rem"}} >
          <div className='flex flex-col gap-14'>
            <button className='text-left' onClick={()=> setExtended(prev => !prev)} > <i className="ri-side-bar-fill text-2xl cursor-pointer"></i></button>
            <button className='cursor-pointer border rounded-lg p-1 hover:bg-[#63636340]' onClick={()=>newChat()}><i className="ri-add-line"></i> {extended? "New Chat" : null}</button>
            {extended?
            <div>
                <p className='pb-3'>Recent</p>
                {recentPrompt.map((item, index) => {
                   return(
                      <p className='text-lg py-2 hover:bg-[#63636340] rounded-md px-2 cursor-pointer' onClick={()=> displayPrompt(item)}><i className="ri-chat-1-line pe-2 "></i>{item.slice(0, 18)}...</p>
                   )
                })}   
            </div>
            : null}     
          </div>
          <div className='flex flex-col gap-3'>
              <p className='text-lg'><i className="ri-question-line pe-2 text-2xl"></i> {extended? "Help" : null} </p>
              <p className='text-lg'><i className="ri-history-line pe-2 text-2xl"></i> {extended? "Activity" : null} </p>
              <p className='text-lg'><i className="ri-settings-3-line pe-2 text-2xl"></i> {extended? "Setting" : null}</p>
          </div>
      </div>
    </>
  )
}

export default Sidebar
