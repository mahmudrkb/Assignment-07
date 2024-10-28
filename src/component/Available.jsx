import Players from "./Players";
import Selected from "./Selected";

// eslint-disable-next-line react/prop-types
const Available = ({ handleIsActive, isActive, addPlayer, players,addPlayerSelected,handelDelete,priceDecrease, total}) => {
  return (
    <div>
      {/* available players  with button*/}
      <div className="flex justify-around">
        <h3 className="font-semibold text-xl">
          Available Players({addPlayer.length}/{players.length})
        </h3>
        <div>
          <button
            onClick={() => {
              handleIsActive("available");
            }}
            // eslint-disable-next-line react/prop-types
            className={`${
              isActive.available
                ? " border-2 py-2 px-5 font-semibold rounded-lg  bg-yellow-400 "
                : " border-2 py-2 px-5 font-semibold rounded-lg "
            }`}
          >
            Available
          </button>

          <button
            onClick={() => {
              handleIsActive("selected");
            }}
            // eslint-disable-next-line react/prop-types
            className={` ${
              isActive.available
                ? " border-2 py-2 px-5 font-semibold rounded-lg "
                : " border-2 py-2 px-5 font-semibold rounded-lg bg-yellow-400 "
            }`}
          >
            Selected ({addPlayer.length})
          </button>
        </div>
      </div>
      {
        // eslint-disable-next-line react/prop-types
        isActive.available?  <Players total={total} priceDecrease={priceDecrease} addPlayerSelected={addPlayerSelected} addPlayer={addPlayer} players={players} ></Players> : <Selected handelDelete={handelDelete} addPlayer={addPlayer} handleIsActive={handleIsActive} ></Selected>
      }
    </div>
  );
};

export default Available;
