import { useContext } from "react";
import { ProfileContext } from "../context/ProfileContext";
import analytics from "@react-native-firebase/analytics";

export const userReviewMentor = async (item,userProfile) => {
  try {
    await analytics().logEvent("User_Review_Mentor_profile", {
      username: userProfile?.firstName + " " + userProfile?.lastName,
      mentorName: item?.firstName + " " + item?.lastName,
      event: "review profile",
    });
  } catch (error) {
    console.log("logEventOnFirebaseAnalytics", error);
  }
};

export const userSelectSlotOfMentor = async (mentor, checked) => {
  try {
    await analytics().logEvent("User_Select_slot_of_mentor", {
      mentorName: mentor?.firstName + " " + mentor?.lastName,
      paymentCode: checked,
      event: "reserved slot",
    });
  } catch (error) {
    console.log("logEventOnFirebaseAnalytics", error);
  }
};

export   const userBookedBooking = async () => {
    try {
      await analytics().logEvent("User_Booked_booking", {
        event: "successfully booked",
      });
    } catch (error) {}
  };

  export   const userPaymentForBooking = async (item,mentor) => {
    const data = {
      transaction_id: item?.id || item?.bookingID || "",
      value: price,
      currency: "USD",
      tax: 0,
      shipping: 0,
      coupon: "null",
      items: [
        {
          item_id: item?.id || item?.bookingID || "",
          item_name: mentor?.firstName + " " + mentor?.lastName,
          item_list_name: item?.paymentCode,
          price: price,
        },
      ],
    };
    try {
      await analytics().logEvent("purchase", data);
    } catch (error) {
      console.log("logEventOnFirebaseAnalytics", error);
    }
  };
