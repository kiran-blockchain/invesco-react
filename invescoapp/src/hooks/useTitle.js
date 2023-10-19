import { useEffect, useState } from "react"

export const useTitle =()=>{
    const [title,setTitle] = useState("");
    useEffect(()=>{
        const htmlTitle = document.querySelector('title');
        htmlTitle.innerText = `Cart-(${title})`;
    },[title])
    return {setTitle};
};