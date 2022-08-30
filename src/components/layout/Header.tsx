import { AppBar } from "@mui/material";
import { ReactComponent as BigHeaderDesktop } from "../../assets/bg-header-desktop.svg";

function Header() {
  return (
    <AppBar position="relative">
      <BigHeaderDesktop />
    </AppBar>
  );
}

export default Header;
