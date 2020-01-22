import React from 'react';
import useLoginForm from "./userForm";
import validate from './LoginFormValidation';
import { useHistory } from "react-router-dom";

const FormsComponent = () => {
    const history = useHistory();
    const {
        values,
        errors,
        handleChange,
        handleSubmit,

    } = useLoginForm(login, validate);
    function login() {
        history.push('/redux');
    }

    return (
        <div className="component-block">
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <label>Email Address</label>
                    <div>
                        <input autoComplete="off" type="email" name="email" onChange={handleChange} value={values.email || ''} required />
                        {errors.email && (
                            <p className=" is-danger">{errors.email}</p>
                        )}
                    </div>
                </div>
                <div>
                    <label>Password</label>
                    <div>
                        <input type="password" name="password" onChange={handleChange} value={values.password || ''} required />
                    </div>
                    {errors.password && (
                        <p className=" is-danger">{errors.password}</p>
                    )}
                </div>
                <button type="submit" >Login</button>
                {/*<button onClick={}>With Redux</button>
                <button onClick={}>With Hooks</button>*/}
            </form>
        </div>
    )
}
export default FormsComponent;