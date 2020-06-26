import EventEmitter from 'eventemitter3';
import Component from './component';
import Controls from './controls';
import Events from './events';
import Loading from './loading';
import { RPlayerOptions, Plugin } from './options';
import Subtitle from './plugins/subtitle';
import Fullscreen from './plugins/fullscreen';
import Shortcut from './shortcut';
import Storage from './storage';
import * as utils from './utils';
import Switch from './widgets/switch';
import Slider from './widgets/slider';
import Checkbox from './widgets/checkbox';
import Tray from './widgets/tray';
import Popover from './widgets/popover';
import BaseItem from './controls/setting/base-item';
import SwitchItem from './controls/setting/switch-item';
import Select from './controls/setting/select';
import Toast from './toast';
export default class RPlayer extends Component {
    static readonly Events: typeof Events;
    static readonly utils: typeof utils;
    static readonly icons: {
        play(cls?: string): Element;
        pause(cls?: string): Element;
        enterFullscreen(cls?: string): Element;
        exitFullscreen(cls?: string): Element;
        volume(cls?: string): Element;
        muted(cls?: string): Element;
        settings(cls?: string): Element;
        cc(cls?: string): Element;
    };
    static readonly EventEmitter: typeof EventEmitter;
    static readonly Switch: typeof Switch;
    static readonly Slider: typeof Slider;
    static readonly Checkbox: typeof Checkbox;
    static readonly Tray: typeof Tray;
    static readonly Popover: typeof Popover;
    static readonly SettingBase: typeof BaseItem;
    static readonly SettingSwitch: typeof SwitchItem;
    static readonly SettingSelect: typeof Select;
    el: HTMLElement;
    curBreakPoint: string;
    readonly media: HTMLVideoElement;
    readonly options: RPlayerOptions;
    readonly fullscreen: Fullscreen;
    readonly controls: Controls;
    readonly shortcut: Shortcut;
    readonly loading: Loading;
    readonly subtitle: Subtitle;
    readonly $toast: Toast;
    storage: Storage;
    private prevVolume;
    private ready;
    constructor(opts: RPlayerOptions);
    get currentTime(): number;
    set currentTime(v: number);
    get volume(): number;
    set volume(v: number);
    get muted(): boolean;
    set muted(v: boolean);
    get playbackRate(): number;
    set playbackRate(v: number);
    get duration(): number;
    get buffered(): TimeRanges;
    get paused(): boolean;
    get ended(): boolean;
    get playing(): boolean;
    get isPhone(): boolean;
    private restore;
    setMediaAttrs(map: RPlayerOptions['video']): void;
    mount(el?: HTMLElement): void;
    seek(seconds: number): void;
    play(): void;
    pause(): void;
    toggle(): void;
    incVolume(v?: number): void;
    decVolume(v?: number): void;
    forward(v?: number): void;
    rewind(v?: number): void;
    toggleVolume(): void;
    toast(v: Parameters<Toast['show']>[0]): void;
    hideToast(): void;
    t(key: string): string;
    eachBuffer(fn: (start: number, end: number) => boolean | void): void;
    use(plugin: Plugin): void;
    addLang(lang: string, data: Record<string, string>): void;
}
//# sourceMappingURL=rplayer.d.ts.map