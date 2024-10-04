"use client"
import Button from "@/components/ui/Button";
import Dropdown from "@/components/ui/Dropdown";
import Select from "@/components/ui/Select";
import { components, MenuListProps } from "react-select";
import AddRealm from "./AddRealm";
import { FaPlus } from "react-icons/fa";
import React, { useContext, useState } from "react";

export const AddRealmFromContext = React.createContext({
    open: false,
    setOpen: (open: boolean) => { }
});

// Custom MenuList with a button
const CustomMenuList = (props: MenuListProps) => {
    const { setOpen } = useContext(AddRealmFromContext)
    return (
        <>
            <components.MenuList {...props}>
                {props.children}
                <div className="w-full p-2">
                    <Button variant="solid" size="sm" className="w-full" icon={<FaPlus />} onClick={() => setOpen(true)}>Add New</Button>
                </div>
            </components.MenuList>
        </>
    );
};

function SelectRealm() {
    const [open, setOpen] = useState(false);

    return (
        <div >
            <AddRealmFromContext.Provider value={{ open, setOpen }}>
                <Select
                    components={{ MenuList: CustomMenuList }}
                    placeholder="Please Select"
                    options={[

                        {

                            label: "Realm 1",

                            value: "realm1"

                        }
                    ]}

                ></Select>
                <AddRealm />
            </AddRealmFromContext.Provider>
        </div>
    )
}

export default SelectRealm;