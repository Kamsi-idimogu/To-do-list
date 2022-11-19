import React , {useEffect} from "react";

export default function Modal({hide, message, isModalOpen}){
    useEffect(() => {
        if(isModalOpen){
            setTimeout(()=>{ hide() }, 3000) 
        }
    },[isModalOpen])

    return (
        <div className={`modal ${isModalOpen ? 'show' : 'hide'}`}> 
            <p>{message}</p>
        </div>
    )
}