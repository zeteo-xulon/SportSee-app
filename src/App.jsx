import { lazy } from "react";
import Header from "./components/Header";
const MainContainer = lazy(() => import("./components/MainContainer"))

export default function App() {
  return (
    <>
      <Header />
      <MainContainer />
    </>
  )
}