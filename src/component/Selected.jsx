/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types



const Selected = ({ addPlayer, handelDelete,handleIsActive }) => {


  return (
    <div className="mb-80 container mx-auto p-5 my-5">
      {addPlayer.map ((player, index) => (
        <div className="flex justify-between border-2 p-3 my-5 rounded-lg" key={index}>
          <div className="flex items-center gap-3">
            <img
              className="w-16 h-16 rounded-full "
              src={player.image}
              alt=""
            />
            <div> 
                <h4 className="font-semibold text-xl">{player.name}</h4>
                <p>Batting: {player.battingType}</p>
            </div>
          </div>
          <button onClick={()=>handelDelete(player.playerId)} className="mr-5 text-red-600">
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      ))}
      <button  onClick={() => {
              handleIsActive("available");
            }} className="border-2 py-2 px-5 font-semibold rounded-lg  bg-yellow-400 ">Add More Player</button>
    </div>
  );
};

export default Selected;
