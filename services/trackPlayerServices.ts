import TrackPlayer from "react-native-track-player";

export default async function trackPlayerServices() {

  TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());

  TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());

  TrackPlayer.addEventListener('playback-track-changed', () => {

  });

  TrackPlayer.addEventListener('playback-state', (state) => {
    console.log('playback-state', state);
  });
}