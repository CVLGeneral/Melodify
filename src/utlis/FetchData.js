export const SongOptions = {
    method: 'GET',
	headers: {
				'Content-Type': 'application/json',
			},
  };
  


  export const FetchData = async (url, options) => {
    const response = await fetch(url, options);
      const data = await response.json();
      return data;
  };
  