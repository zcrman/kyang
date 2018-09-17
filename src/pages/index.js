import React, { Component } from "react";
import { Row, Col, Carousel } from "antd";
import Header from './header';
import SearchInput from '@/components/search';
import HomeList from '@/components/homeList';

import styles from "./index.css";

class BasicLayout extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Row>
          <Col span={24}>
            <Carousel className={styles.kyangCar} autoplay>
                <div><h3>1</h3></div>
                <div><h3>2</h3></div>
                <div><h3>3</h3></div>
                <div><h3>4</h3></div>
            </Carousel>
          </Col>
        </Row>
        <Row type="flex" justify="center" className={styles.searchRow}>
          <Col span={8}>
              <SearchInput></SearchInput> 
          </Col>
        </Row>
        <div className={styles.homeList}>
          <HomeList></HomeList>
        </div>
      </div>
    );
  }
}

export default BasicLayout;
