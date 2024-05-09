import { Backdrop, CircularProgress } from "@mui/material";
import { usePromiseTracker } from "react-promise-tracker";

function LoadingPromise() {
  const { promiseInProgress } = usePromiseTracker();
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={promiseInProgress}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default LoadingPromise;
