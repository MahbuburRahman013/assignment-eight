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
           <div className="w-full md:h-[90vh] bg-gradient-to-tr from-slate-100 to-slate-100 ">
                <img className="w-full mix-blend-overlay object-cover h-full" src='https://rb.gy/bd2qg' alt=""/> 
               
                 <div className="absolute right-0 left-0 top-36 md:top-[40vh] lg:top-[45vh] mx-auto">
                 <h1 className="md:text-5xl text-xl font-bold text-center">I Grow By Helping People In Need</h1>
               
                <div className="md:w-[40vw] w-[70vw] h-8 md:h-12 md:my-7 mx-auto">
                <input value={searchInput} onChange={handleSearchInputChange} className="w-[80%] h-full rounded-s-lg" type="text" />
               <button onClick={handleSearchButtonClick} className="w-[20%] h-full rounded-e-lg text-white md:font-semibold bg-red-400">Search</button>
                </div>

                 </div>
                </div>
           </div>


          <div>
            {   isTrue?
                <div className="grid grid-cols-1 md:grid-cols-2 px-4 lg:px-0 lg:grid-cols-4 my-10 container mx-auto gap-6 ">
                    {
                        cardsData.map((card,index)=> <CardDonate key={index} card={card}></CardDonate>)
                    }
                </div>:
                
                <div className="grid grid-cols-1 md:grid-cols-2 px-4 lg:px-0 lg:grid-cols-4 my-10 container mx-auto gap-6">
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