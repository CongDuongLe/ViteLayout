import React from "react";
import { HeaderFooterLayout } from "src/components/layout";
import Forgot from "src/pages/forgot";
import HomePage from "src/pages/home";
import Login from "src/pages/login";
import NotFound from "src/pages/not-found";
import Register from "src/pages/register";

type RouteType = {
  path: string;
  component: React.ComponentType;
  layout?:  null | React.ComponentType;
};

const publicRoutes :RouteType[] = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/login",
    component: Login,
    layout: HeaderFooterLayout
  },
  {
    path: "/register",
    component: Register,
    layout: HeaderFooterLayout
  },
  {
    path: "*",
    component: NotFound,
    layout: HeaderFooterLayout
  },
  {
    path:"/forgot",
    component: Forgot,
    layout: HeaderFooterLayout
  }
];

const privateRoutes: RouteType[] = [];

export { publicRoutes, privateRoutes }
