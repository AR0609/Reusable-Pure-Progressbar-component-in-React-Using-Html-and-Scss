import "./App.css";
import Progressbar1 from "./components/progressbar/example1";
import Progressbar2 from "./components/progressbar/example2";

function App() {
  return (
    <>
      <div
        style={{
          marginTop: "60px",
          marginBottom: "60px",
          display: "flex",
          justifyContent: "center",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        Pure Reusable Progres Component Using Html and Css in React
      </div>

      <div
        className="App"
        style={{
          marginTop: "60px",
          marginBottom: "60px",
          marginLeft: "40px",
        }}
      >
        <Progressbar1 />
        <Progressbar2 />
      </div>
    </>
  );
}

export default App;
