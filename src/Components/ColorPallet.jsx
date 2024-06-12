import React, { useEffect, useState } from "react";

const ColorPallet = () =>{
    const [copyText,setCopyText] = useState(false)
    let [color,setColor] = useState()
  
    function copyColorCode(e){
       
        e.stopPropagation();
        navigator.clipboard.writeText(color)
        setCopyText(true);

        setTimeout(()=>{
            setCopyText(false);
        },500)
   
    }

    useEffect(()=>{
        const generateRandomRGB = () =>{
            return Math.floor(Math.random()*256)
        }
        const generateColor = () =>{
            let r = generateRandomRGB();
            let g = generateRandomRGB();
            let b = generateRandomRGB();
            return `rgb(${r},${g},${b})`;
            
        }
        setColor(generateColor)
        
    },[])
  


    return(
         <div className="palletBox" onClick={copyColorCode} >
             <div className="palletBoxColor"style={{backgroundColor : color }}>
             </div>
             <div className="palletColorCode" >
            <p>{color}</p>
             </div>
             <div className="copyText">
                <p>  {copyText ? <span>Copied</span> : '' } </p>
             </div>
         </div>
    )
}

export default ColorPallet;