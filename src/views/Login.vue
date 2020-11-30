<template>
  <div>
    <!-- 登陆背景 -->
    <div class="login-img" @touchmove.prevent @mousewheel.prevent>
      <img src="~@/assets/images/bg.jpg" />
    </div>

    <!-- 登陆表单 -->
    <div class="login-border">
      <div class="login-logo">
        <img src="~@/assets/logo.png" />
      </div>
      <el-form :model="form" :rules="rules" ref="form" size="medium">
        <!-- input: 用户名 -->
        <el-form-item prop="username">
          <el-input
            type="text"
            placeholder="用户名"
            prefix-icon="iconfont icon-user"
            v-model.trim="form.username"
            maxlength="50"
          ></el-input>
        </el-form-item>

        <!-- input: 密码 -->
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="密码"
            show-password
            clearable
            prefix-icon="iconfont icon-3702mima"
            v-model="form.password"
            maxlength="30"
          ></el-input>
        </el-form-item>

        <!-- input: 验证码 -->
        <el-form-item prop="verificationcode">
          <el-input
            type="text"
            placeholder="验证码"
            v-model="form.verificationcode"
            class="login-verify-box"
            maxlength="4"
          ></el-input>

          <!-- /* 验证码图片*/ -->
          <vue-img-verify
            @getImgCode="getImgCode"
            ref="vueImgVerify"
            class="login-verify-img"
          />
        </el-form-item>

        <!-- checkbox: 记住我 -->
        <el-form-item>
          <el-checkbox v-model="form.checked" label="记住我"></el-checkbox>
        </el-form-item>

        <!-- button: 登陆 -->
        <el-form-item>
          <el-button type="primary" @click="submitForm('form')">登录</el-button>
        </el-form-item>

        <!-- href -->
        <el-form-item>
          <!-- href: 忘记密码? -->
          <el-link icon="el-icon-search" :underline="false" style="right: -10px"
            >忘记密码?</el-link
          >

          <!-- href: 新用户注册 -->
          <el-link
            @click="jumperToRegister"
            icon="el-icon-user"
            :underline="false"
            style="right: -110px"
            >新用户注册</el-link
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import vueImgVerify from "@/components/identify";

export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
        remeberme: false,
        verificationcode: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名！",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码！",
            trigger: "blur"
          }
        ],
        verificationcode: [
          {
            required: true,
            message: "请输入验证码！",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    // 按钮(登陆): 校验逻辑
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 点击图片获取验证码
    getImgCode(code) {
      this.imgCode = code;
      console.log("验证码: " + this.imgCode);
    },
    // 点击新用户注册跳转到注册页面
    jumperToRegister() {
      this.$router.push({
        name: "register"
      });
    }
  },
  components: {
    vueImgVerify
  }
};
</script>

<style lang="scss">
// 样式: 文本链接(忘记密码 && 新用户注册)鼠标悬停
.el-link.el-link--default:hover {
  color: #becff5;
}
</style>

<style lang="scss" scoped>
// 引入全局样式: login.css
@import "../static/css/login.css";

// 引入全局样式: el-form.css
@import "../static/css/el-form.css";

// 样式: input外边距
.el-input {
  margin: 3px auto;
}

// 样式: 多选框
.el-checkbox {
  color: #f2f6fc;
  position: relative;
  top: -8px;
  bottom: 0;

  /* 覆盖checkbox选中后原生样式 */
  ::v-deep .el-checkbox__input.is-checked .el-checkbox__inner {
    background-color: #b4b9bf;
    border-color: #b4b9bf;
  }
  /* 覆盖label选中后原生样式 */
  ::v-deep .el-checkbox__input.is-checked + .el-checkbox__label {
    color: #b4b9bf;
  }
}

// 样式: 按钮(登陆)
.el-button {
  background-color: #20a0ff;
  border-color: #20a0ff;
  position: relative;
  top: -20px;
  bottom: 0;
  width: 100%;
}

// 样式: 文本链接(忘记密码 && 新用户注册)
.el-link {
  display: inline-block;
  color: #a5b5d8;
  margin-top: -70px;
  font-size: 13px;
  font-weight: 800;
  text-decoration: underline;

  /* 文本禁止选中*/
  -webkit-touch-callout: none;
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
}

// 样式: 验证码输入框
.login-verify-box {
  width: 40%;
}

// 样式: 图形验证码
.login-verify-img {
  display: inline-block;
  vertical-align: top;
  margin-left: 25px;
  margin-top: 3px;
  position: absolute;
}
</style>
