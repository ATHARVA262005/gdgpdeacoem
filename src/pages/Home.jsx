import React from 'react';
import { Link } from 'react-router-dom';
import { FaBeer, FaCamera, FaCode, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import KeyPointsSection from '../components/KeyPointsSection';
import { ScrollBasedVelocityDemo } from '../components/ui/ScrollBasedVelocityDemo';
import HeroVideoDialogDemo from '../components/ui/VideoDemo';
import JoinUsSection from '../components/JoinUsSection';

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <KeyPointsSection/>
      <ScrollBasedVelocityDemo/>
      <HeroVideoDialogDemo />
      <JoinUsSection/>
      
    </div>
  );
};

export default Home;
