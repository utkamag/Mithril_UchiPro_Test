import m from 'mithril'
import {AxiosBaseUrl} from "./AxiosBaseUrl";


export function DeleteToken() {

    const TokenID = JSON.parse(localStorage.getItem("url"));

    async function deleteToken() {
        await AxiosBaseUrl
            .delete(`tokens/${TokenID._id}`)
            .catch(error => console.log(error))
        alert("Токен успешно удален!")
        m.route.set("/all")
        setTimeout(() => location.reload(), 500)
    }

    function cancelToken() {
        m.route.set("/all")
        setTimeout(() => location.reload(), 500)
    }



    function view() {
        return m(".delete__container", [
            m(".delete__title", `Вы точно хотите удалить данный токен:`),
            m(".delete__token", `Токен: ${TokenID.token}`),
            m(".delete__url", `URL: ${TokenID.url}`),
            m(".delete__buttons", [
               m("button",  {class:"delete__button-delete",onclick: () => deleteToken()}, "Удалить"),
               m("button", {onclick: () => cancelToken()}, "Отмена")
            ])
        ])
    }
    return {view}
}