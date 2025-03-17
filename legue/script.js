const scoreboard = document.getElementById('scoreboard');

function addTeam() {
  const teamNameInput = document.getElementById('teamName');
  const teamName = teamNameInput.value.trim();

  if (teamName === '') {
    displayError('Please enter a team name.');
    return;
  }

  if (isDuplicateTeam(teamName)) {
    displayError('Team name already exists.');
    return;
  }

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${teamName}</td>
    <td>0</td>
    <td>0</td>
    <td>
      <button class="update" onclick="updatePoints(this, 1)">+1</button>
      <button class="update" onclick="updatePoints(this, -1)">-1</button>
      <button class="remove" onclick="removeTeam(this)">Remove</button>
    </td>
  `;

  scoreboard.appendChild(row);
  teamNameInput.value = '';
  clearError();
}

function updatePoints(button, points) {
  const row = button.parentElement.parentElement;
  const pointsCell = row.children[1];
  const matchesCell = row.children[2];

  let currentPoints = parseInt(pointsCell.textContent, 10);
  let currentMatches = parseInt(matchesCell.textContent, 10);

  currentPoints += points;
  if (currentPoints < 0) currentPoints = 0;

  currentMatches += 1;

  pointsCell.textContent = currentPoints;
  matchesCell.textContent = currentMatches;
}

function removeTeam(button) {
  const row = button.parentElement.parentElement;
  scoreboard.removeChild(row);
}

function isDuplicateTeam(teamName) {
  const rows = document.querySelectorAll('#scoreboard tr');
  return Array.from(rows).some(row => row.children[0].textContent === teamName);
}

function displayError(message) {
  const errorDiv = document.getElementById('error');
  errorDiv.textContent = message;
}

function clearError() {
  const errorDiv = document.getElementById('error');
  errorDiv.textContent = '';
}
