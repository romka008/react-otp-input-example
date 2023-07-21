import {useState} from "react";
import OtpInput from "react-otp-input";

import "./App.css";
import {AutoCompleteInput} from "./AutoCompleteInput/AutoCompleteInput";
import {InputWebOTP} from "./InputWebOTP/InputWebOTP";

export default function App() {
    const [otp, setOtp] = useState("");

    return (
        <div className="wrapper">
            <div style={{display: "flex", gap: "10px"}}>
                <label>OtpInput, type: number</label>
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    inputType="number"
                    numInputs={5}
                    renderSeparator={<span>-</span>}
                    renderInput={props => <input {...props} />}
                />
            </div>
            <div style={{display: "flex", gap: "10px"}}>
                <label>OtpInput, type: tel</label>
                <OtpInput
                    value={otp}
                    onChange={setOtp}
                    inputType="tel"
                    numInputs={5}
                    renderSeparator={<span>-</span>}
                    renderInput={props => <input {...props} />}
                />
            </div>
            <div style={{display: "flex", gap: "10px"}}>
                <label>Input: только autoComplete: "one-time-code"</label>
                <input type="tel" autoComplete="one-time-code" />
            </div>
            <div style={{display: "flex", gap: "10px"}}>
                <label>Input listener: "message"</label>
                <AutoCompleteInput />
            </div>
            <div style={{display: "flex", gap: "10px"}}>
                <label>Input без атрибутов, type: tel</label>
                <input type="tel" />
            </div>
            <div style={{display: "flex", gap: "10px"}}>
                <label>Input c WebOTP API</label>
                <InputWebOTP />
            </div>
        </div>
    );
}
