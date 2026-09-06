import { useState } from "react";
import "./App.css";
import bgimage from "./assets/racha.jpg";
import { Heart, Bookmark } from "lucide-react";
function App() {
  let [isLiked, setIsLiked] = useState(false);
  let [isSaved, setIsSaved] = useState(false);
  let [isFollowing, setIsFollowing] = useState(false);

  function handleLike(){
    setIsLiked(!isLiked)
  }
  function handleFollow(){
    setIsFollowing(!isFollowing)
  }
  function handleSave(){
    setIsSaved(!isSaved)
  }
  return (
    <>
      <section className="h-screen flex items-center justify-center bg-gray-300 ">
        <div
          className="card relative w-[600px] h-[350px] bg-pink-500 rounded-lg"
          style={{
            backgroundImage: `url(${bgimage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute top-[30%] right-3 flex flex-col gap-3 items-center justify-center">
            <Heart onClick={handleLike} className={isLiked ? "h-7 w-7 fill-red-500 text-red-500 cursor-pointer" : "h-7 w-7 text-white cursor-pointer"} />
            <p className="text-white font-bold">{isLiked ? 1000 : 999}</p>
            <Bookmark onClick={handleSave} className={isSaved ? "h-7 w-7 text-white fill-white cursor-pointer" : "h-7 w-7 text-white cursor-pointer"} />
            <button className={isFollowing ? "text-white font-medium bg-gray-700 p-3 rounded-xl" : "text-white font-medium bg-gray-500 p-3 rounded-xl"} onClick={handleFollow}>{isFollowing ? 'Following' : 'Follow'}</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
