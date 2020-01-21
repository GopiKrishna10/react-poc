import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

const useLoginForm = (callback, validate) => {
    const history = useHistory();

    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
            history.push('/redux');
        }
    }, [errors]);

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: event.target.value }));
        setErrors(validate(values));
    };
    return {
        handleChange,
        handleSubmit,
        values,
        errors,
    }
};

export default useLoginForm;