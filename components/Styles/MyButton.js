import * as React from 'react';
import { Text, View, Button } from 'react-native';

export default function MyButton({ title, onPress, color }) {
  return (
    <View>
      <Button
        title={title}
        color={color}
        onPress={onPress} 
        />  
    </View>
  );
}