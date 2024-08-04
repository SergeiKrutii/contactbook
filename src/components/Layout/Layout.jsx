import { Outlet } from "react-router-dom";
import { Suspense } from "react";

const Layout = (props) => {
  return (
    <>
      <Suspense fallback={<></>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
