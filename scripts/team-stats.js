const OUR_TEAM = "MTSAC1";
const TOP_COUNT =  15;

async function loadRanking() {
  const list = document.getElementById("team-list");
  const count = document.getElementById("ranking-count");

  try {
    const response = await fetch("/static/data/skills.json");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const teams = await response.json();

    teams.sort((a, b) => b.score - a.score);
    count.textContent = `${teams.length} teams`;

    const width = String(teams.length).length;
    const fragment = document.createDocumentFragment();

    teams.forEach((entry, index) => {
      const item = document.createElement("li");
      item.className = "team";
      if (entry.team === OUR_TEAM) item.classList.add("highlight");
      if (index >= TOP_COUNT) item.classList.add("extra");

      const rank = document.createElement("span");
      rank.className = "rank";
      rank.textContent = String(index + 1).padStart(Math.max(width, 2), "0");

      const name = document.createElement("span");
      name.className = "team-name";
      name.textContent = entry.team;
      name.title = entry.team;

      const score = document.createElement("span");
      score.className = "score";
      score.textContent = entry.score;

      item.append(rank, name, score);
      fragment.append(item);
    });

    list.replaceChildren(fragment);

    if (teams.length > TOP_COUNT) {
      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.className = "toggle-teams";
      toggle.setAttribute("aria-controls", "team-list");

      const updateToggle = () => {
        const expanded = list.classList.contains("expanded");
        toggle.textContent = expanded ? `Show top ${TOP_COUNT}` : `Show all ${teams.length} teams`;
        toggle.setAttribute("aria-expanded", String(expanded));
      };

      toggle.addEventListener("click", () => {
        list.classList.toggle("expanded");
        if (!list.classList.contains("expanded")) list.scrollTop = 0;
        updateToggle();
      });

      updateToggle();
      list.after(toggle);
    }

    const ours = list.querySelector(".highlight:not(.extra)");
    if (ours) list.scrollTop = ours.offsetTop - list.offsetTop - list.clientHeight / 2;
  } catch (error) {
    list.innerHTML = '<li class="team-error">Could not load rankings.</li>';
    console.error("Ranking load failed:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadRanking);