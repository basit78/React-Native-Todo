import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AppButton from '../../../../component/AppButton';
import AppInput from '../../../../component/AppInput';
import Icon from '../../../../component/Icon';
import {colors, fonts} from '../../../../theme';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
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
           Forgot Password
          </Text>
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <AppInput
            placeholder={'Enter Your Email'}
            inputContainer={{width: '100%', marginTop: 20}}
          />
          <AppButton title={'Forgot'} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
  },
});

export default ForgotPassword;
