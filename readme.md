# Eka's Reactive UI

> Based on Foxygrandpa's [Unified UI][unified-ui] theme.

## About this mess

Much of the work so far has been to break apart the roughy 900 lines of CSS into sets of more manageable SCSS files, including isolating colors and various common styles, for easier modification. As the goal of this is to make Eka's Portal more appealing across a wider range of screens, this also means that positional and size constraints will be removed from the rest of the code... eventually.

## Installing

Though this project itself doesn't install, it still requires [Node.js][node] and `npm` (installed with Node.js). With Node installed, clone the repository, use your terminal to navigate into the project directory, and type `yarn install`- or `npm install`, if you don't have [Yarn][yarnpkg].

## Compiling

The code from this project is designed to be built one of two different ways:

1. Use [Atom][atom] and compile using the [build][atom-build] package (pre-configured for this project). Just press `F7` and select "Eka's Reactive UI".
  * Currently, it's configured to run `node-sass`; if you prefer one of the other [Sass][sass] or [LibSass][libsass] ports, you only need to change `cmd` at the top of `.atom-build.yml` to your preferred Sass compiler.
  > Note: Changing the command to either the Ruby Sass gem or one of the LibSass compilers also removes the dependency on Node.js if you would prefer not to use it.

2. Use [Gulp][gulpjs] to run the compilation once, or to watch the files for changes. If you are using Atom, the gulp tasks are also configured to run with the build package as "Compile" and "Watch".

## Recoloring & Modification

By using SCSS instead of pure CSS, it's a lot easier for me to keep a lot of the style specifics separate from the rest of the project. To help make things even easier for you, the vast majority of styles in `scss/colors.scss` and `scss/vars.scss` make use of Sass's [defaults][defaults] feature. Just make a new file containing the color and/or variable overrides (e.g., `scss/my-colors.scss`) and insert it _above_ the imports for `colors` and `vars`:

```scss
// scss/ekas-reactive-ui.scss

// Your custom file(s) here!
@import 'colors';
@import 'vars';
// ...
```

## Distribution

The official distribution channel for the compiled CSS is on [Stylish][stylish-distribution].

You may also freely redistribute the unmodified source, so long as you credit myself and Foxygrandpa for our work on this theme. If you change _anything_ in the files, however, you must also note that you altered the source from its original state with your distribution.

_Do not, under any circumstances, remove the `license.md` file. This file **must** be present with any/all files distributed from this repository._

## TODO

- [ ] Finish code re-organization
- [ ] Extract common colors and styles
- [ ] Nest styles
  - [ ] Remove duplicate selectors
  - [ ] Replace hard-coded styles with variables (where possible)
  - [ ] Extract size and position of elements
- [ ] Check for places where mixins and/or functions would be helpful

<!-- Links -->
[atom]: https://atom.io
[atom-build]: https://atom.io/packages/build
[cc-by-4]: https://spdx.org/licenses/CC-BY-4.0.html
[defaults]: http://sass-lang.com/documentation/file.SASS_REFERENCE.html#Variable_Defaults___default
[gulpjs]: http://gulpjs.com
[libsass]: http://sass-lang.com/libsass
[node]: https://nodejs.org/en/
[sass]: http://sass-lang.com/
[stylish-distribution]: https://userstyles.org/
[unified-ui]: https://userstyles.org/styles/128947/aryion-unified-modern-ui
[yarnpkg]: https://yarnpkg.com/en/
