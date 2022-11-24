import m from 'mithril'
import {AllDataArray} from "./Array";


export function TokenList() {
    function view() {
        // Тут лишний символ "☒", у него свойство visibility: hidden. Он тут нужен что-бы ряды не съезжали
        return AllDataArray.map((item, index) => {
            return m("tr", item.token, [m("td", {class: "url__button-none"}, "☒")])
        })
    }

    return {view}
}