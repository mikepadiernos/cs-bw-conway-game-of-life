const	auto				= require('autoprefixer-stylus'),
			cssnano			= require('cssnano'),
			gulp				= require('gulp'),
			postcss			= require('gulp-postcss'),
			stylus			= require('gulp-stylus'),
			rupture			= require('rupture'),
			typographic	= require('typographic');

gulp.task('app', () => {

	const processors = [
		cssnano
	];

	return gulp.src('./assets/stylus/App.styl')
		.pipe(stylus({
			use: [
				auto(),
				typographic(),
				rupture()
			]
		}))
		.pipe(postcss(processors))
		.pipe(gulp.dest('./assets/css'));

});

gulp.task('default', () => {
	gulp.watch('./assets/**/*.styl',  gulp.series('app'));
});
