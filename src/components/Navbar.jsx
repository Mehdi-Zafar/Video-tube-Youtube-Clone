import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";


const Navbar = () => {
    return ( 
        <Stack
        alignItems="center"
        flexWrap="wrap"
        p={1}
        sx={{position:'sticky',top:'0',background:'#301934',justifyContent:'space-between',boxShadow:'0.5px 0.5px 4px #000',flexDirection: {xs: 'column', sm: 'row'},zIndex:'100'}}
        >
            <Link to="/" style={{display:'flex',alignItems:'center',marginLeft:'10px'}}>
                <img src={logo} alt="logo" height={37}/>&nbsp;
                <h3 style={{color:'gold'}}>Video-Tube</h3>
            </Link>
            <SearchBar/>
        </Stack>
     );
}
 
export default Navbar;