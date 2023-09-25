import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const CardDonate = ({card}) => {
     

    // console.log(card)
    const {id, Picture,Title,Category,Card_bg_Color,Category_bg_Color,Text_Button_bg_Color} = card;
    return (
        <div>
           <Link to={`/module/${id}`}>
           <div className='rounded-lg' style={{backgroundColor: Card_bg_Color}}>
                <img className='w-full' src={Picture} alt="" />
                <div className='px-7 py-5'>
                <p className='w-fit px-3 rounded' style={{backgroundColor: Category_bg_Color,color:Text_Button_bg_Color}}>{Category}</p>
                <h1 className='text-base font-semibold' style={{color:Text_Button_bg_Color}}>{Title}</h1>
                </div>
            </div>
           </Link>
        </div>
    );
};

CardDonate.propTypes ={
    card : PropTypes.object.isRequired,
}
export default CardDonate;