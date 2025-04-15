function checkColor() {
	var inputColor = document.getElementById('color').value;

	switch (inputColor) {
	case "red":
		document.getElementById('kulay').innerHTML = "STOP!";
		break;

	case "green":
		document.getElementById('kulay').innerHTML = "GO!";
		break;

	case "yellow":
		document.getElementById('kulay').innerHTML = "CAUTION!";
		break;

	default:
		document.getElementById('kulay').innerHTML = "Invalid Entry. Try Again";
	}
}