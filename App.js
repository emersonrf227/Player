import React, {useEffect} from 'react';
import TrackPlayer, {State, Event} from 'react-native-track-player';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import trackPlayerServices from './services/trackPlayerServices';

const track = {
  id: '1',
  url: 'https://s08.maxcast.com.br:8016/live?id=1572558656328', // Load media from the network
  title: 'Avaritia',
  artist: 'deadmau5',
  album: 'while(1<2)',
  genre: 'Progressive House, Electro House',
  date: '2014-05-20T07:00:00+00:00', // RFC 3339
  artwork:
    'https://i2.wp.com/www.otacast.com.br/wp-content/uploads/2021/09/photo_2021-10-19_22-09-15.jpg?resize=1140%2C624&ssl=1', // Load artwork from the network
  duration: 402, // Duration in seconds
};

const App = () => {
  useEffect(() => {
    (async () => {
      await TrackPlayer.setupPlayer().then(() => {
        console.log('player');
      });

      TrackPlayer.registerPlaybackService(() => trackPlayerServices);

      await TrackPlayer.add([track]);
      // await TrackPlayer.stop();
    })();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          styles={styles.button}
          onPress={() => TrackPlayer.pause()}>
          <Text style={styles.text}>Pause</Text>
        </TouchableOpacity>

        <TouchableOpacity
          styles={styles.button}
          onPress={() => TrackPlayer.play()}>
          <Text style={styles.text}>Play</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity
          styles={styles.button}
          onPress={() => TrackPlayer.skipToPrevious()}>
          <Text style={styles.text}>Prev</Text>
        </TouchableOpacity>

        <TouchableOpacity
          styles={styles.button}
          onPress={() => TrackPlayer.skipToNext()}>
          <Text style={styles.text}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  button: {
    backgroundColor: '#ff0044',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    width: 160,
  },
  text: {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 30,
  },
});

export default App;
