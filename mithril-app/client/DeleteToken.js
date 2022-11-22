import m from 'mithril'
import axios from "axios";


export function DeleteToken() {

    const url = JSON.parse(localStorage.getItem("url"));

    async function deleteToken() {
        await axios
            .delete(`https://vuekez.herokuapp.com/tokens/${url._id}`)
            .catch(error => console.log(error))
        alert("Токен успешно удален!")
        m.route.set("/all")
    }

    function cancelToken() {
        m.route.set("/all")
        location.reload()
    }



    function view() {
        return m(".delete__container", [
            m(".delete__title", `Вы точно хотите удалить данный токен:`),
            m(".delete__token", `Токен: ${url.token}`),
            m(".delete__url", `URL: ${url.url}`),
            m(".delete__buttons", [
               m("button",  {class:"delete__button-delete",onclick: () => deleteToken()}, "Удалить"),
               m("button", {onclick: () => cancelToken()}, "Отмена")
            ])
        ])
    }
    return {view}
}