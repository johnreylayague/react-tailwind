import React from 'react';
import {
  DashboardIcon,
  GroupIcon,
  SecurityIcon,
  CorporateFareIcon,
  PersonIcon,
  MicrosoftIcon,
  SettingsApplicationsIcon,
  SearchSharpIcon,
  AddCircleOutlineSharpIcon,
  RestartAltSharpIcon,
  ModeEditIconIcon
} from '../components/common/Icons';

const getIconComponent = (iconName) => {
  const iconMap = {
    'dashboard': DashboardIcon,
    'security': SecurityIcon,
    'group': GroupIcon,
    'corporate': CorporateFareIcon,
    'person': PersonIcon,
    'microsoft': MicrosoftIcon,
    'settings': SettingsApplicationsIcon,
    'search-sharp': SearchSharpIcon,
    'add-circle-outline-sharp': AddCircleOutlineSharpIcon,
    'restart-alt-sharp': RestartAltSharpIcon,
    'mode-edit': ModeEditIconIcon,
    // Add more icon mappings as needed
  };

  const IconComponent = iconMap[iconName] || DashboardIcon;
  return <IconComponent />;
};

export default getIconComponent;
 