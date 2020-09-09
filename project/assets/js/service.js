const url = "https://api.github.com/users";
const clientId = "Iv1.87a07652c4a21083";
const clientSecret = "143204d4bfc11ac9f70ba25eaf2c1d310451d14c";

export const getUser = async (user) => {
  const profileResponse = await fetch(
    `${url}/${user}?client_id=${clientId}&client_secret=${clientSecret}`);
  return profileResponse.json();
};

export const getRepo = async (user) => {
  const repoResponse = await fetch(
    `${url}/${user}/repos?client_id=${clientId}&client_secret=${clientSecret}`);
  return repoResponse.json();
};