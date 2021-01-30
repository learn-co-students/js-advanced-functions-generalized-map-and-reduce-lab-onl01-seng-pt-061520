// map
function map(source, callback) {
	const transformed = [];
	for (const e of source) {
		transformed.push(callback(e));
	}
	return transformed;
}

// reduce
function reduce(src, cb, starting){
	let r = (!!starting) ? starting : src[0]
	let i = (!!starting) ? 0 : 1

	for (; i < src.length; i++) {
	r = cb(src[i], r)
	}

	return r;
}