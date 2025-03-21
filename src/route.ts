import {
    type RouteConfig,
    route,
} from "@react-router/dev/routes";
  
  export default [
    route("signin", "./pages/signin.tsx"),
  ] satisfies RouteConfig;