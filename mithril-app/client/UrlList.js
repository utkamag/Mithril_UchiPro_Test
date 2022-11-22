import m from 'mithril'
import {Array} from "./Array";


export function UrlList() {

    function linkDelete(index, item) {
        localStorage.setItem("url", JSON.stringify(item))
        Array.splice(index, 1)
        m.route.set("/delete")
    }


    function view() {
        return Array.map((item, index) => {
            return m(".url__list", {onclick: () => linkDelete(index, item)}, [
                item.url, m(".url__button", "☒")])
        })
    }


    return {view}
}