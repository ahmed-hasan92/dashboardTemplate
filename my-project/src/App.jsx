import Dashboard from './components/Dashboard';
import Header from './components/Header';
import SideBar from './components/SideBar';

function App() {
  return (
    <>
      <div className="w-full h-screen flex bg-[#f1f5f9] relative ">
        {/**sidebar */}
        <div className="h-full overflow-y-auto w-72 bg-[#1c2434] hidden lg:flex  ">
          <SideBar />
        </div>
        {/**Header $ dashboard */}
        <div className="flex flex-1 flex-col overflow-y-auto ">
          {/**Header */}
          <div className="sticky top-0 w-full z-50 px-4 xl:px-8 py-3 bg-white h-20 shadow-md shadow-gray-300  ">
            <Header />
          </div>
          {/**Dashboard */}
          <div className="flex flex-1  ">
            <Dashboard />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
