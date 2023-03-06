import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppInput from '../../../../component/AppInput';
import {colors, fonts} from '../../../../theme';

const Signin = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: '100%',
          height: 100,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: colors.WHITE,
            fontFamily: fonts.sfproBold,
            fontSize: 30,
          }}>
          Sign In
        </Text>
      </View>
      <AppInput
        placeholder={'Email'}
        inputContainer={{width: '90%', alignSelf: 'center',marginTop:20}}
      />
      <AppInput
        placeholder={'Password'}
        inputContainer={{width: '90%', alignSelf: 'center',marginTop:20}}
        isPass={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
  },
});

export default Signin;
