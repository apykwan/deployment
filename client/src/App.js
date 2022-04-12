import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [state, setState] = useState({
    name: "",
    wechat: "",
  });

  const fetchData = useCallback(async () => {
    const {
      data: { name, wechat },
    } = await axios.get("/api/datas");
    setState({ name, wechat });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
      <div>
        <h2>Name: </h2> <h3>{state.name}</h3>
      </div>
      <div>
        <h2>WeChat: </h2> <h3>{state.wechat}</h3>
      </div>
    </div>
  );
}

export default App;
