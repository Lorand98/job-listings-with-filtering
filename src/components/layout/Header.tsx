import { AppBar } from '@mui/material';
import bigHeaderDesktopBg from '../../assets/bg-header-desktop.svg';

function Header() {
  return (
    <AppBar
      position='relative'
      elevation={0}
      sx={{ backgroundImage: `url(${bigHeaderDesktopBg})`, height: 125 }}
    />
  );
}

export default Header;
