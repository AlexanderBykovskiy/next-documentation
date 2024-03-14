import {mainMenuConfig} from "@/src/app/configs/main-menu.config";
import {typeMenuItem} from "@/src/shared/types/main-menu-config.types";

const findSlugInMenu = (arr: typeMenuItem[], slug: string): typeMenuItem | null => {
    let menuItem = null
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].id === slug) {
            menuItem = arr[i];
            break;
        }
        if (arr[i].children !== undefined) {
            menuItem = findSlugInMenu(arr[i].children!, slug)
            break;
        }
    }
    return menuItem
}

export const GetUriBySlug = (slug: string) => {
    if (!slug) return null

    return findSlugInMenu(mainMenuConfig, slug)
}
