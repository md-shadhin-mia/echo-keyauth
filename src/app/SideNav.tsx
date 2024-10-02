"use client";
import React from "react";
import Menu from "../components/ui/Menu/index.tsx";
import { HiOutlineHome, HiOutlineCog, HiOutlineUser, HiOutlineMail, HiOutlineKey, HiOutlineGlobeAlt, HiOutlineChartBar, HiOutlineUsers, HiOutlineUserCircle, HiOutlineCreditCard, HiOutlineShieldCheck } from "react-icons/hi";

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

function Item({ item }: any) {
    if (item.children) {
        return (
            <Menu.MenuCollapse
                eventKey={item.id}
                label={
                    <MenuContent icon={item.icon} label={item.label} />
                }
                key={item.id}
            >
                {item.children.map((child) => (
                    <Item item={child} key={child.id} />
                ))}
            </Menu.MenuCollapse>
        );
    } else {
        return (
            <Menu.MenuItem eventKey={item.id} key={item.id}>
                <MenuContent icon={item.icon} label={item.label} />
            </Menu.MenuItem>
        );
    }
}

export const SideNav: React.FC = () => {
    return (
        <aside className="max-h-screen min-h-screen  bg-white dark:bg-gray-800 max-w-xs">
            <Menu variant="transparent">
                {menuTree.children.map((group) => (
                    <Menu.MenuGroup key={group.id} label={group.label} className="overflow-hidden text-gray-900 dark:text-gray-300">
                        {group.children.map((item) => (
                            <Item item={item} key={item.id} />
                        ))}
                    </Menu.MenuGroup>
                ))}
            </Menu>

        </aside>
    );
};


