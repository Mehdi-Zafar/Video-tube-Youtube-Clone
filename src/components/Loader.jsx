import { ThreeDots } from 'react-loader-spinner'
import { Box } from '@mui/material';

const Loader = () => {
    return ( 
        <Box
        sx={{height:'90vh',display:'flex',justifyContent:'center',alignItems:'center'}}
        >
            <ThreeDots 
            height="80" 
            width="80" 
            radius="9"
            color="gold" 
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            />
        </Box>
     );
}
 
export default Loader;