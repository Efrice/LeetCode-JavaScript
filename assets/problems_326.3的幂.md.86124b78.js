import{_ as s,c as n,o as a,d as l}from"./app.0e2b0497.js";const i=JSON.parse('{"title":"326. 3 的幂","description":"","frontmatter":{},"headers":[],"relativePath":"problems/326.3的幂.md"}'),p={name:"problems/326.3的幂.md"},o=l(`<h1 id="_326-3-的幂" tabindex="-1">326. 3 的幂 <a class="header-anchor" href="#_326-3-的幂" aria-hidden="true">#</a></h1><p>给定一个整数，写一个函数来判断它是否是 3  的幂次方。如果是，返回 true ；否则，返回 false 。</p><p>整数 n 是 3 的幂次方需满足：存在整数 x 使得 n == 3x</p><p>示例 1：<br> 输入：n = 27<br> 输出：true</p><p>示例 2：<br> 输入：n = 0<br> 输出：false</p><p>示例 3：<br> 输入：n = 9<br> 输出：true</p><p>示例 4：<br> 输入：n = 45<br> 输出：false</p><p>提示：<br> -231 &lt;= n &lt;= 231 - 1</p><p>进阶：你能不使用循环或者递归来完成本题吗？</p><ul><li>来源：力扣（LeetCode）</li><li>链接：<a href="https://leetcode.cn/problems/power-of-three" target="_blank" rel="noreferrer">https://leetcode.cn/problems/power-of-three</a></li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">n</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> isPowerOfThree </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">^</span><span style="color:#C3E88D;">10</span><span style="color:#89DDFF;">*</span><span style="color:#89DDFF;">$</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">test</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">n</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">toString</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">3</span><span style="color:#F07178;">))</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">isPowerOfThree</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">27</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">isPowerOfThree</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">0</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">isPowerOfThree</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">9</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">isPowerOfThree</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">45</span><span style="color:#A6ACCD;">))</span></span>
<span class="line"></span></code></pre></div>`,11),e=[o];function r(t,c,y,F,A,D){return a(),n("div",null,e)}const _=s(p,[["render",r]]);export{i as __pageData,_ as default};
