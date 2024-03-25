import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { BottomSheetProvider } from "@gorhom/bottom-sheet";
import { useRef } from "react";
import { View, Text, StyleSheet, handleBox } from "react-native";
export default function Box({ children, style }) {
  return (
    <View style={[styles.Box, style]}>
      <Text style={[styles.text, style]}>{children}</Text>

      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  Box: {
    padding: 10,
    backgroundColor: "#fff",
    width: 310,
    height: 50,
    marginTop: 20,
    borderRadius: 10,
    justifyContent: "center",
    position: "absolute",
  },
});
