import * as React from 'react';
import { Button, View, Text } from "react-native";
function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
            title="Go to Login page"
            onPress={() => navigation.navigate('login')}
        />
      </View>
    );
  }
export default HomeScreen;