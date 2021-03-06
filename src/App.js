import React from "react";
import Header from "./components/Header/Header.js";
import Intro from "./components/Intro/Intro.js";
import Products from "./components/Products/Products.js";
import Form from "./components/Form/Form.js";
import Footer from "./components/Footer/Footer.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import Distributor from "./components/Distributor/Distributor.js";

library.add(fab);

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Products />
      <Form />
      <Distributor />
      <Footer />
    </div>
  );
}

export default App;
