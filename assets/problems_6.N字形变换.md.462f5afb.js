import{_ as s,c as n,o as a,d as l}from"./app.44b545af.js";const C=JSON.parse('{"title":"6. N 字形变换","description":"","frontmatter":{},"headers":[],"relativePath":"problems/6.N字形变换.md"}'),p={name:"problems/6.N字形变换.md"},o=l(`<h1 id="_6-n-字形变换" tabindex="-1">6. N 字形变换 <a class="header-anchor" href="#_6-n-字形变换" aria-hidden="true">#</a></h1><p>将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。<br> 比如输入字符串为 &quot;PAYPALISHIRING&quot; 行数为 3 时，排列如下：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">P   A   H   N</span></span>
<span class="line"><span style="color:#A6ACCD;">A P L S I I G</span></span>
<span class="line"><span style="color:#A6ACCD;">Y   I   R</span></span>
<span class="line"></span></code></pre></div><p>之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如：&quot;PAHNAPLSIIGYIR&quot;。<br> 请你实现这个将字符串进行指定行数变换的函数：<br> string convert(string s, int numRows);</p><p>示例 1：<br> 输入：s = &quot;PAYPALISHIRING&quot;, numRows = 3<br> 输出：&quot;PAHNAPLSIIGYIR&quot;</p><p>示例 2：<br> 输入：s = &quot;PAYPALISHIRING&quot;, numRows = 4<br> 输出：&quot;PINALSIGYAHRPI&quot;<br> 解释：</p><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">P     I    N</span></span>
<span class="line"><span style="color:#A6ACCD;">A   L S  I G</span></span>
<span class="line"><span style="color:#A6ACCD;">Y A   H R</span></span>
<span class="line"><span style="color:#A6ACCD;">P     I</span></span>
<span class="line"></span></code></pre></div><p>示例 3：<br> 输入：s = &quot;A&quot;, numRows = 1<br> 输出：&quot;A&quot;</p><p>提示：<br> 1 &lt;= s.length &lt;= 1000<br> s 由英文字母（小写和大写）、&#39;,&#39; 和 &#39;.&#39; 组成<br> 1 &lt;= numRows &lt;= 1000</p><ul><li>来源：力扣（LeetCode）</li><li>链接：<a href="https://leetcode.cn/problems/zigzag-conversion" target="_blank" rel="noreferrer">https://leetcode.cn/problems/zigzag-conversion</a></li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">s</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">numRows</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">return</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#676E95;"> */</span></span>
<span class="line"><span style="color:#676E95;">// var convert = function(s, numRows) {</span></span>
<span class="line"><span style="color:#676E95;">//   const template = getTemplate(numRows)</span></span>
<span class="line"><span style="color:#676E95;">//   const res = Array.from({length: numRows}, () =&gt; Array.from({length: 1}, () =&gt; &#39;&#39;))</span></span>
<span class="line"><span style="color:#676E95;">//   let index = 0, turns = 0</span></span>
<span class="line"><span style="color:#676E95;">//   while(index &lt; s.length){</span></span>
<span class="line"><span style="color:#676E95;">//     let j = 0</span></span>
<span class="line"><span style="color:#676E95;">//     while(j &lt; numRows){</span></span>
<span class="line"><span style="color:#676E95;">//       for (let i = 0; i &lt; template.length; i++) {</span></span>
<span class="line"><span style="color:#676E95;">//         if(template[i][j]){</span></span>
<span class="line"><span style="color:#676E95;">//           res[i][j + turns * numRows] = s[index]</span></span>
<span class="line"><span style="color:#676E95;">//           index++</span></span>
<span class="line"><span style="color:#676E95;">//         }</span></span>
<span class="line"><span style="color:#676E95;">//       }</span></span>
<span class="line"><span style="color:#676E95;">//       j++</span></span>
<span class="line"><span style="color:#676E95;">//     }</span></span>
<span class="line"><span style="color:#676E95;">//     turns++</span></span>
<span class="line"><span style="color:#676E95;">//   }</span></span>
<span class="line"><span style="color:#676E95;">//   return res.map(item =&gt; item.join(&#39;&#39;)).join(&#39;&#39;)</span></span>
<span class="line"><span style="color:#676E95;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// function getTemplate(numRows){</span></span>
<span class="line"><span style="color:#676E95;">//   return Array.from({length: numRows}, (_, i) =&gt; Array.from({length: ( numRows - 1 || 1)}, (_, j) =&gt; j === 0 || i + j === numRows - 1 ? 1 : 0))</span></span>
<span class="line"><span style="color:#676E95;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// var convert = function(s, numRows) {</span></span>
<span class="line"><span style="color:#676E95;">//   const { count, template } = getNTemplate(numRows), turns = Math.ceil( s.length / count)</span></span>
<span class="line"><span style="color:#676E95;">//   const res = Array.from({length: numRows}, () =&gt; Array.from({length: 1}, () =&gt; &#39;&#39;))</span></span>
<span class="line"><span style="color:#676E95;">//   let index = 0, turn = 0</span></span>
<span class="line"><span style="color:#676E95;">//   while(turn &lt; turns){</span></span>
<span class="line"><span style="color:#676E95;">//     for (let j = 0; j &lt; template[0].length; j++) {</span></span>
<span class="line"><span style="color:#676E95;">//       for (let i = 0; i &lt; template.length; i++) {</span></span>
<span class="line"><span style="color:#676E95;">//         if(template[i][j]){</span></span>
<span class="line"><span style="color:#676E95;">//           res[i][j + turn * numRows] = s[index]</span></span>
<span class="line"><span style="color:#676E95;">//           index++</span></span>
<span class="line"><span style="color:#676E95;">//         }</span></span>
<span class="line"><span style="color:#676E95;">//       }</span></span>
<span class="line"><span style="color:#676E95;">//     }</span></span>
<span class="line"><span style="color:#676E95;">//     turn++</span></span>
<span class="line"><span style="color:#676E95;">//     if(!s[index]) break</span></span>
<span class="line"><span style="color:#676E95;">//   }</span></span>
<span class="line"><span style="color:#676E95;">//   return res.map(item =&gt; item.join(&#39;&#39;)).join(&#39;&#39;)</span></span>
<span class="line"><span style="color:#676E95;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// function getNTemplate(numRows){</span></span>
<span class="line"><span style="color:#676E95;">//   let count = 0</span></span>
<span class="line"><span style="color:#676E95;">//   const template = Array.from({length: numRows}, (_, i) =&gt; Array.from({length: ( numRows - 1 || 1)}, (_, j) =&gt; {</span></span>
<span class="line"><span style="color:#676E95;">//     if(j === 0 || i + j === numRows - 1){</span></span>
<span class="line"><span style="color:#676E95;">//       count++</span></span>
<span class="line"><span style="color:#676E95;">//       return 1</span></span>
<span class="line"><span style="color:#676E95;">//     }else {</span></span>
<span class="line"><span style="color:#676E95;">//       return 0</span></span>
<span class="line"><span style="color:#676E95;">//     }</span></span>
<span class="line"><span style="color:#676E95;">//   }))</span></span>
<span class="line"><span style="color:#676E95;">//   return {</span></span>
<span class="line"><span style="color:#676E95;">//     count,</span></span>
<span class="line"><span style="color:#676E95;">//     template</span></span>
<span class="line"><span style="color:#676E95;">//   }</span></span>
<span class="line"><span style="color:#676E95;">// }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">var</span><span style="color:#A6ACCD;"> convert </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">numRows</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">numRows</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">size</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">numRows</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">turns</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Math</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ceil</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">/</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">size</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">numRows</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">turns</span><span style="color:#89DDFF;">;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#89DDFF;">++</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">l</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">size</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">r</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">j</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">*</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">size</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">-</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">l</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">l</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!==</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">r</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">res</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">r</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">||</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">res</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">(</span><span style="color:#82AAFF;">convert</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">PAYPALISHIRING</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">3</span><span style="color:#A6ACCD;">) </span><span style="color:#89DDFF;">===</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">PAHNAPLSIIGYIR</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;">// &quot;PAHNAPLSIIGYIR&quot;</span></span>
<span class="line"><span style="color:#676E95;">// console.log(convert(&quot;PAYPALISHIRING&quot;, 4) === &quot;PINALSIGYAHRPI&quot;)</span></span>
<span class="line"><span style="color:#676E95;">// console.log(convert(&quot;A&quot;, 1))</span></span>
<span class="line"></span></code></pre></div>`,11),e=[o];function t(c,r,y,F,D,i){return a(),n("div",null,e)}const u=s(p,[["render",t]]);export{C as __pageData,u as default};
