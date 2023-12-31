import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

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
        const dataNoAdd = getToLocalParse.find(dataNew=> dataNew.id === findData.id)
        if(!dataNoAdd){
        toast("Added Donation!!");
          localStorage.setItem('data',JSON.stringify([...getToLocalParse,findData]))
        }else{
          toast("Already added this Donation!!");
        }
      }else{
        toast("Added Donation!!");
        localStorage.setItem('data',JSON.stringify([findData]));
      }
      
   }


    return (
        <div className='container px-5 lg:px-0 mx-auto'>
          <ToastContainer />
          <div className='relative'>
            <img className='mt-5 w-full h-[40vh]  mx-auto md:h-[90vh]' src={Picture} alt="" />
            <div className='absolute flex items-center bottom-0 h-20 w-full bg-[#2c2d2f80]'><button onClick={()=>addToLocalStr(findData)} className='text-white ml-6 rounded-lg text-2xl font-bold py-1 px-3' style={{backgroundColor:Text_Button_bg_Color}}>Donate ${Price}</button></div>
          </div>

          <div className='mb-10'>
            <p className='text-4xl my-4 font-bold'>{Title}</p>
            <p className='text-gray-500'>{Description}</p>
          </div>
        </div>
    );
};

export default CardDetails;