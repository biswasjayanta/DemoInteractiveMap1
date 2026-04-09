const button = document.getElementById('toggle-button');
const details = document.getElementById('extra-details');
const title = document.getElementById('page-title');

button.addEventListener('click', () => {
  details.classList.toggle('hidden');

  if (details.classList.contains('hidden')) {
    button.textContent = 'Show / hide extra details';
  } else {
    button.textContent = 'Hide extra details';
  }
});

const showMoreParksButton = document.getElementById('show-more-parks-button');
const showMoreParks = document.getElementById('show-more-parks');

showMoreParksButton.addEventListener('click', () => {
  showMoreParks.classList.toggle('hidden');

  if (showMoreParks.classList.contains('hidden')) {
    showMoreParksButton.textContent = 'Show / Hide Extra Parks';
  } else {
    showMoreParksButton.textContent = 'Hide Extra Parks';
  }
});

// Example: change the title when the page loads.
title.textContent = 'National Parks of the United States';
title.classList.add('highlight-title');
