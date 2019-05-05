<template>
	<div class="content">
		<el-col :span='18' :offset='3'>
			<div class="top">
				<p>
					菜单是你的一桌饭
					<router-link class="hot" to="#">最热</router-link>
					<router-link class="xin" to="#">最新</router-link>

				</p>
			</div>

			<div class="box"  v-for='(item,index) in theme' :key='index' :info='item' v-if='index>=(page*pageSize+0)&&index<(page*pageSize+pageSize)'>
				<div class="box-right">
					<router-link to="#">{{item.title}}</router-link>
					<p><span>{{item.em}}</span>{{item.left}}</p>
				</div>

				<div class="info">
					<dl>
						<dd><strong class="tag">{{item.time}}</strong></dd>
					</dl>
					<router-link class="author" to="#"><img :src="item.author">
						<strong>{{item.name}}</strong>
					</router-link>
				</div>
				<ul class="cplist">
					<li class="img" v-for='item in item.images' :key="item.id">
						<router-link to="#">
							<img :src="item.imgurl" />
							<div class="foot-text">{{item.txt}}</div>
						</router-link>
					</li>
				</ul>
			</div>
			<div id="foot_btn">
				<el-pagination background layout="prev, pager, next" :total="theme.length" :page-size='5' @current-change='changePage'></el-pagination>
			</div>
		</el-col>
	</div>
</template>

<script>
	export default {
		name: 'Menu',
		mounted: function() {
			this.$store.commit('changeTopFlag', 4)
		},
		data() {
			return {
				show: false,
				pageSize:5,
				page:0,
				theme: [{
						title: '我的菜单',
						em: '9',
						left: '篇菜谱',
						time: '2018-02-04 16:14',
						name: 'Vio let',
						author: '../../static/img/wicon01.png',
						src: '../../static/img/test01.jpg',
						images: [{
								imgurl: 'https://s1.st.meishij.net/r/41/203/113291/a113291_154779084366958.jpg',
								txt: '青椒土豆丝'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/41/203/113291/a113291_154216680380826.jpg',
								txt: '清炒虾仁'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/41/203/113291/a113291_154606711848312.jpg',
								txt: '滑蛋虾仁'
							}, {
								imgurl: 'http://site.meishij.net/r/21/119/2654771/a2654771_16279.jpg',
								txt: '蘑菇汤'
							}, {
								imgurl: 'http://site.meishij.net/r/184/180/4420184/a4420184_150719076254053.jpg',
								txt: '麻辣干锅'
							}

						]
					}, {
						title: '我的菜单',
						em: '10',
						left: '篇菜谱',
						time: '2018-10-20 10:31',
						name: '娟娟溪流',
						author: '../../static/img/wicon02.png',
						images: [{
								imgurl: 'https://s1.st.meishij.net/r/41/203/113291/a113291_154225167544813.jpg',
								txt: '秋葵炒鸡蛋'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu03.jpg',
								txt: '翡翠虾仁'
							}, {
								imgurl: '../../static/img/wmenu04.jpg',
								txt: '麻辣豆腐'
							}, {
								imgurl: '../../static/img/wmenu05.jpg',
								txt: '牛肉炒饭'
							}

						]

					}, {
						title: '我的菜单',
						em: '12',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: '杰米7148377',
						author: '../../static/img/wicon03.png',
						images: [{
								imgurl: 'http://site.meishij.net/r/147/198/4174647/a4174647_143229789581888.jpg',
								txt: '小炒肉'
							}, {
								imgurl: 'http://site.meishij.net/r/245/13/2378495/a2378495_148213552661216.jpg',
								txt: '粉丝'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/00/28/13382000/a13382000_154529823349845.jpg',
								txt: '干锅虾'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/242/239/4747492/a4747492_154451515385543.jpg',
								txt: '沸腾鱼'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/151/36/13196651/a13196651_154518464991363.jpg',
								txt: '爆炒蛏子'
							}

						]

					}, {
						title: '我的菜单',
						em: '10',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: 'zero2014016',
						author: '../../static/img/wicon04.png',
						images: [{
								imgurl: 'http://site.meishij.net/r/41/212/5178041/a5178041_149422404619217.jpg',
								txt: '香煎包'
							}, {
								imgurl: 'http://site.meishij.net/r/154/182/2983154/a2983154_143148271899918.jpg',
								txt: '红豆沙'
							}, {
								imgurl: 'http://s1.st.meishij.net/r/208/102/1025708/a1025708_152403698808325.jpg',
								txt: '手撕面包'
							}, {
								imgurl: 'http://site.meishij.net/r/183/61/827933/a827933_143053009766170.jpg',
								txt: '面包'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/207/244/2811207/a2811207_155165300129776.jpg',
								txt: '凉粉'
							}

						]

					}, {
						title: '我的菜单',
						em: '10',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: '倾尽红城',
						author: '../../static/img/wicon05.png',
						images: [{
								imgurl: 'https://s1.st.meishij.net/r/41/203/113291/a113291_154088632180092.jpg',
								txt: '麻辣香锅'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/230/207/13426980/a13426980_154509923934250.jpg',
								txt: '醋溜白菜'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/04/196/13424004/a13424004_154538043263058.jpg',
								txt: '地三鲜'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/148/248/13187148/a13187148_154503583285476.jpg',
								txt: '茄子煲'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/78/219/13429828/a13429828_154572473136928.jpg',
								txt: '猪肉炖粉条'
							}

						]

					}, {
						title: '我的菜单',
						em: '10',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: 'MY慧',
						author: '../../static/img/wicon06.png',
						images: [{
								imgurl: 'http://site.meishij.net/r/238/143/1348488/a1348488_142250736444088.jpg',
								txt: '全蛋海绵蛋糕'
							}, {
								imgurl: 'http://site.meishij.net/r/39/52/8888039/a8888039_147783254842263.jpg',
								txt: '提拉米苏'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/182/199/13299932/a13299932_154339650135479.jpg',
								txt: '蛋糕卷'
							}, {
								imgurl: 'http://site.meishij.net/r/112/158/2414612/a2414612_143228485872959.jpg',
								txt: '马蹄糕'
							}, {
								imgurl: 'http://site.meishij.net/r/236/19/1442486/a1442486_150960679874713.jpg',
								txt: '黑芝麻花卷'
							}

						]

					}, {
						title: '我的菜单',
						em: '10',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: '阿祕陀佛',
						author: '../../static/img/wicon07.png',
						images: [{
								imgurl: 'http://images.meishij.net/p/20111219/eca576abd2b1fa2f367f0972fb7e0a72_150x150.jpg',
								txt: '香蕉派'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/41/203/113291/a113291_154710239261352.jpg',
								txt: '三鲜豆皮'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/41/203/113291/a113291_155071966788735.jpg',
								txt: '无油香蕉松饼'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/78/219/13429828/a13429828_154570092701728.jpg',
								txt: '牛奶蛋挞'
							}, {
								imgurl: 'http://site.meishij.net/r/23/160/5790023/a5790023_148152367605835.jpg',
								txt: '蒜香致使焗虾'
							}

						]

					}, {
						title: '我的菜单',
						em: '10',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: '过桥米线',
						author: '../../static/img/wicon01.png',
						images: [{
								imgurl: 'http://site.meishij.net/r/206/21/9130456/a9130456_148126270157759.jpg',
								txt: '鱼香茄条'
							}, {
								imgurl: 'http://s1.st.meishij.net/r/01/145/5036251/a5036251_151809300587821.jpg',
								txt: '素馅饺子'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/127/203/13113377/a13113377_154356980908611.jpg',
								txt: '黄焖鸡'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/210/26/13131710/a13131710_154397682823392.jpg',
								txt: '陕西凉皮'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/72/104/4151072/a4151072_153639131565171.jpg',
								txt: '全素胡萝卜包子'
							}

						]

					}, {
						title: '我的菜单',
						em: '10',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: 'Vio let',
						author: '../../static/img/wicon02.png',
						images: [{
								imgurl: 'https://s1.st.meishij.net/r/97/36/13384097/a13384097_154451177064123.jpg',
								txt: '蒜香排骨'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/114/141/12410364/a12410364_155100509284062.jpg',
								txt: '香酥排骨'
							}, {
								imgurl: 'http://site.meishij.net/r/73/86/8459073/a8459073_149519806622856.jpg',
								txt: '台式香菇卤肉饭'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/22/31/13382772/a13382772_154604843308052.jpg',
								txt: '卤大猪蹄子'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/09/29/13132259/a13132259_154362707595313.jpg',
								txt: '红焖猪蹄'
							}

						]

					}, 
					{
						title: '我的菜单',
						em: '11',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: 'Vio let',
						author: '../../static/img/wicon03.png',
						images: [{
								imgurl: 'https://s1.st.meishij.net/r/19/99/9087269/a9087269_155641335617082.jpg',
								txt: '黄花菜焖土鸡'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/210/26/13131710/a13131710_154365296933105.jpg',
								txt: '盐焗鸡'
							}, {
								imgurl: 'http://images.meishij.net/p/20120313/4a1ac94d7fc470ff1afbd0a69f05bea4_150x150.jpg',
								txt: '香菇乌鸡汤'
							}, {
								imgurl: 'http://site.meishij.net/r/97/32/4758097/a4758097_150475378829000.jpg',
								txt: '香菇鸡汤'
							}, {
								imgurl: 'http://images.meishij.net/p/20111103/f04f69ed35dc92460793b15038ae3eee_150x150.jpg',
								txt: '山药炖鸡汤'
							}

						]
					},
					{
						title: '我的菜单',
						em: '9',
						left: '篇菜谱',
						time: '2018-02-04 16:14',
						name: 'Vio let',
						author: '../../static/img/wicon01.png',
						src: '../../static/img/test01.jpg',
						images: [{
								imgurl: 'https://s1.st.meishij.net/r/41/203/113291/a113291_154779084366958.jpg',
								txt: '青椒土豆丝'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/41/203/113291/a113291_154216680380826.jpg',
								txt: '清炒虾仁'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/41/203/113291/a113291_154606711848312.jpg',
								txt: '滑蛋虾仁'
							}, {
								imgurl: 'http://site.meishij.net/r/21/119/2654771/a2654771_16279.jpg',
								txt: '蘑菇汤'
							}, {
								imgurl: 'http://site.meishij.net/r/184/180/4420184/a4420184_150719076254053.jpg',
								txt: '麻辣干锅'
							}

						]
					}, {
						title: '我的菜单',
						em: '10',
						left: '篇菜谱',
						time: '2018-10-20 10:31',
						name: '娟娟溪流',
						author: '../../static/img/wicon02.png',
						images: [{
								imgurl: 'https://s1.st.meishij.net/r/41/203/113291/a113291_154225167544813.jpg',
								txt: '秋葵炒鸡蛋'
							}, {
								imgurl: '../../static/img/wmenu02.jpg',
								txt: '麻婆豆腐'
							}, {
								imgurl: '../../static/img/wmenu03.jpg',
								txt: '翡翠虾仁'
							}, {
								imgurl: '../../static/img/wmenu04.jpg',
								txt: '麻辣豆腐'
							}, {
								imgurl: '../../static/img/wmenu05.jpg',
								txt: '牛肉炒饭'
							}

						]

					}, {
						title: '我的菜单',
						em: '12',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: '杰米7148377',
						author: '../../static/img/wicon03.png',
						images: [{
								imgurl: 'http://site.meishij.net/r/147/198/4174647/a4174647_143229789581888.jpg',
								txt: '小炒肉'
							}, {
								imgurl: 'http://site.meishij.net/r/245/13/2378495/a2378495_148213552661216.jpg',
								txt: '粉丝'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/00/28/13382000/a13382000_154529823349845.jpg',
								txt: '干锅虾'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/242/239/4747492/a4747492_154451515385543.jpg',
								txt: '沸腾鱼'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/151/36/13196651/a13196651_154518464991363.jpg',
								txt: '爆炒蛏子'
							}

						]

					}, {
						title: '我的菜单',
						em: '10',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: 'zero2014016',
						author: '../../static/img/wicon04.png',
						images: [{
								imgurl: 'http://site.meishij.net/r/41/212/5178041/a5178041_149422404619217.jpg',
								txt: '香煎包'
							}, {
								imgurl: 'http://site.meishij.net/r/154/182/2983154/a2983154_143148271899918.jpg',
								txt: '红豆沙'
							}, {
								imgurl: 'http://s1.st.meishij.net/r/208/102/1025708/a1025708_152403698808325.jpg',
								txt: '手撕面包'
							}, {
								imgurl: 'http://site.meishij.net/r/183/61/827933/a827933_143053009766170.jpg',
								txt: '面包'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/207/244/2811207/a2811207_155165300129776.jpg',
								txt: '凉粉'
							}

						]

					}, {
						title: '我的菜单',
						em: '10',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: '倾尽红城',
						author: '../../static/img/wicon05.png',
						images: [{
								imgurl: 'https://s1.st.meishij.net/r/41/203/113291/a113291_154088632180092.jpg',
								txt: '麻辣香锅'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/230/207/13426980/a13426980_154509923934250.jpg',
								txt: '醋溜白菜'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/04/196/13424004/a13424004_154538043263058.jpg',
								txt: '地三鲜'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/148/248/13187148/a13187148_154503583285476.jpg',
								txt: '茄子煲'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/78/219/13429828/a13429828_154572473136928.jpg',
								txt: '猪肉炖粉条'
							}

						]

					},, {
						title: '我的菜单',
						em: '10',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: 'MY慧',
						author: '../../static/img/wicon06.png',
						images: [{
								imgurl: 'http://site.meishij.net/r/238/143/1348488/a1348488_142250736444088.jpg',
								txt: '全蛋海绵蛋糕'
							}, {
								imgurl: 'http://site.meishij.net/r/39/52/8888039/a8888039_147783254842263.jpg',
								txt: '提拉米苏'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/182/199/13299932/a13299932_154339650135479.jpg',
								txt: '蛋糕卷'
							}, {
								imgurl: 'http://site.meishij.net/r/112/158/2414612/a2414612_143228485872959.jpg',
								txt: '马蹄糕'
							}, {
								imgurl: 'http://site.meishij.net/r/236/19/1442486/a1442486_150960679874713.jpg',
								txt: '黑芝麻花卷'
							}

						]

					}, {
						title: '我的菜单',
						em: '10',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: '阿祕陀佛',
						author: '../../static/img/wicon07.png',
						images: [{
								imgurl: 'http://images.meishij.net/p/20111219/eca576abd2b1fa2f367f0972fb7e0a72_150x150.jpg',
								txt: '香蕉派'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/41/203/113291/a113291_154710239261352.jpg',
								txt: '三鲜豆皮'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/41/203/113291/a113291_155071966788735.jpg',
								txt: '无油香蕉松饼'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/78/219/13429828/a13429828_154570092701728.jpg',
								txt: '牛奶蛋挞'
							}, {
								imgurl: 'http://site.meishij.net/r/23/160/5790023/a5790023_148152367605835.jpg',
								txt: '蒜香致使焗虾'
							}

						]

					}, {
						title: '我的菜单',
						em: '10',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: '过桥米线',
						author: '../../static/img/wicon01.png',
						images: [{
								imgurl: 'http://site.meishij.net/r/206/21/9130456/a9130456_148126270157759.jpg',
								txt: '鱼香茄条'
							}, {
								imgurl: 'http://s1.st.meishij.net/r/01/145/5036251/a5036251_151809300587821.jpg',
								txt: '素馅饺子'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/127/203/13113377/a13113377_154356980908611.jpg',
								txt: '黄焖鸡'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/210/26/13131710/a13131710_154397682823392.jpg',
								txt: '陕西凉皮'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/72/104/4151072/a4151072_153639131565171.jpg',
								txt: '全素胡萝卜包子'
							}

						]

					}, {
						title: '我的菜单',
						em: '10',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: 'Vio let',
						author: '../../static/img/wicon02.png',
						images: [{
								imgurl: 'https://s1.st.meishij.net/r/97/36/13384097/a13384097_154451177064123.jpg',
								txt: '蒜香排骨'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/114/141/12410364/a12410364_155100509284062.jpg',
								txt: '香酥排骨'
							}, {
								imgurl: 'http://site.meishij.net/r/73/86/8459073/a8459073_149519806622856.jpg',
								txt: '台式香菇卤肉饭'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/22/31/13382772/a13382772_154604843308052.jpg',
								txt: '卤大猪蹄子'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/09/29/13132259/a13132259_154362707595313.jpg',
								txt: '红焖猪蹄'
							}

						]

					}, 
					{
						title: '我的菜单',
						em: '11',
						left: '篇菜谱',
						time: '2018-07-19 12:19',
						name: 'Vio let',
						author: '../../static/img/wicon03.png',
						images: [{
								imgurl: 'https://s1.st.meishij.net/r/19/99/9087269/a9087269_155641335617082.jpg',
								txt: '黄花菜焖土鸡'
							}, {
								imgurl: 'https://s1.st.meishij.net/r/210/26/13131710/a13131710_154365296933105.jpg',
								txt: '盐焗鸡'
							}, {
								imgurl: 'http://images.meishij.net/p/20120313/4a1ac94d7fc470ff1afbd0a69f05bea4_150x150.jpg',
								txt: '香菇乌鸡汤'
							}, {
								imgurl: 'http://site.meishij.net/r/97/32/4758097/a4758097_150475378829000.jpg',
								txt: '香菇鸡汤'
							}, {
								imgurl: 'http://images.meishij.net/p/20111103/f04f69ed35dc92460793b15038ae3eee_150x150.jpg',
								txt: '山药炖鸡汤'
							}

						]
					}
					
                    
                    
				]
			}

		},
		methods: {
			showtxt: function() {
				this.show = true;
			},
			showtxtNo: function() {
				this.show = false;
			},
			changePage(page){
				this.page = page-1
			}
		}
	}
</script>

<style scoped>
	.content {
		width: 100%;
		min-width: 1349px;
		overflow: auto;
		overflow: hidden;
	}
	
	.top {
		height: 115px;
	}
	
	.top p {
		position: relative;
		width: 100%;
		height: 120px;
		line-height: 120px;
		text-align: center;
		font-weight: normal;
		font-size: 24px;
	}
	
	.top a {
		font-size: 12px;
		font-family: 宋体;
		text-decoration: none;
		float: right;
		margin-left: 10px;
		color: #666;
	}
	
	.top .xin {
		color: red;
	}
	
	.top a:hover {
		color: red;
	}
	
	.box {
		width: 1120px;
		height: 240px;
		padding-left: 20px;
		background-color: white;
		margin-top: 20px;
	}
	
	.box-right a {
		color: #333;
		font-size: 18px;
		font-family: Microsoft Yahei;
		font-weight: bold;
		text-decoration: none;
		display: inline-block;
		margin-top: 10px;
	}
	
	.box-right span {
		color: red;
	}
	
	.box-right p {
		float: right;
		margin-top: 18px;
		color: #999;
		font-size: 12px;
		margin-right: 27px;
	}
	
	.info {
		display: inline-block;
		margin-top: 20px;
	}
	
	.info dl dd strong.tag {
		color: #999;
		padding-right: 10px;
		line-height: 18px;
		text-indent: 0px;
		float: none;
		height: 18px;
		display: inline;
		font-style: normal;
		font-weight: normal;
		font-size: 12px;
		display: inline-block;
	}
	
	.info a.author {
		height: 40px;
		width: 120px;
		text-decoration: none;
		margin-top: 105px;
		display: block;
	}
	
	.info a.author img {
		height: 40px;
		width: 40px;
	}
	
	.info a.author strong {
		font-size: 12px;
		color: #999;
		font-style: normal;
		font-weight: normal;
	}
	
	.cplist {
		display: inline-block;
		width: 944px !important;
		height: 160px;
		vertical-align: top;
		margin-top: 25px;
		margin-left: 24px;
	}
	
	.cplist li {
		width: 19.5%;
		display: inline-block;
		margin-left: 3px;
	}
	
	.cplist img {
		display: block;
		height: 160px;
		width: 160px;
	}
	
	.foot-text {
		height: 32px;
		line-height: 32px;
		color: #fff;
		text-align: center;
		display: inline-block;
		font-size: 14px;
		margin-left: 0px;
		position: absolute;
		margin-top: -32px;
		background: url(../assets/2.jpg)repeat;
		opacity: .7;
		width: 160px;
		font-size: 14px;
		display: none;
	}
	
	.img>a:hover .foot-text {
		display: block;
	}
	
	.block {
		width: 100%;
		height: 60px;
		/*margin-top: 20px;*/
		margin: 40px auto;
		margin-left: 20px;
	}
	#foot_btn {
		padding: 44px 0 ;
		text-align: center;
	}
</style>
<style type="text/css">
	#foot_btn .el-pagination .number.active {
		background-color: #8B4513;
	}
	#foot_btn .el-pagination .number:hover {
		color: lightcoral;
	}
	#foot_btn .el-pagination .number.active:hover {
		color: white;
	}
</style>