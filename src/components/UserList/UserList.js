import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100px;
`
const StyledCol = styled.div`
    flex: 1 1 auto;
    background: red;
    margin: 1px;
`


const UserList = ({ data }) => {
  if(!data){
      return <h1>Loading...</h1>
  }

  console.log(data)

  return (
        <StyledRow>
            {
                data.map((element, index) => {
                    return  (
                        <StyledCol>
                            <p>{element.name}</p>
                        </StyledCol>
                            )
                })
            }        
        </StyledRow>
  );
};

UserList.propTypes = {
    data: PropTypes.array
  };

export default UserList;
