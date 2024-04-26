import React, { useState } from "react";
import { Container, Row, Col, Alert, Button } from "react-bootstrap";
import Input from "../components/Input";
import  '../css/login.css';
import { showToast } from "../components/Toast";
import API_CALLS from "../services/constants";
import { getItemFromStorage, saveItemToStorage } from "../utils/storage";
import TokenStorageService from "../services/tokenService";
import { useNavigate } from "react-router-dom";
const _tokenStorageService = TokenStorageService.getService();
const Login = () => {
  const navigate=useNavigate()
  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const handleLogin = async () => {
    var validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.trim() === "") {
      showToast('Email is required')
      return;
    } else if (pass.trim() === "") {
      showToast('Password is required"')
      return;
    }
    // else if (!email.match(validEmailRegex)) {
    //   toast.show("Email is invalid");
    //   return;
    // }
    try {
      setIsLoading(true);
      // let randomDevicesId = GenerateRandomNumberForDeviceID();
      const data = {
        emailAddress: email,
        password: pass,
        deviceID: 'oppo6942',
        // deviceID: deviceInfoModule.getDeviceId() || randomDevicesId,
      };
      const response = await API_CALLS.login(data);
      if (response[0]?.email != null) {
       console.log( response)
        await saveItemToStorage("current_user", response);
        await _tokenStorageService.setAccessToken(response[1]?.token);
        await _tokenStorageService.setRefreshToken(response[1]?.refreshToken);
        navigate("/Home")
        // setUserStack(response)
      } else {
        throw Object.assign({}, new Error("Error."), {
          response: response.ResultText,
        });
      }
    } catch (error) {
      console.log("🚀 ~ file: Login.js ~ line 80 ~ handleLogin ~ error", error);
      showToast(
        error?.response?.data[0]?.userMessage || "Something went wrong"
      );
    } finally {
      setIsLoading(false);
    }
  };

  // const setUserStack=async(response)=>{
  //   let showCompleteProfile = await getItemFromStorage('showCompleteProfile');
  //   if (response[0]?.userTypeId == 1 && response[0]?.mentorDetails?.length>0) {
  //     let userIsMentee = await saveItemToStorage("mentee", "false");
  //     console.log("user is Expert",response[0]?.mentorDetails?.isOnBoardingCompleted);
  //     if(response[0]?.mentorDetails?.isOnBoardingCompleted){
  //       saveItemToStorage("showCompleteProfile", "true");
  //     }
  //     else{
  //       saveItemToStorage("showCompleteProfile", "false");
  //     }
     
  //     setUser((state) => ({
  //       ...state,
  //       ...response,
  //       isLoggedIn: true,
  //       isMentee: false,
  //       // showCompleteProfile:showCompleteProfile==='false'?false:true
  //       showCompleteProfile:response[0]?.mentorDetails[0]?.isOnBoardingCompleted==true?true:false
  //     }));
  //   } else if (response[0]?.userTypeId == 3) {
  //     let userIsMentee = await saveItemToStorage("mentee", "both");
  //     console.log("user is Both");
  //     if(response[0]?.mentorDetails?.isOnBoardingCompleted){
  //       saveItemToStorage("showCompleteProfile", "true");
  //     }
  //     else{
  //       saveItemToStorage("showCompleteProfile", "false");
  //     }
  //     setUser((state) => ({
  //       ...state,
  //       ...response,
  //       isLoggedIn: true,
  //       isMentee: false,
  //       showCompleteProfile:response[0]?.mentorDetails[0]?.isOnBoardingCompleted==true?true:false
  //     }));
  //   } else {
  //     console.log("user is mantee");
  //     let userIsMentee = await saveItemToStorage("mentee", "true");
  //     setUser((state) => ({
  //       ...state,
  //       ...response,
  //       isLoggedIn: true,
  //       isMentee: true,
  //     }));
  //   }
  //  }
  return (
    <div>
       <div className="max-w-[800px] mt-[100px] h-[35vh] w-full  mx-auto text-center flex flex-col justify-center">
       <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Login
        </h1>
        <div >
        <h3>Email</h3>
        <input  value={'frfrfr'} placeholder="fdfd" className=" border-1 p-3"/>
        </div>
      
        <input placeholder="fdfd" className=" border-1 p-3 mt-4"/>
       </div>
    </div>
    // <Container className="vh-100 ">
    // <Row className="justify-content-center align-content-center vh-100">
    // <Col className="d-lg-block d-none">
    // <div className="vh-100 justify-content-center align-items-center d-flex">
    //     <img src="../Assets/loginImage.png" style={{width:'100%'}} />
    //     </div>
    //   </Col>
    //   <Col className="px-5">
    //         <div className=" vh-100 justify-content-center align-items-center d-flex">
    //         {/* <Row> */}
    //         <Col>
    //         <div>
    //         <Input
           
    //        placeholder={"Email"}
    //        src={"../Assets/email.png"}
    //        value={email}
    //        onChange={(e) => {
    //          setEmail(e.target.value);
    //        }}
    //      />
    //         </div>
    //         <div className=" mt-3">
    //         <Input placeholder={"Password"}
    //         src={"../Assets/password.png"}
    //          value={pass} 
    //          onChange={(e) => {
    //          setPassword(e.target.value);
    //        }}/>
    //         </div>
            
           
         
    //        <Button className="mt-3 btn-submit" variant="primary" onClick={()=> alert("Your file is being uploaded!")} >Primary</Button>{' '}
    //         </Col>
            
           
        

  
    //         {/* </Row> */}
            
    //         </div>
          
       
        
    //   </Col>
    // </Row>
     
      
    // </Container>
  );
};


export default Login;
