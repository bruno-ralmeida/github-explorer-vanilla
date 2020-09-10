export const updateData = (userResp, repo) => {
  let avatarImg = document.querySelector("#avatar");
  let username = document.querySelector("#username");
  let user = document.querySelector("#user");
  let company = document.querySelector("#company");
  let location = document.querySelector("#location");
  let email = document.querySelector("#email");

  avatarImg.setAttribute("src", userResp.avatar_url);

  username.innerHTML = ` ${userResp.name}`;
  user.innerHTML = ` <img src="https://img.icons8.com/material/20/000000/github-2.png"/>
                        ${userResp.login} `;
  company.innerHTML = `<img src="https://img.icons8.com/small/20/000000/link-company-parent.png"/>
                        ${userResp.company}`;
  location.innerHTML = `<img src="https://img.icons8.com/ios-glyphs/20/000000/worldwide-location.png"/>
                                            ${userResp.location}`;
  email.innerHTML = `<img src="https://img.icons8.com/material-rounded/20/000000/filled-sent.png"/>
                        ${userResp.blog}`;

  listRepositories(repo);
};

export const listRepositories = (repo) => {
  let searchResult = document.querySelector(".search_result__repo");

  repo.map((e) => {
    const { name, full_name, language } = e;
    searchResult.innerHTML += `  
                              <h2> ${language} </h2>
                              <h2> ${name} </h2>
                              <h2> ${full_name} </h2>
    
                              `;
  });

  console.log(repo);
};
