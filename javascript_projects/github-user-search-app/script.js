"use strict";

const btn = document.querySelector(".submit-btn");
const username = document.getElementById("username");
const switchMode = document.querySelector(".switch-mode");
const theme = document.getElementById("theme-link");
const modeImage = document.querySelector(".switch-img");
const modeText = document.querySelector(".switch-text");
const errorMessage = document.querySelector(".error-message");

async function getUserInfo(username) {
  const response = await fetch("https://api.github.com/users/" + username);
  if (response.status !== 200) {
    errorMessage.textContent = "User not found";

    throw new Error("User not found");
  }
  const data = await response.json();
  return data;
}

function fontColor(theme, element) {
  if (
    theme.getAttribute("href") == "light-theme.css" &&
    (element.textContent == "No location available" ||
      element.textContent == "No bio available" ||
      element.textContent == "No website available" ||
      element.textContent == "No company available" ||
      element.textContent == "Not available")
  ) {
    element.style.color = "#f6f8ff";
  } else if (
    theme.getAttribute("href") == "dark-theme.css" &&
    (element.textContent == "No location available" ||
      element.textContent == "No bio available" ||
      element.textContent == "No website available" ||
      element.textContent == "No company available" ||
      element.textContent == "Not available")
  ) {
    element.style.color = "#697c9a";
  }
}

btn.addEventListener("click", async function (e) {
  e.preventDefault();
  errorMessage.textContent = "";
  try {
    let userDetails = await getUserInfo(username.value);
    console.log(userDetails);

    document.querySelector(".profile-img").src = userDetails.avatar_url;
    document.querySelector(".info-text-name").textContent = userDetails.name;

    // Check for null bio
    if (!userDetails.bio) {
      document.querySelector(".info-text-bio").textContent = "No bio available";
      fontColor(theme, document.querySelector(".info-text-bio"));
    } else {
      document.querySelector(".info-text-bio").textContent = userDetails.bio;
    }

    document.querySelector(".info-text-username").textContent =
      "@" + userDetails.login;
    document.querySelector(".info-text-stats-followers-number").textContent =
      userDetails.followers;
    document.querySelector(".info-text-stats-following-number").textContent =
      userDetails.following;
    document.querySelector(".info-text-stats-repo-number").textContent =
      userDetails.public_repos;

    // Check for null location
    console.log(userDetails);
    if (userDetails.location === null) {
      document.querySelector(".location-text").textContent =
        "No location available";
      fontColor(theme, document.querySelector(".location-text"));
    } else {
      document.querySelector(".location-text").textContent =
        userDetails.location;
    }

    // Check for null twitter_username
    if (!userDetails.twitter_username) {
      document.querySelector(".twitter-text").textContent = "Not available";
      fontColor(theme, document.querySelector(".twitter-text"));
    } else {
      document.querySelector(".twitter-text").textContent =
        userDetails.twitter_username;
    }

    // Check for null blog (website)
    const websiteElement = document.querySelector(".website-text");

    if (!userDetails.blog) {
      websiteElement.textContent = "No website available";
      fontColor(theme, websiteElement);
      websiteElement.href = ""; // Set or clear the href if needed
    } else {
      websiteElement.textContent = userDetails.blog;
      websiteElement.href = userDetails.blog; // Set the href to the blog URL
    }
    // Check for null company
    if (!userDetails.company) {
      document.querySelector(".company-text").textContent =
        "No company available";
      fontColor(theme, document.querySelector(".company-text"));
    } else {
      document.querySelector(".company-text").textContent = userDetails.company;
    }

    // Format date if needed
    const joinedDate = new Date(userDetails.created_at);
    document.querySelector(".info-text-joined").textContent =
      "Joined " +
      joinedDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
  } catch (error) {
    console.error("Error fetching user information:", error);
  }
});

// Listen for a click on the button
switchMode.addEventListener("click", function () {
  // If the current URL contains "ligh-theme.css"
  if (theme.getAttribute("href") == "light-theme.css") {
    // ... then switch it to "dark-theme.css"
    theme.href = "dark-theme.css";
    modeImage.src = "assets/icon-sun.svg";
    modeText.textContent = "LIGHT";
    // Otherwise...
  } else {
    // ... switch it to "light-theme.css"
    theme.href = "light-theme.css";
    modeImage.src = "assets/icon-moon.svg";
    modeText.textContent = "DARK";
  }
});
