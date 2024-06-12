import React, { useState } from "react";

const SearchedCollerPallet = ({enterColor})=>{
    const [copyText,setCopyText] = useState(false)
    let [color,setColor] = useState()

    function copySearchedColor(e){
       
        e.stopPropagation();
        navigator.clipboard.writeText(enterColor)
        setCopyText(true);

        setTimeout(()=>{
            setCopyText(false);
        },500)
   
    }



    return(

        <div className="searchCollorPallet" onClick={copySearchedColor}>
             <div className="searchCollorPalletBox" style={{ backgroundColor : enterColor }}>
             </div>
             <div className="palletColorCode" >
            <p>{enterColor}</p>
             </div>
             <div className="copyText">
                <p>  {copyText ? <span>Copied</span> : '' } </p>
             </div>
        </div>
    )
}


export default SearchedCollerPallet;