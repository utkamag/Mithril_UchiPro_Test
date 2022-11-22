import m from 'mithril'
import {AllDataArray} from "./Array";


export function UrlList() {

    function linkDeleteToken(index, item) {
        localStorage.setItem("url", JSON.stringify(item))
        AllDataArray.splice(index, 1)
        m.route.set("/delete")
    }


    function view() {
        return AllDataArray.map((item, index) => {
            return m("tr", {class: ".url__list", onclick: () => linkDeleteToken(index, item)}, [
                item.url, m("span", {class: "url__button"}, "☒")])
        })
    }


    return {view}
}