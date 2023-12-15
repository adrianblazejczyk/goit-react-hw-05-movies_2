import { Menu } from "../Menu";
import React from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";


export function SharedLayout() {
  return (
    <>
      <Menu />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
}
