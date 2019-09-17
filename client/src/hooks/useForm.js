import { useLocalStorage } from './useLocalStorage';

export const useForm = (key, initialValue , callback) => {
    const [values, setValues] = useLocalStorage(key, initialValue || {});
    const handlesChanges = e => {
        setValues({ ...values, [e.target.name]: e.target.name});
    };
    const handleSubmit = e => {
        e.preventDefault();
        callback();
    };
    return [values, handlesChanges, handleSubmit];

};