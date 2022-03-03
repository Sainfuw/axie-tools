import { Provider } from "react-redux";
import { store } from "./store";

import { Navbar } from "./components/divs/Navbar";
import { Content } from "./components/divs/Content";
import { DivisorLine } from "./components/items/DivisorLine";
import { Footer } from "./components/divs/Footer";

export const AxieTools = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <Content />

      <DivisorLine />
      <Footer />
    </Provider>
  );
};
