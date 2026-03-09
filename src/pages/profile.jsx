import { getUserPosts, getUserProfile } from "@/services/profile.service";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const loadProfile = async () => {
    try {
      const [profile, userPosts] = await Promise.all([
        getUserProfile(id),
        getUserPosts(id),
      ]);
      (setUser(profile), setPosts(userPosts));
    } catch (error) {
      setError(error.message || "Failed to Load User Profile");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    loadProfile();
  }, [id]);
  console.log(user);
  console.log(posts);
  return <div>Profile</div>;
};

export default Profile;
