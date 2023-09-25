

import {useParams,useLoaderData} from 'react-router-dom'
const CardDetails = () => {
    const {id} = useParams()
    const idInt = parseInt(id)
     const dataLode = useLoaderData()
    const findData = dataLode.find(data=> data.id === idInt) 
    const {Picture,Title,Category,Card_bg_Color,Category_bg_Color,Text_Button_bg_Color,Price,Description
    } = findData;
    return (
        <div className='container mx-auto'>
          <div className='relative'>
            <img className='pt-24 w-[80vw] mx-auto h-[80vh]' src={Picture} alt="" />
            <div className='absolute bottom-0 right-24 w-[85%] bg-[#464e5c80]'>dfsf</div>
          </div>
        </div>
    );
};

export default CardDetails;