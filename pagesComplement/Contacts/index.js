import { Drawer, Header, localStorageManager, pagesEnum} from "../../components/component.js";

localStorageManager(window);
function appendHtmlString(parentElement, htmlString) {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = htmlString;
  
    while (tempElement.firstChild) {
      parentElement.appendChild(tempElement.firstChild);
    }
};

const topContainer = document.getElementById('top-container');
appendHtmlString(topContainer, Drawer(pagesEnum[3]));
appendHtmlString(topContainer, Header());
