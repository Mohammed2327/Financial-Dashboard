import React, { useState, useEffect } from "react";
import { MdTask } from "react-icons/md";
import { CiSearch, CiSettings } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import {
  HiHome,
  HiOutlineUsers,
  HiOutlineChartBar,
  HiOutlineCreditCard,
  HiOutlineCurrencyDollar,
  HiOutlineCog,
} from "react-icons/hi";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, Outlet, useLocation } from 'react-router-dom';
import CardList from "../components/CardList";
import WeeklyList from "../components/WeeklyList";
import Expense from "../components/Expense";
import QuickTransfer from "../components/QuickTransfer";
import BalanceHistory from "../components/Balance";
import Setting from "../pages/Setting"; // Import the Setting component

const Dashboard = () => {
  const [profilePic, setProfilePic] = useState("https://via.placeholder.com/150"); // Initialize with default picture
  const [currentTitle, setCurrentTitle] = useState('Overview');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const location = useLocation();

  const handleTabChange = (tab) => {
    if (tab === 'settings') {
      setCurrentTitle('Settings');
    } else {
      setCurrentTitle('Overview');
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === '/setting') {
      setCurrentTitle('Settings');
    } else {
      setCurrentTitle('Overview');
    }
  }, [location.pathname]);

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <h4>
            <MdTask /> Soar Task
          </h4>
        </div>
        <div className="overview">
          <h3>{currentTitle}</h3>
        </div>
        <div className="right-section">
          {!isMobile && (
            <div className="search-bar">
              <CiSearch />
              <input type="text" placeholder="Search for something" />
            </div>
          )}
          <div className="menu-icon" onClick={toggleSidebar}>
            {isSidebarOpen ? <HiX /> : <HiMenu />}
          </div>
          <div className="settings-icon">
            <CiSettings />
          </div>
          <div className="notification-icon" style={{ color: "blue" }}>
            <IoIosNotifications />
          </div>
          <div className="profile-icon">
            <img
              src={profilePic}
              alt="Profile"
              className="profile-pic"
            />
          </div>
        </div>
      </header>
      {isMobile && (
        <div className="mobile-search-bar">
          <div className="search-bar">
            <CiSearch />
            <input type="text" placeholder="Search for something" />
          </div>
        </div>
      )}
      <div className={`sidebar ${isSidebarOpen || !isMobile ? "active" : ""}`}>
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <Link to="/">
              <HiHome /> Dashboard
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="#">
              <HiOutlineUsers /> Transactions
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="#">
              <HiOutlineChartBar /> Accounts
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="#">
              <HiOutlineCreditCard /> Investments
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="#">
              <HiOutlineCreditCard /> Credit Cards
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="#">
              <HiOutlineCurrencyDollar /> Loans
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="#">
              <HiOutlineCog /> Services
            </Link>
          </li>
          <li className ="sidebar-item">
            <Link to="#">
              <HiOutlineCog /> My Privileges
            </Link>
          </li>
          <li className="sidebar-item" id="setting">
            <Link to="/setting">
              <HiOutlineCog /> Settings
            </Link>
          </li>
        </ul>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-main">
          {location.pathname === '/setting' ? (
            <Setting profilePic={profilePic} setProfilePic={setProfilePic} onTabChange={handleTabChange} />
          ) : (
            <>
              <Outlet />
              <div className="dashboard-row">
                <CardList />
                <WeeklyList />
                <Expense />
                <QuickTransfer />
                <BalanceHistory />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;