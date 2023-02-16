import { Box, Typography } from "@mui/material";
import {Loader, Videos} from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SearchFeed = () => {

    const [videos, setVideos] = useState(null)
    const [loading,setLoading] = useState(false)
    const {searchTerm} = useParams()

    useEffect(() => {
        setLoading(true)
      fetchFromApi(`search?part=snippet&q=${searchTerm}`)
        .then((data)=>{
            setVideos(data.items)
            setLoading(false)
        })
    }, [searchTerm])

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    
    if(loading) return <Loader/>;

    return ( 
        <Box p={2} sx={{overflowY:'auto',height:'80vh',flex:2}}>
            <Typography variant='h5' fontWeight='bold' mb={2} sx={{color:'white',textAlign:'center'}}>
                Search Results for <span style={{color:'gold'}}>{searchTerm}</span> Videos
            </Typography>
            <Videos videos={videos}/>
        </Box>
     );
}
 
export default SearchFeed;