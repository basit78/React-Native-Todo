import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {fonts, colors} from '../../theme';

export default function AppButton({
  hasIcon = false,
  isLoading,
  title,
  containerStyle,
  onPress,
  textStyle = {},
}) {
  return (
    <TouchableOpacity
      style={[styles.btnContainer, containerStyle]}
      onPress={onPress}
      disabled={isLoading}>
      <View style={{position: 'absolute', left: 15}}>
        {hasIcon ? hasIcon : <></>}
      </View>
      {isLoading ? (
        <ActivityIndicator color={colors.WHITE} />
      ) : (
        <Text style={[styles.title, textStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: colors.WHITE,
    borderRadius: 5,
    height: 44,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    // zIndex:-1
  },
  title: {
    fontSize: 15,
    color: colors.PRIMARY,
    fontFamily: fonts.sfproBold,
  },
});
