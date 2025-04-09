import { _decorator, AudioSource, AudioClip, assetManager } from 'cc';
import { Env } from '../../game/Env';
const { ccclass, property } = _decorator;

import ResourceManager from "../resoure_manager";


@ccclass('AudioEffect')
export class AudioEffect extends AudioSource {

    private effects: Map<string, AudioClip> = new Map<string, AudioClip>();
    private playingAudios = []

    onLoad() {
        console.log("TEST:最大同时播放音频数", AudioSource.maxAudioChannel)
    }

    public load(bundleName: string, url: string, loop = false, volume = 1, callback?: Function) {
        let bundle = assetManager.getBundle(bundleName)
        if (!bundle) {
            console.log(bundleName, " is release! dont play sound:", url)
            return;
        }
        ResourceManager.loadBundle(bundleName, url, AudioClip, null, (err: Error | null, clip: AudioClip) => {
            if (err) {
                callback && callback(err);
                return
            }
            if (!this || !this.isValid || !this.node || !this.node.isValid) {
                return
            }
            if (!clip || !clip.isValid) {
                return
            }

            this.effects.set(url, clip);
            this.clip = clip
            if (Env.IsAndroid) {
                let playingCount = jsb.AudioEngine.getPlayingAudioCount()
                if (playingCount + 1 >= AudioSource.maxAudioChannel) {//停掉前面重复的声音
                    let hasStop = false
                    for (let i = 0; i < this.playingAudios.length; i++) {
                        if (this.playingAudios[i].duration < 1) {
                            if (this.playingAudios[i]) {
                                jsb.AudioEngine.stop(this.playingAudios[i].id)
                                this.playingAudios.splice(i, 1)
                                hasStop = true
                                break
                            }
                        }
                    }
                    if (!hasStop) {
                        if (this.playingAudios[0]) {
                            jsb.AudioEngine.stop(this.playingAudios[0].id)
                            this.playingAudios.splice(0, 1)
                        }
                    }
                }
                let id = jsb.AudioEngine.play2d(clip.nativeUrl, loop, volume)
                let data: any = {}
                data.url = url
                data.nativeUrl = clip.nativeUrl
                data.id = id
                data.loop = loop
                data.duration = clip.getDuration()
                this.playingAudios.push(data)
                jsb.AudioEngine.setFinishCallback(id, () => {
                    if (!this || !this.isValid || !this.node || !this.node.isValid) {
                        return
                    }
                    for (let i = 0; i < this.playingAudios.length; i++) {
                        if (this.playingAudios[i] && this.playingAudios[i].id == id) {
                            this.playingAudios.splice(i, 1)
                        }
                    }
                })
            } else {
                if (loop) {
                    this.loop = true
                    this.play()
                } else {
                    this.playOneShot(clip);
                }
            }
            callback && callback();
        })
    }

    public close() {
        this.stop()
    }

    release() {
        for (let key in this.effects) {
            ResourceManager.releaseAsset(this.effects[key])
        }
        this.effects.clear();
    }
}