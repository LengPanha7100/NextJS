
import HomeComponent from "./components/HomeComponent";
import SearchComponent from "./components/SearchComponent";
import SideBarComponent from "./components/SideBarComponent";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex gap-[100px] bg-[#F5F7F8]">
            <div className=" bg-[#FFFFFF] w-80 h-screen">
                <SideBarComponent/>   
            </div>
            <div className="mt-20">
               <div className="bg-white w-full max-w-[1160px] h-16 rounded-full flex items-center px-4">
                  <SearchComponent/>
               </div>
               <div className="bg-white w-[1160px] h-[655px] mt-20 rounded-t-4xl">
                  <HomeComponent/>
               </div>
            </div>
             {children}
        </div>
      </body>
    </html>
  );
}
