import m from 'mithril'
import {AllDataArray} from "./Array";


export function TokenList() {
    function view() {

        return AllDataArray.map((item, index) => {
            return m("tr", {class:"list__token"}, item.token)
        })
    }

    return {view}
}