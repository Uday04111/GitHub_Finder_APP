const REACT_APP_GITHUB_URL = "https://api.github.com";

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  // https://api.github.com/search/users?q=uday
  const response = await fetch(
    `${REACT_APP_GITHUB_URL}/search/users?${params}`
  );
  if (!response.ok) throw new Error("Something went wrong!");

  const { items } = await response.json();

  return items;
};

export const getUser = async (login) => {
  const response = await fetch(`${REACT_APP_GITHUB_URL}/users/${login}`);
  if (!response.ok) {
    window.location = "/notfound";
  } else {
    const data = await response.json();

    return data;
  }
};

export const getRepos = async (login) => {
  const params = new URLSearchParams({
    sort: "created",
    per_page: 10,
  });

  const response = await fetch(
    `${REACT_APP_GITHUB_URL}/users/${login}/repos?${params}`
  );

  const data = await response.json();
  return data;
};
