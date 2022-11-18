import m from 'mithril'
import {Array} from "./Array";


export function TokenList() {
    function view() {

        return Array.map((item, index) => {
            return m("div", {style: {margin: "12px"}}, item.token)
        })
    }

    return {view}
}