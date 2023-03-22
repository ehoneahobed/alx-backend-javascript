export default function getFullResponseFromAPI(success) {
	const myObj = {
		status: 200,
		body: "Success",
	};

	return new Promise((resolve, reject) => {
		if (success === true) {
			resolve(myObj);
		} else {
			reject("The fake API is not working currently");
		}
	});
}
