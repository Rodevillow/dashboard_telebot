import React, { useState } from "react";

import "../assets/scss/pages/signIn.scss";

const Auth = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailIsDirty, setEmailIsDirty] = useState(false);
    const [passwordIsDirty, setPasswordIsDirty] = useState(false);

    // ------------------
    // Validation
    // ------------------

    function emailIsValid() {
        if (emailIsDirty) {
            // TODO :: Testing check, rewrite to real validation rules
            return email.length > 0;
        }

        return false;
    }

    function passwordValidation() {
        if (emailIsDirty) {
            // TODO :: Testing check, rewrite to real validation rules
            return password.length > 0;
        }

        return false;
    }

    // ------------------
    // End Validation
    // ------------------

    function onEmailChange(event) {
        setEmailIsDirty(true);
        setEmail(() => event.target.value);
    }

    function onPasswordChange(event) {
        setPasswordIsDirty(true);
        setPassword(() => event.target.value);
    }

    return (
        <div className="auth">
            <div className="auth__form-wrapper">
                <form>
                    <div className="field-wrapper">
                        <label htmlFor="email">Почта</label>
                        <input
                            class="input input_default"
                            id="email"
                            name="email"
                            type="text"
                            value={email}
                            onChange={onEmailChange}
                            placeholder="Введите почту"
                        />
                        <span className="input__error-text">
                            Неправильно введена почта
                        </span>
                    </div>
                    <div className="field-wrapper">
                        <label htmlFor="password">Пароль</label>
                        <input
                            class="input input_default"
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={onPasswordChange}
                            placeholder="Введите пароль"
                        />
                        <span className="input__error-text">
                            Пароль должен быть не менее 6 символов
                        </span>
                    </div>
                    <button className="btn btn-default">Авторизоваться</button>
                </form>
            </div>
        </div>
    );
};

export default Auth;
