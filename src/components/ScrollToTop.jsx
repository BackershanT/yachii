import React, { useEffect, useState } from "react";

const ScroolToTop = () => {
    const [visible, setVisible] = useState(false);
    const toggleVisibility =()=>{
        if(window.scrollY > 200){
            setVisible(true);
        }else{
            setVisible(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',toggleVisibility);
        return ()=>window.removeEventListener('scroll',toggleVisibility);
    },[]);
    return (
        visible && (
            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center active">
                <i className="bi bi-arrow-up-short"></i>
            </a>)
    )
}

export default ScroolToTop;