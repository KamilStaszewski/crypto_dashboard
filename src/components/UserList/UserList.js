import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Card } from 'antd';

const UserList = ({data}) => {
  if(!data){
      return <h1>Loading...</h1>
  }

  console.log(data)

  return (
      <div className="userlist">
          <Row>
          {
              data.map((element, index) => {
                  return (
                    <Col xs={24} lg={12}>
                        <Card
                            title="Card title"
                            extra={<a href="#">More</a>}
                            style={{ width: `100%` }}
                        >
                        <p>{element.name}</p>
                        </Card>
                    </Col>
                  )
                })
            }          
        </Row>
      </div>
  );
};

UserList.propTypes = {
    data: PropTypes.array
  };

export default UserList;
