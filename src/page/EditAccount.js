import React from "react";
import HeaderEdit from "../components/EditAccount/HeaderEdit/HeaderEdit";
import FooterEdit from "../components/EditAccount/FooterEdit/FooterEdit";
import EditList from "../components/EditAccount/ContentEdit/EditList/EditList";
function EditAccount() {
    return(
        <div className="ml-[500px]">
            <HeaderEdit/>
            <EditList/>
            <FooterEdit/>
        </div>
    )
}
export default EditAccount;