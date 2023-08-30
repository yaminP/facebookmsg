"use client";
import React from "react";
import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
    return (
        <FacebookProvider appId="589242146483032" chatSupport>
            <CustomChat pageId="110029272052313" minimized={true} />
        </FacebookProvider>
    )
}
export default FacebookMsg;