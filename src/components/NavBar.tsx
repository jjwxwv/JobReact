// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import Avatar from "@mui/material/Avatar";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

// const settings = ["Profile", "Account", "Dashboard", "Logout"];
function NavBar() {
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
  //   null
  // );

  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <Toolbar disableGutters>
      <Container
        sx={{ display: "flex", justifyContent: "space-between", p: 0 }}
      >
        <Typography
          variant="h5"
          noWrap
          component={Link}
          to="/post?page=1"
          sx={{
            fontFamily: "monospace",
            fontWeight: 600,
            textDecoration: "none",
          }}
        >
          jobsgg
        </Typography>
        <Button disabled variant="text" size="large" disableRipple={true}>
          ผู้ประกอบการเข้าสู่ระบบ
        </Button>
        {/* <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="JJ" src="/static/images/avatar/2.jpg" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: "45px" }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box> */}
      </Container>
    </Toolbar>
  );
}

export default NavBar;
