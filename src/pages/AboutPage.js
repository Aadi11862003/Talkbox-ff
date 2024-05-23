import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../assets/images.jpeg';
import img from '../assets/images1.jpeg';
import img1 from '../assets/images2.png';

const texts = [
  "Chats and meetings for everyone",
  "Secure and easy-to-use chat solution",
  "Connect with people from any device"
];

const AboutPage = () => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [textIndex, setTextIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex-grow bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">{texts[textIndex]}</h1>
        <p className="text-lg text-white mb-8">
          Chat-Free provides secure, easy-to-do Chats and meetings for everyone, on any device
        </p>
        <button
          onClick={() => navigate('/email')}
          className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition duration-300 ease-in-out mb-8"
        >
          Log-In
        </button>

        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between space-y-8 lg:space-y-0 lg:space-x-8 mt-8">
          <div className="lg:w-1/3 flex flex-col items-center">
            <img src={image} alt="Chat Example" className="rounded-lg shadow-lg mb-4" />
            <h2 className="text-2xl font-bold text-white">Instant Messaging</h2>
            <p className="text-white">Communicate with your friends and colleagues in real-time with our secure messaging platform.</p>
          </div>
          <div className="lg:w-1/3 flex flex-col items-center">
            <img src={img} alt="File Sharing Example" className="rounded-lg shadow-lg mb-4" />
            <h2 className="text-2xl font-bold text-white">File Sharing</h2>
            <p className="text-white">Share documents, photos, and videos easily with our built-in file sharing feature.</p>
          </div>
          <div className="lg:w-1/3 flex flex-col items-center">
            <img src={img1} alt="Group Chat Example" className="rounded-lg shadow-lg mb-4" />
            <h2 className="text-2xl font-bold text-white">Group Chats</h2>
            <p className="text-white">Create and manage group chats for your team projects or social groups.</p>
          </div>
        </div>

        <div className="mt-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Why Choose Chat-Free?</h3>
          <p className="mb-2">- Secure communication with end-to-end encryption</p>
          <p className="mb-2">- User-friendly interface with intuitive design</p>
          <p className="mb-2">- Accessible on any device, anywhere</p>
          <p className="mb-2">- Reliable performance with 24/7 support</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;


