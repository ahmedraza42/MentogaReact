import { launchImageLibrary } from "react-native-image-picker";
import { Hardware } from "./Hardware";

export const requstLaunchImageLibrary = async () => {
  const photoPermission = await Hardware.requestPhotosPermission();
  if (photoPermission) {
    const res = await handleLaunchImageLibrary();
    return res;
  }
};

export const handleLaunchImageLibrary = async () => {
    const res = await launchImageLibrary({
      mediaType: "mixed",
    });
    return res;
};
