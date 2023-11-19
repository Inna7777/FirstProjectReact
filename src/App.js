import React from "react";
import "./styles/App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import Picture from "./components/Picture/Picture";
import SwiperPicture from "./components/SwiperPicture/SwiperPicture";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SliderShow from "./components/SliderShow/SliderShow";
import Effect from "./components/UseEffect/Effect";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import WindowDialog from "./components/WindowDialog/WindowDialog";
import Forms from "./components/Form/Form";
import FormReactHook from "./components/FormReactHook/FormReactHook";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            {/* <Route path="/profile" element={<Profile />} />
            <Route path="/dialogs" element={<Dialogs />} />   */}
            <Route
              path="/profile"
              element={<Profile postsData={props.postsData} />}
            />
            <Route
              path="/dialogs"
              element={<Dialogs dialogsElements={props.dialogsElements} />}
            />
            <Route path="/news" element={<News />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/pictures" element={<Picture />} />
            <Route path="/swiperpictures" element={<SwiperPicture />} />
            <Route path="/slidershow" element={<SliderShow />} />
            <Route path="/effect" element={<Effect />} />
            <Route path="/modalwindow" element={<ModalWindow />} />
            <Route path="/windowdialog" element={<WindowDialog />} />
            <Route path="/forms" element={<Forms />} />
            <Route path="/formreact" element={<FormReactHook />} />
          </Routes>
          {/* <Profile/> */}
          {/* <Dialogs/> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
