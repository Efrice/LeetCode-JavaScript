export default {
  title: "efrice",
  description: "前端 LeetCode 算法进阶之路",
  outDir: "../dist",
	base: "/LeetCode-JavaScript/",
  themeConfig: {
    base: "/",
    sidebar: [
      {
        items: [
					{ text: "1.两数之和", link: "/problems/1.两数之和" },
					{ text: "2.两数相加", link: "/problems/2.两数相加" },
					{ text: "4.寻找两个正序数组的中位数", link: "/problems/4.寻找两个正序数组的中位数" },
					{ text: "5.最长回文子串", link: "/problems/5.最长回文子串" },
					{ text: "6.N字形变换", link: "/problems/6.N字形变换" },
					{ text: "8.字符串转换整数(atoi)", link: "/problems/8.字符串转换整数(atoi)" },
					{ text: "9.回文数", link: "/problems/9.回文数" },
					{ text: "10.正则表达式匹配", link: "/problems/10.正则表达式匹配" },
					{ text: "11.盛最多水的容器", link: "/problems/11.盛最多水的容器" },
					{ text: "12.整数转罗马数字", link: "/problems/12.整数转罗马数字" },
					{ text: "13.罗马数字转整数", link: "/problems/13.罗马数字转整数" },
					{ text: "14.最长公共前缀", link: "/problems/14.最长公共前缀" },
					{ text: "15.三数之和", link: "/problems/15.三数之和" },
					{ text: "16.最接近的三数之和", link: "/problems/16.最接近的三数之和" },
					{ text: "17.电话号码的字母组合", link: "/problems/17.电话号码的字母组合" },
					{ text: "18.四数之和", link: "/problems/18.四数之和" },
					{ text: "20.有效的括号", link: "/problems/20.有效的括号" },
					{ text: "21.合并两个有序链表", link: "/problems/21.合并两个有序链表" },
					{ text: "22.括号生成", link: "/problems/22.括号生成" },
					{ text: "23.合并K个升序链表", link: "/problems/23.合并K个升序链表" },
					{ text: "24.两两交换链表中的节点", link: "/problems/24.两两交换链表中的节点" },
					{ text: "25.K个一组翻转链表", link: "/problems/25.K个一组翻转链表" },
					{ text: "26.删除有序数组中的重复项", link: "/problems/26.删除有序数组中的重复项" },
					{ text: "27.移除元素", link: "/problems/27.移除元素" },
					{ text: "28.找出字符串中第一个匹配项的下标", link: "/problems/28.找出字符串中第一个匹配项的下标" },
					{ text: "29.两数相除", link: "/problems/29.两数相除" },
					{ text: "30.串联所有单词的子串", link: "/problems/30.串联所有单词的子串" },
					{ text: "31.下一个排列", link: "/problems/31.下一个排列" },
					{ text: "32.最长有效括号", link: "/problems/32.最长有效括号" },
					{ text: "33.搜索旋转排序数组", link: "/problems/33.搜索旋转排序数组" },
					{ text: "34.在排序数组中查找元素的第一个和最后一个位置", link: "/problems/34.在排序数组中查找元素的第一个和最后一个位置" },
					{ text: "35.搜索插入位置", link: "/problems/35.搜索插入位置" },
					{ text: "36.有效的数独", link: "/problems/36.有效的数独" },
					{ text: "56.合并区间", link: "/problems/56.合并区间" },
					{ text: "57.插入区间", link: "/problems/57.插入区间" },
					{ text: "58.最后一个单词的长度", link: "/problems/58.最后一个单词的长度" },
					{ text: "66.加一", link: "/problems/66.加一" },
					{ text: "67.二进制求和", link: "/problems/67.二进制求和" },
					{ text: "69.x的平方根", link: "/problems/69.x的平方根" },
					{ text: "70.爬楼梯", link: "/problems/70.爬楼梯" },
					{ text: "83.删除排序链表中的重复元素", link: "/problems/83.删除排序链表中的重复元素" },
					{ text: "88.合并两个有序数组", link: "/problems/88.合并两个有序数组" },
					{ text: "94.二叉树的中序遍", link: "/problems/94.二叉树的中序遍" },
					{ text: "100.相同的树", link: "/problems/100.相同的树" },
					{ text: "101.对称二叉树", link: "/problems/101.对称二叉树" },
					{ text: "104.二叉树的最大深度", link: "/problems/104.二叉树的最大深度" },
					{ text: "108.将有序数组转换为二叉搜索树", link: "/problems/108.将有序数组转换为二叉搜索树" },
					{ text: "110.平衡二叉树", link: "/problems/110.平衡二叉树" },
					{ text: "111.二叉树的最小深度", link: "/problems/111.二叉树的最小深度" },
					{ text: "112.路径总和", link: "/problems/112.路径总和" },
					{ text: "118.杨辉三角", link: "/problems/118.杨辉三角" },
					{ text: "119.杨辉三角II", link: "/problems/119.杨辉三角II" },
					{ text: "121.买卖股票的最佳时机", link: "/problems/121.买卖股票的最佳时机" },
					{ text: "125.验证回文串", link: "/problems/125.验证回文串" },
					{ text: "144.二叉树的前序遍历", link: "/problems/144.二叉树的前序遍历" },
					{ text: "145.二叉树的后序遍历", link: "/problems/145.二叉树的后序遍历" },
					{ text: "160.相交链表", link: "/problems/160.相交链表" },
					{ text: "168.Excel表列名称", link: "/problems/168.Excel表列名称" },
					{ text: "169.多数元素", link: "/problems/169.多数元素" },
					{ text: "171.Excel表列序号", link: "/problems/171.Excel表列序号" },
					{ text: "202.快乐数", link: "/problems/202.快乐数" },
					{ text: "203.移除链表元素", link: "/problems/203.移除链表元素" },
					{ text: "205.同构字符串", link: "/problems/205.同构字符串" },
					{ text: "206.反转链表", link: "/problems/206.反转链表" },
					{ text: "217.存在重复元素", link: "/problems/217.存在重复元素" },
					{ text: "219.存在重复元素II", link: "/problems/219.存在重复元素II" },
					{ text: "225.用队列实现栈", link: "/problems/225.用队列实现栈" },
					{ text: "226.翻转二叉树", link: "/problems/226.翻转二叉树" },
					{ text: "228.汇总区间", link: "/problems/228.汇总区间" },
					{ text: "232.用栈实现队列", link: "/problems/232.用栈实现队列" },
					{ text: "234.回文链表", link: "/problems/234.回文链表" },
					{ text: "242.有效的字母异位词", link: "/problems/242.有效的字母异位词" },
					{ text: "257.二叉树的所有路径", link: "/problems/257.二叉树的所有路径" },
					{ text: "258.各位相加", link: "/problems/258.各位相加" },
					{ text: "263.丑数", link: "/problems/263.丑数" },
					{ text: "290.单词规律", link: "/problems/290.单词规律" },
					{ text: "292.Nim游戏", link: "/problems/292.Nim游戏" },
					{ text: "300.最长递增子序列", link: "/problems/300.最长递增子序列" },
					{ text: "303.区域和检索-数组不可变", link: "/problems/303.区域和检索-数组不可变" },
					{ text: "326.3的幂", link: "/problems/326.3的幂" },
					{ text: "338.比特位计数", link: "/problems/338.比特位计数" },
					{ text: "342.4的幂", link: "/problems/342.4的幂" },
					{ text: "345.反转字符串中的元音字母", link: "/problems/345.反转字符串中的元音字母" },
					{ text: "383.赎金信", link: "/problems/383.赎金信" },
					{ text: "387.字符串中的第一个唯一字符", link: "/problems/387.字符串中的第一个唯一字符" },
					{ text: "389.找不同", link: "/problems/389.找不同" },
					{ text: "392.判断子序列", link: "/problems/392.判断子序列" },
					{ text: "401.二进制手表", link: "/problems/401.二进制手表" },
					{ text: "404.左叶子之和", link: "/problems/404.左叶子之和" },
					{ text: "405.数字转换为十六进制数", link: "/problems/405.数字转换为十六进制数" },
					{ text: "409.最长回文串", link: "/problems/409.最长回文串" },
					{ text: "412.FizzBuzz", link: "/problems/412.FizzBuzz" },
					{ text: "414.第三大的数", link: "/problems/414.第三大的数" },
					{ text: "415.字符串相加", link: "/problems/415.字符串相加" },
					{ text: "434.字符串中的单词数", link: "/problems/434.字符串中的单词数" },
					{ text: "438.找到字符串中所有字母异位词", link: "/problems/438.找到字符串中所有字母异位词" },
					{ text: "448.找到所有数组中消失的数字", link: "/problems/448.找到所有数组中消失的数字" },
					{ text: "455.分发饼干", link: "/problems/455.分发饼干" },
					{ text: "459.重复的子字符串", link: "/problems/459.重复的子字符串" },
					{ text: "461.汉明距离", link: "/problems/461.汉明距离" },
					{ text: "463.岛屿的周长", link: "/problems/463.岛屿的周长" },
					{ text: "476.数字的补数", link: "/problems/476.数字的补数" },
					{ text: "482.密钥格式化", link: "/problems/482.密钥格式化" },
					{ text: "485.最大连续1的个数", link: "/problems/485.最大连续1的个数" },
					{ text: "492.构造矩形", link: "/problems/492.构造矩形" },
					{ text: "495.提莫攻击", link: "/problems/495.提莫攻击" },
					{ text: "617.合并二叉树", link: "/problems/617.合并二叉树" },
					{ text: "833.字符串中的查找与替换", link: "/problems/833.字符串中的查找与替换" },
					{ text: "849.到最近的人的最大距离", link: "/problems/849.到最近的人的最大距离" },
					{ text: "1267.统计参与通信的服务器", link: "/problems/1267.统计参与通信的服务器" },
					{ text: "1448.统计二叉树中好节点的数目", link: "/problems/1448.统计二叉树中好节点的数目" },
					{ text: "2236.判断根结点是否等于子结点之和", link: "/problems/2236.判断根结点是否等于子结点之和" },
					{ text: "2337.移动片段得到字符串", link: "/problems/2337.移动片段得到字符串" },
					{ text: "2511.最多可以摧毁的敌人城堡数目", link: "/problems/2511.最多可以摧毁的敌人城堡数目" },
					{ text: "2682.找出转圈游戏输家", link: "/problems/2682.找出转圈游戏输家" }
				],
			},
		],
  },
	markdown: {
		breaks: true
	}
}