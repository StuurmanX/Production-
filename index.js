for (let i = 1; i <= 3; i++) {
    const row = document.getElementById(`row-${i}`);
    row.addEventListener("click", () => {
      window.location.href = `/row-${i}`;
    });
  }

const select = document.querySelector("#status");
const counter = document.querySelector("#counter");
let startTime;

select.addEventListener("change", function(event) {
  const selectedOption = event.target.value;
  if (startTime) {
    const endTime = new Date();
    const duration = (endTime - startTime) / 1000;
    counter.innerHTML = `Time spent on "${selectedOption}": ${duration} seconds`;
    startTime = undefined;
  } else {
    startTime = new Date();
    counter.innerHTML = `Started "${selectedOption}"`;
  }
});
