const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

	cursor.style.left = e.clientX + "px";
	cursor.style.top = e.clientY + "px";

	/* след */

	const trail = document.createElement("div");
	trail.classList.add("trail");

	trail.style.left = e.clientX + "px";
	trail.style.top = e.clientY + "px";

	document.body.appendChild(trail);

	setTimeout(() => {
		trail.remove();
	}, 600);
});