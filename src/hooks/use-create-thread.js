import { useState } from "react"


export function useCreateThread(){
  const[open,setOpen]=useState(false);
  return{
    open,
    setOpen,
    openDailog:()=>setOpen(true),
    closeDailog:()=>setOpen(false)
  }
}
