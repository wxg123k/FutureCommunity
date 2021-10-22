<template>
	<div class="login" id="login">
		<div class="container">
			<h1>未来社区登录</h1>
			<el-form label-width="45px" :model="formLabelAlign">
				<el-form-item label="账号">
					<el-input v-model="formLabelAlign.name"></el-input>
				</el-form-item>
				<el-form-item label="密码">
					<el-input v-model="formLabelAlign.region"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" class="loginBtn">登录</el-button>
				</el-form-item>
				<el-form-item>
					<el-row type="flex" class="row-bg" justify="space-between">
						<el-col :span="5">
							<router-link to="/forgetPassword">忘记密码</router-link>
						</el-col>
						<el-col :span="9">
							<router-link to="/register">没有帐号？去注册</router-link>
						</el-col>
					</el-row>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Login",
		data() {
			return {
				// labelPosition: 'right',
				formLabelAlign: {
					name: '',
					region: ''
				}
			}
		}
	}
</script>

<style>
	#login {
		width: 100%;
		height: 100vh;
		background-image: url("https://rescdn.qqmail.com/bizmail/zh_CN/htmledition/images/bizmail/new_login/new_login_background_1475f40.jpg");
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.container{
		background-color: white;
		border-radius: 7px;
		padding: 15px 25px;
		margin-top: -50px;
		width: 450px;
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
	}
	.container h1{
		font-weight: 400;
		margin-bottom: 15px;
	}
	.loginBtn{
		width: 100%;
	}
	
</style>
