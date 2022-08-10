// Using javascript to scroll
document.querySelector("#down-arrow").addEventListener("click", (e) => {
	document.querySelector("#contactMe").scrollIntoView({ behavior: "smooth" });
});
