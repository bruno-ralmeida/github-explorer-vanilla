import { getUser, getRepo } from "./service";
import { updateData } from "./utils";

const search = document.querySelector("#btnSearch");

search.addEventListener("click", () => {

  try {
    const find = document.querySelector("#iSearch").value;

    (async () => {
      const user = await getUser(find);
      const repo = await getRepo(find);
      updateData(user, repo);
    })();
    
  } catch (error) {
    console.log(error);
  }
});
