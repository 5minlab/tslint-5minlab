const array = [1, 2, 3];

array.map((x) => {
	return x + 1;
});

array.map(x => {
	return x + 1;
});

array.map(x => x + 1);

class SampleClass {
	public foo() {
		return 1;
	}

	private bar() {
		return 2;
	}
}

// promise
async function makePromise() {
	return new Promise<number>((resolve) => resolve(1));
}

// good
async function promise_a() {
	const x = await makePromise();
	return x;
}

// bad
// async function promise_b() {
// 	makePromise();
// }
