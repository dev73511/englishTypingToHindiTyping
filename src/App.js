import React,{useState} from "react";
import { ReactTransliterate } from "react-transliterate";
import "react-transliterate/dist/index.css";
import logo from './logo.svg';
import './App.css';

function App() {

  const [text, setText] = useState("");
 
  

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ReactTransliterate
          value={text}
          onChangeText={(text) => {
            setText(text);
          }}
          lang="hi"
          activeItemStyles={{color: "#000", background: "#f2f2f2"}}
          containerStyles={{color: "#000"}}
          style={{height: "35px", lineHeight: "35px", borderRadius: "50px", padding: "10px"}}
        />
        
      </header>
    </div>
  );
}

export default App;
