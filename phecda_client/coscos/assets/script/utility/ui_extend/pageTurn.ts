
import { _decorator, Component, Node, Label } from 'cc';
import Utility from '../utility';
const { ccclass, property } = _decorator;

interface PageTurnListerners {
    Previous: Function,
    Next: Function,
}

@ccclass('PageTurn')
export class PageTurn extends Component {

    @property(Node)
    previous: Node
    @property(Node)
    next: Node
    @property(Label)
    page: Label

    private listeners: PageTurnListerners = {
        Previous: () => {},
        Next: () => {}
    }

    setListeners(listeners: PageTurnListerners) {
        this.listeners = listeners
        Utility.instance.onButtonClick(this.previous, this.listeners.Previous)
        Utility.instance.onButtonClick(this.next, this.listeners.Next)
    }

    setPage(cur: number, total: number) {
        this.page.string = `${cur}/${total}`
    }
}