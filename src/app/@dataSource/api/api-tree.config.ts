/**
 * api tree config
 * _this可以省略不写，但是不写的话，在ts就没有语法提示
 * publicKey,secretKeyByUid以及_this等可以为任意值，因为将会被apiTreeGenerator重新赋值
 */
const APITREECONFIG = {
  api: {
    v1: {
      blog: {
        login: {
          _this: '',
          publicKey: 'publicKey',
          secretKeyByUid: 'secretKeyByUid',
          token: 'token',
          checkLoginStatus: 'checkLoginStatus',
          loginOut: 'loginOut'
        },
        skill: {
          _this: ''
        }
      }
    }
  }
};

export { APITREECONFIG };

