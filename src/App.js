import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import { Stack } from '@mui/material'
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between" sx={{height:"100vh"}}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </div>
  );
}

export default App;
