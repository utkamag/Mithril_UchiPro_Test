import m from 'mithril'
import {Array} from "./Array";


export function TokenList() {
    function view() {

        return Array.map((item, index) => {
            return m(".list__token", item.token)
        })
    }

    return {view}
}