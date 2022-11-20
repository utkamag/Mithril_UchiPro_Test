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
        return m(".container", {style: {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                "margin-top": "200px",
                cursor: "default"
            }}, [
            m("h1", {style: {color: "#2c3e50", padding: "18px", width: "100%"}}, `Mithril_UchiPro_Test`),
            m(".buttons", {style:{display: "flex", justifyContent: "center"}}, [
                m("button", {style: {
                    margin: "10px",
                    padding: "12px",
                    background: "white",
                    cursor: "pointer"}, onclick:linkAll}, "Все токены"),
                m("button[style=margin-top:10px, border-radius: 15px;]", {style: {
                        margin: "10px",
                        padding: "12px",
                        background: "white",
                        cursor: "pointer"}, onclick:linkAdd }, "Добавить токены")
            ]),
        ])
    }



    return { view }
}
