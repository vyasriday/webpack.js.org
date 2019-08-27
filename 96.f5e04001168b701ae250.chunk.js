(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{384:function(n,s,a){"use strict";a.r(s),s.default='<p><a href="https://npmjs.com/package/eslint-loader"><img src="https://img.shields.io/npm/v/eslint-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org/"><img src="https://img.shields.io/node/v/eslint-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/eslint-loader"><img src="https://david-dm.org/webpack-contrib/eslint-loader.svg" alt="deps"></a>\n<a href="https://dev.azure.com/webpack-contrib/eslint-loader/_build/latest?definitionId=4&#x26;branchName=master"><img src="https://dev.azure.com/webpack-contrib/eslint-loader/_apis/build/status/webpack-contrib.eslint-loader?branchName=master" alt="tests"></a>\n<a href="https://codecov.io/gh/webpack-contrib/eslint-loader"><img src="https://codecov.io/gh/webpack-contrib/eslint-loader/branch/master/graph/badge.svg" alt="coverage"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://badges.gitter.im/webpack/webpack.svg" alt="chat"></a>\n<a href="https://packagephobia.now.sh/result?p=eslint-loader"><img src="https://packagephobia.now.sh/badge?p=eslint-loader" alt="size"></a></p>\n<blockquote>\n<p>ESlint loader for webpack</p>\n</blockquote>\n<h2 id="install">Install<a href="#install" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> eslint-loader --save-dev</code></pre>\n<p><strong>NOTE</strong>: You also need to install <code>eslint</code> from npm, if you haven\'t already:</p>\n<pre><code class="hljs language-bash"><span class="token function">npm</span> <span class="token function">install</span> eslint --save-dev</code></pre>\n<h2 id="usage">Usage<a href="#usage" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>In your webpack configuration</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          <span class="token comment">// eslint options (if necessary)</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>When using with transpiling loaders (like <code>babel-loader</code>), make sure they are in correct order\n(bottom to top). Otherwise files will be checked after being processed by <code>babel-loader</code></p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        use<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'babel-loader\'</span><span class="token punctuation">,</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>To be safe, you can use <code>enforce: \'pre\'</code> section to check source files, not modified\nby other loaders (like <code>babel-loader</code>)</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        enforce<span class="token punctuation">:</span> <span class="token string">\'pre\'</span><span class="token punctuation">,</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'babel-loader\'</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h3 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>You can pass <a href="http://eslint.org/docs/developer-guide/nodejs-api#cliengine">eslint options</a>\nusing standard webpack <a href="/configuration/module/#useentry">loader options</a>.</p>\n<p>Note that the config option you provide will be passed to the <code>CLIEngine</code>.\nThis is a different set of options than what you\'d specify in <code>package.json</code> or <code>.eslintrc</code>.\nSee the <a href="http://eslint.org/docs/developer-guide/nodejs-api#cliengine">eslint docs</a> for more detail.</p>\n<h4 id="fix-default-false"><code>fix</code> (default: false)<a href="#fix-default-false" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>This option will enable\n<a href="http://eslint.org/docs/user-guide/command-line-interface#fix">ESLint autofix feature</a>.</p>\n<p><strong>Be careful: this option will change source files.</strong></p>\n<h4 id="cache-default-false"><code>cache</code> (default: false)<a href="#cache-default-false" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>This option will enable caching of the linting results into a file.\nThis is particularly useful in reducing linting time when doing a full build.</p>\n<p>This can either be a <code>boolean</code> value or the cache directory path(ex: <code>\'./.eslint-loader-cache\'</code>).</p>\n<p>If <code>cache: true</code> is used, the cache file is written to the <code>./node_modules/.cache</code> directory.\nThis is the recommended usage.</p>\n<h4 id="formatter-default-stylish"><code>formatter</code> (default: \'stylish\')<a href="#formatter-default-stylish" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Loader accepts a function that will have one argument: an array of eslint messages (object).\nThe function must return the output as a string.\nYou can use official <a href="https://eslint.org/docs/user-guide/formatters/">eslint formatters</a>.</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'...\'</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          <span class="token comment">// several examples !</span>\n\n          <span class="token comment">// default value</span>\n          formatter<span class="token punctuation">:</span> <span class="token string">\'stylish\'</span><span class="token punctuation">,</span>\n\n          <span class="token comment">// community formatter</span>\n          formatter<span class="token punctuation">:</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'eslint-friendly-formatter\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n          <span class="token comment">// custom formatter</span>\n          formatter<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment">// `results` format is available here</span>\n            <span class="token comment">// http://eslint.org/docs/developer-guide/nodejs-api.html#executeonfiles()</span>\n\n            <span class="token comment">// you should return a string</span>\n            <span class="token comment">// DO NOT USE console.*() directly !</span>\n            <span class="token keyword">return</span> <span class="token string">\'OUTPUT\'</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h4 id="eslintpath-default-eslint"><code>eslintPath</code> (default: \'eslint\')<a href="#eslintpath-default-eslint" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p>Path to <code>eslint</code> instance that will be used for linting.\nIf the <code>eslintPath</code> is a folder like a official eslint, or specify a <code>formatter</code> option.\nnow you dont have to install <code>eslint</code>.</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'...\'</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          eslintPath<span class="token punctuation">:</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'reusable-eslint\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h4 id="errors-and-warning">Errors and Warning<a href="#errors-and-warning" aria-hidden="true"><span class="icon icon-link"></span></a></h4>\n<p><strong>By default the loader will auto adjust error reporting depending\non eslint errors/warnings counts.</strong>\nYou can still force this behavior by using <code>emitError</code> <strong>or</strong> <code>emitWarning</code> options:</p>\n<h5 id="emiterror-default-false"><code>emitError</code> (default: <code>false</code>)<a href="#emiterror-default-false" aria-hidden="true"><span class="icon icon-link"></span></a></h5>\n<p>Loader will always return errors if this option is set to <code>true</code>.</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'...\'</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          emitError<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h5 id="emitwarning-default-false"><code>emitWarning</code> (default: <code>false</code>)<a href="#emitwarning-default-false" aria-hidden="true"><span class="icon icon-link"></span></a></h5>\n<p>Loader will always return warnings if option is set to <code>true</code>. If you\'re using hot module replacement,\nyou may wish to enable this in development, or else updates will be skipped when there\'s an eslint error.</p>\n<h5 id="quiet-default-false"><code>quiet</code> (default: <code>false</code>)<a href="#quiet-default-false" aria-hidden="true"><span class="icon icon-link"></span></a></h5>\n<p>Loader will process and report errors only and ignore warnings if this option is set to true</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'...\'</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          quiet<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h5 id="failonwarning-default-false"><code>failOnWarning</code> (default: <code>false</code>)<a href="#failonwarning-default-false" aria-hidden="true"><span class="icon icon-link"></span></a></h5>\n<p>Loader will cause the module build to fail if there are any eslint warnings.</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'...\'</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          failOnWarning<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h5 id="failonerror-default-false"><code>failOnError</code> (default: <code>false</code>)<a href="#failonerror-default-false" aria-hidden="true"><span class="icon icon-link"></span></a></h5>\n<p>Loader will cause the module build to fail if there are any eslint errors.</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'...\'</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          failOnError<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h5 id="outputreport-default-null"><code>outputReport</code> (default: <code>null</code>)<a href="#outputreport-default-null" aria-hidden="true"><span class="icon icon-link"></span></a></h5>\n<p>Write the output of the errors to a file, for example a checkstyle xml file for use for reporting on Jenkins CI</p>\n<p>The <code>filePath</code> is an absolute path or relative to the webpack config: output.path\nYou can pass in a different formatter for the output file,\nif none is passed in the default/configured formatter will be used</p>\n<pre><code class="hljs language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  entry<span class="token punctuation">:</span> <span class="token string">\'...\'</span><span class="token punctuation">,</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.js$/</span><span class="token punctuation">,</span>\n        exclude<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'eslint-loader\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          outputReport<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n            filePath<span class="token punctuation">:</span> <span class="token string">\'checkstyle.xml\'</span><span class="token punctuation">,</span>\n            formatter<span class="token punctuation">:</span> <span class="token string">\'checkstyle\'</span><span class="token punctuation">,</span>\n          <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="gotchas">Gotchas<a href="#gotchas" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="noemitonerrorsplugin">NoEmitOnErrorsPlugin<a href="#noemitonerrorsplugin" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p><code>NoEmitOnErrorsPlugin</code> is now automatically enabled in webpack 4, when mode is either unset,\nor set to production. So even ESLint warnings will fail the build.\nNo matter what error settings are used for <code>eslint-loader</code>, except if <code>emitWarning</code> enabled.</p>\n<h3 id="defining-configfile-or-using-eslint--c-patheslintrc">Defining <code>configFile</code> or using <code>eslint -c path/.eslintrc</code><a href="#defining-configfile-or-using-eslint--c-patheslintrc" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Bear in mind that when you define <code>configFile</code>, <code>eslint</code> doesn\'t automatically look for\n<code>.eslintrc</code> files in the directory of the file to be linted.\nMore information is available in official eslint documentation in section\n<a href="http://eslint.org/docs/user-guide/configuring#using-configuration-files"><em>Using Configuration Files</em></a>.\nSee <a href="https://github.com/webpack-contrib/eslint-loader/issues/129">#129</a>.</p>\n<h2 id="changelog">Changelog<a href="#changelog" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/webpack-contrib/eslint-loader/blob/master/CHANGELOG.md">Changelog</a></p>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/webpack-contrib/eslint-loader/blob/master/LICENSE">MIT</a></p>\n'}}]);