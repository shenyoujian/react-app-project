import React, { Component } from "react";
import { NavBar, Icon, InputItem, WingBlank, Button, Modal } from "antd-mobile";

export default class RegisterPhone extends Component {
  componentDidMount() {
    //弹窗一到页面就出现
    const alert = Modal.alert;
    alert(
      "注册协议及隐私政策",
      <div>
        在您注册成为硅谷用户的过程中，您需要完成我们的注册流程并通过点击同意的形式在线签署以下协议，请您务必仔细阅读、充分理解协议中的条款内容后再点击同意（尤其是以粗体并下划线标识的条款，因为这些条款可能会明确您应履行的义务或对您的权利有所限制）：
      </div>,
      [
        {
          text: "不同意",

          onPress: () => {
            console.log(this.props);
            const from = this.props.location.state.from;
            this.props.history.replace(from);
          },
        },
        { text: "同意", style: { backgroundColor: "red", color: "#fff" } },
      ]
    );
  }
  render() {
    return (
      <div className="page-bg-color">
        <NavBar
          mode="light"
          icon={<Icon type="left" className="left-black" />}
          onLeftClick={(e) => {
            const from = this.props.location.state.from;
            this.props.history.replace(from);
          }}
        >
          硅谷注册
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
          <WingBlank>
            <div>
              <Button type="warning" disabled className="register-btn">
                注册
              </Button>
            </div>
          </WingBlank>
        </WingBlank>
      </div>
    );
  }
}
