import { LayoutContainer } from "./styles"
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <h1>Hello World</h1>
      <Outlet />
    </LayoutContainer>
  )
}