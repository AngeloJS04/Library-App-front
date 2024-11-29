"use client";
import { useState } from "react";

export const useForm = <T extends object>(initState: T) => {
    const [state, setState] = useState(initState);

    const onChange = (value: string | number | string[] | boolean | object, field: keyof T, cleanAmountFormat = false) => {
        if (cleanAmountFormat && typeof value === "string") {
            value = value.replace(/\D/g, "");
        }

        // setState({
        //     ...state,
        //     [field]: value,
        // });
        setState((prevState) => ({
            ...prevState,
            [field]: value,
        }));
    };

    const setFormData = (data: T) => {
        setState(data);
    };

    const clear = () => {
        setState(initState);
    };

    return {
        ...state,
        form: state,
        onChange,
        clear,
        setFormData,
    };
};
