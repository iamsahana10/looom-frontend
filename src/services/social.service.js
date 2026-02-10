export const likePost=async(postId)=>{
    try{
        const res=await api.post("/posts/{postId}/like");
        return res.data;
    }catch(err){
        console.error(err);
    }
}