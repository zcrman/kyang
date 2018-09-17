import React, { Component } from "react";
import { Menu, Row, Col } from "antd";
import styles from "./header.css";

 class Header extends Component{
     render(){
         return(
            <header>
            <div className={styles.sitenav}>
              <Row>
                <Col span={8}>啊实打实大11</Col>
                <Col span={8}>
                  <Menu
                    theme="dark"
                    className={styles.sitemenu}
                    mode="horizontal"
                    defaultSelectedKeys={["1"]}
                    style={{ lineHeight: "56px" }}
                  >
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                  </Menu>
                </Col>
                <Col span={8}>啊实打实大11</Col>
              </Row>
            </div>
          </header>
         );
     };
 }

 export default Header;