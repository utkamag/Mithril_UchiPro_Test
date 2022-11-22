import m from 'mithril';


export function MainView() {

    function linkAll () {
        m.route.set('/all')
        setTimeout(() => window.location.reload(), 300)
    }

    function linkAdd () {
        m.route.set('/add')
    }

    function view() {
        return m(".main__container", [
            m(".main__title", `Mithril_UchiPro_Test`),
            m(".main__buttons", [
                m("button", {class:"main__button", onclick:linkAll}, "Все токены"),
                m("button", {class:"main__button-second",onclick:linkAdd }, "Добавить токены")
            ]),
        ])
    }



    return { view }
}
