import React from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface LayoutProp {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProp> = ({ children }) => {
  return (
    <div className="wrapper">
      <div className="chatWrapper">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};
