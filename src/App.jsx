import { createBrowserRouter,Outlet,createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import { ChannelDetail, VideoDetail, SearchFeed, Navbar, Feed,PlaylistDetail } from './components';
import { Box, ThemeProvider,createTheme } from "@mui/material";

function AppLayout(){
  return(
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<AppLayout/>}>
      <Route index element={<Feed />}/>
      <Route path="video/:id" element={<VideoDetail />} />
      <Route path="channel/:id" element={<ChannelDetail />} />
      <Route path="playlist/:id" element={<PlaylistDetail/>}/>
      <Route path="search/:searchTerm" element={<SearchFeed />} />
    </Route>
  )
)

const theme = createTheme({
  typography: {
    fontFamily: "'Nunito',sans-serif"
  },
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{background:'#301934'}}>
        <RouterProvider router={router}/>
      </Box>
    </ThemeProvider>
  )
}

export default App
