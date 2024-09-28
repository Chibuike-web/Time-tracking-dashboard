const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");
const timeframeHours = document.querySelectorAll(".timeframe-hours");
const timeframeTexts = document.querySelectorAll(".timeframe-text");
const trackingBtn = document.querySelector(".tracking-btn");
const trackingBtnArray = Array.from(trackingBtn.children);
console.log(trackingBtnArray);

// let clickedBtn = null;
// trackingBtnArray.forEach((btn) => {
// 	btn.addEventListener("click", (e) => {
// 		e.preventDefault();
// 		if (clickedBtn) {
// 			clickedBtn.style.color = "";
// 		}

// 		e.currentTarget.style.color = "white";
// 		clickedBtn = e.currentTarget;
// 	});
// });

// Function to reset button colors
const resetButtonColors = () => {
	trackingBtnArray.forEach((btn) => {
		btn.style.color = ""; // Revert to initial color set by CSS
	});
};

daily.addEventListener("click", (e) => {
	e.preventDefault();
	resetButtonColors(); // Reset all buttons
	daily.style.color = "white"; // Keep daily white
	// Update timeframes for daily
	timeframeHours.forEach((timeframe, index) => {
		if (timeframe.classList.contains("work")) {
			timeframe.textContent = "5hrs";
			timeframeTexts[index].textContent = "Yesterday - 7hrs";
		} else if (timeframe.classList.contains("play")) {
			timeframe.textContent = "1hr";
			timeframeTexts[index].textContent = "Yesterday - 2hrs";
		} else if (timeframe.classList.contains("study")) {
			timeframe.textContent = "0hr";
			timeframeTexts[index].textContent = "Yesterday - 1hr";
		} else if (timeframe.classList.contains("exercise")) {
			timeframe.textContent = "1hr";
			timeframeTexts[index].textContent = "Yesterday - 1hr";
		} else if (timeframe.classList.contains("social")) {
			timeframe.textContent = "1hrs";
			timeframeTexts[index].textContent = "Yesterday - 3hrs";
		} else if (timeframe.classList.contains("self-care")) {
			timeframe.textContent = "0hr";
			timeframeTexts[index].textContent = "Yesterday - 1hr";
		}
	});
});

weekly.addEventListener("click", (e) => {
	e.preventDefault();
	resetButtonColors(); // Reset all buttons
	weekly.style.color = "white"; // Set weekly to white
	daily.style.color = "#6F76C8"; // Change daily to another color (e.g., gray)
	timeframeHours.forEach((timeframe, index) => {
		if (timeframe.classList.contains("work")) {
			timeframe.textContent = "32hrs";
			timeframeTexts[index].textContent = "Last Week - 36hrs";
		} else if (timeframe.classList.contains("play")) {
			timeframe.textContent = "10hrs";
			timeframeTexts[index].textContent = "Last Week - 8hrs";
		} else if (timeframe.classList.contains("study")) {
			timeframe.textContent = "4hrs";
			timeframeTexts[index].textContent = "Last Week - 7hrs";
		} else if (timeframe.classList.contains("exercise")) {
			timeframe.textContent = "4hrs";
			timeframeTexts[index].textContent = "Last Week - 5hrs";
		} else if (timeframe.classList.contains("social")) {
			timeframe.textContent = "5hrs";
			timeframeTexts[index].textContent = "Last Week - 10hrs";
		} else if (timeframe.classList.contains("self-care")) {
			timeframe.textContent = "2hrs";
			timeframeTexts[index].textContent = "Last Week - 2hrs";
		}
	});
});

monthly.addEventListener("click", (e) => {
	e.preventDefault();
	resetButtonColors(); // Reset all buttons
	monthly.style.color = "white"; // Set monthly to white
	daily.style.color = "#6F76C8"; // Change daily to another color (e.g., gray)
	timeframeHours.forEach((timeframe, index) => {
		if (timeframe.classList.contains("work")) {
			timeframe.textContent = "103hrs";
			timeframeTexts[index].textContent = "Last Month - 128hrs";
		} else if (timeframe.classList.contains("play")) {
			timeframe.textContent = "23hrs";
			timeframeTexts[index].textContent = "Last Month - 29hrs";
		} else if (timeframe.classList.contains("study")) {
			timeframe.textContent = "13hrs";
			timeframeTexts[index].textContent = "Last Month - 19hrs";
		} else if (timeframe.classList.contains("exercise")) {
			timeframe.textContent = "11hrs";
			timeframeTexts[index].textContent = "Last Month - 18hrs";
		} else if (timeframe.classList.contains("social")) {
			timeframe.textContent = "21hrs";
			timeframeTexts[index].textContent = "Last Month - 23hrs";
		} else if (timeframe.classList.contains("self-care")) {
			timeframe.textContent = "7hrs";
			timeframeTexts[index].textContent = "Last Month - 11hrs";
		}
	});
});
