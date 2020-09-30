import React from 'react';
import {Container, Header, Matches, Messages, Card, MessagesItem, Navbar, Navbaritem} from './styles/SidebarStyles';

export default function Sidebar({children}) {
    return (
        <div>{children}</div>
    );
}

Sidebar.Container = function SidebarContainer({children}) {
    return <Container>{children}</Container>;
};

Sidebar.Header = function SiderbarHeader({children})  {
    return <Header>{children}</Header>;
};

Sidebar.Matches = function SidebarMatches({children})  {
    return <Matches>{children}</Matches>;
};

Sidebar.Messages = function SidebarMessages({children}) {
    return <Messages>{children}</Messages>;
};

Sidebar.Card = function SidebarCard({children}) {
    return <Card>{children}</Card>;
};

Sidebar.MessagesItem = function SidebarMessagesItem({children}) {
    return <MessagesItem>{children}</MessagesItem>;
};

Sidebar.Navbar = function SidebarNavbar({children}){
    return <Navbar>{children}</Navbar>
}

Sidebar.NavbarItem = function SidebarNavbarItem({children}){
    return <Navbar>{children}</Navbar>
}
