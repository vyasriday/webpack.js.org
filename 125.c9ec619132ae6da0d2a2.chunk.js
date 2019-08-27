(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{413:function(n,s,a){"use strict";a.r(s),s.default='<p><a href="https://npmjs.com/package/transform-loader"><img src="https://img.shields.io/npm/v/transform-loader.svg" alt="npm"></a>\n<a href="https://nodejs.org/"><img src="https://img.shields.io/node/v/transform-loader.svg" alt="node"></a>\n<a href="https://david-dm.org/webpack-contrib/transform-loader"><img src="https://david-dm.org/webpack-contrib/transform-loader.svg" alt="deps"></a>\n<a href="https://dev.azure.com/webpack-contrib/transform-loader/_build/latest?definitionId=19&#x26;branchName=master"><img src="https://dev.azure.com/webpack-contrib/transform-loader/_apis/build/status/webpack-contrib.transform-loader?branchName=master" alt="tests"></a>\n<a href="https://codecov.io/gh/webpack-contrib/transform-loader"><img src="https://codecov.io/gh/webpack-contrib/transform-loader/branch/master/graph/badge.svg" alt="coverage"></a>\n<a href="https://gitter.im/webpack/webpack"><img src="https://badges.gitter.im/webpack/webpack.svg" alt="chat"></a>\n<a href="https://packagephobia.now.sh/result?p=transform-loader"><img src="https://packagephobia.now.sh/badge?p=transform-loader" alt="size"></a></p>\n<p>A browserify transformation loader for webpack.</p>\n<p>This loader allows use of <a href="https://github.com/substack/node-browserify/wiki/list-of-transforms">browserify transforms</a> via a webpack loader.</p>\n<h2 id="getting-started">Getting Started<a href="#getting-started" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>To begin, you\'ll need to install <code>transform-loader</code>:</p>\n<pre><code class="hljs language-console">$ npm install transform-loader --save-dev\n</code></pre>\n<p><em>Note: We\'re using the <a href="https://github.com/jnordberg/coffeeify">coffeeify</a>\ntranform for these examples.</em></p>\n<p>Then invoke the loader through a require like so:</p>\n<pre><code class="hljs language-js"><span class="token keyword">const</span> thing <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'!transform-loader?coffeeify!widget/thing\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<p>Or add the loader to your <code>webpack</code> config. For example:</p>\n<pre><code class="hljs language-js"><span class="token comment">// entry.js</span>\n<span class="token keyword">import</span> thing <span class="token keyword">from</span> <span class="token string">\'widget/thing\'</span><span class="token punctuation">;</span></code></pre>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.coffee?$/</span><span class="token punctuation">,</span>\n        loader<span class="token punctuation">:</span> <span class="token template-string"><span class="token string">`transform-loader?coffeeify`</span></span><span class="token punctuation">,</span>\n        <span class="token comment">// options: {...}</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<p>And run <code>webpack</code> via your preferred method.</p>\n<h2 id="querystring-options">QueryString Options<a href="#querystring-options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>When using the loader via a <code>require</code> query string you may specify one of two\ntypes; a loader name, or a function index.</p>\n<h3 id="loder-name"><loder-name><a href="#loder-name" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>String</code></p>\n<p>The name of the <code>browserify</code> transform you wish to use.</p>\n<p><em>Note: You must install the correct transform manually. Webpack nor this loader\nwill do that for you.</em></p>\n<h3 id="loder-index"><loder-index><a href="#loder-index" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Number</code></p>\n<p>The index of a function contained within <code>options.transforms</code> which to use to\ntransform the target file(s).</p>\n<h2 id="options">Options<a href="#options" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<h3 id="transforms"><code>transforms</code><a href="#transforms" aria-hidden="true"><span class="icon icon-link"></span></a></h3>\n<p>Type: <code>Array[Function]</code>\nDefault: <code>undefined</code></p>\n<p>An array of <code>functions</code> that can be used to transform a given file matching the\nconfigured loader <code>test</code>. For example:</p>\n<pre><code class="hljs language-js"><span class="token comment">// entry.js</span>\n<span class="token keyword">const</span> thing <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'widget/thing\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n<pre><code class="hljs language-js"><span class="token comment">// webpack.config.js</span>\n<span class="token keyword">const</span> through <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'through2\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n  module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n      <span class="token punctuation">{</span>\n        test<span class="token punctuation">:</span> <span class="token regex">/\\.ext$/</span><span class="token punctuation">,</span>\n        <span class="token comment">// NOTE: we\'ve specified an index of 0, which will use the `transform`</span>\n        <span class="token comment">//       function in `transforms` below.</span>\n        loader<span class="token punctuation">:</span> <span class="token string">\'transform-loader?0\'</span><span class="token punctuation">,</span>\n        options<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n          transforms<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token keyword">function</span> <span class="token function">transform</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n              <span class="token keyword">return</span> <span class="token function">through</span><span class="token punctuation">(</span>\n                <span class="token punctuation">(</span>buffer<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n                  <span class="token keyword">const</span> result <span class="token operator">=</span> buffer\n                    <span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span>\n                    <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>chunk<span class="token punctuation">)</span> <span class="token operator">=></span>\n                      String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token number">127</span> <span class="token operator">-</span> chunk<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n                    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n                  <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">queue</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">queue</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span>\n              <span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n          <span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n<h2 id="contributing">Contributing<a href="#contributing" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p>Please take a moment to read our contributing guidelines if you haven\'t yet done so.</p>\n<p><a href="https://github.com/webpack-contrib/transform-loader/blob/master/.github/CONTRIBUTING.md">CONTRIBUTING</a></p>\n<h2 id="license">License<a href="#license" aria-hidden="true"><span class="icon icon-link"></span></a></h2>\n<p><a href="https://github.com/webpack-contrib/transform-loader/blob/master/LICENSE">MIT</a></p>\n'}}]);