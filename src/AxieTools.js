import { Provider } from "react-redux";
import { store } from "./store";

import Navbar from "./components/Navbar";
import Content from "./components/Content";
import DivisorLine from "./components/DivisorLine";
import Footer from "./components/Footer";

const AxieTools = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Content />

      <DivisorLine />
      <Footer />
    </Provider>
  );
};

export default AxieTools;
