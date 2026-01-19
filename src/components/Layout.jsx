import Header from "./Header";
import Sidebar from "./Sidebar";
//import { toggleTheme } from "../redux/slices/theme.slice";
//import { useState } from "react";
//import { useSelector } from "react-redux";

function Layout(props) {
   // const themeMode = useSelector((store) => store.theme.mode); 

    return (
        <main>
            <Header />
        {/*    <div className={`layout-container ${themeMode === 'dark' ? 'dark-mode' : 'light-mode'}`}>   */}
            <section>
                <aside><Sidebar /></aside>
                <div className="page-content" style={{  marginLeft: "220px", padding: "20px", width: "100%" }} >
                    {props.children}
                </div>
            </section>
           {/* </div> */}   
        </main>
    )
}

export default Layout;