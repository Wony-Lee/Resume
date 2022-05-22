import React from 'react';
import AppLayout from "./components/AppLayout";
import MyLink from "./components/Content/MyLink";
import { Routes, Route } from 'react-router-dom'
import MyProfile from "./components/Content/MyProfile";
import Guest from "./components/Guest/Guest";

function App() {
  return (
        <AppLayout>
            <Routes>
                <Route path={"/"} element={<MyLink/>} />
                <Route path={"/profile"} element={<MyProfile/>}/>
                <Route path={"/guest"} element={<Guest />} />
            </Routes>
        </AppLayout>
  );
}

export default App;
