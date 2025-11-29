import "./App.css";
import FormModule from "../components/JSXmodule";
import ComponentsModule from "../components/componentModule";
import PropsModule from "../components/propsModule";
import StateModule from "../components/stateModule";
import ClassDemo from "../components/classDemo";

function App() {

  return (
    <div className="container">
      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>React Explorer</h1>

      <FormModule />
      <ComponentsModule />
      <PropsModule/>
      <StateModule/>
      <ClassDemo/>
    </div>
  );
}

export default App;
