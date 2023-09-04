import { get, post } from "./request";

let liveapi = `https://api.mentoga.com/api`; //live
let staggingapi = `https://stgapiv2.mentoga.com/api`; //stagging

let liveimg = `https://api.mentoga.com`; //live
let staggingimg = `https://stgapiv2.mentoga.com`; //stagging

export const BASE_URL = staggingapi; //staging
export const BASE_URL_FOR_IMAGES = staggingimg;

export const CaroselCareerCounsellingid = 91; //live 91    // stagging 83
export const CaroselPersonalDevelomentid = 92; //live 92    // stagging 84

/////////  Mentoga Feeds Api contants /////////////////

// define constant here

export const BASE_S3_BUCKET_URL =
  "https://gok-mentoga.s3.us-east-1.amazonaws.com";
export const FEED_SERVER_BASE_URL = "https://skilledgeeks.us";
export const FEED_SERVER_GRAPHQL_URL = `${FEED_SERVER_BASE_URL}/graphql`;

////////////////

export const API_URLS = {
  login: `${BASE_URL}/account/login`,
  switchAccount: `${BASE_URL}/user/switch-user-account-type`,
  signup: `${BASE_URL}/account/signup`,
  Validity: `${BASE_URL}/account/tokenValidity`,
  fbLogin:
    "https://graph.facebook.com/v2.5/me?fields=first_name,email,last_name,middle_name,picture.type(large),friends&access_token=",
  menteeDashboard: `${BASE_URL}/Dashboard/menteev2?UTCdateTime=`,
  HomePreferedMentors: `${BASE_URL}/home/prefredMentors`,
  HomePreferedMentorsDetails: `${BASE_URL}/home/webProfile?mentorid=`,
  HomePreferedMentorsDetailsWithUniqueName: `${BASE_URL}/home/webProfile-uniqueName?uniqueName=`,
  dynamicCarusel: `${BASE_URL}/home/get-carousel-data`,
  searchMentors: `${BASE_URL}/home/searchMentors`,
  searchMentors_v1: `${BASE_URL}/home/searchMentors_v1`,
  filterCategory: `${BASE_URL}/home/filterCategory?limitSize=10`,
  bookingSlots: `${BASE_URL}/home/bookingSlots`,
  menteeProfile: `${BASE_URL}/mentee/Get`,
  getMentorPackages: `${BASE_URL}/home/packages?mentorid=`,
  createBooking: `${BASE_URL}/booking/createUpdateBooking`,
  paymentDetails: `${BASE_URL}/home/paymentDetails`,
  UpdateProfile: `${BASE_URL}/Mentee/Update`,
  UploadImage: `${BASE_URL}/mentee/UploadImage`,
  BookingListing: `${BASE_URL}/Booking/userCompletedAndUpcomingBookings`,
  totalBooking: `${BASE_URL}/Booking/userTotalBookings`,
  todayBooking: `${BASE_URL}/Booking/userTodayBookings`,
  AllBlogs: `${BASE_URL}/Blog/GetAll`,
  blogDetail: `${BASE_URL}/Blog/GetDetail?slug=`,
  advancebookingMentorSlots: `${BASE_URL}/advancebooking/get-advance-mentor-Slots`,
  createAdvanceBooking: `${BASE_URL}/advancebooking/create-advance-booking`,
  listMenteeAdvanceBooking: `${BASE_URL}/advanceBooking/list-mentee-advance-booking`,
  advanceBookingDetail: `${BASE_URL}/advancebooking/advance-booking-detail?bookingid=`,
  checkMentorSlots: `${BASE_URL}/home/check-mentor-advance-booking`,
  getRescheduleSlots: `${BASE_URL}/reschedulebooking/get-booking-reschedule-slots`,
  menteeReschedulemMeeting: `${BASE_URL}/reschedulebooking/mentee-reschedule-meeting`,
  disputeReason: `${BASE_URL}/home/dispute-reason-mentee`,
  sendDisputeReason: `${BASE_URL}/menteedisputeresolution/mentee-dispute-resolution-create-update`,
  disputeList: `${BASE_URL}/menteedisputeresolution/get-mentee-dispute-listing`,
  transactionHistory: `${BASE_URL}/userWallet/get-transaction-history`,
  getAvailableBlns: `${BASE_URL}/userWallet/get-available-balance`,
  checkIfMenteeHaveWalletPayment: `${BASE_URL}/userWallet/check-for-booking-payment?_menteeBookingAmount=`,
  menteeWalletBooking: `${BASE_URL}/payment/mentee-wallet-booking`,
  createReview: `${BASE_URL}/mentorrating/create-mentee-review`,
  reviewList: `${BASE_URL}/mentorrating/mentor-review-listing?mentorid=`,
  CreateCalender: `${BASE_URL}/home/mobile-calendar-create`,
  updateUserTimezone: `${BASE_URL}/home/update-user-timezone`,
  menteeWalletAdvanceBooking: `${BASE_URL}/payment/mentee-wallet-advance-booking`,
  instantMeetingSearchMentor: `${BASE_URL}/InstantMeeting/searchMentors`,
  requestInstantMeeting: `${BASE_URL}/InstantMeeting/request-instant-meeting`,
  chatMedia: `${BASE_URL}/chat/user-chat-media`,
  userChats: `${BASE_URL}/chat/user-chats`,
  userAllChat: `${BASE_URL}/Chat/user-all-chats`,
  packages: `${BASE_URL}/package/user-packages`,
  updatePackages: `${BASE_URL}/package/update-user-Packages`,
  updateVersion: `${BASE_URL}/appversion/get-versions?`,
  similarMentor: `${BASE_URL}/home/similer-mentors?categoryid=`,
  chatBookingDetails: `${BASE_URL}/booking/get-chat-booking-details?mentorProductId=`,
  chatProductPrices: `${BASE_URL}/Product/user-product-prices?mentorId=`,
  createfirsttimechatbooking: `${BASE_URL}/Booking/create-chat-booking`,
  checkIfUserExist: `${BASE_URL}/Account/is-user-exist-for-facebookGoogle-login?email=`,

  /// mentor

  mentorProfile:`${BASE_URL}/mentor/GetMentorProfile`,
  bookingsInMentorDashboard:`${BASE_URL}/Dashboard/mentorv2?UTCdateTime=`,
  updateProfileDetails:`${BASE_URL}/user/update-profile-details`,
  mentorUploadImage:`${BASE_URL}/mentor/UploadImage`,
  updateSocialDetails:`${BASE_URL}/Mentor/updateSocialDetails`,
  mentorBookingListing:`${BASE_URL}/Booking/mentor`,
  mentortotalBooking:`${BASE_URL}/Booking/mentorTotal`,
  mentortodayBooking:`${BASE_URL}/Booking/mentorTodays`,
  mentorBlogActives:`${BASE_URL}/Blog/mentorActiveInActiveBlogs`,
  UpdateMentorActiveInActiveBlogs:`${BASE_URL}/Blog/UpdateMentorActiveInActiveBlogs`,
  mentorpackages:`${BASE_URL}/package/mentorpackages`,
  updateMentorPackages:`${BASE_URL}/package/updateMentorPackages`,
  updatementorAvailability:`${BASE_URL}/mentor/updatementorAvailability`,
  createBlogs:`${BASE_URL}/Blog/createBlogs`,
  tags:`${BASE_URL}/home/tags`,
  updateBiographyDetails:`${BASE_URL}/Mentor/updateBiographyDetails`,
  getMentorSlots:`${BASE_URL}/user/getMentorSlots`,
  paypal:`${BASE_URL}/payment/get-paypal-auth-url?bookingId=`,
  createMentorSlots:`${BASE_URL}/user/createMentorSlots`,
  editBlogs:`${BASE_URL}/Blog/editBlogs`,
  resetSlot:`${BASE_URL}/user/reset-and-get-all-slots?fromUTCTime=`,
  zoomDisconnect:`${BASE_URL}/zoom/disconnect-zoom`,
  notification:`${BASE_URL}/Notification/getAll`,
  approval:`${BASE_URL}/mentor/apply-for-approval`,
  logout:`${BASE_URL}/account/logout`,
  zakRefresh:`${BASE_URL}/zoom/get-zoom-meeting?bookingId=`,
  bufferGap:`${BASE_URL}/user/create-update-mentor-slot-bufferGap`,
  blockedmentee:`${BASE_URL}/blockedmentee/create-blocked-mentee?menteeid=`,
  blockedmenteeList:`${BASE_URL}/blockedmentee/blocked-list-mentee`,
  unblockedmentee:`${BASE_URL}/blockedmentee/delete-blocked-mentee?id=`,
  deleteAccount:`${BASE_URL}/account/delete-account`,
  listMentorAdvanceBooking:`${BASE_URL}/advanceBooking/list-mentor-advance-booking`,
  updateAdvanceBooking:`${BASE_URL}/advancebooking/update-mentor-advance-booking-detail`,
  disputeListMentor:`${BASE_URL}/mentordisputeresolution/get-dispute-mentor-list`,
  updateDisputeRes:`${BASE_URL}/mentordisputeresolution/update-mentor-resolution`,
  getAvailableBlnsMentor:`${BASE_URL}/mentorWallet/get-available-balance`,
  getTransactionHistoryMentor:`${BASE_URL}/mentorWallet/get-transaction-history`,
  advanceBookingRequest:`${BASE_URL}/advancebooking/mentor-advance-booking-requests`,
  advanceBookingCreateMentorSlots:`${BASE_URL}/Mentor/advance-booking-create-mentor-slots`,
  getInstantMeetingAvailable:`${BASE_URL}/instantmeetingsetting/get-instant-meeting-setting`,
  saveInstantMeetingAvailable:`${BASE_URL}/instantmeetingsetting/save-instant-meeting-setting`,
  instantMeetingSchedule:`${BASE_URL}/InstantMeetingSchedule/get-instant-meeting-scheduled`,
  setInstantMeetingSchedule:`${BASE_URL}/InstantMeetingSchedule/edit-instant-meeting-schedule`,
  disputeReasonsMentor:`${BASE_URL}/home/dispute-reason-mentor`,
  googleCalenderDisconnect:`${BASE_URL}/account/disconnect-google-calendar?mentorId=`,
  microsoftCalenderDisconnect:`${BASE_URL}/account/disconnect-microsoft-calendar?mentorId=`,
  getUserProfile:`${BASE_URL}/user/get-user-profile`,
  uploadProfileImage:`${BASE_URL}/user/upload-user-image`,
  uploaduserVideo:`${BASE_URL}/user/upload-user-video`,
  approvalUrl:`${BASE_URL}/user/add-verification-approval-url?verificationPostUrl=`,
  AreaInterest:`${BASE_URL}/AreaInterest/Categories`,
  createCategories:`${BASE_URL}/AreaInterest/create-user-area-interest`,
  dashboardCount:`${BASE_URL}/Dashboard/mentor-dashboard-count?datetime=`,
  SupportMentorList:`${BASE_URL}/SupportMentor/get-supporters`,



  //payment
  stripePayment: `${BASE_URL}/payment/create-stripe-payment`,
  stripePaymentAdvanceBooking: `${BASE_URL}/payment/create-stripe-payment-advance`,
  paypalPaymentAdvanceBooking: `${BASE_URL}/payment/get-paypal-auth-url-advance?advbookingId=`,
  MenteeWalletStripe: `${BASE_URL}/payment/mentee-wallet-stripe-payment`,
  MentorWalletStripe: `${BASE_URL}/payment/mentor-wallet-stripe-payment`,
  MenteeWalletPaypal: `${BASE_URL}/payment/mentee-wallet-get-paypal-auth-url`,
  MentorWalletPaypal: `${BASE_URL}/payment/mentor-wallet-get-paypal-auth-url`,
  waleeBooking: `${BASE_URL}/payment/walee-booking-payment?bookingId=`,
  supportWalee: `${BASE_URL}/payment/support-mentor-walee-payment`,
  waleeWalletMentee: `${BASE_URL}/payment/mentee-wallet-walee-payment`,
  supportPaypal: `${BASE_URL}/payment/support-mentor-paypal`,
  supportStripe: `${BASE_URL}/payment/support-mentor-card`,
  chatStripe: `${BASE_URL}/Payment/create-chat-stripe-payment`,
  chatWallet: `${BASE_URL}/Payment/mentee-chat-wallet-payment`,

  //utils
  country: `${BASE_URL}/home/country`,
  categories: `${BASE_URL}/home/Categories`,
  subCategories: `${BASE_URL}/home/subCategories?categoryid=`,
  facebookLogin: `${BASE_URL}/account/facebook-login-signup`,
  appleLogin: `${BASE_URL}/account/apple-login-signup`,
  googleLogin: `${BASE_URL}/account/google-login-signup`,
  forgetPass: `${BASE_URL}/Email/forget-password-email`,
  verifyOtp: `${BASE_URL}/Email/verify-otp`,
  resetPass: `${BASE_URL}/Email/forget-password`,
  saveFirebaseToken: `${BASE_URL}/account/saveFirebaseToken`,
};
//auth
const login = (data) => post(API_URLS.login, data);
const switchAccount = (data) => post(API_URLS.switchAccount, data);
const signup = (data) => post(API_URLS.signup, data);
const Validity = () => get(API_URLS.Validity);
const fbLogin = (data) => post(API_URLS.fbLogin + data);
const facebookLogin = (data) => post(API_URLS.facebookLogin, data);
const checkIfUserExist = (data) => get(API_URLS.checkIfUserExist+data);
const appleLogin = (data) => post(API_URLS.appleLogin, data);
const googleLogin = (data) => post(API_URLS.googleLogin, data);
const forgetPass = (data) => post(API_URLS.forgetPass, data);
const verifyOtp = (data) => post(API_URLS.verifyOtp, data);
const resetPass = (data) => post(API_URLS.resetPass, data);
const logout = (data) => post(API_URLS.logout, data);

//mentee
const menteeDashboard = (data) => get(API_URLS.menteeDashboard + data);
const HomePreferedMentors = () => get(API_URLS.HomePreferedMentors);
const HomePreferedMentorsDetails = (data) =>
  get(API_URLS.HomePreferedMentorsDetails + data);
const HomePreferedMentorsDetailsWithUniqueName = (data) =>
  get(API_URLS.HomePreferedMentorsDetailsWithUniqueName + data);
const dynamicCarusel = () => get(API_URLS.dynamicCarusel);
const searchMentors = (data) => post(API_URLS.searchMentors, data);
const searchMentors_v1 = (data) => post(API_URLS.searchMentors_v1, data);
const filterCategory = () => get(API_URLS.filterCategory);
const bookingSlots = (data) => post(API_URLS.bookingSlots, data);
const menteeProfile = () => get(API_URLS.menteeProfile);
const getMentorPackages = (data) => get(API_URLS.getMentorPackages + data);
const createBooking = (data) => post(API_URLS.createBooking, data);
const paymentDetails = () => get(API_URLS.paymentDetails);
const UpdateProfile = (data) => post(API_URLS.UpdateProfile, data);
const UploadImage = (data) => post(API_URLS.UploadImage, data);
const BookingListing = (data) => post(API_URLS.BookingListing, data);
const totalBooking = (data) => post(API_URLS.totalBooking, data);
const todayBooking = (data) => post(API_URLS.todayBooking, data);
const advancebookingMentorSlots = (data) =>
  post(API_URLS.advancebookingMentorSlots, data);
const createAdvanceBooking = (data) =>
  post(API_URLS.createAdvanceBooking, data);
const listMenteeAdvanceBooking = (data) =>
  post(API_URLS.listMenteeAdvanceBooking, data);
const advanceBookingDetail = (data) =>
  get(API_URLS.advanceBookingDetail + data);
const checkMentorSlots = (data) => post(API_URLS.checkMentorSlots, data);
const getRescheduleSlots = (data) => post(API_URLS.getRescheduleSlots, data);
const menteeReschedulemMeeting = (data) =>
  post(API_URLS.menteeReschedulemMeeting, data);
const disputeReason = (data) => post(API_URLS.disputeReason);
const sendDisputeReason = (data) => post(API_URLS.sendDisputeReason, data);
const disputeList = (data) => post(API_URLS.disputeList, data);
const transactionHistory = (data) => get(API_URLS.transactionHistory);
const getAvailableBlns = (data) => get(API_URLS.getAvailableBlns);
const checkIfMenteeHaveWalletPayment = (data) =>
  get(API_URLS.checkIfMenteeHaveWalletPayment + data);
const menteeWalletBooking = (data) => post(API_URLS.menteeWalletBooking, data);
const createReview = (data) => post(API_URLS.createReview, data);
const reviewList = (data) => get(API_URLS.reviewList + data);
const CreateCalender = (data) => post(API_URLS.CreateCalender, data);
const updateUserTimezone = (data) => post(API_URLS.updateUserTimezone, data);
const menteeWalletAdvanceBooking = (data) =>
  post(API_URLS.menteeWalletAdvanceBooking, data);
const instantMeetingSearchMentor = (data) =>
  post(API_URLS.instantMeetingSearchMentor, data);
const requestInstantMeeting = (data) =>
  post(API_URLS.requestInstantMeeting, data);
const chatMedia = (data) => post(API_URLS.chatMedia, data);
const userAllChat = (data) => get(API_URLS.userAllChat);
const uploaduserVideo = (data) => post(API_URLS.uploaduserVideo, data);
const updateVersion = (data) => get(API_URLS.updateVersion + data);
const similarMentor = (data) => get(API_URLS.similarMentor + data);
const userChats = (data) => post(API_URLS.userChats, data);
const chatBookingDetails = (data) => get(API_URLS.chatBookingDetails + data);
const chatProductPrices = (data) => get(API_URLS.chatProductPrices + data);
const createfirsttimechatbooking = (data) =>
  post(API_URLS.createfirsttimechatbooking, data);

//mentor
const bookingsInMentorDashboard = (data) =>
  get(API_URLS.bookingsInMentorDashboard + data);
const mentorProfile = (data) => get(API_URLS.mentorProfile, data);
const mentorBookingListing = (data) => post(API_URLS.BookingListing, data);
const mentortotalBooking = (data) => post(API_URLS.totalBooking, data);
const mentortodayBooking = (data) => post(API_URLS.todayBooking, data);
const updateProfileDetails = (data) =>
  post(API_URLS.updateProfileDetails, data);
const mentorUploadImage = (data) => post(API_URLS.mentorUploadImage, data);
const updateSocialDetails = (data) => post(API_URLS.updateSocialDetails, data);
const AllBlogs = (data) => get(API_URLS.AllBlogs);
const blogDetail = (data) => get(API_URLS.blogDetail + data);
const mentorBlogActives = (data) => post(API_URLS.mentorBlogActives, data);
const UpdateMentorActiveInActiveBlogs = (data) =>
  post(API_URLS.UpdateMentorActiveInActiveBlogs, data);
const mentorpackages = () => get(API_URLS.mentorpackages);
const updateMentorPackages = (data) =>
  post(API_URLS.updateMentorPackages, data);
const updatementorAvailability = (data) =>
  post(API_URLS.updatementorAvailability, data);
const createBlogs = (data) => post(API_URLS.createBlogs, data);
const tags = () => get(API_URLS.tags);
const updateBiographyDetails = (data) =>
  post(API_URLS.updateBiographyDetails, data);
const getMentorSlots = (data) => post(API_URLS.getMentorSlots, data);
const createMentorSlots = (data) => post(API_URLS.createMentorSlots, data);
const editBlogs = (data) => post(API_URLS.editBlogs, data);
const resetSlot = (data) => get(API_URLS.resetSlot + data);
const zoomDisconnect = (data) => get(API_URLS.zoomDisconnect);
const notification = (data) => post(API_URLS.notification, data);
const approval = (data) => get(API_URLS.approval);
const zakRefresh = (data) => get(API_URLS.zakRefresh + data);
const bufferGap = (data) => post(API_URLS.bufferGap, data);
const blockedmentee = (data) => get(API_URLS.blockedmentee + data);
const blockedmenteeList = (data) => get(API_URLS.blockedmenteeList);
const unblockedmentee = (data) => get(API_URLS.unblockedmentee + data);
const deleteAccount = (data) => post(API_URLS.deleteAccount, data);
const listMentorAdvanceBooking = (data) =>
  post(API_URLS.listMentorAdvanceBooking, data);
const updateAdvanceBooking = (data) =>
  post(API_URLS.updateAdvanceBooking, data);
const sendRescheduleEmail = (data) => get(API_URLS.sendRescheduleEmail + data);
const disputeListMentor = (data) => post(API_URLS.disputeListMentor, data);
const updateDisputeRes = (data) => post(API_URLS.updateDisputeRes, data);
const getAvailableBlnsMentor = (data) => get(API_URLS.getAvailableBlnsMentor);
const getTransactionHistoryMentor = (data) =>
  get(API_URLS.getTransactionHistoryMentor);
const advanceBookingRequest = (data) => get(API_URLS.advanceBookingRequest);
const advanceBookingCreateMentorSlots = (data) =>
  post(API_URLS.advanceBookingCreateMentorSlots, data);
const getInstantMeetingAvailable = (data) =>
  get(API_URLS.getInstantMeetingAvailable);
const saveInstantMeetingAvailable = (data) =>
  post(API_URLS.saveInstantMeetingAvailable, data);
const instantMeetingSchedule = (data) =>
  post(API_URLS.instantMeetingSchedule, data);
const setInstantMeetingSchedule = (data) =>
  post(API_URLS.setInstantMeetingSchedule, data);
const disputeReasonsMentor = (data) =>
  post(API_URLS.disputeReasonsMentor, data);
const googleCalenderDisconnect = (data) =>
  get(API_URLS.googleCalenderDisconnect + data);
const microsoftCalenderDisconnect = (data) =>
  get(API_URLS.microsoftCalenderDisconnect + data);
const getUserProfile = (data) => get(API_URLS.getUserProfile);
const uploadProfileImage = (data) => post(API_URLS.uploadProfileImage, data);
const packages = (data) => get(API_URLS.packages);
const updatePackages = (data) => post(API_URLS.updatePackages, data);
const approvalUrl = (data) => post(API_URLS.approvalUrl, data);
const AreaInterest = (data) => get(API_URLS.AreaInterest);
const createCategories = (data) => post(API_URLS.createCategories,data);
const dashboardCount = (data) => get(API_URLS.dashboardCount+data);
const SupportMentorList = (data) => get(API_URLS.SupportMentorList);


//utils
const getAllCountry = (data) => get(API_URLS.country);
const getAllcategories = (data) => get(API_URLS.categories);
const subCategories = (data) => get(API_URLS.subCategories + data);
const saveFirebaseToken = (data) => post(API_URLS.saveFirebaseToken, data);

//payment
const stripePayment = (data) => post(API_URLS.stripePayment, data);
const stripePaymentAdvanceBooking = (data) =>
  post(API_URLS.stripePaymentAdvanceBooking, data);
const paypal = (data) => get(API_URLS.paypal + data);
const supportPaypal = (data) => post(API_URLS.supportPaypal, data);
const paypalPaymentAdvanceBooking = (data) =>
  get(API_URLS.paypalPaymentAdvanceBooking + data);
const MenteeWalletStripe = (data) => post(API_URLS.MenteeWalletStripe, data);
const MentorWalletStripe = (data) => post(API_URLS.MentorWalletStripe, data);
const MenteeWalletPaypal = (data) => post(API_URLS.MenteeWalletPaypal, data);
const MentorWalletPaypal = (data) => post(API_URLS.MentorWalletPaypal, data);
const waleeBooking = (data) => get(API_URLS.waleeBooking + data);
const supporWalee =(data)=>post(API_URLS.supportWalee,data)
const waleeWalletMentee = (data) => post(API_URLS.waleeWalletMentee, data);
const supportStripe = (data) => post(API_URLS.supportStripe, data);
const chatStripe = (data) => post(API_URLS.chatStripe, data);
const chatWallet = (data) => post(API_URLS.chatWallet, data);

const API_CALLS = {
  login,
  signup,
  switchAccount,
  Validity,
  fbLogin,
  menteeDashboard,
  HomePreferedMentors,
  HomePreferedMentorsDetails,
  HomePreferedMentorsDetailsWithUniqueName,
  dynamicCarusel,
  searchMentors,
  filterCategory,
  bookingSlots,
  menteeProfile,
  getMentorPackages,
  createBooking,
  paymentDetails,
  UpdateProfile,
  UploadImage,
  BookingListing,
  totalBooking,
  todayBooking,
  advancebookingMentorSlots,
  createAdvanceBooking,
  listMenteeAdvanceBooking,
  advanceBookingDetail,
  checkMentorSlots,
  getRescheduleSlots,
  menteeReschedulemMeeting,
  disputeReason,
  sendDisputeReason,
  disputeList,
  transactionHistory,
  getAvailableBlns,
  checkIfMenteeHaveWalletPayment,
  menteeWalletBooking,
  createReview,
  reviewList,
  CreateCalender,
  updateUserTimezone,
  menteeWalletAdvanceBooking,
  instantMeetingSearchMentor,
  requestInstantMeeting,
  searchMentors_v1,
  chatMedia,
  similarMentor,
  userAllChat,
  userChats,
  chatBookingDetails,
  chatProductPrices,
  createfirsttimechatbooking,
  checkIfUserExist,

  
  ///mentor
  bookingsInMentorDashboard,
  mentorProfile,
  mentorBookingListing,
  mentortotalBooking,
  mentortodayBooking,
  updateProfileDetails,
  mentorUploadImage,
  updateSocialDetails,
  AllBlogs,
  blogDetail,
  mentorBlogActives,
  UpdateMentorActiveInActiveBlogs,
  mentorpackages,
  updateMentorPackages,
  updatementorAvailability,
  createBlogs,
  tags,
  updateBiographyDetails,
  getMentorSlots,
  createMentorSlots,
  editBlogs,
  resetSlot,
  zoomDisconnect,
  notification,
  approval,
  logout,
  zakRefresh,
  bufferGap,
  blockedmentee,
  blockedmenteeList,
  unblockedmentee,
  deleteAccount,
  listMentorAdvanceBooking,
  updateAdvanceBooking,
  sendRescheduleEmail,
  disputeListMentor,
  updateDisputeRes,
  getAvailableBlnsMentor,
  MentorWalletStripe,
  getTransactionHistoryMentor,
  MentorWalletPaypal,
  advanceBookingRequest,
  advanceBookingCreateMentorSlots,
  getInstantMeetingAvailable,
  saveInstantMeetingAvailable,
  instantMeetingSchedule,
  setInstantMeetingSchedule,
  disputeReasonsMentor,
  googleCalenderDisconnect,
  microsoftCalenderDisconnect,
  getUserProfile,
  uploadProfileImage,
  packages,
  updatePackages,
  uploaduserVideo,
  approvalUrl,
  AreaInterest,
  updateVersion,
  createCategories,
  dashboardCount,
  SupportMentorList,
  //utills
  getAllCountry,
  getAllcategories,
  subCategories,
  facebookLogin,
  appleLogin,
  googleLogin,
  forgetPass,
  verifyOtp,
  resetPass,
  saveFirebaseToken,

  //payment
  stripePayment,
  paypal,
  supportPaypal,
  stripePaymentAdvanceBooking,
  paypalPaymentAdvanceBooking,
  MenteeWalletStripe,
  MenteeWalletPaypal,
  waleeBooking,
  supporWalee,
  waleeWalletMentee,
  supportStripe,
  chatStripe,
  chatWallet,
};

export default API_CALLS;
