import React from "react";
import VideoListItem from "./video_list_item";

const VideoList = (props) => {

   // console.log("Props is : ", props);
    const videoItems = props.videos.map((video) => {
       // console.log("Videos are: ", video);
        return <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video}/>
    });

    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
}

export default VideoList;