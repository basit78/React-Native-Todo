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
import {useNavigation} from '@react-navigation/native';

const Signup = () => {
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
            Sign Up
          </Text>
        </View>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <AppInput
            placeholder={'User Name'}
            inputContainer={{width: '100%', marginTop: 20}}
          />
          <AppInput
            placeholder={'Email'}
            inputContainer={{width: '100%', marginTop: 20}}
          />
          <AppInput
            placeholder={'Password'}
            inputContainer={{width: '100%', marginTop: 20}}
            isPass={true}
          />
          <AppButton title={'Sign Up'} />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: 20,
            }}>
            <View
              style={{height: 1, width: '45%', backgroundColor: '#9C9CA6'}}
            />
            <Text style={{color: '#9C9CA6'}}>Or</Text>
            <View
              style={{height: 1, width: '45%', backgroundColor: '#9C9CA6'}}
            />
          </View>
          <AppButton
            title={'Continue with Google'}
            containerStyle={{
              backgroundColor: colors.PRIMARY,
              borderColor: '#F5F5F5',
              borderWidth: 1,
            }}
            textStyle={{color: colors.WHITE}}
            hasIcon={<Icon name="logo-google" type="ionicon" />}
          />
          <AppButton
            title={'Continue with Facebook'}
            containerStyle={{
              backgroundColor: colors.PRIMARY,
              borderColor: '#F5F5F5',
              borderWidth: 1,
            }}
            textStyle={{color: colors.WHITE}}
            hasIcon={<Icon name="logo-facebook" type="ionicon" />}
          />
          <View style={{flexDirection: 'row', alignSelf: 'center'}}>
            <Text style={{color: '#9C9CA6'}}>Already Have An Account ?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
              <Text style={{color: colors.WHITE}}> SignIn here</Text>
            </TouchableOpacity>
          </View>
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

export default Signup;
