"use strict";

const btn = document.querySelector(".submit-btn");
const username = document.getElementById("username");

async function getUserInfo(username) {
  const response = await fetch("https://api.github.com/users/" + username);
  const data = await response.json();
  return data;
}

btn.addEventListener("click", async function (e) {
  e.preventDefault();
  try {
    let userDetails = await getUserInfo(username.value);
    console.log(userDetails);

    document.querySelector(".profile-img").src = userDetails.avatar_url;
    document.querySelector(".info-text-name").textContent = userDetails.name;

    // Check for null bio
    if (!userDetails.bio) {
      document.querySelector(".info-text-bio").textContent = "No bio available";
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
    } else {
      document.querySelector(".location-text").textContent =
        userDetails.location;
    }

    // Check for null twitter_username
    if (!userDetails.twitter_username) {
      document.querySelector(".twitter-text").textContent =
        "No twitter account available";
    } else {
      document.querySelector(".twitter-text").textContent =
        userDetails.twitter_username;
    }

    // Check for null blog (website)
    const websiteElement = document.querySelector(".website-text");

    if (!userDetails.blog) {
      websiteElement.textContent = "No website available";
      websiteElement.href = ""; // Set or clear the href if needed
    } else {
      websiteElement.textContent = userDetails.blog;
      websiteElement.href = userDetails.blog; // Set the href to the blog URL
    }
    // Check for null company
    if (!userDetails.company) {
      document.querySelector(".company-text").textContent =
        "No company available";
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
