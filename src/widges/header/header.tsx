import React from "react";
import "./style.scss";
import Image from "next/image";

export const Header: React.FC = () => {

    return(
        <header>
            <Image src="/next.svg" alt="logo" width={150} height={30}/>
            <div className="title">Документация на русском</div>
        </header>
    )
}
