import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

import {globalColor} from '../constant/color';
import {useTimer} from '../hook/useTimer';
const Stopwatch = () => {
  const {time, startTimer, pauseTimer, resetTimer, isActive} = useTimer({
    initialTime: 0,
    delay: 1000,
  });
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Hey! everyone welcome to stopwatch</Text>
      <View style={styles.timeContainerText}>
        <Text style={styles.timeText}>{time}</Text>
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.btn} onPress={startTimer}>
          <Text style={styles.btnText}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={pauseTimer}>
          <Text style={styles.btnText}>Pause</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn} onPress={resetTimer}>
          <Text style={styles.btnText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Stopwatch;

const styles = StyleSheet.create({
  container: {
    backgroundColor: globalColor.accentColor,
    height: '100%',
    width: '100%',
  },
  heading: {
    textAlign: 'center',
    color: globalColor.textColor,
    fontWeight: 'bold',
    fontSize: 32,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginTop: 30,
  },
  btn: {
    backgroundColor: globalColor.errorColor,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  btnText: {
    fontSize: 16,
    textAlign: 'center',
    color: globalColor.textColor,
    fontWeight: '600',
  },
  timeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 22,
  },
  timeContainerText: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 200,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#fff',
    alignSelf: 'center',
    marginTop: 150,
  },
});
