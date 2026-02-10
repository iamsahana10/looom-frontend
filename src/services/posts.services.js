export const createPost=async(data)=>{
    try{
        const res=await api.post("/posts",data);
        return res.data;
    }catch(err){
        console.error(err);
    }
}