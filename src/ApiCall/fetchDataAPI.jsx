export const exerciseoptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '467eeae444mshe834261959b5a0fp1764d6jsn95f6a67ad5bf',
    },
  };
  
  export const youtubeoptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '2077199532msh10374b7feea5db7p19435ajsna74956be7511',
    },
  };
  
  export const fetchRapidAPIData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };




