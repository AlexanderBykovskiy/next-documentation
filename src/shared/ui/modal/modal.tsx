"use client"

import React from "react";
import { createPortal } from "react-dom";

export const Modal: React.FC<React.PropsWithChildren> = ({children}) => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => setMounted(true), []);

    return mounted ? createPortal(<div style={{position: 'absolute'}}>{children}</div>, document.body) : null;
}
