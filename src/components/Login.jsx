import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";
import { BG_URL } from "../utils/constants";
import lang from "../utils/languageConstants"

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang)

  const yourName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    const nameValue = isSignInForm ? null : yourName.current.value;

    const message = checkValidData(emailValue, passwordValue, nameValue);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          //Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameValue,
            photoURL:USER_AVATAR,
          })
            .then(() => {
              // Profile updated
                 const { uid, email, displayName, photoURL } = auth.currentUser;
                      dispatch(
                        addUser({
                          uid: uid,
                          email: email,
                          displayName: displayName,
                          photoURL: photoURL,
                        })
                      );
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="bg"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-9 bg-black/90 my-36 mx-auto right-0 left-0 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-6">
          {isSignInForm ? lang[langKey].signIn : lang[langKey].signUp}
        </h1>
        {!isSignInForm && (
          <input
            ref={yourName}
            type="text"
            placeholder=" Full Name"
            className="p-2 my-2 w-full bg-[#16131b] rounded-lg"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder={lang[langKey].emailPlaceholder}
          className="p-2 my-2 w-full bg-[#16131b] rounded-lg"
        ></input>

        <input
          ref={password}
          type="password"
          placeholder={lang[langKey].passwordPlaceholder}
          className="p-2 my-2 w-full bg-[#16131b] rounded-lg"
        ></input>

        <p className="text-red-600 p-2">{errorMessage}</p>

        <button
          className="p-2 my-5 bg-red-600 hover:bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? lang[langKey].signIn : lang[langKey].signUp}
        </button>
        <p className="py-3 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? lang[langKey].signUpPrompt : lang[langKey].signInPrompt}
        </p>
      </form>
    </div>
  );
};

export default Login;
