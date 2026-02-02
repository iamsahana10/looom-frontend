import React, { useState } from 'react'
import { Textarea } from "@/components/ui/textarea"
import { Button } from './ui/button';

const ThreadForm = () => {
    const [content,setContent]=useState("");
    const handleSubmit=(e)=>{
          e.preventDefault();
        console.log("Posting:",content);
        setContent("");
    }
  return (
    <form  onSubmit={handleSubmit} className="bg-white rounded-b-2xl overflow-hidden w-full max-w[620px]">
        <div className="flex gap-3 px-5 pt-4">
            <div className="felx flex-col items-center ">
                <div className="w-9 h-9 rounded-full bg-gray-400 shrink-0"></div>
                <div className="w-[2px] grow bg-black/10 my-2 rounded-full"></div>
            </div>
            <div className="flex-1 flex  flex-col gap-1">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold">Sahana</span>
                </div>
                  <Textarea value={content} onChange={(e)=>setContent(e.target.value)} placeholder="What's new?"  className="bg-transparent border-none p-0 focus-visible:ring-0 resize-none min-h-[80px] leading-relaxed placeholder-text:text-gray-500"/>
            </div>
        </div>
        <div className="px-5 py-3 flex items-center justify-end border-t border-black/10 ">
            <Button type="submit" disabled={!content.trim()} className="bg-black text-white font-semibold text-sm cursor-pointer hover:bg-gray-800 disabled:opacity-50 px-6 rounded-full transition-all">Post</Button>        
        </div>
    </form>
  )
}

export default ThreadForm