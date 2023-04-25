import React from "react";
import NavigationBar from "./../Components/NavigationBar";

function Layout({ children }) {
  return (
    <div className="bg-primary">
      <NavigationBar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
