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
             {children}
        </div>
      </body>
    </html>
  );
}
