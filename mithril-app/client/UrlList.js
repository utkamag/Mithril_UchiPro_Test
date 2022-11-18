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
            return m("div", {
                style: {display: "flex", alignItems: "center", margin: "10px"},
                onclick: () => linkDelete(index, item)
            }, [item.url, m("div", {
                style: {
                    justifyContent: "flex-end",
                    "margin-left": "5px",
                    cursor: "pointer"
                }
            }, "☒")])
        })
    }


    return {view}
}