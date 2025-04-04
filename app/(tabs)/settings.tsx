import { StyleSheet, Text, View, } from "react-native";

export default function settings() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the settings page</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#25292e',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#fff',
    },
    button: {
      fontSize: 20,
      textDecorationLine: 'underline',
      color: '#fff',
    },
  });