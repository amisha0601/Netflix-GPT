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
    signOut(auth).catch(() => navigate("/error"));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    if (isDiscoverMode) dispatch(toggleDiscoverMode());
    dispatch(toggleGptSearchView());
  };

  const handleDiscoverMode = () => {
    if (showGptSearch) dispatch(toggleGptSearchView());
    dispatch(toggleDiscoverMode());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black via-black/60 to-transparent z-20 flex justify-between items-center">
      <img className="w-44 drop-shadow-lg" src={LOGO} alt="logo" />

      <div className="flex items-center gap-2">
        <select
          className="w-22 p-1.5 bg-[#11151c] text-white border border-white/20 rounded-md text-sm cursor-pointer"
          onChange={handleLanguageChange}
          value={langKey}
        >
          {SUPPORTED_LANGUAGES.map((lang) => (
            <option
              key={lang.identifier}
              value={lang.identifier}
              className="bg-[#11151c]"
            >
              {lang.name}
            </option>
          ))}
        </select>

        {user && (
          <>
            <button
              className="w-28 py-2 px-3 bg-[#da003a] text-white rounded-md text-sm font-medium hover:bg-[#ff0040] truncate shadow-md"
              onClick={handleDiscoverMode}
            >
              {lang[langKey].tailorYourBinge}
            </button>

            <button
              className="w-28 py-1.5 px-3 bg-[#dddf00] text-neutral-800 rounded-md text-sm font-semibold hover:bg-[#d9ff00] truncate shadow-md border border-purple-600/50"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? lang[langKey].homePage : lang[langKey].gptSearch}
            </button>

            <button
              onClick={handleSignOut}
              className="w-20 p-1.5 bg-[#003f88] text-white rounded-md text-sm font-medium hover:bg-[#19598a] truncate shadow-md"
            >
              {lang[langKey].signOut}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;