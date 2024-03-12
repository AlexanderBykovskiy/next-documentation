'use client'

import React from "react";
import './style.scss'
import {mainMenuConfig} from "@/src/app/configs/main-menu.config";
import Link from "next/link";
import {usePathname} from "next/navigation";
import clsx from "clsx";

export const MainMenu: React.FC = () => {

    const pathname = usePathname();

    return(
        <nav>
            {mainMenuConfig.map(item => {
                const isCurrentPage = (item.link === '/' && pathname === item.link) || (item.link !== '/' && pathname?.startsWith(item.link))
                return(
                    <div key={item.id}  className="menu-item">
                        <Link href={item.link} className={clsx({"active": isCurrentPage})}>{item.title}</Link>
                    </div>
                )
            })}
        </nav>
    )
}
