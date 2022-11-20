import m from 'mithril'
import axios from "axios";

export function AddToken() {

    async function AddToken() {
        const inputToken = document.getElementById(1)
        const inputURL = document.getElementById(2)
        if(inputToken.value && inputURL.value) {
            await axios
                .post("https://vuekez.herokuapp.com/tokens",
                    {"token": `${inputToken.value}`, "url": `${inputURL.value}`})
            alert("Данные успешно добавлены на сервер!")
            m.route.set("/all")
            setTimeout(() => window.location.reload(), 500)
        }
        else {
            alert("Введие данные в поля Токен и URL")
        }
    }

    function cancelToken() {
        m.route.set("/")
    }

    function view() {
        return m(".container", {style: {display: "block", "text-align": "center"}}, [
            m("h1", "Вы хотите добавить?"),
            m(".form", [

                m("input", {
                    style: {"margin": "3px"},
                    type: "input",
                    placeholder: "Введите токен...",
                    id: 1,
                    required: "true"
                }),
                m("input", {placeholder: "Введите url...", type: "input", id: 2, required: "true"}),
                m(".buttons", {style: {"margin-top": "15px"}}, [
                    m("button", {
                        style: {"margin-right": "7px"},
                        value: "Добавить",
                        type: "submit",
                        onclick: () => AddToken()
                    }, "Добавить"),
                    m("button", {onclick: () => cancelToken()}, "Отмена")
                ])
            ])
        ])
    }

    return {view}
}