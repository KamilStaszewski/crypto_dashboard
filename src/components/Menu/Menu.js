import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
	margin: 1 auto;
	padding: 0 100px
`
const StyledNav = styled.nav`
	display: flex;
`
const StyledNavItemList = styled.ul`
	display: flex;
	list-style: none;
`
const StyledNavItem = styled.li`
	
`

const Menu = () => {
  return (
	<StyledWrapper>
		<StyledNav>
			<StyledNavItemList>
				<StyledNavItem>
					Home
				</StyledNavItem>
				<StyledNavItem>
					Token
				</StyledNavItem>
				<StyledNavItem>
					FAQ
				</StyledNavItem>
				<StyledNavItem>
					Blog
				</StyledNavItem>
				<StyledNavItem>
					Contact
				</StyledNavItem>
			</StyledNavItemList>
		</StyledNav>
	</StyledWrapper>
  )
}

export default Menu
