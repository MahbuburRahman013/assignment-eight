import { useEffect, useState } from "react";
import DonationCardLocal from "./DonationCardLocal";

const Donation = () => {
  const [data, setData] = useState([]);
  const [isTrue,setIsTrue] = useState(true)
  useEffect(() => {
    const donationData = localStorage.getItem("data");
    const dataStr = JSON.parse(donationData);
    setData(dataStr);
  }, []);
  console.log(data);
  return (
    <div>
      <div>
        {data ? (
          <div>
            <div>
            {
                isTrue? <div className="grid grid-cols-2 container mx-auto mt-9 gap-10">
                {data.slice(0,4).map((donation, index) => (
                    <DonationCardLocal
                      donation={donation}
                      key={index}
                    ></DonationCardLocal>
                  ))}</div>:
                  <div className="grid grid-cols-2 container mx-auto mt-9 gap-10">
                      {data.map((donation, index) => (
                    <DonationCardLocal
                      donation={donation}
                      key={index}
                    ></DonationCardLocal>
                  ))}
                  </div>
                
            }
            </div>
           { data.length > 4 ?
            <div  className="flex justify-center mt-9">
            <button onClick={()=>setIsTrue(!isTrue)} className="bg-purple-600 text-white py-2 px-5 rounded-md">{isTrue? 'See All' : 'See less'}</button>
            </div>: ''
          }
          </div>
        ) : (
          <div className="flex justify-center items-center mt-52 text-4xl font-semibold">no content</div>
        )}
      </div>
    </div>
  );
};

export default Donation;
