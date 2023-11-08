"use client"
import { Provider } from "react-redux";
import store from "../redux/store";
import Navbar from "./components/Navbar/Navbar";

type ReduxProviderProps = {
  children: React.ReactNode;
};

function ReduxProvider({ children }: ReduxProviderProps) {
  return <Provider store={store}>
    {children}
    </Provider>;
}


export default ReduxProvider;
