import m from 'mithril'

export function Preloader() {
    function view() {
        return m("div", {class: "preloader"}, [
            m("div", {class: "preloader__text"}, "Загрузка...")
        ])
    }
    return {view}
}