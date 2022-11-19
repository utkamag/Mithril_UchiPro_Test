import m from 'mithril'
import axios from "axios";

export function AddToken() {
    var token = ""

    async function AddToken() {
        await axios
            .post("https://vuekez.herokuapp.com/tokens",
                {"token": `${token}`, "url": "test2!"})
    }

    function cancelToken() {
        m.route.set("/")
    }

    function view() {
        return m(".container", {style: {display: "block", "text-align": "center"}}, [
            m("h1", "Вы хотите добавить?"),
            m("input", {style: {"margin": "3px"}, placeholder: "Введите токен...", value: token}),
            m("input", {placeholder: "Введите url..."}),
            m(".buttons", {style: {"margin-top": "15px"}}, [
                m("button", {style: {"margin-right": "7px"}, onclick: () => AddToken()}, "Добавить"),
                m("button", {onclick: () => cancelToken()}, "Отмена")
            ])
        ])
    }

    return {view}
}