const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const replace = require("gulp-replace");
const inlineCss = require("gulp-inline-css");
const rename = require("gulp-rename");
const browserSync = require("browser-sync").create();

// dummy data
const locals = {
  customerName: "Allen",
  message:
    "Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Aenean imperdiet.. Donec mollis hendrerit risus. Nunc sed turpis. Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Aenean imperdiet.. Donec mollis hendrerit risus. Nunc sed turpis.",
  customerAddress: "390 East Ridge Brighton RI 02938",
  total: 25000,
  items: [
    {
      title: "Duis lobortis massa imperdiet",
      price: 5000,
      description:
        "Fusce risus nisl, viverra et, tempor et, pretium in, sapien. Aenean imperdiet.. Donec mollis hendrerit risus. Nunc sed turpis.",
      image:
        "https://res.cloudinary.com/dhjyd95yq/image/upload/v1573944479/beowulf/nbjawrege0mbox3mqgeo.jpg",
      largeImage:
        "https://res.cloudinary.com/dhjyd95yq/image/upload/c_scale,q_100,w_1000/v1573944479/beowulf/nbjawrege0mbox3mqgeo.jpg",
      quantity: 1,
      user: {
        connect: {
          id: "ck1nzla6rlx9v0b4072fcp55d"
        }
      }
    },
    {
      title: "Cum sociis natoque penatibus",
      price: 20000,
      description:
        "Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor. Phasellus gravida semper nisi. Donec mi odio, faucibus at, scelerisque quis, convallis in, nisi. In hac habitasse platea dictumst. Etiam feugiat lorem non metus.",
      image:
        "https://res.cloudinary.com/dhjyd95yq/image/upload/v1573944557/beowulf/wpzucacjwzdccqznuaef.jpg",
      largeImage:
        "https://res.cloudinary.com/dhjyd95yq/image/upload/c_scale,q_100,w_1000/v1573944557/beowulf/wpzucacjwzdccqznuaef.jpg",
      quantity: 1,
      user: {
        connect: {
          id: "ck1nzla6rlx9v0b4072fcp55d"
        }
      }
    }
  ],
  id: "ck37xhgbzb3da0b00hgkb01tg"
};

// browserSync base directory
// this will be the base directory of files for web preview
// since we are building `index.pug` templates (located in src/emails) to `dist` folder.
const baseDir = "./dist";

// build complete HTML email template
// compile sass (compileSass task) before running build
gulp.task("build", function() {
  return (
    gulp
      // import all email template (name ending with .template.pug) files from src/emails folder
      .src("templates/**/*.pug")

      // compile using Pug
      .pipe(pug({ locals: locals }))

      // do not generate sub-folders inside dist folder
      .pipe(rename({ dirname: "" }))

      // put compiled HTML email templates inside dist folder
      .pipe(gulp.dest("dist"))
  );
});

// browserSync task to launch preview server
gulp.task("browserSync", function() {
  return browserSync.init({
    reloadDelay: 2000, // reload after 2s, compilation is finished (hopefully)
    server: { baseDir: baseDir },
    port: 3333
  });
});

// task to reload browserSync
gulp.task("reloadBrowserSync", function() {
  return browserSync.reload();
});

// watch source files for changes
// run `build` task when anything inside `src` folder changes (except .css)
// and reload browserSync
gulp.task("watch", ["build", "browserSync"], function() {
  return gulp.watch(
    ["templates/**/*", "!templates/**/*.css"],
    ["build", "reloadBrowserSync"]
  );
});
