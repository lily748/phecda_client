import * as $protobuf from "protobufjs";
/** Namespace gameRoom. */
export namespace gameRoom {

    /** Properties of a LoginGameRoomInfo. */
    interface ILoginGameRoomInfo {

        /** LoginGameRoomInfo UserID */
        UserID: number;

        /** LoginGameRoomInfo Cer */
        Cer: string;

        /** LoginGameRoomInfo HDCode */
        HDCode: string;

        /** LoginGameRoomInfo HDType */
        HDType: number;

        /** LoginGameRoomInfo IsSitByNum */
        IsSitByNum?: (number|null);

        /** LoginGameRoomInfo TableID */
        TableID?: (number|null);

        /** LoginGameRoomInfo ChairID */
        ChairID?: (number|null);
    }

    /** Represents a LoginGameRoomInfo. */
    class LoginGameRoomInfo implements ILoginGameRoomInfo {

        /**
         * Constructs a new LoginGameRoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.ILoginGameRoomInfo);

        /** LoginGameRoomInfo UserID. */
        public UserID: number;

        /** LoginGameRoomInfo Cer. */
        public Cer: string;

        /** LoginGameRoomInfo HDCode. */
        public HDCode: string;

        /** LoginGameRoomInfo HDType. */
        public HDType: number;

        /** LoginGameRoomInfo IsSitByNum. */
        public IsSitByNum: number;

        /** LoginGameRoomInfo TableID. */
        public TableID: number;

        /** LoginGameRoomInfo ChairID. */
        public ChairID: number;

        /**
         * Creates a new LoginGameRoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginGameRoomInfo instance
         */
        public static create(properties?: gameRoom.ILoginGameRoomInfo): gameRoom.LoginGameRoomInfo;

        /**
         * Encodes the specified LoginGameRoomInfo message. Does not implicitly {@link gameRoom.LoginGameRoomInfo.verify|verify} messages.
         * @param message LoginGameRoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.ILoginGameRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginGameRoomInfo message, length delimited. Does not implicitly {@link gameRoom.LoginGameRoomInfo.verify|verify} messages.
         * @param message LoginGameRoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.ILoginGameRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginGameRoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginGameRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.LoginGameRoomInfo;

        /**
         * Decodes a LoginGameRoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginGameRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.LoginGameRoomInfo;

        /**
         * Verifies a LoginGameRoomInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginGameRoomInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginGameRoomInfo
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.LoginGameRoomInfo;

        /**
         * Creates a plain object from a LoginGameRoomInfo message. Also converts values to other types if specified.
         * @param message LoginGameRoomInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.LoginGameRoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginGameRoomInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginGameRoomRet. */
    interface ILoginGameRoomRet {

        /** LoginGameRoomRet Code */
        Code: number;

        /** LoginGameRoomRet Message */
        Message: string;

        /** LoginGameRoomRet LoginRequestData */
        LoginRequestData?: (gameRoom.ILoginGameRoomInfo|null);

        /** LoginGameRoomRet UserData */
        UserData?: (gameRoom.IUserRoomLogonData|null);

        /** LoginGameRoomRet RoomInfo */
        RoomInfo?: (gameRoom.IRoomInfo|null);
    }

    /** Represents a LoginGameRoomRet. */
    class LoginGameRoomRet implements ILoginGameRoomRet {

        /**
         * Constructs a new LoginGameRoomRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.ILoginGameRoomRet);

        /** LoginGameRoomRet Code. */
        public Code: number;

        /** LoginGameRoomRet Message. */
        public Message: string;

        /** LoginGameRoomRet LoginRequestData. */
        public LoginRequestData?: (gameRoom.ILoginGameRoomInfo|null);

        /** LoginGameRoomRet UserData. */
        public UserData?: (gameRoom.IUserRoomLogonData|null);

        /** LoginGameRoomRet RoomInfo. */
        public RoomInfo?: (gameRoom.IRoomInfo|null);

        /**
         * Creates a new LoginGameRoomRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginGameRoomRet instance
         */
        public static create(properties?: gameRoom.ILoginGameRoomRet): gameRoom.LoginGameRoomRet;

        /**
         * Encodes the specified LoginGameRoomRet message. Does not implicitly {@link gameRoom.LoginGameRoomRet.verify|verify} messages.
         * @param message LoginGameRoomRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.ILoginGameRoomRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginGameRoomRet message, length delimited. Does not implicitly {@link gameRoom.LoginGameRoomRet.verify|verify} messages.
         * @param message LoginGameRoomRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.ILoginGameRoomRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginGameRoomRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginGameRoomRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.LoginGameRoomRet;

        /**
         * Decodes a LoginGameRoomRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginGameRoomRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.LoginGameRoomRet;

        /**
         * Verifies a LoginGameRoomRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginGameRoomRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginGameRoomRet
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.LoginGameRoomRet;

        /**
         * Creates a plain object from a LoginGameRoomRet message. Also converts values to other types if specified.
         * @param message LoginGameRoomRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.LoginGameRoomRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginGameRoomRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserRoomLogonData. */
    interface IUserRoomLogonData {

        /** UserRoomLogonData UserID */
        UserID: number;

        /** UserRoomLogonData UserType */
        UserType: number;

        /** UserRoomLogonData NickName */
        NickName: string;

        /** UserRoomLogonData FaceID */
        FaceID: number;

        /** UserRoomLogonData Sex */
        Sex: number;

        /** UserRoomLogonData CashAmount */
        CashAmount: (number|Long);

        /** UserRoomLogonData WinCount */
        WinCount: number;

        /** UserRoomLogonData LoseCount */
        LoseCount: number;

        /** UserRoomLogonData DrawCount */
        DrawCount: number;

        /** UserRoomLogonData ServerAddr */
        ServerAddr?: (string|null);

        /** UserRoomLogonData GameBuff */
        GameBuff?: (string|null);

        /** UserRoomLogonData TotalScore */
        TotalScore?: (number|Long|null);

        /** UserRoomLogonData XiuXianScore */
        XiuXianScore?: (number|Long|null);

        /** UserRoomLogonData IsSuperUser */
        IsSuperUser?: (boolean|null);

        /** UserRoomLogonData TracedUserID */
        TracedUserID?: (number|null);

        /** UserRoomLogonData TodayScoreDan */
        TodayScoreDan?: (number|null);

        /** UserRoomLogonData TotalWinDan */
        TotalWinDan?: (number|null);

        /** UserRoomLogonData ChargeDan */
        ChargeDan?: (number|null);

        /** UserRoomLogonData WinRateDan */
        WinRateDan?: (number|null);

        /** UserRoomLogonData GameTimeDan */
        GameTimeDan?: (number|null);

        /** UserRoomLogonData IsNewBee */
        IsNewBee?: (boolean|null);

        /** UserRoomLogonData BankMoney */
        BankMoney?: (number|Long|null);

        /** UserRoomLogonData CurrGameLoseWin */
        CurrGameLoseWin?: (number|Long|null);

        /** UserRoomLogonData PlatformLoseWin */
        PlatformLoseWin?: (number|Long|null);

        /** UserRoomLogonData FirstGameTimestamp */
        FirstGameTimestamp?: (number|Long|null);

        /** UserRoomLogonData TotalRecharge */
        TotalRecharge?: (number|Long|null);

        /** UserRoomLogonData DayRecharge */
        DayRecharge?: (number|Long|null);

        /** UserRoomLogonData ControlSwitchState */
        ControlSwitchState?: (number|null);

        /** UserRoomLogonData IsSitByNum */
        IsSitByNum?: (number|null);

        /** UserRoomLogonData TableID */
        TableID?: (number|null);

        /** UserRoomLogonData ChairID */
        ChairID?: (number|null);
    }

    /** Represents a UserRoomLogonData. */
    class UserRoomLogonData implements IUserRoomLogonData {

        /**
         * Constructs a new UserRoomLogonData.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.IUserRoomLogonData);

        /** UserRoomLogonData UserID. */
        public UserID: number;

        /** UserRoomLogonData UserType. */
        public UserType: number;

        /** UserRoomLogonData NickName. */
        public NickName: string;

        /** UserRoomLogonData FaceID. */
        public FaceID: number;

        /** UserRoomLogonData Sex. */
        public Sex: number;

        /** UserRoomLogonData CashAmount. */
        public CashAmount: (number|Long);

        /** UserRoomLogonData WinCount. */
        public WinCount: number;

        /** UserRoomLogonData LoseCount. */
        public LoseCount: number;

        /** UserRoomLogonData DrawCount. */
        public DrawCount: number;

        /** UserRoomLogonData ServerAddr. */
        public ServerAddr: string;

        /** UserRoomLogonData GameBuff. */
        public GameBuff: string;

        /** UserRoomLogonData TotalScore. */
        public TotalScore: (number|Long);

        /** UserRoomLogonData XiuXianScore. */
        public XiuXianScore: (number|Long);

        /** UserRoomLogonData IsSuperUser. */
        public IsSuperUser: boolean;

        /** UserRoomLogonData TracedUserID. */
        public TracedUserID: number;

        /** UserRoomLogonData TodayScoreDan. */
        public TodayScoreDan: number;

        /** UserRoomLogonData TotalWinDan. */
        public TotalWinDan: number;

        /** UserRoomLogonData ChargeDan. */
        public ChargeDan: number;

        /** UserRoomLogonData WinRateDan. */
        public WinRateDan: number;

        /** UserRoomLogonData GameTimeDan. */
        public GameTimeDan: number;

        /** UserRoomLogonData IsNewBee. */
        public IsNewBee: boolean;

        /** UserRoomLogonData BankMoney. */
        public BankMoney: (number|Long);

        /** UserRoomLogonData CurrGameLoseWin. */
        public CurrGameLoseWin: (number|Long);

        /** UserRoomLogonData PlatformLoseWin. */
        public PlatformLoseWin: (number|Long);

        /** UserRoomLogonData FirstGameTimestamp. */
        public FirstGameTimestamp: (number|Long);

        /** UserRoomLogonData TotalRecharge. */
        public TotalRecharge: (number|Long);

        /** UserRoomLogonData DayRecharge. */
        public DayRecharge: (number|Long);

        /** UserRoomLogonData ControlSwitchState. */
        public ControlSwitchState: number;

        /** UserRoomLogonData IsSitByNum. */
        public IsSitByNum: number;

        /** UserRoomLogonData TableID. */
        public TableID: number;

        /** UserRoomLogonData ChairID. */
        public ChairID: number;

        /**
         * Creates a new UserRoomLogonData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserRoomLogonData instance
         */
        public static create(properties?: gameRoom.IUserRoomLogonData): gameRoom.UserRoomLogonData;

        /**
         * Encodes the specified UserRoomLogonData message. Does not implicitly {@link gameRoom.UserRoomLogonData.verify|verify} messages.
         * @param message UserRoomLogonData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.IUserRoomLogonData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserRoomLogonData message, length delimited. Does not implicitly {@link gameRoom.UserRoomLogonData.verify|verify} messages.
         * @param message UserRoomLogonData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.IUserRoomLogonData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserRoomLogonData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserRoomLogonData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.UserRoomLogonData;

        /**
         * Decodes a UserRoomLogonData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserRoomLogonData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.UserRoomLogonData;

        /**
         * Verifies a UserRoomLogonData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserRoomLogonData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserRoomLogonData
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.UserRoomLogonData;

        /**
         * Creates a plain object from a UserRoomLogonData message. Also converts values to other types if specified.
         * @param message UserRoomLogonData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.UserRoomLogonData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserRoomLogonData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserSit. */
    interface IUserSit {

        /** UserSit TableNo */
        TableNo: number;

        /** UserSit SeatNo */
        SeatNo: number;
    }

    /** Represents a UserSit. */
    class UserSit implements IUserSit {

        /**
         * Constructs a new UserSit.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.IUserSit);

        /** UserSit TableNo. */
        public TableNo: number;

        /** UserSit SeatNo. */
        public SeatNo: number;

        /**
         * Creates a new UserSit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserSit instance
         */
        public static create(properties?: gameRoom.IUserSit): gameRoom.UserSit;

        /**
         * Encodes the specified UserSit message. Does not implicitly {@link gameRoom.UserSit.verify|verify} messages.
         * @param message UserSit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.IUserSit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserSit message, length delimited. Does not implicitly {@link gameRoom.UserSit.verify|verify} messages.
         * @param message UserSit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.IUserSit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserSit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserSit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.UserSit;

        /**
         * Decodes a UserSit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserSit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.UserSit;

        /**
         * Verifies a UserSit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserSit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserSit
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.UserSit;

        /**
         * Creates a plain object from a UserSit message. Also converts values to other types if specified.
         * @param message UserSit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.UserSit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserSit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameVerInfo. */
    interface IGameVerInfo {

        /** GameVerInfo AndroidVersion */
        AndroidVersion: string;

        /** GameVerInfo IOSVersion */
        IOSVersion: string;
    }

    /** Represents a GameVerInfo. */
    class GameVerInfo implements IGameVerInfo {

        /**
         * Constructs a new GameVerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.IGameVerInfo);

        /** GameVerInfo AndroidVersion. */
        public AndroidVersion: string;

        /** GameVerInfo IOSVersion. */
        public IOSVersion: string;

        /**
         * Creates a new GameVerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameVerInfo instance
         */
        public static create(properties?: gameRoom.IGameVerInfo): gameRoom.GameVerInfo;

        /**
         * Encodes the specified GameVerInfo message. Does not implicitly {@link gameRoom.GameVerInfo.verify|verify} messages.
         * @param message GameVerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.IGameVerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameVerInfo message, length delimited. Does not implicitly {@link gameRoom.GameVerInfo.verify|verify} messages.
         * @param message GameVerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.IGameVerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameVerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameVerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.GameVerInfo;

        /**
         * Decodes a GameVerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameVerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.GameVerInfo;

        /**
         * Verifies a GameVerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameVerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameVerInfo
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.GameVerInfo;

        /**
         * Creates a plain object from a GameVerInfo message. Also converts values to other types if specified.
         * @param message GameVerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.GameVerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameVerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoomInfo. */
    interface IRoomInfo {

        /** RoomInfo GameID */
        GameID: number;

        /** RoomInfo GameName */
        GameName: string;

        /** RoomInfo Flag */
        Flag: string;

        /** RoomInfo BaseScore */
        BaseScore: number;
    }

    /** Represents a RoomInfo. */
    class RoomInfo implements IRoomInfo {

        /**
         * Constructs a new RoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.IRoomInfo);

        /** RoomInfo GameID. */
        public GameID: number;

        /** RoomInfo GameName. */
        public GameName: string;

        /** RoomInfo Flag. */
        public Flag: string;

        /** RoomInfo BaseScore. */
        public BaseScore: number;

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomInfo instance
         */
        public static create(properties?: gameRoom.IRoomInfo): gameRoom.RoomInfo;

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link gameRoom.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link gameRoom.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.RoomInfo;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.RoomInfo;

        /**
         * Verifies a RoomInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomInfo
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.RoomInfo;

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @param message RoomInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SlotGetGameProgress. */
    interface ISlotGetGameProgress {

        /** SlotGetGameProgress UserID */
        UserID: number;

        /** SlotGetGameProgress GameID */
        GameID: number;
    }

    /** Represents a SlotGetGameProgress. */
    class SlotGetGameProgress implements ISlotGetGameProgress {

        /**
         * Constructs a new SlotGetGameProgress.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.ISlotGetGameProgress);

        /** SlotGetGameProgress UserID. */
        public UserID: number;

        /** SlotGetGameProgress GameID. */
        public GameID: number;

        /**
         * Creates a new SlotGetGameProgress instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SlotGetGameProgress instance
         */
        public static create(properties?: gameRoom.ISlotGetGameProgress): gameRoom.SlotGetGameProgress;

        /**
         * Encodes the specified SlotGetGameProgress message. Does not implicitly {@link gameRoom.SlotGetGameProgress.verify|verify} messages.
         * @param message SlotGetGameProgress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.ISlotGetGameProgress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlotGetGameProgress message, length delimited. Does not implicitly {@link gameRoom.SlotGetGameProgress.verify|verify} messages.
         * @param message SlotGetGameProgress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.ISlotGetGameProgress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlotGetGameProgress message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlotGetGameProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.SlotGetGameProgress;

        /**
         * Decodes a SlotGetGameProgress message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlotGetGameProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.SlotGetGameProgress;

        /**
         * Verifies a SlotGetGameProgress message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SlotGetGameProgress message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SlotGetGameProgress
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.SlotGetGameProgress;

        /**
         * Creates a plain object from a SlotGetGameProgress message. Also converts values to other types if specified.
         * @param message SlotGetGameProgress
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.SlotGetGameProgress, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SlotGetGameProgress to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SlotGetGameProgressRet. */
    interface ISlotGetGameProgressRet {

        /** SlotGetGameProgressRet UserID */
        UserID: number;

        /** SlotGetGameProgressRet GameID */
        GameID: number;

        /** SlotGetGameProgressRet Version */
        Version: number;

        /** SlotGetGameProgressRet GameData */
        GameData: string;

        /** SlotGetGameProgressRet Money */
        Money?: (number|Long|null);

        /** SlotGetGameProgressRet CtrlType */
        CtrlType?: (number|null);

        /** SlotGetGameProgressRet EndTimestamp */
        EndTimestamp?: (number|Long|null);

        /** SlotGetGameProgressRet CtrlLoseMoney */
        CtrlLoseMoney?: (number|Long|null);

        /** SlotGetGameProgressRet CtrlWinMoneyMin */
        CtrlWinMoneyMin?: (number|Long|null);

        /** SlotGetGameProgressRet CtrlWinMoneyMax */
        CtrlWinMoneyMax?: (number|Long|null);

        /** SlotGetGameProgressRet LoseWinMoney */
        LoseWinMoney?: (number|Long|null);

        /** SlotGetGameProgressRet KickoutFreeRate */
        KickoutFreeRate?: (number|null);

        /** SlotGetGameProgressRet AddFreeRate */
        AddFreeRate?: (number|null);

        /** SlotGetGameProgressRet MinRange */
        MinRange?: (number|null);

        /** SlotGetGameProgressRet MaxRange */
        MaxRange?: (number|null);
    }

    /** Represents a SlotGetGameProgressRet. */
    class SlotGetGameProgressRet implements ISlotGetGameProgressRet {

        /**
         * Constructs a new SlotGetGameProgressRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.ISlotGetGameProgressRet);

        /** SlotGetGameProgressRet UserID. */
        public UserID: number;

        /** SlotGetGameProgressRet GameID. */
        public GameID: number;

        /** SlotGetGameProgressRet Version. */
        public Version: number;

        /** SlotGetGameProgressRet GameData. */
        public GameData: string;

        /** SlotGetGameProgressRet Money. */
        public Money: (number|Long);

        /** SlotGetGameProgressRet CtrlType. */
        public CtrlType: number;

        /** SlotGetGameProgressRet EndTimestamp. */
        public EndTimestamp: (number|Long);

        /** SlotGetGameProgressRet CtrlLoseMoney. */
        public CtrlLoseMoney: (number|Long);

        /** SlotGetGameProgressRet CtrlWinMoneyMin. */
        public CtrlWinMoneyMin: (number|Long);

        /** SlotGetGameProgressRet CtrlWinMoneyMax. */
        public CtrlWinMoneyMax: (number|Long);

        /** SlotGetGameProgressRet LoseWinMoney. */
        public LoseWinMoney: (number|Long);

        /** SlotGetGameProgressRet KickoutFreeRate. */
        public KickoutFreeRate: number;

        /** SlotGetGameProgressRet AddFreeRate. */
        public AddFreeRate: number;

        /** SlotGetGameProgressRet MinRange. */
        public MinRange: number;

        /** SlotGetGameProgressRet MaxRange. */
        public MaxRange: number;

        /**
         * Creates a new SlotGetGameProgressRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SlotGetGameProgressRet instance
         */
        public static create(properties?: gameRoom.ISlotGetGameProgressRet): gameRoom.SlotGetGameProgressRet;

        /**
         * Encodes the specified SlotGetGameProgressRet message. Does not implicitly {@link gameRoom.SlotGetGameProgressRet.verify|verify} messages.
         * @param message SlotGetGameProgressRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.ISlotGetGameProgressRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlotGetGameProgressRet message, length delimited. Does not implicitly {@link gameRoom.SlotGetGameProgressRet.verify|verify} messages.
         * @param message SlotGetGameProgressRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.ISlotGetGameProgressRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlotGetGameProgressRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlotGetGameProgressRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.SlotGetGameProgressRet;

        /**
         * Decodes a SlotGetGameProgressRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlotGetGameProgressRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.SlotGetGameProgressRet;

        /**
         * Verifies a SlotGetGameProgressRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SlotGetGameProgressRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SlotGetGameProgressRet
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.SlotGetGameProgressRet;

        /**
         * Creates a plain object from a SlotGetGameProgressRet message. Also converts values to other types if specified.
         * @param message SlotGetGameProgressRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.SlotGetGameProgressRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SlotGetGameProgressRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SlotSaveGameProgress. */
    interface ISlotSaveGameProgress {

        /** SlotSaveGameProgress UserID */
        UserID: number;

        /** SlotSaveGameProgress GameID */
        GameID: number;

        /** SlotSaveGameProgress GameStation */
        GameStation: number;

        /** SlotSaveGameProgress Version */
        Version: number;

        /** SlotSaveGameProgress GameData */
        GameData: string;
    }

    /** Represents a SlotSaveGameProgress. */
    class SlotSaveGameProgress implements ISlotSaveGameProgress {

        /**
         * Constructs a new SlotSaveGameProgress.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.ISlotSaveGameProgress);

        /** SlotSaveGameProgress UserID. */
        public UserID: number;

        /** SlotSaveGameProgress GameID. */
        public GameID: number;

        /** SlotSaveGameProgress GameStation. */
        public GameStation: number;

        /** SlotSaveGameProgress Version. */
        public Version: number;

        /** SlotSaveGameProgress GameData. */
        public GameData: string;

        /**
         * Creates a new SlotSaveGameProgress instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SlotSaveGameProgress instance
         */
        public static create(properties?: gameRoom.ISlotSaveGameProgress): gameRoom.SlotSaveGameProgress;

        /**
         * Encodes the specified SlotSaveGameProgress message. Does not implicitly {@link gameRoom.SlotSaveGameProgress.verify|verify} messages.
         * @param message SlotSaveGameProgress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.ISlotSaveGameProgress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlotSaveGameProgress message, length delimited. Does not implicitly {@link gameRoom.SlotSaveGameProgress.verify|verify} messages.
         * @param message SlotSaveGameProgress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.ISlotSaveGameProgress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlotSaveGameProgress message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlotSaveGameProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.SlotSaveGameProgress;

        /**
         * Decodes a SlotSaveGameProgress message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlotSaveGameProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.SlotSaveGameProgress;

        /**
         * Verifies a SlotSaveGameProgress message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SlotSaveGameProgress message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SlotSaveGameProgress
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.SlotSaveGameProgress;

        /**
         * Creates a plain object from a SlotSaveGameProgress message. Also converts values to other types if specified.
         * @param message SlotSaveGameProgress
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.SlotSaveGameProgress, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SlotSaveGameProgress to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SlotGetJackpot. */
    interface ISlotGetJackpot {

        /** SlotGetJackpot GameID */
        GameID: number;

        /** SlotGetJackpot PoolCount */
        PoolCount: number;
    }

    /** Represents a SlotGetJackpot. */
    class SlotGetJackpot implements ISlotGetJackpot {

        /**
         * Constructs a new SlotGetJackpot.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.ISlotGetJackpot);

        /** SlotGetJackpot GameID. */
        public GameID: number;

        /** SlotGetJackpot PoolCount. */
        public PoolCount: number;

        /**
         * Creates a new SlotGetJackpot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SlotGetJackpot instance
         */
        public static create(properties?: gameRoom.ISlotGetJackpot): gameRoom.SlotGetJackpot;

        /**
         * Encodes the specified SlotGetJackpot message. Does not implicitly {@link gameRoom.SlotGetJackpot.verify|verify} messages.
         * @param message SlotGetJackpot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.ISlotGetJackpot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlotGetJackpot message, length delimited. Does not implicitly {@link gameRoom.SlotGetJackpot.verify|verify} messages.
         * @param message SlotGetJackpot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.ISlotGetJackpot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlotGetJackpot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlotGetJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.SlotGetJackpot;

        /**
         * Decodes a SlotGetJackpot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlotGetJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.SlotGetJackpot;

        /**
         * Verifies a SlotGetJackpot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SlotGetJackpot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SlotGetJackpot
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.SlotGetJackpot;

        /**
         * Creates a plain object from a SlotGetJackpot message. Also converts values to other types if specified.
         * @param message SlotGetJackpot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.SlotGetJackpot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SlotGetJackpot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SlotGetJackpotRet. */
    interface ISlotGetJackpotRet {

        /** SlotGetJackpotRet GameID */
        GameID: number;

        /** SlotGetJackpotRet Jackpots */
        Jackpots?: ((number|Long)[]|null);
    }

    /** Represents a SlotGetJackpotRet. */
    class SlotGetJackpotRet implements ISlotGetJackpotRet {

        /**
         * Constructs a new SlotGetJackpotRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.ISlotGetJackpotRet);

        /** SlotGetJackpotRet GameID. */
        public GameID: number;

        /** SlotGetJackpotRet Jackpots. */
        public Jackpots: (number|Long)[];

        /**
         * Creates a new SlotGetJackpotRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SlotGetJackpotRet instance
         */
        public static create(properties?: gameRoom.ISlotGetJackpotRet): gameRoom.SlotGetJackpotRet;

        /**
         * Encodes the specified SlotGetJackpotRet message. Does not implicitly {@link gameRoom.SlotGetJackpotRet.verify|verify} messages.
         * @param message SlotGetJackpotRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.ISlotGetJackpotRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlotGetJackpotRet message, length delimited. Does not implicitly {@link gameRoom.SlotGetJackpotRet.verify|verify} messages.
         * @param message SlotGetJackpotRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.ISlotGetJackpotRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlotGetJackpotRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlotGetJackpotRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.SlotGetJackpotRet;

        /**
         * Decodes a SlotGetJackpotRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlotGetJackpotRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.SlotGetJackpotRet;

        /**
         * Verifies a SlotGetJackpotRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SlotGetJackpotRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SlotGetJackpotRet
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.SlotGetJackpotRet;

        /**
         * Creates a plain object from a SlotGetJackpotRet message. Also converts values to other types if specified.
         * @param message SlotGetJackpotRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.SlotGetJackpotRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SlotGetJackpotRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SlotUpdateJackpot. */
    interface ISlotUpdateJackpot {

        /** SlotUpdateJackpot GameID */
        GameID: number;

        /** SlotUpdateJackpot ChangeJackpots */
        ChangeJackpots?: ((number|Long)[]|null);
    }

    /** Represents a SlotUpdateJackpot. */
    class SlotUpdateJackpot implements ISlotUpdateJackpot {

        /**
         * Constructs a new SlotUpdateJackpot.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.ISlotUpdateJackpot);

        /** SlotUpdateJackpot GameID. */
        public GameID: number;

        /** SlotUpdateJackpot ChangeJackpots. */
        public ChangeJackpots: (number|Long)[];

        /**
         * Creates a new SlotUpdateJackpot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SlotUpdateJackpot instance
         */
        public static create(properties?: gameRoom.ISlotUpdateJackpot): gameRoom.SlotUpdateJackpot;

        /**
         * Encodes the specified SlotUpdateJackpot message. Does not implicitly {@link gameRoom.SlotUpdateJackpot.verify|verify} messages.
         * @param message SlotUpdateJackpot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.ISlotUpdateJackpot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlotUpdateJackpot message, length delimited. Does not implicitly {@link gameRoom.SlotUpdateJackpot.verify|verify} messages.
         * @param message SlotUpdateJackpot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.ISlotUpdateJackpot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlotUpdateJackpot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlotUpdateJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.SlotUpdateJackpot;

        /**
         * Decodes a SlotUpdateJackpot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlotUpdateJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.SlotUpdateJackpot;

        /**
         * Verifies a SlotUpdateJackpot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SlotUpdateJackpot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SlotUpdateJackpot
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.SlotUpdateJackpot;

        /**
         * Creates a plain object from a SlotUpdateJackpot message. Also converts values to other types if specified.
         * @param message SlotUpdateJackpot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.SlotUpdateJackpot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SlotUpdateJackpot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SlotGetJackpotGroup. */
    interface ISlotGetJackpotGroup {

        /** SlotGetJackpotGroup GameID */
        GameID: number;

        /** SlotGetJackpotGroup PoolCount */
        PoolCount: number;

        /** SlotGetJackpotGroup GroupID */
        GroupID: number;
    }

    /** Represents a SlotGetJackpotGroup. */
    class SlotGetJackpotGroup implements ISlotGetJackpotGroup {

        /**
         * Constructs a new SlotGetJackpotGroup.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.ISlotGetJackpotGroup);

        /** SlotGetJackpotGroup GameID. */
        public GameID: number;

        /** SlotGetJackpotGroup PoolCount. */
        public PoolCount: number;

        /** SlotGetJackpotGroup GroupID. */
        public GroupID: number;

        /**
         * Creates a new SlotGetJackpotGroup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SlotGetJackpotGroup instance
         */
        public static create(properties?: gameRoom.ISlotGetJackpotGroup): gameRoom.SlotGetJackpotGroup;

        /**
         * Encodes the specified SlotGetJackpotGroup message. Does not implicitly {@link gameRoom.SlotGetJackpotGroup.verify|verify} messages.
         * @param message SlotGetJackpotGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.ISlotGetJackpotGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlotGetJackpotGroup message, length delimited. Does not implicitly {@link gameRoom.SlotGetJackpotGroup.verify|verify} messages.
         * @param message SlotGetJackpotGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.ISlotGetJackpotGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlotGetJackpotGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlotGetJackpotGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.SlotGetJackpotGroup;

        /**
         * Decodes a SlotGetJackpotGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlotGetJackpotGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.SlotGetJackpotGroup;

        /**
         * Verifies a SlotGetJackpotGroup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SlotGetJackpotGroup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SlotGetJackpotGroup
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.SlotGetJackpotGroup;

        /**
         * Creates a plain object from a SlotGetJackpotGroup message. Also converts values to other types if specified.
         * @param message SlotGetJackpotGroup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.SlotGetJackpotGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SlotGetJackpotGroup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SlotGetJackpotGroupRet. */
    interface ISlotGetJackpotGroupRet {

        /** SlotGetJackpotGroupRet GameID */
        GameID: number;

        /** SlotGetJackpotGroupRet Jackpots */
        Jackpots?: ((number|Long)[]|null);

        /** SlotGetJackpotGroupRet GroupID */
        GroupID: number;
    }

    /** Represents a SlotGetJackpotGroupRet. */
    class SlotGetJackpotGroupRet implements ISlotGetJackpotGroupRet {

        /**
         * Constructs a new SlotGetJackpotGroupRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.ISlotGetJackpotGroupRet);

        /** SlotGetJackpotGroupRet GameID. */
        public GameID: number;

        /** SlotGetJackpotGroupRet Jackpots. */
        public Jackpots: (number|Long)[];

        /** SlotGetJackpotGroupRet GroupID. */
        public GroupID: number;

        /**
         * Creates a new SlotGetJackpotGroupRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SlotGetJackpotGroupRet instance
         */
        public static create(properties?: gameRoom.ISlotGetJackpotGroupRet): gameRoom.SlotGetJackpotGroupRet;

        /**
         * Encodes the specified SlotGetJackpotGroupRet message. Does not implicitly {@link gameRoom.SlotGetJackpotGroupRet.verify|verify} messages.
         * @param message SlotGetJackpotGroupRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.ISlotGetJackpotGroupRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlotGetJackpotGroupRet message, length delimited. Does not implicitly {@link gameRoom.SlotGetJackpotGroupRet.verify|verify} messages.
         * @param message SlotGetJackpotGroupRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.ISlotGetJackpotGroupRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlotGetJackpotGroupRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlotGetJackpotGroupRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.SlotGetJackpotGroupRet;

        /**
         * Decodes a SlotGetJackpotGroupRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlotGetJackpotGroupRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.SlotGetJackpotGroupRet;

        /**
         * Verifies a SlotGetJackpotGroupRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SlotGetJackpotGroupRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SlotGetJackpotGroupRet
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.SlotGetJackpotGroupRet;

        /**
         * Creates a plain object from a SlotGetJackpotGroupRet message. Also converts values to other types if specified.
         * @param message SlotGetJackpotGroupRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.SlotGetJackpotGroupRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SlotGetJackpotGroupRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SlotUpdateJackpotGroup. */
    interface ISlotUpdateJackpotGroup {

        /** SlotUpdateJackpotGroup GameID */
        GameID: number;

        /** SlotUpdateJackpotGroup ChangeJackpots */
        ChangeJackpots?: ((number|Long)[]|null);

        /** SlotUpdateJackpotGroup GroupID */
        GroupID: number;
    }

    /** Represents a SlotUpdateJackpotGroup. */
    class SlotUpdateJackpotGroup implements ISlotUpdateJackpotGroup {

        /**
         * Constructs a new SlotUpdateJackpotGroup.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.ISlotUpdateJackpotGroup);

        /** SlotUpdateJackpotGroup GameID. */
        public GameID: number;

        /** SlotUpdateJackpotGroup ChangeJackpots. */
        public ChangeJackpots: (number|Long)[];

        /** SlotUpdateJackpotGroup GroupID. */
        public GroupID: number;

        /**
         * Creates a new SlotUpdateJackpotGroup instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SlotUpdateJackpotGroup instance
         */
        public static create(properties?: gameRoom.ISlotUpdateJackpotGroup): gameRoom.SlotUpdateJackpotGroup;

        /**
         * Encodes the specified SlotUpdateJackpotGroup message. Does not implicitly {@link gameRoom.SlotUpdateJackpotGroup.verify|verify} messages.
         * @param message SlotUpdateJackpotGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.ISlotUpdateJackpotGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlotUpdateJackpotGroup message, length delimited. Does not implicitly {@link gameRoom.SlotUpdateJackpotGroup.verify|verify} messages.
         * @param message SlotUpdateJackpotGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.ISlotUpdateJackpotGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlotUpdateJackpotGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlotUpdateJackpotGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.SlotUpdateJackpotGroup;

        /**
         * Decodes a SlotUpdateJackpotGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlotUpdateJackpotGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.SlotUpdateJackpotGroup;

        /**
         * Verifies a SlotUpdateJackpotGroup message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SlotUpdateJackpotGroup message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SlotUpdateJackpotGroup
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.SlotUpdateJackpotGroup;

        /**
         * Creates a plain object from a SlotUpdateJackpotGroup message. Also converts values to other types if specified.
         * @param message SlotUpdateJackpotGroup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.SlotUpdateJackpotGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SlotUpdateJackpotGroup to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendUserVipBrowReq. */
    interface ISendUserVipBrowReq {

        /** SendUserVipBrowReq UserID */
        UserID: number;

        /** SendUserVipBrowReq BrowID */
        BrowID: number;

        /** SendUserVipBrowReq TUserID */
        TUserID: number;
    }

    /** Represents a SendUserVipBrowReq. */
    class SendUserVipBrowReq implements ISendUserVipBrowReq {

        /**
         * Constructs a new SendUserVipBrowReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.ISendUserVipBrowReq);

        /** SendUserVipBrowReq UserID. */
        public UserID: number;

        /** SendUserVipBrowReq BrowID. */
        public BrowID: number;

        /** SendUserVipBrowReq TUserID. */
        public TUserID: number;

        /**
         * Creates a new SendUserVipBrowReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendUserVipBrowReq instance
         */
        public static create(properties?: gameRoom.ISendUserVipBrowReq): gameRoom.SendUserVipBrowReq;

        /**
         * Encodes the specified SendUserVipBrowReq message. Does not implicitly {@link gameRoom.SendUserVipBrowReq.verify|verify} messages.
         * @param message SendUserVipBrowReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.ISendUserVipBrowReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserVipBrowReq message, length delimited. Does not implicitly {@link gameRoom.SendUserVipBrowReq.verify|verify} messages.
         * @param message SendUserVipBrowReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.ISendUserVipBrowReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserVipBrowReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserVipBrowReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.SendUserVipBrowReq;

        /**
         * Decodes a SendUserVipBrowReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserVipBrowReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.SendUserVipBrowReq;

        /**
         * Verifies a SendUserVipBrowReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendUserVipBrowReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendUserVipBrowReq
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.SendUserVipBrowReq;

        /**
         * Creates a plain object from a SendUserVipBrowReq message. Also converts values to other types if specified.
         * @param message SendUserVipBrowReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.SendUserVipBrowReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendUserVipBrowReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendUserVipBrowRet. */
    interface ISendUserVipBrowRet {

        /** SendUserVipBrowRet UserID */
        UserID: number;

        /** SendUserVipBrowRet BrowID */
        BrowID: number;

        /** SendUserVipBrowRet ErrCode */
        ErrCode: number;

        /** SendUserVipBrowRet TUserID */
        TUserID: number;
    }

    /** Represents a SendUserVipBrowRet. */
    class SendUserVipBrowRet implements ISendUserVipBrowRet {

        /**
         * Constructs a new SendUserVipBrowRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.ISendUserVipBrowRet);

        /** SendUserVipBrowRet UserID. */
        public UserID: number;

        /** SendUserVipBrowRet BrowID. */
        public BrowID: number;

        /** SendUserVipBrowRet ErrCode. */
        public ErrCode: number;

        /** SendUserVipBrowRet TUserID. */
        public TUserID: number;

        /**
         * Creates a new SendUserVipBrowRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendUserVipBrowRet instance
         */
        public static create(properties?: gameRoom.ISendUserVipBrowRet): gameRoom.SendUserVipBrowRet;

        /**
         * Encodes the specified SendUserVipBrowRet message. Does not implicitly {@link gameRoom.SendUserVipBrowRet.verify|verify} messages.
         * @param message SendUserVipBrowRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.ISendUserVipBrowRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserVipBrowRet message, length delimited. Does not implicitly {@link gameRoom.SendUserVipBrowRet.verify|verify} messages.
         * @param message SendUserVipBrowRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.ISendUserVipBrowRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserVipBrowRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserVipBrowRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.SendUserVipBrowRet;

        /**
         * Decodes a SendUserVipBrowRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserVipBrowRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.SendUserVipBrowRet;

        /**
         * Verifies a SendUserVipBrowRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendUserVipBrowRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendUserVipBrowRet
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.SendUserVipBrowRet;

        /**
         * Creates a plain object from a SendUserVipBrowRet message. Also converts values to other types if specified.
         * @param message SendUserVipBrowRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.SendUserVipBrowRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendUserVipBrowRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BroadcastUserVipBrow. */
    interface IBroadcastUserVipBrow {

        /** BroadcastUserVipBrow UserID */
        UserID: number;

        /** BroadcastUserVipBrow BrowID */
        BrowID: number;

        /** BroadcastUserVipBrow TUserID */
        TUserID: number;
    }

    /** Represents a BroadcastUserVipBrow. */
    class BroadcastUserVipBrow implements IBroadcastUserVipBrow {

        /**
         * Constructs a new BroadcastUserVipBrow.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.IBroadcastUserVipBrow);

        /** BroadcastUserVipBrow UserID. */
        public UserID: number;

        /** BroadcastUserVipBrow BrowID. */
        public BrowID: number;

        /** BroadcastUserVipBrow TUserID. */
        public TUserID: number;

        /**
         * Creates a new BroadcastUserVipBrow instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BroadcastUserVipBrow instance
         */
        public static create(properties?: gameRoom.IBroadcastUserVipBrow): gameRoom.BroadcastUserVipBrow;

        /**
         * Encodes the specified BroadcastUserVipBrow message. Does not implicitly {@link gameRoom.BroadcastUserVipBrow.verify|verify} messages.
         * @param message BroadcastUserVipBrow message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.IBroadcastUserVipBrow, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BroadcastUserVipBrow message, length delimited. Does not implicitly {@link gameRoom.BroadcastUserVipBrow.verify|verify} messages.
         * @param message BroadcastUserVipBrow message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.IBroadcastUserVipBrow, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BroadcastUserVipBrow message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BroadcastUserVipBrow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.BroadcastUserVipBrow;

        /**
         * Decodes a BroadcastUserVipBrow message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BroadcastUserVipBrow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.BroadcastUserVipBrow;

        /**
         * Verifies a BroadcastUserVipBrow message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BroadcastUserVipBrow message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BroadcastUserVipBrow
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.BroadcastUserVipBrow;

        /**
         * Creates a plain object from a BroadcastUserVipBrow message. Also converts values to other types if specified.
         * @param message BroadcastUserVipBrow
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.BroadcastUserVipBrow, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BroadcastUserVipBrow to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AddUserTaskGameEventReq. */
    interface IAddUserTaskGameEventReq {

        /** AddUserTaskGameEventReq UserID */
        UserID: number;

        /** AddUserTaskGameEventReq GameID */
        GameID: number;

        /** AddUserTaskGameEventReq GameType */
        GameType: number;

        /** AddUserTaskGameEventReq EventID */
        EventID: number;

        /** AddUserTaskGameEventReq AddValue */
        AddValue: number;
    }

    /** Represents an AddUserTaskGameEventReq. */
    class AddUserTaskGameEventReq implements IAddUserTaskGameEventReq {

        /**
         * Constructs a new AddUserTaskGameEventReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.IAddUserTaskGameEventReq);

        /** AddUserTaskGameEventReq UserID. */
        public UserID: number;

        /** AddUserTaskGameEventReq GameID. */
        public GameID: number;

        /** AddUserTaskGameEventReq GameType. */
        public GameType: number;

        /** AddUserTaskGameEventReq EventID. */
        public EventID: number;

        /** AddUserTaskGameEventReq AddValue. */
        public AddValue: number;

        /**
         * Creates a new AddUserTaskGameEventReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddUserTaskGameEventReq instance
         */
        public static create(properties?: gameRoom.IAddUserTaskGameEventReq): gameRoom.AddUserTaskGameEventReq;

        /**
         * Encodes the specified AddUserTaskGameEventReq message. Does not implicitly {@link gameRoom.AddUserTaskGameEventReq.verify|verify} messages.
         * @param message AddUserTaskGameEventReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.IAddUserTaskGameEventReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddUserTaskGameEventReq message, length delimited. Does not implicitly {@link gameRoom.AddUserTaskGameEventReq.verify|verify} messages.
         * @param message AddUserTaskGameEventReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.IAddUserTaskGameEventReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddUserTaskGameEventReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddUserTaskGameEventReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.AddUserTaskGameEventReq;

        /**
         * Decodes an AddUserTaskGameEventReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddUserTaskGameEventReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.AddUserTaskGameEventReq;

        /**
         * Verifies an AddUserTaskGameEventReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddUserTaskGameEventReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddUserTaskGameEventReq
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.AddUserTaskGameEventReq;

        /**
         * Creates a plain object from an AddUserTaskGameEventReq message. Also converts values to other types if specified.
         * @param message AddUserTaskGameEventReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.AddUserTaskGameEventReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddUserTaskGameEventReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserSingleControlReq. */
    interface IUserSingleControlReq {

        /** UserSingleControlReq UserID */
        UserID: number;

        /** UserSingleControlReq ServerID */
        ServerID: number;
    }

    /** Represents a UserSingleControlReq. */
    class UserSingleControlReq implements IUserSingleControlReq {

        /**
         * Constructs a new UserSingleControlReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.IUserSingleControlReq);

        /** UserSingleControlReq UserID. */
        public UserID: number;

        /** UserSingleControlReq ServerID. */
        public ServerID: number;

        /**
         * Creates a new UserSingleControlReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserSingleControlReq instance
         */
        public static create(properties?: gameRoom.IUserSingleControlReq): gameRoom.UserSingleControlReq;

        /**
         * Encodes the specified UserSingleControlReq message. Does not implicitly {@link gameRoom.UserSingleControlReq.verify|verify} messages.
         * @param message UserSingleControlReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.IUserSingleControlReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserSingleControlReq message, length delimited. Does not implicitly {@link gameRoom.UserSingleControlReq.verify|verify} messages.
         * @param message UserSingleControlReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.IUserSingleControlReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserSingleControlReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserSingleControlReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.UserSingleControlReq;

        /**
         * Decodes a UserSingleControlReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserSingleControlReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.UserSingleControlReq;

        /**
         * Verifies a UserSingleControlReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserSingleControlReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserSingleControlReq
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.UserSingleControlReq;

        /**
         * Creates a plain object from a UserSingleControlReq message. Also converts values to other types if specified.
         * @param message UserSingleControlReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.UserSingleControlReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserSingleControlReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserSingleControlRes. */
    interface IUserSingleControlRes {

        /** UserSingleControlRes UserID */
        UserID: number;

        /** UserSingleControlRes ServerID */
        ServerID: number;

        /** UserSingleControlRes GameWin */
        GameWin: (number|Long);

        /** UserSingleControlRes ControlMoney */
        ControlMoney: (number|Long);

        /** UserSingleControlRes ControlLevel */
        ControlLevel: number;
    }

    /** Represents a UserSingleControlRes. */
    class UserSingleControlRes implements IUserSingleControlRes {

        /**
         * Constructs a new UserSingleControlRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.IUserSingleControlRes);

        /** UserSingleControlRes UserID. */
        public UserID: number;

        /** UserSingleControlRes ServerID. */
        public ServerID: number;

        /** UserSingleControlRes GameWin. */
        public GameWin: (number|Long);

        /** UserSingleControlRes ControlMoney. */
        public ControlMoney: (number|Long);

        /** UserSingleControlRes ControlLevel. */
        public ControlLevel: number;

        /**
         * Creates a new UserSingleControlRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserSingleControlRes instance
         */
        public static create(properties?: gameRoom.IUserSingleControlRes): gameRoom.UserSingleControlRes;

        /**
         * Encodes the specified UserSingleControlRes message. Does not implicitly {@link gameRoom.UserSingleControlRes.verify|verify} messages.
         * @param message UserSingleControlRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.IUserSingleControlRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserSingleControlRes message, length delimited. Does not implicitly {@link gameRoom.UserSingleControlRes.verify|verify} messages.
         * @param message UserSingleControlRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.IUserSingleControlRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserSingleControlRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserSingleControlRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.UserSingleControlRes;

        /**
         * Decodes a UserSingleControlRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserSingleControlRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.UserSingleControlRes;

        /**
         * Verifies a UserSingleControlRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserSingleControlRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserSingleControlRes
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.UserSingleControlRes;

        /**
         * Creates a plain object from a UserSingleControlRes message. Also converts values to other types if specified.
         * @param message UserSingleControlRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.UserSingleControlRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserSingleControlRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SlotGetUserControlReq. */
    interface ISlotGetUserControlReq {

        /** SlotGetUserControlReq UserID */
        UserID: number;
    }

    /** Represents a SlotGetUserControlReq. */
    class SlotGetUserControlReq implements ISlotGetUserControlReq {

        /**
         * Constructs a new SlotGetUserControlReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.ISlotGetUserControlReq);

        /** SlotGetUserControlReq UserID. */
        public UserID: number;

        /**
         * Creates a new SlotGetUserControlReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SlotGetUserControlReq instance
         */
        public static create(properties?: gameRoom.ISlotGetUserControlReq): gameRoom.SlotGetUserControlReq;

        /**
         * Encodes the specified SlotGetUserControlReq message. Does not implicitly {@link gameRoom.SlotGetUserControlReq.verify|verify} messages.
         * @param message SlotGetUserControlReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.ISlotGetUserControlReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlotGetUserControlReq message, length delimited. Does not implicitly {@link gameRoom.SlotGetUserControlReq.verify|verify} messages.
         * @param message SlotGetUserControlReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.ISlotGetUserControlReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlotGetUserControlReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlotGetUserControlReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.SlotGetUserControlReq;

        /**
         * Decodes a SlotGetUserControlReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlotGetUserControlReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.SlotGetUserControlReq;

        /**
         * Verifies a SlotGetUserControlReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SlotGetUserControlReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SlotGetUserControlReq
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.SlotGetUserControlReq;

        /**
         * Creates a plain object from a SlotGetUserControlReq message. Also converts values to other types if specified.
         * @param message SlotGetUserControlReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.SlotGetUserControlReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SlotGetUserControlReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SlotGetUserControlRet. */
    interface ISlotGetUserControlRet {

        /** SlotGetUserControlRet UserID */
        UserID: number;

        /** SlotGetUserControlRet CtrlType */
        CtrlType?: (number|null);

        /** SlotGetUserControlRet EndTimestamp */
        EndTimestamp?: (number|Long|null);

        /** SlotGetUserControlRet CtrlLoseMoney */
        CtrlLoseMoney?: (number|Long|null);

        /** SlotGetUserControlRet CtrlWinMoneyMin */
        CtrlWinMoneyMin?: (number|Long|null);

        /** SlotGetUserControlRet CtrlWinMoneyMax */
        CtrlWinMoneyMax?: (number|Long|null);

        /** SlotGetUserControlRet LoseWinMoney */
        LoseWinMoney?: (number|Long|null);

        /** SlotGetUserControlRet KickoutFreeRate */
        KickoutFreeRate?: (number|null);

        /** SlotGetUserControlRet AddFreeRate */
        AddFreeRate?: (number|null);

        /** SlotGetUserControlRet MinRange */
        MinRange?: (number|null);

        /** SlotGetUserControlRet MaxRange */
        MaxRange?: (number|null);
    }

    /** Represents a SlotGetUserControlRet. */
    class SlotGetUserControlRet implements ISlotGetUserControlRet {

        /**
         * Constructs a new SlotGetUserControlRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.ISlotGetUserControlRet);

        /** SlotGetUserControlRet UserID. */
        public UserID: number;

        /** SlotGetUserControlRet CtrlType. */
        public CtrlType: number;

        /** SlotGetUserControlRet EndTimestamp. */
        public EndTimestamp: (number|Long);

        /** SlotGetUserControlRet CtrlLoseMoney. */
        public CtrlLoseMoney: (number|Long);

        /** SlotGetUserControlRet CtrlWinMoneyMin. */
        public CtrlWinMoneyMin: (number|Long);

        /** SlotGetUserControlRet CtrlWinMoneyMax. */
        public CtrlWinMoneyMax: (number|Long);

        /** SlotGetUserControlRet LoseWinMoney. */
        public LoseWinMoney: (number|Long);

        /** SlotGetUserControlRet KickoutFreeRate. */
        public KickoutFreeRate: number;

        /** SlotGetUserControlRet AddFreeRate. */
        public AddFreeRate: number;

        /** SlotGetUserControlRet MinRange. */
        public MinRange: number;

        /** SlotGetUserControlRet MaxRange. */
        public MaxRange: number;

        /**
         * Creates a new SlotGetUserControlRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SlotGetUserControlRet instance
         */
        public static create(properties?: gameRoom.ISlotGetUserControlRet): gameRoom.SlotGetUserControlRet;

        /**
         * Encodes the specified SlotGetUserControlRet message. Does not implicitly {@link gameRoom.SlotGetUserControlRet.verify|verify} messages.
         * @param message SlotGetUserControlRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.ISlotGetUserControlRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlotGetUserControlRet message, length delimited. Does not implicitly {@link gameRoom.SlotGetUserControlRet.verify|verify} messages.
         * @param message SlotGetUserControlRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.ISlotGetUserControlRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlotGetUserControlRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlotGetUserControlRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.SlotGetUserControlRet;

        /**
         * Decodes a SlotGetUserControlRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlotGetUserControlRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.SlotGetUserControlRet;

        /**
         * Verifies a SlotGetUserControlRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SlotGetUserControlRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SlotGetUserControlRet
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.SlotGetUserControlRet;

        /**
         * Creates a plain object from a SlotGetUserControlRet message. Also converts values to other types if specified.
         * @param message SlotGetUserControlRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.SlotGetUserControlRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SlotGetUserControlRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateGameJackpot. */
    interface IUpdateGameJackpot {

        /** UpdateGameJackpot GameID */
        GameID: number;

        /** UpdateGameJackpot Flag */
        Flag: number;

        /** UpdateGameJackpot BaseJackpot */
        BaseJackpot: (number|Long);

        /** UpdateGameJackpot AddJackpot */
        AddJackpot: (number|Long);

        /** UpdateGameJackpot GroupID */
        GroupID: number;

        /** UpdateGameJackpot IsOpen */
        IsOpen: number;
    }

    /** Represents an UpdateGameJackpot. */
    class UpdateGameJackpot implements IUpdateGameJackpot {

        /**
         * Constructs a new UpdateGameJackpot.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.IUpdateGameJackpot);

        /** UpdateGameJackpot GameID. */
        public GameID: number;

        /** UpdateGameJackpot Flag. */
        public Flag: number;

        /** UpdateGameJackpot BaseJackpot. */
        public BaseJackpot: (number|Long);

        /** UpdateGameJackpot AddJackpot. */
        public AddJackpot: (number|Long);

        /** UpdateGameJackpot GroupID. */
        public GroupID: number;

        /** UpdateGameJackpot IsOpen. */
        public IsOpen: number;

        /**
         * Creates a new UpdateGameJackpot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateGameJackpot instance
         */
        public static create(properties?: gameRoom.IUpdateGameJackpot): gameRoom.UpdateGameJackpot;

        /**
         * Encodes the specified UpdateGameJackpot message. Does not implicitly {@link gameRoom.UpdateGameJackpot.verify|verify} messages.
         * @param message UpdateGameJackpot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.IUpdateGameJackpot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateGameJackpot message, length delimited. Does not implicitly {@link gameRoom.UpdateGameJackpot.verify|verify} messages.
         * @param message UpdateGameJackpot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.IUpdateGameJackpot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateGameJackpot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateGameJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.UpdateGameJackpot;

        /**
         * Decodes an UpdateGameJackpot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateGameJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.UpdateGameJackpot;

        /**
         * Verifies an UpdateGameJackpot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateGameJackpot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateGameJackpot
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.UpdateGameJackpot;

        /**
         * Creates a plain object from an UpdateGameJackpot message. Also converts values to other types if specified.
         * @param message UpdateGameJackpot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.UpdateGameJackpot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateGameJackpot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateGameJackpotRet. */
    interface IUpdateGameJackpotRet {

        /** UpdateGameJackpotRet Jackpot */
        Jackpot: (number|Long);
    }

    /** Represents an UpdateGameJackpotRet. */
    class UpdateGameJackpotRet implements IUpdateGameJackpotRet {

        /**
         * Constructs a new UpdateGameJackpotRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.IUpdateGameJackpotRet);

        /** UpdateGameJackpotRet Jackpot. */
        public Jackpot: (number|Long);

        /**
         * Creates a new UpdateGameJackpotRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateGameJackpotRet instance
         */
        public static create(properties?: gameRoom.IUpdateGameJackpotRet): gameRoom.UpdateGameJackpotRet;

        /**
         * Encodes the specified UpdateGameJackpotRet message. Does not implicitly {@link gameRoom.UpdateGameJackpotRet.verify|verify} messages.
         * @param message UpdateGameJackpotRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.IUpdateGameJackpotRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateGameJackpotRet message, length delimited. Does not implicitly {@link gameRoom.UpdateGameJackpotRet.verify|verify} messages.
         * @param message UpdateGameJackpotRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.IUpdateGameJackpotRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateGameJackpotRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateGameJackpotRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.UpdateGameJackpotRet;

        /**
         * Decodes an UpdateGameJackpotRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateGameJackpotRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.UpdateGameJackpotRet;

        /**
         * Verifies an UpdateGameJackpotRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateGameJackpotRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateGameJackpotRet
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.UpdateGameJackpotRet;

        /**
         * Creates a plain object from an UpdateGameJackpotRet message. Also converts values to other types if specified.
         * @param message UpdateGameJackpotRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.UpdateGameJackpotRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateGameJackpotRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserGameJackpotLog. */
    interface IUserGameJackpotLog {

        /** UserGameJackpotLog UserID */
        UserID: number;

        /** UserGameJackpotLog ServerID */
        ServerID: number;

        /** UserGameJackpotLog JackpotName */
        JackpotName: string;

        /** UserGameJackpotLog JackpotRate */
        JackpotRate: number;

        /** UserGameJackpotLog JackpotPool */
        JackpotPool: (number|Long);

        /** UserGameJackpotLog JackpotWin */
        JackpotWin: (number|Long);

        /** UserGameJackpotLog GroupID */
        GroupID: number;
    }

    /** Represents a UserGameJackpotLog. */
    class UserGameJackpotLog implements IUserGameJackpotLog {

        /**
         * Constructs a new UserGameJackpotLog.
         * @param [properties] Properties to set
         */
        constructor(properties?: gameRoom.IUserGameJackpotLog);

        /** UserGameJackpotLog UserID. */
        public UserID: number;

        /** UserGameJackpotLog ServerID. */
        public ServerID: number;

        /** UserGameJackpotLog JackpotName. */
        public JackpotName: string;

        /** UserGameJackpotLog JackpotRate. */
        public JackpotRate: number;

        /** UserGameJackpotLog JackpotPool. */
        public JackpotPool: (number|Long);

        /** UserGameJackpotLog JackpotWin. */
        public JackpotWin: (number|Long);

        /** UserGameJackpotLog GroupID. */
        public GroupID: number;

        /**
         * Creates a new UserGameJackpotLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserGameJackpotLog instance
         */
        public static create(properties?: gameRoom.IUserGameJackpotLog): gameRoom.UserGameJackpotLog;

        /**
         * Encodes the specified UserGameJackpotLog message. Does not implicitly {@link gameRoom.UserGameJackpotLog.verify|verify} messages.
         * @param message UserGameJackpotLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: gameRoom.IUserGameJackpotLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserGameJackpotLog message, length delimited. Does not implicitly {@link gameRoom.UserGameJackpotLog.verify|verify} messages.
         * @param message UserGameJackpotLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: gameRoom.IUserGameJackpotLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserGameJackpotLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserGameJackpotLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): gameRoom.UserGameJackpotLog;

        /**
         * Decodes a UserGameJackpotLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserGameJackpotLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): gameRoom.UserGameJackpotLog;

        /**
         * Verifies a UserGameJackpotLog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserGameJackpotLog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserGameJackpotLog
         */
        public static fromObject(object: { [k: string]: any }): gameRoom.UserGameJackpotLog;

        /**
         * Creates a plain object from a UserGameJackpotLog message. Also converts values to other types if specified.
         * @param message UserGameJackpotLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: gameRoom.UserGameJackpotLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserGameJackpotLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
