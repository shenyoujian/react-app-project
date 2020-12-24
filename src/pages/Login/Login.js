import React, { Component } from "react";
import { NavBar, Icon, InputItem, WingBlank, Button } from "antd-mobile";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    console.log("login组件加载");
    return (
      <div className="page-bg-color">
        <NavBar
          mode="light"
          icon={<Icon type="left" className="left-black" />}
          onLeftClick={(e) => {
            console.log(this.props);
          }}
        >
          硅谷注册登录
        </NavBar>
        <WingBlank>
          <InputItem clear placeholder="请输入手机号">
            <div className="ipt-phone">
              <span>+86</span>&nbsp;&nbsp;
              {<Icon type="down"></Icon>}
            </div>
          </InputItem>
        </WingBlank>
        <WingBlank>
          <div className="ipt-code">
            <InputItem clear placeholder="请输入手机验证码"></InputItem>
            <button className="code-btn">获取验证码</button>
          </div>
        </WingBlank>
        <WingBlank>
          <WingBlank>
            <div>
              <Button type="warning" disabled className="login-btn">
                登录
              </Button>
            </div>
          </WingBlank>
        </WingBlank>
        <WingBlank>
          <WingBlank>
            <div className="links">
              <Link to="/RegisterPhone" className="link">
                账号密码登录
              </Link>
              {/*这里不能用Link跳转应该使用编程式js来控制跳转，因为我们要使用replace而不用push，因为replace直接替换*/}
              <a
                href="#"
                onClick={(e) => {
                  this.props.history.replace("./RegisterPhone", {
                    from: "/Login",
                  });
                  e.preventDefault();
                }}
              >
                手机快速注册
              </a>
            </div>
          </WingBlank>
        </WingBlank>

        <WingBlank>
          <div className="line">
            <div></div>
            其他登录方式
            <div></div>
          </div>
        </WingBlank>
        <WingBlank>
          <div className="other-icon">
            <span className="iconfont icon-logo-github"></span>
            <span className="iconfont icon-weixin"></span>
            <span className="iconfont icon-qq"></span>
          </div>
        </WingBlank>
        <WingBlank>
          <div className="copy-right">
            未注册的手机号验证后将自动创建硅谷账号,登录即代表您已同意
            <a href="#">硅谷隐私政策</a>
          </div>
        </WingBlank>
      </div>
    );
  }
}
