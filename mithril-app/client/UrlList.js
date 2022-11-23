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
            return m("tr", {onclick: () => linkDeleteToken(index, item)}, [
                item.url, m("td", {class: "url__button"}, "☒")])
        })
    }


    return {view}
}