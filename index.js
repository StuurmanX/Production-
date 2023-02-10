for (let i = 1; i <= 3; i++) {
    const row = document.getElementById(`row-${i}`);
    row.addEventListener("click", () => {
      window.location.href = `/row-${i}`;
    });
  }

  let counter = document.getElementById("counter");
  let status = document.getElementById("status");
  let interval;

  status.addEventListener("change", function() {
    clearInterval(interval);
    counter.innerHTML = 0;
    if (status.value === "Minor clean") {
      interval = setInterval(function() {
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
      }, 1000);
    }
   });
