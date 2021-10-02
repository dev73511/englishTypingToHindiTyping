import React,{useState} from "react";
import { ReactTransliterate, TriggerKeys } from "react-transliterate";
import "react-transliterate/dist/index.css";

// Material Ui input component
import Input from "@material-ui/core/Input";

//webcam
import Webcam from "react-webcam";

import logo from './logo.svg';
import './App.css';

function App() {

  const [text, setText] = useState("");
 
  const [lang, setLang] = useState("hi");

  const videoConstraints = {
	width: 1280,
	height: 720,
	facingMode: "user"
  };

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
	  console.log(imageSrc);
    },
    [webcamRef]
  );

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ReactTransliterate
          value={text}
          onChangeText={(text) => {
            setText(text);
          }}
		  placeholder="Start typing.."
          lang="hi"
          activeItemStyles={{color: "#000", background: "#f2f2f2"}}
          containerStyles={{color: "#000"}}
          style={{height: "35px", lineHeight: "35px", borderRadius: "50px", padding: "10px"}}
		  triggerKeys={[
			TriggerKeys.KEY_RETURN,
			TriggerKeys.KEY_ENTER,
			TriggerKeys.KEY_SPACE,
			TriggerKeys.KEY_TAB,
		  ]}
		  insertCurrentSelectionOnBlur={true}
        />

      {/* <label htmlFor="react-transliterate-material-ui-input">Using Material UI input</label>
		<ReactTransliterate
			renderComponent={(props) => {
			const inputRef = props.ref;

			delete props["ref"];

			return <Input fullWidth {...props} inputRef={inputRef} />;
			}}
			value={text}
			onChangeText={(text) => {
			setText(text);
			}}
			lang={lang}
			placeholder="Start typing here..."
			id="react-transliterate-material-ui-input"
			activeItemStyles={{color: "#000", background: "#f2f2f2"}}
         	containerStyles={{color: "#000"}}
		/> */}
		<br/>

		<Webcam
        audio={false}
        height={50}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
      />
      <button onClick={capture}>Capture photo</button>
        
      </header>

	  
    </div>
  );
}

export default App;

// https://burhanuday.github.io/react-transliterate/
