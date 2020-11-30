/* js: 工具函数 */
// 正则: 用户名
export const matchUserName = value => {
  return /^(?![0-9]+$)(?![a-z]+$)[0-9a-z]{5,15}$/.test(value);
};

// 正则: 密码
// /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{8,30}$/
export const matchPassWord = value => {
  return /(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^[^\s\u4e00-\u9fa5]{8,30}$/.test(
    value
  );
};

// 正则: 手机号码
export const matchPhoneNumber = value => {
  return /^1\d{10}/.test(value);
};
