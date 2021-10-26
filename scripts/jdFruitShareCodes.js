let codes = ['6f7fa3cede5b4d9ab2a699859032a677','d138f871698649f7a42777ff671bf06c'];
for (let i = 0; i < codes.length; i++) {
	const index = (i + 1 === 1) ? '' : (i + 1);
	exports['FruitShareCode' + index] = codes[i];
}