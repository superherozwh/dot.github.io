let pattern = "random";

gsap.to(".top, .left, .right, .bottom", {
	duration: 1.5,
	scale: 0.1,
	width: 10,
	height: 10,
	rotate: 360,
	transformOrigin: "center",
	x: "random(-200, 200, 5)",
	y: "random(-200, 200, 5)",
	z: "random(-100, 200, 5)",
	boxShadow: "0 0 20px 13px green",
	//ease: "power1.inOut",
	repeat: -1,
	yoyo: true,
	stagger: {
		grid: [8, 8],
		yoyo: true,
		from: pattern,
		amount: 5
	}
});

gsap.to(".container", {
	duration: 1111,
	rotation: 10000,
	transformOrigin: "center",
	//ease: "power1.inOut",
	repeat: -1
});