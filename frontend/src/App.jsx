import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import CoffeeCard from "./components/CoffeeCard/CoffeeCard";
import { useState } from "react";

function App() {
  const loaderdata = useLoaderData();

  const [coffees, setCoffees] = useState(loaderdata);
  return (
    <div>
      {/* FIRST PART */}

      <div>
        <img
          src="https://i.postimg.cc/4xdGW8sB/3.png"
          style={{ width: "100%" }}
        />
      </div>

      {/* SECOND PART */}

      <div className="second_part p-5">
        <div>
          <img src="../public/images/icons/1.png" alt="" />
          <h4>Awesome Aroma</h4>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src="../public/images/icons/1.png" alt="" />
          <h4>Awesome Aroma</h4>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src="../public/images/icons/1.png" alt="" />
          <h4>Awesome Aroma</h4>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div>
          <img src="../public/images/icons/1.png" alt="" />
          <h4>Awesome Aroma</h4>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
      </div>
      <br />

      {/* CARD DISPLAY */}
      <div className="card_section">
        <div className=" text-center">
          <p>--- Sip & Savor ---</p>
          <p className=" text-2xl mt-2">Our Popular Products</p>
          <Link to="/addcoffee">
            <button
              className="btn mt-2"
              style={{ backgroundColor: "brown", color: "white" }}
            >
              Add Coffee
            </button>
          </Link>
        </div>
        <br />
        <div className="card_container mx-10">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
