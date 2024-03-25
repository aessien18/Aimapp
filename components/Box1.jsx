import { View, Text, StyleSheet } from "react-native";
export default function Box1({ children, style }) {
  return (
    <View style={[styles.Box1, style]}>
      <Text>{children}</Text>
      <View>
        <Text></Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Box1: {
    padding: 0.2,
    width: 335,
    height: 1,
    backgroundColor: "#ffff",
    marginTop: 20,
  },
});
