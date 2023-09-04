import { Linking, PermissionsAndroid, Platform } from "react-native";
import dynamicLinks from "@react-native-firebase/dynamic-links";
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import RNFetchBlob from "rn-fetch-blob";
export const handleDynamicLink = async (navigation) => {
  console.log('handleDynamicLink')
    if (Platform.OS === "android") {
      const initurl = await Linking.getInitialURL();
      dynamicLinks()
        .getInitialLink()
        .then((link) => {
          console.log({link})
          if (
            (link?.url &&
              link?.url?.includes("https://mentoga.com/mentoronline")) ||
            link?.url?.includes("https://mentogaa") || link?.url?.includes("https://mentoga.com")
          ) {
            let id = link?.url.split("/").pop();
            if (id.includes("utm_source")) {
              id = id.split("?");
              navigation.navigate("DetailsScreen", { id: id[0] });
            } else {
              navigation.navigate("DetailsScreen", { id: id });
            }
          }
        });
    }
  };


  export const getLinkIfExist=(navigation)=>{
    if (Platform.OS === "android") {
      console.log('android')
        handleDynamicLink(navigation);
        
        Linking.addEventListener("url", callback);
        const callback = ({ url }) => {
          console.log('callback')
          let ss = decodeURI(url);
          if (ss && ss.includes("mentoronline")) {
            let id = ss.split("%2F").pop();
            if (id.includes("utm_source")) {
              id = id.split("?");
              navigation.navigate("DetailsScreen", { id: id[0] });
            } else {
              navigation.navigate("DetailsScreen", { id: id });
            }
          }
        };
      } else {
        Linking.getInitialURL().then((link) => {
          if (
            (link && link?.includes("https://mentoga.com/mentoronline")) ||
            link?.includes("https://mentogaa")
          ) {
            let id = link?.split("/").pop();
  
            if (id.includes("utm_source")) {
              id = id.split("?");
              navigation.navigate("DetailsScreen", { id: id[0] });
            } else {
              navigation.navigate("DetailsScreen", { id: id });
            }
          }
        });
      }
  }


 export const hasAndroidPermission=async()=> {
    const getCheckPermissionPromise = () => {
      if (Platform.Version >= 33) {
        return Promise.all([
          PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES),
          PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO),
        ]).then(
          ([hasReadMediaImagesPermission, hasReadMediaVideoPermission]) =>
            hasReadMediaImagesPermission && hasReadMediaVideoPermission,
        );
      } else {
        return PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
      }
    };
  
    const hasPermission = await getCheckPermissionPromise();
    if (hasPermission) {
      return true;
    }
    const getRequestPermissionPromise = () => {
      if (Platform.Version >= 33) {
        return PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES,
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO,
        ]).then(
          (statuses) =>
            statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES] ===
              PermissionsAndroid.RESULTS.GRANTED &&
            statuses[PermissionsAndroid.PERMISSIONS.READ_MEDIA_VIDEO] ===
              PermissionsAndroid.RESULTS.GRANTED,
        );
      } else {
        return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE).then((status) => status === PermissionsAndroid.RESULTS.GRANTED);
      }
    };
  
    return await getRequestPermissionPromise();
  }


  export const base64ToURI = async (base64Data) => {
    try {
      // Convert the base64 data to bytes
      const imageData = atob(base64Data);
      const arrayBuffer = new ArrayBuffer(imageData.length);
      const uint8Array = new Uint8Array(arrayBuffer);
      for (let i = 0; i < imageData.length; i++) {
        uint8Array[i] = imageData.charCodeAt(i);
      }
  
      // Get the directory path where the image will be saved
      const dirs = RNFetchBlob.fs.dirs;
      const temporaryDirPath = dirs.CacheDir; // or RNFetchBlob.fs.dirs.DocumentDir for persistent storage
  
      // Generate a random file name
      const randomFileName = `${Date.now()}.png`;
  
      // Combine the directory path and file name to get the full file path
      const filePath = `${temporaryDirPath}/${randomFileName}`;
  
      // Write the base64 data to the file
      await RNFetchBlob.fs.writeFile(filePath, uint8Array, 'base64');
  
      // Return the URI of the saved image
      return `file://${filePath}`;
    } catch (error) {
      console.log('Error saving image:', error);
      return null;
    }
  }  