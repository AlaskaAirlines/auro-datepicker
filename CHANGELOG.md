# Semantic Release Automated Changelog

# [2.8.0-beta.1](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.7.1...v2.8.0-beta.1) (2024-08-19)


### Features

* implement tier 3 color tokens [#206](https://github.com/AlaskaAirlines/auro-datepicker/issues/206) ([563b498](https://github.com/AlaskaAirlines/auro-datepicker/commit/563b4985f852bc2eabbb17fa5981ceb4e1566307))


### Performance Improvements

* **deps:** update dependencies to latest versions ([43d7b62](https://github.com/AlaskaAirlines/auro-datepicker/commit/43d7b62dc9a061f12585b9684b244afda0fd7d30))
* use custom versioned auro-popover ([8e572f4](https://github.com/AlaskaAirlines/auro-datepicker/commit/8e572f4d141dd94f1e097a39750e5255282c105b))

## [2.7.1](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.7.0...v2.7.1) (2024-08-09)


### Bug Fixes

* revert input version to fix button ui error ([b36fa76](https://github.com/AlaskaAirlines/auro-datepicker/commit/b36fa76492b812f0ba663a642eae9280a8652544))

# [2.7.0](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.6.2...v2.7.0) (2024-08-07)


### Features

* update dependencies and docs for date slot changes [#241](https://github.com/AlaskaAirlines/auro-datepicker/issues/241) ([1500b41](https://github.com/AlaskaAirlines/auro-datepicker/commit/1500b41a4df5c74d065956eb9f6ece1374f6c1d0))


### Performance Improvements

* update deps and refactor scripts to run auro-library versions ([ec0431b](https://github.com/AlaskaAirlines/auro-datepicker/commit/ec0431b86615cabb955c9a7bebdd8225e7a88b2d))

## [2.6.2](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.6.1...v2.6.2) (2024-07-17)


### Performance Improvements

* update icon endpoint 244 ([ccd9253](https://github.com/AlaskaAirlines/auro-datepicker/commit/ccd9253bb3ac6c8593f157bd1a6e53c72235fa1c))

## [2.6.1](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.6.0...v2.6.1) (2024-07-09)


### Bug Fixes

* **calendar:** make divider center correctly with range support [#242](https://github.com/AlaskaAirlines/auro-datepicker/issues/242) ([542c0fc](https://github.com/AlaskaAirlines/auro-datepicker/commit/542c0fc45a465e9e43bc403f2be1664222da9337))
* **day:** selected date price is now the right color [#239](https://github.com/AlaskaAirlines/auro-datepicker/issues/239) ([fa9968e](https://github.com/AlaskaAirlines/auro-datepicker/commit/fa9968e2314ef5b91d1f51c297107642277f8c3c))

# [2.6.0](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.5.4...v2.6.0) (2024-06-17)


### Bug Fixes

* **event:** correctly send month changed event [#234](https://github.com/AlaskaAirlines/auro-datepicker/issues/234) ([420e12a](https://github.com/AlaskaAirlines/auro-datepicker/commit/420e12acdc5c223e305622eaa1cc3ab5cf90569d))


### Features

* **slots:** provide a public method to force cells to fetch their slot content [#233](https://github.com/AlaskaAirlines/auro-datepicker/issues/233) ([9fd7c1c](https://github.com/AlaskaAirlines/auro-datepicker/commit/9fd7c1cc00b423ee1007040ed29e39e919b4ba17))

## [2.5.4](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.5.3...v2.5.4) (2024-06-10)


### Bug Fixes

* add relative positioning to div wrapper ([190e89d](https://github.com/AlaskaAirlines/auro-datepicker/commit/190e89d497a0b4b8ac846a0e377f5a74876c29b7)), closes [AuroSelect#187](https://github.com/AuroSelect/issues/187)

## [2.5.3](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.5.2...v2.5.3) (2024-05-24)


### Bug Fixes

* address date selection issues ([b35e058](https://github.com/AlaskaAirlines/auro-datepicker/commit/b35e058b53f173dad234528bb9fb797e93838d98))

## [2.5.2](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.5.1...v2.5.2) (2024-05-17)


### Bug Fixes

* correctly handle focus date when values are set [#225](https://github.com/AlaskaAirlines/auro-datepicker/issues/225) ([242bdc4](https://github.com/AlaskaAirlines/auro-datepicker/commit/242bdc4bf25fc5d3e97f4acc408bc2079f6d7d68))

## [2.5.1](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.5.0...v2.5.1) (2024-04-26)


### Bug Fixes

* **mobile:** correct height calculation to account for dynamic display of mobile address bar [#222](https://github.com/AlaskaAirlines/auro-datepicker/issues/222) ([483de44](https://github.com/AlaskaAirlines/auro-datepicker/commit/483de44b8e5eaa503392e8c41e8cbf0632e057c1))

# [2.5.0](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.4.1...v2.5.0) (2024-04-24)


### Bug Fixes

* **layout:** adjust mobile layout issue discovered during dev ([7fcafb8](https://github.com/AlaskaAirlines/auro-datepicker/commit/7fcafb8b49efa7935b0fa478610ce4850cb7f955))


### Features

* **calendar:** add new feature and improve control of rendered calendar months [#213](https://github.com/AlaskaAirlines/auro-datepicker/issues/213) ([9d1d955](https://github.com/AlaskaAirlines/auro-datepicker/commit/9d1d9555fb8dc95e030fb81c239ced10d49bf181))
* **scrolling:** auto-scroll to focusdate when opening the mobile datepicker the first time ([c6f44fd](https://github.com/AlaskaAirlines/auro-datepicker/commit/c6f44fd5a14f13fe7bbb4a588b6b9b45f46835ce))


### Performance Improvements

* **tests:** update time comparison to tests to work in any time zone. ([186f16d](https://github.com/AlaskaAirlines/auro-datepicker/commit/186f16de297fd6291bb0e304ddada458bfb36965))

## [2.4.1](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.4.0...v2.4.1) (2024-03-13)


### Performance Improvements

* **docs:** make JS examples execute in the new component standard [#207](https://github.com/AlaskaAirlines/auro-datepicker/issues/207) ([6230ae0](https://github.com/AlaskaAirlines/auro-datepicker/commit/6230ae027cd008f019e2750bb4ae400064fd8f6e))

# [2.4.0](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.3.0...v2.4.0) (2024-03-12)


### Bug Fixes

* **linters:** fix linting errors ([545875e](https://github.com/AlaskaAirlines/auro-datepicker/commit/545875e21638156e5c4fab3ae77b9face9c4e697))
* **popover:** update overflow boundary for popover [#197](https://github.com/AlaskaAirlines/auro-datepicker/issues/197) ([3bc0616](https://github.com/AlaskaAirlines/auro-datepicker/commit/3bc061622634cc3cc49bcc17f73339d97a5148fc))


### Features

* **focus:** update input focus handling method [#202](https://github.com/AlaskaAirlines/auro-datepicker/issues/202) ([f66159e](https://github.com/AlaskaAirlines/auro-datepicker/commit/f66159eeaadda2d2e41f7e315ca1f0565a0034e9))
* **versioning:** implement component dependency versioning [#163](https://github.com/AlaskaAirlines/auro-datepicker/issues/163) [#166](https://github.com/AlaskaAirlines/auro-datepicker/issues/166) ([4fc7bd0](https://github.com/AlaskaAirlines/auro-datepicker/commit/4fc7bd0695722bcb703f29f18f71d9bdca912403))


### Performance Improvements

* **deps:** update dependencies ([f60a640](https://github.com/AlaskaAirlines/auro-datepicker/commit/f60a64099c1448dc9f6945c091c30f8596757a87))
* **deps:** update dependencies ([4e020ad](https://github.com/AlaskaAirlines/auro-datepicker/commit/4e020ad309e073b9553f2f63ebd330d7ecd701dd))
* **deps:** update dependency operator for auro components ([6b86fca](https://github.com/AlaskaAirlines/auro-datepicker/commit/6b86fcab8aea63ed6f9a4e6f1188aacb1e599eef))
* **icon:** update render icon handling for year crossover ([190e0be](https://github.com/AlaskaAirlines/auro-datepicker/commit/190e0beff89f2d081e9e526aa640ee23f40f5a26))
* **icon:** update render icon handling for year crossover ([d948b1c](https://github.com/AlaskaAirlines/auro-datepicker/commit/d948b1cce66cd95341b3fbd4530d2cb1f2e5c4e8))
* **popover:** update popover dependency ([0238382](https://github.com/AlaskaAirlines/auro-datepicker/commit/0238382296e0536aa68cdea341a24ef1175e3e8c))
* **slot:** update handling of slot content insertion [#198](https://github.com/AlaskaAirlines/auro-datepicker/issues/198) ([cc73303](https://github.com/AlaskaAirlines/auro-datepicker/commit/cc733034a8ebdb1fecf1c16f921a2c14e7abd271))
* **tests:** fix broken tests causing them to time out ([dc74d00](https://github.com/AlaskaAirlines/auro-datepicker/commit/dc74d00620947441d9621cc268678345fb63fd78))

# [2.3.0](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.2.7...v2.3.0) (2024-02-27)


### Bug Fixes

* create "monthChanged" in auro-calendar ([3f88608](https://github.com/AlaskaAirlines/auro-datepicker/commit/3f886084329f3463a363851eb21af0a79fda51fb))
* dispatch monthChanged event from datepicker ([4d359da](https://github.com/AlaskaAirlines/auro-datepicker/commit/4d359dab239092a814d0340401a84929a49381b6))
* **lint:** fix linting issues blocking release ([5039bcb](https://github.com/AlaskaAirlines/auro-datepicker/commit/5039bcbc1224950c74fff27a7a7a199d61ff35d6))
* rename calendarOpened to toggled ([e6463a7](https://github.com/AlaskaAirlines/auro-datepicker/commit/e6463a72924d6eef472a9a0c060a9c86b159f14d))


### Features

* **calendar:** add 'auroCalendar-monthChanged' event ([f46b3d0](https://github.com/AlaskaAirlines/auro-datepicker/commit/f46b3d0a040c212cc9fbf3c045503120a673adb0))
* **datepicker:** add 'auroDatePicker-calendarOpened' event ([9d6f0b2](https://github.com/AlaskaAirlines/auro-datepicker/commit/9d6f0b24ac4845722b61c443a0d0c09bfaf5fee3))

## [2.2.7](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.2.6...v2.2.7) (2024-02-13)


### Performance Improvements

* update auro dependencies ([b51c03d](https://github.com/AlaskaAirlines/auro-datepicker/commit/b51c03d38092a7e14e604e1206a88c4a319d4a14))

## [2.2.6](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.2.5...v2.2.6) (2024-02-13)


### Performance Improvements

* update auro dependencies ([5e8f6f6](https://github.com/AlaskaAirlines/auro-datepicker/commit/5e8f6f672a4d8a43104ba2123402409ba25debf8))

## [2.2.5](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.2.4...v2.2.5) (2024-02-05)


### Bug Fixes

* **keyboard:** stop mobile keyboard from displaying [#192](https://github.com/AlaskaAirlines/auro-datepicker/issues/192) ([b7d9d9c](https://github.com/AlaskaAirlines/auro-datepicker/commit/b7d9d9c2cd7eca6983ca7a126b39c3d6141159b1))
* **range:** update range class styles [#192](https://github.com/AlaskaAirlines/auro-datepicker/issues/192) ([6fca8c5](https://github.com/AlaskaAirlines/auro-datepicker/commit/6fca8c516af4f149687f41fe67499a4f28e0fdf8))


### Performance Improvements

* **deps:** update dependencies ([68d0100](https://github.com/AlaskaAirlines/auro-datepicker/commit/68d0100a237d39de0efe230f363cd1629c1c9914))

## [2.2.4](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.2.3...v2.2.4) (2024-01-31)


### Performance Improvements

* alaskaairux ref updates ([9eb56db](https://github.com/AlaskaAirlines/auro-datepicker/commit/9eb56db8efdae1be0233c81d4322479c3e31f20c))

## [2.2.3](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.2.2...v2.2.3) (2024-01-27)


### Performance Improvements

* update index per SSR support ([a7a12c1](https://github.com/AlaskaAirlines/auro-datepicker/commit/a7a12c1917bdd9727d20c17a1de21199ce8a715a))

## [2.2.2](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.2.1...v2.2.2) (2024-01-23)


### Performance Improvements

* update dependencies ([b1d17f6](https://github.com/AlaskaAirlines/auro-datepicker/commit/b1d17f6aedc68250834cf9c8ec3b09d2d42a5c67))

## [2.2.1](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.2.0...v2.2.1) (2024-01-23)


### Bug Fixes

* **event:** always fire notify event when value changes [#188](https://github.com/AlaskaAirlines/auro-datepicker/issues/188) ([9108e46](https://github.com/AlaskaAirlines/auro-datepicker/commit/9108e46857e2189edb3c611fdc1e9fa8c2a351ba))

# [2.2.0](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.1.2...v2.2.0) (2024-01-18)


### Features

* add suport for SSR projects ([64e4aa7](https://github.com/AlaskaAirlines/auro-datepicker/commit/64e4aa7fbc64f18ab93a4fb064a2dba8abaf5276))

## [2.1.2](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.1.1...v2.1.2) (2024-01-09)


### Performance Improvements

* **deps:** update peer dependency versions [#184](https://github.com/AlaskaAirlines/auro-datepicker/issues/184) ([839440d](https://github.com/AlaskaAirlines/auro-datepicker/commit/839440d437b3973af6a66ac6fc14108ae824bb60))

## [2.1.1](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.1.0...v2.1.1) (2024-01-04)


### Bug Fixes

* **styles:** update style issue for range support ([db02456](https://github.com/AlaskaAirlines/auro-datepicker/commit/db0245601ac1dacbb41a33f8744354fa8a296253))

# [2.1.0](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.0.10...v2.1.0) (2024-01-04)


### Bug Fixes

* **centralDate:** correct centralDate attribute functionality ([2155f66](https://github.com/AlaskaAirlines/auro-datepicker/commit/2155f66dd10443eb47e48b27a5e7ec194c79cc09))
* **docs:** fix rendering of api docs [#162](https://github.com/AlaskaAirlines/auro-datepicker/issues/162) ([1bfba2f](https://github.com/AlaskaAirlines/auro-datepicker/commit/1bfba2fca0b205b4c3eb1e45b0b947d64b676355))
* **input:** update date visibility when date is typed [#170](https://github.com/AlaskaAirlines/auro-datepicker/issues/170) ([7f1e872](https://github.com/AlaskaAirlines/auro-datepicker/commit/7f1e872baafef410103776b88813f8e6fa1758bc))
* **layout:** update cell layout with slot content ([ea171e3](https://github.com/AlaskaAirlines/auro-datepicker/commit/ea171e38ea6f020126e46dc4525cdec5e52c0f1a))
* **PR:** update code based on design and code review ([f50add4](https://github.com/AlaskaAirlines/auro-datepicker/commit/f50add4b3b2e9efdf5f42ba56d7c14ae911141e9))
* **range:** fix in range styles [#151](https://github.com/AlaskaAirlines/auro-datepicker/issues/151) ([6993124](https://github.com/AlaskaAirlines/auro-datepicker/commit/69931242266022130c9e16e78796a28d4e758079))
* **styles:** exclude stylelint rule after deps update ([52b14d1](https://github.com/AlaskaAirlines/auro-datepicker/commit/52b14d119d10cb2fb10e64378d504b6bf94436d5))


### Features

* **mobile:** implement 320px mobile design [#151](https://github.com/AlaskaAirlines/auro-datepicker/issues/151) ([2a8601a](https://github.com/AlaskaAirlines/auro-datepicker/commit/2a8601a5365274dcb89edd04f08284afd07ebe05))
* **popover:** add popover slot functionality [#153](https://github.com/AlaskaAirlines/auro-datepicker/issues/153) ([d1a7e72](https://github.com/AlaskaAirlines/auro-datepicker/commit/d1a7e722efcd4494b0d73aba649277539f184ea2))
* **slot:** add slot and functionality for date cells [#128](https://github.com/AlaskaAirlines/auro-datepicker/issues/128) ([62dad65](https://github.com/AlaskaAirlines/auro-datepicker/commit/62dad6517a992bb4226885350d449ec9c2b5c44e))


### Performance Improvements

* **button:** refactor mobile button design [#154](https://github.com/AlaskaAirlines/auro-datepicker/issues/154) ([f7b65fa](https://github.com/AlaskaAirlines/auro-datepicker/commit/f7b65fa5b08c6be018f3d9cd157bb0be9025287f))
* **csspart:** add cssparts to datepicker [#156](https://github.com/AlaskaAirlines/auro-datepicker/issues/156) ([09a60a8](https://github.com/AlaskaAirlines/auro-datepicker/commit/09a60a815af03998b3ac2de3ac4f43f49d27c3e1))
* **deps:** install latest design tokens ([4a05ff3](https://github.com/AlaskaAirlines/auro-datepicker/commit/4a05ff37e23fac47030ef4ab683434c52a7c3637))
* **deps:** update dependencies ([036940a](https://github.com/AlaskaAirlines/auro-datepicker/commit/036940a485f0c425399ffa389983fd43f21326ac))
* **deps:** update dependencies ([891ad79](https://github.com/AlaskaAirlines/auro-datepicker/commit/891ad79cca6aecda8592e1ac09515e605a94b66e))
* **deps:** update deps and repo to support node 20 [#147](https://github.com/AlaskaAirlines/auro-datepicker/issues/147) ([a506464](https://github.com/AlaskaAirlines/auro-datepicker/commit/a506464042d29413075a5a42cc7ec2a1c834104a))
* **design:** update datepicker styles per design ([5cadc28](https://github.com/AlaskaAirlines/auro-datepicker/commit/5cadc283c7f8e4d5e11966e7a4fb11845256d7ed))
* **dropdown:** update to latest version of dropdown ([cc56aa7](https://github.com/AlaskaAirlines/auro-datepicker/commit/cc56aa7fd274a58266ecc89e14db7aac411e9ad2))
* **gradient:** update mobile gradient color [#150](https://github.com/AlaskaAirlines/auro-datepicker/issues/150) ([98d1811](https://github.com/AlaskaAirlines/auro-datepicker/commit/98d1811ba6a3142a02841b918ac4680bf4d67e00))
* **hover:** update hovered date handling ([8a2b2dd](https://github.com/AlaskaAirlines/auro-datepicker/commit/8a2b2dd87f7493d39b49802d1057254f361892cd))
* **jsdocs:** update jsdocs ([c9b20cb](https://github.com/AlaskaAirlines/auro-datepicker/commit/c9b20cbc7b38ce81f8615e30b29c9bbc1c20ba9b))
* **library:** implement auro-library and use utils ([7127d65](https://github.com/AlaskaAirlines/auro-datepicker/commit/7127d651c0eaa644120e29545a8db2e6e62f41a7))
* **mobile:** remove mobile header back button [#154](https://github.com/AlaskaAirlines/auro-datepicker/issues/154) ([dca0d32](https://github.com/AlaskaAirlines/auro-datepicker/commit/dca0d32c12b34ee422d17aea1507a5f306d8961e))
* **PR:** update code based on PR review ([c0b808f](https://github.com/AlaskaAirlines/auro-datepicker/commit/c0b808f91aceef48031eb74446b97798031ca1f5))
* **slot:** handle slot content with less code ([5d5d7be](https://github.com/AlaskaAirlines/auro-datepicker/commit/5d5d7bea9cf05146290b021b1c06a2273cdb5907))
* **styles:** add styles to day slot content [#128](https://github.com/AlaskaAirlines/auro-datepicker/issues/128) ([740e65a](https://github.com/AlaskaAirlines/auro-datepicker/commit/740e65a33d935e61b5c6dfad87ebb5f4eeaddfef))
* **theme:** update token prefixes [#159](https://github.com/AlaskaAirlines/auro-datepicker/issues/159) ([25e3092](https://github.com/AlaskaAirlines/auro-datepicker/commit/25e3092fff858dad9c689bd0d723976cc8d74926))

## [2.0.10](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.0.9...v2.0.10) (2023-11-30)


### Bug Fixes

* **minDate/maxDate:** datepicker calendar month nav bug ([839736f](https://github.com/AlaskaAirlines/auro-datepicker/commit/839736f9767539b0838714f0422190c14a29d95a))

## [2.0.9](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.0.8...v2.0.9) (2023-11-06)


### Bug Fixes

* **maxDate:** properly consider year when handling maxDate attribute [#157](https://github.com/AlaskaAirlines/auro-datepicker/issues/157) ([688bf4d](https://github.com/AlaskaAirlines/auro-datepicker/commit/688bf4dedb4b818d81896a47d7949652cd6fddcd))

## [2.0.8](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.0.7...v2.0.8) (2023-09-19)


### Bug Fixes

* **days:** align day numbers in mobile safari [#141](https://github.com/AlaskaAirlines/auro-datepicker/issues/141) ([e2a0458](https://github.com/AlaskaAirlines/auro-datepicker/commit/e2a0458705cbac5bb7fcc8e65fbbedb5914d3dd6))
* **hover:** prevent hover styles on mobile devices with tap ([c0855fa](https://github.com/AlaskaAirlines/auro-datepicker/commit/c0855fa7b352487a164efe7586ae62150c120115))


### Performance Improvements

* **icon:** use direct icon svg for calendar [#144](https://github.com/AlaskaAirlines/auro-datepicker/issues/144) ([40235f3](https://github.com/AlaskaAirlines/auro-datepicker/commit/40235f391d72ffcfb51b38229829c69027bc6885))

## [2.0.7](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.0.6...v2.0.7) (2023-08-29)


### Bug Fixes

* update npm package configs [#146](https://github.com/AlaskaAirlines/auro-datepicker/issues/146) ([850c863](https://github.com/AlaskaAirlines/auro-datepicker/commit/850c863c4134fa9a7b893840fd8a7d9d019901ec))

## [2.0.6](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.0.5...v2.0.6) (2023-08-15)


### Bug Fixes

* **calendar:** hide back button when value and mindate are current month [#136](https://github.com/AlaskaAirlines/auro-datepicker/issues/136) ([54de28f](https://github.com/AlaskaAirlines/auro-datepicker/commit/54de28f0d5a92a621abe0d7cefc63184ee13fb4f))


### Performance Improvements

* **deps:** update several deps to latest versions ([4db96db](https://github.com/AlaskaAirlines/auro-datepicker/commit/4db96dbf4fdcce947ee9d16e22cec9357d298c47))

## [2.0.5](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.0.4...v2.0.5) (2023-08-11)


### Bug Fixes

* **calendar:** prevent writing dateTo value to input if undefined [#139](https://github.com/AlaskaAirlines/auro-datepicker/issues/139) ([aa9cd9b](https://github.com/AlaskaAirlines/auro-datepicker/commit/aa9cd9b19e1ee3fbdfe55b19bd699534ba7734c9))

## [2.0.4](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.0.3...v2.0.4) (2023-06-28)


### Bug Fixes

* **cell:** change selected cell color [#125](https://github.com/AlaskaAirlines/auro-datepicker/issues/125) ([d5c67fa](https://github.com/AlaskaAirlines/auro-datepicker/commit/d5c67fafe870a8348691c4e6f072c4f940827f42))
* **examples:** fix references to api examples ([d000302](https://github.com/AlaskaAirlines/auro-datepicker/commit/d0003027fc17f522db002179ca308cabe1ab2632))


### Performance Improvements

* **ts:** add typescript support [#118](https://github.com/AlaskaAirlines/auro-datepicker/issues/118) ([d91be43](https://github.com/AlaskaAirlines/auro-datepicker/commit/d91be43187c39b046d95a32bd716c5c7b00c7760))

## [2.0.3](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.0.2...v2.0.3) (2023-06-23)


### Bug Fixes

* **define:** registerComponent no longer requires className as param [#133](https://github.com/AlaskaAirlines/auro-datepicker/issues/133) ([717d2d9](https://github.com/AlaskaAirlines/auro-datepicker/commit/717d2d974190d88e5ed8c6a5ea7055a102475512))
* **dropdown:** use latest version of dropdown ([f583ede](https://github.com/AlaskaAirlines/auro-datepicker/commit/f583edeafe953bf8c1518ed9aab85ddae5308d17))

## [2.0.2](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.0.1...v2.0.2) (2023-05-23)


### Bug Fixes

* **input:** add random string id attribute value to each input [#122](https://github.com/AlaskaAirlines/auro-datepicker/issues/122) ([abc09c9](https://github.com/AlaskaAirlines/auro-datepicker/commit/abc09c9b0160741bb2d5b18d34a238be573d8e4a))


### Performance Improvements

* **deps:** update to latest version of several dependencies ([ec2dcdd](https://github.com/AlaskaAirlines/auro-datepicker/commit/ec2dcdddd78b2b013a3bd60102002597a2d2689c))

## [2.0.1](https://github.com/AlaskaAirlines/auro-datepicker/compare/v2.0.0...v2.0.1) (2023-05-22)


### Performance Improvements

* **examples:** update example js code so it works on the docsite [#121](https://github.com/AlaskaAirlines/auro-datepicker/issues/121) ([86b5225](https://github.com/AlaskaAirlines/auro-datepicker/commit/86b52259237189b5e5c5b0d3d786dfc8da4db1bb))

# [2.0.0](https://github.com/AlaskaAirlines/auro-datepicker/compare/v1.2.9...v2.0.0) (2023-05-16)


### Bug Fixes

* add and implement functional arrows on calendar ([3101703](https://github.com/AlaskaAirlines/auro-datepicker/commit/3101703be23505bf19cfd24014d6e9dc37fc946c))
* **bundler:** define elements directly so bundler will work ([b622918](https://github.com/AlaskaAirlines/auro-datepicker/commit/b622918c6bddc04c7920eec4a1ba7adc6b956c33))
* **calendar:** add number of calendar functionality ([330328a](https://github.com/AlaskaAirlines/auro-datepicker/commit/330328aac715d7ddc0387e45e354a3c551063c38))
* **calendar:** correct number of calendars show for min/max dates ([1f81872](https://github.com/AlaskaAirlines/auro-datepicker/commit/1f81872394f974c01a5a4bbf2bd7820a5ad223ed))
* **calendar:** import packages needed by wc-range-datepicker ([8a6bbe7](https://github.com/AlaskaAirlines/auro-datepicker/commit/8a6bbe7537679950f23ced0c7e9bb5f0e3bd779b))
* **calendar:** render correct calendar month and year ([cee087c](https://github.com/AlaskaAirlines/auro-datepicker/commit/cee087c254f7205e6c524e5ef71c22f51f97f3bc))
* **cell:** cell element now works correctly ([2a61b1b](https://github.com/AlaskaAirlines/auro-datepicker/commit/2a61b1bf7c2eeb75331884ee3c575e28b359356b))
* **dateTo:** prevent dateTo getting set to null causing old date to show in input ([de862e4](https://github.com/AlaskaAirlines/auro-datepicker/commit/de862e4c54b60df6cba203f718bc707e7c19884e))
* **error:** setting or removing error attribute after firstUpdate works correcly. ([1c7ba1c](https://github.com/AlaskaAirlines/auro-datepicker/commit/1c7ba1c80194aad7ee01e805c1473c2522addb4f))
* **examples:** correct code that broke two examples ([920bef3](https://github.com/AlaskaAirlines/auro-datepicker/commit/920bef3e59f54446f426b9f9d1d94924056db8f4))
* **help:** doesnt show help text when value is undefined ([ce87503](https://github.com/AlaskaAirlines/auro-datepicker/commit/ce875033a76c9f8807330b1afdc04d135cb0e64a))
* **layout:** correct flex direction for mobile ([8f4850a](https://github.com/AlaskaAirlines/auro-datepicker/commit/8f4850a38cfa34da51a8406127b7da7198943d9a))
* **layout:** in mobile last calender no longer partially behind gradient ([e39a466](https://github.com/AlaskaAirlines/auro-datepicker/commit/e39a46637cbdc5d40496b801f25f5d1ba2088ebe))
* manage month visibility when dealing with min date ([4697703](https://github.com/AlaskaAirlines/auro-datepicker/commit/469770304688b70f20239beac16284c260b7f86a))
* **mobile:** back button is always blue now ([9305ded](https://github.com/AlaskaAirlines/auro-datepicker/commit/9305ded83003a9174e4f11109aa2f1a47a02f7df))
* **mobile:** fix date selected text on mobile ([8bf37ce](https://github.com/AlaskaAirlines/auro-datepicker/commit/8bf37cefb5625c7cbdc202de8110ab457791eda1))
* **numCalendars:** force render when numCalendars change ([84580a9](https://github.com/AlaskaAirlines/auro-datepicker/commit/84580a9699dbb25eb099c61a1d15d0ebf85e040b))
* **numCalenders:** fix min and max dates causes too many calendars to display ([22aeea9](https://github.com/AlaskaAirlines/auro-datepicker/commit/22aeea9a2d0592c90f2d29682c98a97fb97ea5cf))
* **render:** render correct calendars based on window width ([d148730](https://github.com/AlaskaAirlines/auro-datepicker/commit/d1487309dfb6a53c22ca01a2b50c5979fe21fc98))
* **support:** support default and range scenarios ([2431cbb](https://github.com/AlaskaAirlines/auro-datepicker/commit/2431cbbcd3617a4ad5312b2ad2c056c92cd9e601))
* **text:** revert date string text sequence ([116e651](https://github.com/AlaskaAirlines/auro-datepicker/commit/116e65186ec52914145b14b4af2bc7ba1602cb9f))
* **UI:** correct divider in dates on mobile bib header ([cfd6442](https://github.com/AlaskaAirlines/auro-datepicker/commit/cfd6442fad849e2ed35765f183636899576ccb66))
* **validate:** cleanup validate method and event ([f0a63ba](https://github.com/AlaskaAirlines/auro-datepicker/commit/f0a63bab53316a257b7b30b3ad0c9e6843633f0e))
* **validate:** not run validate on dropdown hide if bib was not visibile ([d1ac01f](https://github.com/AlaskaAirlines/auro-datepicker/commit/d1ac01fd3f2d27bc2ea2835366ce9f5e97cfbb52))
* **validation:** correctly triggers validation ([09038d9](https://github.com/AlaskaAirlines/auro-datepicker/commit/09038d9a66dd7ae0feb535c33926864b10eb283b))
* **validation:** use the correct new validation API for input ([eda8daa](https://github.com/AlaskaAirlines/auro-datepicker/commit/eda8daaa6fbe35f0d71a4b1a0757c2bc782d11a0))
* **value:** reset return value when date range is invalid ([3b3c04b](https://github.com/AlaskaAirlines/auro-datepicker/commit/3b3c04be6010e393a14f8a671c2615dc5e3f3e3f))
* **value:** setting value will move calendar month viewed ([eac8969](https://github.com/AlaskaAirlines/auro-datepicker/commit/eac8969bfc0ba38cbc4dd61f1bbf9059367f8043))


### Code Refactoring

* **calendar:** BREAKING CHANGE add auro-calendar code within repo [#105](https://github.com/AlaskaAirlines/auro-datepicker/issues/105) ([c0f91a6](https://github.com/AlaskaAirlines/auro-datepicker/commit/c0f91a649c27c76d1111adcd13dc58f36f368b67))


### Features

* **API:** correct value setting behavior ([512c936](https://github.com/AlaskaAirlines/auro-datepicker/commit/512c936c67f02e44d8f753a7c0a823e91383ec31))
* **api:** expose monthNames attribute for localization ([a6e3d24](https://github.com/AlaskaAirlines/auro-datepicker/commit/a6e3d249ec6700c4c656dc720871e8ac147b7a93))
* **api:** refactor functional value setting code, validation and some styles ([f4eeb2f](https://github.com/AlaskaAirlines/auro-datepicker/commit/f4eeb2faec710edb994dd1f0513806de7f1ae090))
* **event:** fire event when value or valueend changes ([31b97cf](https://github.com/AlaskaAirlines/auro-datepicker/commit/31b97cf274ae8bea3a8d634ae7f49c8f9ae06ebc))
* **helpText:** support custom message for rangeUnderflow and Overflow ([022116f](https://github.com/AlaskaAirlines/auro-datepicker/commit/022116f5531251e8fd1a93239f39507fc3011fac))
* **mobile:** add mobile layout and styles [#107](https://github.com/AlaskaAirlines/auro-datepicker/issues/107) ([c0ccd32](https://github.com/AlaskaAirlines/auro-datepicker/commit/c0ccd329f80af9304200b16457828903130d0e7f))
* **styles:** make new calendar match figma ([681b746](https://github.com/AlaskaAirlines/auro-datepicker/commit/681b746a6511dd09b0a671d14749e3246cfb0792))
* **validate:** fire event when validation occurs ([1f3e6fa](https://github.com/AlaskaAirlines/auro-datepicker/commit/1f3e6faa5c1d7c5418331a90801df4439e35fc69))
* **validate:** make validate method private ([99db634](https://github.com/AlaskaAirlines/auro-datepicker/commit/99db634d810388bdb39e75e77c2532306550aa8c))


### Performance Improvements

* **API:** cleanup JS code ([874518d](https://github.com/AlaskaAirlines/auro-datepicker/commit/874518dd4e4e3509cd56ed0ce1f473aa8d231e1c))
* **cdn:** change all cdn references to jsdeliver ([cf2f6d5](https://github.com/AlaskaAirlines/auro-datepicker/commit/cf2f6d5e44e3f1a3d8aaa2e68798b17d7dcaba35))
* **deps:** move auro deps to direct deps ([f62ccb6](https://github.com/AlaskaAirlines/auro-datepicker/commit/f62ccb60990b2e0e8066c221b93f626b378ff1e9))
* **deps:** update dependency versions ([736db5c](https://github.com/AlaskaAirlines/auro-datepicker/commit/736db5c59c94de3fb50fa8c42ac54140e06c9ebe))
* **deps:** update to latest auro dependency versions ([928eedb](https://github.com/AlaskaAirlines/auro-datepicker/commit/928eedb3b272c5fcff39ca8a52e0e347ce17f2c6))
* **deps:** update to latest auro-input release with validity change ([d9dcf5e](https://github.com/AlaskaAirlines/auro-datepicker/commit/d9dcf5eab0c68075ce74182e3ea97667cb2032de))
* **deps:** update to latest dependencies ([c0b9f51](https://github.com/AlaskaAirlines/auro-datepicker/commit/c0b9f51bac78f20969f4a82fcdfcd968b0598e9d))
* **deps:** update to latest dependency releases ([f5f5bd1](https://github.com/AlaskaAirlines/auro-datepicker/commit/f5f5bd102c57f6346751b5d38ec20331c626a2e4))
* **deps:** update to lit 2 ([1c65c1a](https://github.com/AlaskaAirlines/auro-datepicker/commit/1c65c1ae0d18e1739a02321e7f2d631ba099dbbe))
* **deps:** use latest auro-input release with public validate method ([7eed8e2](https://github.com/AlaskaAirlines/auro-datepicker/commit/7eed8e257009009947c7074d8d4c5bf20c930b16))
* **nav:** improve navigation through calendar months with min and max dates defined ([2861fff](https://github.com/AlaskaAirlines/auro-datepicker/commit/2861fff3688bf6ef345dc8b533cb240156024dea))
* **styles:** additional style cleanup ([2672f2e](https://github.com/AlaskaAirlines/auro-datepicker/commit/2672f2e5d628804f1142a9ccad4acb7a5545da2a))
* **styles:** use variable for single fixed pixel dimension per review ([ed002b4](https://github.com/AlaskaAirlines/auro-datepicker/commit/ed002b4df5e8f14d7d40af1e24e7d82d9b14a066))
* **syntax:** clean up linting errors ([481390c](https://github.com/AlaskaAirlines/auro-datepicker/commit/481390c5008baec06e7ed9026efbee6721bd333c))
* **validate:** move validate call to focusout ([ae11cfc](https://github.com/AlaskaAirlines/auro-datepicker/commit/ae11cfc333dd773953a652fe9907f251e15f8a53))
* **validation:** rework entire validation process ([a7a0617](https://github.com/AlaskaAirlines/auro-datepicker/commit/a7a06172438ff58d3457261bbe24b4a0ccad135c))


### BREAKING CHANGES

* **calendar:** incorporate new wc-date-range

This commit will blow away the use of Lion calendar and use a new calendar called wc-date-range, allowing for a date range to be selected within an auro-calendar.

Changes to be committed:
modified:   apiExamples/maxDate.html
modified:   apiExamples/maxDate.js
modified:   apiExamples/minDate.html
modified:   apiExamples/minDate.js
modified:   apiExamples/value.js
modified:   demo/api.html
modified:   demo/api.js
modified:   demo/api.md
modified:   demo/index.html

feat(calendar): BREAKING CHANGE incorporate new wc-date-range

This commit will blow away the use of Lion calendar and use a new calendar called wc-date-range, allowing for a date range to be selected within an auro-calendar.

Changes to be committed:
modified:   apiExamples/maxDate.html
modified:   apiExamples/maxDate.js
modified:   apiExamples/minDate.html
modified:   apiExamples/minDate.js
modified:   apiExamples/value.js
modified:   demo/api.html
modified:   demo/api.js
modified:   demo/api.md
modified:   demo/index.html

## [1.2.9](https://github.com/AlaskaAirlines/auro-datepicker/compare/v1.2.8...v1.2.9) (2023-02-01)


### Bug Fixes

* improve handling of datepicker when in invalid state [#99](https://github.com/AlaskaAirlines/auro-datepicker/issues/99) ([2f4a9db](https://github.com/AlaskaAirlines/auro-datepicker/commit/2f4a9db575b36cb90dec18c327693c78d520d6af))


### Performance Improvements

* **value:** improve value change handling ([c892fa5](https://github.com/AlaskaAirlines/auro-datepicker/commit/c892fa5229e72c986f0432584d834d8e77edd6b9))

## [1.2.8](https://github.com/AlaskaAirlines/auro-datepicker/compare/v1.2.7...v1.2.8) (2023-01-27)


### Bug Fixes

* **input:** pass required attribute to input [#97](https://github.com/AlaskaAirlines/auro-datepicker/issues/97) ([a7db9d2](https://github.com/AlaskaAirlines/auro-datepicker/commit/a7db9d2c0f3c0fabacecd62e13e8c2928081f5fb))
* **input:** pass required attribute to input element [#97](https://github.com/AlaskaAirlines/auro-datepicker/issues/97) ([1b8cbfb](https://github.com/AlaskaAirlines/auro-datepicker/commit/1b8cbfb93a30092ff191a3c05ed151310fbb9026))

## [1.2.7](https://github.com/AlaskaAirlines/auro-datepicker/compare/v1.2.6...v1.2.7) (2023-01-04)


### Bug Fixes

* **error:** fix error attribute handling [#92](https://github.com/AlaskaAirlines/auro-datepicker/issues/92) ([60772d3](https://github.com/AlaskaAirlines/auro-datepicker/commit/60772d36eda5f6e357d84d5668d090d60db2439b))
* **focus:** remove problematic focus tracking [#93](https://github.com/AlaskaAirlines/auro-datepicker/issues/93) ([a7b1c5a](https://github.com/AlaskaAirlines/auro-datepicker/commit/a7b1c5af70aaec07e8d00f0b60e8a80fc5864c96))
* **required:** add required check ([32637f2](https://github.com/AlaskaAirlines/auro-datepicker/commit/32637f23a39ec294b7b47544f1ec3e4898550d3b))
* **tabbing:** fix closing when tabbing away from datepicker ([3133d1f](https://github.com/AlaskaAirlines/auro-datepicker/commit/3133d1f21a8969876caa0a48d7ca497a73434f7f))
* **validity:** fix required validation check ([fdfae5b](https://github.com/AlaskaAirlines/auro-datepicker/commit/fdfae5b016e4f658725f8be8a19a49cb67f2ef94))

## [1.2.6](https://github.com/AlaskaAirlines/auro-datepicker/compare/v1.2.5...v1.2.6) (2022-11-17)


### Bug Fixes

* **height:** make calendar height consistent for every month [#88](https://github.com/AlaskaAirlines/auro-datepicker/issues/88) ([421b563](https://github.com/AlaskaAirlines/auro-datepicker/commit/421b563cd6e534adaf59c2d29816199509927b6e))

## [1.2.5](https://github.com/AlaskaAirlines/auro-datepicker/compare/v1.2.4...v1.2.5) (2022-10-20)


### Bug Fixes

* **style:** fixed height of the bib [#62](https://github.com/AlaskaAirlines/auro-datepicker/issues/62) ([54a8dca](https://github.com/AlaskaAirlines/auro-datepicker/commit/54a8dcacd2ecf2f0dc088b5f5a36a0338e77c468))

## [1.2.4](https://github.com/AlaskaAirlines/auro-datepicker/compare/v1.2.3...v1.2.4) (2022-10-13)


### Bug Fixes

* **dependency:** update auro-input dependency version [#70](https://github.com/AlaskaAirlines/auro-datepicker/issues/70) ([77e21c9](https://github.com/AlaskaAirlines/auro-datepicker/commit/77e21c9597648000b885f0c0a7097b0d6faf5924))

## [1.2.3](https://github.com/AlaskaAirlines/auro-datepicker/compare/v1.2.2...v1.2.3) (2022-10-11)


### Bug Fixes

* **input:** update to latest input package to fix focus type event bug [#68](https://github.com/AlaskaAirlines/auro-datepicker/issues/68) ([8788ad5](https://github.com/AlaskaAirlines/auro-datepicker/commit/8788ad55a2413b60d3dad57a0f2bb377f5f976e5))

## [1.2.2](https://github.com/AlaskaAirlines/auro-datepicker/compare/v1.2.1...v1.2.2) (2022-09-26)


### Bug Fixes

* **dropdown:** use latest version of dropdown ([abb4687](https://github.com/AlaskaAirlines/auro-datepicker/commit/abb46875e4cc946034dbc63350a564db6ead3d9c))

## [1.2.1](https://github.com/AlaskaAirlines/auro-datepicker/compare/v1.2.0...v1.2.1) (2022-09-26)


### Bug Fixes

* **hide:** improved hide logic [#63](https://github.com/AlaskaAirlines/auro-datepicker/issues/63) 65 ([4535901](https://github.com/AlaskaAirlines/auro-datepicker/commit/4535901931e5446fe84ce8ffb81497a352543a85))

# [1.2.0](https://github.com/AlaskaAirlines/auro-datepicker/compare/v1.1.5...v1.2.0) (2022-09-20)


### Bug Fixes

* **error:** fix error border UI [#56](https://github.com/AlaskaAirlines/auro-datepicker/issues/56) ([129156e](https://github.com/AlaskaAirlines/auro-datepicker/commit/129156e0170c81571967e7794ea5fc0c93f5294f))
* **value:** improve value setting workflow [#58](https://github.com/AlaskaAirlines/auro-datepicker/issues/58) ([09c1c69](https://github.com/AlaskaAirlines/auro-datepicker/commit/09c1c69457a86f87dacc25ab95eb052ed5d3b033))


### Features

* **error:** supports error attribute shorthand for validity ([2d09d9b](https://github.com/AlaskaAirlines/auro-datepicker/commit/2d09d9b0b5cd4f0f5219dbf36bdc5a86fd2384b1))

## [1.1.5](https://github.com/AlaskaAirlines/auro-datepicker/compare/v1.1.4...v1.1.5) (2022-09-13)


### Reverts

* Revert "chore(release): 1.1.4 [skip ci]" ([1a9dacf](https://github.com/AlaskaAirlines/auro-datepicker/commit/1a9dacfa74e4eb6fc022e7d8f1bbecabc40ff5c1))

## [1.1.3](https://github.com/AlaskaAirlines/auro-datepicker/compare/v1.1.2...v1.1.3) (2022-08-26)


### Bug Fixes

* **input:** use new activeLabel attribute [#31](https://github.com/AlaskaAirlines/auro-datepicker/issues/31) [#47](https://github.com/AlaskaAirlines/auro-datepicker/issues/47) ([d3dd7a5](https://github.com/AlaskaAirlines/auro-datepicker/commit/d3dd7a5df60a0c9ec0819bb08a3405a2d39e03ed))

## [1.1.2](https://github.com/AlaskaAirlines/auro-datepicker/compare/v1.1.1...v1.1.2) (2022-08-19)


### Bug Fixes

* **format:** consistent date format fix [#44](https://github.com/AlaskaAirlines/auro-datepicker/issues/44) ([50f8dd4](https://github.com/AlaskaAirlines/auro-datepicker/commit/50f8dd42cd7e85bc762dfc136ad3866f87b11e89))

## [1.1.1](https://github.com/AlaskaAirlines/auro-datepicker/compare/v1.1.0...v1.1.1) (2022-08-18)


### Bug Fixes

* **template:** adjust layout to allow dynamic width of trigger [#38](https://github.com/AlaskaAirlines/auro-datepicker/issues/38) ([f8e9c44](https://github.com/AlaskaAirlines/auro-datepicker/commit/f8e9c4426aa4034683bd5c82925d6d8fad1ce905))

# [1.1.0](https://github.com/AlaskaAirlines/auro-datepicker/compare/v1.0.2...v1.1.0) (2022-07-21)


### Bug Fixes

* **filled:** add filled style when clicking to set date [#28](https://github.com/AlaskaAirlines/auro-datepicker/issues/28) ([fa5b506](https://github.com/AlaskaAirlines/auro-datepicker/commit/fa5b5062fe556b0e16cfb5ba2f6ac317aa54f5b2))


### Features

* **testing:** add automated testing [#18](https://github.com/AlaskaAirlines/auro-datepicker/issues/18) ([1778f77](https://github.com/AlaskaAirlines/auro-datepicker/commit/1778f7738d1ff5e27b18dc9df9bd6718821a720f))

## [1.0.2](https://github.com/AlaskaAirlines/auro-datepicker/compare/v1.0.1...v1.0.2) (2022-07-18)


### Bug Fixes

* **input:** incomplete dates still apply --filled class [#21](https://github.com/AlaskaAirlines/auro-datepicker/issues/21) ([af61674](https://github.com/AlaskaAirlines/auro-datepicker/commit/af6167406f0f9d7f28cd920bc6a53f36355b4f2c))

## [1.0.1](https://github.com/AlaskaAirlines/auro-datepicker/compare/v1.0.0...v1.0.1) (2022-07-14)


### Bug Fixes

* **config:** add missing config files ([125f50a](https://github.com/AlaskaAirlines/auro-datepicker/commit/125f50a3f208a0c8d04fe45c474544f7c206af0e))

# 1.0.0 (2022-07-14)


### Bug Fixes

* **a11y:** improve keyboard navigation experience ([587c281](https://github.com/AlaskaAirlines/auro-datepicker/commit/587c281803b5bb21aa06c6fe92245d9796069321))
* **css:** fix naming of css selector ([e59e092](https://github.com/AlaskaAirlines/auro-datepicker/commit/e59e09251e6c87fccab5f1702bebb888a343e3c3))
* **css:** repair syntax naming of selectors [#3](https://github.com/AlaskaAirlines/auro-datepicker/issues/3) ([8b7f261](https://github.com/AlaskaAirlines/auro-datepicker/commit/8b7f2610af490ca55ba44d93ce3c04e57c7243da))
* **css:** update wcss import to use [@aurodesignsystem](https://github.com/aurodesignsystem) ([c9591d2](https://github.com/AlaskaAirlines/auro-datepicker/commit/c9591d28f6b481696a6febd272ee52f9171fbe11))
* **deps:** remove surge from dependcies list ([b804f80](https://github.com/AlaskaAirlines/auro-datepicker/commit/b804f807848fc6dccb6a53c279d04b08aa538cab))
* **editing:** correct behavior when typing a new date when previously click selected ([08cac2a](https://github.com/AlaskaAirlines/auro-datepicker/commit/08cac2a6660a3df72b190ca21b5a8b1c7f6a952e))
* **husky:** correct husky config setting ([8cb74bf](https://github.com/AlaskaAirlines/auro-datepicker/commit/8cb74bffe753a52d5fd267934aaec8187377ce6c))
* **required:** check required validity on blur ([4e707ea](https://github.com/AlaskaAirlines/auro-datepicker/commit/4e707ead3c80348690c4d9d050c68516bebc4bea))
* **toggle:** dont close bib when clicking on dates ([0c2fbfa](https://github.com/AlaskaAirlines/auro-datepicker/commit/0c2fbfa4c1e60a3c2a6915f0d8008a15f5e30dd2))
* **trigger:** update styles so trigger displays correctly ([bcc5a28](https://github.com/AlaskaAirlines/auro-datepicker/commit/bcc5a280872b2399bc31085b0b613f186bafad91))
* **value:** correct behavior when typing a value ([5d8855f](https://github.com/AlaskaAirlines/auro-datepicker/commit/5d8855fa94a3fd65656d175096d2184ebdeec406))


### Features

* **API:** add missing code to fulfill all demo example needs ([a1e2465](https://github.com/AlaskaAirlines/auro-datepicker/commit/a1e24656b76c429f893800bd496b04f952d08864))
* **API:** initial port of combobox ([c9324e6](https://github.com/AlaskaAirlines/auro-datepicker/commit/c9324e63f3193437ed1b877afe4fa090f4d72f45))
* **calendar:** add local npm linking of auro-calendar ([8edf390](https://github.com/AlaskaAirlines/auro-datepicker/commit/8edf39079a47b8c90a9a260a6c4546f7be77e009))
* **calendar:** better integration of auro-calendar ([41e09b7](https://github.com/AlaskaAirlines/auro-datepicker/commit/41e09b7cfa4639dc7cdbd0740501fd1755b5f0cf))
* **calendar:** implement basic auro-calendar ([8843c5a](https://github.com/AlaskaAirlines/auro-datepicker/commit/8843c5a545adce803f7ae84bebffa8d84c7f9088))
* **docs:** add descroption and use cases [#10](https://github.com/AlaskaAirlines/auro-datepicker/issues/10) ([f04535b](https://github.com/AlaskaAirlines/auro-datepicker/commit/f04535bbe121fdfebb89503e1fee0b14d995bee1))
* **errors:** handle date range error states [#5](https://github.com/AlaskaAirlines/auro-datepicker/issues/5) ([09620d2](https://github.com/AlaskaAirlines/auro-datepicker/commit/09620d2b58bc6d42cd36f897c31d8ef9b351f673))
* **focus:** refocus input after calendar selection [#3](https://github.com/AlaskaAirlines/auro-datepicker/issues/3) ([5518017](https://github.com/AlaskaAirlines/auro-datepicker/commit/551801738ef909a8cd105a8b944e8d4faf78d990))
* **input:** update calendar wen typing a valid date ([ae34c5f](https://github.com/AlaskaAirlines/auro-datepicker/commit/ae34c5fabe244badc8a85811a22647079494cc8f))
* **novalidate:** add novalidate attribute to template ([abc039b](https://github.com/AlaskaAirlines/auro-datepicker/commit/abc039b69d9a7451e21d270c9abc9edcaae37c3d))
* **value:** set input value on calendar selection ([c559aea](https://github.com/AlaskaAirlines/auro-datepicker/commit/c559aea21030d87341ea5e0a65a0d7f8f585889c))
