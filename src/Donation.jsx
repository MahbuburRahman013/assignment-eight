import { useEffect, useState } from "react";
import DonationCardLocal from "./DonationCardLocal";


const Donation = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
       const donationData = localStorage.getItem('data')
       const dataStr = JSON.parse(donationData)
          setData(dataStr)
    },[])
console.log(data)
    return (
        <div className="grid grid-cols-2 container mx-auto mt-9 gap-10">
           {
            data.map((donation,index)=> <DonationCardLocal donation={donation} key={index}></DonationCardLocal>)
           }
        </div>
    );
};

export default Donation;