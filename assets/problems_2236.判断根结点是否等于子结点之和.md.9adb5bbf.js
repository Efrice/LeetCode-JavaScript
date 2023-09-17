import{_ as s,c as n,o as a,d as l}from"./app.0e2b0497.js";const d=JSON.parse('{"title":"2236. 判断根结点是否等于子结点之和","description":"","frontmatter":{},"headers":[],"relativePath":"problems/2236.判断根结点是否等于子结点之和.md"}'),o={name:"problems/2236.判断根结点是否等于子结点之和.md"},p=l(`<h1 id="_2236-判断根结点是否等于子结点之和" tabindex="-1">2236. 判断根结点是否等于子结点之和 <a class="header-anchor" href="#_2236-判断根结点是否等于子结点之和" aria-hidden="true">#</a></h1><p>给你一个 二叉树 的根结点 root，该二叉树由恰好 3 个结点组成：根结点、左子结点和右子结点。<br> 如果根结点值等于两个子结点值之和，返回 true ，否则返回 false 。</p><p>示例 1：<br> 输入：root = [10,4,6]<br> 输出：true<br> 解释：根结点、左子结点和右子结点的值分别是 10 、4 和 6 。<br> 由于 10 等于 4 + 6 ，因此返回 true 。</p><p>示例 2：<br> 输入：root = [5,3,1]<br> 输出：false<br> 解释：根结点、左子结点和右子结点的值分别是 5 、3 和 1 。<br> 由于 5 不等于 3 + 1 ，因此返回 false 。</p><p>提示：<br> 树只包含根结点、左子结点和右子结点<br> -100 &lt;= Node.val &lt;= 100</p><ul><li>来源：力扣（LeetCode）</li><li>链接：<a href="https://leetcode.cn/problems/root-equals-sum-of-children" target="_blank" rel="noreferrer">https://leetcode.cn/problems/root-equals-sum-of-children</a></li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * Definition for a binary tree node.</span></span>
<span class="line"><span style="color:#676E95;"> * function TreeNode(val, left, right) {</span></span>
<span class="line"><span style="color:#676E95;"> *     this.val = (val===undefined ? 0 : val)</span></span>
<span class="line"><span style="color:#676E95;"> *     this.left = (left===undefined ? null : left)</span></span>
<span class="line"><span style="color:#676E95;"> *     this.right = (right===undefined ? null : right)</span></span>
<span class="line"><span style="color:#676E95;"> * }</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">TreeNode</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">root</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> checkTree </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">===</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">left</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">root</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">right</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">val</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div>`,7),e=[p];function t(r,c,i,y,D,F){return a(),n("div",null,e)}const C=s(o,[["render",t]]);export{d as __pageData,C as default};
