import m from 'mithril'
import {TokenList} from "./TokenList";
import {UrlList} from "./UrlList";
import axios from "axios";


export function AllTokens() {

    const getArray = async () => {
        const response = await axios.get("https://vuekez.herokuapp.com/tokens")
        try {
            const data = response.data
            console.log(data)
            localStorage.setItem("array", JSON.stringify(data))
        } catch (error) {
            console.log(error.response)
        }
    }

    m.mount(getArray())


    function linkToHomePage() {
        m.route.set('/')
    }


    function view() {
        return m(".tokens__container", [
            m(".tokens__title", {onclick: linkToHomePage}, "Mithril_UchiPro_Test"),
            m(".tokens__tokens", [
                m(".tokens__list",
                    [m(".tokens__subtitle", "Токены"), m("div", [m(TokenList)]),
                    ]),
                m(".tokens__urls", [
                    m(".tokens__urls-items", "Url"), m("div", [m(UrlList)])
                    ]),
            ]),
        ])
    }

    return {view}
}

