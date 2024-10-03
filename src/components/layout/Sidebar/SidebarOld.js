import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation  } from "react-router-dom";
import profile from '../../../assets/image/profile.jpg';
import Logo from '../../../assets/image/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation, faBell, faChartSimple, faChevronCircleLeft, 
    faExclamationTriangle, faGear, faHome, faLightbulb, faLock, faMessage, faRightFromBracket, 
    faSitemap, faUser, faUserCircle, faUsers, faQuestionCircle, faDashboard, faFolder, faCircleQuestion, 
    faFileLines
  } from '@fortawesome/free-solid-svg-icons';
import { Collapse } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import classes from './Sidebar.module.css';
import { postData } from '../../../services/api';
import { systemId } from '../../../helpers/systemHelpers';
import { clearTokenOnLogout, getUserInfo } from '../../../services/storage/indexedDB';

const Sidebar = () => {
  const [menus, setMenus] = useState([]);
  const [open, setOpen] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const [activeLink, setActiveLink] = useState({ parent: null, child: null });

  const navigate = useNavigate();
  const location = useLocation();

  const fetchUserInfo = async () => {
    const userInfo = await getUserInfo();
    setUserInfo(userInfo);
  }

  const handleClick = (index, link) => {
    setOpen((prevOpen) => (prevOpen === index ? false : index));
    setActiveLink((prevState) => ({ ...prevState, parent: link }));
  };
  
  
  const handleLogout = async () => {
    await clearTokenOnLogout();
    navigate('/login');
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await systemId();
        const result = await postData('navigation', {ModuleParentID: 0, SystemID: response.system_id });

        // Define your list of excluded names
        const excludedMenus = ['Save'];

        // Filter out items with names in the excludedNames array
        const filteredResult = result.filter(item => !excludedMenus.includes(item.name));        

        const menuArray = Object.values(filteredResult);
        setMenus(menuArray);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();

    // Set activeLink based on the current route
    if (location && location.pathname) {
      setActiveLink({ parent: location.pathname.split('/')[1], child: null });
    }    
  }, []);

  useEffect(() => {
    fetchUserInfo();
  }, []);    

  const getIcon = (icon) => {
    const iconMap = {
      'dashboard': faDashboard,
      'group': faUsers,
      'security': faLock,
      'sitemap': faSitemap, 
      'bell': faBell, 
      'faChartSimple': faChartSimple, 
      'faChevronCircleLeft': faChevronCircleLeft, 
      'warning': faExclamationTriangle, 
      'faGear': faGear, 
      'home': faHome, 
      'faLightbulb': faLightbulb, 
      'faMessage': faMessage, 
      'faUserCircle': faUserCircle,
      'folder': faFolder, 
      'question': faCircleQuestion,
      'file': faFileLines,
      'users': faUsers,
    };

    return iconMap[icon] || faQuestionCircle;
  }

  return (
    <div className={classes.sidebar}>
      <div>
        {/* <img src={Logo} alt='Logo.png' className={classes.logo} /> */}
        <h2 className={classes['logo-h2']}>Brgy<span className={classes['logo-span']}>Hub</span></h2>
      </div>
      <div className={classes['profile-container']}>
        <img 
          src={profile} 
          alt='profile.jpg' 
          className={classes['profile-img']} 
          onClick={() => navigate('/profile')}
        />
        {userInfo && (
          <p className={classes['profile-name']}>{userInfo.UserLoginName}</p>
        )}          
      </div>

      <div className={classes.sideMenu}>
        {menus.map((menu, index) => (
          <React.Fragment key={index}>
            <NavLink 
              to={menu.ParentModuleController || "#"} 
              className={`${classes.a} ${(open === index && activeLink.parent === menu.ParentModuleController) ? classes.active : ''}`} 
              onClick={() => handleClick(index, menu.ParentModuleController)}          
            >
              <FontAwesomeIcon icon={getIcon(menu.ParentFontIcon)} className={classes.icon} />
              {menu.name}
              {menu.sub_menus.length > 0 && (open === index ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
            </NavLink>

            <Collapse in={open === index}>
              <div className={classes.subMenu}>
                {menu.sub_menus.map((subMenu, subIndex) => (
                  <NavLink 
                    key={subIndex} 
                    to={subMenu.ChildModuleController || "#"} 
                    className={`${classes.subMenuItem} ${activeLink.child === subMenu.ChildModuleController ? classes.active : ''}`} 
                    onClick={() => setActiveLink((prevState) => ({ ...prevState, child: subMenu.ChildModuleController }))}
                  >
                    <FontAwesomeIcon icon={getIcon(subMenu.ChildFontIcon)} className={classes.icon} />
                    {subMenu.name}
                  </NavLink>
                ))}
              </div>
            </Collapse>
          </React.Fragment>
        ))}
      </div>

      <div className={classes.hr}></div>
         <div className={classes['logout-container']}>
           <a className={classes.logout} onClick={handleLogout}>
             <FontAwesomeIcon icon={faRightFromBracket} className={classes.icon} />
             Logout
           </a>
         </div>

    </div>
  );
};

export default Sidebar;