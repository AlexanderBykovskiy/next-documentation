import React from "react";
import "./styles.scss"

export const Footer: React.FC = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div>
                Copyright © 2023-{currentYear}. <a href="https://github.com/AlexanderBykovskiy" target="_blank" className="hover:underline">
                    Alexander Bykovskiy
                </a>
            </div>
        </footer>
    )
}
