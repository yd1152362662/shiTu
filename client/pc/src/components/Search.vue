<template>
	<div>
		<!--头部的内容-->
			<div class="top">
			<el-col :span='18' :offset='3'>
				<div class="content">
					<router-link to='/'>
						<img src="../assets/logo.png" />
					</router-link>
					<div class="search">
						<div class="input">
							<el-input v-model='input1' placeholder='请输入菜谱/食材/菜单/作者' ></el-input>
						</div>
						<div class="btn">
								<el-button @click="Search">搜索</el-button>
						</div>
					</div>
					
					<div class='return-home-box'>
					
					<div class="user" v-if="!this.$store.state.userState.flag" style="display:inline-block;">
						<p>亲，您还未登录！</p>
						<router-link to='/registered'>注册</router-link>
						<router-link to='/login'>登录</router-link>
					</div>
					<div class="sign_in" v-if="this.$store.state.userState.flag" style="display:inline-block;">
						<router-link to='#'>
							<img src="../../static/img/test_user.jpg"/>
							<span class="name">{{this.$store.state.userState.u_name}}</span>
						</router-link>
						<router-link to='/personal' class='link'>个人中心</router-link>
						<!--<router-link to='/Loadding' class='link'>发布菜谱</router-link>-->
						<span class='quit' @click='userQuit'>注销</span>
					</div>
					<router-link to='/' style="display:inline-block;width: 50px;height: 50px; margin-left:10px;color: #000000;">
						<p class="return-home">返回首页</p>
					</router-link>
					</div>
				</div>
			</el-col>
		</div>
	    <!--显示的内容-->
	    <div class="search-content-box">
	    	<div style="width: 100%;display: flex;flex-wrap: wrap;" >
	    		
	    	<SearchTips v-for='(item,index) in info' :key='index' :info='item' v-if='index>=(page*pageSize+0)&&index<(page*pageSize+pageSize)'></SearchTips>
	    
	    	</div>
	    	
	    	<div id="search_btn">
				<el-pagination background layout="prev, pager, next" :total="info.length" :page-size='12' @current-change='changePage' ></el-pagination>
			</div>
	    	
	    </div>
	</div>
</template>

<script>
	import SearchTips from './SearchTips.vue';
	export default {
		name: 'Search',
		data() {
			return {
				input1:'',
				info:'',
				pageSize:12,
				page:0
			}
		},
		mounted() {
			document.querySelector("#Header").style.display="none"
			console.log(this.$route.params.search);
			this.funSearch(this.$route.params.search)
			
	        let _this = this;
			_this.$http.get('/search', {
				params: {
					u_search: _this.$route.params.search
				}
			}).then(response => {
                  console.log(response.data)
                   if((response.data).length==0) {
					alert('暂无查询结果')
				}
				_this.info = response.data;
				
			})
			
		},
		methods:{
			userQuit(){
				this.$store.commit('setUserState', {
					flag: false,
					u_name: '',
					u_id: ''
				});
				alert('您已安全退出该账户...');
				this.$router.replace('/home');
			},
			funSearch(a){
//				console.log(1231)
//				console.log(a)
			},
			Search(){
				 let _this = this;
			_this.$http.get('/search', {
				params: {
					u_search: _this.input1
				}
			}).then(response => {
                  console.log(response.data)
				_this.info = response.data;
				  if((response.data).length==0) {
					alert('暂无查询结果')
				}
				
			})
			},
			changePage(page){
				this.page = page-1
			}
		},
		components: {
			SearchTips
		},
		beforeRouteEnter(to, from, next) {
//			console.log('15456456s23')
            next()
       },
		
	}
</script>

<style scoped>
	header {
		width: 100%;
		min-width: 1349px;
	}
	.top {
		width: 100%;
		height: 129px;
		background-color: #DEB887;
		display: flex;
	}
	
	.content {
		width: 100%;
		height: 100%;
		/*font-size: 0;*/
	}
	
	.content img {
		margin-left: 60px;
		height: 129px;
	}
	
	.search {
		display: inline-block;
		width: 450px;
		height: 129px;
		vertical-align: top;
		line-height: 129px;
		margin-left: 80px;
	}
	
	.search .input {
		display: inline-block;
		float: left;
		width: 80%;
		height: 100%;
	}
	
	.search .btn {
		display: inline-block;
		float: left;
		width: 20%;
		height: 124px;
	}
	
	.search button {
		width: 100%;
	}
	.return-home {
		font-size: 12px;
	}
	.return-home-box {
		width: 365px;
    	height: 129px;
    	vertical-align: top;
    	line-height: 129px;
    	margin-left: 40px;
		display: inline-block;
	}
	.return-home-box p,
	.return-home-box a
	 {
		text-decoration: none;
		color: #FFF8DC;
	/*	padding-left:10px;*/
	}
	
	.content .sign_in img {
		width: 36px;
		height: 36px;
		vertical-align: top;
		margin-top:45px;
	}
	.sign_in>a {
		text-decoration: none;
	}
	.sign_in .name {
		height: 36px;
		font-size: 12px;
		margin-top: 45px;
		color: #8B4513;
	}
	.sign_in .link,
	.sign_in .quit {
		display: inline-block;
		height: 36px;
		line-height: 36px;
		padding: 0 5px;
		font-size: 12px;
		color: gray;
	}
	.sign_in .quit {
		cursor: pointer;
		color: darkslategray;
	}
	.sign_in .quit:hover {
		color: red;
		text-decoration: underline;
	}
	.sign_in .link:hover {
		color: #F5F5F5;
		text-decoration: underline;
	}
	.user p {
		display: inline-block;
		height: 28px;
		margin-top: 50px;
		line-height: 28px;
		/*padding: 0 5px;*/
		font-size: 14px;
		color: darkslategray;
	}
	
	.user a {
		display: inline-block;
		text-decoration: none;
		height: 28px;
		margin-top: 50px;
		line-height: 28px;
		padding: 0 10px;
		color: white;
		border-radius: 5px;
		font-size: 14px;
	}
	
	.user a:hover {
		text-decoration: underline;
		background-color: rgba(	139,69,19,.5);
	}
	
	/*搜索内容显示盒子的样式*/
	.search-content-box {
		width: 70%;
		margin: 0 auto;
		background-color: #FFF8DC;
		display: flex;
		flex-wrap: wrap;
	}
	
	
</style>

<style>
	#search_btn {
		width: 100%;
		padding: 44px 0;
        display: flex;
		justify-content: center;
	}
	#search_btn .el-pagination .number.active {
		background-color: #8B4513;
	}
	#search_btn .el-pagination .number:hover {
		color: lightcoral;
	}
	#search_btn .el-pagination .number.active:hover {
		color: white;
	}
</style>