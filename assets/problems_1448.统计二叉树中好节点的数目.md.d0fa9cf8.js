import{_ as s,c as n,o as a,d as l}from"./app.7015f040.js";const i=JSON.parse('{"title":"1448. 统计二叉树中好节点的数目","description":"","frontmatter":{},"headers":[],"relativePath":"problems/1448.统计二叉树中好节点的数目.md"}'),p={name:"problems/1448.统计二叉树中好节点的数目.md"},o=l(`<h1 id="_1448-统计二叉树中好节点的数目" tabindex="-1">1448. 统计二叉树中好节点的数目 <a class="header-anchor" href="#_1448-统计二叉树中好节点的数目" aria-hidden="true">#</a></h1><p>给你一棵根为 root 的二叉树，请你返回二叉树中好节点的数目。<br> 「好节点」X 定义为：从根到该节点 X 所经过的节点中，没有任何节点的值大于 X 的值。</p><p>示例 1：</p><pre><code>   3
  / \\
 1   4
/   / \\
3  1   5
</code></pre><p>输入：root = [3,1,4,3,null,1,5]<br> 输出：4<br> 解释：图中蓝色节点为好节点。<br> 根节点 (3) 永远是个好节点。<br> 节点 4 -&gt; (3,4) 是路径中的最大值。<br> 节点 5 -&gt; (3,4,5) 是路径中的最大值。<br> 节点 3 -&gt; (3,1,3) 是路径中的最大值。</p><p>示例 2：</p><pre><code>  3
 /
 3
/ \\
4 2
</code></pre><p>输入：root = [3,3,null,4,2]<br> 输出：3<br> 解释：节点 2 -&gt; (3, 3, 2) 不是好节点，因为 &quot;3&quot; 比它大。</p><p>示例 3：<br> 输入：root = [1]<br> 输出：1<br> 解释：根节点是好节点。</p><p>提示：<br> 二叉树中节点数目范围是 [1, 10^5] 。<br> 每个节点权值的范围是 [-10^4, 10^4] 。</p><ul><li>来源：力扣（LeetCode）</li><li>链接：https:eetcode.cn/problems/count-good-nodes-in-binary-tree</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#676E95;"> * function TreeNode(val, left, right) {</span></span>
<span class="line"><span style="color:#676E95;"> *     this.val = (val===undefined ? 0 : val)</span></span>
<span class="line"><span style="color:#676E95;"> *     this.left = (left===undefined ? null : left)</span></span>
<span class="line"><span style="color:#676E95;"> *     this.right = (right===undefined ? null : right)</span></span>
<span class="line"><span style="color:#676E95;"> * }</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">root</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> goodNodes </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">count</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">max</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">dfs</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">max</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">function</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">dfs</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">max</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">root</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">max</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">max</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">++</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">dfs</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">max</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">dfs</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">max</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">count</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// test</span></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TreeNode</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">===undefined</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">===undefined</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">left</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">===undefined</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">?</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">null</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">right</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#676E95;">// var n1 = new TreeNode(3)</span></span>
<span class="line"><span style="color:#676E95;">// var n2 = new TreeNode(1)</span></span>
<span class="line"><span style="color:#676E95;">// var n3 = new TreeNode(4)</span></span>
<span class="line"><span style="color:#676E95;">// var n4 = new TreeNode(3)</span></span>
<span class="line"><span style="color:#676E95;">// var n5 = new TreeNode(1)</span></span>
<span class="line"><span style="color:#676E95;">// var n6 = new TreeNode(5)</span></span>
<span class="line"><span style="color:#676E95;">// n1.left = n2</span></span>
<span class="line"><span style="color:#676E95;">// n1.right = n3</span></span>
<span class="line"><span style="color:#676E95;">// n2.left = n4</span></span>
<span class="line"><span style="color:#676E95;">// n3.left = n5</span></span>
<span class="line"><span style="color:#676E95;">// n3.right = n6</span></span>
<span class="line"><span style="color:#676E95;">// console.log(goodNodes(n1))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// var n1 = new TreeNode(3)</span></span>
<span class="line"><span style="color:#676E95;">// var n2 = new TreeNode(3)</span></span>
<span class="line"><span style="color:#676E95;">// var n3 = new TreeNode(4)</span></span>
<span class="line"><span style="color:#676E95;">// var n4 = new TreeNode(2)</span></span>
<span class="line"><span style="color:#676E95;">// n1.left = n2</span></span>
<span class="line"><span style="color:#676E95;">// n2.left = n3</span></span>
<span class="line"><span style="color:#676E95;">// n2.right = n4</span></span>
<span class="line"><span style="color:#676E95;">// console.log(goodNodes(n1))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> n1 </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">TreeNode</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">goodNodes</span><span style="color:#A6ACCD;">(n1))</span></span>
<span class="line"></span></code></pre></div>`,12),e=[o];function t(r,c,y,F,D,A){return a(),n("div",null,e)}const d=s(p,[["render",t]]);export{i as __pageData,d as default};
