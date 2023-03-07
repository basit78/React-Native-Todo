import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '../../../component/Icon';
import { colors } from '../../../theme';
const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View>
      <Text>SettingsScreen</Text>
    </View>
  );
}
function SettingsScreen2() {
  return (
    <View>
      <Text>SettingsScreen</Text>
    </View>
  );
}
function SettingsScreen3() {
  return (
    <View>
      <Text>SettingsScreen</Text>
    </View>
  );
}
function SettingsScreen4() {
  return (
    <View>
      <Text>SettingsScreen</Text>
    </View>
  );
}

const Bottom = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {backgroundColor:colors.PRIMARY},
        tabBarActiveTintColor: colors.WHITE,
        
      })}
      >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="dashboard" color={color} size={size} type="material" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="heart" color={color} size={size} type="ant-design" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings2"
        component={SettingsScreen2}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="add-circle" color={color} size={size} type="ionicon" />
          ),
        }}
      />
      <Tab.Screen
        name="Settings3"
        component={SettingsScreen3}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              name="notifications"
              color={color}
              size={size}
              type="ionicon"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings4"
        component={SettingsScreen4}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon
              name="local-activity"
              color={color}
              size={size}
              type="material"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Bottom;
