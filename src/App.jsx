import React from "react";
import Cards from "./Cards";
import Sdata from "./Sdata";

const App = () =>
    <>

        <h1 className="back">TOP 10 REALME MOBILE IN 2021</h1>
        <div className="cards">
            {Sdata.map((val) => {
                return (
                    <Cards
                        company={val.company}
                        imgsrc={val.imgsrc}
                        brand={val.brand}
                        price={val.price}
                    />
                );
            }
            )}


        </div>
    </>

export default App;
