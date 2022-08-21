import { Api } from "./modules/Api.js";

const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts__container");
const dataBase = await Api.getAllPosts(loadingElement);

Api.listItems(postsContainer, dataBase)