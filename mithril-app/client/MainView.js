import m from 'mithril';


export function MainView() {

    function linkAllToken() {
        m.route.set('/all')
        setTimeout(() => window.location.reload(), 300)
    }

    function linkAddToken() {
        m.route.set('/add')
    }

    function view() {
        return m(".main__container", [
            m(".main__title", `Mithril_UchiPro_Test`),
            m(".main__buttons", [
                m("button", {class: "main__button", onclick: linkAllToken}, "Все токены"),
                m("button", {class: "main__button-second", onclick: linkAddToken}, "Добавить токены")
            ]),
        ])
    }


    return {view}
}
