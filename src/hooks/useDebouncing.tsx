import { useRef } from "react";

export function useDebouncedForm(delay = 300) {
    // store timer ids
    const timers = useRef<Record<string, any>>({});

    // debounced handler
    const handleDebouncedChange = (
        name: string,
        value: string,
        setForm: React.Dispatch<React.SetStateAction<any>>
    ) => {
        // clear old timer if exists
        if (timers.current[name]) {
            clearTimeout(timers.current[name]);
        }

        // create new timer
        timers.current[name] = setTimeout(() => {
            setForm((prev: object) => ({ ...prev, [name]: value }));
        }, delay);
    };

    return { handleDebouncedChange };
}
