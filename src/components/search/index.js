import React, { Component } from "react";
import { Input, Button, Row, Col } from "antd";

const Search = Input.Search;

class SearchInput extends Component {
  render() {
    return (
      <Row gutter={16}>
        <Col span="18">
          <Search
            placeholder="请输入院名"
            enterButton="搜索"
            size="large"
            onSearch={value => console.log(value)}
          />
        </Col>
        <Col span="6">
          <Button type="primary"  size="large" ghost>地图查找</Button>
        </Col>
      </Row>
    );
  }
}

export default SearchInput;
