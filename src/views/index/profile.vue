// 我的页面
<template>
  <section class="profile">
    <!-- 顶部登陆组件 -->
    <section>
      <router-link class="top-login" :to="{ path: './login', name: 'logins'}">
        <div class="login-buddha">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg=="
            alt="">
        </div>
        <dir class="login-conten">
          <p class="login-link">登陆/注册</p>
          <p class="login-msg"><i class="el-icon-mobile-phone"></i><span class="login-tequan">登陆后享受更多特权</span></p>
        </dir>
        <span class="logon-guide">
          <i class="el-icon-arrow-right"></i>
        </span>
      </router-link>
    </section>

    <ProfileItem :infoItem="infoItem" />
    <MyPanel :panelMy="panelMySite" />
    <MyPanel :panelMy="panelMyBoon" />
    <MyPanel :panelMy="panelMyServe" />
    <div class="profile-yinsi">
      <router-link to="/yinsi">隐私政策</router-link>
    </div>
  </section>
</template>
<script>
import ProfileItem from '@/components/profile/ProfileItem.vue';
import MyPanel from '@/components/profile/MyPanel.vue';

export default {
  name: 'Profile',
  data () {
    return {
      infoItem:[
        { id: 1, name: '红包',Iconfj: 'itemIcon-fjhb', classIcon: 'el-icon-mobile', classParent: 'index-info',classFont: 'index-font',
        href: '/profile/benefit' },
        { id: 2, name: '金币',Iconfj: 'itemIcon-fjjb', classIcon: 'el-icon-coin',classParent: 'index-info',classFont: 'index-font',
        href: '/profile/benefit' }
      ],
      panelMySite:[
        {
          id: 1,
          name: '我的地址',
          linkC: ['panel-my-link','panel-my-margin','border-tops','border-bottoms'],
          asideC: ['el-icon-location', 'panel-my-site'],
          articleC: 'panel-my-art',
          iconC: 'el-icon-arrow-right',
          href: '/profile/site'
        }
      ],
      panelMyBoon:[
        {
          id: 1,
          name: '金币商城',
          linkC: ['panel-my-link','border-tops'],
          asideC: ['el-icon-sell', 'panel-my-site'],
          articleC: 'panel-my-art',
          iconC: 'el-icon-arrow-right',
          href: '/profile/site'
        },
        {
          id: 2,
          name: '分享拿20元现金',
          linkC: ['panel-boon-link','panel-my-link'],
          asideC: ['el-icon-potato-strips', 'panel-my-site'],
          articleC: ['panel-my-art','border-tops'],
          iconC: 'el-icon-arrow-right',
          href: '/profile/site'
        },
      ],
      panelMyServe:[
        {
          id: 1,
          name: '我的客服',
          linkC: ['panel-my-link','border-tops'],
          asideC: ['el-icon-phone', 'panel-my-site'],
          articleC: 'panel-my-art',
          iconC: 'el-icon-arrow-right',
          href: '/profile/site'
        },
        {
          id: 2,
          name: '下载饿了么APP',
          linkC: ['panel-my-link'],
          asideC: ['el-icon-platform-eleme', 'panel-my-site'],
          articleC: ['panel-my-art','border-tops'],
          iconC: 'el-icon-arrow-right',
          href: '/profile/site'
        },
        {
          id: 3,
          name: '规则中心',
          linkC: ['border-bottoms','panel-my-link'],
          asideC: ['el-icon-s-order', 'panel-my-site'],
          articleC: ['panel-my-art','border-tops'],
          iconC: 'el-icon-arrow-right',
          href: '/profile/site'
        },
      ],
    }
  },
    components: {
      ProfileItem,
      MyPanel
    }
}
</script>

<style lang="less" scoped>
@import '~@/styles/common/variable.less';
@import '~@/styles/common/mixins.less';

.profile{
  background: #f7f3f3;
  height: 100%;
  overflow: hidden;
  .top-login{
    width: 375px;
    height: 110px;
    padding: 25px 15px;
    box-sizing: border-box;
    display: flex;
    justify-content:center;
    align-items: center;
    background: rgb(3, 139, 250);
    background: -webkit-linear-gradient(left,rgb(102, 169, 224),rgb(38, 126, 241));
    .login-buddha{
      border-radius: 50%;
      overflow: hidden;
      img{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        margin-right: 2px;
      }
    }
    .login-conten{
      color: #fff;
      width: 257px;
      height: 47px;
      display: flex;
      flex-direction:column;
      align-items: center;
      margin-left: 12px;
      padding: 0;
      .login-link{
        height: 25px;
        font-weight: 700;
        font-size: 18px;
        width: 100%;
        margin-bottom: 4px;
      }
      .login-msg{
        height: 14px;
        width: 100%;
        .login-tequan{
          font-size: 12px;
        }
        .el-icon-mobile-phone{
          font-size: 10px;
        }
      }
    }
    .logon-guide{
      display: block;
      width: 6px;
      height: 10px;
      .el-icon-arrow-right{
        color: #fff;
      }
    }
    .icon-faxian{
      color: #fff;
    }
  }
  .profile-yinsi{
    margin: 23px auto;
    text-align: center;
    font-size: 14px;
    a{
      color: #1868e0;
    }
  }
}
</style>
