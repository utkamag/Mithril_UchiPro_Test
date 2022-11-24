import m from 'mithril'
import {TokenList} from "./TokenList";
import {UrlList} from "./UrlList";
import {Preloader} from "./Preloader";
import {AxiosBaseUrl} from "./AxiosBaseUrl";


export function AllTokens() {

    const getAllData = async () => {
        const response = await AxiosBaseUrl.get('tokens')
        try {
            const data = response.data
            localStorage.setItem("array", JSON.stringify(data))
        } catch (error) {
            console.log(error.response)
        }
    }


    m.mount(getAllData())

    // Подключаем preloader

    window.onload = function preloader() {
        let preloader = document.querySelector(".preloader")
        setTimeout(() => preloader.style.display = 'none', 500)
    }


    function linkToHomePage() {
        m.route.set('/')
    }


    function view() {

        return m(".tokens__container", [
            m(".tokens__title", {onclick: linkToHomePage}, "Mithril_UchiPro_Test"),
            m("table", {class: "tokens__tokens"}, [
                m(".token__list", {class: "token__list"},
                    [m(".tokens__subtitle", "Токены"), m("td", {cellSpacing: "12px"}, [m(TokenList)])]),
                m(".tokens__urls", [
                    m(".tokens__subtitle", "Url"), m("td", {cellSpacing: "12px"}, [m(UrlList)])
                ]),
            ]),
            m(Preloader)
        ])
    }


    return {view}
}

