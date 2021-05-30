module.exports = (ctx) => ({
	map: ctx.options.map,
	parser: ctx.options.parser,
	plugins: [
		require('postcss-nested'),
		require('postcss-import')({ root: ctx.file.dirname }),
		...(ctx.env === 'production' ? [require('cssnano')] : [])
	]
});