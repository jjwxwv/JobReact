import { Divider, Stack } from "@mui/material";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <Stack divider={<Divider orientation="horizontal" flexItem />}>
      <NavBar />
      <Outlet />
    </Stack>
  );
}

export default AppLayout;
