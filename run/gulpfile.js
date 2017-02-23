const gulp = require('gulp'),
sass = require('gulp-sass')
autoprefixer = require('gulp-autoprefixer');
gulp.task('sass',()=>{
	gulp.src('../sass/**/*.scss')
	.pipe(sass({outputStyle:'expanded'}))
	.pipe(autoprefixer({versions:['last 5 browsers']}))
	.pipe(gulp.dest('../css/'))
})
gulp.task('watch',()=>{
	gulp.watch('../sass/**/*.scss',['sass']);
})
gulp.task('default',['watch']);