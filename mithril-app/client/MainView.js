import m from 'mithril';


export function MainView() {

    function link1 () {
        m.route.set('/all')
    }

    function link2 () {
        m.route.set('/all')
    }



    function view() {
        return m(".container", {style: {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
                "margin-top": "240px",
                cursor: "default"
            }}, [
            m("h1", {style: {color: "#2c3e50", padding: "18px", width: "100%"}}, `Mithril_UchiPro_Test`),
            m(".buttons", {style:{display: "flex", justifyContent: "center"}}, [
                m("button", {style: {
                    margin: "10px",
                    padding: "12px",
                    background: "white",
                    cursor: "pointer"}, onclick:link1}, "Все токены"),
                m("button[style=margin-top:10px, border-radius: 15px;]", {style: {
                        margin: "10px",
                        padding: "12px",
                        background: "white",
                        cursor: "pointer"}, onclick:link2 }, "Добавить токены")
            ]),
        ])
    }



    return { view }
}
