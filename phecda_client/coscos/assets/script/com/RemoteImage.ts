
import { _decorator, Component, Node, Sprite, SpriteFrame, sys } from 'cc';
import { SpriteManager } from '../manager/sprite_manager';
const { ccclass, property } = _decorator;

@ccclass('RemoteImage')
export class RemoteImage extends Sprite {
    get spriteFrame(): SpriteFrame | null{
        return super.spriteFrame;
    }
    set spriteFrame(value: SpriteFrame | null){
        if(SpriteManager.instance && super.spriteFrame){
            SpriteManager.instance.decRef(super.spriteFrame);
        }
        super.spriteFrame = value;
    }

    onDestroy(){
        if(SpriteManager.instance && super.spriteFrame){
            SpriteManager.instance.decRef(super.spriteFrame);
        }
        super.onDestroy();
    }
}
