

const DonationCardLocal = ({donation}) => {
    const {Picture, Category, Card_bg_Color, Title, Text_Button_bg_Color, Price, Description
    } = donation;
    return (
        <div className="rounded-lg" style={{backgroundColor: Card_bg_Color}}>
            <div className="flex gap-x-7">
            <img src={Picture} alt="" />
            <div className="justify-center flex-col flex">
              <h1>{Category}</h1>
              <h1>{Title}</h1>
              <p>{Price}</p>
            </div>
            </div>

        </div>
    );
};

export default DonationCardLocal;