import { Container, Divider, Stack } from "@mui/material";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <Stack divider={<Divider orientation="horizontal" flexItem />}>
      <NavBar />
      <Container sx={{ my: 2 }}>
        <Outlet />
      </Container>
    </Stack>
  );
}

export default AppLayout;
