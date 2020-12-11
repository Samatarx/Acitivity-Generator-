const activityEl = document.getElementById("activ");
const activBtn = document.getElementById("activBtn");

activBtn.addEventListener("click", generateActivity);

generateActivity();

// using async await
// async function generateActivity() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   const response = await fetch("http://www.boredapi.com/api/activity/", config);

//   const data = await response.json()

//   activityEl.innerHTML = data.activity
// }

using.then();
function generateActivity() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  fetch("http://www.boredapi.com/api/activity/", config)
    .then((response) => response.json())
    .then((data) => {
        activityEl.innerHTML = data.activity;
    });
}
