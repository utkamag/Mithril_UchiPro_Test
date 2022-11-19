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
        return m(".container", {
            style: {
                display: "flex",
                flexWrap: "wrap",
                textAlign: "center",
                "margin-top": "20px",
                cursor: "default",
            },
        }, [
            m("h1", {style: {width: "100%", cursor: "pointer"}, onclick: linkToHomePage}, "Mithril_UchiPro_Test"),
            m(".tokens", {
                style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "10px",
                    "border-radius": "15px",
                    width: "max-content",
                    backgroundColor: "#C7D0CC",
                    margin: "0 auto"
                }
            }, [
                m(".tokens", {style: {display: "flex", flexDirection: "column"}},
                    [m("div", {style: {fontWeight: "bold", fontSize: "17px"}}, "Токены"), m("div", [m(TokenList)]),
                    ]),
                m(".urls", {style: {display: "flex", flexDirection: "column"}},
                    [m("div", {style: {fontWeight: "bold", fontSize: "17px"}}, "Url"), m("div", [m(UrlList)])
                    ]),

            ]),
        ])
    }

    return {view}
}

