import { useEffect, useState } from "react";
import CardDonate from "./CardDonate";


const DonationCards = () => {
    const [cardsData,setCardsData] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [isTrue,setIsTrue] = useState(true)
    useEffect(()=>{
         fetch('donation.json')
         .then(res=> res.json())
         .then(data=> setCardsData(data))
    },[])

    const handleSearchButtonClick = () => {
        const filtered = cardsData.filter((item) =>
          item.Category.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredData(filtered);
        setIsTrue(false)
      };

      const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
      };

    return (
        <div>
           <div>
           <div className="w-full flex justify-center items-center h-[80vh] bg-[url('https://rb.gy/bd2qg')]">
                {/* <img className="w-full h-full" src='https://rb.gy/vswhh' alt="" /> */}
               
                 <div>
                 <h1 className="text-5xl font-bold text-center">I Grow By Helping People In Need</h1>
               
                <div className="w-[40vw] h-12 my-7 mx-auto">
                <input value={searchInput} onChange={handleSearchInputChange} className="w-[90%] h-full rounded-s-lg" type="text" />
               <button onClick={handleSearchButtonClick} className="w-[10%] h-full rounded-e-lg bg-red-400">Search</button>
                </div>

                 </div>
                </div>
           </div>


          <div>
            {   isTrue?
                <div className="grid grid-cols-4 my-10 container mx-auto gap-6 ">
                    {
                        cardsData.map((card,index)=> <CardDonate key={index} card={card}></CardDonate>)
                    }
                </div>:
                
                <div className="grid grid-cols-4 my-10 container mx-auto gap-6 ">
                    {
                        filteredData.map((card,index)=> <CardDonate key={index} card={card}></CardDonate>)
                    }
                </div>
            }
          </div>
        </div>
    );
};

export default DonationCards;