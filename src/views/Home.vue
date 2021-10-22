<template>
	<div class="home">
		<el-container>
			<el-header>
				<el-row type="flex" class="row-bg" justify="space-between">
					<el-col :span="3">
						<h1 @click="logoSkip()">未来社区</h1>
					</el-col>
					<el-col :span="6">
						<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal"
							@select="handleSelect" background-color="#545c64" text-color="#fff"
							active-text-color="#ffd04b">
							<el-menu-item index="1">首页</el-menu-item>
							<el-menu-item index="2">话题</el-menu-item>
							<el-menu-item index="3">我的话题</el-menu-item>
						</el-menu>
					</el-col>
					<el-col :span="6" class="searchDiv">
						<el-input placeholder="请输入..." v-model="searchCriteria"></el-input>
						<i class="el-icon-search"></i>
					</el-col>
					<el-col :span="5">
						<el-avatar shape="square" :src="headPortraitUrl"></el-avatar>
						<el-dropdown class="userMenu">
							<span class="el-dropdown-link">
								下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
								<el-dropdown-item icon="el-icon-s-custom">个人资料</el-dropdown-item>
								<el-dropdown-item icon="el-icon-s-unfold">退出登录</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</el-col>
				</el-row>
			</el-header>
			<el-main>
				main
				<input
					class="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
					type="text" aria-label="Filter projects" placeholder="Filter projects" />
				<p class="text-xs ...">The quick brown fox ...</p>
				<p class="text-sm ...">The quick brown fox ...</p>
				<p class="text-base ...">The quick brown fox ...</p>
				<p class="text-lg ...">The quick brown fox ...</p>
				<p class="text-xl ...">The quick brown fox ...</p>
				<p class="text-2xl ...">The quick brown fox ...</p>
				<p class="text-3xl ...">The quick brown fox ...</p>
				<p class="text-4xl ...">The quick brown fox ...</p>
				<p class="text-5xl ...">The quick brown fox ...</p>
				<p class="text-6xl ...">The quick brown fox ...</p>
				<p class="text-7xl ...">The quick brown fox ...</p>
				<p class="text-8xl ...">The quick brown fox ...</p>
				<p class="text-9xl ...">The quick brown fox ...</p>
			</el-main>
		</el-container>

	</div>
</template>

<script>
	// @ is an alias to /src
	// import HelloWorld from '@/components/HelloWorld.vue'

	export default {
		name: 'Home',
		components: {
			// HelloWorld
		},
		data() {
			return {
				activeIndex: '1',
				headPortraitUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
				searchCriteria: ""
			};
		},
		methods: {
			handleSelect(key, keyPath) {
				console.log(key, keyPath);
			},
			logoSkip() {
				this.$router.push({
					name: "home"
				})
			}
		}
	}
</script>
<style type="text/css">
	.home h1 {
		line-height: 60px;
		font-weight: 400;
		color: white;
		cursor: pointer;
	}

	.home .el-header {
		padding: 0;
		background-color: #545c64;
	}

	.home .el-avatar {
		margin: 10px;
	}

	.home .searchDiv {
		padding: 12px;
		position: relative;
	}

	.home .searchDiv input {
		padding: 0px 25px 0px 15px;
		height: 36px;
	}

	.home .searchDiv i {
		position: absolute;
		right: 20px;
		top: 21px;
		cursor: pointer;
	}

	.home .userMenu {
		color: white;
		position: absolute;
		bottom: 23px;
		right: 15px;
	}
</style>
