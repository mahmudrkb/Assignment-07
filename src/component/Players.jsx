import { useEffect, useState } from "react";
import React from "react";
import { toast } from "react-toastify";


// eslint-disable-next-line react/prop-types
const Players = ({ addPlayerSelected, players, priceDecrease, total }) => {
  // const [players, setPlayers] = useState([]);

  // useEffect(() => {
  //   fetch("data.json")
  //     .then((res) => res.json())
  //     .then((data) => setPlayers(data));
  // }, []);

  return (
    <div className="mb-52 container mx-auto my-5 p-5">
      {/* available players  with button
      <div className="flex justify-around">
        <h3 className="font-semibold text-xl">
          Available Players({addPlayer.length}/{players.length})
        </h3>
        <div>
          <button
            onClick={() => {
              handleIsActive("available");
            }}
            className={`${isActive.available? ' border-2 py-2 px-5 font-semibold rounded-lg  bg-yellow-400 ' : ' border-2 py-2 px-5 font-semibold rounded-lg '}`} 
          >
            Available
          </button>

          <button
            onClick={() => {
              handleIsActive("selected");
            }}
            className={` ${isActive.available? ' border-2 py-2 px-5 font-semibold rounded-lg ' : ' border-2 py-2 px-5 font-semibold rounded-lg bg-yellow-400 ' }`}
          >
            Selected ({addPlayer.length})
          </button>
        </div>
      </div> */}

      {/* players section  */}

      <div className="grid grid-cols-3 gap-4 mt-10">
        {players.map((player) => (
          <div
            key={player.playerId}
            className="card bg-base-100 shadow-xl  border-2 p-4 "
          >
            <figure>
              <img
                className="mx-auto w-56 h-44 rounded-xl"
                src={player.image}
                alt="Shoes"
              />
            </figure>
            <div className="space-y-4">
              <h2 className="card-title">
                <i className="fa-solid fa-user"></i>
                {player.name}
              </h2>
              <div className="flex justify-between border-b-2 pb-3">
                <div>
                  <i className="fa-solid fa-flag"> </i>
                  <span> {player.country} </span>
                </div>
                <div className="py-2 px-5 bg-slate-200 rounded-md">
                  {" "}
                  {player.role}
                </div>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Batting Type :</p>
                <p className="text-end">{player.battingType}</p>
              </div>
              <div className="flex justify-between">
                <p className="font-semibold">Bowling Type :</p>
                <p className="text-end">{player.bowlingType}</p>
              </div>

              <div className="flex justify-between items-center">
                <h4 className="font-bold  ">Price : ${player.biddingPrice}</h4>
                <button
                  onClick={() => {
                    if (player.biddingPrice < total) {
                      if (player.playerId <=6 ) {
                        addPlayerSelected(player)
                         
                         
                          
                      } else {
                        toast.error(" You can't select upto 6 Players !", {
                          position: "top-center"
                        });
                      }
                    } else {
                      toast.error("No Enough Money!", {
                        position: "top-center"
                      });
                    }
                  }}
                  className=" py-2 px-5 bg-yellow-400 hover:bg-slate-200 rounded-md "
                >
                  Choose Player
                </button>

               

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 

export default Players;
 