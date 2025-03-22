import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is an about page</Text>
      <Link href="/settings">
        <Text style={styles.button}>Settings</Text>
      </Link>
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