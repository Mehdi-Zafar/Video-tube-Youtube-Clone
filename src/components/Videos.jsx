import { Box, Stack } from "@mui/material";
import {VideoCard,ChannelCard,PlaylistCard} from "./";

const Videos = ({videos,direction}) => {

    return ( 
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" gap={2}>
            {videos?.map((item,ind)=>(
                <Box key={ind}>
                    {(item?.id?.videoId || item?.snippet?.resourceId?.videoId) && <VideoCard video={item}/>} 
                    {item?.id?.channelId && <ChannelCard channel={item}/>} 
                    {item?.id?.playlistId && <PlaylistCard playlist={item}/>}
                </Box>
            ))}
        </Stack>
     );
}
 
export default Videos;