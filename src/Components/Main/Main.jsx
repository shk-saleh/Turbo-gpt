import React from 'react'
import './Main.css'
import { useContext } from 'react'
import { Context } from '../../Context/Context'

const Main = () => {

    const {input, setInput, loading, showResult, recentPrompt, setrecentPrompt, prevPrompt, resultData, onSent} = useContext(Context);
    
    

  return (
    // wrapper
    <div className='w-[100%] h-[96vh] flex flex-col justify-between items-start'>
        {/* navbar */}
        <div className='w-full h-10 flex justify-between text-white mt-4 px-4'>
            <h3 className='text-3xl'>Turbo</h3>
            <span><i class="ri-account-circle-fill text-3xl cursor-pointer"></i></span>
        </div>

        {!showResult? 
        
        <div className='flex flex-col gap-16 max-[450px]:py-20'>
            <div className='text-5xl max-[450px]:text-4xl text-white w-full px-36 max-[450px]:px-10'>
                <p className='helloText'>Hello, Dev</p>
                <p className='text-stone-400'>How can I help you today?</p>
            </div>
            <div className='flex flex-row max-[450px]:flex-col gap-3 px-36 max-[450px]:px-10'>
                <div className='bg-stone-800 text-stone-400 rounded-lg w-auto p-2 cursor-pointer hover:bg-stone-900'> 
                    <i class="ri-compass-line text-3xl"></i>
                    <p>Suggest beautiful places to visit on this holidays..</p>
                </div>
                <div className='bg-stone-800 text-stone-400 rounded-lg w-auto p-2 cursor-pointer hover:bg-stone-900'> 
                    <i class="ri-lightbulb-flash-line text-3xl"></i>
                    <p>Explain the Latest Trends in the Web Development..</p>
                </div>
                <div className='max-[450px]:hidden bg-stone-800 text-stone-400 rounded-lg w-auto p-2 cursor-pointer hover:bg-stone-900'> 
                    <i class="ri-mental-health-line text-3xl"></i>
                    <p>How to improve the physical health by perfroming simple ..</p>
                </div>
                <div className='max-[450px]:hidden bg-stone-800 text-stone-400 rounded-lg w-auto p-2 cursor-pointer hover:bg-stone-900'> 
                    <i class="ri-compass-line text-3xl"></i>
                    <p>Suggest beautiful places to visit on this holidays..</p>
                </div>        
            </div>
        </div>
        : 
        <div className='w-full ps-24 pe-36 max-[450px]:px-8 overflow-scroll main-area max-h-80'>
            <div className='w-100 flex justify-end'><p className='bg-yellow-900 text-stone-100 text-center rounded-2xl py-2 px-6 mb-10'>{prevPrompt}</p></div>
            <div className='flex flex-row content-center gap-6 align-middle'>
                <span><i class="ri-bard-fill text-yellow-500 text-2xl"></i></span>
                {loading? <span className='loading'></span> : <p className='text-stone-300 text-lg'  dangerouslySetInnerHTML={{__html:resultData}} ></p> }           
            </div>
        </div>
        
        }
        

        {/* prompt bar */}
        <div className='flex flex-col gap-4 w-full px-36 max-[450px]:px-12'>
            <div className='flex flex-row justify-between border border-zinc-600 px-4 py-2 rounded-3xl'>
                <input type="text" onChange={(e) => setInput(e.target.value)} value={input} onKeyDown={(e)=> { if(e.key === "Enter"){onSent()} }} className='w-full outline-none bg-transparent text-lg text-zinc-200' placeholder='Type your prompt here..'/>
                <div className='flex flex-row gap-3 text-2xl text-white max-[450px]:text-xl'>
                    <i class="ri-attachment-line cursor-pointer"></i>
                    <i class="ri-mic-fill cursor-pointer"></i>
                    {input? <i class="ri-send-plane-2-fill cursor-pointer" onClick={()=>onSent()}></i> : null }
                </div>
            </div>
            <p className='text-stone-400 text-center max-[450px]:text-sm'>Turbu Ai can make mistakes. Check important info.</p>
        </div>

    </div>
  )
}


export default Main