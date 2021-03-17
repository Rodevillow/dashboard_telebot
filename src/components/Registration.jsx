import React, { useState } from "react";

import "../assets/scss/pages/signUp.scss";

const Registration = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");

    function onEmailChange(event) {
        setEmail(() => event.target.value)
    }

    function onPasswordChange(event) {
        setPassword(() => event.target.value)
    }

    function onPasswordConfirmationChange(event) {
        setPasswordConfirmation(() => event.target.value)
    }

    return (
        <div className="registration">
            <div className="registration__form-wrapper">
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
                        <span className="input__error-text">Неправильно введена почта</span>
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
                        <span className="input__error-text">Пароль должен быть не менее 6 символов</span>
                    </div>
                    <div className="field-wrapper">
                        <label htmlFor="password">Повторите пароль</label>
                        <input
                            class="input input_default"
                            id="password"
                            name="password"
                            type="password"
                            value={passwordConfirmation}
                            onChange={onPasswordConfirmationChange}
                            placeholder="Введите пароль повторно"
                        />
                        <span className="input__error-text">Пароли не совпадают</span>
                    </div>
                    <button className="btn btn-default">Авторизоваться</button>
                </form>
            </div>
        </div>
    );
};

export default Registration;
