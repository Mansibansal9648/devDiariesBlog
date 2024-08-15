import { useRef } from "react";

export default function useDebounce(){
    const timeoutRef = useRef(null)
    return ((callback,delay)=>{  
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current)
        }
        timeoutRef.current = setTimeout(()=>{
            callback()
        },delay)
    })
}