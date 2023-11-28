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
appendHtmlString(topContainer, Drawer(pagesEnum[2]));
appendHtmlString(topContainer, Header());

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const tabId = button.getAttribute('data-tab');
    activateTab(tabId);
  });
});

const tabButton = document.querySelector(`[data-tab="tab1"]`);
const tabContent = document.getElementById('tab1');

tabButton.classList.add('active');
tabContent.classList.add('active');

function activateTab(tabId) {
  console.log(tabId)
  tabButtons.forEach(button => {
    button.classList.remove('active');
  });

  tabContents.forEach(content => {
    content.classList.remove('active');
  });

  const tabButton = document.querySelector(`[data-tab="${tabId}"]`);
  const tabContent = document.getElementById(tabId);

  tabButton.classList.add('active');
  tabContent.classList.add('active');
}
