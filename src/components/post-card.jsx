import { formatTimeAgo } from "@/lib/utils";
import { isAuthenticated } from "@/services/auth.service";
import { toggleLike } from "@/services/social.service";
import { MoreHorizontal } from "lucide-react";
import React, { useState } from "react";

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(post.liked);
  const [likeCount, setLikeCount] = useState(post.like_Count || 0);
  const [loading, setLoading] = useState(false);
  const avatarLetter = post.username?.charAt(0).toUpperCase();
  const handleLike = async (e) => {
    e.preventDefault();
    if (loading) return;
    if (!isAuthenticated()) {
      window.location.href = "/login";
      return;
    }
    const nextLiked = !liked;
    setLiked(nextLiked);
    setLikeCount((prev) => (nextLiked ? prev + 1 : prev - 1));
    setLoading(true);
    try {
      const res = await toggleLike(post.post_id, nextLike ? "like" : "unlike");
      setLiked(res.liked);
      setLikeCount(res.like_count);
    } catch (err) {
      setLiked(!nextLiked);
      setLikeCount((prev) => (nextLiked ? prev - 1 : prev + 1));
    } finally {
      setLoading(false);
    }
  };

  return (
    <article className="group border-b border-gray-300 last:border-b-0 px-6 py-5">
      <div className="flex gap-3">
        <div className="flex flex-col items-center gap-1 shrink-0">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-500 flex items-center justify-center text-white font-bold text-sm">
            {avatarLetter}
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-0.5">
            <div className="flex items-center gap-1.5 min-w-0">
              <span className="font-semibold text-gray-900 truncate">{post.username}</span>
              <span className="text-gray-400 shrink-0">{formatTimeAgo(post.created_at)}</span>
            </div> 
            <button className="p-2 rounded-full text-gray-600 hover:bg-gray-100">
              <MoreHorizontal size={18}/>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PostCard;
