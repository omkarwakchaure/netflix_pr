export const LOGO =
  "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-01/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";



export const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/movie/now_playing',
  params: {language: 'en-US', page: '1'},
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NjQzNzNkMGY1YjRiNTRhYjVhMzYyYmFlODA1NjkzYiIsIm5iZiI6MTc1MjQxODc1Ny42NjIwMDAyLCJzdWIiOiI2ODczYzljNTU0ZGM5ODg3NGFiYTM5ZjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.H-gkpC1q_YCiHTIZyvBxnJ30fRWVKbY2MeShDgCrsPY'
  }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";