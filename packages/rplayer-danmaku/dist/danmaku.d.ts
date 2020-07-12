import RPlayer from 'rplayer';
import { Item, DanmakuOptions } from './options';
export default class Danmaku {
    static readonly typeMap: Item['type'][];
    readonly dom: HTMLElement;
    private DEFAULT_SETTING;
    private ui;
    player: RPlayer;
    opts: DanmakuOptions;
    private prevTime;
    tunnel: number;
    tunnelHeight: number;
    private items;
    private sended;
    private bullets;
    private pool;
    private scroll;
    private top;
    private bottom;
    displaySeconds: number;
    constructor(opts: DanmakuOptions);
    install(player: RPlayer): void;
    get width(): number;
    get height(): number;
    get fontSize(): number;
    get defaultSetting(): DanmakuOptions;
    private init;
    private onTimeUpdate;
    private load;
    private getShortestTunnel;
    private getStaticEmptyTunnel;
    private insert;
    private getBullet;
    private recycleBullet;
    private clear;
    private restoreSetting;
    private getPersistOpts;
    private setDefaultOptions;
    private onResize;
    private onSeeked;
    persistSetting(): void;
    resetSetting(): void;
    on(): void;
    off(): void;
    toggle(): void;
    pause: () => void;
    addItem(v: Item): void;
    addItems(v: Item | Item[]): void;
    resetItems(v?: Item[] | Item): void;
    send(v: Item): void;
    updateTunnelHeight(): void;
    updateTunnel(): void;
    updateDisplaySeconds(): void;
    updateSetting(): void;
    updateOpacity(opacity?: number): void;
    updateSpeed(speed?: number): void;
    updateFontSize(fontSize?: number): void;
    updateArea(area?: number): void;
    updateMerge(merge?: boolean): void;
    updateUnlimited(unlimited?: boolean): void;
    updateBottomUp(bottomUp?: boolean): void;
    private isAllowedType;
    updateBlockTypes(types?: ("top" | "bottom" | "scroll" | "color")[]): void;
}
//# sourceMappingURL=danmaku.d.ts.map