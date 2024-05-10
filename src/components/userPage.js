import { Box } from "@mui/material";
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setProfiles } from "../redux/app.reducer";
import BasicTable from "./BasicTable";

const UserPage = () => {
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);

  const getData = async () => {
    const response = await axios({
      method: "GET",
      url: "https://sandbox.practical.me/api/user/profile",
      headers: { Authorization: `Bearer ${token}` },
    });
    dispatch(setProfiles(response.data.wallet));}

  const profiles = useSelector((state) => state.app.profiles);

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        margin: "100px",
      }}
    >
         <BasicTable  />
    </Box>
  );
};

export default UserPage;