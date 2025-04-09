import * as $protobuf from "protobufjs";
import * as Long from "long"
/** Namespace hall. */
export namespace hall {

    /** Properties of a GuestLogin. */
    interface IGuestLogin {

        /** GuestLogin HDCode */
        HDCode: string;

        /** GuestLogin HDType */
        HDType: number;

        /** GuestLogin SiteID */
        SiteID: number;

        /** GuestLogin Version */
        Version: string;

        /** GuestLogin PlatformID */
        PlatformID: number;

        /** GuestLogin ServerID */
        ServerID?: (number|null);

        /** GuestLogin WxOpenID */
        WxOpenID?: (string|null);

        /** GuestLogin WxUnionID */
        WxUnionID?: (string|null);

        /** GuestLogin BunldID */
        BunldID?: (string|null);

        /** GuestLogin Ver */
        Ver?: (string|null);
    }

    /** Represents a GuestLogin. */
    class GuestLogin implements IGuestLogin {

        /**
         * Constructs a new GuestLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IGuestLogin);

        /** GuestLogin HDCode. */
        public HDCode: string;

        /** GuestLogin HDType. */
        public HDType: number;

        /** GuestLogin SiteID. */
        public SiteID: number;

        /** GuestLogin Version. */
        public Version: string;

        /** GuestLogin PlatformID. */
        public PlatformID: number;

        /** GuestLogin ServerID. */
        public ServerID: number;

        /** GuestLogin WxOpenID. */
        public WxOpenID: string;

        /** GuestLogin WxUnionID. */
        public WxUnionID: string;

        /** GuestLogin BunldID. */
        public BunldID: string;

        /** GuestLogin Ver. */
        public Ver: string;

        /**
         * Creates a new GuestLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuestLogin instance
         */
        public static create(properties?: hall.IGuestLogin): hall.GuestLogin;

        /**
         * Encodes the specified GuestLogin message. Does not implicitly {@link hall.GuestLogin.verify|verify} messages.
         * @param message GuestLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IGuestLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuestLogin message, length delimited. Does not implicitly {@link hall.GuestLogin.verify|verify} messages.
         * @param message GuestLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IGuestLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuestLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuestLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.GuestLogin;

        /**
         * Decodes a GuestLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GuestLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.GuestLogin;

        /**
         * Verifies a GuestLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GuestLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GuestLogin
         */
        public static fromObject(object: { [k: string]: any }): hall.GuestLogin;

        /**
         * Creates a plain object from a GuestLogin message. Also converts values to other types if specified.
         * @param message GuestLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.GuestLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuestLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserLogin. */
    interface IUserLogin {

        /** UserLogin HDCode */
        HDCode: string;

        /** UserLogin HDType */
        HDType: number;

        /** UserLogin SiteID */
        SiteID: number;

        /** UserLogin Version */
        Version: string;

        /** UserLogin PlatformID */
        PlatformID: number;

        /** UserLogin LoginName */
        LoginName?: (string|null);

        /** UserLogin Password */
        Password?: (string|null);

        /** UserLogin UserID */
        UserID?: (number|null);

        /** UserLogin Cer */
        Cer?: (string|null);

        /** UserLogin BunldID */
        BunldID?: (string|null);

        /** UserLogin Ver */
        Ver?: (string|null);
    }

    /** Represents a UserLogin. */
    class UserLogin implements IUserLogin {

        /**
         * Constructs a new UserLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IUserLogin);

        /** UserLogin HDCode. */
        public HDCode: string;

        /** UserLogin HDType. */
        public HDType: number;

        /** UserLogin SiteID. */
        public SiteID: number;

        /** UserLogin Version. */
        public Version: string;

        /** UserLogin PlatformID. */
        public PlatformID: number;

        /** UserLogin LoginName. */
        public LoginName: string;

        /** UserLogin Password. */
        public Password: string;

        /** UserLogin UserID. */
        public UserID: number;

        /** UserLogin Cer. */
        public Cer: string;

        /** UserLogin BunldID. */
        public BunldID: string;

        /** UserLogin Ver. */
        public Ver: string;

        /**
         * Creates a new UserLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserLogin instance
         */
        public static create(properties?: hall.IUserLogin): hall.UserLogin;

        /**
         * Encodes the specified UserLogin message. Does not implicitly {@link hall.UserLogin.verify|verify} messages.
         * @param message UserLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IUserLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserLogin message, length delimited. Does not implicitly {@link hall.UserLogin.verify|verify} messages.
         * @param message UserLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IUserLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.UserLogin;

        /**
         * Decodes a UserLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.UserLogin;

        /**
         * Verifies a UserLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserLogin
         */
        public static fromObject(object: { [k: string]: any }): hall.UserLogin;

        /**
         * Creates a plain object from a UserLogin message. Also converts values to other types if specified.
         * @param message UserLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.UserLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserLoginRet. */
    interface IUserLoginRet {

        /** UserLoginRet Code */
        Code: number;

        /** UserLoginRet Message */
        Message: string;

        /** UserLoginRet UserID */
        UserID?: (number|null);

        /** UserLoginRet Cer */
        Cer?: (string|null);

        /** UserLoginRet HDCode */
        HDCode?: (string|null);

        /** UserLoginRet HDType */
        HDType?: (number|null);

        /** UserLoginRet UserData */
        UserData?: (hall.IUserHallLogonData|null);
    }

    /** Represents a UserLoginRet. */
    class UserLoginRet implements IUserLoginRet {

        /**
         * Constructs a new UserLoginRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IUserLoginRet);

        /** UserLoginRet Code. */
        public Code: number;

        /** UserLoginRet Message. */
        public Message: string;

        /** UserLoginRet UserID. */
        public UserID: number;

        /** UserLoginRet Cer. */
        public Cer: string;

        /** UserLoginRet HDCode. */
        public HDCode: string;

        /** UserLoginRet HDType. */
        public HDType: number;

        /** UserLoginRet UserData. */
        public UserData?: (hall.IUserHallLogonData|null);

        /**
         * Creates a new UserLoginRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserLoginRet instance
         */
        public static create(properties?: hall.IUserLoginRet): hall.UserLoginRet;

        /**
         * Encodes the specified UserLoginRet message. Does not implicitly {@link hall.UserLoginRet.verify|verify} messages.
         * @param message UserLoginRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IUserLoginRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserLoginRet message, length delimited. Does not implicitly {@link hall.UserLoginRet.verify|verify} messages.
         * @param message UserLoginRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IUserLoginRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserLoginRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserLoginRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.UserLoginRet;

        /**
         * Decodes a UserLoginRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserLoginRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.UserLoginRet;

        /**
         * Verifies a UserLoginRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserLoginRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserLoginRet
         */
        public static fromObject(object: { [k: string]: any }): hall.UserLoginRet;

        /**
         * Creates a plain object from a UserLoginRet message. Also converts values to other types if specified.
         * @param message UserLoginRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.UserLoginRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserLoginRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserHallLogonData. */
    interface IUserHallLogonData {

        /** UserHallLogonData LoginName */
        LoginName: string;

        /** UserHallLogonData NickName */
        NickName: string;

        /** UserHallLogonData UserType */
        UserType: number;

        /** UserHallLogonData Sex */
        Sex: number;

        /** UserHallLogonData HeadID */
        HeadID: number;

        /** UserHallLogonData IsTopWindow */
        IsTopWindow: boolean;

        /** UserHallLogonData CashAmount */
        CashAmount: (number|Long);

        /** UserHallLogonData BankAmount */
        BankAmount: (number|Long);

        /** UserHallLogonData IsGaming */
        IsGaming: boolean;

        /** UserHallLogonData ServerAddr */
        ServerAddr?: (string|null);

        /** UserHallLogonData ServerName */
        ServerName?: (string|null);

        /** UserHallLogonData IsKick */
        IsKick: boolean;

        /** UserHallLogonData IsBindGuest */
        IsBindGuest: boolean;

        /** UserHallLogonData UserLevel */
        UserLevel: number;

        /** UserHallLogonData LevelKey */
        LevelKey: string;

        /** UserHallLogonData AnnMsg */
        AnnMsg?: (string|null);

        /** UserHallLogonData ConvertRateTipMsg */
        ConvertRateTipMsg?: (string|null);

        /** UserHallLogonData BankPwdTipMsg */
        BankPwdTipMsg?: (string|null);

        /** UserHallLogonData UIFlag */
        UIFlag?: (string|null);

        /** UserHallLogonData PaySort */
        PaySort?: (string|null);

        /** UserHallLogonData UpGradeMsg */
        UpGradeMsg?: (string|null);

        /** UserHallLogonData LockGameID */
        LockGameID?: (number|null);

        /** UserHallLogonData IsBindZhifubao */
        IsBindZhifubao: boolean;

        /** UserHallLogonData Zhifubao */
        Zhifubao?: (string|null);

        /** UserHallLogonData RealName */
        RealName?: (string|null);

        /** UserHallLogonData GameList */
        GameList?: (hall.IGameSortCateInfo[]|null);

        /** UserHallLogonData PayAmountConfig */
        PayAmountConfig?: (string|null);

        /** UserHallLogonData PayNotifyMsg */
        PayNotifyMsg?: (string|null);

        /** UserHallLogonData NotifyFlag */
        NotifyFlag?: (string|null);

        /** UserHallLogonData PayTips */
        PayTips?: (string|null);

        /** UserHallLogonData IsBindBankCard */
        IsBindBankCard?: (boolean|null);

        /** UserHallLogonData BankCardNumber */
        BankCardNumber?: (string|null);

        /** UserHallLogonData BankCardName */
        BankCardName?: (string|null);

        /** UserHallLogonData BankName */
        BankName?: (string|null);

        /** UserHallLogonData BankConvertRateTipMsg */
        BankConvertRateTipMsg?: (string|null);

        /** UserHallLogonData VGameIDS */
        VGameIDS?: (number[]|null);

        /** UserHallLogonData InVGameID */
        InVGameID?: (number|null);

        /** UserHallLogonData XiuXianAmount */
        XiuXianAmount?: (number|Long|null);

        /** UserHallLogonData XiuXianTotalCharge */
        XiuXianTotalCharge?: (number|Long|null);

        /** UserHallLogonData GameCategoryList */
        GameCategoryList?: (hall.IGameCategoryInfo[]|null);

        /** UserHallLogonData LianyunID */
        LianyunID?: (number|null);

        /** UserHallLogonData VersionList */
        VersionList?: (hall.ISkinVersionInfo[]|null);

        /** UserHallLogonData VipLv */
        VipLv?: (number|null);

        /** UserHallLogonData HeadFrameID */
        HeadFrameID?: (number|null);
    }

    /** Represents a UserHallLogonData. */
    class UserHallLogonData implements IUserHallLogonData {

        /**
         * Constructs a new UserHallLogonData.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IUserHallLogonData);

        /** UserHallLogonData LoginName. */
        public LoginName: string;

        /** UserHallLogonData NickName. */
        public NickName: string;

        /** UserHallLogonData UserType. */
        public UserType: number;

        /** UserHallLogonData Sex. */
        public Sex: number;

        /** UserHallLogonData HeadID. */
        public HeadID: number;

        /** UserHallLogonData IsTopWindow. */
        public IsTopWindow: boolean;

        /** UserHallLogonData CashAmount. */
        public CashAmount: (number|Long);

        /** UserHallLogonData BankAmount. */
        public BankAmount: (number|Long);

        /** UserHallLogonData IsGaming. */
        public IsGaming: boolean;

        /** UserHallLogonData ServerAddr. */
        public ServerAddr: string;

        /** UserHallLogonData ServerName. */
        public ServerName: string;

        /** UserHallLogonData IsKick. */
        public IsKick: boolean;

        /** UserHallLogonData IsBindGuest. */
        public IsBindGuest: boolean;

        /** UserHallLogonData UserLevel. */
        public UserLevel: number;

        /** UserHallLogonData LevelKey. */
        public LevelKey: string;

        /** UserHallLogonData AnnMsg. */
        public AnnMsg: string;

        /** UserHallLogonData ConvertRateTipMsg. */
        public ConvertRateTipMsg: string;

        /** UserHallLogonData BankPwdTipMsg. */
        public BankPwdTipMsg: string;

        /** UserHallLogonData UIFlag. */
        public UIFlag: string;

        /** UserHallLogonData PaySort. */
        public PaySort: string;

        /** UserHallLogonData UpGradeMsg. */
        public UpGradeMsg: string;

        /** UserHallLogonData LockGameID. */
        public LockGameID: number;

        /** UserHallLogonData IsBindZhifubao. */
        public IsBindZhifubao: boolean;

        /** UserHallLogonData Zhifubao. */
        public Zhifubao: string;

        /** UserHallLogonData RealName. */
        public RealName: string;

        /** UserHallLogonData GameList. */
        public GameList: hall.IGameSortCateInfo[];

        /** UserHallLogonData PayAmountConfig. */
        public PayAmountConfig: string;

        /** UserHallLogonData PayNotifyMsg. */
        public PayNotifyMsg: string;

        /** UserHallLogonData NotifyFlag. */
        public NotifyFlag: string;

        /** UserHallLogonData PayTips. */
        public PayTips: string;

        /** UserHallLogonData IsBindBankCard. */
        public IsBindBankCard: boolean;

        /** UserHallLogonData BankCardNumber. */
        public BankCardNumber: string;

        /** UserHallLogonData BankCardName. */
        public BankCardName: string;

        /** UserHallLogonData BankName. */
        public BankName: string;

        /** UserHallLogonData BankConvertRateTipMsg. */
        public BankConvertRateTipMsg: string;

        /** UserHallLogonData VGameIDS. */
        public VGameIDS: number[];

        /** UserHallLogonData InVGameID. */
        public InVGameID: number;

        /** UserHallLogonData XiuXianAmount. */
        public XiuXianAmount: (number|Long);

        /** UserHallLogonData XiuXianTotalCharge. */
        public XiuXianTotalCharge: (number|Long);

        /** UserHallLogonData GameCategoryList. */
        public GameCategoryList: hall.IGameCategoryInfo[];

        /** UserHallLogonData LianyunID. */
        public LianyunID: number;

        /** UserHallLogonData VersionList. */
        public VersionList: hall.ISkinVersionInfo[];

        /** UserHallLogonData VipLv. */
        public VipLv: number;

        /** UserHallLogonData HeadFrameID. */
        public HeadFrameID: number;

        /**
         * Creates a new UserHallLogonData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserHallLogonData instance
         */
        public static create(properties?: hall.IUserHallLogonData): hall.UserHallLogonData;

        /**
         * Encodes the specified UserHallLogonData message. Does not implicitly {@link hall.UserHallLogonData.verify|verify} messages.
         * @param message UserHallLogonData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IUserHallLogonData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserHallLogonData message, length delimited. Does not implicitly {@link hall.UserHallLogonData.verify|verify} messages.
         * @param message UserHallLogonData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IUserHallLogonData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserHallLogonData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserHallLogonData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.UserHallLogonData;

        /**
         * Decodes a UserHallLogonData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserHallLogonData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.UserHallLogonData;

        /**
         * Verifies a UserHallLogonData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserHallLogonData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserHallLogonData
         */
        public static fromObject(object: { [k: string]: any }): hall.UserHallLogonData;

        /**
         * Creates a plain object from a UserHallLogonData message. Also converts values to other types if specified.
         * @param message UserHallLogonData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.UserHallLogonData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserHallLogonData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameSortCateInfo. */
    interface IGameSortCateInfo {

        /** GameSortCateInfo GameID */
        GameID: number;

        /** GameSortCateInfo CategoryID */
        CategoryID?: (string|null);
    }

    /** Represents a GameSortCateInfo. */
    class GameSortCateInfo implements IGameSortCateInfo {

        /**
         * Constructs a new GameSortCateInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IGameSortCateInfo);

        /** GameSortCateInfo GameID. */
        public GameID: number;

        /** GameSortCateInfo CategoryID. */
        public CategoryID: string;

        /**
         * Creates a new GameSortCateInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameSortCateInfo instance
         */
        public static create(properties?: hall.IGameSortCateInfo): hall.GameSortCateInfo;

        /**
         * Encodes the specified GameSortCateInfo message. Does not implicitly {@link hall.GameSortCateInfo.verify|verify} messages.
         * @param message GameSortCateInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IGameSortCateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameSortCateInfo message, length delimited. Does not implicitly {@link hall.GameSortCateInfo.verify|verify} messages.
         * @param message GameSortCateInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IGameSortCateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameSortCateInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameSortCateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.GameSortCateInfo;

        /**
         * Decodes a GameSortCateInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameSortCateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.GameSortCateInfo;

        /**
         * Verifies a GameSortCateInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameSortCateInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameSortCateInfo
         */
        public static fromObject(object: { [k: string]: any }): hall.GameSortCateInfo;

        /**
         * Creates a plain object from a GameSortCateInfo message. Also converts values to other types if specified.
         * @param message GameSortCateInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.GameSortCateInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameSortCateInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameCategoryInfo. */
    interface IGameCategoryInfo {

        /** GameCategoryInfo CategoryID */
        CategoryID: number;

        /** GameCategoryInfo Name */
        Name: string;
    }

    /** Represents a GameCategoryInfo. */
    class GameCategoryInfo implements IGameCategoryInfo {

        /**
         * Constructs a new GameCategoryInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IGameCategoryInfo);

        /** GameCategoryInfo CategoryID. */
        public CategoryID: number;

        /** GameCategoryInfo Name. */
        public Name: string;

        /**
         * Creates a new GameCategoryInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameCategoryInfo instance
         */
        public static create(properties?: hall.IGameCategoryInfo): hall.GameCategoryInfo;

        /**
         * Encodes the specified GameCategoryInfo message. Does not implicitly {@link hall.GameCategoryInfo.verify|verify} messages.
         * @param message GameCategoryInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IGameCategoryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameCategoryInfo message, length delimited. Does not implicitly {@link hall.GameCategoryInfo.verify|verify} messages.
         * @param message GameCategoryInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IGameCategoryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameCategoryInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameCategoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.GameCategoryInfo;

        /**
         * Decodes a GameCategoryInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameCategoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.GameCategoryInfo;

        /**
         * Verifies a GameCategoryInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameCategoryInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameCategoryInfo
         */
        public static fromObject(object: { [k: string]: any }): hall.GameCategoryInfo;

        /**
         * Creates a plain object from a GameCategoryInfo message. Also converts values to other types if specified.
         * @param message GameCategoryInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.GameCategoryInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameCategoryInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SkinVersionInfo. */
    interface ISkinVersionInfo {

        /** SkinVersionInfo ID */
        ID: number;

        /** SkinVersionInfo BunldID */
        BunldID: string;

        /** SkinVersionInfo Ver */
        Ver: string;

        /** SkinVersionInfo Path */
        Path: string;

        /** SkinVersionInfo Ver1 */
        Ver1: string;

        /** SkinVersionInfo Platform */
        Platform?: (string|null);

        /** SkinVersionInfo Channel */
        Channel?: (string|null);

        /** SkinVersionInfo SkinVer */
        SkinVer: string;

        /** SkinVersionInfo LimitIP */
        LimitIP?: (string|null);
    }

    /** Represents a SkinVersionInfo. */
    class SkinVersionInfo implements ISkinVersionInfo {

        /**
         * Constructs a new SkinVersionInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.ISkinVersionInfo);

        /** SkinVersionInfo ID. */
        public ID: number;

        /** SkinVersionInfo BunldID. */
        public BunldID: string;

        /** SkinVersionInfo Ver. */
        public Ver: string;

        /** SkinVersionInfo Path. */
        public Path: string;

        /** SkinVersionInfo Ver1. */
        public Ver1: string;

        /** SkinVersionInfo Platform. */
        public Platform: string;

        /** SkinVersionInfo Channel. */
        public Channel: string;

        /** SkinVersionInfo SkinVer. */
        public SkinVer: string;

        /** SkinVersionInfo LimitIP. */
        public LimitIP: string;

        /**
         * Creates a new SkinVersionInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SkinVersionInfo instance
         */
        public static create(properties?: hall.ISkinVersionInfo): hall.SkinVersionInfo;

        /**
         * Encodes the specified SkinVersionInfo message. Does not implicitly {@link hall.SkinVersionInfo.verify|verify} messages.
         * @param message SkinVersionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.ISkinVersionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SkinVersionInfo message, length delimited. Does not implicitly {@link hall.SkinVersionInfo.verify|verify} messages.
         * @param message SkinVersionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.ISkinVersionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SkinVersionInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SkinVersionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.SkinVersionInfo;

        /**
         * Decodes a SkinVersionInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SkinVersionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.SkinVersionInfo;

        /**
         * Verifies a SkinVersionInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SkinVersionInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SkinVersionInfo
         */
        public static fromObject(object: { [k: string]: any }): hall.SkinVersionInfo;

        /**
         * Creates a plain object from a SkinVersionInfo message. Also converts values to other types if specified.
         * @param message SkinVersionInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.SkinVersionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SkinVersionInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserLogout. */
    interface IUserLogout {

        /** UserLogout UserID */
        UserID: number;

        /** UserLogout Cer */
        Cer: string;
    }

    /** Represents a UserLogout. */
    class UserLogout implements IUserLogout {

        /**
         * Constructs a new UserLogout.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IUserLogout);

        /** UserLogout UserID. */
        public UserID: number;

        /** UserLogout Cer. */
        public Cer: string;

        /**
         * Creates a new UserLogout instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserLogout instance
         */
        public static create(properties?: hall.IUserLogout): hall.UserLogout;

        /**
         * Encodes the specified UserLogout message. Does not implicitly {@link hall.UserLogout.verify|verify} messages.
         * @param message UserLogout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IUserLogout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserLogout message, length delimited. Does not implicitly {@link hall.UserLogout.verify|verify} messages.
         * @param message UserLogout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IUserLogout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserLogout message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.UserLogout;

        /**
         * Decodes a UserLogout message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.UserLogout;

        /**
         * Verifies a UserLogout message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserLogout message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserLogout
         */
        public static fromObject(object: { [k: string]: any }): hall.UserLogout;

        /**
         * Creates a plain object from a UserLogout message. Also converts values to other types if specified.
         * @param message UserLogout
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.UserLogout, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserLogout to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HallVerInfo. */
    interface IHallVerInfo {

        /** HallVerInfo AndroidVersion */
        AndroidVersion: string;

        /** HallVerInfo IOSVersion */
        IOSVersion: string;
    }

    /** Represents a HallVerInfo. */
    class HallVerInfo implements IHallVerInfo {

        /**
         * Constructs a new HallVerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IHallVerInfo);

        /** HallVerInfo AndroidVersion. */
        public AndroidVersion: string;

        /** HallVerInfo IOSVersion. */
        public IOSVersion: string;

        /**
         * Creates a new HallVerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HallVerInfo instance
         */
        public static create(properties?: hall.IHallVerInfo): hall.HallVerInfo;

        /**
         * Encodes the specified HallVerInfo message. Does not implicitly {@link hall.HallVerInfo.verify|verify} messages.
         * @param message HallVerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IHallVerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HallVerInfo message, length delimited. Does not implicitly {@link hall.HallVerInfo.verify|verify} messages.
         * @param message HallVerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IHallVerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HallVerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HallVerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.HallVerInfo;

        /**
         * Decodes a HallVerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HallVerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.HallVerInfo;

        /**
         * Verifies a HallVerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HallVerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HallVerInfo
         */
        public static fromObject(object: { [k: string]: any }): hall.HallVerInfo;

        /**
         * Creates a plain object from a HallVerInfo message. Also converts values to other types if specified.
         * @param message HallVerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.HallVerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HallVerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AllGameServerInfo. */
    interface IAllGameServerInfo {

        /** AllGameServerInfo ServerList */
        ServerList?: (hall.IGameServerInfo[]|null);
    }

    /** Represents an AllGameServerInfo. */
    class AllGameServerInfo implements IAllGameServerInfo {

        /**
         * Constructs a new AllGameServerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IAllGameServerInfo);

        /** AllGameServerInfo ServerList. */
        public ServerList: hall.IGameServerInfo[];

        /**
         * Creates a new AllGameServerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AllGameServerInfo instance
         */
        public static create(properties?: hall.IAllGameServerInfo): hall.AllGameServerInfo;

        /**
         * Encodes the specified AllGameServerInfo message. Does not implicitly {@link hall.AllGameServerInfo.verify|verify} messages.
         * @param message AllGameServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IAllGameServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AllGameServerInfo message, length delimited. Does not implicitly {@link hall.AllGameServerInfo.verify|verify} messages.
         * @param message AllGameServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IAllGameServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllGameServerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AllGameServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.AllGameServerInfo;

        /**
         * Decodes an AllGameServerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AllGameServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.AllGameServerInfo;

        /**
         * Verifies an AllGameServerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AllGameServerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AllGameServerInfo
         */
        public static fromObject(object: { [k: string]: any }): hall.AllGameServerInfo;

        /**
         * Creates a plain object from an AllGameServerInfo message. Also converts values to other types if specified.
         * @param message AllGameServerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.AllGameServerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AllGameServerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameServerInfo. */
    interface IGameServerInfo {

        /** GameServerInfo GameID */
        GameID: number;

        /** GameServerInfo GameName */
        GameName: string;

        /** GameServerInfo LoginMoney */
        LoginMoney: number;

        /** GameServerInfo Flag */
        Flag: string;

        /** GameServerInfo Status */
        Status: string;

        /** GameServerInfo BaseScore */
        BaseScore: number;

        /** GameServerInfo AndroidVersion */
        AndroidVersion?: (string|null);

        /** GameServerInfo IOSVersion */
        IOSVersion?: (string|null);

        /** GameServerInfo NoSelRoom */
        NoSelRoom?: (number|null);

        /** GameServerInfo ServerStatus */
        ServerStatus?: (number|null);

        /** GameServerInfo RoomDesc */
        RoomDesc?: (string|null);
    }

    /** Represents a GameServerInfo. */
    class GameServerInfo implements IGameServerInfo {

        /**
         * Constructs a new GameServerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IGameServerInfo);

        /** GameServerInfo GameID. */
        public GameID: number;

        /** GameServerInfo GameName. */
        public GameName: string;

        /** GameServerInfo LoginMoney. */
        public LoginMoney: number;

        /** GameServerInfo Flag. */
        public Flag: string;

        /** GameServerInfo Status. */
        public Status: string;

        /** GameServerInfo BaseScore. */
        public BaseScore: number;

        /** GameServerInfo AndroidVersion. */
        public AndroidVersion: string;

        /** GameServerInfo IOSVersion. */
        public IOSVersion: string;

        /** GameServerInfo NoSelRoom. */
        public NoSelRoom: number;

        /** GameServerInfo ServerStatus. */
        public ServerStatus: number;

        /** GameServerInfo RoomDesc. */
        public RoomDesc: string;

        /**
         * Creates a new GameServerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameServerInfo instance
         */
        public static create(properties?: hall.IGameServerInfo): hall.GameServerInfo;

        /**
         * Encodes the specified GameServerInfo message. Does not implicitly {@link hall.GameServerInfo.verify|verify} messages.
         * @param message GameServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IGameServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameServerInfo message, length delimited. Does not implicitly {@link hall.GameServerInfo.verify|verify} messages.
         * @param message GameServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IGameServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameServerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.GameServerInfo;

        /**
         * Decodes a GameServerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.GameServerInfo;

        /**
         * Verifies a GameServerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameServerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameServerInfo
         */
        public static fromObject(object: { [k: string]: any }): hall.GameServerInfo;

        /**
         * Creates a plain object from a GameServerInfo message. Also converts values to other types if specified.
         * @param message GameServerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.GameServerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameServerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestGameServerAddrInfo. */
    interface IRequestGameServerAddrInfo {

        /** RequestGameServerAddrInfo ServerFlag */
        ServerFlag: string;

        /** RequestGameServerAddrInfo GameID */
        GameID: number;

        /** RequestGameServerAddrInfo IsLianyun */
        IsLianyun?: (boolean|null);

        /** RequestGameServerAddrInfo LianyunID */
        LianyunID?: (number|null);
    }

    /** Represents a RequestGameServerAddrInfo. */
    class RequestGameServerAddrInfo implements IRequestGameServerAddrInfo {

        /**
         * Constructs a new RequestGameServerAddrInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IRequestGameServerAddrInfo);

        /** RequestGameServerAddrInfo ServerFlag. */
        public ServerFlag: string;

        /** RequestGameServerAddrInfo GameID. */
        public GameID: number;

        /** RequestGameServerAddrInfo IsLianyun. */
        public IsLianyun: boolean;

        /** RequestGameServerAddrInfo LianyunID. */
        public LianyunID: number;

        /**
         * Creates a new RequestGameServerAddrInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestGameServerAddrInfo instance
         */
        public static create(properties?: hall.IRequestGameServerAddrInfo): hall.RequestGameServerAddrInfo;

        /**
         * Encodes the specified RequestGameServerAddrInfo message. Does not implicitly {@link hall.RequestGameServerAddrInfo.verify|verify} messages.
         * @param message RequestGameServerAddrInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IRequestGameServerAddrInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestGameServerAddrInfo message, length delimited. Does not implicitly {@link hall.RequestGameServerAddrInfo.verify|verify} messages.
         * @param message RequestGameServerAddrInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IRequestGameServerAddrInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestGameServerAddrInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestGameServerAddrInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.RequestGameServerAddrInfo;

        /**
         * Decodes a RequestGameServerAddrInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestGameServerAddrInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.RequestGameServerAddrInfo;

        /**
         * Verifies a RequestGameServerAddrInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestGameServerAddrInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestGameServerAddrInfo
         */
        public static fromObject(object: { [k: string]: any }): hall.RequestGameServerAddrInfo;

        /**
         * Creates a plain object from a RequestGameServerAddrInfo message. Also converts values to other types if specified.
         * @param message RequestGameServerAddrInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.RequestGameServerAddrInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestGameServerAddrInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameServerAddr. */
    interface IGameServerAddr {

        /** GameServerAddr ServerID */
        ServerID: number;

        /** GameServerAddr IPAddress */
        IPAddress: string;

        /** GameServerAddr Port */
        Port: number;
    }

    /** Represents a GameServerAddr. */
    class GameServerAddr implements IGameServerAddr {

        /**
         * Constructs a new GameServerAddr.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IGameServerAddr);

        /** GameServerAddr ServerID. */
        public ServerID: number;

        /** GameServerAddr IPAddress. */
        public IPAddress: string;

        /** GameServerAddr Port. */
        public Port: number;

        /**
         * Creates a new GameServerAddr instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameServerAddr instance
         */
        public static create(properties?: hall.IGameServerAddr): hall.GameServerAddr;

        /**
         * Encodes the specified GameServerAddr message. Does not implicitly {@link hall.GameServerAddr.verify|verify} messages.
         * @param message GameServerAddr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IGameServerAddr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameServerAddr message, length delimited. Does not implicitly {@link hall.GameServerAddr.verify|verify} messages.
         * @param message GameServerAddr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IGameServerAddr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameServerAddr message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameServerAddr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.GameServerAddr;

        /**
         * Decodes a GameServerAddr message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameServerAddr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.GameServerAddr;

        /**
         * Verifies a GameServerAddr message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameServerAddr message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameServerAddr
         */
        public static fromObject(object: { [k: string]: any }): hall.GameServerAddr;

        /**
         * Creates a plain object from a GameServerAddr message. Also converts values to other types if specified.
         * @param message GameServerAddr
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.GameServerAddr, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameServerAddr to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ZhifubaoInfo. */
    interface IZhifubaoInfo {

        /** ZhifubaoInfo Zhifubao */
        Zhifubao: string;

        /** ZhifubaoInfo RealName */
        RealName: string;

        /** ZhifubaoInfo NeedVcode */
        NeedVcode?: (number|null);

        /** ZhifubaoInfo Vcode */
        Vcode?: (string|null);
    }

    /** Represents a ZhifubaoInfo. */
    class ZhifubaoInfo implements IZhifubaoInfo {

        /**
         * Constructs a new ZhifubaoInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IZhifubaoInfo);

        /** ZhifubaoInfo Zhifubao. */
        public Zhifubao: string;

        /** ZhifubaoInfo RealName. */
        public RealName: string;

        /** ZhifubaoInfo NeedVcode. */
        public NeedVcode: number;

        /** ZhifubaoInfo Vcode. */
        public Vcode: string;

        /**
         * Creates a new ZhifubaoInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ZhifubaoInfo instance
         */
        public static create(properties?: hall.IZhifubaoInfo): hall.ZhifubaoInfo;

        /**
         * Encodes the specified ZhifubaoInfo message. Does not implicitly {@link hall.ZhifubaoInfo.verify|verify} messages.
         * @param message ZhifubaoInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IZhifubaoInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhifubaoInfo message, length delimited. Does not implicitly {@link hall.ZhifubaoInfo.verify|verify} messages.
         * @param message ZhifubaoInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IZhifubaoInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhifubaoInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhifubaoInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.ZhifubaoInfo;

        /**
         * Decodes a ZhifubaoInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhifubaoInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.ZhifubaoInfo;

        /**
         * Verifies a ZhifubaoInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ZhifubaoInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ZhifubaoInfo
         */
        public static fromObject(object: { [k: string]: any }): hall.ZhifubaoInfo;

        /**
         * Creates a plain object from a ZhifubaoInfo message. Also converts values to other types if specified.
         * @param message ZhifubaoInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.ZhifubaoInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ZhifubaoInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ModifyPassword. */
    interface IModifyPassword {

        /** ModifyPassword OldPwd */
        OldPwd: string;

        /** ModifyPassword NewPassword */
        NewPassword: string;
    }

    /** Represents a ModifyPassword. */
    class ModifyPassword implements IModifyPassword {

        /**
         * Constructs a new ModifyPassword.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IModifyPassword);

        /** ModifyPassword OldPwd. */
        public OldPwd: string;

        /** ModifyPassword NewPassword. */
        public NewPassword: string;

        /**
         * Creates a new ModifyPassword instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ModifyPassword instance
         */
        public static create(properties?: hall.IModifyPassword): hall.ModifyPassword;

        /**
         * Encodes the specified ModifyPassword message. Does not implicitly {@link hall.ModifyPassword.verify|verify} messages.
         * @param message ModifyPassword message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IModifyPassword, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ModifyPassword message, length delimited. Does not implicitly {@link hall.ModifyPassword.verify|verify} messages.
         * @param message ModifyPassword message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IModifyPassword, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ModifyPassword message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifyPassword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.ModifyPassword;

        /**
         * Decodes a ModifyPassword message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifyPassword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.ModifyPassword;

        /**
         * Verifies a ModifyPassword message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ModifyPassword message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModifyPassword
         */
        public static fromObject(object: { [k: string]: any }): hall.ModifyPassword;

        /**
         * Creates a plain object from a ModifyPassword message. Also converts values to other types if specified.
         * @param message ModifyPassword
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.ModifyPassword, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ModifyPassword to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendPhoneVCode. */
    interface ISendPhoneVCode {

        /** SendPhoneVCode Tel */
        Tel?: (string|null);

        /** SendPhoneVCode CodeType */
        CodeType: number;
    }

    /** Represents a SendPhoneVCode. */
    class SendPhoneVCode implements ISendPhoneVCode {

        /**
         * Constructs a new SendPhoneVCode.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.ISendPhoneVCode);

        /** SendPhoneVCode Tel. */
        public Tel: string;

        /** SendPhoneVCode CodeType. */
        public CodeType: number;

        /**
         * Creates a new SendPhoneVCode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendPhoneVCode instance
         */
        public static create(properties?: hall.ISendPhoneVCode): hall.SendPhoneVCode;

        /**
         * Encodes the specified SendPhoneVCode message. Does not implicitly {@link hall.SendPhoneVCode.verify|verify} messages.
         * @param message SendPhoneVCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.ISendPhoneVCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendPhoneVCode message, length delimited. Does not implicitly {@link hall.SendPhoneVCode.verify|verify} messages.
         * @param message SendPhoneVCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.ISendPhoneVCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendPhoneVCode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendPhoneVCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.SendPhoneVCode;

        /**
         * Decodes a SendPhoneVCode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendPhoneVCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.SendPhoneVCode;

        /**
         * Verifies a SendPhoneVCode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendPhoneVCode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendPhoneVCode
         */
        public static fromObject(object: { [k: string]: any }): hall.SendPhoneVCode;

        /**
         * Creates a plain object from a SendPhoneVCode message. Also converts values to other types if specified.
         * @param message SendPhoneVCode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.SendPhoneVCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendPhoneVCode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendPhoneVCodeRet. */
    interface ISendPhoneVCodeRet {

        /** SendPhoneVCodeRet Code */
        Code: number;

        /** SendPhoneVCodeRet Message */
        Message: string;

        /** SendPhoneVCodeRet CountDown */
        CountDown: number;
    }

    /** Represents a SendPhoneVCodeRet. */
    class SendPhoneVCodeRet implements ISendPhoneVCodeRet {

        /**
         * Constructs a new SendPhoneVCodeRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.ISendPhoneVCodeRet);

        /** SendPhoneVCodeRet Code. */
        public Code: number;

        /** SendPhoneVCodeRet Message. */
        public Message: string;

        /** SendPhoneVCodeRet CountDown. */
        public CountDown: number;

        /**
         * Creates a new SendPhoneVCodeRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendPhoneVCodeRet instance
         */
        public static create(properties?: hall.ISendPhoneVCodeRet): hall.SendPhoneVCodeRet;

        /**
         * Encodes the specified SendPhoneVCodeRet message. Does not implicitly {@link hall.SendPhoneVCodeRet.verify|verify} messages.
         * @param message SendPhoneVCodeRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.ISendPhoneVCodeRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendPhoneVCodeRet message, length delimited. Does not implicitly {@link hall.SendPhoneVCodeRet.verify|verify} messages.
         * @param message SendPhoneVCodeRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.ISendPhoneVCodeRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendPhoneVCodeRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendPhoneVCodeRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.SendPhoneVCodeRet;

        /**
         * Decodes a SendPhoneVCodeRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendPhoneVCodeRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.SendPhoneVCodeRet;

        /**
         * Verifies a SendPhoneVCodeRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendPhoneVCodeRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendPhoneVCodeRet
         */
        public static fromObject(object: { [k: string]: any }): hall.SendPhoneVCodeRet;

        /**
         * Creates a plain object from a SendPhoneVCodeRet message. Also converts values to other types if specified.
         * @param message SendPhoneVCodeRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.SendPhoneVCodeRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendPhoneVCodeRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ModifyFace. */
    interface IModifyFace {

        /** ModifyFace FaceID */
        FaceID: number;

        /** ModifyFace FaceFrameID */
        FaceFrameID?: (number|null);
    }

    /** Represents a ModifyFace. */
    class ModifyFace implements IModifyFace {

        /**
         * Constructs a new ModifyFace.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IModifyFace);

        /** ModifyFace FaceID. */
        public FaceID: number;

        /** ModifyFace FaceFrameID. */
        public FaceFrameID: number;

        /**
         * Creates a new ModifyFace instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ModifyFace instance
         */
        public static create(properties?: hall.IModifyFace): hall.ModifyFace;

        /**
         * Encodes the specified ModifyFace message. Does not implicitly {@link hall.ModifyFace.verify|verify} messages.
         * @param message ModifyFace message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IModifyFace, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ModifyFace message, length delimited. Does not implicitly {@link hall.ModifyFace.verify|verify} messages.
         * @param message ModifyFace message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IModifyFace, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ModifyFace message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifyFace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.ModifyFace;

        /**
         * Decodes a ModifyFace message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifyFace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.ModifyFace;

        /**
         * Verifies a ModifyFace message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ModifyFace message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModifyFace
         */
        public static fromObject(object: { [k: string]: any }): hall.ModifyFace;

        /**
         * Creates a plain object from a ModifyFace message. Also converts values to other types if specified.
         * @param message ModifyFace
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.ModifyFace, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ModifyFace to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MoneyDeposit. */
    interface IMoneyDeposit {

        /** MoneyDeposit Amount */
        Amount: (number|Long);

        /** MoneyDeposit MoneyPassword */
        MoneyPassword?: (string|null);

        /** MoneyDeposit OP */
        OP: number;
    }

    /** Represents a MoneyDeposit. */
    class MoneyDeposit implements IMoneyDeposit {

        /**
         * Constructs a new MoneyDeposit.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IMoneyDeposit);

        /** MoneyDeposit Amount. */
        public Amount: (number|Long);

        /** MoneyDeposit MoneyPassword. */
        public MoneyPassword: string;

        /** MoneyDeposit OP. */
        public OP: number;

        /**
         * Creates a new MoneyDeposit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MoneyDeposit instance
         */
        public static create(properties?: hall.IMoneyDeposit): hall.MoneyDeposit;

        /**
         * Encodes the specified MoneyDeposit message. Does not implicitly {@link hall.MoneyDeposit.verify|verify} messages.
         * @param message MoneyDeposit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IMoneyDeposit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MoneyDeposit message, length delimited. Does not implicitly {@link hall.MoneyDeposit.verify|verify} messages.
         * @param message MoneyDeposit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IMoneyDeposit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MoneyDeposit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MoneyDeposit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.MoneyDeposit;

        /**
         * Decodes a MoneyDeposit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MoneyDeposit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.MoneyDeposit;

        /**
         * Verifies a MoneyDeposit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MoneyDeposit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MoneyDeposit
         */
        public static fromObject(object: { [k: string]: any }): hall.MoneyDeposit;

        /**
         * Creates a plain object from a MoneyDeposit message. Also converts values to other types if specified.
         * @param message MoneyDeposit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.MoneyDeposit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MoneyDeposit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MoneyDepositRet. */
    interface IMoneyDepositRet {

        /** MoneyDepositRet Amount */
        Amount: (number|Long);

        /** MoneyDepositRet OP */
        OP: number;

        /** MoneyDepositRet Code */
        Code: number;

        /** MoneyDepositRet Message */
        Message: string;

        /** MoneyDepositRet CurrentMoney */
        CurrentMoney: (number|Long);

        /** MoneyDepositRet CurrentBank */
        CurrentBank: (number|Long);
    }

    /** Represents a MoneyDepositRet. */
    class MoneyDepositRet implements IMoneyDepositRet {

        /**
         * Constructs a new MoneyDepositRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IMoneyDepositRet);

        /** MoneyDepositRet Amount. */
        public Amount: (number|Long);

        /** MoneyDepositRet OP. */
        public OP: number;

        /** MoneyDepositRet Code. */
        public Code: number;

        /** MoneyDepositRet Message. */
        public Message: string;

        /** MoneyDepositRet CurrentMoney. */
        public CurrentMoney: (number|Long);

        /** MoneyDepositRet CurrentBank. */
        public CurrentBank: (number|Long);

        /**
         * Creates a new MoneyDepositRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MoneyDepositRet instance
         */
        public static create(properties?: hall.IMoneyDepositRet): hall.MoneyDepositRet;

        /**
         * Encodes the specified MoneyDepositRet message. Does not implicitly {@link hall.MoneyDepositRet.verify|verify} messages.
         * @param message MoneyDepositRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IMoneyDepositRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MoneyDepositRet message, length delimited. Does not implicitly {@link hall.MoneyDepositRet.verify|verify} messages.
         * @param message MoneyDepositRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IMoneyDepositRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MoneyDepositRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MoneyDepositRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.MoneyDepositRet;

        /**
         * Decodes a MoneyDepositRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MoneyDepositRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.MoneyDepositRet;

        /**
         * Verifies a MoneyDepositRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MoneyDepositRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MoneyDepositRet
         */
        public static fromObject(object: { [k: string]: any }): hall.MoneyDepositRet;

        /**
         * Creates a plain object from a MoneyDepositRet message. Also converts values to other types if specified.
         * @param message MoneyDepositRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.MoneyDepositRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MoneyDepositRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BindGuestAccount. */
    interface IBindGuestAccount {

        /** BindGuestAccount Tel */
        Tel: string;

        /** BindGuestAccount VCode */
        VCode: string;

        /** BindGuestAccount Password */
        Password: string;
    }

    /** Represents a BindGuestAccount. */
    class BindGuestAccount implements IBindGuestAccount {

        /**
         * Constructs a new BindGuestAccount.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IBindGuestAccount);

        /** BindGuestAccount Tel. */
        public Tel: string;

        /** BindGuestAccount VCode. */
        public VCode: string;

        /** BindGuestAccount Password. */
        public Password: string;

        /**
         * Creates a new BindGuestAccount instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BindGuestAccount instance
         */
        public static create(properties?: hall.IBindGuestAccount): hall.BindGuestAccount;

        /**
         * Encodes the specified BindGuestAccount message. Does not implicitly {@link hall.BindGuestAccount.verify|verify} messages.
         * @param message BindGuestAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IBindGuestAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BindGuestAccount message, length delimited. Does not implicitly {@link hall.BindGuestAccount.verify|verify} messages.
         * @param message BindGuestAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IBindGuestAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BindGuestAccount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BindGuestAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.BindGuestAccount;

        /**
         * Decodes a BindGuestAccount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BindGuestAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.BindGuestAccount;

        /**
         * Verifies a BindGuestAccount message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BindGuestAccount message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BindGuestAccount
         */
        public static fromObject(object: { [k: string]: any }): hall.BindGuestAccount;

        /**
         * Creates a plain object from a BindGuestAccount message. Also converts values to other types if specified.
         * @param message BindGuestAccount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.BindGuestAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BindGuestAccount to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestUserHallInfo. */
    interface IRequestUserHallInfo {

        /** RequestUserHallInfo SiteID */
        SiteID: number;
    }

    /** Represents a RequestUserHallInfo. */
    class RequestUserHallInfo implements IRequestUserHallInfo {

        /**
         * Constructs a new RequestUserHallInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IRequestUserHallInfo);

        /** RequestUserHallInfo SiteID. */
        public SiteID: number;

        /**
         * Creates a new RequestUserHallInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestUserHallInfo instance
         */
        public static create(properties?: hall.IRequestUserHallInfo): hall.RequestUserHallInfo;

        /**
         * Encodes the specified RequestUserHallInfo message. Does not implicitly {@link hall.RequestUserHallInfo.verify|verify} messages.
         * @param message RequestUserHallInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IRequestUserHallInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestUserHallInfo message, length delimited. Does not implicitly {@link hall.RequestUserHallInfo.verify|verify} messages.
         * @param message RequestUserHallInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IRequestUserHallInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestUserHallInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestUserHallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.RequestUserHallInfo;

        /**
         * Decodes a RequestUserHallInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestUserHallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.RequestUserHallInfo;

        /**
         * Verifies a RequestUserHallInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestUserHallInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestUserHallInfo
         */
        public static fromObject(object: { [k: string]: any }): hall.RequestUserHallInfo;

        /**
         * Creates a plain object from a RequestUserHallInfo message. Also converts values to other types if specified.
         * @param message RequestUserHallInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.RequestUserHallInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestUserHallInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FindSetPwdByPhone. */
    interface IFindSetPwdByPhone {

        /** FindSetPwdByPhone Tel */
        Tel: string;

        /** FindSetPwdByPhone VCode */
        VCode: string;

        /** FindSetPwdByPhone Password */
        Password: string;
    }

    /** Represents a FindSetPwdByPhone. */
    class FindSetPwdByPhone implements IFindSetPwdByPhone {

        /**
         * Constructs a new FindSetPwdByPhone.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IFindSetPwdByPhone);

        /** FindSetPwdByPhone Tel. */
        public Tel: string;

        /** FindSetPwdByPhone VCode. */
        public VCode: string;

        /** FindSetPwdByPhone Password. */
        public Password: string;

        /**
         * Creates a new FindSetPwdByPhone instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FindSetPwdByPhone instance
         */
        public static create(properties?: hall.IFindSetPwdByPhone): hall.FindSetPwdByPhone;

        /**
         * Encodes the specified FindSetPwdByPhone message. Does not implicitly {@link hall.FindSetPwdByPhone.verify|verify} messages.
         * @param message FindSetPwdByPhone message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IFindSetPwdByPhone, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FindSetPwdByPhone message, length delimited. Does not implicitly {@link hall.FindSetPwdByPhone.verify|verify} messages.
         * @param message FindSetPwdByPhone message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IFindSetPwdByPhone, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FindSetPwdByPhone message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FindSetPwdByPhone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.FindSetPwdByPhone;

        /**
         * Decodes a FindSetPwdByPhone message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FindSetPwdByPhone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.FindSetPwdByPhone;

        /**
         * Verifies a FindSetPwdByPhone message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FindSetPwdByPhone message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FindSetPwdByPhone
         */
        public static fromObject(object: { [k: string]: any }): hall.FindSetPwdByPhone;

        /**
         * Creates a plain object from a FindSetPwdByPhone message. Also converts values to other types if specified.
         * @param message FindSetPwdByPhone
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.FindSetPwdByPhone, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FindSetPwdByPhone to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ModifyBankPassword. */
    interface IModifyBankPassword {

        /** ModifyBankPassword OldPwd */
        OldPwd: string;

        /** ModifyBankPassword NewPassword */
        NewPassword: string;
    }

    /** Represents a ModifyBankPassword. */
    class ModifyBankPassword implements IModifyBankPassword {

        /**
         * Constructs a new ModifyBankPassword.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IModifyBankPassword);

        /** ModifyBankPassword OldPwd. */
        public OldPwd: string;

        /** ModifyBankPassword NewPassword. */
        public NewPassword: string;

        /**
         * Creates a new ModifyBankPassword instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ModifyBankPassword instance
         */
        public static create(properties?: hall.IModifyBankPassword): hall.ModifyBankPassword;

        /**
         * Encodes the specified ModifyBankPassword message. Does not implicitly {@link hall.ModifyBankPassword.verify|verify} messages.
         * @param message ModifyBankPassword message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IModifyBankPassword, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ModifyBankPassword message, length delimited. Does not implicitly {@link hall.ModifyBankPassword.verify|verify} messages.
         * @param message ModifyBankPassword message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IModifyBankPassword, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ModifyBankPassword message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifyBankPassword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.ModifyBankPassword;

        /**
         * Decodes a ModifyBankPassword message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifyBankPassword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.ModifyBankPassword;

        /**
         * Verifies a ModifyBankPassword message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ModifyBankPassword message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ModifyBankPassword
         */
        public static fromObject(object: { [k: string]: any }): hall.ModifyBankPassword;

        /**
         * Creates a plain object from a ModifyBankPassword message. Also converts values to other types if specified.
         * @param message ModifyBankPassword
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.ModifyBankPassword, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ModifyBankPassword to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FindSetBankPwdByPhone. */
    interface IFindSetBankPwdByPhone {

        /** FindSetBankPwdByPhone VCode */
        VCode: string;

        /** FindSetBankPwdByPhone Password */
        Password: string;
    }

    /** Represents a FindSetBankPwdByPhone. */
    class FindSetBankPwdByPhone implements IFindSetBankPwdByPhone {

        /**
         * Constructs a new FindSetBankPwdByPhone.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IFindSetBankPwdByPhone);

        /** FindSetBankPwdByPhone VCode. */
        public VCode: string;

        /** FindSetBankPwdByPhone Password. */
        public Password: string;

        /**
         * Creates a new FindSetBankPwdByPhone instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FindSetBankPwdByPhone instance
         */
        public static create(properties?: hall.IFindSetBankPwdByPhone): hall.FindSetBankPwdByPhone;

        /**
         * Encodes the specified FindSetBankPwdByPhone message. Does not implicitly {@link hall.FindSetBankPwdByPhone.verify|verify} messages.
         * @param message FindSetBankPwdByPhone message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IFindSetBankPwdByPhone, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FindSetBankPwdByPhone message, length delimited. Does not implicitly {@link hall.FindSetBankPwdByPhone.verify|verify} messages.
         * @param message FindSetBankPwdByPhone message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IFindSetBankPwdByPhone, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FindSetBankPwdByPhone message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FindSetBankPwdByPhone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.FindSetBankPwdByPhone;

        /**
         * Decodes a FindSetBankPwdByPhone message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FindSetBankPwdByPhone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.FindSetBankPwdByPhone;

        /**
         * Verifies a FindSetBankPwdByPhone message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FindSetBankPwdByPhone message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FindSetBankPwdByPhone
         */
        public static fromObject(object: { [k: string]: any }): hall.FindSetBankPwdByPhone;

        /**
         * Creates a plain object from a FindSetBankPwdByPhone message. Also converts values to other types if specified.
         * @param message FindSetBankPwdByPhone
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.FindSetBankPwdByPhone, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FindSetBankPwdByPhone to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailDetail. */
    interface IMailDetail {

        /** MailDetail ID */
        ID: number;

        /** MailDetail Title */
        Title: string;

        /** MailDetail Content */
        Content: string;

        /** MailDetail IsRead */
        IsRead: boolean;

        /** MailDetail SendTime */
        SendTime: string;

        /** MailDetail MailAnnexList */
        MailAnnexList?: (hall.IMailAnnex[]|null);

        /** MailDetail IsReceive */
        IsReceive?: (boolean|null);

        /** MailDetail SendTimeStamp */
        SendTimeStamp?: (number|null);
    }

    /** Represents a MailDetail. */
    class MailDetail implements IMailDetail {

        /**
         * Constructs a new MailDetail.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IMailDetail);

        /** MailDetail ID. */
        public ID: number;

        /** MailDetail Title. */
        public Title: string;

        /** MailDetail Content. */
        public Content: string;

        /** MailDetail IsRead. */
        public IsRead: boolean;

        /** MailDetail SendTime. */
        public SendTime: string;

        /** MailDetail MailAnnexList. */
        public MailAnnexList: hall.IMailAnnex[];

        /** MailDetail IsReceive. */
        public IsReceive: boolean;

        /** MailDetail SendTimeStamp. */
        public SendTimeStamp: number;

        /**
         * Creates a new MailDetail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailDetail instance
         */
        public static create(properties?: hall.IMailDetail): hall.MailDetail;

        /**
         * Encodes the specified MailDetail message. Does not implicitly {@link hall.MailDetail.verify|verify} messages.
         * @param message MailDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IMailDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MailDetail message, length delimited. Does not implicitly {@link hall.MailDetail.verify|verify} messages.
         * @param message MailDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IMailDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MailDetail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.MailDetail;

        /**
         * Decodes a MailDetail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.MailDetail;

        /**
         * Verifies a MailDetail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailDetail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailDetail
         */
        public static fromObject(object: { [k: string]: any }): hall.MailDetail;

        /**
         * Creates a plain object from a MailDetail message. Also converts values to other types if specified.
         * @param message MailDetail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.MailDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailDetail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailList. */
    interface IMailList {

        /** MailList MailList */
        MailList?: (hall.IMailDetail[]|null);
    }

    /** Represents a MailList. */
    class MailList implements IMailList {

        /**
         * Constructs a new MailList.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IMailList);

        /** MailList MailList. */
        public MailList: hall.IMailDetail[];

        /**
         * Creates a new MailList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailList instance
         */
        public static create(properties?: hall.IMailList): hall.MailList;

        /**
         * Encodes the specified MailList message. Does not implicitly {@link hall.MailList.verify|verify} messages.
         * @param message MailList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IMailList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MailList message, length delimited. Does not implicitly {@link hall.MailList.verify|verify} messages.
         * @param message MailList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IMailList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MailList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.MailList;

        /**
         * Decodes a MailList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.MailList;

        /**
         * Verifies a MailList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailList
         */
        public static fromObject(object: { [k: string]: any }): hall.MailList;

        /**
         * Creates a plain object from a MailList message. Also converts values to other types if specified.
         * @param message MailList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.MailList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestMailDetail. */
    interface IRequestMailDetail {

        /** RequestMailDetail ID */
        ID: number;
    }

    /** Represents a RequestMailDetail. */
    class RequestMailDetail implements IRequestMailDetail {

        /**
         * Constructs a new RequestMailDetail.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IRequestMailDetail);

        /** RequestMailDetail ID. */
        public ID: number;

        /**
         * Creates a new RequestMailDetail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestMailDetail instance
         */
        public static create(properties?: hall.IRequestMailDetail): hall.RequestMailDetail;

        /**
         * Encodes the specified RequestMailDetail message. Does not implicitly {@link hall.RequestMailDetail.verify|verify} messages.
         * @param message RequestMailDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IRequestMailDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestMailDetail message, length delimited. Does not implicitly {@link hall.RequestMailDetail.verify|verify} messages.
         * @param message RequestMailDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IRequestMailDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestMailDetail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestMailDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.RequestMailDetail;

        /**
         * Decodes a RequestMailDetail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestMailDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.RequestMailDetail;

        /**
         * Verifies a RequestMailDetail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestMailDetail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestMailDetail
         */
        public static fromObject(object: { [k: string]: any }): hall.RequestMailDetail;

        /**
         * Creates a plain object from a RequestMailDetail message. Also converts values to other types if specified.
         * @param message RequestMailDetail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.RequestMailDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestMailDetail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ContactService. */
    interface IContactService {

        /** ContactService Msg */
        Msg: string;
    }

    /** Represents a ContactService. */
    class ContactService implements IContactService {

        /**
         * Constructs a new ContactService.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IContactService);

        /** ContactService Msg. */
        public Msg: string;

        /**
         * Creates a new ContactService instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContactService instance
         */
        public static create(properties?: hall.IContactService): hall.ContactService;

        /**
         * Encodes the specified ContactService message. Does not implicitly {@link hall.ContactService.verify|verify} messages.
         * @param message ContactService message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IContactService, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContactService message, length delimited. Does not implicitly {@link hall.ContactService.verify|verify} messages.
         * @param message ContactService message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IContactService, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContactService message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContactService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.ContactService;

        /**
         * Decodes a ContactService message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContactService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.ContactService;

        /**
         * Verifies a ContactService message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContactService message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContactService
         */
        public static fromObject(object: { [k: string]: any }): hall.ContactService;

        /**
         * Creates a plain object from a ContactService message. Also converts values to other types if specified.
         * @param message ContactService
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.ContactService, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContactService to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AgentDeatil. */
    interface IAgentDeatil {

        /** AgentDeatil Name */
        Name: string;

        /** AgentDeatil WXNo */
        WXNo: string;

        /** AgentDeatil QQ */
        QQ: string;
    }

    /** Represents an AgentDeatil. */
    class AgentDeatil implements IAgentDeatil {

        /**
         * Constructs a new AgentDeatil.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IAgentDeatil);

        /** AgentDeatil Name. */
        public Name: string;

        /** AgentDeatil WXNo. */
        public WXNo: string;

        /** AgentDeatil QQ. */
        public QQ: string;

        /**
         * Creates a new AgentDeatil instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AgentDeatil instance
         */
        public static create(properties?: hall.IAgentDeatil): hall.AgentDeatil;

        /**
         * Encodes the specified AgentDeatil message. Does not implicitly {@link hall.AgentDeatil.verify|verify} messages.
         * @param message AgentDeatil message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IAgentDeatil, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AgentDeatil message, length delimited. Does not implicitly {@link hall.AgentDeatil.verify|verify} messages.
         * @param message AgentDeatil message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IAgentDeatil, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AgentDeatil message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AgentDeatil
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.AgentDeatil;

        /**
         * Decodes an AgentDeatil message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AgentDeatil
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.AgentDeatil;

        /**
         * Verifies an AgentDeatil message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AgentDeatil message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AgentDeatil
         */
        public static fromObject(object: { [k: string]: any }): hall.AgentDeatil;

        /**
         * Creates a plain object from an AgentDeatil message. Also converts values to other types if specified.
         * @param message AgentDeatil
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.AgentDeatil, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AgentDeatil to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AgentList. */
    interface IAgentList {

        /** AgentList AgentList */
        AgentList?: (hall.IAgentDeatil[]|null);
    }

    /** Represents an AgentList. */
    class AgentList implements IAgentList {

        /**
         * Constructs a new AgentList.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IAgentList);

        /** AgentList AgentList. */
        public AgentList: hall.IAgentDeatil[];

        /**
         * Creates a new AgentList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AgentList instance
         */
        public static create(properties?: hall.IAgentList): hall.AgentList;

        /**
         * Encodes the specified AgentList message. Does not implicitly {@link hall.AgentList.verify|verify} messages.
         * @param message AgentList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IAgentList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AgentList message, length delimited. Does not implicitly {@link hall.AgentList.verify|verify} messages.
         * @param message AgentList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IAgentList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AgentList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AgentList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.AgentList;

        /**
         * Decodes an AgentList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AgentList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.AgentList;

        /**
         * Verifies an AgentList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AgentList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AgentList
         */
        public static fromObject(object: { [k: string]: any }): hall.AgentList;

        /**
         * Creates a plain object from an AgentList message. Also converts values to other types if specified.
         * @param message AgentList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.AgentList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AgentList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReportAgent. */
    interface IReportAgent {

        /** ReportAgent AreaID */
        AreaID: number;

        /** ReportAgent AgentName */
        AgentName: string;

        /** ReportAgent Content */
        Content: string;
    }

    /** Represents a ReportAgent. */
    class ReportAgent implements IReportAgent {

        /**
         * Constructs a new ReportAgent.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IReportAgent);

        /** ReportAgent AreaID. */
        public AreaID: number;

        /** ReportAgent AgentName. */
        public AgentName: string;

        /** ReportAgent Content. */
        public Content: string;

        /**
         * Creates a new ReportAgent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReportAgent instance
         */
        public static create(properties?: hall.IReportAgent): hall.ReportAgent;

        /**
         * Encodes the specified ReportAgent message. Does not implicitly {@link hall.ReportAgent.verify|verify} messages.
         * @param message ReportAgent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IReportAgent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReportAgent message, length delimited. Does not implicitly {@link hall.ReportAgent.verify|verify} messages.
         * @param message ReportAgent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IReportAgent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReportAgent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReportAgent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.ReportAgent;

        /**
         * Decodes a ReportAgent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReportAgent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.ReportAgent;

        /**
         * Verifies a ReportAgent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReportAgent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReportAgent
         */
        public static fromObject(object: { [k: string]: any }): hall.ReportAgent;

        /**
         * Creates a plain object from a ReportAgent message. Also converts values to other types if specified.
         * @param message ReportAgent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.ReportAgent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReportAgent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestAgentList. */
    interface IRequestAgentList {

        /** RequestAgentList AreaID */
        AreaID: number;
    }

    /** Represents a RequestAgentList. */
    class RequestAgentList implements IRequestAgentList {

        /**
         * Constructs a new RequestAgentList.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IRequestAgentList);

        /** RequestAgentList AreaID. */
        public AreaID: number;

        /**
         * Creates a new RequestAgentList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestAgentList instance
         */
        public static create(properties?: hall.IRequestAgentList): hall.RequestAgentList;

        /**
         * Encodes the specified RequestAgentList message. Does not implicitly {@link hall.RequestAgentList.verify|verify} messages.
         * @param message RequestAgentList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IRequestAgentList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestAgentList message, length delimited. Does not implicitly {@link hall.RequestAgentList.verify|verify} messages.
         * @param message RequestAgentList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IRequestAgentList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestAgentList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestAgentList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.RequestAgentList;

        /**
         * Decodes a RequestAgentList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestAgentList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.RequestAgentList;

        /**
         * Verifies a RequestAgentList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestAgentList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestAgentList
         */
        public static fromObject(object: { [k: string]: any }): hall.RequestAgentList;

        /**
         * Creates a plain object from a RequestAgentList message. Also converts values to other types if specified.
         * @param message RequestAgentList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.RequestAgentList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestAgentList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ApplyAgent. */
    interface IApplyAgent {

        /** ApplyAgent AreaID */
        AreaID: number;

        /** ApplyAgent Name */
        Name: string;

        /** ApplyAgent Tel */
        Tel: string;

        /** ApplyAgent QQ */
        QQ: string;

        /** ApplyAgent WXNo */
        WXNo: string;

        /** ApplyAgent Memo */
        Memo: string;
    }

    /** Represents an ApplyAgent. */
    class ApplyAgent implements IApplyAgent {

        /**
         * Constructs a new ApplyAgent.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IApplyAgent);

        /** ApplyAgent AreaID. */
        public AreaID: number;

        /** ApplyAgent Name. */
        public Name: string;

        /** ApplyAgent Tel. */
        public Tel: string;

        /** ApplyAgent QQ. */
        public QQ: string;

        /** ApplyAgent WXNo. */
        public WXNo: string;

        /** ApplyAgent Memo. */
        public Memo: string;

        /**
         * Creates a new ApplyAgent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ApplyAgent instance
         */
        public static create(properties?: hall.IApplyAgent): hall.ApplyAgent;

        /**
         * Encodes the specified ApplyAgent message. Does not implicitly {@link hall.ApplyAgent.verify|verify} messages.
         * @param message ApplyAgent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IApplyAgent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ApplyAgent message, length delimited. Does not implicitly {@link hall.ApplyAgent.verify|verify} messages.
         * @param message ApplyAgent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IApplyAgent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApplyAgent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApplyAgent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.ApplyAgent;

        /**
         * Decodes an ApplyAgent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ApplyAgent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.ApplyAgent;

        /**
         * Verifies an ApplyAgent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ApplyAgent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ApplyAgent
         */
        public static fromObject(object: { [k: string]: any }): hall.ApplyAgent;

        /**
         * Creates a plain object from an ApplyAgent message. Also converts values to other types if specified.
         * @param message ApplyAgent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.ApplyAgent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ApplyAgent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ConvertMoney. */
    interface IConvertMoney {

        /** ConvertMoney Amount */
        Amount: (number|Long);

        /** ConvertMoney cvttype */
        cvttype?: (number|null);
    }

    /** Represents a ConvertMoney. */
    class ConvertMoney implements IConvertMoney {

        /**
         * Constructs a new ConvertMoney.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IConvertMoney);

        /** ConvertMoney Amount. */
        public Amount: (number|Long);

        /** ConvertMoney cvttype. */
        public cvttype: number;

        /**
         * Creates a new ConvertMoney instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConvertMoney instance
         */
        public static create(properties?: hall.IConvertMoney): hall.ConvertMoney;

        /**
         * Encodes the specified ConvertMoney message. Does not implicitly {@link hall.ConvertMoney.verify|verify} messages.
         * @param message ConvertMoney message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IConvertMoney, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConvertMoney message, length delimited. Does not implicitly {@link hall.ConvertMoney.verify|verify} messages.
         * @param message ConvertMoney message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IConvertMoney, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConvertMoney message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConvertMoney
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.ConvertMoney;

        /**
         * Decodes a ConvertMoney message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConvertMoney
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.ConvertMoney;

        /**
         * Verifies a ConvertMoney message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConvertMoney message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConvertMoney
         */
        public static fromObject(object: { [k: string]: any }): hall.ConvertMoney;

        /**
         * Creates a plain object from a ConvertMoney message. Also converts values to other types if specified.
         * @param message ConvertMoney
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.ConvertMoney, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConvertMoney to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreatePayOrder. */
    interface ICreatePayOrder {

        /** CreatePayOrder PayTypeID */
        PayTypeID: number;

        /** CreatePayOrder Amount */
        Amount: (number|Long);
    }

    /** Represents a CreatePayOrder. */
    class CreatePayOrder implements ICreatePayOrder {

        /**
         * Constructs a new CreatePayOrder.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.ICreatePayOrder);

        /** CreatePayOrder PayTypeID. */
        public PayTypeID: number;

        /** CreatePayOrder Amount. */
        public Amount: (number|Long);

        /**
         * Creates a new CreatePayOrder instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreatePayOrder instance
         */
        public static create(properties?: hall.ICreatePayOrder): hall.CreatePayOrder;

        /**
         * Encodes the specified CreatePayOrder message. Does not implicitly {@link hall.CreatePayOrder.verify|verify} messages.
         * @param message CreatePayOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.ICreatePayOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreatePayOrder message, length delimited. Does not implicitly {@link hall.CreatePayOrder.verify|verify} messages.
         * @param message CreatePayOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.ICreatePayOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreatePayOrder message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreatePayOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.CreatePayOrder;

        /**
         * Decodes a CreatePayOrder message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreatePayOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.CreatePayOrder;

        /**
         * Verifies a CreatePayOrder message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreatePayOrder message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreatePayOrder
         */
        public static fromObject(object: { [k: string]: any }): hall.CreatePayOrder;

        /**
         * Creates a plain object from a CreatePayOrder message. Also converts values to other types if specified.
         * @param message CreatePayOrder
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.CreatePayOrder, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreatePayOrder to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreatePayOrderRet. */
    interface ICreatePayOrderRet {

        /** CreatePayOrderRet code */
        code: number;

        /** CreatePayOrderRet message */
        message: string;

        /** CreatePayOrderRet OrderID */
        OrderID: number;
    }

    /** Represents a CreatePayOrderRet. */
    class CreatePayOrderRet implements ICreatePayOrderRet {

        /**
         * Constructs a new CreatePayOrderRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.ICreatePayOrderRet);

        /** CreatePayOrderRet code. */
        public code: number;

        /** CreatePayOrderRet message. */
        public message: string;

        /** CreatePayOrderRet OrderID. */
        public OrderID: number;

        /**
         * Creates a new CreatePayOrderRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreatePayOrderRet instance
         */
        public static create(properties?: hall.ICreatePayOrderRet): hall.CreatePayOrderRet;

        /**
         * Encodes the specified CreatePayOrderRet message. Does not implicitly {@link hall.CreatePayOrderRet.verify|verify} messages.
         * @param message CreatePayOrderRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.ICreatePayOrderRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreatePayOrderRet message, length delimited. Does not implicitly {@link hall.CreatePayOrderRet.verify|verify} messages.
         * @param message CreatePayOrderRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.ICreatePayOrderRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreatePayOrderRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreatePayOrderRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.CreatePayOrderRet;

        /**
         * Decodes a CreatePayOrderRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreatePayOrderRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.CreatePayOrderRet;

        /**
         * Verifies a CreatePayOrderRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreatePayOrderRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreatePayOrderRet
         */
        public static fromObject(object: { [k: string]: any }): hall.CreatePayOrderRet;

        /**
         * Creates a plain object from a CreatePayOrderRet message. Also converts values to other types if specified.
         * @param message CreatePayOrderRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.CreatePayOrderRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreatePayOrderRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetFAQ. */
    interface IGetFAQ {

        /** GetFAQ PlatformID */
        PlatformID: number;
    }

    /** Represents a GetFAQ. */
    class GetFAQ implements IGetFAQ {

        /**
         * Constructs a new GetFAQ.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IGetFAQ);

        /** GetFAQ PlatformID. */
        public PlatformID: number;

        /**
         * Creates a new GetFAQ instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetFAQ instance
         */
        public static create(properties?: hall.IGetFAQ): hall.GetFAQ;

        /**
         * Encodes the specified GetFAQ message. Does not implicitly {@link hall.GetFAQ.verify|verify} messages.
         * @param message GetFAQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IGetFAQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetFAQ message, length delimited. Does not implicitly {@link hall.GetFAQ.verify|verify} messages.
         * @param message GetFAQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IGetFAQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetFAQ message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetFAQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.GetFAQ;

        /**
         * Decodes a GetFAQ message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetFAQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.GetFAQ;

        /**
         * Verifies a GetFAQ message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetFAQ message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetFAQ
         */
        public static fromObject(object: { [k: string]: any }): hall.GetFAQ;

        /**
         * Creates a plain object from a GetFAQ message. Also converts values to other types if specified.
         * @param message GetFAQ
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.GetFAQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetFAQ to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FAQDetail. */
    interface IFAQDetail {

        /** FAQDetail Content */
        Content: string;
    }

    /** Represents a FAQDetail. */
    class FAQDetail implements IFAQDetail {

        /**
         * Constructs a new FAQDetail.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IFAQDetail);

        /** FAQDetail Content. */
        public Content: string;

        /**
         * Creates a new FAQDetail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FAQDetail instance
         */
        public static create(properties?: hall.IFAQDetail): hall.FAQDetail;

        /**
         * Encodes the specified FAQDetail message. Does not implicitly {@link hall.FAQDetail.verify|verify} messages.
         * @param message FAQDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IFAQDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FAQDetail message, length delimited. Does not implicitly {@link hall.FAQDetail.verify|verify} messages.
         * @param message FAQDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IFAQDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FAQDetail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FAQDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.FAQDetail;

        /**
         * Decodes a FAQDetail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FAQDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.FAQDetail;

        /**
         * Verifies a FAQDetail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FAQDetail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FAQDetail
         */
        public static fromObject(object: { [k: string]: any }): hall.FAQDetail;

        /**
         * Creates a plain object from a FAQDetail message. Also converts values to other types if specified.
         * @param message FAQDetail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.FAQDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FAQDetail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BankCardInfo. */
    interface IBankCardInfo {

        /** BankCardInfo BankCardNumber */
        BankCardNumber: string;

        /** BankCardInfo BankCardName */
        BankCardName: string;

        /** BankCardInfo BankName */
        BankName?: (string|null);

        /** BankCardInfo NeedVcode */
        NeedVcode?: (number|null);

        /** BankCardInfo Vcode */
        Vcode?: (string|null);
    }

    /** Represents a BankCardInfo. */
    class BankCardInfo implements IBankCardInfo {

        /**
         * Constructs a new BankCardInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IBankCardInfo);

        /** BankCardInfo BankCardNumber. */
        public BankCardNumber: string;

        /** BankCardInfo BankCardName. */
        public BankCardName: string;

        /** BankCardInfo BankName. */
        public BankName: string;

        /** BankCardInfo NeedVcode. */
        public NeedVcode: number;

        /** BankCardInfo Vcode. */
        public Vcode: string;

        /**
         * Creates a new BankCardInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BankCardInfo instance
         */
        public static create(properties?: hall.IBankCardInfo): hall.BankCardInfo;

        /**
         * Encodes the specified BankCardInfo message. Does not implicitly {@link hall.BankCardInfo.verify|verify} messages.
         * @param message BankCardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IBankCardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BankCardInfo message, length delimited. Does not implicitly {@link hall.BankCardInfo.verify|verify} messages.
         * @param message BankCardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IBankCardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BankCardInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BankCardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.BankCardInfo;

        /**
         * Decodes a BankCardInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BankCardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.BankCardInfo;

        /**
         * Verifies a BankCardInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BankCardInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BankCardInfo
         */
        public static fromObject(object: { [k: string]: any }): hall.BankCardInfo;

        /**
         * Creates a plain object from a BankCardInfo message. Also converts values to other types if specified.
         * @param message BankCardInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.BankCardInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BankCardInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UnbindConvertType. */
    interface IUnbindConvertType {

        /** UnbindConvertType Tel */
        Tel: string;

        /** UnbindConvertType VCode */
        VCode: string;

        /** UnbindConvertType cvttype */
        cvttype: number;
    }

    /** Represents an UnbindConvertType. */
    class UnbindConvertType implements IUnbindConvertType {

        /**
         * Constructs a new UnbindConvertType.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IUnbindConvertType);

        /** UnbindConvertType Tel. */
        public Tel: string;

        /** UnbindConvertType VCode. */
        public VCode: string;

        /** UnbindConvertType cvttype. */
        public cvttype: number;

        /**
         * Creates a new UnbindConvertType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnbindConvertType instance
         */
        public static create(properties?: hall.IUnbindConvertType): hall.UnbindConvertType;

        /**
         * Encodes the specified UnbindConvertType message. Does not implicitly {@link hall.UnbindConvertType.verify|verify} messages.
         * @param message UnbindConvertType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IUnbindConvertType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnbindConvertType message, length delimited. Does not implicitly {@link hall.UnbindConvertType.verify|verify} messages.
         * @param message UnbindConvertType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IUnbindConvertType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnbindConvertType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnbindConvertType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.UnbindConvertType;

        /**
         * Decodes an UnbindConvertType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnbindConvertType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.UnbindConvertType;

        /**
         * Verifies an UnbindConvertType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UnbindConvertType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnbindConvertType
         */
        public static fromObject(object: { [k: string]: any }): hall.UnbindConvertType;

        /**
         * Creates a plain object from an UnbindConvertType message. Also converts values to other types if specified.
         * @param message UnbindConvertType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.UnbindConvertType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnbindConvertType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ThirdAPIParam. */
    interface IThirdAPIParam {

        /** ThirdAPIParam Name */
        Name: string;

        /** ThirdAPIParam Value */
        Value: string;
    }

    /** Represents a ThirdAPIParam. */
    class ThirdAPIParam implements IThirdAPIParam {

        /**
         * Constructs a new ThirdAPIParam.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IThirdAPIParam);

        /** ThirdAPIParam Name. */
        public Name: string;

        /** ThirdAPIParam Value. */
        public Value: string;

        /**
         * Creates a new ThirdAPIParam instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ThirdAPIParam instance
         */
        public static create(properties?: hall.IThirdAPIParam): hall.ThirdAPIParam;

        /**
         * Encodes the specified ThirdAPIParam message. Does not implicitly {@link hall.ThirdAPIParam.verify|verify} messages.
         * @param message ThirdAPIParam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IThirdAPIParam, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ThirdAPIParam message, length delimited. Does not implicitly {@link hall.ThirdAPIParam.verify|verify} messages.
         * @param message ThirdAPIParam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IThirdAPIParam, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ThirdAPIParam message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ThirdAPIParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.ThirdAPIParam;

        /**
         * Decodes a ThirdAPIParam message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ThirdAPIParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.ThirdAPIParam;

        /**
         * Verifies a ThirdAPIParam message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ThirdAPIParam message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ThirdAPIParam
         */
        public static fromObject(object: { [k: string]: any }): hall.ThirdAPIParam;

        /**
         * Creates a plain object from a ThirdAPIParam message. Also converts values to other types if specified.
         * @param message ThirdAPIParam
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.ThirdAPIParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ThirdAPIParam to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ThirdAPIReq. */
    interface IThirdAPIReq {

        /** ThirdAPIReq ReqNames */
        ReqNames?: (string[]|null);

        /** ThirdAPIReq Params */
        Params?: (hall.IThirdAPIParam[]|null);
    }

    /** Represents a ThirdAPIReq. */
    class ThirdAPIReq implements IThirdAPIReq {

        /**
         * Constructs a new ThirdAPIReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IThirdAPIReq);

        /** ThirdAPIReq ReqNames. */
        public ReqNames: string[];

        /** ThirdAPIReq Params. */
        public Params: hall.IThirdAPIParam[];

        /**
         * Creates a new ThirdAPIReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ThirdAPIReq instance
         */
        public static create(properties?: hall.IThirdAPIReq): hall.ThirdAPIReq;

        /**
         * Encodes the specified ThirdAPIReq message. Does not implicitly {@link hall.ThirdAPIReq.verify|verify} messages.
         * @param message ThirdAPIReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IThirdAPIReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ThirdAPIReq message, length delimited. Does not implicitly {@link hall.ThirdAPIReq.verify|verify} messages.
         * @param message ThirdAPIReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IThirdAPIReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ThirdAPIReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ThirdAPIReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.ThirdAPIReq;

        /**
         * Decodes a ThirdAPIReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ThirdAPIReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.ThirdAPIReq;

        /**
         * Verifies a ThirdAPIReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ThirdAPIReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ThirdAPIReq
         */
        public static fromObject(object: { [k: string]: any }): hall.ThirdAPIReq;

        /**
         * Creates a plain object from a ThirdAPIReq message. Also converts values to other types if specified.
         * @param message ThirdAPIReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.ThirdAPIReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ThirdAPIReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ThirdAPIResp. */
    interface IThirdAPIResp {

        /** ThirdAPIResp Code */
        Code: number;

        /** ThirdAPIResp Message */
        Message?: (string|null);

        /** ThirdAPIResp RetJson */
        RetJson?: (string|null);
    }

    /** Represents a ThirdAPIResp. */
    class ThirdAPIResp implements IThirdAPIResp {

        /**
         * Constructs a new ThirdAPIResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IThirdAPIResp);

        /** ThirdAPIResp Code. */
        public Code: number;

        /** ThirdAPIResp Message. */
        public Message: string;

        /** ThirdAPIResp RetJson. */
        public RetJson: string;

        /**
         * Creates a new ThirdAPIResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ThirdAPIResp instance
         */
        public static create(properties?: hall.IThirdAPIResp): hall.ThirdAPIResp;

        /**
         * Encodes the specified ThirdAPIResp message. Does not implicitly {@link hall.ThirdAPIResp.verify|verify} messages.
         * @param message ThirdAPIResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IThirdAPIResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ThirdAPIResp message, length delimited. Does not implicitly {@link hall.ThirdAPIResp.verify|verify} messages.
         * @param message ThirdAPIResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IThirdAPIResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ThirdAPIResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ThirdAPIResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.ThirdAPIResp;

        /**
         * Decodes a ThirdAPIResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ThirdAPIResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.ThirdAPIResp;

        /**
         * Verifies a ThirdAPIResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ThirdAPIResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ThirdAPIResp
         */
        public static fromObject(object: { [k: string]: any }): hall.ThirdAPIResp;

        /**
         * Creates a plain object from a ThirdAPIResp message. Also converts values to other types if specified.
         * @param message ThirdAPIResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.ThirdAPIResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ThirdAPIResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VideoGameAPIReq. */
    interface IVideoGameAPIReq {

        /** VideoGameAPIReq VGameID */
        VGameID: number;
    }

    /** Represents a VideoGameAPIReq. */
    class VideoGameAPIReq implements IVideoGameAPIReq {

        /**
         * Constructs a new VideoGameAPIReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IVideoGameAPIReq);

        /** VideoGameAPIReq VGameID. */
        public VGameID: number;

        /**
         * Creates a new VideoGameAPIReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VideoGameAPIReq instance
         */
        public static create(properties?: hall.IVideoGameAPIReq): hall.VideoGameAPIReq;

        /**
         * Encodes the specified VideoGameAPIReq message. Does not implicitly {@link hall.VideoGameAPIReq.verify|verify} messages.
         * @param message VideoGameAPIReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IVideoGameAPIReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VideoGameAPIReq message, length delimited. Does not implicitly {@link hall.VideoGameAPIReq.verify|verify} messages.
         * @param message VideoGameAPIReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IVideoGameAPIReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VideoGameAPIReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VideoGameAPIReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.VideoGameAPIReq;

        /**
         * Decodes a VideoGameAPIReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VideoGameAPIReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.VideoGameAPIReq;

        /**
         * Verifies a VideoGameAPIReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VideoGameAPIReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VideoGameAPIReq
         */
        public static fromObject(object: { [k: string]: any }): hall.VideoGameAPIReq;

        /**
         * Creates a plain object from a VideoGameAPIReq message. Also converts values to other types if specified.
         * @param message VideoGameAPIReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.VideoGameAPIReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VideoGameAPIReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VideoGameAPIRet. */
    interface IVideoGameAPIRet {

        /** VideoGameAPIRet VGameID */
        VGameID: number;

        /** VideoGameAPIRet Status */
        Status: number;

        /** VideoGameAPIRet Result */
        Result?: (string|null);
    }

    /** Represents a VideoGameAPIRet. */
    class VideoGameAPIRet implements IVideoGameAPIRet {

        /**
         * Constructs a new VideoGameAPIRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IVideoGameAPIRet);

        /** VideoGameAPIRet VGameID. */
        public VGameID: number;

        /** VideoGameAPIRet Status. */
        public Status: number;

        /** VideoGameAPIRet Result. */
        public Result: string;

        /**
         * Creates a new VideoGameAPIRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VideoGameAPIRet instance
         */
        public static create(properties?: hall.IVideoGameAPIRet): hall.VideoGameAPIRet;

        /**
         * Encodes the specified VideoGameAPIRet message. Does not implicitly {@link hall.VideoGameAPIRet.verify|verify} messages.
         * @param message VideoGameAPIRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IVideoGameAPIRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VideoGameAPIRet message, length delimited. Does not implicitly {@link hall.VideoGameAPIRet.verify|verify} messages.
         * @param message VideoGameAPIRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IVideoGameAPIRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VideoGameAPIRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VideoGameAPIRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.VideoGameAPIRet;

        /**
         * Decodes a VideoGameAPIRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VideoGameAPIRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.VideoGameAPIRet;

        /**
         * Verifies a VideoGameAPIRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VideoGameAPIRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VideoGameAPIRet
         */
        public static fromObject(object: { [k: string]: any }): hall.VideoGameAPIRet;

        /**
         * Creates a plain object from a VideoGameAPIRet message. Also converts values to other types if specified.
         * @param message VideoGameAPIRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.VideoGameAPIRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VideoGameAPIRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivityInfoRet. */
    interface IActivityInfoRet {

        /** ActivityInfoRet Code */
        Code: number;

        /** ActivityInfoRet Message */
        Message?: (string|null);

        /** ActivityInfoRet UserActivityInfo */
        UserActivityInfo?: (hall.IUserActivityInfo|null);

        /** ActivityInfoRet ActivityBaseInfo */
        ActivityBaseInfo: hall.IActivityBaseInfo;
    }

    /** Represents an ActivityInfoRet. */
    class ActivityInfoRet implements IActivityInfoRet {

        /**
         * Constructs a new ActivityInfoRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IActivityInfoRet);

        /** ActivityInfoRet Code. */
        public Code: number;

        /** ActivityInfoRet Message. */
        public Message: string;

        /** ActivityInfoRet UserActivityInfo. */
        public UserActivityInfo?: (hall.IUserActivityInfo|null);

        /** ActivityInfoRet ActivityBaseInfo. */
        public ActivityBaseInfo: hall.IActivityBaseInfo;

        /**
         * Creates a new ActivityInfoRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActivityInfoRet instance
         */
        public static create(properties?: hall.IActivityInfoRet): hall.ActivityInfoRet;

        /**
         * Encodes the specified ActivityInfoRet message. Does not implicitly {@link hall.ActivityInfoRet.verify|verify} messages.
         * @param message ActivityInfoRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IActivityInfoRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActivityInfoRet message, length delimited. Does not implicitly {@link hall.ActivityInfoRet.verify|verify} messages.
         * @param message ActivityInfoRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IActivityInfoRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActivityInfoRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.ActivityInfoRet;

        /**
         * Decodes an ActivityInfoRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActivityInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.ActivityInfoRet;

        /**
         * Verifies an ActivityInfoRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActivityInfoRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityInfoRet
         */
        public static fromObject(object: { [k: string]: any }): hall.ActivityInfoRet;

        /**
         * Creates a plain object from an ActivityInfoRet message. Also converts values to other types if specified.
         * @param message ActivityInfoRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.ActivityInfoRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityInfoRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserActivityInfo. */
    interface IUserActivityInfo {

        /** UserActivityInfo UserID */
        UserID: number;

        /** UserActivityInfo TotalEnroll */
        TotalEnroll: (number|Long);

        /** UserActivityInfo CurrentAmount */
        CurrentAmount: (number|Long);

        /** UserActivityInfo TotalAmount */
        TotalAmount: (number|Long);

        /** UserActivityInfo Status */
        Status: number;
    }

    /** Represents a UserActivityInfo. */
    class UserActivityInfo implements IUserActivityInfo {

        /**
         * Constructs a new UserActivityInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IUserActivityInfo);

        /** UserActivityInfo UserID. */
        public UserID: number;

        /** UserActivityInfo TotalEnroll. */
        public TotalEnroll: (number|Long);

        /** UserActivityInfo CurrentAmount. */
        public CurrentAmount: (number|Long);

        /** UserActivityInfo TotalAmount. */
        public TotalAmount: (number|Long);

        /** UserActivityInfo Status. */
        public Status: number;

        /**
         * Creates a new UserActivityInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserActivityInfo instance
         */
        public static create(properties?: hall.IUserActivityInfo): hall.UserActivityInfo;

        /**
         * Encodes the specified UserActivityInfo message. Does not implicitly {@link hall.UserActivityInfo.verify|verify} messages.
         * @param message UserActivityInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IUserActivityInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserActivityInfo message, length delimited. Does not implicitly {@link hall.UserActivityInfo.verify|verify} messages.
         * @param message UserActivityInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IUserActivityInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserActivityInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserActivityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.UserActivityInfo;

        /**
         * Decodes a UserActivityInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserActivityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.UserActivityInfo;

        /**
         * Verifies a UserActivityInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserActivityInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserActivityInfo
         */
        public static fromObject(object: { [k: string]: any }): hall.UserActivityInfo;

        /**
         * Creates a plain object from a UserActivityInfo message. Also converts values to other types if specified.
         * @param message UserActivityInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.UserActivityInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserActivityInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivityBaseInfo. */
    interface IActivityBaseInfo {

        /** ActivityBaseInfo ActivityID */
        ActivityID: number;

        /** ActivityBaseInfo ActivityName */
        ActivityName: string;

        /** ActivityBaseInfo ActivityContent */
        ActivityContent: string;

        /** ActivityBaseInfo ActivityConfig */
        ActivityConfig?: (hall.IActivityConfig[]|null);

        /** ActivityBaseInfo ActivityStatus */
        ActivityStatus: number;

        /** ActivityBaseInfo ActivityBeginTime */
        ActivityBeginTime?: (string|null);

        /** ActivityBaseInfo ActivityEndTime */
        ActivityEndTime?: (string|null);
    }

    /** Represents an ActivityBaseInfo. */
    class ActivityBaseInfo implements IActivityBaseInfo {

        /**
         * Constructs a new ActivityBaseInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IActivityBaseInfo);

        /** ActivityBaseInfo ActivityID. */
        public ActivityID: number;

        /** ActivityBaseInfo ActivityName. */
        public ActivityName: string;

        /** ActivityBaseInfo ActivityContent. */
        public ActivityContent: string;

        /** ActivityBaseInfo ActivityConfig. */
        public ActivityConfig: hall.IActivityConfig[];

        /** ActivityBaseInfo ActivityStatus. */
        public ActivityStatus: number;

        /** ActivityBaseInfo ActivityBeginTime. */
        public ActivityBeginTime: string;

        /** ActivityBaseInfo ActivityEndTime. */
        public ActivityEndTime: string;

        /**
         * Creates a new ActivityBaseInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActivityBaseInfo instance
         */
        public static create(properties?: hall.IActivityBaseInfo): hall.ActivityBaseInfo;

        /**
         * Encodes the specified ActivityBaseInfo message. Does not implicitly {@link hall.ActivityBaseInfo.verify|verify} messages.
         * @param message ActivityBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IActivityBaseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActivityBaseInfo message, length delimited. Does not implicitly {@link hall.ActivityBaseInfo.verify|verify} messages.
         * @param message ActivityBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IActivityBaseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActivityBaseInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.ActivityBaseInfo;

        /**
         * Decodes an ActivityBaseInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActivityBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.ActivityBaseInfo;

        /**
         * Verifies an ActivityBaseInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActivityBaseInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityBaseInfo
         */
        public static fromObject(object: { [k: string]: any }): hall.ActivityBaseInfo;

        /**
         * Creates a plain object from an ActivityBaseInfo message. Also converts values to other types if specified.
         * @param message ActivityBaseInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.ActivityBaseInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityBaseInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ActivityConfig. */
    interface IActivityConfig {

        /** ActivityConfig ParamName */
        ParamName: string;

        /** ActivityConfig ParamValue */
        ParamValue: string;

        /** ActivityConfig ParamDesc */
        ParamDesc?: (string|null);
    }

    /** Represents an ActivityConfig. */
    class ActivityConfig implements IActivityConfig {

        /**
         * Constructs a new ActivityConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IActivityConfig);

        /** ActivityConfig ParamName. */
        public ParamName: string;

        /** ActivityConfig ParamValue. */
        public ParamValue: string;

        /** ActivityConfig ParamDesc. */
        public ParamDesc: string;

        /**
         * Creates a new ActivityConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActivityConfig instance
         */
        public static create(properties?: hall.IActivityConfig): hall.ActivityConfig;

        /**
         * Encodes the specified ActivityConfig message. Does not implicitly {@link hall.ActivityConfig.verify|verify} messages.
         * @param message ActivityConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IActivityConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActivityConfig message, length delimited. Does not implicitly {@link hall.ActivityConfig.verify|verify} messages.
         * @param message ActivityConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IActivityConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActivityConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.ActivityConfig;

        /**
         * Decodes an ActivityConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActivityConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.ActivityConfig;

        /**
         * Verifies an ActivityConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ActivityConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ActivityConfig
         */
        public static fromObject(object: { [k: string]: any }): hall.ActivityConfig;

        /**
         * Creates a plain object from an ActivityConfig message. Also converts values to other types if specified.
         * @param message ActivityConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.ActivityConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ActivityConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdvanceInfoRet. */
    interface IAdvanceInfoRet {

        /** AdvanceInfoRet Code */
        Code: number;

        /** AdvanceInfoRet Message */
        Message?: (string|null);

        /** AdvanceInfoRet YesterdayAmount */
        YesterdayAmount?: (number|null);

        /** AdvanceInfoRet NowadayAmount */
        NowadayAmount?: (number|null);

        /** AdvanceInfoRet YesterdayReward */
        YesterdayReward?: (number|null);

        /** AdvanceInfoRet TomorrowAmount */
        TomorrowAmount?: (number|null);

        /** AdvanceInfoRet AdvanceConfig */
        AdvanceConfig?: (hall.IAdvanceConfig[]|null);
    }

    /** Represents an AdvanceInfoRet. */
    class AdvanceInfoRet implements IAdvanceInfoRet {

        /**
         * Constructs a new AdvanceInfoRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IAdvanceInfoRet);

        /** AdvanceInfoRet Code. */
        public Code: number;

        /** AdvanceInfoRet Message. */
        public Message: string;

        /** AdvanceInfoRet YesterdayAmount. */
        public YesterdayAmount: number;

        /** AdvanceInfoRet NowadayAmount. */
        public NowadayAmount: number;

        /** AdvanceInfoRet YesterdayReward. */
        public YesterdayReward: number;

        /** AdvanceInfoRet TomorrowAmount. */
        public TomorrowAmount: number;

        /** AdvanceInfoRet AdvanceConfig. */
        public AdvanceConfig: hall.IAdvanceConfig[];

        /**
         * Creates a new AdvanceInfoRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdvanceInfoRet instance
         */
        public static create(properties?: hall.IAdvanceInfoRet): hall.AdvanceInfoRet;

        /**
         * Encodes the specified AdvanceInfoRet message. Does not implicitly {@link hall.AdvanceInfoRet.verify|verify} messages.
         * @param message AdvanceInfoRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IAdvanceInfoRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AdvanceInfoRet message, length delimited. Does not implicitly {@link hall.AdvanceInfoRet.verify|verify} messages.
         * @param message AdvanceInfoRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IAdvanceInfoRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdvanceInfoRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdvanceInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.AdvanceInfoRet;

        /**
         * Decodes an AdvanceInfoRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AdvanceInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.AdvanceInfoRet;

        /**
         * Verifies an AdvanceInfoRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AdvanceInfoRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdvanceInfoRet
         */
        public static fromObject(object: { [k: string]: any }): hall.AdvanceInfoRet;

        /**
         * Creates a plain object from an AdvanceInfoRet message. Also converts values to other types if specified.
         * @param message AdvanceInfoRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.AdvanceInfoRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdvanceInfoRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdvanceConfig. */
    interface IAdvanceConfig {

        /** AdvanceConfig AdvanceID */
        AdvanceID: number;

        /** AdvanceConfig TotalAmount */
        TotalAmount: number;

        /** AdvanceConfig RewardAmount */
        RewardAmount: number;

        /** AdvanceConfig Status */
        Status: number;
    }

    /** Represents an AdvanceConfig. */
    class AdvanceConfig implements IAdvanceConfig {

        /**
         * Constructs a new AdvanceConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IAdvanceConfig);

        /** AdvanceConfig AdvanceID. */
        public AdvanceID: number;

        /** AdvanceConfig TotalAmount. */
        public TotalAmount: number;

        /** AdvanceConfig RewardAmount. */
        public RewardAmount: number;

        /** AdvanceConfig Status. */
        public Status: number;

        /**
         * Creates a new AdvanceConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdvanceConfig instance
         */
        public static create(properties?: hall.IAdvanceConfig): hall.AdvanceConfig;

        /**
         * Encodes the specified AdvanceConfig message. Does not implicitly {@link hall.AdvanceConfig.verify|verify} messages.
         * @param message AdvanceConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IAdvanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AdvanceConfig message, length delimited. Does not implicitly {@link hall.AdvanceConfig.verify|verify} messages.
         * @param message AdvanceConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IAdvanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdvanceConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdvanceConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.AdvanceConfig;

        /**
         * Decodes an AdvanceConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AdvanceConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.AdvanceConfig;

        /**
         * Verifies an AdvanceConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AdvanceConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdvanceConfig
         */
        public static fromObject(object: { [k: string]: any }): hall.AdvanceConfig;

        /**
         * Creates a plain object from an AdvanceConfig message. Also converts values to other types if specified.
         * @param message AdvanceConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.AdvanceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdvanceConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RechargeActivityRet. */
    interface IRechargeActivityRet {

        /** RechargeActivityRet Code */
        Code: number;

        /** RechargeActivityRet Message */
        Message?: (string|null);

        /** RechargeActivityRet ActivityEndTime */
        ActivityEndTime?: (string|null);

        /** RechargeActivityRet MaxAmount */
        MaxAmount?: (number|null);

        /** RechargeActivityRet CurAmount */
        CurAmount?: (number|null);

        /** RechargeActivityRet RecAmount */
        RecAmount?: (number|null);

        /** RechargeActivityRet AvailableAmoun */
        AvailableAmoun?: (number|null);

        /** RechargeActivityRet RechargeConfig */
        RechargeConfig?: (hall.IRechargeConfig[]|null);
    }

    /** Represents a RechargeActivityRet. */
    class RechargeActivityRet implements IRechargeActivityRet {

        /**
         * Constructs a new RechargeActivityRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IRechargeActivityRet);

        /** RechargeActivityRet Code. */
        public Code: number;

        /** RechargeActivityRet Message. */
        public Message: string;

        /** RechargeActivityRet ActivityEndTime. */
        public ActivityEndTime: string;

        /** RechargeActivityRet MaxAmount. */
        public MaxAmount: number;

        /** RechargeActivityRet CurAmount. */
        public CurAmount: number;

        /** RechargeActivityRet RecAmount. */
        public RecAmount: number;

        /** RechargeActivityRet AvailableAmoun. */
        public AvailableAmoun: number;

        /** RechargeActivityRet RechargeConfig. */
        public RechargeConfig: hall.IRechargeConfig[];

        /**
         * Creates a new RechargeActivityRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RechargeActivityRet instance
         */
        public static create(properties?: hall.IRechargeActivityRet): hall.RechargeActivityRet;

        /**
         * Encodes the specified RechargeActivityRet message. Does not implicitly {@link hall.RechargeActivityRet.verify|verify} messages.
         * @param message RechargeActivityRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IRechargeActivityRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RechargeActivityRet message, length delimited. Does not implicitly {@link hall.RechargeActivityRet.verify|verify} messages.
         * @param message RechargeActivityRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IRechargeActivityRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RechargeActivityRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RechargeActivityRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.RechargeActivityRet;

        /**
         * Decodes a RechargeActivityRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RechargeActivityRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.RechargeActivityRet;

        /**
         * Verifies a RechargeActivityRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RechargeActivityRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RechargeActivityRet
         */
        public static fromObject(object: { [k: string]: any }): hall.RechargeActivityRet;

        /**
         * Creates a plain object from a RechargeActivityRet message. Also converts values to other types if specified.
         * @param message RechargeActivityRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.RechargeActivityRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RechargeActivityRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RechargeConfig. */
    interface IRechargeConfig {

        /** RechargeConfig RechargeID */
        RechargeID: number;

        /** RechargeConfig RechargeAmount */
        RechargeAmount: number;

        /** RechargeConfig WinAmount */
        WinAmount: number;

        /** RechargeConfig RewardAmount */
        RewardAmount: number;
    }

    /** Represents a RechargeConfig. */
    class RechargeConfig implements IRechargeConfig {

        /**
         * Constructs a new RechargeConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IRechargeConfig);

        /** RechargeConfig RechargeID. */
        public RechargeID: number;

        /** RechargeConfig RechargeAmount. */
        public RechargeAmount: number;

        /** RechargeConfig WinAmount. */
        public WinAmount: number;

        /** RechargeConfig RewardAmount. */
        public RewardAmount: number;

        /**
         * Creates a new RechargeConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RechargeConfig instance
         */
        public static create(properties?: hall.IRechargeConfig): hall.RechargeConfig;

        /**
         * Encodes the specified RechargeConfig message. Does not implicitly {@link hall.RechargeConfig.verify|verify} messages.
         * @param message RechargeConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IRechargeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RechargeConfig message, length delimited. Does not implicitly {@link hall.RechargeConfig.verify|verify} messages.
         * @param message RechargeConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IRechargeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RechargeConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RechargeConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.RechargeConfig;

        /**
         * Decodes a RechargeConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RechargeConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.RechargeConfig;

        /**
         * Verifies a RechargeConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RechargeConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RechargeConfig
         */
        public static fromObject(object: { [k: string]: any }): hall.RechargeConfig;

        /**
         * Creates a plain object from a RechargeConfig message. Also converts values to other types if specified.
         * @param message RechargeConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.RechargeConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RechargeConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DailySingActionLoadRes. */
    interface IDailySingActionLoadRes {

        /** DailySingActionLoadRes Day */
        Day?: (number|null);

        /** DailySingActionLoadRes EndTimeStamp */
        EndTimeStamp?: (number|null);

        /** DailySingActionLoadRes ReachSign */
        ReachSign?: (hall.ISignInfo[]|null);

        /** DailySingActionLoadRes LotteryPool */
        LotteryPool?: (hall.IPoolInfo[]|null);

        /** DailySingActionLoadRes LotteryCount */
        LotteryCount?: (number|null);

        /** DailySingActionLoadRes Code */
        Code: number;

        /** DailySingActionLoadRes Msg */
        Msg?: (string|null);

        /** DailySingActionLoadRes ActiveDes */
        ActiveDes?: (string|null);
    }

    /** Represents a DailySingActionLoadRes. */
    class DailySingActionLoadRes implements IDailySingActionLoadRes {

        /**
         * Constructs a new DailySingActionLoadRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IDailySingActionLoadRes);

        /** DailySingActionLoadRes Day. */
        public Day: number;

        /** DailySingActionLoadRes EndTimeStamp. */
        public EndTimeStamp: number;

        /** DailySingActionLoadRes ReachSign. */
        public ReachSign: hall.ISignInfo[];

        /** DailySingActionLoadRes LotteryPool. */
        public LotteryPool: hall.IPoolInfo[];

        /** DailySingActionLoadRes LotteryCount. */
        public LotteryCount: number;

        /** DailySingActionLoadRes Code. */
        public Code: number;

        /** DailySingActionLoadRes Msg. */
        public Msg: string;

        /** DailySingActionLoadRes ActiveDes. */
        public ActiveDes: string;

        /**
         * Creates a new DailySingActionLoadRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DailySingActionLoadRes instance
         */
        public static create(properties?: hall.IDailySingActionLoadRes): hall.DailySingActionLoadRes;

        /**
         * Encodes the specified DailySingActionLoadRes message. Does not implicitly {@link hall.DailySingActionLoadRes.verify|verify} messages.
         * @param message DailySingActionLoadRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IDailySingActionLoadRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DailySingActionLoadRes message, length delimited. Does not implicitly {@link hall.DailySingActionLoadRes.verify|verify} messages.
         * @param message DailySingActionLoadRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IDailySingActionLoadRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DailySingActionLoadRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DailySingActionLoadRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.DailySingActionLoadRes;

        /**
         * Decodes a DailySingActionLoadRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DailySingActionLoadRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.DailySingActionLoadRes;

        /**
         * Verifies a DailySingActionLoadRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DailySingActionLoadRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DailySingActionLoadRes
         */
        public static fromObject(object: { [k: string]: any }): hall.DailySingActionLoadRes;

        /**
         * Creates a plain object from a DailySingActionLoadRes message. Also converts values to other types if specified.
         * @param message DailySingActionLoadRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.DailySingActionLoadRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DailySingActionLoadRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PoolInfo. */
    interface IPoolInfo {

        /** PoolInfo Index */
        Index: number;

        /** PoolInfo RewardMoney */
        RewardMoney: (number|Long);
    }

    /** Represents a PoolInfo. */
    class PoolInfo implements IPoolInfo {

        /**
         * Constructs a new PoolInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IPoolInfo);

        /** PoolInfo Index. */
        public Index: number;

        /** PoolInfo RewardMoney. */
        public RewardMoney: (number|Long);

        /**
         * Creates a new PoolInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PoolInfo instance
         */
        public static create(properties?: hall.IPoolInfo): hall.PoolInfo;

        /**
         * Encodes the specified PoolInfo message. Does not implicitly {@link hall.PoolInfo.verify|verify} messages.
         * @param message PoolInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IPoolInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PoolInfo message, length delimited. Does not implicitly {@link hall.PoolInfo.verify|verify} messages.
         * @param message PoolInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IPoolInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PoolInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PoolInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.PoolInfo;

        /**
         * Decodes a PoolInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PoolInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.PoolInfo;

        /**
         * Verifies a PoolInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PoolInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PoolInfo
         */
        public static fromObject(object: { [k: string]: any }): hall.PoolInfo;

        /**
         * Creates a plain object from a PoolInfo message. Also converts values to other types if specified.
         * @param message PoolInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.PoolInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PoolInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SignInfo. */
    interface ISignInfo {

        /** SignInfo Day */
        Day: number;

        /** SignInfo RewardMoney */
        RewardMoney: number;

        /** SignInfo CostAmount */
        CostAmount: (number|Long);

        /** SignInfo ConfigAmount */
        ConfigAmount: (number|Long);

        /** SignInfo State */
        State: number;
    }

    /** Represents a SignInfo. */
    class SignInfo implements ISignInfo {

        /**
         * Constructs a new SignInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.ISignInfo);

        /** SignInfo Day. */
        public Day: number;

        /** SignInfo RewardMoney. */
        public RewardMoney: number;

        /** SignInfo CostAmount. */
        public CostAmount: (number|Long);

        /** SignInfo ConfigAmount. */
        public ConfigAmount: (number|Long);

        /** SignInfo State. */
        public State: number;

        /**
         * Creates a new SignInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignInfo instance
         */
        public static create(properties?: hall.ISignInfo): hall.SignInfo;

        /**
         * Encodes the specified SignInfo message. Does not implicitly {@link hall.SignInfo.verify|verify} messages.
         * @param message SignInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.ISignInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignInfo message, length delimited. Does not implicitly {@link hall.SignInfo.verify|verify} messages.
         * @param message SignInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.ISignInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.SignInfo;

        /**
         * Decodes a SignInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.SignInfo;

        /**
         * Verifies a SignInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignInfo
         */
        public static fromObject(object: { [k: string]: any }): hall.SignInfo;

        /**
         * Creates a plain object from a SignInfo message. Also converts values to other types if specified.
         * @param message SignInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.SignInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DailySignReceiveRewardReq. */
    interface IDailySignReceiveRewardReq {

        /** DailySignReceiveRewardReq Day */
        Day: number;
    }

    /** Represents a DailySignReceiveRewardReq. */
    class DailySignReceiveRewardReq implements IDailySignReceiveRewardReq {

        /**
         * Constructs a new DailySignReceiveRewardReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IDailySignReceiveRewardReq);

        /** DailySignReceiveRewardReq Day. */
        public Day: number;

        /**
         * Creates a new DailySignReceiveRewardReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DailySignReceiveRewardReq instance
         */
        public static create(properties?: hall.IDailySignReceiveRewardReq): hall.DailySignReceiveRewardReq;

        /**
         * Encodes the specified DailySignReceiveRewardReq message. Does not implicitly {@link hall.DailySignReceiveRewardReq.verify|verify} messages.
         * @param message DailySignReceiveRewardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IDailySignReceiveRewardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DailySignReceiveRewardReq message, length delimited. Does not implicitly {@link hall.DailySignReceiveRewardReq.verify|verify} messages.
         * @param message DailySignReceiveRewardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IDailySignReceiveRewardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DailySignReceiveRewardReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DailySignReceiveRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.DailySignReceiveRewardReq;

        /**
         * Decodes a DailySignReceiveRewardReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DailySignReceiveRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.DailySignReceiveRewardReq;

        /**
         * Verifies a DailySignReceiveRewardReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DailySignReceiveRewardReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DailySignReceiveRewardReq
         */
        public static fromObject(object: { [k: string]: any }): hall.DailySignReceiveRewardReq;

        /**
         * Creates a plain object from a DailySignReceiveRewardReq message. Also converts values to other types if specified.
         * @param message DailySignReceiveRewardReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.DailySignReceiveRewardReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DailySignReceiveRewardReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DailySignReceiveRewardRes. */
    interface IDailySignReceiveRewardRes {

        /** DailySignReceiveRewardRes Day */
        Day: number;

        /** DailySignReceiveRewardRes Code */
        Code: number;

        /** DailySignReceiveRewardRes Msg */
        Msg?: (string|null);

        /** DailySignReceiveRewardRes Reward */
        Reward?: (hall.ISignReward|null);
    }

    /** Represents a DailySignReceiveRewardRes. */
    class DailySignReceiveRewardRes implements IDailySignReceiveRewardRes {

        /**
         * Constructs a new DailySignReceiveRewardRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IDailySignReceiveRewardRes);

        /** DailySignReceiveRewardRes Day. */
        public Day: number;

        /** DailySignReceiveRewardRes Code. */
        public Code: number;

        /** DailySignReceiveRewardRes Msg. */
        public Msg: string;

        /** DailySignReceiveRewardRes Reward. */
        public Reward?: (hall.ISignReward|null);

        /**
         * Creates a new DailySignReceiveRewardRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DailySignReceiveRewardRes instance
         */
        public static create(properties?: hall.IDailySignReceiveRewardRes): hall.DailySignReceiveRewardRes;

        /**
         * Encodes the specified DailySignReceiveRewardRes message. Does not implicitly {@link hall.DailySignReceiveRewardRes.verify|verify} messages.
         * @param message DailySignReceiveRewardRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IDailySignReceiveRewardRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DailySignReceiveRewardRes message, length delimited. Does not implicitly {@link hall.DailySignReceiveRewardRes.verify|verify} messages.
         * @param message DailySignReceiveRewardRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IDailySignReceiveRewardRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DailySignReceiveRewardRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DailySignReceiveRewardRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.DailySignReceiveRewardRes;

        /**
         * Decodes a DailySignReceiveRewardRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DailySignReceiveRewardRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.DailySignReceiveRewardRes;

        /**
         * Verifies a DailySignReceiveRewardRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DailySignReceiveRewardRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DailySignReceiveRewardRes
         */
        public static fromObject(object: { [k: string]: any }): hall.DailySignReceiveRewardRes;

        /**
         * Creates a plain object from a DailySignReceiveRewardRes message. Also converts values to other types if specified.
         * @param message DailySignReceiveRewardRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.DailySignReceiveRewardRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DailySignReceiveRewardRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SignReward. */
    interface ISignReward {

        /** SignReward RewardAmount */
        RewardAmount: (number|Long);

        /** SignReward BankAmount */
        BankAmount: (number|Long);

        /** SignReward Index */
        Index?: (number|null);
    }

    /** Represents a SignReward. */
    class SignReward implements ISignReward {

        /**
         * Constructs a new SignReward.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.ISignReward);

        /** SignReward RewardAmount. */
        public RewardAmount: (number|Long);

        /** SignReward BankAmount. */
        public BankAmount: (number|Long);

        /** SignReward Index. */
        public Index: number;

        /**
         * Creates a new SignReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignReward instance
         */
        public static create(properties?: hall.ISignReward): hall.SignReward;

        /**
         * Encodes the specified SignReward message. Does not implicitly {@link hall.SignReward.verify|verify} messages.
         * @param message SignReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.ISignReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignReward message, length delimited. Does not implicitly {@link hall.SignReward.verify|verify} messages.
         * @param message SignReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.ISignReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignReward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.SignReward;

        /**
         * Decodes a SignReward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.SignReward;

        /**
         * Verifies a SignReward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignReward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignReward
         */
        public static fromObject(object: { [k: string]: any }): hall.SignReward;

        /**
         * Creates a plain object from a SignReward message. Also converts values to other types if specified.
         * @param message SignReward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.SignReward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignReward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DailySignLotteryRes. */
    interface IDailySignLotteryRes {

        /** DailySignLotteryRes Code */
        Code: number;

        /** DailySignLotteryRes Msg */
        Msg?: (string|null);

        /** DailySignLotteryRes Reward */
        Reward?: (hall.ISignReward|null);
    }

    /** Represents a DailySignLotteryRes. */
    class DailySignLotteryRes implements IDailySignLotteryRes {

        /**
         * Constructs a new DailySignLotteryRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IDailySignLotteryRes);

        /** DailySignLotteryRes Code. */
        public Code: number;

        /** DailySignLotteryRes Msg. */
        public Msg: string;

        /** DailySignLotteryRes Reward. */
        public Reward?: (hall.ISignReward|null);

        /**
         * Creates a new DailySignLotteryRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DailySignLotteryRes instance
         */
        public static create(properties?: hall.IDailySignLotteryRes): hall.DailySignLotteryRes;

        /**
         * Encodes the specified DailySignLotteryRes message. Does not implicitly {@link hall.DailySignLotteryRes.verify|verify} messages.
         * @param message DailySignLotteryRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IDailySignLotteryRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DailySignLotteryRes message, length delimited. Does not implicitly {@link hall.DailySignLotteryRes.verify|verify} messages.
         * @param message DailySignLotteryRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IDailySignLotteryRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DailySignLotteryRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DailySignLotteryRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.DailySignLotteryRes;

        /**
         * Decodes a DailySignLotteryRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DailySignLotteryRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.DailySignLotteryRes;

        /**
         * Verifies a DailySignLotteryRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DailySignLotteryRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DailySignLotteryRes
         */
        public static fromObject(object: { [k: string]: any }): hall.DailySignLotteryRes;

        /**
         * Creates a plain object from a DailySignLotteryRes message. Also converts values to other types if specified.
         * @param message DailySignLotteryRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.DailySignLotteryRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DailySignLotteryRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReliefConfigRet. */
    interface IReliefConfigRet {

        /** ReliefConfigRet Reward */
        Reward: number;

        /** ReliefConfigRet LessThanMoney */
        LessThanMoney: number;

        /** ReliefConfigRet MaxCollectTimes */
        MaxCollectTimes: number;

        /** ReliefConfigRet DayCollectTimes */
        DayCollectTimes: number;

        /** ReliefConfigRet Desc */
        Desc?: (string|null);
    }

    /** Represents a ReliefConfigRet. */
    class ReliefConfigRet implements IReliefConfigRet {

        /**
         * Constructs a new ReliefConfigRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IReliefConfigRet);

        /** ReliefConfigRet Reward. */
        public Reward: number;

        /** ReliefConfigRet LessThanMoney. */
        public LessThanMoney: number;

        /** ReliefConfigRet MaxCollectTimes. */
        public MaxCollectTimes: number;

        /** ReliefConfigRet DayCollectTimes. */
        public DayCollectTimes: number;

        /** ReliefConfigRet Desc. */
        public Desc: string;

        /**
         * Creates a new ReliefConfigRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReliefConfigRet instance
         */
        public static create(properties?: hall.IReliefConfigRet): hall.ReliefConfigRet;

        /**
         * Encodes the specified ReliefConfigRet message. Does not implicitly {@link hall.ReliefConfigRet.verify|verify} messages.
         * @param message ReliefConfigRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IReliefConfigRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReliefConfigRet message, length delimited. Does not implicitly {@link hall.ReliefConfigRet.verify|verify} messages.
         * @param message ReliefConfigRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IReliefConfigRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReliefConfigRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReliefConfigRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.ReliefConfigRet;

        /**
         * Decodes a ReliefConfigRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReliefConfigRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.ReliefConfigRet;

        /**
         * Verifies a ReliefConfigRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReliefConfigRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReliefConfigRet
         */
        public static fromObject(object: { [k: string]: any }): hall.ReliefConfigRet;

        /**
         * Creates a plain object from a ReliefConfigRet message. Also converts values to other types if specified.
         * @param message ReliefConfigRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.ReliefConfigRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReliefConfigRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReliefCollectRet. */
    interface IReliefCollectRet {

        /** ReliefCollectRet Code */
        Code: number;

        /** ReliefCollectRet Message */
        Message?: (string|null);

        /** ReliefCollectRet Reward */
        Reward?: (number|null);

        /** ReliefCollectRet DayCollectTimes */
        DayCollectTimes?: (number|null);
    }

    /** Represents a ReliefCollectRet. */
    class ReliefCollectRet implements IReliefCollectRet {

        /**
         * Constructs a new ReliefCollectRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IReliefCollectRet);

        /** ReliefCollectRet Code. */
        public Code: number;

        /** ReliefCollectRet Message. */
        public Message: string;

        /** ReliefCollectRet Reward. */
        public Reward: number;

        /** ReliefCollectRet DayCollectTimes. */
        public DayCollectTimes: number;

        /**
         * Creates a new ReliefCollectRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReliefCollectRet instance
         */
        public static create(properties?: hall.IReliefCollectRet): hall.ReliefCollectRet;

        /**
         * Encodes the specified ReliefCollectRet message. Does not implicitly {@link hall.ReliefCollectRet.verify|verify} messages.
         * @param message ReliefCollectRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IReliefCollectRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReliefCollectRet message, length delimited. Does not implicitly {@link hall.ReliefCollectRet.verify|verify} messages.
         * @param message ReliefCollectRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IReliefCollectRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReliefCollectRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReliefCollectRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.ReliefCollectRet;

        /**
         * Decodes a ReliefCollectRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReliefCollectRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.ReliefCollectRet;

        /**
         * Verifies a ReliefCollectRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReliefCollectRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReliefCollectRet
         */
        public static fromObject(object: { [k: string]: any }): hall.ReliefCollectRet;

        /**
         * Creates a plain object from a ReliefCollectRet message. Also converts values to other types if specified.
         * @param message ReliefCollectRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.ReliefCollectRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReliefCollectRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReceiveMailAnnexReq. */
    interface IReceiveMailAnnexReq {

        /** ReceiveMailAnnexReq UserID */
        UserID: number;

        /** ReceiveMailAnnexReq MsgID */
        MsgID: number;

        /** ReceiveMailAnnexReq IsAll */
        IsAll: number;
    }

    /** Represents a ReceiveMailAnnexReq. */
    class ReceiveMailAnnexReq implements IReceiveMailAnnexReq {

        /**
         * Constructs a new ReceiveMailAnnexReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IReceiveMailAnnexReq);

        /** ReceiveMailAnnexReq UserID. */
        public UserID: number;

        /** ReceiveMailAnnexReq MsgID. */
        public MsgID: number;

        /** ReceiveMailAnnexReq IsAll. */
        public IsAll: number;

        /**
         * Creates a new ReceiveMailAnnexReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReceiveMailAnnexReq instance
         */
        public static create(properties?: hall.IReceiveMailAnnexReq): hall.ReceiveMailAnnexReq;

        /**
         * Encodes the specified ReceiveMailAnnexReq message. Does not implicitly {@link hall.ReceiveMailAnnexReq.verify|verify} messages.
         * @param message ReceiveMailAnnexReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IReceiveMailAnnexReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReceiveMailAnnexReq message, length delimited. Does not implicitly {@link hall.ReceiveMailAnnexReq.verify|verify} messages.
         * @param message ReceiveMailAnnexReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IReceiveMailAnnexReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReceiveMailAnnexReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReceiveMailAnnexReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.ReceiveMailAnnexReq;

        /**
         * Decodes a ReceiveMailAnnexReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReceiveMailAnnexReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.ReceiveMailAnnexReq;

        /**
         * Verifies a ReceiveMailAnnexReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReceiveMailAnnexReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReceiveMailAnnexReq
         */
        public static fromObject(object: { [k: string]: any }): hall.ReceiveMailAnnexReq;

        /**
         * Creates a plain object from a ReceiveMailAnnexReq message. Also converts values to other types if specified.
         * @param message ReceiveMailAnnexReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.ReceiveMailAnnexReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReceiveMailAnnexReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReceiveMailAnnexRet. */
    interface IReceiveMailAnnexRet {

        /** ReceiveMailAnnexRet UserID */
        UserID: number;

        /** ReceiveMailAnnexRet MsgID */
        MsgID: number;

        /** ReceiveMailAnnexRet IsAll */
        IsAll: number;

        /** ReceiveMailAnnexRet Code */
        Code: number;

        /** ReceiveMailAnnexRet Message */
        Message?: (string|null);

        /** ReceiveMailAnnexRet MailAnnexList */
        MailAnnexList?: (hall.IMailAnnex[]|null);
    }

    /** Represents a ReceiveMailAnnexRet. */
    class ReceiveMailAnnexRet implements IReceiveMailAnnexRet {

        /**
         * Constructs a new ReceiveMailAnnexRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IReceiveMailAnnexRet);

        /** ReceiveMailAnnexRet UserID. */
        public UserID: number;

        /** ReceiveMailAnnexRet MsgID. */
        public MsgID: number;

        /** ReceiveMailAnnexRet IsAll. */
        public IsAll: number;

        /** ReceiveMailAnnexRet Code. */
        public Code: number;

        /** ReceiveMailAnnexRet Message. */
        public Message: string;

        /** ReceiveMailAnnexRet MailAnnexList. */
        public MailAnnexList: hall.IMailAnnex[];

        /**
         * Creates a new ReceiveMailAnnexRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReceiveMailAnnexRet instance
         */
        public static create(properties?: hall.IReceiveMailAnnexRet): hall.ReceiveMailAnnexRet;

        /**
         * Encodes the specified ReceiveMailAnnexRet message. Does not implicitly {@link hall.ReceiveMailAnnexRet.verify|verify} messages.
         * @param message ReceiveMailAnnexRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IReceiveMailAnnexRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReceiveMailAnnexRet message, length delimited. Does not implicitly {@link hall.ReceiveMailAnnexRet.verify|verify} messages.
         * @param message ReceiveMailAnnexRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IReceiveMailAnnexRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReceiveMailAnnexRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReceiveMailAnnexRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.ReceiveMailAnnexRet;

        /**
         * Decodes a ReceiveMailAnnexRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReceiveMailAnnexRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.ReceiveMailAnnexRet;

        /**
         * Verifies a ReceiveMailAnnexRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReceiveMailAnnexRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReceiveMailAnnexRet
         */
        public static fromObject(object: { [k: string]: any }): hall.ReceiveMailAnnexRet;

        /**
         * Creates a plain object from a ReceiveMailAnnexRet message. Also converts values to other types if specified.
         * @param message ReceiveMailAnnexRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.ReceiveMailAnnexRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReceiveMailAnnexRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailAnnex. */
    interface IMailAnnex {

        /** MailAnnex ItemType */
        ItemType: number;

        /** MailAnnex ItemNum */
        ItemNum: number;
    }

    /** Represents a MailAnnex. */
    class MailAnnex implements IMailAnnex {

        /**
         * Constructs a new MailAnnex.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IMailAnnex);

        /** MailAnnex ItemType. */
        public ItemType: number;

        /** MailAnnex ItemNum. */
        public ItemNum: number;

        /**
         * Creates a new MailAnnex instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailAnnex instance
         */
        public static create(properties?: hall.IMailAnnex): hall.MailAnnex;

        /**
         * Encodes the specified MailAnnex message. Does not implicitly {@link hall.MailAnnex.verify|verify} messages.
         * @param message MailAnnex message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IMailAnnex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MailAnnex message, length delimited. Does not implicitly {@link hall.MailAnnex.verify|verify} messages.
         * @param message MailAnnex message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IMailAnnex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MailAnnex message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailAnnex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.MailAnnex;

        /**
         * Decodes a MailAnnex message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailAnnex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.MailAnnex;

        /**
         * Verifies a MailAnnex message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MailAnnex message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MailAnnex
         */
        public static fromObject(object: { [k: string]: any }): hall.MailAnnex;

        /**
         * Creates a plain object from a MailAnnex message. Also converts values to other types if specified.
         * @param message MailAnnex
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.MailAnnex, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailAnnex to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ClearReadMailReq. */
    interface IClearReadMailReq {

        /** ClearReadMailReq UserID */
        UserID: number;
    }

    /** Represents a ClearReadMailReq. */
    class ClearReadMailReq implements IClearReadMailReq {

        /**
         * Constructs a new ClearReadMailReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: hall.IClearReadMailReq);

        /** ClearReadMailReq UserID. */
        public UserID: number;

        /**
         * Creates a new ClearReadMailReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClearReadMailReq instance
         */
        public static create(properties?: hall.IClearReadMailReq): hall.ClearReadMailReq;

        /**
         * Encodes the specified ClearReadMailReq message. Does not implicitly {@link hall.ClearReadMailReq.verify|verify} messages.
         * @param message ClearReadMailReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: hall.IClearReadMailReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClearReadMailReq message, length delimited. Does not implicitly {@link hall.ClearReadMailReq.verify|verify} messages.
         * @param message ClearReadMailReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: hall.IClearReadMailReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClearReadMailReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClearReadMailReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): hall.ClearReadMailReq;

        /**
         * Decodes a ClearReadMailReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClearReadMailReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): hall.ClearReadMailReq;

        /**
         * Verifies a ClearReadMailReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClearReadMailReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClearReadMailReq
         */
        public static fromObject(object: { [k: string]: any }): hall.ClearReadMailReq;

        /**
         * Creates a plain object from a ClearReadMailReq message. Also converts values to other types if specified.
         * @param message ClearReadMailReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: hall.ClearReadMailReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClearReadMailReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
