import React,{useState} from 'react'
import { FaPlus, FaMinus} from "react-icons/fa6";

function FAQ({data}) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
  <div className='w-full flex flex-col justify-center items-center gap-8 font-poppins p-4'>
    <div className='flex flex-wrap text-3xl justify-center text-white gap-2'>
       <span>Frequently </span>
      <span className='text-buttonOrange'> Asked Questions </span>
    </div>

    <div className="space-y-2 w-full md:px-60 font-poppins">
          {data.map((faq, index) => (
            <div key={index}>
              <button
                className="w-full bg-nav px-4 py-4 rounded-lg flex justify-between items-center focus:outline-none"
                onClick={() => toggleAnswer(index)}
              >
                <span className="text-sm  md:text-lg font-normal text-white hover:scale-105 transition-all hover:text-buttonOrange">{faq.question}</span>
                <div className='w-8 h-8 bg-buttonBlack rounded-full flex items-center px-2 text-white hover:scale-110 transition-all hover:bg-explore'>
                  { activeIndex === index ?  (<FaMinus className='justify-center '/>): 
                    (<FaPlus size={20} className='justify-center'/>)
                  }
                </div>
               
              </button>
              {activeIndex === index && (
                <div className='bg-[#0D0E0E] mb-4'>
                  <p className='text-white p-4'>{faq.answer}</p>
                </div>
               
              )}
            </div>
          ))}
    </div>
    
</div>
  )
}

export default FAQ