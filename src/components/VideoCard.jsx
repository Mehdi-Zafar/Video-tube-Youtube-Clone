import { Link } from "react-router-dom";
import { Typography,Card,CardContent,CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoThumbnailUrl,demoVideoUrl,demoVideoTitle,demoChannelUrl,demoChannelTitle } from "../utils/constants";

const VideoCard = ({video:{id:{videoId},snippet}}) => {

    function unEscape(htmlStr) {
        htmlStr = htmlStr.replace(/&lt;/g , "<");	 
        htmlStr = htmlStr.replace(/&gt;/g , ">");     
        htmlStr = htmlStr.replace(/&quot;/g , "\"");  
        htmlStr = htmlStr.replace(/&#39;/g , "\'");   
        htmlStr = htmlStr.replace(/&amp;/g , "&");
        return htmlStr;
    }

    return ( 
        <Card
        sx={{width:{xs:'280px',sm:'330px',md:'260px'},borderRadius:'0',boxShadow:'none',transition:'0.5s',margin:{xs:'auto'}}}
        className="video-card"
        title={unEscape(snippet?.title)}
        >
            <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
                <CardMedia 
                image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                alt={unEscape(snippet?.title)}
                sx={{width:'100%',height:140}}
                />
            </Link>
            <CardContent sx={{backgroundColor:'#301948',height:'80px'}}>
                <Link to={videoId ? `/video/${videoId}`:demoVideoUrl}>
                    <Typography variant="subtitle1" fontWeight="bold" color="#ffede7">
                        {unEscape(snippet?.title.slice(0,45))+' ...' || demoVideoTitle.slice(0,45)}
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}`:demoChannelUrl}>
                    <Typography variant="subtitle2" fontWeight="bold" color="gray" alignItems="center">
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle sx={{fontSize:12,color:'gray',ml:1}}/>
                    </Typography>
                </Link>
            </CardContent>
        </Card>
     );
}
 
export default VideoCard;