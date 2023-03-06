import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../../theme';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.heading2}>TO DO</Text>
        <Text style={{color: '#9C9CA6'}}>Remind Everythings</Text>
      </View>
      <View style={styles.circle}>
        <View style={styles.centerCircle}>
          <View style={styles.centerCircle2}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
  },
  circle: {
    width: 90,
    height: 90,
    borderRadius: 100,
    backgroundColor: '#9C9CA6',
    alignSelf: 'center',
    marginTop: -50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerCircle: {
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: '#2D2F46',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerCircle2: {
    width: 10,
    height: 10,
    borderRadius: 20,
    backgroundColor: '#9C9CA6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    width: '100%',
    height: '50%',
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading2: {
    fontFamily: fonts.sfproBold,
    color: colors.PRIMARY,
    fontSize: 60,
  },
});

export default SplashScreen;
