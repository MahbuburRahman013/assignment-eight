
import { useEffect, useState } from "react";
import Chart from 'react-apexcharts';


const PieChart = () => {


    const [localData,setLocalData] = useState()
    const [allData,setAllData] = useState()

    useEffect(()=>{
        const dataStr = localStorage.getItem('data')
        const dataL = JSON.parse(dataStr);
       dataL ? setLocalData(dataL.length) : setLocalData(0);
      dataL ? setAllData(12 - dataL.length) : setAllData(12);
    },[])
    

    return (
        <div className="flex justify-center h-[80vh] container mx-auto items-center">
            <div className="w-full h-full">
            <Chart  type='pie'
            width='100%'
            height='100%'
            series={[localData,allData]}
            
            options={{
                labels:['Your Donation','Total Donation']
            }}

            >

            </Chart>
            </div>
        </div>
    );
};

export default PieChart;