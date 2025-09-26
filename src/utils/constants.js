export const LOGO =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR =
  "https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZWU4ZDQ1OGU0NjUzOWMzNTAzZWNjYTdiZjc1NDMyZiIsIm5iZiI6MTc0OTgxMDA1My42MjEsInN1YiI6IjY4NGJmYjg1ZjZlZDExNzg0MjM0M2NhYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l_ln-udzugjvBPbulK26CLY-BHDecVotRh8wdIIOuLE",
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/6863f6e8-d419-414d-b5b9-7ef657e67ce4/web/IN-en-20250602-TRIFECTA-perspective_27a3fdfa-126f-4148-b153-55d60b51be6a_large.jpg";

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
