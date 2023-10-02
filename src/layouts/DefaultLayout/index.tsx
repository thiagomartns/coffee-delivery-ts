import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles"
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}