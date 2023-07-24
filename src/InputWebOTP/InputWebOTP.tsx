import {FormEvent, useEffect, useRef, useState} from "react";

export const InputWebOTP = () => {
    const [inputValue, setInputValue] = useState("");
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        // Feature detection
        if ("OTPCredential" in window) {
            const form = formRef.current;
            //Allows us to cancel the web API if the form is submitted manually
            const ac = new AbortController();
            const handler = () => {
                ac.abort();
            };
            form?.addEventListener("submit", handler);

            //Let the browser listen for any sms message containing an OTP code.
            navigator.credentials
                .get({
                    // @ts-ignore
                    otp: {transport: ["sms"]},
                    signal: ac.signal
                })
                .then((otp: any) => {
                    //set the state and submit the form automatically
                    setInputValue(otp.code);
                    alert(otp.code);
                    // form?.submit();
                })
                .catch(err => {
                    console.log(err);
                    alert(`Ошибочка ${err}`);
                });

            //Cleanup useEffect
            return () => {
                if (!form) return;
                form.removeEventListener("submit", handler);
            };
        }
    }, []);

    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    };

    const handleConfirmCode = (e: FormEvent) => {
        e.preventDefault();
        alert(`Нажата кнопка отправить, ${inputValue}`);
    };
    return (
        <form ref={formRef}>
            <input type="tel" value={inputValue} autoComplete="one-time-code" onChange={handleInputChange} />
            <button onClick={handleConfirmCode}>Отправить</button>
        </form>
    );
};
