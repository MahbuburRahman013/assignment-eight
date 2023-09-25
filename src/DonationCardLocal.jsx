import  PropTypes  from "prop-types";

const DonationCardLocal = ({donation}) => {
    const {Picture, Category_bg_Color, Category, Card_bg_Color, Title, Text_Button_bg_Color, Price
    } = donation;
    return (
        <div className="rounded-lg" style={{backgroundColor: Card_bg_Color}}>
            <div className="flex gap-x-7">
            <img src={Picture} alt="" />
            <div className="justify-center flex-col flex">
              <h1 className="w-fit px-3 rounded-md" style={{backgroundColor: Category_bg_Color,color: Text_Button_bg_Color}}>{Category}</h1>
              <h1 className="text-xl font-semibold my-1">{Title}</h1>
              <p className="text-xl" style={{color: Text_Button_bg_Color}}>${Price}</p>
            </div>
            </div>

        </div>
    );
};

DonationCardLocal.propTypes ={
  donation: PropTypes.object.isRequired
}
export default DonationCardLocal;