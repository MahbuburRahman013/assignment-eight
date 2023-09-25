import { Chart } from "chart.js/auto";
import { useEffect, useRef, useState } from "react";
const PieChart = () => {
     
     const chartRef = useRef(null)
     const chartInstance = useRef(null)
     const [localData,setLocalData] = useState([])
     const [allData,setAllData] = useState([])

useEffect(()=>{
    fetch('donation.json')
    .then(res=> res.json())
    .then(data=> setAllData(data))
},[])

useEffect(()=>{
    const dataStr = localStorage.getItem('data')
    const dataL = JSON.parse(dataStr);
    setLocalData(dataL)
},[])

console.log(localData)

     useEffect(()=>{
               if(chartInstance.current){
                chartInstance.current.destroy()
               }
               const myChartRef = chartRef.current.getContext('2d');

               chartInstance.current = new Chart(myChartRef,{
                type : 'pie',
                data : {
                    labels: ['Your Donation', 'Total Donation'],
                    datasets: [
                        {
                            data: [localData.length , allData.length],
                            backgroundColor: [
                              '#ff4848',
                              '#50e750',
                            ],
                        }
                    ]
                    
                }
            })
               return ()=>{
                if(chartInstance.current){
                    chartInstance.current.destroy()
                }
               }
     },[allData.length,localData.length])

    return (
        <div className="flex justify-center items-center">
            <div className="w-[500px]">
           <canvas ref={chartRef} />
        </div>
        </div>
    );
};

export default PieChart;