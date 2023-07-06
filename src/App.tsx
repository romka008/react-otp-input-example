import {useState} from "react";
import OtpInput from "react-otp-input";

import "./App.css";

export default function App() {
    const [otp, setOtp] = useState("");

    return (
        <div className="wrapper">
            <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                renderSeparator={<span>-</span>}
                renderInput={props => <input {...props} />}
            />
        </div>
    );
}
