import React from "react";
import VideoCard from "./VideoCard";

function VideoList({ videos }: { videos?: any[] }) {
  return (
    <section className="max-w-[1250px] mx-auto px-4 pt-3 mb-5">
      <h1 className="text-3xl font-[1000] text-white mb-5">Video chính thức</h1>
      <div className="flex justify-start gap-3 ">
        {videos &&
          videos
            .slice(0, 5)
            .map((video, index) => <VideoCard key={index} video={video} />)}
      </div>
    </section>
  );
}

export default VideoList;
