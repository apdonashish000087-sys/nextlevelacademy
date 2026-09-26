import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex">
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
};

export default Layout;
