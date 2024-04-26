import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import API_CALLS from '../../services/constants';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import Footer from '../../components/Footer';
import { useLocation, useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import '../mentorDetails/mentorDetails.css'

const MentorDetails = () => {
    const dispatch = useDispatch();
    const [model, setModel] = useState([]);
    const [loading, setLoading] = useState(true);
    const { userId } = useParams();
    const location = useLocation();
    const userName =  location.state.id;
    console.log(userId)
    console.log({userName})
    // console.log({userName})
    useEffect(() => {
      getDetail(userName);
    }, []);
    const getDetail = async (id) => {
      try {
        const respose = await API_CALLS.HomePreferedMentorsDetailsWithUniqueName(id);
        console.log({respose})
        if (respose.status === true) {
          setModel(respose.model);
          
        } else {
          throw respose.userMessage;
        }
      } catch (error) {
        console.log('HomePreferedMentorsDetailsWithUniqueName', error );
      }
      finally{
        setLoading(false)
      }
    };
  
console.log('model?.profileImage',model?.mentorDetails)
   
    return (
      <div className=" bg-[#fff]">
      
       <Navbar color={'blue'}/>
       <Container>
       <div className=' mt7 root'>
         <div className='video-view'>
         {/* <div className='video_img'> */}
          <img className='video_img_camera' src='https://res.cloudinary.com/dmdawjgs8/image/upload/v1707415172/new/no-video_qgbb5f.webp'/>
         {/* </div> */}
         
         </div>
         <div className='profile-view'>
          <div className='img'>
        <img  src={model?.profileImage}/>
          </div>
          <div className='profile-section'>
          <div className='mentorName'>
          <h1 className='gilroyB'>{model.fullName}</h1>
            <h3 className=' ms-3 gilroyM'>{model.fullName}</h3>
          </div>
         {model?.mentorDetails?.length > 0
            && model?.mentorDetails[0]?.aboutMe? <div>
            <p>{model?.mentorDetails[0]?.aboutMe}</p>
          </div>:null}
           
          </div>
         </div>
       </div>
       </Container>
      
      
    
    
      </div>
    );
  };
  
  export default MentorDetails;