import ph from "../assets/ph.png";
import tron from "../assets/devpost.svg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center px-20 gap-5 justify-between py-10">
        <div className="md:w-1/2">
          <h1 className="font-medium break-word  text-5xl text-white">
            Escrow Payments system that allow cash exchange via the crypto
            chainlink!
          </h1>
          <p className="mt-5 text-white text-md break md:text-xl">
            Convert your digital crypto to cash via our escrow chainlink!
          </p>
          <Link
            to="./pay"
            className="inline-block text-white mt-3 bg-red-600 px-5 py-2 rounded"
          >
            Get started
          </Link>
        </div>
        <img className="md:w-1/2 flex" src={ph} alt=""></img>
      </div>

      <div className="flex max-w-[100%] h-[100px] justify-around py-3 px-5 bg-slate-200  ">
        <img
          alt=""
          className="flex block"
          src="data:image/jpeg;base64,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"
        ></img>
        <img className="block" alt="" src={tron} width={"150px"}></img>
      </div>
      <div className="mt-10 px-10 justify-between gap-3 flex flex-col md:flex-row ">
        <div className="flex items-center gap-2 text-white flex-col md:flex-row">
          <div className="text-[10rem]  font-bold">01</div>
          <div>
            <div>Link Account</div>
            <p>Connect Your wallet</p>
          </div>
        </div>
        <div className="flex items-center gap-2  text-white flex-col md:flex-row">
          <div className="text-[10rem] font-bold">02</div>
          <div>
            <div>Match with an exchanger</div>
            <p>Recieve funds!</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
