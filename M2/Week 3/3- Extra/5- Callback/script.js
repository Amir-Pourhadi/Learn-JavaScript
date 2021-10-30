/* 
setTimeout(() => {
	document.body.style.backgroundColor = "red";
}, 1000);
setTimeout(() => {
	document.body.style.backgroundColor = "orange";
}, 2000);
setTimeout(() => {
	document.body.style.backgroundColor = "yellow";
}, 3000);
 */

/* 
setTimeout(() => {
	document.body.style.backgroundColor = "red";
	setTimeout(() => {
		document.body.style.backgroundColor = "orange";
		setTimeout(() => {
			document.body.style.backgroundColor = "yellow";
			setTimeout(() => {
				document.body.style.backgroundColor = "green";
				setTimeout(() => {
					document.body.style.backgroundColor = "blue";
				}, 1000);
			}, 1000);
		}, 1000);
	}, 1000);
}, 1000);
 */

/* 
const delayedColourChange = (newColor, delay) => {
	setTimeout(() => {
		document.body.style.backgroundColor = newColor;
	}, delay);
};

delayedColourChange("olive", 2000);
delayedColourChange("teal", 2000);
delayedColourChange("khaki", 4000);
 */

/* 
const delayedColourChange = (newColor, delay, doNext) => {
	setTimeout(() => {
		document.body.style.backgroundColor = newColor;
		doNext && doNext();
	}, delay);
};

delayedColourChange("red", 1000, () => {
	delayedColourChange("orange", 1000, () => {
		delayedColourChange("yellow", 1000);
	});
});
 */
