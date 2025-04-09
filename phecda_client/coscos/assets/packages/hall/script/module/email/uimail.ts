
import { _decorator, Component, Node, Sprite, Label, Button } from 'cc';
import Utility from '../../../../../script/utility/utility';
import { netproto } from '../../../proto/hall_proto.js';
const { ccclass, property } = _decorator;

@ccclass('uimail')
export class uimail extends Component {

    @property(Button)
    btn_click: Button;
    @property(Sprite)
    img_unread: Sprite;
    @property(Sprite)
    img_read: Sprite;
    @property(Sprite)
    img_hot: Sprite;
    @property(Label)
    lab_title: Label;
    @property(Label)
    lab_time: Label;
    @property(Label)
    lab_content: Label;
    @property(Node)
    reward_item: Node;
    @property(Node)
    pack_item: Node;

    private _data: netproto.MailDetail;
    public onClickEvent: (data) => {}

    onLoad() {
        this.btn_click.node.on(Button.EventType.CLICK, this.onClick, this)
    }

    public onShow(data: netproto.MailDetail) {
        this._data = data
        this.lab_title.string = Utility.instance.filterPlayerName(data.Title, 8)
        this.lab_content.string = Utility.instance.filterPlayerName(data.Content, 20)
        this.lab_time.string = data.SendTime// + " " + data.ID;
        this.img_unread.node.active = !data.IsRead
        this.img_read.node.active = data.IsRead
        this.img_hot.node.active = !data.IsRead
        this.reward_item.active = data.IsReceive && data.MailAnnexList.length > 0
        this.pack_item.active = !data.IsReceive && data.MailAnnexList.length > 0
    }

    private onClick() {
        if (this.onClickEvent) {
            this.onClickEvent(this._data)
        }
    }
}
