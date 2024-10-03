import { styled } from '@mui/system';
import Switch from '@mui/material/Switch';

const CustomSwitch = styled(Switch)({
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#ff5c00',
  },
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: '#fff',
    '& + .MuiSwitch-track': {
      backgroundColor: '#ff5c00',
    },
  },
  '& .MuiSwitch-switchBase': {
    color: '#2a2a2a',
  },
  '& .MuiSwitch-track': {
    backgroundColor: '#2a2a2a',
  },
});

export default CustomSwitch;
