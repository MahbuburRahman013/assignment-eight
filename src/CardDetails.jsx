

import {useParams,useLoaderData} from 'react-router-dom'
const CardDetails = () => {
    const {id} = useParams()
    const idInt = parseInt(id)
     const dataLode = useLoaderData()
    const findData = dataLode.find(data=> data.id === idInt) 
    const {Picture, Title, Text_Button_bg_Color, Price, Description
    } = findData;

   const addToLocalStr = (findData) =>{
      const getToLocal = localStorage.getItem('data')
      const getToLocalParse = JSON.parse(getToLocal);
      if(getToLocalParse){
          localStorage.setItem('data',JSON.stringify([...getToLocalParse,findData]))
      }else{
        localStorage.setItem('data',JSON.stringify([findData]));
      }
   }


    return (
        <div className='container mx-auto'>
          <div className='relative'>
            <img className='pt-24 w-full mx-auto h-[90vh]' src={Picture} alt="" />
            <div className='absolute flex items-center bottom-0 h-20 w-full bg-[#2c2d2f80]'><button onClick={()=>addToLocalStr(findData)} className='text-white ml-6 rounded-lg text-2xl font-bold py-1 px-3' style={{backgroundColor:Text_Button_bg_Color}}>Donate ${Price}</button></div>
          </div>

          <div>
            <p className='text-4xl my-4 font-bold'>{Title}</p>
            <p className='text-gray-500'>{Description}</p>
          </div>
        </div>
    );
};

export default CardDetails;