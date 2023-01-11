for (let i = 1; i <= 3; i++) {
    const row = document.getElementById(`row-${i}`);
    row.addEventListener("click", () => {
      window.location.href = `/row-${i}`;
    });
  }