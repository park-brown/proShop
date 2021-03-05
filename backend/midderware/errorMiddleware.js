// const notFound = (request, res, next) => {
// 	const error = new Error(`NOT FOUND --${request.originalUrl}`);
// 	res.status(404);
// 	next(error);
// };

// const errorHandler = (request, res, next, error) => {
// 	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
// 	res.sendStatus(statusCode);
// 	res.json({
// 		message: error.message,
// 		stack: process.env.NODE_ENV === 'production' ? null : error.stack,
// 	});
// };

// export { notFound, errorHandler };
const notFound = (req, res, next) => {
	const error = new Error(`Not Found - ${req.originalUrl}`);
	res.status(404);
	next(error);
};

const errorHandler = (err, req, res, next) => {
	const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
	res.status(statusCode);
	res.json({
		message: err.message,
		stack: process.env.NODE_ENV === 'production' ? null : err.stack,
	});
};

export { notFound, errorHandler };
