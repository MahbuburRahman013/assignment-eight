import { useEffect, useState } from "react";
import CardDonate from "./CardDonate";


const DonationCards = () => {
    const [cardsData,setCardsData] = useState([])
    useEffect(()=>{
         fetch('donation.json')
         .then(res=> res.json())
         .then(data=> setCardsData(data))
    },[])

    return (
        <div className="grid grid-cols-4 my-10 container mx-auto gap-6 ">
            {
                cardsData.map((card,index)=> <CardDonate key={index} card={card}></CardDonate>)
            }
        </div>
    );
};

export default DonationCards;