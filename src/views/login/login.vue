<template>
  <div class="app-login">
    <div class="login-box">
      <div class="log-img">
        <img class="login-img" src="//shadow.elemecdn.com/faas/h5/static/logo.ba876fd.png" alt="">
      </div>
      <form class="login-form">
        <section class="login-name">
          <input type="text" maxlength="11" placeholder="手机号">
          <button disabled="disabled" class="login-button">获取验证码</button>
        </section>
        <section class="login-password">
          <input type="text" maxlength="8" placeholder="验证码">
        </section>
        <section class="login-xieyi">
          新用户登录即自动注册，并表示已同意
          <a href="" class="link-xieyi">《用户服务协议》</a>
        </section>
        <button class="login-submit">登录</button>
      </form>
      <a href="" class="link">关于我们</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@import '~@/styles/common/variable.less';
@import '~@/styles/common/mixins.less';

.app-login{
  width: 100%;
  height: auto;
  padding-top: 20px;
  box-sizing: border-box;
  .login-box{
    flex: 0 0 auto;
    width: 100%;
    height: auto;
    padding: 0 38px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    .log-img{
      width: 100%;
      height: 56px;
      display: flex;
      justify-content: center;
      box-sizing: border-box;
      .login-img{
        width: 130px;
        height: 56px;
      }
    }
    .login-form{
      width: 100%;
      height: 296px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .login-name{
        width: 100%;
        height: 48px;
        padding: 0px 0 0px 10px;
        background: #fff;
        border: 1px solid #ddd;
        position: relative;
        box-sizing: border-box;
        input{
          width: 100%;
          height: 100%;
          border: 0px;
          border-radius: 2px;
          box-sizing: border-box;
          margin-bottom: 1px;
        }
        .login-button{
          position: absolute;
          color: #ccc;
          right: 2%;
          transform: translateY(-50%);
          top: 50%;
          border: 0;
          background: #fff;
        }
      }
      .login-password{
        width: 100%;
        height: 48px;
        padding: 0px 0 0px 10px;
        background: #fff;
        border: 1px solid #ddd;
        box-sizing: border-box;
        input{
          width: 100%;
          height: 100%;
          border: 0px;
          border-radius: 2px;
          box-sizing: border-box;
          margin-bottom: 1px;
        }
      }
      .login-xieyi{
        font-size: 12px;
        color: #ccc;
        .link-xieyi{
          color: rgb(6, 131, 248);
          font-size: 14px;
        }
      }
      .login-submit{
        width: 100%;
        height: 48px;
        text-align: center;
        color: #fff;
        background: rgb(30, 241, 2);
        border: 0;
        border-radius: 2px;
      }
    }
    .link{
      display: block;
      margin: 0 auto;
      font-size: 10px;
      color: #ddd;
    }
  }
}
</style>
