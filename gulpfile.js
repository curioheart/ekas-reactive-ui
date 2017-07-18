// Gulpfile for the CSS modifications to Eka's Portal.
// Use this when working outside of Atom.
//

let gulp = require('gulp')
let sass = require('gulp-sass')
let lint = require('gulp-sass-lint')

gulp.task('scss', function() {
  // only run compilation off of the primary file
  return gulp.src('scss/ekas-reactive-ui.scss')
    .pipe(lint({configFile: './.sass-lint.yml'}))
    .pipe(lint.format()) // using the default reporter - stylish
    .pipe(lint.failOnError()) // halt gulp if it encounters an error in formatting
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('./'))
})

gulp.task('watch', function() {
  // watch _all_ files, but only execute on the primary file
  gulp.watch('scss/**/*.scss', function(event) {
    console.log(`File ${event.type} detected; running 'scss' task...`)
    gulp.start('scss')
  })
})

gulp.task('default', ['scss'])
