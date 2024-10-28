// eslint-disable-next-line react/prop-types
const Banner = ({totalAmount}) => {
    

  return (
    <div className="">
      <div className="bg-img container mx-auto my-5 p-5 bg-[url(../img/bg-shadow.png)] bg-cover bg-no-repeat bg-center rounded-md bg-black ">

        <div className=" text-center  space-y-4 ">
                <img className="mx-auto" src="https://i.ibb.co.com/3YMJbSr/banner-main.png" alt="" />
                <h2 className="text-4xl text-white font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h2>
                <p className=" text-white">Beyond Boundaries Beyond Limits</p>
                <button onClick={()=>{totalAmount(1000000)}} className="bg-yellow-400 py-2 px-5 font-semibold rounded-md hover:bg-slate-300">Claim Free Credit</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
