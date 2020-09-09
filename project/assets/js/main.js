import { getUser, getRepo } from "./service";
import { updateData } from "./utils";

const search = document.querySelector("#iSearch");

search.addEventListener("keyup", (e) => {
  try {
    const find = e.target.value;

    (async () => {
      const user = await getUser(find);
      const repo = await getRepo(find);
      updateData(user, repo);
    })();
  } catch (error) {
    console.log(error);
  }
});
