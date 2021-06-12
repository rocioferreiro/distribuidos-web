import React, { useReducer, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import {post} from "../http";
import LoginForm from "./LoginForm";

type State = {
  email: string
  password:  string
  isButtonDisabled: boolean
  helperText: string
  isError: boolean
};

type User = {
  email: string,
  password: string
}

const initialState:State = {
  email: '',
  password: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false
};

type Action = { type: 'setEmail', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'loginFailed', payload: string }
  | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setEmail':
      return {
        ...state,
        email: action.payload
      };
    case 'setPassword':
      return {
        ...state,
        password: action.payload
      };
    case 'setIsButtonDisabled':
      return {
        ...state,
        isButtonDisabled: action.payload
      };
    case 'loginFailed':
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
    case 'setIsError':
      return {
        ...state,
        isError: action.payload
      };
  }
}

const Login = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.email.trim() && state.password.trim()) {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: false
      });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  }, [state.email, state.password]);

  let history = useHistory();

  const handleLogin = () => {
    const user: User = {email: state.email, password: state.password};
    post( "login", user, {noAuth: true}).then(
      (response) => {
        document.cookie=`token=${response.token.token};`
        localStorage.setItem('id', response.id)
        history.push('/')
      }
    ).catch(error => {
      console.log(error)
      dispatch({
        type: 'loginFailed',
        payload: 'Incorrect email or password'
      });
    })
  }

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleEmailChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setEmail',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    };

  return (
    <LoginForm handleEmailChange={handleEmailChange} handlePasswordChange={handlePasswordChange} handleKeyPress={handleKeyPress} handleLogin={handleLogin} state={state}/>
  );
};

export default Login;