let buttons = [
	{
		id: "b0",
		value: 100,
		page: 0,
	},
	{
		id: "b1",
		value: 200,
		page: 0,
	},
	{
		id: "b2",
		value: 300,
		page: 0,
	},
	{
		id: "b3",
		value: 100,
		page: 1,
	},
	{
		id: "b4",
		value: 200,
		page: 1,
	},
	{
		id: "b5",
		value: 300,
		page: 1,
	},
];

let page = 0;

function rendering_buttons() {
	buttons.forEach((button) => {
		if (button.page == page) {
			document.getElementById(button.id).classList.remove("display_none");
		} else {
			document.getElementById(button.id).classList.add("display_none");
		}
	});

	if (page == 2) {
		document.getElementById("result").classList.remove("display_none");
	} else {
		document.getElementById("result").classList.add("display_none");
	}
}

function select() {
	const target = event.target;
	const id = target.id;
	console.log("Clicked on:" + target.id);

	determine_selection(target);

	page += 1;
	rendering_buttons();
}

function determine_selection(target) {
	if (is_selected(target)) {
		console.log("Target deselected");
		target.classList.remove("selected");
		change_value(target, false);
	} else {
		console.log("Target selected");
		target.classList.add("selected");
		change_value(target, true);
	}
}

function change_value(target, select) {
	const value = document.getElementById("value");
	buttons.forEach((element) => {
		if (element.id === target.id) {
			if (select) {
				value.innerHTML = (
					Number(value.innerHTML) + element.value
				).toFixed(2);
			} else {
				value.innerHTML = (
					Number(value.innerHTML) - element.value
				).toFixed(2);
			}
		}
	});
}

function is_selected(target) {
	return target.classList.contains("selected");
}
