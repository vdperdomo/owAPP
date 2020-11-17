import React, { useState } from 'react';
import { StyleSheet, Switch } from 'react-native';
import { StyleProvider } from 'native-base';
import AdminNavigator from './src/navigation/admin.navigation';
import UserNavigator from './src/navigation/user.navigation';
import getTheme from './src/assets/native-base-theme/components';
import material from './src/assets/native-base-theme/variables/material';
import { StatusBar } from 'react-native';

export default function App() {

  const [isAdmin, setIsAdmin] = useState(true);
  const toggleSwitch = () => setIsAdmin(previousState => !previousState);

  return (
    <React.Fragment>


      <StatusBar style={ { color: 'white' } } />

      <StyleProvider style={ getTheme(material) }>
        <React.Fragment>
          { (isAdmin) ? <AdminNavigator /> : null }
          { (!isAdmin) ? <UserNavigator /> : null }
        </React.Fragment>
      </StyleProvider>

      <Switch
        trackColor={ { false: "#767577", true: "#f4f3f4" } }
        thumbColor={ isAdmin ? "#ff0000" : "#f4f3f4" }
        ios_backgroundColor="#3e3e3e"
        onValueChange={ toggleSwitch }
        value={ isAdmin }
        style={ { backgroundColor: '#000' } }
      />
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    justifyContent: 'center'
  }
});
