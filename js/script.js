// feature: dom
const addShelterButton = document.querySelector('#add-shelter');
const removeShelterButton = document.querySelector('#remove-shelter');
const shelterList = document.querySelector('#shelter-list');
const shelterCount = document.querySelector('#shelter-count');

let shelterNumber = 0;

function updateShelterCount() {
  shelterCount.textContent = shelterList.children.length;
  removeShelterButton.disabled = shelterList.children.length === 0;
}

addShelterButton.addEventListener('click', () => {
  shelterNumber += 1;

  const shelter = document.createElement('li');
  shelter.className = 'list-group-item d-flex justify-content-between align-items-center';
  shelter.textContent = `Refugio ${shelterNumber}`;

  const badge = document.createElement('span');
  badge.className = 'badge text-bg-success rounded-pill';
  badge.textContent = 'Disponible';

  shelter.appendChild(badge);
  shelterList.appendChild(shelter);
  updateShelterCount();
});

removeShelterButton.addEventListener('click', () => {
  const lastShelter = shelterList.lastElementChild;

  if (lastShelter) {
    lastShelter.remove();
    updateShelterCount();
  }
});

updateShelterCount();
