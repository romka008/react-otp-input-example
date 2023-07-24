import {useState, useEffect} from "react";

export const AutoCompleteInput = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e: any) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        // Создаем обработчик события для получения sms-сообщения
        const handleSmsReceived = (event: any) => {
            console.log(event);
            const smsMessage = event.data; // Получаем текст смс-сообщения из события
            // Здесь можно добавить логику извлечения кода из sms-сообщения
            // и установку значения в поле ввода
            // Например:
            const codeRegex = /Код:\s(\d+)/;
            alert(smsMessage);
            if (typeof smsMessage === "string") {
                setInputValue(smsMessage);
            }
            // const match = typeof smsMessage === "string" ? smsMessage.match(codeRegex) : "";
            // console.log(match);
            // if (match) {
            //     const code = match[1];
            //     console.log(code);
            //     setInputValue(code);
            // }
        };

        // Добавляем слушателя события message для получения sms-сообщений
        document.addEventListener("message", handleSmsReceived);

        // Возвращаем функцию очистки, чтобы удалить слушатель при размонтировании компонента
        return () => {
            document.removeEventListener("message", handleSmsReceived);
        };
    }, []);

    const simulateSmsReceived = () => {
        // Симулируем получение смс-сообщения
        const smsMessage = "Ваш код: 123456"; // Здесь должно быть фактическое смс-сообщение
        // @ts-ignore
        document.postMessage(smsMessage); // Отправляем смс-сообщение в окно браузера
    };

    return (
        <>
            <button onClick={simulateSmsReceived}>Получить SMS</button>
            <input type="text" value={inputValue} onChange={handleInputChange} />
        </>
    );
};
