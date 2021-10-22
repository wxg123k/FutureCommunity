<template>
	<div class="rigister">
		<el-container>
			<img :src="imgSrc" class="leftImg">
			<div class="main">
				<h1>欢迎注册未来社区</h1>
				<p>每一天，乐在沟通。</p>
				<el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px"
					class="demo-ruleForm">
					<el-form-item label="账号" prop="account">
						<el-input v-model.number="ruleForm.account"></el-input>
					</el-form-item>
					<el-form-item label="昵称" prop="nickname">
						<el-input v-model.number="ruleForm.nickname"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="pass">
						<el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="确认密码" prop="checkPass">
						<el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
					</el-form-item>
					<el-form-item label="手机号" prop="phoneNum">
						<el-input type="text" v-model="ruleForm.phoneNum"></el-input>
					</el-form-item>
					<el-form-item label="验证码" prop="authCode">
						<el-row type="flex" class="row-bg" justify="space-between">
							<el-col :span="17">
								<el-input v-model.number="ruleForm.authCode"></el-input>
							</el-col>
							<el-col :span="7">
								<el-button type="primary">获取验证码</el-button>
							</el-col>
						</el-row>
					</el-form-item>
					<el-form-item>
						<el-row type="flex" class="row-bg" justify="space-between">
							<el-col :span="6">
								<el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
							</el-col>
							<el-col :span="7">
								<router-link to="/login">已有帐号？去登录</router-link>
							</el-col>
						</el-row>
						<!-- <el-button @click="resetForm('ruleForm')">重置</el-button> -->
					</el-form-item>
				</el-form>
			</div>
		</el-container>
	</div>
</template>

<script>
	export default {
		name: 'Register',
		components: {
			// HelloWorld
		},
		data() {
			var checkAccount = (rule, value, callback) => {
				if (!value) {
					return callback(new Error('账号不能为空'));
				} else {
					callback();
				}
				/* setTimeout(() => {
					if (!Number.isInteger(value)) {
						callback(new Error('请输入数字值'));
					} else {
						if (value < 18) {
							callback(new Error('必须年满18岁'));
						} else {
							callback();
						}
					}
				}, 1000); */
			};
			var validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入密码'));
				} else {
					console.log(this.ruleForm.checkPass)
					if (this.ruleForm.checkPass !== '') {
						this.$refs.ruleForm.validateField('checkPass');
					}
					callback();
				}
			};
			var validatePass2 = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请再次输入密码'));
				} else if (value !== this.ruleForm.pass) {
					callback(new Error('两次输入密码不一致!'));
				} else {
					callback();
				}
			};
			return {
				imgSrc: "https://cdn-go.cn/qq-web/zc.qq.com/latest/v3/img/01-4.jpg",
				ruleForm: {
					pass: '',
					checkPass: '',
					account: '',
					authCode:'',
					nickname:'',
					phoneNum:''
				},
				rules: {
					pass: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					checkPass: [{
						validator: validatePass2,
						trigger: 'blur'
					}],
					account: [{
						validator: checkAccount,
						trigger: 'blur'
					}]
				}
			};
		},
		methods: {
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!');
					} else {
						console.log('error submit!!');
						return false;
					}
				});
			},
			resetForm(formName) {
				this.$refs[formName].resetFields();
			},
			slideShow() {
				let imgList = [
					"https://cdn-go.cn/qq-web/zc.qq.com/latest/v3/img/01-1.jpg",
					"https://cdn-go.cn/qq-web/zc.qq.com/latest/v3/img/01-3.jpg",
					"https://cdn-go.cn/qq-web/zc.qq.com/latest/v3/img/01-4.jpg"
				]
				let count = 0
				setInterval(() => {
					count++
					if (count === 1) {
						this.imgSrc = imgList[0]
					} else if (count === 2) {
						this.imgSrc = imgList[1]
					} else {
						this.imgSrc = imgList[2]
						count = 0
					}
				}, 5000)
			}
		},
		created() {
			this.slideShow()
		}
	}
</script>

<style type="text/css">
	.login {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: flex-start;
	}

	.leftImg {
		width: 31.9%;
		height: 100vh;
	}

	.main {
		width: 65%;
		padding: 70px;
	}

	.main h1 {
		font-weight: 400;
		font-size: 30px;
		line-height: 2em;
	}

	.main p {
		font-weight: 400;
		font-size: 20px;
		line-height: 1.5em;
		margin-bottom: 10px;
	}

	.demo-ruleForm {
		width: 500px;
		margin: auto;
	}
</style>
