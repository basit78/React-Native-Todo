import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import colors from '../../theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AppInput({
  value,
  onBtnPress,
  placeholder,
  onChange,
  isPass,
  isIcon,
  isDropdown,
  iconName,
  options,
  inputContainer = {},
  type,
  placeholderColor,
  isText,
  textBtn,
  ...props
}) {
  const [visible, setVisible] = useState(isPass ? false : true);
  return (
    <View style={[styles.inputContainer, inputContainer]}>
      <>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={
            placeholderColor ? placeholderColor : colors.WHITE
          }
          value={value}
          onChangeText={val => onChange(val)}
          selectionColor={colors.WHITE}
          secureTextEntry={!visible}
          {...props}
          style={[styles.input, props?.style ? props.style : {}]}
          keyboardType={type}
        />

        {isPass ? (
          <TouchableOpacity onPress={() => setVisible(!visible)}>
            <Ionicons
              name={visible ? 'eye-outline' : 'eye-off-outline'}
              color={colors.WHITE}
              size={22}
            />
          </TouchableOpacity>
        ) : (
          <></>
        )}
        {isText ? (
          <TouchableOpacity onPress={onBtnPress}>
            <Text
              style={{
                color: colors.PRIMARY,
                fontSize: 14,
                fontFamily: fonts.latoRegular,
                fontWeight: 'bold',
              }}>
              {textBtn}
            </Text>
          </TouchableOpacity>
        ) : (
          <></>
        )}
        {isIcon ? (
          <TouchableOpacity>
            <Ionicons name={iconName} color={colors.GREY} size={22} />
          </TouchableOpacity>
        ) : (
          <></>
        )}
      </>
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: '#9C9CA6',
    height: 44,
    borderRadius: 5,
    // justifyContent:"center",
    paddingLeft: 20,
    paddingRight: 10,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: -1,
  },
  input: {
    color: colors.WHITE,
    fontSize: 14,
    // fontFamily: fonts.latoRegular,
    // backgroundColor:"green",
    flex: 1,
    // zIndex: 0
  },
});
