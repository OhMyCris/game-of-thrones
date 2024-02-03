import Player from "@madzadev/audio-player";
// import "@madzadev/audio-player/dist/index.css";



const tracks = [
  {
    url: "../../public/got-theme.mp3",
    title: "Game Of Thrones Theme",
    tags: ["ambient"],
  }
];

const Player1 = () => {
  
  return (
    <div>
      <Player 
      trackList={tracks}
      includeTags={false}
      includeSearch={false}
      showPlaylist={false}
      autoPlayNextTrack={false}
      />
    </div>
  )
}

export default Player1
