import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {Videos,ChannelCard, Loader} from './';
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetail = () => {
    const [ChannelDetail,setChannelDetail] = useState(null)
    const [videos,setVideos] = useState(null)
    const [loading,setLoading] = useState(false)
    const {id} = useParams();

    useEffect(()=>{
        setLoading(true)
        fetchFromApi(`channels?part=snippet&id=${id}`)
            .then((data)=>setChannelDetail(data?.items[0]))

        fetchFromApi(`search?channelId=${id}&part=snippet&order=date`)
            .then((data)=>{
                setVideos(data?.items)
                setLoading(false)
            })
    },[id])

    

    if(loading) return <Loader/>;

    return ( 
        <Box minHeight="95vh">
            <Box>
                <div style={{
                    background: 'linear-gradient(45deg,transparent 14%, #b79c5f 15%, #b79c5f 20%, transparent 21%, transparent 79%, #b79c5f  80%, #b79c5f 85%, transparent 86%),linear-gradient(135deg,transparent 14%, #b79c5f 15%, #b79c5f 20%, transparent 21%, transparent 79%, #b79c5f  80%, #b79c5f 85%, transparent 86%), radial-gradient(transparent 14%, #b79c5f 15%, #b79c5f 25%, transparent 26%)',
                    backgroundSize: '2.5em 2.5em',
                    backgroundColor: '#241e4c',
                    opacity: 1,
                    zIndex:10,
                    width:'100%',
                    height:'200px'
                }}/>
                    <ChannelCard channel={ChannelDetail} marginTop="-100px"/>
            </Box>
            <Box display="flex" p="2">
                {/* <Box sx={{mr:{sm:'100px'}}}/> */}
                <Videos videos={videos}/>
            </Box>
        </Box>
     );
}
 
export default ChannelDetail;