import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Box from "../components/Box";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Box1 from "../components/Box1";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useRef } from "react";
export default function HomeScreen() {
  const bottomSheetModalRef = useRef(null);

  const snapPoints = ["90%"];

  function handleHome() {
    bottomSheetModalRef.current.present();
  }
  return (
    <GestureHandlerRootView className="flex-1">
      <BottomSheetModalProvider>
        <View className="bg-red-700 flex-1 p-6">
          {/* HomeSection */}
          <StatusBar Style="auto" />
          <View className="flex-row justify-between items-center">
            {/* TEXT  */}
            <Text className="text-white font-semibold text-2xl">Home</Text>

            {/* ICON 0NE */}
            <View className="mx-6 left-16">
              <MaterialIcons
                name="notifications-none"
                size={24}
                color="white"
              />
            </View>

            {/* ICON TWO */}

            <View>
              <TouchableOpacity>
                <Ionicons name="reorder-three-sharp" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          {/* END OF HOMESECTION */}
          {/* BOX SECTION */}

          <View>
            <TouchableOpacity onPress={handleHome}>
              <Box></Box>
              <View className="top-8 mx-2">
                <MaterialCommunityIcons
                  name="home-outline"
                  size={30}
                  color="black"
                />
              </View>
              <View className="mx-20 top-1">
                <Text className="text-lg">Home</Text>
              </View>
            </TouchableOpacity>
            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={0}
              snapPoints={snapPoints}
              backgroundStyle={{ borderRadius: 25 }}
            >
              {/*  */}
              <View className="mx-6">
                <View>
                  <View></View>
                </View>
                <Text className="text-lg text-red-950">Good Afternoon</Text>
                <Text className="text-2xl text-red-950 font-bold">
                  ANGELA ESSIEN (...
                </Text>
              </View>
            </BottomSheetModal>
          </View>

          {/* REST OF SECTION */}
          <View className="justify-between mt-6">
            {/* PROFILE */}
            <View className="mt-12 flex-row ">
              <View>
                <AntDesign name="user" size={24} color="white" />
              </View>
              <Text className="mx-6  text-white">Profile</Text>
            </View>

            {/* REGISTRATION */}
            <View className="mt-8 flex-row ">
              <View>
                <AntDesign name="profile" size={24} color="white" />
              </View>
              <Text className="mx-6  text-white">Registration</Text>
            </View>

            {/* RESULTS */}
            <View className="mt-8  flex-row">
              <View>
                <AntDesign name="barschart" size={24} color="white" />
              </View>
              <Text className="mx-6  text-white">Results</Text>
            </View>

            {/* FEES */}
            <View className="mt-8  flex-row">
              <View>
                <Ionicons name="wallet-outline" size={24} color="white" />
              </View>
              <Text className="mx-6  text-white">Fees</Text>
            </View>

            {/* TIMETABLE */}
            <View className="mt-8  flex-row">
              <View>
                <AntDesign name="calendar" size={24} color="white" />
              </View>
              <Text className="mx-6  text-white">Timetable</Text>
            </View>

            {/* LECTURER ASSESSMENT */}
            <View className="mt-8  flex-row">
              <View>
                <SimpleLineIcons
                  name="user-following"
                  size={24}
                  color="white"
                />
              </View>
              <Text className="mx-6  text-white">Lecturer Assessment</Text>
            </View>

            {/* STUDENTS'GUIDE */}
            <View className="mt-8  flex-row">
              <View>
                <Ionicons name="book-outline" size={24} color="white" />
              </View>
              <Text className="mx-6  text-white">Student's Guide</Text>
            </View>

            {/* NOTIFICATION */}
            <View className="mt-8  flex-row">
              <View>
                <Ionicons
                  name="notifications-outline"
                  size={24}
                  color="white"
                />
              </View>
              <Text className="mx-6  text-white">Notification</Text>
            </View>

            {/* DOWMLOADS */}
            <View className="mt-8  flex-row">
              <View>
                <MaterialCommunityIcons
                  name="arrow-collapse-down"
                  size={24}
                  color="white"
                />
              </View>
              <Text className="mx-6  text-white">Downloads</Text>
            </View>
          </View>
          {/* END OF REST */}
          <Box1></Box1>
          <View className="mt-6  flex-row">
            <View>
              <AntDesign name="setting" size={24} color="white" />
            </View>
            <Text className="mx-6 text-white">Settings</Text>
          </View>
        </View>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
