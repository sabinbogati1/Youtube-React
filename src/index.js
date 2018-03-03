import React, {Component} from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import VideoList from "./../components/video_list";
import VideoDetail from "./../components/video_detail";
import _ from "lodash";

import SearchBar from "./../components/search_bar";

const API_KEY = "AIzaSyBtR3rI0F3gxo4NAuynj0lORieY-KMhoyg";

class App extends Component{

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("sabin bogati");

  }


  videoSearch(term) {
    // YTSearch({ key: API_KEY, term: "sabin bogati" }, (data)=> {
      YTSearch({ key: API_KEY, term: term }, (data)=> {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      })
    });
  }

  render() {

    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 1000);

    return (
      <div>
        <SearchBar onSearchTermChange={term => this.videoSearch(term)} />
        <VideoDetail video={this.state.selectedVideo}  />
        <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.querySelector(".container"));