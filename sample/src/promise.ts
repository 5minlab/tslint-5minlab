async function makePromise() {
	return new Promise<number>((resolve) => resolve(1));
}

async function no_floating_promises() {
	// good
	await makePromise();

	// bad
	// makePromise();
}

async function no_promise_as_boolean() {
	// good
	if (await makePromise()) { console.log(1); }

	// bad
	// if (makePromise()) { console.log(2); }
}
