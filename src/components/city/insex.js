import React, {useState,useEffect} from "react";
import './index.css';
import Data from "./city.json";
import axios from "axios";
import { useParams } from "react-router-dom";


const City = ()=>{
    const [data,setData]=useState({})
    let {city} = useParams()
    useEffect(() => {
          switch(city){
              case "kathmandu":
                  setCity(Data.kathmandu)
                  break
              case "bhaktapur":
                  setCity(Data.bhaktapur)
                  break
              case "ilam":
                  setCity(Data.illam)
                  break
              case "sikkim":
                  setCity(Data.Sikim)
                  break
              default :
                  setCity({}) 
                      
          }
          var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7b31ccd4c0b391c82419ea24f7e45ca9`
          var cityCall=()=>{
          axios.get(url).then((response) => {
            setData(response.data)
            console.log(response.data)
        })
    }
    cityCall()
      },[city]);

    const [cityVar, setCity] = useState({
        "id": 1,
        "country": "Nepal",
        "province": "Bagmati",
        "province_number": 3,
        "wards": 32,
        "zip": 44600,
        "area": 413.69,
        "population": 14400000,
        "visited": true,
        "hotel": [
          "Samsara Boutique Hotel",
          "The Soaltee Kathmandu",
          "Hotel Yambu",
          "Hotel Jampa",
          "Hotel Yak and Yeti"
        ],
        "attractions": {
          "zoo": true,
          "qfx": true,
          "stadium": ["Shankhadhar Stadium", "Buddha Stadium", "Balaju Stadium"],
          "parks": [
            {
              "id": 1,
              "name": "Sahid Madhan Park",
              "address": "madhan chowk",
              "image": "https://th.bing.com/th/id/R.6f0e2dcc7d02ba496029ea1ee7358629?rik=TEqHD2XS3mOBiw&pid=ImgRaw&r=0"
            },
            {
              "id": 2,
              "name": "balaju park",
              "address": "balaju",
              "image": "https://th.bing.com/th/id/R.6f0e2dcc7d02ba496029ea1ee7358629?rik=TEqHD2XS3mOBiw&pid=ImgRaw&r=0"
            },
            {
              "id": 3,
              "name": "prithivi park",
              "address": "pasupati nagar",
              "image": "https://th.bing.com/th/id/R.6f0e2dcc7d02ba496029ea1ee7358629?rik=TEqHD2XS3mOBiw&pid=ImgRaw&r=0"
            }
          ]
        }
      });
    
    const[weather,setWeather]= useState("")
    return (

      <div className="container">
          <div className="main">
             <div className="Country">
             
              <h2>Country:{cityVar.country}</h2>
           
            <div className="Province.No">
            </div>
            <div className="wards">
                <h2>Wards:{cityVar.wards}</h2>
            </div>
            <div className="zip">
                <h2>Zip:{cityVar.zip}</h2>
            </div>
            <div className="area">
                <h2>Area:{cityVar.area}sq.km</h2>
            </div>
           </div>
           {/* <div className="Image">
             {cityVar.attractions.parks.map((image)=>{
             return(
             <img src={image.image}/>
                )})}
           </div> */}

           <div className="countryFamous">
           {/* <div className="hotel">
                <h2>Hotel:{cityVar.hotel.map(hotel=>
                     <span>{hotel},&nbsp;</span>
                )}</h2>
            </div>  */}
            <div className="hotel">
                <h2>Zoo:{cityVar.attractions.zoo ? " availabe":" not available"}</h2>
            </div> 
            <div className="hotel">
                <h2>qfx:{cityVar.attractions.qfx ? " available":" not available"}</h2>
            </div> 
            <div className="hotel">
                <h2>stadium:{cityVar.attractions.stadium}</h2>
            </div> 
            <div className="hotel">
                <h2>parks:{cityVar.attractions.parks.map(parks=>
                    <span>{parks.name}{", "}</span>)}</h2>
            </div> 
           </div>
            
      </div>
        <div className="moreImages">
            <h1>Watch more photos...</h1>
            {/* <div className="pictures">
               <div className="imageOne"> 
               <img src={cityVar.attractions.parks[1].image}/>
                </div> 
                <div className="">
                <img src={cityVar.attractions.parks[2].image}/>
                </div>
            </div> */}
        </div>
        <div className="checkBox">
          <input type="checkbox" id="vehicle1" name="visited" value="visited" checked={cityVar.visited}/>
          <label for="visited"> Visited</label> 
       </div>
           <div className="weather">
           <h3>the weather of {city}:</h3>
           {data.main ? <h3>{data.main.temp}</h3> : null}
       </div>
      </div>
    );
}
export default City