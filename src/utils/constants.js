export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + import.meta.env.VITE_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/5efeb1fd-55d2-4799-8d38-e59e15858b9c/web/IN-en-20260427-TRIFECTA-perspective_0933b420-0cb6-4e67-8e9d-3224dc64b517_small.jpg";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English", region: "US" },
  { identifier: "hindi", name: "Hindi", region: "IN" },
  { identifier: "spanish", name: "Spanish", region: "ES" },
  { identifier: "fr", name: "French", region: "FR" },
  { identifier: "de", name: "German", region: "DE" },
  { identifier: "it", name: "Italian", region: "IT" },
];

export const SORT_BY_OPTIONS = [
  { value: "popularity.desc", langKey: "popularity" },
  { value: "release_date.desc", langKey: "releaseDate" },
  { value: "revenue.desc", langKey: "revenue" },
  { value: "vote_average.desc", langKey: "topRated" },
];

const currentYear = new Date().getFullYear();
const startYear = 1950;

const years = [];

for (let year = currentYear; year >= startYear; year--) {
  years.push(year);
}

export const YEARS = years;

export const OPENAI_KEY = import.meta.env.VITE_OPENAI_KEY;
