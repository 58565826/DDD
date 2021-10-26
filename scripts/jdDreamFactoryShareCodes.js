let codes = ['FDTKud7EhIkHk5-7y3VpeQ==','807Up-RUvfgUGndMMjCZDA=='];
for (let i = 0; i < codes.length; i++) {
	const index = (i + 1 === 1) ? '' : (i + 1);
	exports['shareCodes.js' + index] = codes[i];
}