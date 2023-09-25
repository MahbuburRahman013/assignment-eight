

const Banner = () => {
    return (
        <div>
            <div>
            <div className="w-full h-[80vh] ">
                <img className="w-full h-full" src='https://rb.gy/vswhh' alt="" />
               
                 <div className="absolute top-56 right-[20%]">
                 <h1 className="text-5xl font-bold">I Grow By Helping People In Need</h1>
               
                <div className="w-[40vw] h-12 my-7 mx-auto">
                <input className="w-[90%] h-full rounded-s-lg" type="text" />
               <button className="w-[10%] h-full rounded-e-lg bg-red-400">Search</button>
                </div>

                 </div>
                </div>
        </div>
        </div>
    );
};

export default Banner;