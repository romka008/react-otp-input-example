import {useState} from "react";
import OtpInput from "react-otp-input";

import "./App.css";

export default function App() {
    const [otp, setOtp] = useState("");

    return (
        <div className="wrapper">
            {/* <OtpInput
                value={otp}
                onChange={setOtp}
                inputType="number"
                numInputs={5}
                renderSeparator={<span>-</span>}
                renderInput={props => <input {...props} />}
            />
            <OtpInput
                value={otp}
                onChange={setOtp}
                inputType="tel"
                numInputs={5}
                renderSeparator={<span>-</span>}
                renderInput={props => <input {...props} />}
            /> */}
            <input type="text" autoComplete="one-time-code" />
        </div>
    );
}
