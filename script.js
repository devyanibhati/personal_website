const companiesContainerSize = 1718;

const clonesNeeded = Math.ceil(window.innerWidth / companiesContainerSize);

console.log(clonesNeeded);

const companiesContainer = document.getElementById("companies-container");

for (let i = 0; i < clonesNeeded; i++) {
  const childNodes = Array.from(companiesContainer.cloneNode(true).childNodes);
  childNodes.forEach((node) => companiesContainer.appendChild(node));
}
