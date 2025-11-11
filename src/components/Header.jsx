import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import lang from "../utils/languageConstants";
import { toggleDiscoverMode } from "../utils/discoverSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const langKey = useSelector((store) => store.config.lang);

  const isDiscoverMode = useSelector((store) => store.discover.isDiscoverMode);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
   if (isDiscoverMode) {
      dispatch(toggleDiscoverMode());
    }
    // Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleDiscoverMode = () => {
    if (showGptSearch) {
      dispatch(toggleGptSearchView());
    }
    // Toggle Discover Mode
    dispatch(toggleDiscoverMode());
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      <img className="w-44" src={LOGO} alt="logo" />

      <div className="flex p-2">
        <select
          className="p-2 m-2 bg-gray-900 text-white"
          onChange={handleLanguageChange}
          value={langKey}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option key={lang.identifier} value={lang.identifier}>
              {lang.name}
            </option>
          ))}
        </select>

        {user && (
          <>
            <button
              className="py-2 px-4 mx-4 my-2 bg-purple-800/70 text-white rounded-lg"
              onClick={handleDiscoverMode}
            >
            {lang[langKey].tailorYourBinge}
            </button>
            <button
              className="py-2 px-4 mx-4 my-2 bg-blue-900/70 text-white rounded-lg"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? lang[langKey].homePage : lang[langKey].gptSearch}
            </button>
            <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
            <button onClick={handleSignOut} className="font-bold text-white">
              {lang[langKey].signOut}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
