

// eslint-disable-next-line react/prop-types
const Header = ({total}) => {

    // console.log(total)
    return (
        <div className="container mx-auto my-5 p-5" >
          <div className="grid items-center md:grid-cols-2 ">
           <img src="https://i.ibb.co.com/P5G51v1/logo.png" alt="" />
            <div>
                <ul className="flex gap-6 justify-center items-center ">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Fixture</a></li>
                    <li><a href="#">Teams</a></li>
                    <li><a href="#">Schedules</a></li>
                   <div className="border rounded-md ml-3 px-4 py-2 font-semibold" >{total} Coin <i className="text-orange-600 -600  fa-solid fa-dollar-sign"></i></div>
                </ul>
            </div>
          </div>
            
        </div>
    );
};

export default Header;