const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
	body.classList.add("dark-mode");
	toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
	body.classList.toggle("dark-mode");

	const isDark = body.classList.contains("dark-mode");
	toggleBtn.textContent = isDark ? "☀️" : "🌙";

	localStorage.setItem("theme", isDark ? "dark" : "light");
});
document.querySelectorAll('.read-more').forEach(btn => {
  btn.addEventListener('click', () => {
    const post = btn.closest('.post');
    const full = post.querySelector('.post-full');

    // Toggle using the DOM property
    full.hidden = !full.hidden;

    // Update button label
    btn.textContent = full.hidden ? 'Read more' : 'Show less';
  });
});