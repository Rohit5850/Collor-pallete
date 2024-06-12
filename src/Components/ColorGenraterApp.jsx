import React, { useEffect } from "react";
import { useState } from 'react';
import ColorPallet from "./ColorPallet";
import SearchedCollerPallet from "./SearchedCollerPallet";
const ColorGenraterApp = ()=>{

 
  const [searchRes,setSearchRes] = useState([]);
  const [colorPalDiv,setColorPalDiv] = useState([])

  const colorMapping = { 
    red: ["#FF0000", "#FF5733", "#c21919", "#FF6347", "#FF4500"], 
    green: ["#00FF00", "#33FF73", "#C3FF00", "#228B22", "#008000"], 
    blue: ["#0000FF", "#3373FF", "#00C3FF", "#1E90FF", "#4169E1"], 
    yellow: ["#FFFF00", "#FFD700", "#FFEA00", "#F0E68C", "#FFAC33"], 
    pink: ["#FFC0CB", "#FF69B4", "#FF1493", "#FF6EB4", "#FF82AB"], 
    purple: ["#800080", "#9932CC", "#8A2BE2", "#A020F0", "#8000FF"], 
    orange: ["#FFA500", "#FFD700", "#FF8C00", "#FF7F50", "#FF4500"], 
    brown: ["#A52A2A", "#8B4513", "#D2691E", "#CD853F", "#DEB887"], 
    cyan: ["#00FFFF", "#20B2AA", "#40E0D0", "#00CED1", "#00C5CD"], 
    magenta: ["#FF00FF", "#FF69B4", "#DA70D6", "#BA55D3", "#FFA0B4"], 
    teal: ["#008080", "#008B8B", "#00FFFF", "#20B2AA", "#40E0D0"], 
    navy: ["#000080", "#00008B", "#0000FF", "#4169E1", "#0000CD"], 
    lime: ["#00FF00", "#32CD32", "#7FFF00", "#00FA9A", "#00FF7F"], 
    maroon: ["#800000", "#8B0000", "#B22222", "#A52A2A", "#800000"], 
    olive: ["#808000", "#6B8E23", "#556B2F", "#8FBC8B", "#9ACD32"], 
    silver: ["#C0C0C0", "#D3D3D3", "#DCDCDC", "#BEBEBE", "#A9A9A9"], 
    black: ["#000000", "#080808", "#121212", "#1C1C1C", "#262626"], 
    white: ["#FFFFFF", "#F5F5F5", "#FAFAFA", "#E0E0E0", "#D3D3D3"], 
}; 

const matchingColors =  colorMapping[searchRes] || [];
let colorSearched = Object.keys(colorMapping)


 
  function refreshPalette(){
  
    setSearchRes(matchingColors)
   
    setSearchRes('')
  }

  useEffect(()=>{
    const repeatedElements = [];
    for(let i = 0 ; i < 10 ; i++) {
        // console.log("This is me" , i+1)

        if(searchRes == ''){
          repeatedElements.push(<ColorPallet  key={i} />)
        }else{

          if (colorSearched.includes(searchRes)){
            
            repeatedElements.push(<SearchedCollerPallet key={i}  enterColor={matchingColors[i]}/>)
          }else{

          }
         

          

        }

        // setColorPalDiv([...colorPalDiv,<ColorPallet/>])
        let keys = Object.keys(colorMapping)
      
    }

    setColorPalDiv(repeatedElements)


    
  },[searchRes])





    return(
        <div className="colorGen">
               <div className='app_heading'>
             <h1>Collor Palette Generator</h1>
     </div>
     <div className='search_bar'>
             <input value={searchRes} placeholder='Enter Color Name' onChange={(e)=> setSearchRes(e.target.value.toLowerCase())} />
     </div>
     <div className='colorPallet'>  
           {
            colorPalDiv.map((item,index) =>
                <div key={index} className="palletContainer">
                  {item}
                </div>
            )
           }
     </div>




     <div className='refresh-btn'>
         <button className='btn' onClick={refreshPalette} >Refresh Palette</button>
     </div>
        </div>
    )
}
export default ColorGenraterApp;