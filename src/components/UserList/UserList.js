import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    padding: 100px;
    @media (max-width: 768px) {
        padding: initial;
    }
`
const StyledCol = styled.div`
    flex: 1 1 auto;
    margin: 1px;
`

const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    width: 100%;
    background: #ccc;
`


const UserList = ({ users }) => {
  if(!users){
      return <h1>Loading...</h1>
  }

  return (
        <StyledRow>
            {
                users.map((element, index) => {
                    return  (
                        <StyledCol key={index}>
                            <StyledCard>
                                <h2>Full name: {element.name}</h2>
                                <p>
                                    Username: {element.username}
                                </p>
                                <p>
                                    Phone: {element.phone}
                                </p>
                                <p>
                                    Website: <a href={element.website}>See users website</a>
                                </p>
                            </StyledCard>
                        </StyledCol>
                            )
                })
            }        
        </StyledRow>
  );
};

UserList.propTypes = {
    users: PropTypes.array
  };

export default UserList;
