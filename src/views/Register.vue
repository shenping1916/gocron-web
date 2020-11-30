<template>
  <div>
    <!-- 登陆背景 -->
    <div class="login-img" @touchmove.prevent @mousewheel.prevent>
      <img src="~@/assets/images/bg.jpg" />
    </div>

    <!-- 登陆表单 -->
    <div class="login-border login-border-register">
      <div class="login-logo">
        <img src="~@/assets/logo.png" />
      </div>
      <el-form
        :model="formRegister"
        :rules="rules"
        ref="formRegister"
        size="small"
        style="margin: 5px -30px;"
        label-width="100px"
      >
        <!-- input: 用户名 -->
        <el-form-item label="用户名" prop="username">
          <el-input
            type="text"
            v-model.trim="formRegister.username"
            maxlength="15"
          ></el-input>
        </el-form-item>

        <!-- input: 密码 -->
        <el-form-item label="密码" prop="password">
          <el-input
            type="password"
            v-model="formRegister.password"
            maxlength="30"
          ></el-input>
        </el-form-item>

        <!-- input: 确认密码 -->
        <el-form-item label="确认密码" prop="confirmpassword">
          <el-input
            type="password"
            v-model="formRegister.confirmpassword"
            maxlength="30"
          ></el-input>
        </el-form-item>

        <!-- input: 邮箱 -->
        <el-form-item label="邮箱" prop="email">
          <el-input type="text" v-model.trim="formRegister.email"></el-input>
        </el-form-item>

        <!-- input: 手机 -->
        <el-form-item label="手机" prop="phone">
          <el-input
            type="text"
            v-model="formRegister.phone"
            maxlength="11"
          ></el-input>
        </el-form-item>

        <!-- button: 注册 -->
        <el-form-item size="medium">
          <el-button type="primary" @click="submitForm('formRegister')"
            >注册</el-button
          >
          <el-button @click="resetForm('formRegister')">清空</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {
  matchUserName,
  matchPassWord,
  matchPhoneNumber
} from "../utils/tool.js";

export default {
  name: "Register",
  data() {
    // 校验: 用户名
    let validateUserName = (rule, value, callback) => {
      !matchUserName(value)
        ? callback(new Error("必须是小写字母、数字组合，5-15个字符"))
        : callback();
    };
    // 校验: 密码
    let validatePasswd = (rule, value, callback) => {
      !matchPassWord(value)
        ? callback(new Error("字母、数字、特殊字符任意两种组合，8-30个字符"))
        : callback();
    };
    // 校验: 确认密码
    let validateConfirmPasswd = (rule, value, callback) => {
      if (value !== this.formRegister.password) {
        callback(new Error("两次密码不一致，请重新输入！"));
      } else {
        callback();
      }
    };
    // 校验: 手机号码
    let validatePhoneNumber = (rule, value, callback) => {
      !matchPhoneNumber(value)
        ? callback(new Error("手机号码有误！"))
        : callback();
    };

    return {
      formRegister: {
        username: "",
        password: "",
        confirmpassword: "",
        email: "",
        phone: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入用户名！",
            trigger: "blur"
          },
          {
            validator: validateUserName,
            trigger: ["blur", "change"]
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码！",
            trigger: "blur"
          },
          {
            validator: validatePasswd,
            trigger: ["blur", "change"]
          }
        ],
        confirmpassword: [
          {
            required: true,
            message: "请再次输入密码！",
            trigger: "blur"
          },
          {
            validator: validateConfirmPasswd,
            trigger: ["blur", "change"]
          }
        ],
        email: [
          {
            required: true,
            message: "请输入邮箱！",
            trigger: "blur"
          },
          {
            type: "email",
            message: "邮箱格式有误！",
            trigger: ["blur", "change"]
          }
        ],
        phone: [
          {
            required: true,
            message: "请输入手机号码！",
            trigger: "blur"
          },
          {
            validator: validatePhoneNumber,
            trigger: ["blur", "change"]
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          //
        } else {
          console.log("Error Submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style lang="scss">
/* 样式: message错误位置 */
.el-form-item__error {
  position: absolute;
  top: 85%;
}
</style>

<style lang="scss" scoped>
// 引入全局样式: login.css
@import "../static/css/login.css";

// 引入全局样式: login.css
@import "../static/css/el-form.css";

// 样式: label
::v-deep .el-form-item__label {
  color: #f2f6fc;
  line-height: 48px;
}

// 样式: input外边距
.el-input {
  margin: 8px auto;
}

// 样式: 按钮(注册 && 清空)
.el-button {
  display: inline-block;
  margin: 0 30px;
  position: relative;
  top: 10px;
}
.el-button--primary {
  background-color: #20a0ff;
  border-color: #20a0ff;
}
</style>
