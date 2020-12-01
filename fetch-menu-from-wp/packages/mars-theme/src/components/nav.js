import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
// Basic Menu
const Nav = ({ state }) => {

  const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items

  return (
    <NavContainer>
      {items.map( item => {
        return (
          <NavItem key={item.ID}>
            <Link link={item.url}>{item.title}</Link>
          </NavItem>
        )
      })}
    </NavContainer>
  )

}

/**
 * Menu with sub-menus
 * (if uncommenting this function you should also uncomment the styled components below)
 */
// const Nav = ({ state }) => {
//     const items = state.source.get(`/menu/${state.theme.menuUrl}/`).items
//     // console.log('ITEMS:',items)
//     return (
//       <NavContainer>
//           {items.map( item => {
//             if (!item.child_items) {
//               return (
//                 <NavItem key={item.ID}>
//                   <Link link={item.url}>{item.title}</Link>
//                 </NavItem>
//               )
//             } else {
//               const childItems = item.child_items
//               return (
//                 <NavItemWithChild key={item.ID}>
//                   <NavItem>
//                     <Link link={item.url}>{item.title}</Link>
//                   </NavItem>
//                   <ChildMenu>
//                     {childItems.map( childItem => {
//                       return (
//                         <NavItem key={childItem.ID}>
//                           <Link link={childItem.url}>{childItem.title}</Link>
//                         </NavItem>
//                       )
//                     }) }
//                   </ChildMenu>
//                 </NavItemWithChild>
//               )
//             }
//           }
//         )}
//       </NavContainer>
//     )
// }



export default connect(Nav);

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  /* overflow-x: auto; */
  overflow: hidden;


  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: #fff;
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;

/**
 * Styled components if menu has sub-menu
 */
// const NavItemWithChild = styled.div`
//   /* &:hover {

//   } */
//   background: pink
// `
// const ChildMenu = styled.div`
//   /* display: none; */
//   /* position: absolute; */
//   left: 0;
//   background-color: lightblue;
//   width: 100%;
//   z-index: 1;
// `
