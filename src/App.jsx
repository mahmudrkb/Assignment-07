import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Header from "./component/Header";

import Subscribe from "./component/Subscribe";

import Available from "./component/Available";
import { useEffect, useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const notify = () => {
  //   toast.error("Not enough money!", {
  //     position: toast.POSITION.TOP_CENTER,
  //   });
  // };

  // navbar button
  const [total, setTotal] = useState(0);

  const totalAmount = (amount) => {
    setTotal(total + amount);
  };

  const priceDecrease = (price) => {
    setTotal(total - price);
  };

  // show players

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  // choose button show selected section

  const [addPlayer, setAddPlayer] = useState([]);

  const handelDelete = (id) => {
    const newPlayer = addPlayer.filter((player) => player.playerId != id);
    setAddPlayer(newPlayer);
  };

  const addPlayerSelected = (player) => {
    const isExist = addPlayer.find(
      (oldPlayer) => oldPlayer.playerId === player.playerId
    );

    if (!isExist && player.biddingPrice < total) {
      setAddPlayer([...addPlayer, player])
      priceDecrease(player.biddingPrice),
      toast.success("Players have been successfully added!", {
        position: "top-center"
      });
    } else {
      toast.warn("Player Already Selected", {
        position: "top-center"
      });
    }
  };

  // active button and  selected player

  const [isActive, setActive] = useState({
    available: true,
    status: "available",
  });

  const handleIsActive = (status) => {
    if (status == "available") {
      setActive({
        available: true,
        status: "available",
      });
    } else {
      setActive({
        available: false,
        status: "selected",
      });
    }
  };

  return (
    <>
      {/*  tis is header section */}
      <Header total={total}></Header>

      <Banner totalAmount={totalAmount}></Banner>

      <Available
        total={total}
        priceDecrease={priceDecrease}
        handleIsActive={handleIsActive}
        handelDelete={handelDelete}
        isActive={isActive}
        addPlayer={addPlayer}
        addPlayerSelected={addPlayerSelected}
        players={players}
      ></Available>

      <ToastContainer />

      <Subscribe></Subscribe>
      <Footer></Footer>
    </>
  );
}

export default App;
