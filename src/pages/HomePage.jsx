import { useState } from "react";
import Card from "../component/ProductCard/Card";

function HomePage (){
    const[data, ] = useState(
        new Array(20).fill({title: 'Product Title'})
    );
    console.log(data);

    return(
        <>
        <h1 className="text-center">Home page for follow along </h1>
        <div className="grid grid-cols-3">
            {data.map((ele,index)=>{
                return(
                    <div style={{margin:'auto'}}>
                        <Card title={ele.title} Index={index}/>
                        </div>
                )
            })}

          

        </div>
        </>

    );
}
export default HomePage;