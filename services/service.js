import TrackPlayer from "react-native-track-player";


module.exports = async () => {
    // Set up the player
    TrackPlayer.addEventListener('remote-player', 
    ()=>TrackPlayer.play())
    

    TrackPlayer.addEventListener('remote-pause', 
    ()=> TrackPlayer.pause());

}