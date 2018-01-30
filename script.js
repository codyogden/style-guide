// Highlight Color Card HEX and RGB values on click.
const cellsToHightlight = document.querySelectorAll('div.color-card table tr > th + td');
const numOfCellsToHightlight = cellsToHightlight.length;
for(let i = 0; i < numOfCellsToHightlight; i++) {
	let cell = cellsToHightlight.item(i);
	cell.addEventListener('click', function() {
		window.getSelection().selectAllChildren( this );
		document.execCommand('copy');
	});
}