let codes = ['T0104qQ2Lx0b9QCjVWnYaS5kRrbA','T0225KkcRk9M9gLVIUuhk6MCIACjVWnYaS5kRrbA'];
for (let i = 0; i < codes.length; i++) {
	const index = (i + 1 === 1) ? '' : (i + 1);
	exports['shareCodes.js' + index] = codes[i];
}