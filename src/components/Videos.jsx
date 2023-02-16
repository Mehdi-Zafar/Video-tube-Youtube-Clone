import { Box, Stack } from "@mui/material";
import {VideoCard,ChannelCard} from "./";

const Videos = ({videos,direction}) => {

    return ( 
        <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="center" gap={2}>
            {videos?.map((item,ind)=>(
                <Box key={ind}>
                    {item.id.videoId && <VideoCard video={item}/>} 
                    {item.id.channelId && <ChannelCard channel={item}/>} 
                </Box>
            ))}
        </Stack>
     );
}
 
export default Videos;