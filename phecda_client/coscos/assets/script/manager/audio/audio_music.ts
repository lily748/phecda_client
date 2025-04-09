import { _decorator, AudioSource, AudioClip, assetManager, Game } from 'cc';
import { Env } from '../../game/Env';
import EventManager from '../event_manager';
const { ccclass, property } = _decorator;

import ResourceManager from "../resoure_manager";

@ccclass('AudioMusic')
export class AudioMusic extends AudioSource {

    public onComplete: Function | null = null;
    private _progress: number = 0;
    private _isPlay: boolean = false;
    private _lastAudioID = -1
    private _lastBundleName = ""
    private _lastUrl = ""

    start() {
        EventManager.instance.on(Game.EVENT_SHOW, this.onApplicationShow, this)
        EventManager.instance.on(Game.EVENT_HIDE, this.onApplicationHide, this)
    }

    onApplicationShow() {
        if (Env.IsAndroid) {
            if (this._lastAudioID >= 0) {
                let state = jsb.AudioEngine.getState(this._lastAudioID)
                if (state == AudioSource.AudioState.PAUSED) {
                    this.resume()
                }
            }
        }
    }

    onApplicationHide() {
        if (Env.IsAndroid) {
            if (this._lastAudioID >= 0) {
                let state = jsb.AudioEngine.getState(this._lastAudioID)
                if (state == AudioSource.AudioState.PLAYING) {
                    this.pause()
                }
            }
        }
    }

    onDestroy() {
        this.stop()
        EventManager.instance.off(Game.EVENT_SHOW, this.onApplicationShow, this)
        EventManager.instance.off(Game.EVENT_HIDE, this.onApplicationHide, this)
    }

    /**
    * 设置音乐当前播放进度
    * @param progress 进度百分比(0~1)
    */
    public get progress() {
        this._progress = this.currentTime / this.duration;
        return this._progress;
    }

    public set progress(value: number) {
        this._progress = value;
        this.currentTime = (value * this.duration);
    }

    public load(bundleName, url: string, callback?: Function) {
        let bundle = assetManager.getBundle(bundleName)
        if (!bundle) {
            console.log(bundleName, " is release! dont play sound:", url)
            return;
        }
        ResourceManager.loadBundle(bundleName, url, AudioClip, null, (err: Error | null, clip: AudioClip) => {
            if (err) {
                callback && callback(err);
            }

            if (!this || !this.isValid || !this.node || !this.node.isValid) {
                return
            }

            if (!clip || !clip.isValid) {
                return
            }

            if (Env.IsAndroid) {
                if (this._lastAudioID >= 0) {
                    jsb.AudioEngine.stop(this._lastAudioID)
                }
                this._lastAudioID = jsb.AudioEngine.play2d(clip.nativeUrl, true, 1)
                this._lastBundleName = bundleName
                this._lastUrl = url
            } else {
                if (this.playing) {
                    this.stop();
                    ResourceManager.releaseAsset(this.clip)
                }
                this.clip = clip;
                this.currentTime = 0;
                if (Env.IsIOS) {
                    this.playOnAwake = true
                } else {
                    this.play();
                }
            }
            callback && callback();
        });
    }

    stop() {
        if (Env.IsAndroid) {
            if (this._lastAudioID >= 0) {
                jsb.AudioEngine.stop(this._lastAudioID)
            }
        } else {
            super.stop()
        }
    }

    pause() {
        if (Env.IsAndroid) {
            if (this._lastAudioID >= 0) {
                jsb.AudioEngine.pause(this._lastAudioID)
            }
        } else {
            super.pause()
        }
    }

    resume() {
        if (Env.IsAndroid) {
            if (this._lastAudioID >= 0) {
                jsb.AudioEngine.resume(this._lastAudioID)
            }
        } else {
            super.play()
        }
    }

    play() {
        if (Env.IsAndroid) {
            if (this._lastAudioID >= 0) {
                let state = jsb.AudioEngine.getState(this._lastAudioID)
                if (state == AudioSource.AudioState.PAUSED) {
                    this.resume()
                } else {
                    if (this._lastBundleName != "" && this._lastUrl != "") {
                        this.load(this._lastBundleName, this._lastUrl)
                    }
                }
            }
        } else {
            super.play()
        }
    }

    update(dt: number) {
        if (this.currentTime > 0) {
            this._isPlay = true;
        }

        if (this._isPlay && this.playing == false) {
            this._isPlay = false;
            this.onComplete && this.onComplete();
        }
    }

    release() {
        if (this.clip) {
            ResourceManager.releaseAsset(this.clip)
        }
    }
}