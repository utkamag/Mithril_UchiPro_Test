import m from 'mithril'
import axios from "axios";


export function DeleteToken() {

    const url = JSON.parse(localStorage.getItem("url"));

    async function deleteToken() {
        await axios
            .delete(`https://vuekez.herokuapp.com/tokens/${url._id}`)
            .catch(error => console.log(error))
        m.route.set("/all")
    }

    function cancelToken() {
        m.route.set("/all")
        location.reload()
    }



    function view() {
        return m(".container", {style:{display: "block", "text-align": "center"}}, [
            m("h2", `Вы точно хотите удалить данный токен:`),
            m("div", `Токен: ${url.token}`),
            m("div", `URL: ${url.url}`),
            m(".buttons", [
               m("button", {onclick: () => deleteToken()}, "Удалить"),
               m("button", {onclick: () => cancelToken()}, "Отмена")
            ])
        ])
    }
    return {view}
}