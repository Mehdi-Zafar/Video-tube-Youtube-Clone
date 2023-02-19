import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { fetchFromApi } from "../utils/fetchFromApi"
import { Box } from "@mui/material";
import {Videos,ChannelCard,Loader} from './';


const PlaylistDetail = () => {

    const [playlistDetail,setPlaylistDetail] = useState(null)
    const [channelDetail,setChannelDetail] = useState(null)
    const [loading,setLoading] = useState(false)
    const {id} = useParams()

    useEffect(()=>{
        setLoading(true)
        fetchFromApi(`playlistItems?playlistId=${id}&part=snippet`)
            .then((data)=>{
                setPlaylistDetail(data.items)
            })
    },[id])

    useEffect(()=>{
        if(playlistDetail !== null){
            fetchFromApi(`channels?part=snippet&id=${playlistDetail[0]?.snippet?.channelId}`)
            .then((data)=>{
                setChannelDetail(data?.items[0])
                setLoading(false)
            })
        }
    },[playlistDetail])

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
                    height:'150px'
                }}/>
                    <ChannelCard channel={channelDetail} marginTop="-100px"/>
            </Box>
            <Box display="flex" p="2">
                <Videos videos={playlistDetail}/>
            </Box>
        </Box>
     );
}
 
export default PlaylistDetail;