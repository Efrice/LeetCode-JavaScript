import{_ as s,c as n,o as a,d as l}from"./app.0e2b0497.js";const i=JSON.parse('{"title":"226. 翻转二叉树","description":"","frontmatter":{},"headers":[],"relativePath":"problems/226.翻转二叉树.md"}'),p={name:"problems/226.翻转二叉树.md"},o=l(`<h1 id="_226-翻转二叉树" tabindex="-1">226. 翻转二叉树 <a class="header-anchor" href="#_226-翻转二叉树" aria-hidden="true">#</a></h1><p>给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。</p><p>示例 1：</p><pre><code>   4
  / \\
 2   7
/ \\ / \\
1 3 6 9
</code></pre><p>输入：root = [4,2,7,1,3,6,9]<br> 输出：[4,7,2,9,6,3,1]</p><p>示例 2：</p><pre><code> 2
/ \\
1 3
</code></pre><p>输入：root = [2,1,3]<br> 输出：[2,3,1]</p><p>示例 3：<br> 输入：root = []<br> 输出：[]</p><p>提示：<br> 树中节点数目范围在 [0, 100] 内<br> -100 &lt;= Node.val &lt;= 100</p><ul><li>来源：力扣（LeetCode）</li><li>链接：<a href="https://leetcode.cn/problems/invert-binary-tree" target="_blank" rel="noreferrer">https://leetcode.cn/problems/invert-binary-tree</a></li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#676E95;"> * function TreeNode(val, left, right) {</span></span>
<span class="line"><span style="color:#676E95;"> *     this.val = (val===undefined ? 0 : val)</span></span>
<span class="line"><span style="color:#676E95;"> *     this.left = (left===undefined ? null : left)</span></span>
<span class="line"><span style="color:#676E95;"> *     this.right = (right===undefined ? null : right)</span></span>
<span class="line"><span style="color:#676E95;"> * }</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">root</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> invertTree </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">root</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">root</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">root</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">invertTree</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">invertTree</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">var</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">temp</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">temp</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">root</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// test</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TreeNode</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">left</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> n1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TreeNode</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">2</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> n2 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TreeNode</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> n3 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TreeNode</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">n1</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> n2</span></span>
<span class="line"><span style="color:#676E95;">// n1.right = n3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">invertTree</span><span style="color:#A6ACCD;">(n1))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// var n1 = new TreeNode(4)</span></span>
<span class="line"><span style="color:#676E95;">// var n2 = new TreeNode(2)</span></span>
<span class="line"><span style="color:#676E95;">// var n3 = new TreeNode(7)</span></span>
<span class="line"><span style="color:#676E95;">// var n4 = new TreeNode(1)</span></span>
<span class="line"><span style="color:#676E95;">// var n5 = new TreeNode(3)</span></span>
<span class="line"><span style="color:#676E95;">// var n6 = new TreeNode(6)</span></span>
<span class="line"><span style="color:#676E95;">// var n7 = new TreeNode(9)</span></span>
<span class="line"><span style="color:#676E95;">// n1.left = n2</span></span>
<span class="line"><span style="color:#676E95;">// n1.right = n3</span></span>
<span class="line"><span style="color:#676E95;">// n2.left = n4</span></span>
<span class="line"><span style="color:#676E95;">// n2.right = n5</span></span>
<span class="line"><span style="color:#676E95;">// n3.left = n6</span></span>
<span class="line"><span style="color:#676E95;">// n3.right = n7</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// console.log(invertTree(null))</span></span>
<span class="line"></span></code></pre></div>`,12),e=[o];function r(t,c,y,F,D,A){return a(),n("div",null,e)}const d=s(p,[["render",r]]);export{i as __pageData,d as default};
