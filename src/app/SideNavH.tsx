"use client";
import React, { ReactNode } from "react";
import { HiOutlineHome, HiOutlineCog, HiOutlineUser, HiOutlineMail, HiOutlineKey, HiOutlineGlobeAlt, HiOutlineChartBar, HiOutlineUsers, HiOutlineUserCircle, HiOutlineCreditCard, HiOutlineShieldCheck } from "react-icons/hi";
import Dropdown from "../components/ui/Dropdown";

const menuTree = {
    "id": "root",
    "label": "Main Menu",
    "icon": <HiOutlineHome />,
    "children": [
        {
            "id": "1",
            "label": "Settings",
            "icon": <HiOutlineCog />,
            "children": [
                {
                    "id": "1-1",
                    "label": "Account",
                    "icon": <HiOutlineUser />,
                    "link": "/settings/account",
                    "children": [
                        {
                            "id": "1-1-1",
                            "label": "Change Email",
                            "icon": <HiOutlineMail />,
                            "link": "/settings/account/change-email",
                            "children": [
                                {
                                    "id": "1-1-1-1",
                                    "label": "Change Email 1",
                                    "link": "/settings/account/change-email/1"
                                },
                                {
                                    "id": "1-1-1-2",
                                    "label": "Change Email 2",
                                    "link": "/settings/account/change-email/2"
                                }
                            ]
                        },
                        {
                            "id": "1-1-2",
                            "label": "Change Password",
                            "icon": <HiOutlineKey />,
                            "link": "/settings/account/change-password"
                        }

                    ]
                },
                {
                    "id": "1-2",
                    "label": "Security",
                    "icon": <HiOutlineShieldCheck />,
                    "link": "/settings/security"
                },
                {
                    "id": "1-3",
                    "label": "Profile",
                    "icon": <HiOutlineUserCircle />,
                    "link": "/settings/profile"
                },
                {
                    "id": "1-4",
                    "label": "Billing",
                    "icon": <HiOutlineCreditCard />,
                    "link": "/settings/billing"
                }
            ]
        },
        {
            "id": "2",
            "label": "App",
            "icon": <HiOutlineGlobeAlt />,
            "children": [
                {
                    "id": "2-1",
                    "label": "Dashboard",
                    "icon": <HiOutlineChartBar />,
                    "link": "/app/dashboard"
                },
                {
                    "id": "2-2",
                    "label": "Users",
                    "icon": <HiOutlineUsers />,
                    "link": "/app/users"
                }
            ]
        }
    ]
}
const MenuContent = ({ icon, label }: { icon: ReactNode, label: string }) => {
    return (
        <div className="flex items-center gap-2">
            <span>{icon}</span>
            <span>{label}</span>
        </div>
    )
}
/** 
<Dropdown title="Click Me!">
            <Dropdown.Item>Item 1</Dropdown.Item>
            <Dropdown.Menu title="Right Item 2">
                <Dropdown.Menu title="Item 2-1">
                    <Dropdown.Item active>Item 2-1-1</Dropdown.Item>
                    <Dropdown.Item>Item 2-1-2</Dropdown.Item>
                    <Dropdown.Item>Item 2-1-3</Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Item>Item 2-2</Dropdown.Item>
                <Dropdown.Item>Item 2-3</Dropdown.Item>
            </Dropdown.Menu>
            <Dropdown.Menu title="Right Item 3">
                <Dropdown.Menu title="Item 3-1">
                    <Dropdown.Item>Item 3-1-1</Dropdown.Item>
                    <Dropdown.Item>Item 3-1-2</Dropdown.Item>
                    <Dropdown.Item>Item 3-1-3</Dropdown.Item>
                </Dropdown.Menu>
                <Dropdown.Item>Item 3-2</Dropdown.Item>
                <Dropdown.Item>Item 3-3</Dropdown.Item>
            </Dropdown.Menu>
            <Dropdown.Item>Item 4</Dropdown.Item>
        </Dropdown>
        **/
function Item({ item }: any) {
    if (item.children) {
        return (
            <Dropdown.Menu placement="bottom-start" key={item.id} title={item.label} eventKey={item.id}>
                {item.children.map((child) => (
                    <Item item={child} key={child.id} />
                ))}
            </Dropdown.Menu>
        );
    } else {
        return (
            <Dropdown.Item key={item.id} eventKey={item.id}>
                <MenuContent icon={item.icon} label={item.label} />
            </Dropdown.Item>
        );
    }
}

export const SideNav: React.FC = () => {
    return (
        <Dropdown placement="bottom-end" title="Click Me!" >
            {menuTree.children.map((group) => (
                <Item item={group} key={group.id} />
            ))}
        </Dropdown>

    );
};


