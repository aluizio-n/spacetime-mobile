import { StatusBar } from "expo-status-bar";
import { ImageBackground, Text, View } from "react-native";
import blurBg from "./assets/bg-blur.png";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import Stripes from "./assets/stripes.svg";

import { BaiJamjuree_700Bold } from "@expo-google-fonts/bai-jamjuree";
import { styled } from "nativewind";

export default function App() {
  const StyledStripes = styled(Stripes);

  const [hasLoadedFonts] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    BaiJamjuree_700Bold,
  });

  if (!hasLoadedFonts) {
    return null;
  }

  return (
    <ImageBackground
      source={blurBg}
      className=" bg-gray-950 flex-1 items-center relative"
      imageStyle={{ position: "absolute", left: "-100%" }}
    >
      <StyledStripes className="absolute left-2" />
      <Text className=" text-zinc-50 text-5xl font-alt"></Text>
      <StatusBar style="light" />
    </ImageBackground>
  );
}
