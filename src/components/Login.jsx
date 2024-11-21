import { useEffect,useState } from "react";
import { useNavigate } from 'react-router-dom';
import metrologo from '../assets/metrologo.png';
import fanIcon from '../assets/fan.png';
import bglogin from '../assets/bglogin.gif'; // Import the image from assets

import '../App'; // Import your CSS

const Login = ({onLogin}) => {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 
  const handleLogin = (e) => {
    e.preventDefault();
    if (userID === '1' && password === '1') {
      onLogin();
    } else {
      setError('Invalid UserID or Password');
    }
  };

  const go = () => {
    navigate('/');
  };

  useEffect(() => {
    const updateDateTime = () => {
      const dateElement = document.getElementById("date");
      const timeElement = document.getElementById("time");
      const now = new Date();

      const day = now.getDate();
      const daySuffix = getDaySuffix(day);

      const month = now.toLocaleString("en-US", { month: "long" });
      const year = now.getFullYear();

      const hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const seconds = now.getSeconds().toString().padStart(2, "0");
      const period = hours >= 12 ? "P.M." : "A.M.";
      const formattedHours = hours % 12 || 12;

      dateElement.innerHTML = `
        <div>
            <span class="text-[64px] font-light">${day}</span>
            <span class="text-[28px] font-light">${daySuffix}</span>
            <span class="text-[28px] uppercase ml-3">${month}</span>
        </div>
        <div class="text-[32px] mb-4">${year}</div>
      `;

      timeElement.innerHTML = `
        <div class="text-[64px] font-light mt-8 mb-8 ml-4">
            ${formattedHours}:${minutes}:${seconds}
            <span class="text-[28px] font-light ml-1">${period}</span>
        </div>
      `;
    }

    const getDaySuffix = (day) => {
      if (day >= 11 && day <= 13) return "th";
      switch (day % 10) {
        case 1:
          return "st";
        case 2:
          return "nd";
        case 3:
          return "rd";
        default:
          return "th";
      }
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();

  }, []);

  const login = () => {
    alert('Login clicked!');
  }

  return (
    
    <div 
  className="h-screen flex flex-col items-center" 
  style={{
    backgroundImage: `url(${bglogin})`, 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundAttachment: 'fixed', 
    backgroundRepeat: 'no-repeat'
  }}
>

      {/* Header */}
      <div className="w-full flex justify-between items-center px-6 pt-4">
        <div className="flex items-center">
          <img src={fanIcon} alt="Axial Fan" className="h-10 w-10" />
          <span className="text-xl font-normal text-[#145D69] ml-2">TBF MAINTENANCE SYSTEM</span>
        </div>
        <div>
          <img src={metrologo} alt="Metro Logo" className="h-14" />
        </div>
      </div>

      {/* Login Card */}
      <div className="glassmorphic bg-[#145D69]/[0.78] w-80 md:w-[800px] md:h-[400px] p-6 grid grid-cols-2 mt-14 border rounded-xl border-solid border-white backdrop-blur-sm">
        {/* Left Side (Login Form) */}
        <div className="pr-4 border-r border-white flex flex-col justify-center">

          <h1 className="text-2xl text-center font-light mb-6 text-white">LOGIN</h1>
          {error && (
            <p className="text-red-500 mb-4 text-center">{error}</p>
          )}

          <form className="ml-7" onSubmit={handleLogin}>
            <div className="text-left">
              <label htmlFor="userid" className="block text-white font-normal mb-1">UserID</label>
              <input type="text" placeholder="Enter your ID" id="userid" value={userID}
                onChange={(e) => setUserID(e.target.value)}
                required className="w-72 px-4 py-2 rounded text-gray-700 font-raleway focus:outline-none border border-gray-300" />
            </div>
            <div className="text-left mt-5">
              <label htmlFor="password" className="block text-white font-normal mb-1">Password</label>
              <input type="password" placeholder="Enter the password" id="password" value={password}
                onChange={(e) => setPassword(e.target.value)}
                required className="w-72 px-4 py-2 rounded text-gray-700 font-raleway focus:outline-none border border-gray-300" />
            </div>
            <div className="mt-10 mr-6 text-center">
              <button type="submit" onClick={go} className="w-32 font-medium border-solid border-white border bg-white text-[#407B7B] py-2 rounded-2xl hover:bg-[#407B7B] hover:text-white">
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Right Side (Date and Time) */}
        <div className="flex flex-col justify-center items-center relative">
          {/* Top Portion (Date) */}
          <div id="date" className="text-white tracking-wide text-center mb-4"></div>
          {/* Divider */}
          <div className="w-full border-t border-white my-2"></div>
          {/* Bottom Portion (Time) */}
          <div id="time" className="text-white text-center"></div>
        </div>
      </div>
    </div>
  );
}

export default Login;
