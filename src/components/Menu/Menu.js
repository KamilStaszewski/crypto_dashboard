import React, { Component } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
	padding: 0 200px

	@media (max-width: 768px) {
    padding: 0 10px;
		margin: 0 auto;
		display: flex;
		justify-content: flex-end;
	}

	@media (max-width: 1024px) {
    padding: 0 50px;
		margin: 0 auto;
}
`
const StyledNav = styled.nav`
	width: 100%;
`
const StyledNavItemList = styled.ul`
	display: flex;
	justify-content: flex-end;
	list-style: none;
	flex-wrap: wrap;

	@media (max-width: 768px) {
    flex-direction: column;
	}
`
const StyledNavItem = styled.li`
	padding: 10px;
	a {
		color: #252A2D;
	}
	a:hover {
			color: #1890ff;
		}
`

class Menu extends Component {
	constructor(props) {
		super(props)
	
		this.state = {
			 isMobile: 'none'
		};
	};

	showMobile = () => {
		this.setState({
			isMobile: 'block'
		})
		if (this.state.isMobile === 'block') {
			this.setState({
				isMobile: 'none'
			})
		}
	};
	

	
	render() {
		return (
			<StyledWrapper>
				<i className="fas fa-bars" onClick={this.showMobile} ></i>
				<StyledNav style={{display: `${this.state.isMobile}`}}>
					<StyledNavItemList>
						<StyledNavItem>
							<a href="http://">Home</a>
						</StyledNavItem>
						<StyledNavItem>
							<a href="http://">Token</a>					
						</StyledNavItem>
						<StyledNavItem>
							<a href="http://">FAQ</a>
						</StyledNavItem>
						<StyledNavItem>
							<a href="http://">Blog</a>
						</StyledNavItem>
						<StyledNavItem>
							<a href="http://">Contact</a>
						</StyledNavItem>
					</StyledNavItemList>
				</StyledNav>
		</StyledWrapper>
		);
	};
};




export default Menu;
