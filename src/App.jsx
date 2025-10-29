import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Component/Navbar";
import AddTask from "./Pages/AddTask";
import AllTasks from "./Pages/AllTasks";
import CompletedTasks from "./Pages/CompletedTask";
import PendingTasks from "./Pages/PendingTask";
import Home from "./Pages/Home";
import Footer from "./Component/Footer";
function App() {
  return (
   <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/all" element={<AllTasks />} />
        <Route path="/completed" element={<CompletedTasks />} />
        <Route path="/pending" element={<PendingTasks />} />
      </Routes>
      <Footer />
   </BrowserRouter>
  );
}

export default App;
