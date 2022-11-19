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
            m("h1", `Вы точно хотите удалить данный токен:`),
            m("div", {style:{"font-size": "20px"}}, `Токен: ${url.token}`),
            m("div", {style:{"font-size": "20px"}}, `URL: ${url.url}`),
            m(".buttons", {style:{"margin-top": "15px"}}, [
               m("button",  {style:{"margin-right": "7px"},onclick: () => deleteToken()}, "Удалить"),
               m("button", {onclick: () => cancelToken()}, "Отмена")
            ])
        ])
    }
    return {view}
}