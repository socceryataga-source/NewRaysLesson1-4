const activities = {
  winner1: {
    label: "Winner ①",
    image: "images/winner1.png"
  },
  loser1: {
    label: "Loser ①",
    image: "images/loser1.png"
  },
  winner2: {
    label: "Winner ②",
    image: "images/winner2.png"
  },
  loser2: {
    label: "Loser ②",
    image: "images/loser2.png"
  }
};

const menuScreen = document.getElementById("menuScreen");
const activityScreen = document.getElementById("activityScreen");
const roleLabel = document.getElementById("roleLabel");
const activityImage = document.getElementById("activityImage");
const downloadBtn = document.getElementById("downloadBtn");
const backBtn = document.getElementById("backBtn");
const siteTitle = document.getElementById("siteTitle");

if (window.ACTIVITY_TITLE) {
  siteTitle.textContent = window.ACTIVITY_TITLE;
  document.title = window.ACTIVITY_TITLE;
}

function openActivity(key) {
  const activity = activities[key];
  if (!activity) return;

  roleLabel.textContent = activity.label;
  activityImage.src = activity.image;
  activityImage.alt = activity.label;
  downloadBtn.href = activity.image;
  downloadBtn.download = `${key}.png`;

  menuScreen.classList.remove("active");
  activityScreen.classList.add("active");
}

function backToMenu() {
  activityScreen.classList.remove("active");
  menuScreen.classList.add("active");
  activityImage.src = "";
}

document.querySelectorAll(".role-btn").forEach((button) => {
  button.addEventListener("click", () => openActivity(button.dataset.key));
});

backBtn.addEventListener("click", backToMenu);
