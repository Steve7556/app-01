import { Text, View } from "react-native";
import{ NativeWindStyleSheet } from "nativewind"

NativeWindStyleSheet.setOutput({
  default: "native"
})

export default function Index() {
  return (
    <View className="items-center flex-1 justify-center bg-white">
      <Text className="font-pblack text-3xl">Aora</Text>
    </View>
  );
}
