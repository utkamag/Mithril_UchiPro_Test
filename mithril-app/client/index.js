import 'core-js/stable';
import 'regenerator-runtime/runtime';
import m from 'mithril';
import { MainView } from './MainView';
import {AllTokens} from "./AllTokens";
import {DeleteToken} from "./DeleteToken";

m.mount(document.body, MainView);

m.route(document.body, "/", {
    "/": MainView,
    "/all": AllTokens,
    "/delete": DeleteToken
})