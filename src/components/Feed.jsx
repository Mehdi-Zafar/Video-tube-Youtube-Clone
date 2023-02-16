import { Box, Stack, Typography } from "@mui/material";
import {Loader, Sidebar,Videos} from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useEffect, useState } from "react";

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('Latest')
    const [loading,setLoading] = useState(false)
    const [videos, setVideos] = useState(null)

    useEffect(() => {
        setLoading(true)
      fetchFromApi(`search?part=snippet&q=${selectedCategory}`)
        .then((data)=>{
            setVideos(data.items)
            setLoading(false)
        })
    }, [selectedCategory])

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    
    if(loading) return <Loader/>;

    return ( 
        <Stack sx={{flexDirection:{sm:"column",md:"row"}}}>
            <Box sx={{height:{sm:'auto',md:'calc(100vh - 79px)'},pl:{sm:0,md:1},borderRight:'1px solid #3d3d3d'}}>
                <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                {/* <Typography
                className="copyright"
                variant="body2"
                sx={{mt:0,color:'gold'}}
                >
                    Copyright 2023 You-Tube
                </Typography> */}
            </Box>
            <Box p={2} sx={{overflowY:'auto',height:'80vh',flex:2}}>
                <Typography variant='h5' fontWeight='bold' mb={2} sx={{color:'white'}}>
                    {selectedCategory} <span style={{color:'gold'}}>Videos</span>
                </Typography>
                <Videos videos={videos}/>
            </Box>
        </Stack>
     );
}
 
export default Feed;