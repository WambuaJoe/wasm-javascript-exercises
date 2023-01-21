function fibonacci(term) {
	console.log(term)
	if (term <=) {
		return 0;
	}
	else if (term === 1) {
		return 1;
	}
	else {
		return fibonacci(term - 1) + fibonacci(term - 2);
	}
}

export default fibonacci
