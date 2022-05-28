import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NavMenu from "./NavMenu";

const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography>App Title</Typography>
        <NavMenu />
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
