
import { _decorator, Component, Node, AudioSource, AudioClip, __private, assetManager, game, Game } from 'cc';
import CommonName from '../../packages/hall/script/model/CommonName';
import EventManager from './event_manager';
import ResourceManager from './resoure_manager';
import LocalStorage from "./local_storage";
const { ccclass, property } = _decorator;
enum playAudioType {
    Play,
    OneShotAduio,
}
@ccclass('AudioManager')
export default class AudioManager extends Component {
    private static _instance: AudioManager;
    //音效播放器
    private _oneShotAudioInfoList: Audio[] = [];
    //背景音乐播放器
    private _musicAudio: Audio;
    private _localData: any = {};
    private _volumeMusic: number = 1;
    private _volumeEffect: number = 1;
    private _switchMusic: boolean = false;
    private _switchEffect: boolean = false;
    private _cacheMusiceBundle: string = ""
    private _cacheMusiceUrl: string = ""
    //是否切入后台
    private _applicationHide = false;
    //本地存储标签名
    private _localStorageTag: string = "game_volume";
    //是否是暂停状态
    private _pauseState: boolean = false;
    public static get instance(): AudioManager {
        if (!this._instance) {
            let node = new Node("AudioMananger")
            this._instance = node.addComponent(AudioManager);
            this._instance.init();
            game.addPersistRootNode(node);
        }
        return this._instance;
    }

    public onPauseMusic(value: boolean) {
        this._pauseState = value;
        if (this._pauseState) {
            if (this._switchMusic)
                this._pause(playAudioType.Play)
        }
        else {
            if (this._switchMusic)
                this._resume(playAudioType.Play)
        }
    }

    private onApplicationHide() {
        AudioManager.instance.pauseAll();
        this._applicationHide = true;
    }

    private onApplicationShow() {
        AudioManager.instance.resumeAll();
        this._applicationHide = false;
    }

    private init() {
        EventManager.instance.on(Game.EVENT_HIDE, this.onApplicationHide, this)
        EventManager.instance.on(Game.EVENT_SHOW, this.onApplicationShow, this)
        let data = LocalStorage.getString(this._localStorageTag)
        if (data) {
            try {
                this._localData = JSON.parse(data);
                this._volumeMusic = this._localData.volume_music;
                this._volumeEffect = this._localData.volume_effect;
                this._switchMusic = this._localData.switch_music;
                this._switchEffect = this._localData.switch_effect;
            }
            catch (e) {
                this._localData = {};
                this._volumeMusic = 1;
                this._volumeEffect = 1;
                this._switchMusic = true;
                this._switchEffect = true;
            }
        }
    }

    private getAudio(): Audio | undefined {
        let audio: Audio | undefined;
        for (let i = 0; i < this._oneShotAudioInfoList.length; i++) {
            if (this._oneShotAudioInfoList[i] && !this._oneShotAudioInfoList[i].isPlaying) {
                return this._oneShotAudioInfoList[i];
            }
        }

        if (this._oneShotAudioInfoList.length + 2 >= AudioSource.maxAudioChannel) {
            let tempAudio: Audio | undefined
            for (let i = 0; i < this._oneShotAudioInfoList.length; i++) {
                if (this._oneShotAudioInfoList[i].audioType == playAudioType.OneShotAduio) {
                    if (!tempAudio || this._oneShotAudioInfoList[i].playTime < tempAudio.playTime) {
                        tempAudio = this._oneShotAudioInfoList[i]
                    }
                }
            }
            if (tempAudio) {
                tempAudio.stop();
            }
            return tempAudio;
        }
        audio = new Audio(this.node);
        this._oneShotAudioInfoList.push(audio);
        return audio;
    }

    public playEffect(url: string, bundleName: string = "resources", loop = false, volume = 1) {
        if (!this._switchEffect || this._applicationHide) return;
        let audio = this.getAudio();
        audio.audioName = "";
        audio?.playMusic(bundleName, url, playAudioType.OneShotAduio)
    }

    public playMusic(url: string, bundleName: string = "resources") {
        if (!this._switchMusic || this._applicationHide) {
            this._cacheMusiceBundle = bundleName;
            this._cacheMusiceUrl = url;
            return;
        }
        if (!this._musicAudio) {
            this._musicAudio = new Audio(this.node);
        }
        this._musicAudio.playMusic(bundleName, url, playAudioType.Play, true)
    }

    public release(bundle: string) {
        if (this._musicAudio?.bundle == bundle) {
            this._musicAudio.release();
        }
        this._oneShotAudioInfoList.forEach((audio) => {
            if (audio?.bundle == bundle) audio.release();
        })
    }
    //兼容留下的接口
    public stopMusic() { }
    public stopEffect() { }

    /**********************   兼容接口   ***********************/
    public playLoopEffect(url: string, bundleName: string = "resources") {
        if (!this._switchEffect || this._applicationHide) return;
        let audio = this.getAudio();
        audio.audioName = url;
        audio?.playMusic(bundleName, url, playAudioType.OneShotAduio,true)
    }  

    public stopLoopEffect(url: string) {
        this._oneShotAudioInfoList.forEach((audio) => {
            if(audio.audioName == url){
                audio.stop();
            }     
        })
    }

    public stopAllEffect() {
        this._stop(playAudioType.OneShotAduio)
    }

    public setMusicValume(val: number) {
        this._musicAudio?.setValume(val);
    }

    public pauseAll() {
        this._pause(playAudioType.Play)
        this._pause(playAudioType.OneShotAduio)
    }

    public resumeAll() {
        if (this._pauseState) return;
        if (this._switchMusic)
            this._resume(playAudioType.Play)
        if (this._switchEffect)
            this._resume(playAudioType.OneShotAduio)
    }

    public stopAll() {
        this._stop(playAudioType.Play)
        this._stop(playAudioType.OneShotAduio)
    }

    /** 音乐开关 */
    public getSwitchMusic(): boolean {
        return this._switchMusic;
    }

    public setSwitchMusic(value: boolean) {
        console.log("setSwitchMusic ------------>", value)
        this._switchMusic = value;
        this._save()

        if (this._switchMusic == false)
            this._stop(playAudioType.Play);
        else {
            if (this._cacheMusiceBundle && this._cacheMusiceUrl) {
                this.playMusic(this._cacheMusiceUrl, this._cacheMusiceBundle)
            } else {
                this._musicAudio?.audioSource?.play();
            }
        }
    }

    /** 音效开关 */
    public getSwitchEffect(): boolean {
        return this._switchEffect;
    }

    public setSwitchEffect(value: boolean) {
        this._switchEffect = value;
        this._save()
        if (value == false) {
            this._stop(playAudioType.OneShotAduio);
        }
    }
    public hideAudio(hide) {

    }

    playButtonSound() {
        this.playEffect(CommonName.PUBLIC_SOUNDURL.ButtonClick)
    }

    playCloseWindowSound() {
        // this.playEffect(CommonName.PUBLIC_SOUNDURL.WindowClose)
    }

    playOpenWindowSound() {
        // this.playEffect(CommonName.PUBLIC_SOUNDURL.WindowOpen)
    }

    private _save() {
        this._localData.volume_music = this._volumeMusic;
        this._localData.volume_effect = this._volumeEffect;
        this._localData.switch_music = this._switchMusic;
        this._localData.switch_effect = this._switchEffect;

        let data = JSON.stringify(this._localData);
        LocalStorage.setString(this._localStorageTag, data);
    }


    private _pause(audioType: playAudioType) {
        console.log(`pause `, audioType);
        if (audioType == playAudioType.Play) {
            this._musicAudio?.pause();
        }
        else {
            this._oneShotAudioInfoList.forEach((audio) => {
                audio.pause();
            });
        }
    }

    private _resume(audioType: playAudioType) {
        if (audioType == playAudioType.Play)
            this._musicAudio?.resume();
        else
            this._oneShotAudioInfoList.forEach((audio) => {
                audio.resume();
            })
    }

    private _stop(audioType: playAudioType) {
        if (audioType == playAudioType.Play)
            this._musicAudio?.stop();
        else
            this._oneShotAudioInfoList.forEach((audio) => {
                audio.stop();
            })
    }
}

class Audio {
    audioSource: AudioSource;
    audioClip: AudioClip;
    audioType: playAudioType;
    playTime: number;
    bundle: string;
    url: string;
    private _audioName: string = "";
    public get audioName(){
        return this._audioName;
    }
    public set audioName(name:string){
        this._audioName = name;
    }
    private isLoad: boolean = false;
    private isRelease: boolean = false;
    public EventHandler: any;
    static index: number = 0;
    constructor(node: Node) {
        let audioNode = new Node();
        audioNode.name = "audio" + Audio.index++;
        audioNode.setParent(node);
        this.audioSource = audioNode.addComponent(AudioSource);
        this.audioSource.playOnAwake = false;
        audioNode.on(AudioSource.EventType.ENDED, this.handlerEvent.bind(this), audioNode);
    }

    get isPlaying(): boolean {
        return this.isLoad || this?.audioSource?.playing
    }

    private handlerEvent(eType: any) {
        // console.log("播放音频结束")
        this.audioSource.clip = null;
    }
    //播放音效
    public async playMusic(bundle: string, url: string, type: playAudioType, loop: boolean = false) {
        if (this.audioSource && !this.isLoad) {
            this.audioType = type;
            this.bundle = bundle;
            this.url = url;
            this.isRelease = false;
            this.playTime = Date.now();
            this.audioSource.stop();
            let clip = await this.load(bundle, url);
            if (clip && clip.isValid) {
                if (this.isRelease) {
                    assetManager.releaseAsset(clip)
                    return;
                }
                this.audioSource.clip = clip;
                this.audioSource.loop = loop;
                this.audioSource.play();
            }
            else {
                // console.error("加载无效的音频文件 " + bundle + url)
            }
        }
    }

    //暂停播放
    public pause() {
        if (this.audioSource.playing)
            this.audioSource.pause();
    }
    //恢复播放
    public resume() {
        // console.log("resume  " + this.toString())
        if (this.audioSource.clip && this.audioSource.state == 2) {
            // console.log("恢复播放音频  " + this.bundle + "/" + this.url, this.audioSource.clip)
            this.audioSource.play();
        }
    }
    //停止播放
    public stop() {
        this.audioSource.stop();
    }
    //清理播放数据
    public clear() {

    }
    //获取播放状态
    public state() {
        if (this.audioSource)
            return this.audioSource.state;
        return -1;
    }

    public release() {
        if (this.isLoad) {
            this.isRelease = true;
            return;
        }
        this.audioSource.stop();
        if (this.audioSource.clip) {
            assetManager.releaseAsset(this.audioSource.clip)
            this.audioSource.clip = null;
        }
    }

    public toString() {
        return `${this.bundle}/${this.url} State: ${this.state()}`;
    }

    //设置音量
    public setValume(val: number) {
        this.audioSource.volume = val;
    }

    public getValume() {
        return this.audioSource.volume;
    }

    //
    private load(bundle: string, url: string): Promise<AudioClip> {
        this.isLoad = true;
        return new Promise((resolve) => {
            ResourceManager.loadBundle<AudioClip>(bundle, url, AudioClip, null, (err, clip) => {
                this.isLoad = false;
                if (err) {
                    console.error(err);
                };
                resolve(clip);
            });
        });
    }
}
