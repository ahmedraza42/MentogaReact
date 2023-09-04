import AudioRecorderPlayer, {
  AVEncoderAudioQualityIOSType,
  AVEncodingOption,
  AVModeIOSOption,
  AudioEncoderAndroidType,
  AudioSourceAndroidType,
  OutputFormatAndroidType,
} from "react-native-audio-recorder-player";

export const constatForPermission = {
  title: "Permission to use camera",
  message: "We need your permission to use your camera",
  buttonPositive: "Ok",
  buttonNegative: "Cancel",
};
export const constatForAudioPermission = {
  title: "Permission to use audio recording",
  message: "We need your permission to use your audio",
  buttonPositive: "Ok",
  buttonNegative: "Cancel",
};

export const audioSets = {
    AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
    AudioSourceAndroid: AudioSourceAndroidType.MIC,
    // AVModeIOS: AVModeIOSOption.measurement,
    AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
    AVNumberOfChannelsKeyIOS: 2,
    AVFormatIDKeyIOS: AVEncodingOption.aac,

  };
