// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace netproto. */
export namespace netproto {

    /** MessageBClassID enum. */
    enum MessageBClassID {
        Common = 1,
        Hall = 2,
        ServerMgm = 3,
        DBServer = 4,
        GameRoom = 5,
        Game = 10001,
        NotifyServer = 6
    }

    /** PlatformCommonClassID enum. */
    enum PlatformCommonClassID {
        TipMessageID = 1,
        HeartBeatID = 2,
        HeartBeatReturnID = 3,
        RequestHeartBeatConfigID = 4,
        HeartBeatConfigID = 5,
        IPReportID = 6
    }

    /** Properties of a RetMessage. */
    interface IRetMessage {

        /** RetMessage Code */
        Code: number;

        /** RetMessage Message */
        Message: string;
    }

    /** Represents a RetMessage. */
    class RetMessage implements IRetMessage {

        /**
         * Constructs a new RetMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IRetMessage);

        /** RetMessage Code. */
        public Code: number;

        /** RetMessage Message. */
        public Message: string;

        /**
         * Creates a new RetMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RetMessage instance
         */
        public static create(properties?: netproto.IRetMessage): netproto.RetMessage;

        /**
         * Encodes the specified RetMessage message. Does not implicitly {@link netproto.RetMessage.verify|verify} messages.
         * @param message RetMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IRetMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RetMessage message, length delimited. Does not implicitly {@link netproto.RetMessage.verify|verify} messages.
         * @param message RetMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IRetMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RetMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RetMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.RetMessage;

        /**
         * Decodes a RetMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RetMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.RetMessage;

        /**
         * Verifies a RetMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RetMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RetMessage
         */
        public static fromObject(object: { [k: string]: any }): netproto.RetMessage;

        /**
         * Creates a plain object from a RetMessage message. Also converts values to other types if specified.
         * @param message RetMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.RetMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RetMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RPCInfo. */
    interface IRPCInfo {

        /** RPCInfo ConnID */
        ConnID: string;

        /** RPCInfo QueueID */
        QueueID: number;

        /** RPCInfo IPAddress */
        IPAddress: string;

        /** RPCInfo UserID */
        UserID?: (number|null);

        /** RPCInfo Cer */
        Cer?: (string|null);

        /** RPCInfo RouteServerID */
        RouteServerID: number;

        /** RPCInfo ExtendInfo */
        ExtendInfo?: (string|null);

        /** RPCInfo HDType */
        HDType?: (number|null);

        /** RPCInfo HDCode */
        HDCode?: (string|null);

        /** RPCInfo Language */
        Language?: (string|null);
    }

    /** Represents a RPCInfo. */
    class RPCInfo implements IRPCInfo {

        /**
         * Constructs a new RPCInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IRPCInfo);

        /** RPCInfo ConnID. */
        public ConnID: string;

        /** RPCInfo QueueID. */
        public QueueID: number;

        /** RPCInfo IPAddress. */
        public IPAddress: string;

        /** RPCInfo UserID. */
        public UserID: number;

        /** RPCInfo Cer. */
        public Cer: string;

        /** RPCInfo RouteServerID. */
        public RouteServerID: number;

        /** RPCInfo ExtendInfo. */
        public ExtendInfo: string;

        /** RPCInfo HDType. */
        public HDType: number;

        /** RPCInfo HDCode. */
        public HDCode: string;

        /** RPCInfo Language. */
        public Language: string;

        /**
         * Creates a new RPCInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RPCInfo instance
         */
        public static create(properties?: netproto.IRPCInfo): netproto.RPCInfo;

        /**
         * Encodes the specified RPCInfo message. Does not implicitly {@link netproto.RPCInfo.verify|verify} messages.
         * @param message RPCInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IRPCInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RPCInfo message, length delimited. Does not implicitly {@link netproto.RPCInfo.verify|verify} messages.
         * @param message RPCInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IRPCInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RPCInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RPCInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.RPCInfo;

        /**
         * Decodes a RPCInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RPCInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.RPCInfo;

        /**
         * Verifies a RPCInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RPCInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RPCInfo
         */
        public static fromObject(object: { [k: string]: any }): netproto.RPCInfo;

        /**
         * Creates a plain object from a RPCInfo message. Also converts values to other types if specified.
         * @param message RPCInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.RPCInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RPCInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TipMessage. */
    interface ITipMessage {

        /** TipMessage Message */
        Message: string;

        /** TipMessage MsgType */
        MsgType: number;

        /** TipMessage Param */
        Param?: (number|null);
    }

    /** Represents a TipMessage. */
    class TipMessage implements ITipMessage {

        /**
         * Constructs a new TipMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.ITipMessage);

        /** TipMessage Message. */
        public Message: string;

        /** TipMessage MsgType. */
        public MsgType: number;

        /** TipMessage Param. */
        public Param: number;

        /**
         * Creates a new TipMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TipMessage instance
         */
        public static create(properties?: netproto.ITipMessage): netproto.TipMessage;

        /**
         * Encodes the specified TipMessage message. Does not implicitly {@link netproto.TipMessage.verify|verify} messages.
         * @param message TipMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ITipMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TipMessage message, length delimited. Does not implicitly {@link netproto.TipMessage.verify|verify} messages.
         * @param message TipMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ITipMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TipMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TipMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.TipMessage;

        /**
         * Decodes a TipMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TipMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.TipMessage;

        /**
         * Verifies a TipMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TipMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TipMessage
         */
        public static fromObject(object: { [k: string]: any }): netproto.TipMessage;

        /**
         * Creates a plain object from a TipMessage message. Also converts values to other types if specified.
         * @param message TipMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.TipMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TipMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HeartBeatConfig. */
    interface IHeartBeatConfig {

        /** HeartBeatConfig BeatInterval */
        BeatInterval: number;

        /** HeartBeatConfig ConnLoseTimeSpan */
        ConnLoseTimeSpan: number;
    }

    /** Represents a HeartBeatConfig. */
    class HeartBeatConfig implements IHeartBeatConfig {

        /**
         * Constructs a new HeartBeatConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IHeartBeatConfig);

        /** HeartBeatConfig BeatInterval. */
        public BeatInterval: number;

        /** HeartBeatConfig ConnLoseTimeSpan. */
        public ConnLoseTimeSpan: number;

        /**
         * Creates a new HeartBeatConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartBeatConfig instance
         */
        public static create(properties?: netproto.IHeartBeatConfig): netproto.HeartBeatConfig;

        /**
         * Encodes the specified HeartBeatConfig message. Does not implicitly {@link netproto.HeartBeatConfig.verify|verify} messages.
         * @param message HeartBeatConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IHeartBeatConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartBeatConfig message, length delimited. Does not implicitly {@link netproto.HeartBeatConfig.verify|verify} messages.
         * @param message HeartBeatConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IHeartBeatConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartBeatConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartBeatConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.HeartBeatConfig;

        /**
         * Decodes a HeartBeatConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartBeatConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.HeartBeatConfig;

        /**
         * Verifies a HeartBeatConfig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HeartBeatConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HeartBeatConfig
         */
        public static fromObject(object: { [k: string]: any }): netproto.HeartBeatConfig;

        /**
         * Creates a plain object from a HeartBeatConfig message. Also converts values to other types if specified.
         * @param message HeartBeatConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.HeartBeatConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HeartBeatConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a IPReport. */
    interface IIPReport {

        /** IPReport IPAddress */
        IPAddress: string;
    }

    /** Represents a IPReport. */
    class IPReport implements IIPReport {

        /**
         * Constructs a new IPReport.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IIPReport);

        /** IPReport IPAddress. */
        public IPAddress: string;

        /**
         * Creates a new IPReport instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IPReport instance
         */
        public static create(properties?: netproto.IIPReport): netproto.IPReport;

        /**
         * Encodes the specified IPReport message. Does not implicitly {@link netproto.IPReport.verify|verify} messages.
         * @param message IPReport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IIPReport, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IPReport message, length delimited. Does not implicitly {@link netproto.IPReport.verify|verify} messages.
         * @param message IPReport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IIPReport, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a IPReport message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IPReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.IPReport;

        /**
         * Decodes a IPReport message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IPReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.IPReport;

        /**
         * Verifies a IPReport message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a IPReport message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IPReport
         */
        public static fromObject(object: { [k: string]: any }): netproto.IPReport;

        /**
         * Creates a plain object from a IPReport message. Also converts values to other types if specified.
         * @param message IPReport
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.IPReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IPReport to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** GameRoomClassID enum. */
    enum GameRoomClassID {
        LoginRoomID = 1,
        LoginRoomRetID = 2,
        UserQueueID = 3,
        GameReadyID = 4,
        RequestGameVerID = 5,
        GameVerInfoID = 6,
        UserQueueAfterQuitID = 11,
        UserForceLeaveRoomID = 12,
        SlotGetGameProgressID = 13,
        SlotGetGameProgressRetID = 14,
        SlotSaveGameProgressID = 15,
        SlotGetJackpotID = 16,
        SlotGetJackpotRetID = 17,
        SlotUpdateJackpotID = 18,
        SlotGetJackpotGroupID = 19,
        SlotGetJackpotGroupRetID = 20,
        SlotUpdateJackpotGroupID = 21,
        UserSendVipBrowReqID = 22,
        UserSendVipBrowRetID = 23,
        BroadcastUserVipBrowID = 24,
        AddUserTaskGameEvent = 25,
        GetUserSingleControl = 26,
        SlotGetUserControl = 27,
        UpdateGameJackpotID = 28,
        UpdateGameJackpotRetID = 29,
        UserGameJackpotLogID = 30,
        GetUserControlID = 31,
        UpdateUserControlID = 32,
        GetGameRechargeID = 33,
        UpdateGameRechargeID = 34,
        UpdateNewbieID = 35,
        AddGameMessageID = 36,
        UpdateUserGameFreeLoseID = 50,
        UpdateCPGameListID = 60,
        GetUserLucky = 70
    }

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

        /** LoginGameRoomInfo GameID */
        GameID?: (number|null);

        /** LoginGameRoomInfo ServerID */
        ServerID?: (number|null);
    }

    /** Represents a LoginGameRoomInfo. */
    class LoginGameRoomInfo implements ILoginGameRoomInfo {

        /**
         * Constructs a new LoginGameRoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.ILoginGameRoomInfo);

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

        /** LoginGameRoomInfo GameID. */
        public GameID: number;

        /** LoginGameRoomInfo ServerID. */
        public ServerID: number;

        /**
         * Creates a new LoginGameRoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginGameRoomInfo instance
         */
        public static create(properties?: netproto.ILoginGameRoomInfo): netproto.LoginGameRoomInfo;

        /**
         * Encodes the specified LoginGameRoomInfo message. Does not implicitly {@link netproto.LoginGameRoomInfo.verify|verify} messages.
         * @param message LoginGameRoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ILoginGameRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginGameRoomInfo message, length delimited. Does not implicitly {@link netproto.LoginGameRoomInfo.verify|verify} messages.
         * @param message LoginGameRoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ILoginGameRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginGameRoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginGameRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.LoginGameRoomInfo;

        /**
         * Decodes a LoginGameRoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginGameRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.LoginGameRoomInfo;

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
        public static fromObject(object: { [k: string]: any }): netproto.LoginGameRoomInfo;

        /**
         * Creates a plain object from a LoginGameRoomInfo message. Also converts values to other types if specified.
         * @param message LoginGameRoomInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.LoginGameRoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        LoginRequestData?: (netproto.ILoginGameRoomInfo|null);

        /** LoginGameRoomRet UserData */
        UserData?: (netproto.IUserRoomLogonData|null);

        /** LoginGameRoomRet RoomInfo */
        RoomInfo?: (netproto.IRoomInfo|null);
    }

    /** Represents a LoginGameRoomRet. */
    class LoginGameRoomRet implements ILoginGameRoomRet {

        /**
         * Constructs a new LoginGameRoomRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.ILoginGameRoomRet);

        /** LoginGameRoomRet Code. */
        public Code: number;

        /** LoginGameRoomRet Message. */
        public Message: string;

        /** LoginGameRoomRet LoginRequestData. */
        public LoginRequestData?: (netproto.ILoginGameRoomInfo|null);

        /** LoginGameRoomRet UserData. */
        public UserData?: (netproto.IUserRoomLogonData|null);

        /** LoginGameRoomRet RoomInfo. */
        public RoomInfo?: (netproto.IRoomInfo|null);

        /**
         * Creates a new LoginGameRoomRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginGameRoomRet instance
         */
        public static create(properties?: netproto.ILoginGameRoomRet): netproto.LoginGameRoomRet;

        /**
         * Encodes the specified LoginGameRoomRet message. Does not implicitly {@link netproto.LoginGameRoomRet.verify|verify} messages.
         * @param message LoginGameRoomRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ILoginGameRoomRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginGameRoomRet message, length delimited. Does not implicitly {@link netproto.LoginGameRoomRet.verify|verify} messages.
         * @param message LoginGameRoomRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ILoginGameRoomRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginGameRoomRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginGameRoomRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.LoginGameRoomRet;

        /**
         * Decodes a LoginGameRoomRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginGameRoomRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.LoginGameRoomRet;

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
        public static fromObject(object: { [k: string]: any }): netproto.LoginGameRoomRet;

        /**
         * Creates a plain object from a LoginGameRoomRet message. Also converts values to other types if specified.
         * @param message LoginGameRoomRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.LoginGameRoomRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        FaceID: string;

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

        /** UserRoomLogonData WebViewUrl */
        WebViewUrl?: (string|null);

        /** UserRoomLogonData NotifyGameUrl */
        NotifyGameUrl?: (string|null);

        /** UserRoomLogonData DayLoseWin */
        DayLoseWin?: (number|Long|null);

        /** UserRoomLogonData SumConvert */
        SumConvert?: (number|Long|null);

        /** UserRoomLogonData UgflTimes */
        UgflTimes?: (number|Long|null);

        /** UserRoomLogonData UgflStatus */
        UgflStatus?: (number|null);
    }

    /** Represents a UserRoomLogonData. */
    class UserRoomLogonData implements IUserRoomLogonData {

        /**
         * Constructs a new UserRoomLogonData.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IUserRoomLogonData);

        /** UserRoomLogonData UserID. */
        public UserID: number;

        /** UserRoomLogonData UserType. */
        public UserType: number;

        /** UserRoomLogonData NickName. */
        public NickName: string;

        /** UserRoomLogonData FaceID. */
        public FaceID: string;

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

        /** UserRoomLogonData WebViewUrl. */
        public WebViewUrl: string;

        /** UserRoomLogonData NotifyGameUrl. */
        public NotifyGameUrl: string;

        /** UserRoomLogonData DayLoseWin. */
        public DayLoseWin: (number|Long);

        /** UserRoomLogonData SumConvert. */
        public SumConvert: (number|Long);

        /** UserRoomLogonData UgflTimes. */
        public UgflTimes: (number|Long);

        /** UserRoomLogonData UgflStatus. */
        public UgflStatus: number;

        /**
         * Creates a new UserRoomLogonData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserRoomLogonData instance
         */
        public static create(properties?: netproto.IUserRoomLogonData): netproto.UserRoomLogonData;

        /**
         * Encodes the specified UserRoomLogonData message. Does not implicitly {@link netproto.UserRoomLogonData.verify|verify} messages.
         * @param message UserRoomLogonData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IUserRoomLogonData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserRoomLogonData message, length delimited. Does not implicitly {@link netproto.UserRoomLogonData.verify|verify} messages.
         * @param message UserRoomLogonData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IUserRoomLogonData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserRoomLogonData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserRoomLogonData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.UserRoomLogonData;

        /**
         * Decodes a UserRoomLogonData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserRoomLogonData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.UserRoomLogonData;

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
        public static fromObject(object: { [k: string]: any }): netproto.UserRoomLogonData;

        /**
         * Creates a plain object from a UserRoomLogonData message. Also converts values to other types if specified.
         * @param message UserRoomLogonData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.UserRoomLogonData, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IUserSit);

        /** UserSit TableNo. */
        public TableNo: number;

        /** UserSit SeatNo. */
        public SeatNo: number;

        /**
         * Creates a new UserSit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserSit instance
         */
        public static create(properties?: netproto.IUserSit): netproto.UserSit;

        /**
         * Encodes the specified UserSit message. Does not implicitly {@link netproto.UserSit.verify|verify} messages.
         * @param message UserSit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IUserSit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserSit message, length delimited. Does not implicitly {@link netproto.UserSit.verify|verify} messages.
         * @param message UserSit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IUserSit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserSit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserSit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.UserSit;

        /**
         * Decodes a UserSit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserSit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.UserSit;

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
        public static fromObject(object: { [k: string]: any }): netproto.UserSit;

        /**
         * Creates a plain object from a UserSit message. Also converts values to other types if specified.
         * @param message UserSit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.UserSit, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IGameVerInfo);

        /** GameVerInfo AndroidVersion. */
        public AndroidVersion: string;

        /** GameVerInfo IOSVersion. */
        public IOSVersion: string;

        /**
         * Creates a new GameVerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameVerInfo instance
         */
        public static create(properties?: netproto.IGameVerInfo): netproto.GameVerInfo;

        /**
         * Encodes the specified GameVerInfo message. Does not implicitly {@link netproto.GameVerInfo.verify|verify} messages.
         * @param message GameVerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGameVerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameVerInfo message, length delimited. Does not implicitly {@link netproto.GameVerInfo.verify|verify} messages.
         * @param message GameVerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGameVerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameVerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameVerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GameVerInfo;

        /**
         * Decodes a GameVerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameVerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GameVerInfo;

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
        public static fromObject(object: { [k: string]: any }): netproto.GameVerInfo;

        /**
         * Creates a plain object from a GameVerInfo message. Also converts values to other types if specified.
         * @param message GameVerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GameVerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** RoomInfo CpID */
        CpID?: (number|null);

        /** RoomInfo ServerID */
        ServerID?: (number|null);
    }

    /** Represents a RoomInfo. */
    class RoomInfo implements IRoomInfo {

        /**
         * Constructs a new RoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IRoomInfo);

        /** RoomInfo GameID. */
        public GameID: number;

        /** RoomInfo GameName. */
        public GameName: string;

        /** RoomInfo Flag. */
        public Flag: string;

        /** RoomInfo BaseScore. */
        public BaseScore: number;

        /** RoomInfo CpID. */
        public CpID: number;

        /** RoomInfo ServerID. */
        public ServerID: number;

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomInfo instance
         */
        public static create(properties?: netproto.IRoomInfo): netproto.RoomInfo;

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link netproto.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link netproto.RoomInfo.verify|verify} messages.
         * @param message RoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.RoomInfo;

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.RoomInfo;

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
        public static fromObject(object: { [k: string]: any }): netproto.RoomInfo;

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @param message RoomInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.RoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.ISlotGetGameProgress);

        /** SlotGetGameProgress UserID. */
        public UserID: number;

        /** SlotGetGameProgress GameID. */
        public GameID: number;

        /**
         * Creates a new SlotGetGameProgress instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SlotGetGameProgress instance
         */
        public static create(properties?: netproto.ISlotGetGameProgress): netproto.SlotGetGameProgress;

        /**
         * Encodes the specified SlotGetGameProgress message. Does not implicitly {@link netproto.SlotGetGameProgress.verify|verify} messages.
         * @param message SlotGetGameProgress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ISlotGetGameProgress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlotGetGameProgress message, length delimited. Does not implicitly {@link netproto.SlotGetGameProgress.verify|verify} messages.
         * @param message SlotGetGameProgress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ISlotGetGameProgress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlotGetGameProgress message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlotGetGameProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.SlotGetGameProgress;

        /**
         * Decodes a SlotGetGameProgress message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlotGetGameProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.SlotGetGameProgress;

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
        public static fromObject(object: { [k: string]: any }): netproto.SlotGetGameProgress;

        /**
         * Creates a plain object from a SlotGetGameProgress message. Also converts values to other types if specified.
         * @param message SlotGetGameProgress
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.SlotGetGameProgress, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.ISlotGetGameProgressRet);

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
        public static create(properties?: netproto.ISlotGetGameProgressRet): netproto.SlotGetGameProgressRet;

        /**
         * Encodes the specified SlotGetGameProgressRet message. Does not implicitly {@link netproto.SlotGetGameProgressRet.verify|verify} messages.
         * @param message SlotGetGameProgressRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ISlotGetGameProgressRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlotGetGameProgressRet message, length delimited. Does not implicitly {@link netproto.SlotGetGameProgressRet.verify|verify} messages.
         * @param message SlotGetGameProgressRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ISlotGetGameProgressRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlotGetGameProgressRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlotGetGameProgressRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.SlotGetGameProgressRet;

        /**
         * Decodes a SlotGetGameProgressRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlotGetGameProgressRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.SlotGetGameProgressRet;

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
        public static fromObject(object: { [k: string]: any }): netproto.SlotGetGameProgressRet;

        /**
         * Creates a plain object from a SlotGetGameProgressRet message. Also converts values to other types if specified.
         * @param message SlotGetGameProgressRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.SlotGetGameProgressRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.ISlotSaveGameProgress);

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
        public static create(properties?: netproto.ISlotSaveGameProgress): netproto.SlotSaveGameProgress;

        /**
         * Encodes the specified SlotSaveGameProgress message. Does not implicitly {@link netproto.SlotSaveGameProgress.verify|verify} messages.
         * @param message SlotSaveGameProgress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ISlotSaveGameProgress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlotSaveGameProgress message, length delimited. Does not implicitly {@link netproto.SlotSaveGameProgress.verify|verify} messages.
         * @param message SlotSaveGameProgress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ISlotSaveGameProgress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlotSaveGameProgress message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlotSaveGameProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.SlotSaveGameProgress;

        /**
         * Decodes a SlotSaveGameProgress message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlotSaveGameProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.SlotSaveGameProgress;

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
        public static fromObject(object: { [k: string]: any }): netproto.SlotSaveGameProgress;

        /**
         * Creates a plain object from a SlotSaveGameProgress message. Also converts values to other types if specified.
         * @param message SlotSaveGameProgress
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.SlotSaveGameProgress, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.ISlotGetJackpot);

        /** SlotGetJackpot GameID. */
        public GameID: number;

        /** SlotGetJackpot PoolCount. */
        public PoolCount: number;

        /**
         * Creates a new SlotGetJackpot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SlotGetJackpot instance
         */
        public static create(properties?: netproto.ISlotGetJackpot): netproto.SlotGetJackpot;

        /**
         * Encodes the specified SlotGetJackpot message. Does not implicitly {@link netproto.SlotGetJackpot.verify|verify} messages.
         * @param message SlotGetJackpot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ISlotGetJackpot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlotGetJackpot message, length delimited. Does not implicitly {@link netproto.SlotGetJackpot.verify|verify} messages.
         * @param message SlotGetJackpot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ISlotGetJackpot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlotGetJackpot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlotGetJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.SlotGetJackpot;

        /**
         * Decodes a SlotGetJackpot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlotGetJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.SlotGetJackpot;

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
        public static fromObject(object: { [k: string]: any }): netproto.SlotGetJackpot;

        /**
         * Creates a plain object from a SlotGetJackpot message. Also converts values to other types if specified.
         * @param message SlotGetJackpot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.SlotGetJackpot, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.ISlotGetJackpotRet);

        /** SlotGetJackpotRet GameID. */
        public GameID: number;

        /** SlotGetJackpotRet Jackpots. */
        public Jackpots: (number|Long)[];

        /**
         * Creates a new SlotGetJackpotRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SlotGetJackpotRet instance
         */
        public static create(properties?: netproto.ISlotGetJackpotRet): netproto.SlotGetJackpotRet;

        /**
         * Encodes the specified SlotGetJackpotRet message. Does not implicitly {@link netproto.SlotGetJackpotRet.verify|verify} messages.
         * @param message SlotGetJackpotRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ISlotGetJackpotRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlotGetJackpotRet message, length delimited. Does not implicitly {@link netproto.SlotGetJackpotRet.verify|verify} messages.
         * @param message SlotGetJackpotRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ISlotGetJackpotRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlotGetJackpotRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlotGetJackpotRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.SlotGetJackpotRet;

        /**
         * Decodes a SlotGetJackpotRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlotGetJackpotRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.SlotGetJackpotRet;

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
        public static fromObject(object: { [k: string]: any }): netproto.SlotGetJackpotRet;

        /**
         * Creates a plain object from a SlotGetJackpotRet message. Also converts values to other types if specified.
         * @param message SlotGetJackpotRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.SlotGetJackpotRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.ISlotUpdateJackpot);

        /** SlotUpdateJackpot GameID. */
        public GameID: number;

        /** SlotUpdateJackpot ChangeJackpots. */
        public ChangeJackpots: (number|Long)[];

        /**
         * Creates a new SlotUpdateJackpot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SlotUpdateJackpot instance
         */
        public static create(properties?: netproto.ISlotUpdateJackpot): netproto.SlotUpdateJackpot;

        /**
         * Encodes the specified SlotUpdateJackpot message. Does not implicitly {@link netproto.SlotUpdateJackpot.verify|verify} messages.
         * @param message SlotUpdateJackpot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ISlotUpdateJackpot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlotUpdateJackpot message, length delimited. Does not implicitly {@link netproto.SlotUpdateJackpot.verify|verify} messages.
         * @param message SlotUpdateJackpot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ISlotUpdateJackpot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlotUpdateJackpot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlotUpdateJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.SlotUpdateJackpot;

        /**
         * Decodes a SlotUpdateJackpot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlotUpdateJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.SlotUpdateJackpot;

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
        public static fromObject(object: { [k: string]: any }): netproto.SlotUpdateJackpot;

        /**
         * Creates a plain object from a SlotUpdateJackpot message. Also converts values to other types if specified.
         * @param message SlotUpdateJackpot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.SlotUpdateJackpot, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.ISlotGetJackpotGroup);

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
        public static create(properties?: netproto.ISlotGetJackpotGroup): netproto.SlotGetJackpotGroup;

        /**
         * Encodes the specified SlotGetJackpotGroup message. Does not implicitly {@link netproto.SlotGetJackpotGroup.verify|verify} messages.
         * @param message SlotGetJackpotGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ISlotGetJackpotGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlotGetJackpotGroup message, length delimited. Does not implicitly {@link netproto.SlotGetJackpotGroup.verify|verify} messages.
         * @param message SlotGetJackpotGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ISlotGetJackpotGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlotGetJackpotGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlotGetJackpotGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.SlotGetJackpotGroup;

        /**
         * Decodes a SlotGetJackpotGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlotGetJackpotGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.SlotGetJackpotGroup;

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
        public static fromObject(object: { [k: string]: any }): netproto.SlotGetJackpotGroup;

        /**
         * Creates a plain object from a SlotGetJackpotGroup message. Also converts values to other types if specified.
         * @param message SlotGetJackpotGroup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.SlotGetJackpotGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.ISlotGetJackpotGroupRet);

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
        public static create(properties?: netproto.ISlotGetJackpotGroupRet): netproto.SlotGetJackpotGroupRet;

        /**
         * Encodes the specified SlotGetJackpotGroupRet message. Does not implicitly {@link netproto.SlotGetJackpotGroupRet.verify|verify} messages.
         * @param message SlotGetJackpotGroupRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ISlotGetJackpotGroupRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlotGetJackpotGroupRet message, length delimited. Does not implicitly {@link netproto.SlotGetJackpotGroupRet.verify|verify} messages.
         * @param message SlotGetJackpotGroupRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ISlotGetJackpotGroupRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlotGetJackpotGroupRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlotGetJackpotGroupRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.SlotGetJackpotGroupRet;

        /**
         * Decodes a SlotGetJackpotGroupRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlotGetJackpotGroupRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.SlotGetJackpotGroupRet;

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
        public static fromObject(object: { [k: string]: any }): netproto.SlotGetJackpotGroupRet;

        /**
         * Creates a plain object from a SlotGetJackpotGroupRet message. Also converts values to other types if specified.
         * @param message SlotGetJackpotGroupRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.SlotGetJackpotGroupRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.ISlotUpdateJackpotGroup);

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
        public static create(properties?: netproto.ISlotUpdateJackpotGroup): netproto.SlotUpdateJackpotGroup;

        /**
         * Encodes the specified SlotUpdateJackpotGroup message. Does not implicitly {@link netproto.SlotUpdateJackpotGroup.verify|verify} messages.
         * @param message SlotUpdateJackpotGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ISlotUpdateJackpotGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlotUpdateJackpotGroup message, length delimited. Does not implicitly {@link netproto.SlotUpdateJackpotGroup.verify|verify} messages.
         * @param message SlotUpdateJackpotGroup message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ISlotUpdateJackpotGroup, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlotUpdateJackpotGroup message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlotUpdateJackpotGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.SlotUpdateJackpotGroup;

        /**
         * Decodes a SlotUpdateJackpotGroup message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlotUpdateJackpotGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.SlotUpdateJackpotGroup;

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
        public static fromObject(object: { [k: string]: any }): netproto.SlotUpdateJackpotGroup;

        /**
         * Creates a plain object from a SlotUpdateJackpotGroup message. Also converts values to other types if specified.
         * @param message SlotUpdateJackpotGroup
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.SlotUpdateJackpotGroup, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.ISendUserVipBrowReq);

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
        public static create(properties?: netproto.ISendUserVipBrowReq): netproto.SendUserVipBrowReq;

        /**
         * Encodes the specified SendUserVipBrowReq message. Does not implicitly {@link netproto.SendUserVipBrowReq.verify|verify} messages.
         * @param message SendUserVipBrowReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ISendUserVipBrowReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserVipBrowReq message, length delimited. Does not implicitly {@link netproto.SendUserVipBrowReq.verify|verify} messages.
         * @param message SendUserVipBrowReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ISendUserVipBrowReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserVipBrowReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserVipBrowReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.SendUserVipBrowReq;

        /**
         * Decodes a SendUserVipBrowReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserVipBrowReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.SendUserVipBrowReq;

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
        public static fromObject(object: { [k: string]: any }): netproto.SendUserVipBrowReq;

        /**
         * Creates a plain object from a SendUserVipBrowReq message. Also converts values to other types if specified.
         * @param message SendUserVipBrowReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.SendUserVipBrowReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.ISendUserVipBrowRet);

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
        public static create(properties?: netproto.ISendUserVipBrowRet): netproto.SendUserVipBrowRet;

        /**
         * Encodes the specified SendUserVipBrowRet message. Does not implicitly {@link netproto.SendUserVipBrowRet.verify|verify} messages.
         * @param message SendUserVipBrowRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ISendUserVipBrowRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserVipBrowRet message, length delimited. Does not implicitly {@link netproto.SendUserVipBrowRet.verify|verify} messages.
         * @param message SendUserVipBrowRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ISendUserVipBrowRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserVipBrowRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserVipBrowRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.SendUserVipBrowRet;

        /**
         * Decodes a SendUserVipBrowRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserVipBrowRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.SendUserVipBrowRet;

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
        public static fromObject(object: { [k: string]: any }): netproto.SendUserVipBrowRet;

        /**
         * Creates a plain object from a SendUserVipBrowRet message. Also converts values to other types if specified.
         * @param message SendUserVipBrowRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.SendUserVipBrowRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IBroadcastUserVipBrow);

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
        public static create(properties?: netproto.IBroadcastUserVipBrow): netproto.BroadcastUserVipBrow;

        /**
         * Encodes the specified BroadcastUserVipBrow message. Does not implicitly {@link netproto.BroadcastUserVipBrow.verify|verify} messages.
         * @param message BroadcastUserVipBrow message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IBroadcastUserVipBrow, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BroadcastUserVipBrow message, length delimited. Does not implicitly {@link netproto.BroadcastUserVipBrow.verify|verify} messages.
         * @param message BroadcastUserVipBrow message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IBroadcastUserVipBrow, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BroadcastUserVipBrow message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BroadcastUserVipBrow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.BroadcastUserVipBrow;

        /**
         * Decodes a BroadcastUserVipBrow message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BroadcastUserVipBrow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.BroadcastUserVipBrow;

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
        public static fromObject(object: { [k: string]: any }): netproto.BroadcastUserVipBrow;

        /**
         * Creates a plain object from a BroadcastUserVipBrow message. Also converts values to other types if specified.
         * @param message BroadcastUserVipBrow
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.BroadcastUserVipBrow, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IAddUserTaskGameEventReq);

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
        public static create(properties?: netproto.IAddUserTaskGameEventReq): netproto.AddUserTaskGameEventReq;

        /**
         * Encodes the specified AddUserTaskGameEventReq message. Does not implicitly {@link netproto.AddUserTaskGameEventReq.verify|verify} messages.
         * @param message AddUserTaskGameEventReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IAddUserTaskGameEventReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddUserTaskGameEventReq message, length delimited. Does not implicitly {@link netproto.AddUserTaskGameEventReq.verify|verify} messages.
         * @param message AddUserTaskGameEventReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IAddUserTaskGameEventReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddUserTaskGameEventReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddUserTaskGameEventReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.AddUserTaskGameEventReq;

        /**
         * Decodes an AddUserTaskGameEventReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddUserTaskGameEventReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.AddUserTaskGameEventReq;

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
        public static fromObject(object: { [k: string]: any }): netproto.AddUserTaskGameEventReq;

        /**
         * Creates a plain object from an AddUserTaskGameEventReq message. Also converts values to other types if specified.
         * @param message AddUserTaskGameEventReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.AddUserTaskGameEventReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IUserSingleControlReq);

        /** UserSingleControlReq UserID. */
        public UserID: number;

        /** UserSingleControlReq ServerID. */
        public ServerID: number;

        /**
         * Creates a new UserSingleControlReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserSingleControlReq instance
         */
        public static create(properties?: netproto.IUserSingleControlReq): netproto.UserSingleControlReq;

        /**
         * Encodes the specified UserSingleControlReq message. Does not implicitly {@link netproto.UserSingleControlReq.verify|verify} messages.
         * @param message UserSingleControlReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IUserSingleControlReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserSingleControlReq message, length delimited. Does not implicitly {@link netproto.UserSingleControlReq.verify|verify} messages.
         * @param message UserSingleControlReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IUserSingleControlReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserSingleControlReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserSingleControlReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.UserSingleControlReq;

        /**
         * Decodes a UserSingleControlReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserSingleControlReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.UserSingleControlReq;

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
        public static fromObject(object: { [k: string]: any }): netproto.UserSingleControlReq;

        /**
         * Creates a plain object from a UserSingleControlReq message. Also converts values to other types if specified.
         * @param message UserSingleControlReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.UserSingleControlReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IUserSingleControlRes);

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
        public static create(properties?: netproto.IUserSingleControlRes): netproto.UserSingleControlRes;

        /**
         * Encodes the specified UserSingleControlRes message. Does not implicitly {@link netproto.UserSingleControlRes.verify|verify} messages.
         * @param message UserSingleControlRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IUserSingleControlRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserSingleControlRes message, length delimited. Does not implicitly {@link netproto.UserSingleControlRes.verify|verify} messages.
         * @param message UserSingleControlRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IUserSingleControlRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserSingleControlRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserSingleControlRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.UserSingleControlRes;

        /**
         * Decodes a UserSingleControlRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserSingleControlRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.UserSingleControlRes;

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
        public static fromObject(object: { [k: string]: any }): netproto.UserSingleControlRes;

        /**
         * Creates a plain object from a UserSingleControlRes message. Also converts values to other types if specified.
         * @param message UserSingleControlRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.UserSingleControlRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.ISlotGetUserControlReq);

        /** SlotGetUserControlReq UserID. */
        public UserID: number;

        /**
         * Creates a new SlotGetUserControlReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SlotGetUserControlReq instance
         */
        public static create(properties?: netproto.ISlotGetUserControlReq): netproto.SlotGetUserControlReq;

        /**
         * Encodes the specified SlotGetUserControlReq message. Does not implicitly {@link netproto.SlotGetUserControlReq.verify|verify} messages.
         * @param message SlotGetUserControlReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ISlotGetUserControlReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlotGetUserControlReq message, length delimited. Does not implicitly {@link netproto.SlotGetUserControlReq.verify|verify} messages.
         * @param message SlotGetUserControlReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ISlotGetUserControlReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlotGetUserControlReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlotGetUserControlReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.SlotGetUserControlReq;

        /**
         * Decodes a SlotGetUserControlReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlotGetUserControlReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.SlotGetUserControlReq;

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
        public static fromObject(object: { [k: string]: any }): netproto.SlotGetUserControlReq;

        /**
         * Creates a plain object from a SlotGetUserControlReq message. Also converts values to other types if specified.
         * @param message SlotGetUserControlReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.SlotGetUserControlReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.ISlotGetUserControlRet);

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
        public static create(properties?: netproto.ISlotGetUserControlRet): netproto.SlotGetUserControlRet;

        /**
         * Encodes the specified SlotGetUserControlRet message. Does not implicitly {@link netproto.SlotGetUserControlRet.verify|verify} messages.
         * @param message SlotGetUserControlRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ISlotGetUserControlRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SlotGetUserControlRet message, length delimited. Does not implicitly {@link netproto.SlotGetUserControlRet.verify|verify} messages.
         * @param message SlotGetUserControlRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ISlotGetUserControlRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SlotGetUserControlRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SlotGetUserControlRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.SlotGetUserControlRet;

        /**
         * Decodes a SlotGetUserControlRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SlotGetUserControlRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.SlotGetUserControlRet;

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
        public static fromObject(object: { [k: string]: any }): netproto.SlotGetUserControlRet;

        /**
         * Creates a plain object from a SlotGetUserControlRet message. Also converts values to other types if specified.
         * @param message SlotGetUserControlRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.SlotGetUserControlRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IUpdateGameJackpot);

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
        public static create(properties?: netproto.IUpdateGameJackpot): netproto.UpdateGameJackpot;

        /**
         * Encodes the specified UpdateGameJackpot message. Does not implicitly {@link netproto.UpdateGameJackpot.verify|verify} messages.
         * @param message UpdateGameJackpot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IUpdateGameJackpot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateGameJackpot message, length delimited. Does not implicitly {@link netproto.UpdateGameJackpot.verify|verify} messages.
         * @param message UpdateGameJackpot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IUpdateGameJackpot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateGameJackpot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateGameJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.UpdateGameJackpot;

        /**
         * Decodes an UpdateGameJackpot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateGameJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.UpdateGameJackpot;

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
        public static fromObject(object: { [k: string]: any }): netproto.UpdateGameJackpot;

        /**
         * Creates a plain object from an UpdateGameJackpot message. Also converts values to other types if specified.
         * @param message UpdateGameJackpot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.UpdateGameJackpot, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IUpdateGameJackpotRet);

        /** UpdateGameJackpotRet Jackpot. */
        public Jackpot: (number|Long);

        /**
         * Creates a new UpdateGameJackpotRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateGameJackpotRet instance
         */
        public static create(properties?: netproto.IUpdateGameJackpotRet): netproto.UpdateGameJackpotRet;

        /**
         * Encodes the specified UpdateGameJackpotRet message. Does not implicitly {@link netproto.UpdateGameJackpotRet.verify|verify} messages.
         * @param message UpdateGameJackpotRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IUpdateGameJackpotRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateGameJackpotRet message, length delimited. Does not implicitly {@link netproto.UpdateGameJackpotRet.verify|verify} messages.
         * @param message UpdateGameJackpotRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IUpdateGameJackpotRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateGameJackpotRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateGameJackpotRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.UpdateGameJackpotRet;

        /**
         * Decodes an UpdateGameJackpotRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateGameJackpotRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.UpdateGameJackpotRet;

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
        public static fromObject(object: { [k: string]: any }): netproto.UpdateGameJackpotRet;

        /**
         * Creates a plain object from an UpdateGameJackpotRet message. Also converts values to other types if specified.
         * @param message UpdateGameJackpotRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.UpdateGameJackpotRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IUserGameJackpotLog);

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
        public static create(properties?: netproto.IUserGameJackpotLog): netproto.UserGameJackpotLog;

        /**
         * Encodes the specified UserGameJackpotLog message. Does not implicitly {@link netproto.UserGameJackpotLog.verify|verify} messages.
         * @param message UserGameJackpotLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IUserGameJackpotLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserGameJackpotLog message, length delimited. Does not implicitly {@link netproto.UserGameJackpotLog.verify|verify} messages.
         * @param message UserGameJackpotLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IUserGameJackpotLog, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserGameJackpotLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserGameJackpotLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.UserGameJackpotLog;

        /**
         * Decodes a UserGameJackpotLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserGameJackpotLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.UserGameJackpotLog;

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
        public static fromObject(object: { [k: string]: any }): netproto.UserGameJackpotLog;

        /**
         * Creates a plain object from a UserGameJackpotLog message. Also converts values to other types if specified.
         * @param message UserGameJackpotLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.UserGameJackpotLog, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserGameJackpotLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetUserControlReq. */
    interface IGetUserControlReq {

        /** GetUserControlReq UserID */
        UserID: number;
    }

    /** Represents a GetUserControlReq. */
    class GetUserControlReq implements IGetUserControlReq {

        /**
         * Constructs a new GetUserControlReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IGetUserControlReq);

        /** GetUserControlReq UserID. */
        public UserID: number;

        /**
         * Creates a new GetUserControlReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserControlReq instance
         */
        public static create(properties?: netproto.IGetUserControlReq): netproto.GetUserControlReq;

        /**
         * Encodes the specified GetUserControlReq message. Does not implicitly {@link netproto.GetUserControlReq.verify|verify} messages.
         * @param message GetUserControlReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGetUserControlReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUserControlReq message, length delimited. Does not implicitly {@link netproto.GetUserControlReq.verify|verify} messages.
         * @param message GetUserControlReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGetUserControlReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUserControlReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserControlReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GetUserControlReq;

        /**
         * Decodes a GetUserControlReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserControlReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GetUserControlReq;

        /**
         * Verifies a GetUserControlReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUserControlReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserControlReq
         */
        public static fromObject(object: { [k: string]: any }): netproto.GetUserControlReq;

        /**
         * Creates a plain object from a GetUserControlReq message. Also converts values to other types if specified.
         * @param message GetUserControlReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GetUserControlReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserControlReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetUserControlRet. */
    interface IGetUserControlRet {

        /** GetUserControlRet UserID */
        UserID: number;

        /** GetUserControlRet CtrlType */
        CtrlType?: (number|null);

        /** GetUserControlRet EndTimestamp */
        EndTimestamp?: (number|Long|null);

        /** GetUserControlRet Rate */
        Rate?: (number|null);

        /** GetUserControlRet CtrlValue */
        CtrlValue?: (number|Long|null);

        /** GetUserControlRet CtrlMode */
        CtrlMode?: (number|null);

        /** GetUserControlRet CurrValue */
        CurrValue?: (number|Long|null);
    }

    /** Represents a GetUserControlRet. */
    class GetUserControlRet implements IGetUserControlRet {

        /**
         * Constructs a new GetUserControlRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IGetUserControlRet);

        /** GetUserControlRet UserID. */
        public UserID: number;

        /** GetUserControlRet CtrlType. */
        public CtrlType: number;

        /** GetUserControlRet EndTimestamp. */
        public EndTimestamp: (number|Long);

        /** GetUserControlRet Rate. */
        public Rate: number;

        /** GetUserControlRet CtrlValue. */
        public CtrlValue: (number|Long);

        /** GetUserControlRet CtrlMode. */
        public CtrlMode: number;

        /** GetUserControlRet CurrValue. */
        public CurrValue: (number|Long);

        /**
         * Creates a new GetUserControlRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserControlRet instance
         */
        public static create(properties?: netproto.IGetUserControlRet): netproto.GetUserControlRet;

        /**
         * Encodes the specified GetUserControlRet message. Does not implicitly {@link netproto.GetUserControlRet.verify|verify} messages.
         * @param message GetUserControlRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGetUserControlRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUserControlRet message, length delimited. Does not implicitly {@link netproto.GetUserControlRet.verify|verify} messages.
         * @param message GetUserControlRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGetUserControlRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUserControlRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserControlRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GetUserControlRet;

        /**
         * Decodes a GetUserControlRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserControlRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GetUserControlRet;

        /**
         * Verifies a GetUserControlRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUserControlRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserControlRet
         */
        public static fromObject(object: { [k: string]: any }): netproto.GetUserControlRet;

        /**
         * Creates a plain object from a GetUserControlRet message. Also converts values to other types if specified.
         * @param message GetUserControlRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GetUserControlRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserControlRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateUserControl. */
    interface IUpdateUserControl {

        /** UpdateUserControl UserID */
        UserID: number;

        /** UpdateUserControl CurrValue */
        CurrValue?: (number|Long|null);
    }

    /** Represents an UpdateUserControl. */
    class UpdateUserControl implements IUpdateUserControl {

        /**
         * Constructs a new UpdateUserControl.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IUpdateUserControl);

        /** UpdateUserControl UserID. */
        public UserID: number;

        /** UpdateUserControl CurrValue. */
        public CurrValue: (number|Long);

        /**
         * Creates a new UpdateUserControl instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateUserControl instance
         */
        public static create(properties?: netproto.IUpdateUserControl): netproto.UpdateUserControl;

        /**
         * Encodes the specified UpdateUserControl message. Does not implicitly {@link netproto.UpdateUserControl.verify|verify} messages.
         * @param message UpdateUserControl message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IUpdateUserControl, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateUserControl message, length delimited. Does not implicitly {@link netproto.UpdateUserControl.verify|verify} messages.
         * @param message UpdateUserControl message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IUpdateUserControl, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateUserControl message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateUserControl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.UpdateUserControl;

        /**
         * Decodes an UpdateUserControl message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateUserControl
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.UpdateUserControl;

        /**
         * Verifies an UpdateUserControl message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateUserControl message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateUserControl
         */
        public static fromObject(object: { [k: string]: any }): netproto.UpdateUserControl;

        /**
         * Creates a plain object from an UpdateUserControl message. Also converts values to other types if specified.
         * @param message UpdateUserControl
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.UpdateUserControl, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateUserControl to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetGameRechargeReq. */
    interface IGetGameRechargeReq {

        /** GetGameRechargeReq UserID */
        UserID: number;
    }

    /** Represents a GetGameRechargeReq. */
    class GetGameRechargeReq implements IGetGameRechargeReq {

        /**
         * Constructs a new GetGameRechargeReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IGetGameRechargeReq);

        /** GetGameRechargeReq UserID. */
        public UserID: number;

        /**
         * Creates a new GetGameRechargeReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGameRechargeReq instance
         */
        public static create(properties?: netproto.IGetGameRechargeReq): netproto.GetGameRechargeReq;

        /**
         * Encodes the specified GetGameRechargeReq message. Does not implicitly {@link netproto.GetGameRechargeReq.verify|verify} messages.
         * @param message GetGameRechargeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGetGameRechargeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGameRechargeReq message, length delimited. Does not implicitly {@link netproto.GetGameRechargeReq.verify|verify} messages.
         * @param message GetGameRechargeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGetGameRechargeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGameRechargeReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGameRechargeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GetGameRechargeReq;

        /**
         * Decodes a GetGameRechargeReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGameRechargeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GetGameRechargeReq;

        /**
         * Verifies a GetGameRechargeReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGameRechargeReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGameRechargeReq
         */
        public static fromObject(object: { [k: string]: any }): netproto.GetGameRechargeReq;

        /**
         * Creates a plain object from a GetGameRechargeReq message. Also converts values to other types if specified.
         * @param message GetGameRechargeReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GetGameRechargeReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGameRechargeReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameRecharge. */
    interface IGameRecharge {

        /** GameRecharge ID */
        ID: number;

        /** GameRecharge RechargeMoney */
        RechargeMoney: (number|Long);
    }

    /** Represents a GameRecharge. */
    class GameRecharge implements IGameRecharge {

        /**
         * Constructs a new GameRecharge.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IGameRecharge);

        /** GameRecharge ID. */
        public ID: number;

        /** GameRecharge RechargeMoney. */
        public RechargeMoney: (number|Long);

        /**
         * Creates a new GameRecharge instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameRecharge instance
         */
        public static create(properties?: netproto.IGameRecharge): netproto.GameRecharge;

        /**
         * Encodes the specified GameRecharge message. Does not implicitly {@link netproto.GameRecharge.verify|verify} messages.
         * @param message GameRecharge message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGameRecharge, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameRecharge message, length delimited. Does not implicitly {@link netproto.GameRecharge.verify|verify} messages.
         * @param message GameRecharge message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGameRecharge, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameRecharge message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameRecharge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GameRecharge;

        /**
         * Decodes a GameRecharge message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameRecharge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GameRecharge;

        /**
         * Verifies a GameRecharge message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameRecharge message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameRecharge
         */
        public static fromObject(object: { [k: string]: any }): netproto.GameRecharge;

        /**
         * Creates a plain object from a GameRecharge message. Also converts values to other types if specified.
         * @param message GameRecharge
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GameRecharge, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameRecharge to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetGameRechargeRet. */
    interface IGetGameRechargeRet {

        /** GetGameRechargeRet UserID */
        UserID: number;

        /** GetGameRechargeRet Recharges */
        Recharges?: (netproto.IGameRecharge[]|null);
    }

    /** Represents a GetGameRechargeRet. */
    class GetGameRechargeRet implements IGetGameRechargeRet {

        /**
         * Constructs a new GetGameRechargeRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IGetGameRechargeRet);

        /** GetGameRechargeRet UserID. */
        public UserID: number;

        /** GetGameRechargeRet Recharges. */
        public Recharges: netproto.IGameRecharge[];

        /**
         * Creates a new GetGameRechargeRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGameRechargeRet instance
         */
        public static create(properties?: netproto.IGetGameRechargeRet): netproto.GetGameRechargeRet;

        /**
         * Encodes the specified GetGameRechargeRet message. Does not implicitly {@link netproto.GetGameRechargeRet.verify|verify} messages.
         * @param message GetGameRechargeRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGetGameRechargeRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGameRechargeRet message, length delimited. Does not implicitly {@link netproto.GetGameRechargeRet.verify|verify} messages.
         * @param message GetGameRechargeRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGetGameRechargeRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGameRechargeRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGameRechargeRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GetGameRechargeRet;

        /**
         * Decodes a GetGameRechargeRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGameRechargeRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GetGameRechargeRet;

        /**
         * Verifies a GetGameRechargeRet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGameRechargeRet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGameRechargeRet
         */
        public static fromObject(object: { [k: string]: any }): netproto.GetGameRechargeRet;

        /**
         * Creates a plain object from a GetGameRechargeRet message. Also converts values to other types if specified.
         * @param message GetGameRechargeRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GetGameRechargeRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGameRechargeRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateGameRechargeReq. */
    interface IUpdateGameRechargeReq {

        /** UpdateGameRechargeReq ID */
        ID: number;

        /** UpdateGameRechargeReq ServerID */
        ServerID: number;

        /** UpdateGameRechargeReq GroupID */
        GroupID: number;
    }

    /** Represents an UpdateGameRechargeReq. */
    class UpdateGameRechargeReq implements IUpdateGameRechargeReq {

        /**
         * Constructs a new UpdateGameRechargeReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IUpdateGameRechargeReq);

        /** UpdateGameRechargeReq ID. */
        public ID: number;

        /** UpdateGameRechargeReq ServerID. */
        public ServerID: number;

        /** UpdateGameRechargeReq GroupID. */
        public GroupID: number;

        /**
         * Creates a new UpdateGameRechargeReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateGameRechargeReq instance
         */
        public static create(properties?: netproto.IUpdateGameRechargeReq): netproto.UpdateGameRechargeReq;

        /**
         * Encodes the specified UpdateGameRechargeReq message. Does not implicitly {@link netproto.UpdateGameRechargeReq.verify|verify} messages.
         * @param message UpdateGameRechargeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IUpdateGameRechargeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateGameRechargeReq message, length delimited. Does not implicitly {@link netproto.UpdateGameRechargeReq.verify|verify} messages.
         * @param message UpdateGameRechargeReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IUpdateGameRechargeReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateGameRechargeReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateGameRechargeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.UpdateGameRechargeReq;

        /**
         * Decodes an UpdateGameRechargeReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateGameRechargeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.UpdateGameRechargeReq;

        /**
         * Verifies an UpdateGameRechargeReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateGameRechargeReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateGameRechargeReq
         */
        public static fromObject(object: { [k: string]: any }): netproto.UpdateGameRechargeReq;

        /**
         * Creates a plain object from an UpdateGameRechargeReq message. Also converts values to other types if specified.
         * @param message UpdateGameRechargeReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.UpdateGameRechargeReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateGameRechargeReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateNewbieReq. */
    interface IUpdateNewbieReq {

        /** UpdateNewbieReq UserID */
        UserID: number;

        /** UpdateNewbieReq ServerID */
        ServerID: number;

        /** UpdateNewbieReq CurrRound */
        CurrRound: number;

        /** UpdateNewbieReq CurrLoseWin */
        CurrLoseWin: (number|Long);
    }

    /** Represents an UpdateNewbieReq. */
    class UpdateNewbieReq implements IUpdateNewbieReq {

        /**
         * Constructs a new UpdateNewbieReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IUpdateNewbieReq);

        /** UpdateNewbieReq UserID. */
        public UserID: number;

        /** UpdateNewbieReq ServerID. */
        public ServerID: number;

        /** UpdateNewbieReq CurrRound. */
        public CurrRound: number;

        /** UpdateNewbieReq CurrLoseWin. */
        public CurrLoseWin: (number|Long);

        /**
         * Creates a new UpdateNewbieReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateNewbieReq instance
         */
        public static create(properties?: netproto.IUpdateNewbieReq): netproto.UpdateNewbieReq;

        /**
         * Encodes the specified UpdateNewbieReq message. Does not implicitly {@link netproto.UpdateNewbieReq.verify|verify} messages.
         * @param message UpdateNewbieReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IUpdateNewbieReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateNewbieReq message, length delimited. Does not implicitly {@link netproto.UpdateNewbieReq.verify|verify} messages.
         * @param message UpdateNewbieReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IUpdateNewbieReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateNewbieReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateNewbieReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.UpdateNewbieReq;

        /**
         * Decodes an UpdateNewbieReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateNewbieReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.UpdateNewbieReq;

        /**
         * Verifies an UpdateNewbieReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateNewbieReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateNewbieReq
         */
        public static fromObject(object: { [k: string]: any }): netproto.UpdateNewbieReq;

        /**
         * Creates a plain object from an UpdateNewbieReq message. Also converts values to other types if specified.
         * @param message UpdateNewbieReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.UpdateNewbieReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateNewbieReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AddGameMessage. */
    interface IAddGameMessage {

        /** AddGameMessage UserID */
        UserID: number;

        /** AddGameMessage Money */
        Money: number;

        /** AddGameMessage Desc */
        Desc: string;

        /** AddGameMessage GameID */
        GameID: number;

        /** AddGameMessage NickName */
        NickName?: (string|null);
    }

    /** Represents an AddGameMessage. */
    class AddGameMessage implements IAddGameMessage {

        /**
         * Constructs a new AddGameMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IAddGameMessage);

        /** AddGameMessage UserID. */
        public UserID: number;

        /** AddGameMessage Money. */
        public Money: number;

        /** AddGameMessage Desc. */
        public Desc: string;

        /** AddGameMessage GameID. */
        public GameID: number;

        /** AddGameMessage NickName. */
        public NickName: string;

        /**
         * Creates a new AddGameMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddGameMessage instance
         */
        public static create(properties?: netproto.IAddGameMessage): netproto.AddGameMessage;

        /**
         * Encodes the specified AddGameMessage message. Does not implicitly {@link netproto.AddGameMessage.verify|verify} messages.
         * @param message AddGameMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IAddGameMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddGameMessage message, length delimited. Does not implicitly {@link netproto.AddGameMessage.verify|verify} messages.
         * @param message AddGameMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IAddGameMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddGameMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddGameMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.AddGameMessage;

        /**
         * Decodes an AddGameMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddGameMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.AddGameMessage;

        /**
         * Verifies an AddGameMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddGameMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddGameMessage
         */
        public static fromObject(object: { [k: string]: any }): netproto.AddGameMessage;

        /**
         * Creates a plain object from an AddGameMessage message. Also converts values to other types if specified.
         * @param message AddGameMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.AddGameMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddGameMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** HallMsgClassID enum. */
    enum HallMsgClassID {
        GuestLoginID = 1,
        LoginRetID = 2,
        UserLoginID = 3,
        UserLogoutID = 4,
        RequestHallVerID = 5,
        HallVerInfoID = 6,
        RequestServerListID = 7,
        ServerListDataID = 8,
        RequestGameServerAddrID = 9,
        GameServerAddrInfoID = 10,
        BindZhifubaoID = 1001,
        BindZhifubaoRetID = 1002,
        ModifyPasswordID = 1003,
        ModifyPasswordRetID = 1004,
        SendPhoneVCodeID = 1005,
        SendPhoneVCodeRetID = 1006,
        ModifyFaceID = 1007,
        ModifyFaceRetID = 1008,
        DepositMoneyID = 1009,
        DepositMoneyRetID = 1010,
        BindGuestAccountID = 1011,
        BindGuestAccountRetID = 1012,
        RequestUserHallInfoID = 1013,
        UserHallInfoID = 1014,
        FindSetPwdByPhoneID = 1015,
        FindSetPwdByPhoneRetID = 1016,
        ModifyBankPasswordID = 1017,
        ModifyBankPasswordRetID = 1018,
        FindSetBankPwdByPhoneID = 1019,
        FindSetBankPwdByPhoneRetID = 1020,
        GetMailListID = 1021,
        GetMailListRetID = 1022,
        GetMailDetailID = 1023,
        GetMailDetailRetID = 1024,
        ContactServiceID = 1025,
        ContactServiceRetID = 1026,
        GetAgentListID = 1027,
        GetAgentListRetID = 1028,
        ApplyAgentID = 1029,
        ApplyAgentRetID = 1030,
        ConvertMoneyID = 1031,
        ConvertMoneyRetID = 1032,
        ReportAgentID = 1033,
        ReportAgentRetID = 1034,
        CreatePayOrderID = 1035,
        CreatePayOrderRetID = 1036,
        GetFAQID = 1037,
        GetFAQRetID = 1038,
        BindBankCardID = 1039,
        BindBankCardRetID = 1040,
        UnbindConvertTypeID = 1041,
        UnbindConvertTypeRetID = 1042,
        CallThirdAPIID = 1043,
        CallThirdAPIRetID = 1044,
        VideoGameLoginID = 1045,
        VideoGameLoginRetID = 1046,
        VideoGameLogoutID = 1047,
        VideoGameLogoutRetID = 1048,
        ActivityEnroll = 1049,
        ActivityEnrollRet = 1050,
        ActivityGetReward = 1051,
        ActivityGetRewardRet = 1052,
        ActivityGetInfo = 1053,
        ActivityGetInfoRet = 1054,
        ActivitGetRechargeInfo = 1055,
        ActivitGetRechargeInfoRet = 1056,
        ActivitGetRechargeReward = 1057,
        ActivitGetRechargeRewardRet = 1058,
        ActivitGetAdvanceInfo = 1059,
        ActivitGetAdvanceInfoRet = 1060,
        ActivitGetAdvanceReward = 1061,
        ActivitGetAdvanceRewardRet = 1062,
        CPThirdApiReq = 1063,
        CPThirdApiRes = 1064,
        DailySignActionLoadReq = 1065,
        DailySignActionLoadRes = 1066,
        DailySignReceiveRewardReq = 1067,
        DailySignReceiveRewardRes = 1068,
        DailySignLotteryReq = 1069,
        DailySignLotteryRes = 1070,
        ReliefConfigReq = 1071,
        ReliefConfigRet = 1072,
        ReliefCollectReq = 1073,
        ReliefCollectRet = 1074,
        ReceiveMailAnnexReq = 1075,
        ReceiveMailAnnexRet = 1076,
        ClearReadMailReq = 1077,
        GetRoomTableListReq = 1078,
        GetRoomTableListRet = 1079,
        GameListNtf = 1080,
        GameServerUrlReq = 1081,
        GameServerUrlRes = 1082,
        UserLanguageUpdate = 1083,
        RegisterLogin = 1084,
        ThirdPartyLogin = 1085,
        AttrFocusSuccessID = 1086
    }

    /** Properties of a LoginBase. */
    interface ILoginBase {

        /** LoginBase HDCode */
        HDCode: string;

        /** LoginBase HDType */
        HDType: number;

        /** LoginBase SiteID */
        SiteID: number;

        /** LoginBase Version */
        Version: string;

        /** LoginBase PlatformID */
        PlatformID: number;

        /** LoginBase BunldID */
        BunldID?: (string|null);

        /** LoginBase Ver */
        Ver?: (string|null);

        /** LoginBase Language */
        Language: string;
    }

    /** Represents a LoginBase. */
    class LoginBase implements ILoginBase {

        /**
         * Constructs a new LoginBase.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.ILoginBase);

        /** LoginBase HDCode. */
        public HDCode: string;

        /** LoginBase HDType. */
        public HDType: number;

        /** LoginBase SiteID. */
        public SiteID: number;

        /** LoginBase Version. */
        public Version: string;

        /** LoginBase PlatformID. */
        public PlatformID: number;

        /** LoginBase BunldID. */
        public BunldID: string;

        /** LoginBase Ver. */
        public Ver: string;

        /** LoginBase Language. */
        public Language: string;

        /**
         * Creates a new LoginBase instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginBase instance
         */
        public static create(properties?: netproto.ILoginBase): netproto.LoginBase;

        /**
         * Encodes the specified LoginBase message. Does not implicitly {@link netproto.LoginBase.verify|verify} messages.
         * @param message LoginBase message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ILoginBase, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginBase message, length delimited. Does not implicitly {@link netproto.LoginBase.verify|verify} messages.
         * @param message LoginBase message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ILoginBase, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginBase message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.LoginBase;

        /**
         * Decodes a LoginBase message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginBase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.LoginBase;

        /**
         * Verifies a LoginBase message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginBase message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginBase
         */
        public static fromObject(object: { [k: string]: any }): netproto.LoginBase;

        /**
         * Creates a plain object from a LoginBase message. Also converts values to other types if specified.
         * @param message LoginBase
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.LoginBase, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginBase to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GuestLogin. */
    interface IGuestLogin {

        /** GuestLogin Base */
        Base: netproto.ILoginBase;
    }

    /** Represents a GuestLogin. */
    class GuestLogin implements IGuestLogin {

        /**
         * Constructs a new GuestLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IGuestLogin);

        /** GuestLogin Base. */
        public Base: netproto.ILoginBase;

        /**
         * Creates a new GuestLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GuestLogin instance
         */
        public static create(properties?: netproto.IGuestLogin): netproto.GuestLogin;

        /**
         * Encodes the specified GuestLogin message. Does not implicitly {@link netproto.GuestLogin.verify|verify} messages.
         * @param message GuestLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGuestLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GuestLogin message, length delimited. Does not implicitly {@link netproto.GuestLogin.verify|verify} messages.
         * @param message GuestLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGuestLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuestLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GuestLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GuestLogin;

        /**
         * Decodes a GuestLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GuestLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GuestLogin;

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
        public static fromObject(object: { [k: string]: any }): netproto.GuestLogin;

        /**
         * Creates a plain object from a GuestLogin message. Also converts values to other types if specified.
         * @param message GuestLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GuestLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GuestLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserLogin. */
    interface IUserLogin {

        /** UserLogin Base */
        Base: netproto.ILoginBase;

        /** UserLogin LoginName */
        LoginName?: (string|null);

        /** UserLogin Password */
        Password?: (string|null);

        /** UserLogin UserID */
        UserID?: (number|null);

        /** UserLogin Cer */
        Cer?: (string|null);

        /** UserLogin VCode */
        VCode?: (string|null);
    }

    /** Represents a UserLogin. */
    class UserLogin implements IUserLogin {

        /**
         * Constructs a new UserLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IUserLogin);

        /** UserLogin Base. */
        public Base: netproto.ILoginBase;

        /** UserLogin LoginName. */
        public LoginName: string;

        /** UserLogin Password. */
        public Password: string;

        /** UserLogin UserID. */
        public UserID: number;

        /** UserLogin Cer. */
        public Cer: string;

        /** UserLogin VCode. */
        public VCode: string;

        /**
         * Creates a new UserLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserLogin instance
         */
        public static create(properties?: netproto.IUserLogin): netproto.UserLogin;

        /**
         * Encodes the specified UserLogin message. Does not implicitly {@link netproto.UserLogin.verify|verify} messages.
         * @param message UserLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IUserLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserLogin message, length delimited. Does not implicitly {@link netproto.UserLogin.verify|verify} messages.
         * @param message UserLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IUserLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.UserLogin;

        /**
         * Decodes a UserLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.UserLogin;

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
        public static fromObject(object: { [k: string]: any }): netproto.UserLogin;

        /**
         * Creates a plain object from a UserLogin message. Also converts values to other types if specified.
         * @param message UserLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.UserLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RegisterLogin. */
    interface IRegisterLogin {

        /** RegisterLogin Base */
        Base: netproto.ILoginBase;

        /** RegisterLogin LoginName */
        LoginName: string;

        /** RegisterLogin VCode */
        VCode: string;

        /** RegisterLogin Password */
        Password: string;
    }

    /** Represents a RegisterLogin. */
    class RegisterLogin implements IRegisterLogin {

        /**
         * Constructs a new RegisterLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IRegisterLogin);

        /** RegisterLogin Base. */
        public Base: netproto.ILoginBase;

        /** RegisterLogin LoginName. */
        public LoginName: string;

        /** RegisterLogin VCode. */
        public VCode: string;

        /** RegisterLogin Password. */
        public Password: string;

        /**
         * Creates a new RegisterLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RegisterLogin instance
         */
        public static create(properties?: netproto.IRegisterLogin): netproto.RegisterLogin;

        /**
         * Encodes the specified RegisterLogin message. Does not implicitly {@link netproto.RegisterLogin.verify|verify} messages.
         * @param message RegisterLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IRegisterLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RegisterLogin message, length delimited. Does not implicitly {@link netproto.RegisterLogin.verify|verify} messages.
         * @param message RegisterLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IRegisterLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RegisterLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RegisterLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.RegisterLogin;

        /**
         * Decodes a RegisterLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RegisterLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.RegisterLogin;

        /**
         * Verifies a RegisterLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RegisterLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RegisterLogin
         */
        public static fromObject(object: { [k: string]: any }): netproto.RegisterLogin;

        /**
         * Creates a plain object from a RegisterLogin message. Also converts values to other types if specified.
         * @param message RegisterLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.RegisterLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RegisterLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ThirdPartyLogin. */
    interface IThirdPartyLogin {

        /** ThirdPartyLogin Base */
        Base: netproto.ILoginBase;

        /** ThirdPartyLogin UnionID */
        UnionID?: (string|null);

        /** ThirdPartyLogin NickName */
        NickName?: (string|null);

        /** ThirdPartyLogin HeadID */
        HeadID?: (string|null);

        /** ThirdPartyLogin LoginType */
        LoginType?: (string|null);
    }

    /** Represents a ThirdPartyLogin. */
    class ThirdPartyLogin implements IThirdPartyLogin {

        /**
         * Constructs a new ThirdPartyLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IThirdPartyLogin);

        /** ThirdPartyLogin Base. */
        public Base: netproto.ILoginBase;

        /** ThirdPartyLogin UnionID. */
        public UnionID: string;

        /** ThirdPartyLogin NickName. */
        public NickName: string;

        /** ThirdPartyLogin HeadID. */
        public HeadID: string;

        /** ThirdPartyLogin LoginType. */
        public LoginType: string;

        /**
         * Creates a new ThirdPartyLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ThirdPartyLogin instance
         */
        public static create(properties?: netproto.IThirdPartyLogin): netproto.ThirdPartyLogin;

        /**
         * Encodes the specified ThirdPartyLogin message. Does not implicitly {@link netproto.ThirdPartyLogin.verify|verify} messages.
         * @param message ThirdPartyLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IThirdPartyLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ThirdPartyLogin message, length delimited. Does not implicitly {@link netproto.ThirdPartyLogin.verify|verify} messages.
         * @param message ThirdPartyLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IThirdPartyLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ThirdPartyLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ThirdPartyLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.ThirdPartyLogin;

        /**
         * Decodes a ThirdPartyLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ThirdPartyLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.ThirdPartyLogin;

        /**
         * Verifies a ThirdPartyLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ThirdPartyLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ThirdPartyLogin
         */
        public static fromObject(object: { [k: string]: any }): netproto.ThirdPartyLogin;

        /**
         * Creates a plain object from a ThirdPartyLogin message. Also converts values to other types if specified.
         * @param message ThirdPartyLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.ThirdPartyLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ThirdPartyLogin to JSON.
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
        UserData?: (netproto.IUserHallLogonData|null);

        /** UserLoginRet Language */
        Language?: (string|null);
    }

    /** Represents a UserLoginRet. */
    class UserLoginRet implements IUserLoginRet {

        /**
         * Constructs a new UserLoginRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IUserLoginRet);

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
        public UserData?: (netproto.IUserHallLogonData|null);

        /** UserLoginRet Language. */
        public Language: string;

        /**
         * Creates a new UserLoginRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserLoginRet instance
         */
        public static create(properties?: netproto.IUserLoginRet): netproto.UserLoginRet;

        /**
         * Encodes the specified UserLoginRet message. Does not implicitly {@link netproto.UserLoginRet.verify|verify} messages.
         * @param message UserLoginRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IUserLoginRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserLoginRet message, length delimited. Does not implicitly {@link netproto.UserLoginRet.verify|verify} messages.
         * @param message UserLoginRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IUserLoginRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserLoginRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserLoginRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.UserLoginRet;

        /**
         * Decodes a UserLoginRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserLoginRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.UserLoginRet;

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
        public static fromObject(object: { [k: string]: any }): netproto.UserLoginRet;

        /**
         * Creates a plain object from a UserLoginRet message. Also converts values to other types if specified.
         * @param message UserLoginRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.UserLoginRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        HeadID: string;

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
        GameList?: (netproto.IGameSortCateInfo[]|null);

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
        GameCategoryList?: (netproto.IGameCategoryInfo[]|null);

        /** UserHallLogonData LianyunID */
        LianyunID?: (number|null);

        /** UserHallLogonData VersionList */
        VersionList?: (netproto.ISkinVersionInfo[]|null);

        /** UserHallLogonData VipLv */
        VipLv?: (number|null);

        /** UserHallLogonData HeadFrameID */
        HeadFrameID?: (number|null);

        /** UserHallLogonData IsEditNickName */
        IsEditNickName?: (boolean|null);

        /** UserHallLogonData LockCpID */
        LockCpID?: (number|null);

        /** UserHallLogonData IsSelfGame */
        IsSelfGame?: (boolean|null);

        /** UserHallLogonData LockGameTip */
        LockGameTip?: (string|null);

        /** UserHallLogonData UserAreaID */
        UserAreaID?: (number|null);

        /** UserHallLogonData RegisterTime */
        RegisterTime?: (string|null);

        /** UserHallLogonData LastLogonTime */
        LastLogonTime?: (string|null);
    }

    /** Represents a UserHallLogonData. */
    class UserHallLogonData implements IUserHallLogonData {

        /**
         * Constructs a new UserHallLogonData.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IUserHallLogonData);

        /** UserHallLogonData LoginName. */
        public LoginName: string;

        /** UserHallLogonData NickName. */
        public NickName: string;

        /** UserHallLogonData UserType. */
        public UserType: number;

        /** UserHallLogonData Sex. */
        public Sex: number;

        /** UserHallLogonData HeadID. */
        public HeadID: string;

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
        public GameList: netproto.IGameSortCateInfo[];

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
        public GameCategoryList: netproto.IGameCategoryInfo[];

        /** UserHallLogonData LianyunID. */
        public LianyunID: number;

        /** UserHallLogonData VersionList. */
        public VersionList: netproto.ISkinVersionInfo[];

        /** UserHallLogonData VipLv. */
        public VipLv: number;

        /** UserHallLogonData HeadFrameID. */
        public HeadFrameID: number;

        /** UserHallLogonData IsEditNickName. */
        public IsEditNickName: boolean;

        /** UserHallLogonData LockCpID. */
        public LockCpID: number;

        /** UserHallLogonData IsSelfGame. */
        public IsSelfGame: boolean;

        /** UserHallLogonData LockGameTip. */
        public LockGameTip: string;

        /** UserHallLogonData UserAreaID. */
        public UserAreaID: number;

        /** UserHallLogonData RegisterTime. */
        public RegisterTime: string;

        /** UserHallLogonData LastLogonTime. */
        public LastLogonTime: string;

        /**
         * Creates a new UserHallLogonData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserHallLogonData instance
         */
        public static create(properties?: netproto.IUserHallLogonData): netproto.UserHallLogonData;

        /**
         * Encodes the specified UserHallLogonData message. Does not implicitly {@link netproto.UserHallLogonData.verify|verify} messages.
         * @param message UserHallLogonData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IUserHallLogonData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserHallLogonData message, length delimited. Does not implicitly {@link netproto.UserHallLogonData.verify|verify} messages.
         * @param message UserHallLogonData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IUserHallLogonData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserHallLogonData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserHallLogonData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.UserHallLogonData;

        /**
         * Decodes a UserHallLogonData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserHallLogonData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.UserHallLogonData;

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
        public static fromObject(object: { [k: string]: any }): netproto.UserHallLogonData;

        /**
         * Creates a plain object from a UserHallLogonData message. Also converts values to other types if specified.
         * @param message UserHallLogonData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.UserHallLogonData, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IGameSortCateInfo);

        /** GameSortCateInfo GameID. */
        public GameID: number;

        /** GameSortCateInfo CategoryID. */
        public CategoryID: string;

        /**
         * Creates a new GameSortCateInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameSortCateInfo instance
         */
        public static create(properties?: netproto.IGameSortCateInfo): netproto.GameSortCateInfo;

        /**
         * Encodes the specified GameSortCateInfo message. Does not implicitly {@link netproto.GameSortCateInfo.verify|verify} messages.
         * @param message GameSortCateInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGameSortCateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameSortCateInfo message, length delimited. Does not implicitly {@link netproto.GameSortCateInfo.verify|verify} messages.
         * @param message GameSortCateInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGameSortCateInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameSortCateInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameSortCateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GameSortCateInfo;

        /**
         * Decodes a GameSortCateInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameSortCateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GameSortCateInfo;

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
        public static fromObject(object: { [k: string]: any }): netproto.GameSortCateInfo;

        /**
         * Creates a plain object from a GameSortCateInfo message. Also converts values to other types if specified.
         * @param message GameSortCateInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GameSortCateInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IGameCategoryInfo);

        /** GameCategoryInfo CategoryID. */
        public CategoryID: number;

        /** GameCategoryInfo Name. */
        public Name: string;

        /**
         * Creates a new GameCategoryInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameCategoryInfo instance
         */
        public static create(properties?: netproto.IGameCategoryInfo): netproto.GameCategoryInfo;

        /**
         * Encodes the specified GameCategoryInfo message. Does not implicitly {@link netproto.GameCategoryInfo.verify|verify} messages.
         * @param message GameCategoryInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGameCategoryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameCategoryInfo message, length delimited. Does not implicitly {@link netproto.GameCategoryInfo.verify|verify} messages.
         * @param message GameCategoryInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGameCategoryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameCategoryInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameCategoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GameCategoryInfo;

        /**
         * Decodes a GameCategoryInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameCategoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GameCategoryInfo;

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
        public static fromObject(object: { [k: string]: any }): netproto.GameCategoryInfo;

        /**
         * Creates a plain object from a GameCategoryInfo message. Also converts values to other types if specified.
         * @param message GameCategoryInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GameCategoryInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.ISkinVersionInfo);

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
        public static create(properties?: netproto.ISkinVersionInfo): netproto.SkinVersionInfo;

        /**
         * Encodes the specified SkinVersionInfo message. Does not implicitly {@link netproto.SkinVersionInfo.verify|verify} messages.
         * @param message SkinVersionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ISkinVersionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SkinVersionInfo message, length delimited. Does not implicitly {@link netproto.SkinVersionInfo.verify|verify} messages.
         * @param message SkinVersionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ISkinVersionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SkinVersionInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SkinVersionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.SkinVersionInfo;

        /**
         * Decodes a SkinVersionInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SkinVersionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.SkinVersionInfo;

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
        public static fromObject(object: { [k: string]: any }): netproto.SkinVersionInfo;

        /**
         * Creates a plain object from a SkinVersionInfo message. Also converts values to other types if specified.
         * @param message SkinVersionInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.SkinVersionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IUserLogout);

        /** UserLogout UserID. */
        public UserID: number;

        /** UserLogout Cer. */
        public Cer: string;

        /**
         * Creates a new UserLogout instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserLogout instance
         */
        public static create(properties?: netproto.IUserLogout): netproto.UserLogout;

        /**
         * Encodes the specified UserLogout message. Does not implicitly {@link netproto.UserLogout.verify|verify} messages.
         * @param message UserLogout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IUserLogout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserLogout message, length delimited. Does not implicitly {@link netproto.UserLogout.verify|verify} messages.
         * @param message UserLogout message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IUserLogout, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserLogout message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.UserLogout;

        /**
         * Decodes a UserLogout message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.UserLogout;

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
        public static fromObject(object: { [k: string]: any }): netproto.UserLogout;

        /**
         * Creates a plain object from a UserLogout message. Also converts values to other types if specified.
         * @param message UserLogout
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.UserLogout, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IHallVerInfo);

        /** HallVerInfo AndroidVersion. */
        public AndroidVersion: string;

        /** HallVerInfo IOSVersion. */
        public IOSVersion: string;

        /**
         * Creates a new HallVerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HallVerInfo instance
         */
        public static create(properties?: netproto.IHallVerInfo): netproto.HallVerInfo;

        /**
         * Encodes the specified HallVerInfo message. Does not implicitly {@link netproto.HallVerInfo.verify|verify} messages.
         * @param message HallVerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IHallVerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HallVerInfo message, length delimited. Does not implicitly {@link netproto.HallVerInfo.verify|verify} messages.
         * @param message HallVerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IHallVerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HallVerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HallVerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.HallVerInfo;

        /**
         * Decodes a HallVerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HallVerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.HallVerInfo;

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
        public static fromObject(object: { [k: string]: any }): netproto.HallVerInfo;

        /**
         * Creates a plain object from a HallVerInfo message. Also converts values to other types if specified.
         * @param message HallVerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.HallVerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HallVerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AllGameServerInfo. */
    interface IAllGameServerInfo {

        /** AllGameServerInfo ServerList */
        ServerList?: (netproto.IGameServerInfo[]|null);
    }

    /** Represents an AllGameServerInfo. */
    class AllGameServerInfo implements IAllGameServerInfo {

        /**
         * Constructs a new AllGameServerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IAllGameServerInfo);

        /** AllGameServerInfo ServerList. */
        public ServerList: netproto.IGameServerInfo[];

        /**
         * Creates a new AllGameServerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AllGameServerInfo instance
         */
        public static create(properties?: netproto.IAllGameServerInfo): netproto.AllGameServerInfo;

        /**
         * Encodes the specified AllGameServerInfo message. Does not implicitly {@link netproto.AllGameServerInfo.verify|verify} messages.
         * @param message AllGameServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IAllGameServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AllGameServerInfo message, length delimited. Does not implicitly {@link netproto.AllGameServerInfo.verify|verify} messages.
         * @param message AllGameServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IAllGameServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllGameServerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AllGameServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.AllGameServerInfo;

        /**
         * Decodes an AllGameServerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AllGameServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.AllGameServerInfo;

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
        public static fromObject(object: { [k: string]: any }): netproto.AllGameServerInfo;

        /**
         * Creates a plain object from an AllGameServerInfo message. Also converts values to other types if specified.
         * @param message AllGameServerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.AllGameServerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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

        /** GameServerInfo LoginMoneyMax */
        LoginMoneyMax?: (number|null);
    }

    /** Represents a GameServerInfo. */
    class GameServerInfo implements IGameServerInfo {

        /**
         * Constructs a new GameServerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IGameServerInfo);

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

        /** GameServerInfo LoginMoneyMax. */
        public LoginMoneyMax: number;

        /**
         * Creates a new GameServerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameServerInfo instance
         */
        public static create(properties?: netproto.IGameServerInfo): netproto.GameServerInfo;

        /**
         * Encodes the specified GameServerInfo message. Does not implicitly {@link netproto.GameServerInfo.verify|verify} messages.
         * @param message GameServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGameServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameServerInfo message, length delimited. Does not implicitly {@link netproto.GameServerInfo.verify|verify} messages.
         * @param message GameServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGameServerInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameServerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GameServerInfo;

        /**
         * Decodes a GameServerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GameServerInfo;

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
        public static fromObject(object: { [k: string]: any }): netproto.GameServerInfo;

        /**
         * Creates a plain object from a GameServerInfo message. Also converts values to other types if specified.
         * @param message GameServerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GameServerInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameServerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestGameServerAddrInfo. */
    interface IRequestGameServerAddrInfo {

        /** RequestGameServerAddrInfo CpID */
        CpID?: (number|null);

        /** RequestGameServerAddrInfo GameID */
        GameID: number;

        /** RequestGameServerAddrInfo ServerFlag */
        ServerFlag: string;

        /** RequestGameServerAddrInfo GameCode */
        GameCode?: (string|null);

        /** RequestGameServerAddrInfo IsLianyun */
        IsLianyun?: (boolean|null);

        /** RequestGameServerAddrInfo LianyunID */
        LianyunID?: (number|null);

        /** RequestGameServerAddrInfo ServerID */
        ServerID?: (number|null);
    }

    /** Represents a RequestGameServerAddrInfo. */
    class RequestGameServerAddrInfo implements IRequestGameServerAddrInfo {

        /**
         * Constructs a new RequestGameServerAddrInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IRequestGameServerAddrInfo);

        /** RequestGameServerAddrInfo CpID. */
        public CpID: number;

        /** RequestGameServerAddrInfo GameID. */
        public GameID: number;

        /** RequestGameServerAddrInfo ServerFlag. */
        public ServerFlag: string;

        /** RequestGameServerAddrInfo GameCode. */
        public GameCode: string;

        /** RequestGameServerAddrInfo IsLianyun. */
        public IsLianyun: boolean;

        /** RequestGameServerAddrInfo LianyunID. */
        public LianyunID: number;

        /** RequestGameServerAddrInfo ServerID. */
        public ServerID: number;

        /**
         * Creates a new RequestGameServerAddrInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestGameServerAddrInfo instance
         */
        public static create(properties?: netproto.IRequestGameServerAddrInfo): netproto.RequestGameServerAddrInfo;

        /**
         * Encodes the specified RequestGameServerAddrInfo message. Does not implicitly {@link netproto.RequestGameServerAddrInfo.verify|verify} messages.
         * @param message RequestGameServerAddrInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IRequestGameServerAddrInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestGameServerAddrInfo message, length delimited. Does not implicitly {@link netproto.RequestGameServerAddrInfo.verify|verify} messages.
         * @param message RequestGameServerAddrInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IRequestGameServerAddrInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestGameServerAddrInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestGameServerAddrInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.RequestGameServerAddrInfo;

        /**
         * Decodes a RequestGameServerAddrInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestGameServerAddrInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.RequestGameServerAddrInfo;

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
        public static fromObject(object: { [k: string]: any }): netproto.RequestGameServerAddrInfo;

        /**
         * Creates a plain object from a RequestGameServerAddrInfo message. Also converts values to other types if specified.
         * @param message RequestGameServerAddrInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.RequestGameServerAddrInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IGameServerAddr);

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
        public static create(properties?: netproto.IGameServerAddr): netproto.GameServerAddr;

        /**
         * Encodes the specified GameServerAddr message. Does not implicitly {@link netproto.GameServerAddr.verify|verify} messages.
         * @param message GameServerAddr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGameServerAddr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameServerAddr message, length delimited. Does not implicitly {@link netproto.GameServerAddr.verify|verify} messages.
         * @param message GameServerAddr message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGameServerAddr, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameServerAddr message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameServerAddr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GameServerAddr;

        /**
         * Decodes a GameServerAddr message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameServerAddr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GameServerAddr;

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
        public static fromObject(object: { [k: string]: any }): netproto.GameServerAddr;

        /**
         * Creates a plain object from a GameServerAddr message. Also converts values to other types if specified.
         * @param message GameServerAddr
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GameServerAddr, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameServerAddr to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameServerUrlRes. */
    interface IGameServerUrlRes {

        /** GameServerUrlRes Code */
        Code: number;

        /** GameServerUrlRes Message */
        Message?: (string|null);

        /** GameServerUrlRes GameServerUrl */
        GameServerUrl: string;

        /** GameServerUrlRes WebViewUrl */
        WebViewUrl: string;

        /** GameServerUrlRes NotifyGameUrl */
        NotifyGameUrl: string;
    }

    /** Represents a GameServerUrlRes. */
    class GameServerUrlRes implements IGameServerUrlRes {

        /**
         * Constructs a new GameServerUrlRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IGameServerUrlRes);

        /** GameServerUrlRes Code. */
        public Code: number;

        /** GameServerUrlRes Message. */
        public Message: string;

        /** GameServerUrlRes GameServerUrl. */
        public GameServerUrl: string;

        /** GameServerUrlRes WebViewUrl. */
        public WebViewUrl: string;

        /** GameServerUrlRes NotifyGameUrl. */
        public NotifyGameUrl: string;

        /**
         * Creates a new GameServerUrlRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameServerUrlRes instance
         */
        public static create(properties?: netproto.IGameServerUrlRes): netproto.GameServerUrlRes;

        /**
         * Encodes the specified GameServerUrlRes message. Does not implicitly {@link netproto.GameServerUrlRes.verify|verify} messages.
         * @param message GameServerUrlRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGameServerUrlRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameServerUrlRes message, length delimited. Does not implicitly {@link netproto.GameServerUrlRes.verify|verify} messages.
         * @param message GameServerUrlRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGameServerUrlRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameServerUrlRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameServerUrlRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GameServerUrlRes;

        /**
         * Decodes a GameServerUrlRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameServerUrlRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GameServerUrlRes;

        /**
         * Verifies a GameServerUrlRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameServerUrlRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameServerUrlRes
         */
        public static fromObject(object: { [k: string]: any }): netproto.GameServerUrlRes;

        /**
         * Creates a plain object from a GameServerUrlRes message. Also converts values to other types if specified.
         * @param message GameServerUrlRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GameServerUrlRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameServerUrlRes to JSON.
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
        constructor(properties?: netproto.IZhifubaoInfo);

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
        public static create(properties?: netproto.IZhifubaoInfo): netproto.ZhifubaoInfo;

        /**
         * Encodes the specified ZhifubaoInfo message. Does not implicitly {@link netproto.ZhifubaoInfo.verify|verify} messages.
         * @param message ZhifubaoInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IZhifubaoInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ZhifubaoInfo message, length delimited. Does not implicitly {@link netproto.ZhifubaoInfo.verify|verify} messages.
         * @param message ZhifubaoInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IZhifubaoInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ZhifubaoInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ZhifubaoInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.ZhifubaoInfo;

        /**
         * Decodes a ZhifubaoInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ZhifubaoInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.ZhifubaoInfo;

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
        public static fromObject(object: { [k: string]: any }): netproto.ZhifubaoInfo;

        /**
         * Creates a plain object from a ZhifubaoInfo message. Also converts values to other types if specified.
         * @param message ZhifubaoInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.ZhifubaoInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IModifyPassword);

        /** ModifyPassword OldPwd. */
        public OldPwd: string;

        /** ModifyPassword NewPassword. */
        public NewPassword: string;

        /**
         * Creates a new ModifyPassword instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ModifyPassword instance
         */
        public static create(properties?: netproto.IModifyPassword): netproto.ModifyPassword;

        /**
         * Encodes the specified ModifyPassword message. Does not implicitly {@link netproto.ModifyPassword.verify|verify} messages.
         * @param message ModifyPassword message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IModifyPassword, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ModifyPassword message, length delimited. Does not implicitly {@link netproto.ModifyPassword.verify|verify} messages.
         * @param message ModifyPassword message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IModifyPassword, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ModifyPassword message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifyPassword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.ModifyPassword;

        /**
         * Decodes a ModifyPassword message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifyPassword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.ModifyPassword;

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
        public static fromObject(object: { [k: string]: any }): netproto.ModifyPassword;

        /**
         * Creates a plain object from a ModifyPassword message. Also converts values to other types if specified.
         * @param message ModifyPassword
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.ModifyPassword, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.ISendPhoneVCode);

        /** SendPhoneVCode Tel. */
        public Tel: string;

        /** SendPhoneVCode CodeType. */
        public CodeType: number;

        /**
         * Creates a new SendPhoneVCode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendPhoneVCode instance
         */
        public static create(properties?: netproto.ISendPhoneVCode): netproto.SendPhoneVCode;

        /**
         * Encodes the specified SendPhoneVCode message. Does not implicitly {@link netproto.SendPhoneVCode.verify|verify} messages.
         * @param message SendPhoneVCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ISendPhoneVCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendPhoneVCode message, length delimited. Does not implicitly {@link netproto.SendPhoneVCode.verify|verify} messages.
         * @param message SendPhoneVCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ISendPhoneVCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendPhoneVCode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendPhoneVCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.SendPhoneVCode;

        /**
         * Decodes a SendPhoneVCode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendPhoneVCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.SendPhoneVCode;

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
        public static fromObject(object: { [k: string]: any }): netproto.SendPhoneVCode;

        /**
         * Creates a plain object from a SendPhoneVCode message. Also converts values to other types if specified.
         * @param message SendPhoneVCode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.SendPhoneVCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.ISendPhoneVCodeRet);

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
        public static create(properties?: netproto.ISendPhoneVCodeRet): netproto.SendPhoneVCodeRet;

        /**
         * Encodes the specified SendPhoneVCodeRet message. Does not implicitly {@link netproto.SendPhoneVCodeRet.verify|verify} messages.
         * @param message SendPhoneVCodeRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ISendPhoneVCodeRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendPhoneVCodeRet message, length delimited. Does not implicitly {@link netproto.SendPhoneVCodeRet.verify|verify} messages.
         * @param message SendPhoneVCodeRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ISendPhoneVCodeRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendPhoneVCodeRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendPhoneVCodeRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.SendPhoneVCodeRet;

        /**
         * Decodes a SendPhoneVCodeRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendPhoneVCodeRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.SendPhoneVCodeRet;

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
        public static fromObject(object: { [k: string]: any }): netproto.SendPhoneVCodeRet;

        /**
         * Creates a plain object from a SendPhoneVCodeRet message. Also converts values to other types if specified.
         * @param message SendPhoneVCodeRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.SendPhoneVCodeRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendPhoneVCodeRet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ModifyFace. */
    interface IModifyFace {

        /** ModifyFace HeadID */
        HeadID?: (string|null);

        /** ModifyFace FaceFrameID */
        FaceFrameID?: (number|null);

        /** ModifyFace NickName */
        NickName?: (string|null);
    }

    /** Represents a ModifyFace. */
    class ModifyFace implements IModifyFace {

        /**
         * Constructs a new ModifyFace.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IModifyFace);

        /** ModifyFace HeadID. */
        public HeadID: string;

        /** ModifyFace FaceFrameID. */
        public FaceFrameID: number;

        /** ModifyFace NickName. */
        public NickName: string;

        /**
         * Creates a new ModifyFace instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ModifyFace instance
         */
        public static create(properties?: netproto.IModifyFace): netproto.ModifyFace;

        /**
         * Encodes the specified ModifyFace message. Does not implicitly {@link netproto.ModifyFace.verify|verify} messages.
         * @param message ModifyFace message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IModifyFace, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ModifyFace message, length delimited. Does not implicitly {@link netproto.ModifyFace.verify|verify} messages.
         * @param message ModifyFace message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IModifyFace, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ModifyFace message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifyFace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.ModifyFace;

        /**
         * Decodes a ModifyFace message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifyFace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.ModifyFace;

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
        public static fromObject(object: { [k: string]: any }): netproto.ModifyFace;

        /**
         * Creates a plain object from a ModifyFace message. Also converts values to other types if specified.
         * @param message ModifyFace
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.ModifyFace, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IMoneyDeposit);

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
        public static create(properties?: netproto.IMoneyDeposit): netproto.MoneyDeposit;

        /**
         * Encodes the specified MoneyDeposit message. Does not implicitly {@link netproto.MoneyDeposit.verify|verify} messages.
         * @param message MoneyDeposit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IMoneyDeposit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MoneyDeposit message, length delimited. Does not implicitly {@link netproto.MoneyDeposit.verify|verify} messages.
         * @param message MoneyDeposit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IMoneyDeposit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MoneyDeposit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MoneyDeposit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.MoneyDeposit;

        /**
         * Decodes a MoneyDeposit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MoneyDeposit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.MoneyDeposit;

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
        public static fromObject(object: { [k: string]: any }): netproto.MoneyDeposit;

        /**
         * Creates a plain object from a MoneyDeposit message. Also converts values to other types if specified.
         * @param message MoneyDeposit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.MoneyDeposit, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IMoneyDepositRet);

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
        public static create(properties?: netproto.IMoneyDepositRet): netproto.MoneyDepositRet;

        /**
         * Encodes the specified MoneyDepositRet message. Does not implicitly {@link netproto.MoneyDepositRet.verify|verify} messages.
         * @param message MoneyDepositRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IMoneyDepositRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MoneyDepositRet message, length delimited. Does not implicitly {@link netproto.MoneyDepositRet.verify|verify} messages.
         * @param message MoneyDepositRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IMoneyDepositRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MoneyDepositRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MoneyDepositRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.MoneyDepositRet;

        /**
         * Decodes a MoneyDepositRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MoneyDepositRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.MoneyDepositRet;

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
        public static fromObject(object: { [k: string]: any }): netproto.MoneyDepositRet;

        /**
         * Creates a plain object from a MoneyDepositRet message. Also converts values to other types if specified.
         * @param message MoneyDepositRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.MoneyDepositRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IBindGuestAccount);

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
        public static create(properties?: netproto.IBindGuestAccount): netproto.BindGuestAccount;

        /**
         * Encodes the specified BindGuestAccount message. Does not implicitly {@link netproto.BindGuestAccount.verify|verify} messages.
         * @param message BindGuestAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IBindGuestAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BindGuestAccount message, length delimited. Does not implicitly {@link netproto.BindGuestAccount.verify|verify} messages.
         * @param message BindGuestAccount message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IBindGuestAccount, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BindGuestAccount message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BindGuestAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.BindGuestAccount;

        /**
         * Decodes a BindGuestAccount message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BindGuestAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.BindGuestAccount;

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
        public static fromObject(object: { [k: string]: any }): netproto.BindGuestAccount;

        /**
         * Creates a plain object from a BindGuestAccount message. Also converts values to other types if specified.
         * @param message BindGuestAccount
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.BindGuestAccount, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IRequestUserHallInfo);

        /** RequestUserHallInfo SiteID. */
        public SiteID: number;

        /**
         * Creates a new RequestUserHallInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestUserHallInfo instance
         */
        public static create(properties?: netproto.IRequestUserHallInfo): netproto.RequestUserHallInfo;

        /**
         * Encodes the specified RequestUserHallInfo message. Does not implicitly {@link netproto.RequestUserHallInfo.verify|verify} messages.
         * @param message RequestUserHallInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IRequestUserHallInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestUserHallInfo message, length delimited. Does not implicitly {@link netproto.RequestUserHallInfo.verify|verify} messages.
         * @param message RequestUserHallInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IRequestUserHallInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestUserHallInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestUserHallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.RequestUserHallInfo;

        /**
         * Decodes a RequestUserHallInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestUserHallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.RequestUserHallInfo;

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
        public static fromObject(object: { [k: string]: any }): netproto.RequestUserHallInfo;

        /**
         * Creates a plain object from a RequestUserHallInfo message. Also converts values to other types if specified.
         * @param message RequestUserHallInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.RequestUserHallInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IFindSetPwdByPhone);

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
        public static create(properties?: netproto.IFindSetPwdByPhone): netproto.FindSetPwdByPhone;

        /**
         * Encodes the specified FindSetPwdByPhone message. Does not implicitly {@link netproto.FindSetPwdByPhone.verify|verify} messages.
         * @param message FindSetPwdByPhone message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IFindSetPwdByPhone, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FindSetPwdByPhone message, length delimited. Does not implicitly {@link netproto.FindSetPwdByPhone.verify|verify} messages.
         * @param message FindSetPwdByPhone message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IFindSetPwdByPhone, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FindSetPwdByPhone message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FindSetPwdByPhone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.FindSetPwdByPhone;

        /**
         * Decodes a FindSetPwdByPhone message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FindSetPwdByPhone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.FindSetPwdByPhone;

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
        public static fromObject(object: { [k: string]: any }): netproto.FindSetPwdByPhone;

        /**
         * Creates a plain object from a FindSetPwdByPhone message. Also converts values to other types if specified.
         * @param message FindSetPwdByPhone
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.FindSetPwdByPhone, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IModifyBankPassword);

        /** ModifyBankPassword OldPwd. */
        public OldPwd: string;

        /** ModifyBankPassword NewPassword. */
        public NewPassword: string;

        /**
         * Creates a new ModifyBankPassword instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ModifyBankPassword instance
         */
        public static create(properties?: netproto.IModifyBankPassword): netproto.ModifyBankPassword;

        /**
         * Encodes the specified ModifyBankPassword message. Does not implicitly {@link netproto.ModifyBankPassword.verify|verify} messages.
         * @param message ModifyBankPassword message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IModifyBankPassword, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ModifyBankPassword message, length delimited. Does not implicitly {@link netproto.ModifyBankPassword.verify|verify} messages.
         * @param message ModifyBankPassword message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IModifyBankPassword, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ModifyBankPassword message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ModifyBankPassword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.ModifyBankPassword;

        /**
         * Decodes a ModifyBankPassword message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ModifyBankPassword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.ModifyBankPassword;

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
        public static fromObject(object: { [k: string]: any }): netproto.ModifyBankPassword;

        /**
         * Creates a plain object from a ModifyBankPassword message. Also converts values to other types if specified.
         * @param message ModifyBankPassword
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.ModifyBankPassword, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IFindSetBankPwdByPhone);

        /** FindSetBankPwdByPhone VCode. */
        public VCode: string;

        /** FindSetBankPwdByPhone Password. */
        public Password: string;

        /**
         * Creates a new FindSetBankPwdByPhone instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FindSetBankPwdByPhone instance
         */
        public static create(properties?: netproto.IFindSetBankPwdByPhone): netproto.FindSetBankPwdByPhone;

        /**
         * Encodes the specified FindSetBankPwdByPhone message. Does not implicitly {@link netproto.FindSetBankPwdByPhone.verify|verify} messages.
         * @param message FindSetBankPwdByPhone message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IFindSetBankPwdByPhone, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FindSetBankPwdByPhone message, length delimited. Does not implicitly {@link netproto.FindSetBankPwdByPhone.verify|verify} messages.
         * @param message FindSetBankPwdByPhone message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IFindSetBankPwdByPhone, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FindSetBankPwdByPhone message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FindSetBankPwdByPhone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.FindSetBankPwdByPhone;

        /**
         * Decodes a FindSetBankPwdByPhone message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FindSetBankPwdByPhone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.FindSetBankPwdByPhone;

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
        public static fromObject(object: { [k: string]: any }): netproto.FindSetBankPwdByPhone;

        /**
         * Creates a plain object from a FindSetBankPwdByPhone message. Also converts values to other types if specified.
         * @param message FindSetBankPwdByPhone
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.FindSetBankPwdByPhone, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        MailAnnexList?: (netproto.IMailAnnex[]|null);

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
        constructor(properties?: netproto.IMailDetail);

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
        public MailAnnexList: netproto.IMailAnnex[];

        /** MailDetail IsReceive. */
        public IsReceive: boolean;

        /** MailDetail SendTimeStamp. */
        public SendTimeStamp: number;

        /**
         * Creates a new MailDetail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailDetail instance
         */
        public static create(properties?: netproto.IMailDetail): netproto.MailDetail;

        /**
         * Encodes the specified MailDetail message. Does not implicitly {@link netproto.MailDetail.verify|verify} messages.
         * @param message MailDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IMailDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MailDetail message, length delimited. Does not implicitly {@link netproto.MailDetail.verify|verify} messages.
         * @param message MailDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IMailDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MailDetail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.MailDetail;

        /**
         * Decodes a MailDetail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.MailDetail;

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
        public static fromObject(object: { [k: string]: any }): netproto.MailDetail;

        /**
         * Creates a plain object from a MailDetail message. Also converts values to other types if specified.
         * @param message MailDetail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.MailDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MailDetail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MailList. */
    interface IMailList {

        /** MailList MailList */
        MailList?: (netproto.IMailDetail[]|null);
    }

    /** Represents a MailList. */
    class MailList implements IMailList {

        /**
         * Constructs a new MailList.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IMailList);

        /** MailList MailList. */
        public MailList: netproto.IMailDetail[];

        /**
         * Creates a new MailList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailList instance
         */
        public static create(properties?: netproto.IMailList): netproto.MailList;

        /**
         * Encodes the specified MailList message. Does not implicitly {@link netproto.MailList.verify|verify} messages.
         * @param message MailList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IMailList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MailList message, length delimited. Does not implicitly {@link netproto.MailList.verify|verify} messages.
         * @param message MailList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IMailList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MailList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.MailList;

        /**
         * Decodes a MailList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.MailList;

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
        public static fromObject(object: { [k: string]: any }): netproto.MailList;

        /**
         * Creates a plain object from a MailList message. Also converts values to other types if specified.
         * @param message MailList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.MailList, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IRequestMailDetail);

        /** RequestMailDetail ID. */
        public ID: number;

        /**
         * Creates a new RequestMailDetail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestMailDetail instance
         */
        public static create(properties?: netproto.IRequestMailDetail): netproto.RequestMailDetail;

        /**
         * Encodes the specified RequestMailDetail message. Does not implicitly {@link netproto.RequestMailDetail.verify|verify} messages.
         * @param message RequestMailDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IRequestMailDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestMailDetail message, length delimited. Does not implicitly {@link netproto.RequestMailDetail.verify|verify} messages.
         * @param message RequestMailDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IRequestMailDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestMailDetail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestMailDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.RequestMailDetail;

        /**
         * Decodes a RequestMailDetail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestMailDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.RequestMailDetail;

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
        public static fromObject(object: { [k: string]: any }): netproto.RequestMailDetail;

        /**
         * Creates a plain object from a RequestMailDetail message. Also converts values to other types if specified.
         * @param message RequestMailDetail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.RequestMailDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IContactService);

        /** ContactService Msg. */
        public Msg: string;

        /**
         * Creates a new ContactService instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContactService instance
         */
        public static create(properties?: netproto.IContactService): netproto.ContactService;

        /**
         * Encodes the specified ContactService message. Does not implicitly {@link netproto.ContactService.verify|verify} messages.
         * @param message ContactService message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IContactService, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContactService message, length delimited. Does not implicitly {@link netproto.ContactService.verify|verify} messages.
         * @param message ContactService message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IContactService, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContactService message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContactService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.ContactService;

        /**
         * Decodes a ContactService message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContactService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.ContactService;

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
        public static fromObject(object: { [k: string]: any }): netproto.ContactService;

        /**
         * Creates a plain object from a ContactService message. Also converts values to other types if specified.
         * @param message ContactService
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.ContactService, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IAgentDeatil);

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
        public static create(properties?: netproto.IAgentDeatil): netproto.AgentDeatil;

        /**
         * Encodes the specified AgentDeatil message. Does not implicitly {@link netproto.AgentDeatil.verify|verify} messages.
         * @param message AgentDeatil message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IAgentDeatil, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AgentDeatil message, length delimited. Does not implicitly {@link netproto.AgentDeatil.verify|verify} messages.
         * @param message AgentDeatil message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IAgentDeatil, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AgentDeatil message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AgentDeatil
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.AgentDeatil;

        /**
         * Decodes an AgentDeatil message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AgentDeatil
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.AgentDeatil;

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
        public static fromObject(object: { [k: string]: any }): netproto.AgentDeatil;

        /**
         * Creates a plain object from an AgentDeatil message. Also converts values to other types if specified.
         * @param message AgentDeatil
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.AgentDeatil, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AgentDeatil to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AgentList. */
    interface IAgentList {

        /** AgentList AgentList */
        AgentList?: (netproto.IAgentDeatil[]|null);
    }

    /** Represents an AgentList. */
    class AgentList implements IAgentList {

        /**
         * Constructs a new AgentList.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IAgentList);

        /** AgentList AgentList. */
        public AgentList: netproto.IAgentDeatil[];

        /**
         * Creates a new AgentList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AgentList instance
         */
        public static create(properties?: netproto.IAgentList): netproto.AgentList;

        /**
         * Encodes the specified AgentList message. Does not implicitly {@link netproto.AgentList.verify|verify} messages.
         * @param message AgentList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IAgentList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AgentList message, length delimited. Does not implicitly {@link netproto.AgentList.verify|verify} messages.
         * @param message AgentList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IAgentList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AgentList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AgentList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.AgentList;

        /**
         * Decodes an AgentList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AgentList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.AgentList;

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
        public static fromObject(object: { [k: string]: any }): netproto.AgentList;

        /**
         * Creates a plain object from an AgentList message. Also converts values to other types if specified.
         * @param message AgentList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.AgentList, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IReportAgent);

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
        public static create(properties?: netproto.IReportAgent): netproto.ReportAgent;

        /**
         * Encodes the specified ReportAgent message. Does not implicitly {@link netproto.ReportAgent.verify|verify} messages.
         * @param message ReportAgent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IReportAgent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReportAgent message, length delimited. Does not implicitly {@link netproto.ReportAgent.verify|verify} messages.
         * @param message ReportAgent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IReportAgent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReportAgent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReportAgent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.ReportAgent;

        /**
         * Decodes a ReportAgent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReportAgent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.ReportAgent;

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
        public static fromObject(object: { [k: string]: any }): netproto.ReportAgent;

        /**
         * Creates a plain object from a ReportAgent message. Also converts values to other types if specified.
         * @param message ReportAgent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.ReportAgent, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IRequestAgentList);

        /** RequestAgentList AreaID. */
        public AreaID: number;

        /**
         * Creates a new RequestAgentList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestAgentList instance
         */
        public static create(properties?: netproto.IRequestAgentList): netproto.RequestAgentList;

        /**
         * Encodes the specified RequestAgentList message. Does not implicitly {@link netproto.RequestAgentList.verify|verify} messages.
         * @param message RequestAgentList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IRequestAgentList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestAgentList message, length delimited. Does not implicitly {@link netproto.RequestAgentList.verify|verify} messages.
         * @param message RequestAgentList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IRequestAgentList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestAgentList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestAgentList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.RequestAgentList;

        /**
         * Decodes a RequestAgentList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestAgentList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.RequestAgentList;

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
        public static fromObject(object: { [k: string]: any }): netproto.RequestAgentList;

        /**
         * Creates a plain object from a RequestAgentList message. Also converts values to other types if specified.
         * @param message RequestAgentList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.RequestAgentList, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IApplyAgent);

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
        public static create(properties?: netproto.IApplyAgent): netproto.ApplyAgent;

        /**
         * Encodes the specified ApplyAgent message. Does not implicitly {@link netproto.ApplyAgent.verify|verify} messages.
         * @param message ApplyAgent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IApplyAgent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ApplyAgent message, length delimited. Does not implicitly {@link netproto.ApplyAgent.verify|verify} messages.
         * @param message ApplyAgent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IApplyAgent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ApplyAgent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ApplyAgent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.ApplyAgent;

        /**
         * Decodes an ApplyAgent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ApplyAgent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.ApplyAgent;

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
        public static fromObject(object: { [k: string]: any }): netproto.ApplyAgent;

        /**
         * Creates a plain object from an ApplyAgent message. Also converts values to other types if specified.
         * @param message ApplyAgent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.ApplyAgent, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IConvertMoney);

        /** ConvertMoney Amount. */
        public Amount: (number|Long);

        /** ConvertMoney cvttype. */
        public cvttype: number;

        /**
         * Creates a new ConvertMoney instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConvertMoney instance
         */
        public static create(properties?: netproto.IConvertMoney): netproto.ConvertMoney;

        /**
         * Encodes the specified ConvertMoney message. Does not implicitly {@link netproto.ConvertMoney.verify|verify} messages.
         * @param message ConvertMoney message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IConvertMoney, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConvertMoney message, length delimited. Does not implicitly {@link netproto.ConvertMoney.verify|verify} messages.
         * @param message ConvertMoney message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IConvertMoney, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConvertMoney message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConvertMoney
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.ConvertMoney;

        /**
         * Decodes a ConvertMoney message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConvertMoney
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.ConvertMoney;

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
        public static fromObject(object: { [k: string]: any }): netproto.ConvertMoney;

        /**
         * Creates a plain object from a ConvertMoney message. Also converts values to other types if specified.
         * @param message ConvertMoney
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.ConvertMoney, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.ICreatePayOrder);

        /** CreatePayOrder PayTypeID. */
        public PayTypeID: number;

        /** CreatePayOrder Amount. */
        public Amount: (number|Long);

        /**
         * Creates a new CreatePayOrder instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreatePayOrder instance
         */
        public static create(properties?: netproto.ICreatePayOrder): netproto.CreatePayOrder;

        /**
         * Encodes the specified CreatePayOrder message. Does not implicitly {@link netproto.CreatePayOrder.verify|verify} messages.
         * @param message CreatePayOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ICreatePayOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreatePayOrder message, length delimited. Does not implicitly {@link netproto.CreatePayOrder.verify|verify} messages.
         * @param message CreatePayOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ICreatePayOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreatePayOrder message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreatePayOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.CreatePayOrder;

        /**
         * Decodes a CreatePayOrder message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreatePayOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.CreatePayOrder;

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
        public static fromObject(object: { [k: string]: any }): netproto.CreatePayOrder;

        /**
         * Creates a plain object from a CreatePayOrder message. Also converts values to other types if specified.
         * @param message CreatePayOrder
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.CreatePayOrder, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.ICreatePayOrderRet);

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
        public static create(properties?: netproto.ICreatePayOrderRet): netproto.CreatePayOrderRet;

        /**
         * Encodes the specified CreatePayOrderRet message. Does not implicitly {@link netproto.CreatePayOrderRet.verify|verify} messages.
         * @param message CreatePayOrderRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ICreatePayOrderRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreatePayOrderRet message, length delimited. Does not implicitly {@link netproto.CreatePayOrderRet.verify|verify} messages.
         * @param message CreatePayOrderRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ICreatePayOrderRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreatePayOrderRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreatePayOrderRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.CreatePayOrderRet;

        /**
         * Decodes a CreatePayOrderRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreatePayOrderRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.CreatePayOrderRet;

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
        public static fromObject(object: { [k: string]: any }): netproto.CreatePayOrderRet;

        /**
         * Creates a plain object from a CreatePayOrderRet message. Also converts values to other types if specified.
         * @param message CreatePayOrderRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.CreatePayOrderRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IGetFAQ);

        /** GetFAQ PlatformID. */
        public PlatformID: number;

        /**
         * Creates a new GetFAQ instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetFAQ instance
         */
        public static create(properties?: netproto.IGetFAQ): netproto.GetFAQ;

        /**
         * Encodes the specified GetFAQ message. Does not implicitly {@link netproto.GetFAQ.verify|verify} messages.
         * @param message GetFAQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGetFAQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetFAQ message, length delimited. Does not implicitly {@link netproto.GetFAQ.verify|verify} messages.
         * @param message GetFAQ message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGetFAQ, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetFAQ message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetFAQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GetFAQ;

        /**
         * Decodes a GetFAQ message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetFAQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GetFAQ;

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
        public static fromObject(object: { [k: string]: any }): netproto.GetFAQ;

        /**
         * Creates a plain object from a GetFAQ message. Also converts values to other types if specified.
         * @param message GetFAQ
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GetFAQ, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IFAQDetail);

        /** FAQDetail Content. */
        public Content: string;

        /**
         * Creates a new FAQDetail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FAQDetail instance
         */
        public static create(properties?: netproto.IFAQDetail): netproto.FAQDetail;

        /**
         * Encodes the specified FAQDetail message. Does not implicitly {@link netproto.FAQDetail.verify|verify} messages.
         * @param message FAQDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IFAQDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FAQDetail message, length delimited. Does not implicitly {@link netproto.FAQDetail.verify|verify} messages.
         * @param message FAQDetail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IFAQDetail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FAQDetail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FAQDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.FAQDetail;

        /**
         * Decodes a FAQDetail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FAQDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.FAQDetail;

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
        public static fromObject(object: { [k: string]: any }): netproto.FAQDetail;

        /**
         * Creates a plain object from a FAQDetail message. Also converts values to other types if specified.
         * @param message FAQDetail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.FAQDetail, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IBankCardInfo);

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
        public static create(properties?: netproto.IBankCardInfo): netproto.BankCardInfo;

        /**
         * Encodes the specified BankCardInfo message. Does not implicitly {@link netproto.BankCardInfo.verify|verify} messages.
         * @param message BankCardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IBankCardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BankCardInfo message, length delimited. Does not implicitly {@link netproto.BankCardInfo.verify|verify} messages.
         * @param message BankCardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IBankCardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BankCardInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BankCardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.BankCardInfo;

        /**
         * Decodes a BankCardInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BankCardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.BankCardInfo;

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
        public static fromObject(object: { [k: string]: any }): netproto.BankCardInfo;

        /**
         * Creates a plain object from a BankCardInfo message. Also converts values to other types if specified.
         * @param message BankCardInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.BankCardInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IUnbindConvertType);

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
        public static create(properties?: netproto.IUnbindConvertType): netproto.UnbindConvertType;

        /**
         * Encodes the specified UnbindConvertType message. Does not implicitly {@link netproto.UnbindConvertType.verify|verify} messages.
         * @param message UnbindConvertType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IUnbindConvertType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnbindConvertType message, length delimited. Does not implicitly {@link netproto.UnbindConvertType.verify|verify} messages.
         * @param message UnbindConvertType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IUnbindConvertType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnbindConvertType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnbindConvertType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.UnbindConvertType;

        /**
         * Decodes an UnbindConvertType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnbindConvertType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.UnbindConvertType;

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
        public static fromObject(object: { [k: string]: any }): netproto.UnbindConvertType;

        /**
         * Creates a plain object from an UnbindConvertType message. Also converts values to other types if specified.
         * @param message UnbindConvertType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.UnbindConvertType, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IThirdAPIParam);

        /** ThirdAPIParam Name. */
        public Name: string;

        /** ThirdAPIParam Value. */
        public Value: string;

        /**
         * Creates a new ThirdAPIParam instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ThirdAPIParam instance
         */
        public static create(properties?: netproto.IThirdAPIParam): netproto.ThirdAPIParam;

        /**
         * Encodes the specified ThirdAPIParam message. Does not implicitly {@link netproto.ThirdAPIParam.verify|verify} messages.
         * @param message ThirdAPIParam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IThirdAPIParam, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ThirdAPIParam message, length delimited. Does not implicitly {@link netproto.ThirdAPIParam.verify|verify} messages.
         * @param message ThirdAPIParam message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IThirdAPIParam, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ThirdAPIParam message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ThirdAPIParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.ThirdAPIParam;

        /**
         * Decodes a ThirdAPIParam message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ThirdAPIParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.ThirdAPIParam;

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
        public static fromObject(object: { [k: string]: any }): netproto.ThirdAPIParam;

        /**
         * Creates a plain object from a ThirdAPIParam message. Also converts values to other types if specified.
         * @param message ThirdAPIParam
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.ThirdAPIParam, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        Params?: (netproto.IThirdAPIParam[]|null);
    }

    /** Represents a ThirdAPIReq. */
    class ThirdAPIReq implements IThirdAPIReq {

        /**
         * Constructs a new ThirdAPIReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IThirdAPIReq);

        /** ThirdAPIReq ReqNames. */
        public ReqNames: string[];

        /** ThirdAPIReq Params. */
        public Params: netproto.IThirdAPIParam[];

        /**
         * Creates a new ThirdAPIReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ThirdAPIReq instance
         */
        public static create(properties?: netproto.IThirdAPIReq): netproto.ThirdAPIReq;

        /**
         * Encodes the specified ThirdAPIReq message. Does not implicitly {@link netproto.ThirdAPIReq.verify|verify} messages.
         * @param message ThirdAPIReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IThirdAPIReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ThirdAPIReq message, length delimited. Does not implicitly {@link netproto.ThirdAPIReq.verify|verify} messages.
         * @param message ThirdAPIReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IThirdAPIReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ThirdAPIReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ThirdAPIReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.ThirdAPIReq;

        /**
         * Decodes a ThirdAPIReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ThirdAPIReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.ThirdAPIReq;

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
        public static fromObject(object: { [k: string]: any }): netproto.ThirdAPIReq;

        /**
         * Creates a plain object from a ThirdAPIReq message. Also converts values to other types if specified.
         * @param message ThirdAPIReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.ThirdAPIReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IThirdAPIResp);

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
        public static create(properties?: netproto.IThirdAPIResp): netproto.ThirdAPIResp;

        /**
         * Encodes the specified ThirdAPIResp message. Does not implicitly {@link netproto.ThirdAPIResp.verify|verify} messages.
         * @param message ThirdAPIResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IThirdAPIResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ThirdAPIResp message, length delimited. Does not implicitly {@link netproto.ThirdAPIResp.verify|verify} messages.
         * @param message ThirdAPIResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IThirdAPIResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ThirdAPIResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ThirdAPIResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.ThirdAPIResp;

        /**
         * Decodes a ThirdAPIResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ThirdAPIResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.ThirdAPIResp;

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
        public static fromObject(object: { [k: string]: any }): netproto.ThirdAPIResp;

        /**
         * Creates a plain object from a ThirdAPIResp message. Also converts values to other types if specified.
         * @param message ThirdAPIResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.ThirdAPIResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IVideoGameAPIReq);

        /** VideoGameAPIReq VGameID. */
        public VGameID: number;

        /**
         * Creates a new VideoGameAPIReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VideoGameAPIReq instance
         */
        public static create(properties?: netproto.IVideoGameAPIReq): netproto.VideoGameAPIReq;

        /**
         * Encodes the specified VideoGameAPIReq message. Does not implicitly {@link netproto.VideoGameAPIReq.verify|verify} messages.
         * @param message VideoGameAPIReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IVideoGameAPIReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VideoGameAPIReq message, length delimited. Does not implicitly {@link netproto.VideoGameAPIReq.verify|verify} messages.
         * @param message VideoGameAPIReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IVideoGameAPIReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VideoGameAPIReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VideoGameAPIReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.VideoGameAPIReq;

        /**
         * Decodes a VideoGameAPIReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VideoGameAPIReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.VideoGameAPIReq;

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
        public static fromObject(object: { [k: string]: any }): netproto.VideoGameAPIReq;

        /**
         * Creates a plain object from a VideoGameAPIReq message. Also converts values to other types if specified.
         * @param message VideoGameAPIReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.VideoGameAPIReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IVideoGameAPIRet);

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
        public static create(properties?: netproto.IVideoGameAPIRet): netproto.VideoGameAPIRet;

        /**
         * Encodes the specified VideoGameAPIRet message. Does not implicitly {@link netproto.VideoGameAPIRet.verify|verify} messages.
         * @param message VideoGameAPIRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IVideoGameAPIRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VideoGameAPIRet message, length delimited. Does not implicitly {@link netproto.VideoGameAPIRet.verify|verify} messages.
         * @param message VideoGameAPIRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IVideoGameAPIRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VideoGameAPIRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VideoGameAPIRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.VideoGameAPIRet;

        /**
         * Decodes a VideoGameAPIRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VideoGameAPIRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.VideoGameAPIRet;

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
        public static fromObject(object: { [k: string]: any }): netproto.VideoGameAPIRet;

        /**
         * Creates a plain object from a VideoGameAPIRet message. Also converts values to other types if specified.
         * @param message VideoGameAPIRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.VideoGameAPIRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        UserActivityInfo?: (netproto.IUserActivityInfo|null);

        /** ActivityInfoRet ActivityBaseInfo */
        ActivityBaseInfo: netproto.IActivityBaseInfo;
    }

    /** Represents an ActivityInfoRet. */
    class ActivityInfoRet implements IActivityInfoRet {

        /**
         * Constructs a new ActivityInfoRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IActivityInfoRet);

        /** ActivityInfoRet Code. */
        public Code: number;

        /** ActivityInfoRet Message. */
        public Message: string;

        /** ActivityInfoRet UserActivityInfo. */
        public UserActivityInfo?: (netproto.IUserActivityInfo|null);

        /** ActivityInfoRet ActivityBaseInfo. */
        public ActivityBaseInfo: netproto.IActivityBaseInfo;

        /**
         * Creates a new ActivityInfoRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ActivityInfoRet instance
         */
        public static create(properties?: netproto.IActivityInfoRet): netproto.ActivityInfoRet;

        /**
         * Encodes the specified ActivityInfoRet message. Does not implicitly {@link netproto.ActivityInfoRet.verify|verify} messages.
         * @param message ActivityInfoRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IActivityInfoRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActivityInfoRet message, length delimited. Does not implicitly {@link netproto.ActivityInfoRet.verify|verify} messages.
         * @param message ActivityInfoRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IActivityInfoRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActivityInfoRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.ActivityInfoRet;

        /**
         * Decodes an ActivityInfoRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActivityInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.ActivityInfoRet;

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
        public static fromObject(object: { [k: string]: any }): netproto.ActivityInfoRet;

        /**
         * Creates a plain object from an ActivityInfoRet message. Also converts values to other types if specified.
         * @param message ActivityInfoRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.ActivityInfoRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IUserActivityInfo);

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
        public static create(properties?: netproto.IUserActivityInfo): netproto.UserActivityInfo;

        /**
         * Encodes the specified UserActivityInfo message. Does not implicitly {@link netproto.UserActivityInfo.verify|verify} messages.
         * @param message UserActivityInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IUserActivityInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserActivityInfo message, length delimited. Does not implicitly {@link netproto.UserActivityInfo.verify|verify} messages.
         * @param message UserActivityInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IUserActivityInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserActivityInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserActivityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.UserActivityInfo;

        /**
         * Decodes a UserActivityInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserActivityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.UserActivityInfo;

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
        public static fromObject(object: { [k: string]: any }): netproto.UserActivityInfo;

        /**
         * Creates a plain object from a UserActivityInfo message. Also converts values to other types if specified.
         * @param message UserActivityInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.UserActivityInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        ActivityConfig?: (netproto.IActivityConfig[]|null);

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
        constructor(properties?: netproto.IActivityBaseInfo);

        /** ActivityBaseInfo ActivityID. */
        public ActivityID: number;

        /** ActivityBaseInfo ActivityName. */
        public ActivityName: string;

        /** ActivityBaseInfo ActivityContent. */
        public ActivityContent: string;

        /** ActivityBaseInfo ActivityConfig. */
        public ActivityConfig: netproto.IActivityConfig[];

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
        public static create(properties?: netproto.IActivityBaseInfo): netproto.ActivityBaseInfo;

        /**
         * Encodes the specified ActivityBaseInfo message. Does not implicitly {@link netproto.ActivityBaseInfo.verify|verify} messages.
         * @param message ActivityBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IActivityBaseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActivityBaseInfo message, length delimited. Does not implicitly {@link netproto.ActivityBaseInfo.verify|verify} messages.
         * @param message ActivityBaseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IActivityBaseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActivityBaseInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.ActivityBaseInfo;

        /**
         * Decodes an ActivityBaseInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActivityBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.ActivityBaseInfo;

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
        public static fromObject(object: { [k: string]: any }): netproto.ActivityBaseInfo;

        /**
         * Creates a plain object from an ActivityBaseInfo message. Also converts values to other types if specified.
         * @param message ActivityBaseInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.ActivityBaseInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IActivityConfig);

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
        public static create(properties?: netproto.IActivityConfig): netproto.ActivityConfig;

        /**
         * Encodes the specified ActivityConfig message. Does not implicitly {@link netproto.ActivityConfig.verify|verify} messages.
         * @param message ActivityConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IActivityConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ActivityConfig message, length delimited. Does not implicitly {@link netproto.ActivityConfig.verify|verify} messages.
         * @param message ActivityConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IActivityConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActivityConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ActivityConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.ActivityConfig;

        /**
         * Decodes an ActivityConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ActivityConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.ActivityConfig;

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
        public static fromObject(object: { [k: string]: any }): netproto.ActivityConfig;

        /**
         * Creates a plain object from an ActivityConfig message. Also converts values to other types if specified.
         * @param message ActivityConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.ActivityConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        AdvanceConfig?: (netproto.IAdvanceConfig[]|null);
    }

    /** Represents an AdvanceInfoRet. */
    class AdvanceInfoRet implements IAdvanceInfoRet {

        /**
         * Constructs a new AdvanceInfoRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IAdvanceInfoRet);

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
        public AdvanceConfig: netproto.IAdvanceConfig[];

        /**
         * Creates a new AdvanceInfoRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdvanceInfoRet instance
         */
        public static create(properties?: netproto.IAdvanceInfoRet): netproto.AdvanceInfoRet;

        /**
         * Encodes the specified AdvanceInfoRet message. Does not implicitly {@link netproto.AdvanceInfoRet.verify|verify} messages.
         * @param message AdvanceInfoRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IAdvanceInfoRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AdvanceInfoRet message, length delimited. Does not implicitly {@link netproto.AdvanceInfoRet.verify|verify} messages.
         * @param message AdvanceInfoRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IAdvanceInfoRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdvanceInfoRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdvanceInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.AdvanceInfoRet;

        /**
         * Decodes an AdvanceInfoRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AdvanceInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.AdvanceInfoRet;

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
        public static fromObject(object: { [k: string]: any }): netproto.AdvanceInfoRet;

        /**
         * Creates a plain object from an AdvanceInfoRet message. Also converts values to other types if specified.
         * @param message AdvanceInfoRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.AdvanceInfoRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IAdvanceConfig);

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
        public static create(properties?: netproto.IAdvanceConfig): netproto.AdvanceConfig;

        /**
         * Encodes the specified AdvanceConfig message. Does not implicitly {@link netproto.AdvanceConfig.verify|verify} messages.
         * @param message AdvanceConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IAdvanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AdvanceConfig message, length delimited. Does not implicitly {@link netproto.AdvanceConfig.verify|verify} messages.
         * @param message AdvanceConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IAdvanceConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdvanceConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdvanceConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.AdvanceConfig;

        /**
         * Decodes an AdvanceConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AdvanceConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.AdvanceConfig;

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
        public static fromObject(object: { [k: string]: any }): netproto.AdvanceConfig;

        /**
         * Creates a plain object from an AdvanceConfig message. Also converts values to other types if specified.
         * @param message AdvanceConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.AdvanceConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        RechargeConfig?: (netproto.IRechargeConfig[]|null);
    }

    /** Represents a RechargeActivityRet. */
    class RechargeActivityRet implements IRechargeActivityRet {

        /**
         * Constructs a new RechargeActivityRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IRechargeActivityRet);

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
        public RechargeConfig: netproto.IRechargeConfig[];

        /**
         * Creates a new RechargeActivityRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RechargeActivityRet instance
         */
        public static create(properties?: netproto.IRechargeActivityRet): netproto.RechargeActivityRet;

        /**
         * Encodes the specified RechargeActivityRet message. Does not implicitly {@link netproto.RechargeActivityRet.verify|verify} messages.
         * @param message RechargeActivityRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IRechargeActivityRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RechargeActivityRet message, length delimited. Does not implicitly {@link netproto.RechargeActivityRet.verify|verify} messages.
         * @param message RechargeActivityRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IRechargeActivityRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RechargeActivityRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RechargeActivityRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.RechargeActivityRet;

        /**
         * Decodes a RechargeActivityRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RechargeActivityRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.RechargeActivityRet;

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
        public static fromObject(object: { [k: string]: any }): netproto.RechargeActivityRet;

        /**
         * Creates a plain object from a RechargeActivityRet message. Also converts values to other types if specified.
         * @param message RechargeActivityRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.RechargeActivityRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IRechargeConfig);

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
        public static create(properties?: netproto.IRechargeConfig): netproto.RechargeConfig;

        /**
         * Encodes the specified RechargeConfig message. Does not implicitly {@link netproto.RechargeConfig.verify|verify} messages.
         * @param message RechargeConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IRechargeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RechargeConfig message, length delimited. Does not implicitly {@link netproto.RechargeConfig.verify|verify} messages.
         * @param message RechargeConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IRechargeConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RechargeConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RechargeConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.RechargeConfig;

        /**
         * Decodes a RechargeConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RechargeConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.RechargeConfig;

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
        public static fromObject(object: { [k: string]: any }): netproto.RechargeConfig;

        /**
         * Creates a plain object from a RechargeConfig message. Also converts values to other types if specified.
         * @param message RechargeConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.RechargeConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        ReachSign?: (netproto.ISignInfo[]|null);

        /** DailySingActionLoadRes LotteryPool */
        LotteryPool?: (netproto.IPoolInfo[]|null);

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
        constructor(properties?: netproto.IDailySingActionLoadRes);

        /** DailySingActionLoadRes Day. */
        public Day: number;

        /** DailySingActionLoadRes EndTimeStamp. */
        public EndTimeStamp: number;

        /** DailySingActionLoadRes ReachSign. */
        public ReachSign: netproto.ISignInfo[];

        /** DailySingActionLoadRes LotteryPool. */
        public LotteryPool: netproto.IPoolInfo[];

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
        public static create(properties?: netproto.IDailySingActionLoadRes): netproto.DailySingActionLoadRes;

        /**
         * Encodes the specified DailySingActionLoadRes message. Does not implicitly {@link netproto.DailySingActionLoadRes.verify|verify} messages.
         * @param message DailySingActionLoadRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IDailySingActionLoadRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DailySingActionLoadRes message, length delimited. Does not implicitly {@link netproto.DailySingActionLoadRes.verify|verify} messages.
         * @param message DailySingActionLoadRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IDailySingActionLoadRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DailySingActionLoadRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DailySingActionLoadRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.DailySingActionLoadRes;

        /**
         * Decodes a DailySingActionLoadRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DailySingActionLoadRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.DailySingActionLoadRes;

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
        public static fromObject(object: { [k: string]: any }): netproto.DailySingActionLoadRes;

        /**
         * Creates a plain object from a DailySingActionLoadRes message. Also converts values to other types if specified.
         * @param message DailySingActionLoadRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.DailySingActionLoadRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IPoolInfo);

        /** PoolInfo Index. */
        public Index: number;

        /** PoolInfo RewardMoney. */
        public RewardMoney: (number|Long);

        /**
         * Creates a new PoolInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PoolInfo instance
         */
        public static create(properties?: netproto.IPoolInfo): netproto.PoolInfo;

        /**
         * Encodes the specified PoolInfo message. Does not implicitly {@link netproto.PoolInfo.verify|verify} messages.
         * @param message PoolInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IPoolInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PoolInfo message, length delimited. Does not implicitly {@link netproto.PoolInfo.verify|verify} messages.
         * @param message PoolInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IPoolInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PoolInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PoolInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.PoolInfo;

        /**
         * Decodes a PoolInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PoolInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.PoolInfo;

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
        public static fromObject(object: { [k: string]: any }): netproto.PoolInfo;

        /**
         * Creates a plain object from a PoolInfo message. Also converts values to other types if specified.
         * @param message PoolInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.PoolInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.ISignInfo);

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
        public static create(properties?: netproto.ISignInfo): netproto.SignInfo;

        /**
         * Encodes the specified SignInfo message. Does not implicitly {@link netproto.SignInfo.verify|verify} messages.
         * @param message SignInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ISignInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignInfo message, length delimited. Does not implicitly {@link netproto.SignInfo.verify|verify} messages.
         * @param message SignInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ISignInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.SignInfo;

        /**
         * Decodes a SignInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.SignInfo;

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
        public static fromObject(object: { [k: string]: any }): netproto.SignInfo;

        /**
         * Creates a plain object from a SignInfo message. Also converts values to other types if specified.
         * @param message SignInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.SignInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IDailySignReceiveRewardReq);

        /** DailySignReceiveRewardReq Day. */
        public Day: number;

        /**
         * Creates a new DailySignReceiveRewardReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DailySignReceiveRewardReq instance
         */
        public static create(properties?: netproto.IDailySignReceiveRewardReq): netproto.DailySignReceiveRewardReq;

        /**
         * Encodes the specified DailySignReceiveRewardReq message. Does not implicitly {@link netproto.DailySignReceiveRewardReq.verify|verify} messages.
         * @param message DailySignReceiveRewardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IDailySignReceiveRewardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DailySignReceiveRewardReq message, length delimited. Does not implicitly {@link netproto.DailySignReceiveRewardReq.verify|verify} messages.
         * @param message DailySignReceiveRewardReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IDailySignReceiveRewardReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DailySignReceiveRewardReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DailySignReceiveRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.DailySignReceiveRewardReq;

        /**
         * Decodes a DailySignReceiveRewardReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DailySignReceiveRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.DailySignReceiveRewardReq;

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
        public static fromObject(object: { [k: string]: any }): netproto.DailySignReceiveRewardReq;

        /**
         * Creates a plain object from a DailySignReceiveRewardReq message. Also converts values to other types if specified.
         * @param message DailySignReceiveRewardReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.DailySignReceiveRewardReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        Reward?: (netproto.ISignReward|null);
    }

    /** Represents a DailySignReceiveRewardRes. */
    class DailySignReceiveRewardRes implements IDailySignReceiveRewardRes {

        /**
         * Constructs a new DailySignReceiveRewardRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IDailySignReceiveRewardRes);

        /** DailySignReceiveRewardRes Day. */
        public Day: number;

        /** DailySignReceiveRewardRes Code. */
        public Code: number;

        /** DailySignReceiveRewardRes Msg. */
        public Msg: string;

        /** DailySignReceiveRewardRes Reward. */
        public Reward?: (netproto.ISignReward|null);

        /**
         * Creates a new DailySignReceiveRewardRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DailySignReceiveRewardRes instance
         */
        public static create(properties?: netproto.IDailySignReceiveRewardRes): netproto.DailySignReceiveRewardRes;

        /**
         * Encodes the specified DailySignReceiveRewardRes message. Does not implicitly {@link netproto.DailySignReceiveRewardRes.verify|verify} messages.
         * @param message DailySignReceiveRewardRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IDailySignReceiveRewardRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DailySignReceiveRewardRes message, length delimited. Does not implicitly {@link netproto.DailySignReceiveRewardRes.verify|verify} messages.
         * @param message DailySignReceiveRewardRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IDailySignReceiveRewardRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DailySignReceiveRewardRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DailySignReceiveRewardRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.DailySignReceiveRewardRes;

        /**
         * Decodes a DailySignReceiveRewardRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DailySignReceiveRewardRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.DailySignReceiveRewardRes;

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
        public static fromObject(object: { [k: string]: any }): netproto.DailySignReceiveRewardRes;

        /**
         * Creates a plain object from a DailySignReceiveRewardRes message. Also converts values to other types if specified.
         * @param message DailySignReceiveRewardRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.DailySignReceiveRewardRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.ISignReward);

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
        public static create(properties?: netproto.ISignReward): netproto.SignReward;

        /**
         * Encodes the specified SignReward message. Does not implicitly {@link netproto.SignReward.verify|verify} messages.
         * @param message SignReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ISignReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignReward message, length delimited. Does not implicitly {@link netproto.SignReward.verify|verify} messages.
         * @param message SignReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ISignReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignReward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.SignReward;

        /**
         * Decodes a SignReward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.SignReward;

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
        public static fromObject(object: { [k: string]: any }): netproto.SignReward;

        /**
         * Creates a plain object from a SignReward message. Also converts values to other types if specified.
         * @param message SignReward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.SignReward, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        Reward?: (netproto.ISignReward|null);
    }

    /** Represents a DailySignLotteryRes. */
    class DailySignLotteryRes implements IDailySignLotteryRes {

        /**
         * Constructs a new DailySignLotteryRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IDailySignLotteryRes);

        /** DailySignLotteryRes Code. */
        public Code: number;

        /** DailySignLotteryRes Msg. */
        public Msg: string;

        /** DailySignLotteryRes Reward. */
        public Reward?: (netproto.ISignReward|null);

        /**
         * Creates a new DailySignLotteryRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DailySignLotteryRes instance
         */
        public static create(properties?: netproto.IDailySignLotteryRes): netproto.DailySignLotteryRes;

        /**
         * Encodes the specified DailySignLotteryRes message. Does not implicitly {@link netproto.DailySignLotteryRes.verify|verify} messages.
         * @param message DailySignLotteryRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IDailySignLotteryRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DailySignLotteryRes message, length delimited. Does not implicitly {@link netproto.DailySignLotteryRes.verify|verify} messages.
         * @param message DailySignLotteryRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IDailySignLotteryRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DailySignLotteryRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DailySignLotteryRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.DailySignLotteryRes;

        /**
         * Decodes a DailySignLotteryRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DailySignLotteryRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.DailySignLotteryRes;

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
        public static fromObject(object: { [k: string]: any }): netproto.DailySignLotteryRes;

        /**
         * Creates a plain object from a DailySignLotteryRes message. Also converts values to other types if specified.
         * @param message DailySignLotteryRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.DailySignLotteryRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IReliefConfigRet);

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
        public static create(properties?: netproto.IReliefConfigRet): netproto.ReliefConfigRet;

        /**
         * Encodes the specified ReliefConfigRet message. Does not implicitly {@link netproto.ReliefConfigRet.verify|verify} messages.
         * @param message ReliefConfigRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IReliefConfigRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReliefConfigRet message, length delimited. Does not implicitly {@link netproto.ReliefConfigRet.verify|verify} messages.
         * @param message ReliefConfigRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IReliefConfigRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReliefConfigRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReliefConfigRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.ReliefConfigRet;

        /**
         * Decodes a ReliefConfigRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReliefConfigRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.ReliefConfigRet;

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
        public static fromObject(object: { [k: string]: any }): netproto.ReliefConfigRet;

        /**
         * Creates a plain object from a ReliefConfigRet message. Also converts values to other types if specified.
         * @param message ReliefConfigRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.ReliefConfigRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IReliefCollectRet);

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
        public static create(properties?: netproto.IReliefCollectRet): netproto.ReliefCollectRet;

        /**
         * Encodes the specified ReliefCollectRet message. Does not implicitly {@link netproto.ReliefCollectRet.verify|verify} messages.
         * @param message ReliefCollectRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IReliefCollectRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReliefCollectRet message, length delimited. Does not implicitly {@link netproto.ReliefCollectRet.verify|verify} messages.
         * @param message ReliefCollectRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IReliefCollectRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReliefCollectRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReliefCollectRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.ReliefCollectRet;

        /**
         * Decodes a ReliefCollectRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReliefCollectRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.ReliefCollectRet;

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
        public static fromObject(object: { [k: string]: any }): netproto.ReliefCollectRet;

        /**
         * Creates a plain object from a ReliefCollectRet message. Also converts values to other types if specified.
         * @param message ReliefCollectRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.ReliefCollectRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IReceiveMailAnnexReq);

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
        public static create(properties?: netproto.IReceiveMailAnnexReq): netproto.ReceiveMailAnnexReq;

        /**
         * Encodes the specified ReceiveMailAnnexReq message. Does not implicitly {@link netproto.ReceiveMailAnnexReq.verify|verify} messages.
         * @param message ReceiveMailAnnexReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IReceiveMailAnnexReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReceiveMailAnnexReq message, length delimited. Does not implicitly {@link netproto.ReceiveMailAnnexReq.verify|verify} messages.
         * @param message ReceiveMailAnnexReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IReceiveMailAnnexReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReceiveMailAnnexReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReceiveMailAnnexReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.ReceiveMailAnnexReq;

        /**
         * Decodes a ReceiveMailAnnexReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReceiveMailAnnexReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.ReceiveMailAnnexReq;

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
        public static fromObject(object: { [k: string]: any }): netproto.ReceiveMailAnnexReq;

        /**
         * Creates a plain object from a ReceiveMailAnnexReq message. Also converts values to other types if specified.
         * @param message ReceiveMailAnnexReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.ReceiveMailAnnexReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        MailAnnexList?: (netproto.IMailAnnex[]|null);
    }

    /** Represents a ReceiveMailAnnexRet. */
    class ReceiveMailAnnexRet implements IReceiveMailAnnexRet {

        /**
         * Constructs a new ReceiveMailAnnexRet.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IReceiveMailAnnexRet);

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
        public MailAnnexList: netproto.IMailAnnex[];

        /**
         * Creates a new ReceiveMailAnnexRet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReceiveMailAnnexRet instance
         */
        public static create(properties?: netproto.IReceiveMailAnnexRet): netproto.ReceiveMailAnnexRet;

        /**
         * Encodes the specified ReceiveMailAnnexRet message. Does not implicitly {@link netproto.ReceiveMailAnnexRet.verify|verify} messages.
         * @param message ReceiveMailAnnexRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IReceiveMailAnnexRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReceiveMailAnnexRet message, length delimited. Does not implicitly {@link netproto.ReceiveMailAnnexRet.verify|verify} messages.
         * @param message ReceiveMailAnnexRet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IReceiveMailAnnexRet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReceiveMailAnnexRet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReceiveMailAnnexRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.ReceiveMailAnnexRet;

        /**
         * Decodes a ReceiveMailAnnexRet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReceiveMailAnnexRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.ReceiveMailAnnexRet;

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
        public static fromObject(object: { [k: string]: any }): netproto.ReceiveMailAnnexRet;

        /**
         * Creates a plain object from a ReceiveMailAnnexRet message. Also converts values to other types if specified.
         * @param message ReceiveMailAnnexRet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.ReceiveMailAnnexRet, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IMailAnnex);

        /** MailAnnex ItemType. */
        public ItemType: number;

        /** MailAnnex ItemNum. */
        public ItemNum: number;

        /**
         * Creates a new MailAnnex instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MailAnnex instance
         */
        public static create(properties?: netproto.IMailAnnex): netproto.MailAnnex;

        /**
         * Encodes the specified MailAnnex message. Does not implicitly {@link netproto.MailAnnex.verify|verify} messages.
         * @param message MailAnnex message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IMailAnnex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MailAnnex message, length delimited. Does not implicitly {@link netproto.MailAnnex.verify|verify} messages.
         * @param message MailAnnex message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IMailAnnex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MailAnnex message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MailAnnex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.MailAnnex;

        /**
         * Decodes a MailAnnex message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MailAnnex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.MailAnnex;

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
        public static fromObject(object: { [k: string]: any }): netproto.MailAnnex;

        /**
         * Creates a plain object from a MailAnnex message. Also converts values to other types if specified.
         * @param message MailAnnex
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.MailAnnex, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: netproto.IClearReadMailReq);

        /** ClearReadMailReq UserID. */
        public UserID: number;

        /**
         * Creates a new ClearReadMailReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClearReadMailReq instance
         */
        public static create(properties?: netproto.IClearReadMailReq): netproto.ClearReadMailReq;

        /**
         * Encodes the specified ClearReadMailReq message. Does not implicitly {@link netproto.ClearReadMailReq.verify|verify} messages.
         * @param message ClearReadMailReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IClearReadMailReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClearReadMailReq message, length delimited. Does not implicitly {@link netproto.ClearReadMailReq.verify|verify} messages.
         * @param message ClearReadMailReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IClearReadMailReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClearReadMailReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClearReadMailReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.ClearReadMailReq;

        /**
         * Decodes a ClearReadMailReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClearReadMailReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.ClearReadMailReq;

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
        public static fromObject(object: { [k: string]: any }): netproto.ClearReadMailReq;

        /**
         * Creates a plain object from a ClearReadMailReq message. Also converts values to other types if specified.
         * @param message ClearReadMailReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.ClearReadMailReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClearReadMailReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetGameTableInfoReq. */
    interface IGetGameTableInfoReq {

        /** GetGameTableInfoReq GameID */
        GameID: number;

        /** GetGameTableInfoReq RoomFlag */
        RoomFlag: string;

        /** GetGameTableInfoReq GroupID */
        GroupID: number;
    }

    /** Represents a GetGameTableInfoReq. */
    class GetGameTableInfoReq implements IGetGameTableInfoReq {

        /**
         * Constructs a new GetGameTableInfoReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IGetGameTableInfoReq);

        /** GetGameTableInfoReq GameID. */
        public GameID: number;

        /** GetGameTableInfoReq RoomFlag. */
        public RoomFlag: string;

        /** GetGameTableInfoReq GroupID. */
        public GroupID: number;

        /**
         * Creates a new GetGameTableInfoReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetGameTableInfoReq instance
         */
        public static create(properties?: netproto.IGetGameTableInfoReq): netproto.GetGameTableInfoReq;

        /**
         * Encodes the specified GetGameTableInfoReq message. Does not implicitly {@link netproto.GetGameTableInfoReq.verify|verify} messages.
         * @param message GetGameTableInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGetGameTableInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetGameTableInfoReq message, length delimited. Does not implicitly {@link netproto.GetGameTableInfoReq.verify|verify} messages.
         * @param message GetGameTableInfoReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGetGameTableInfoReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetGameTableInfoReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetGameTableInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GetGameTableInfoReq;

        /**
         * Decodes a GetGameTableInfoReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetGameTableInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GetGameTableInfoReq;

        /**
         * Verifies a GetGameTableInfoReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetGameTableInfoReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetGameTableInfoReq
         */
        public static fromObject(object: { [k: string]: any }): netproto.GetGameTableInfoReq;

        /**
         * Creates a plain object from a GetGameTableInfoReq message. Also converts values to other types if specified.
         * @param message GetGameTableInfoReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GetGameTableInfoReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetGameTableInfoReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameTableListRes. */
    interface IGameTableListRes {

        /** GameTableListRes GameID */
        GameID: number;

        /** GameTableListRes RoomFlag */
        RoomFlag: string;

        /** GameTableListRes GroupID */
        GroupID: number;

        /** GameTableListRes ServerAddr */
        ServerAddr?: (netproto.IGameServerAddr[]|null);

        /** GameTableListRes Tables */
        Tables?: (netproto.IGameTableInfo[]|null);
    }

    /** Represents a GameTableListRes. */
    class GameTableListRes implements IGameTableListRes {

        /**
         * Constructs a new GameTableListRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IGameTableListRes);

        /** GameTableListRes GameID. */
        public GameID: number;

        /** GameTableListRes RoomFlag. */
        public RoomFlag: string;

        /** GameTableListRes GroupID. */
        public GroupID: number;

        /** GameTableListRes ServerAddr. */
        public ServerAddr: netproto.IGameServerAddr[];

        /** GameTableListRes Tables. */
        public Tables: netproto.IGameTableInfo[];

        /**
         * Creates a new GameTableListRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameTableListRes instance
         */
        public static create(properties?: netproto.IGameTableListRes): netproto.GameTableListRes;

        /**
         * Encodes the specified GameTableListRes message. Does not implicitly {@link netproto.GameTableListRes.verify|verify} messages.
         * @param message GameTableListRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGameTableListRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameTableListRes message, length delimited. Does not implicitly {@link netproto.GameTableListRes.verify|verify} messages.
         * @param message GameTableListRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGameTableListRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameTableListRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameTableListRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GameTableListRes;

        /**
         * Decodes a GameTableListRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameTableListRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GameTableListRes;

        /**
         * Verifies a GameTableListRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameTableListRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameTableListRes
         */
        public static fromObject(object: { [k: string]: any }): netproto.GameTableListRes;

        /**
         * Creates a plain object from a GameTableListRes message. Also converts values to other types if specified.
         * @param message GameTableListRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GameTableListRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameTableListRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameTableInfo. */
    interface IGameTableInfo {

        /** GameTableInfo TableID */
        TableID: number;

        /** GameTableInfo ChairNum */
        ChairNum: number;

        /** GameTableInfo Chairs */
        Chairs?: (netproto.IGameChairInfo[]|null);
    }

    /** Represents a GameTableInfo. */
    class GameTableInfo implements IGameTableInfo {

        /**
         * Constructs a new GameTableInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IGameTableInfo);

        /** GameTableInfo TableID. */
        public TableID: number;

        /** GameTableInfo ChairNum. */
        public ChairNum: number;

        /** GameTableInfo Chairs. */
        public Chairs: netproto.IGameChairInfo[];

        /**
         * Creates a new GameTableInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameTableInfo instance
         */
        public static create(properties?: netproto.IGameTableInfo): netproto.GameTableInfo;

        /**
         * Encodes the specified GameTableInfo message. Does not implicitly {@link netproto.GameTableInfo.verify|verify} messages.
         * @param message GameTableInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGameTableInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameTableInfo message, length delimited. Does not implicitly {@link netproto.GameTableInfo.verify|verify} messages.
         * @param message GameTableInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGameTableInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameTableInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameTableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GameTableInfo;

        /**
         * Decodes a GameTableInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameTableInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GameTableInfo;

        /**
         * Verifies a GameTableInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameTableInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameTableInfo
         */
        public static fromObject(object: { [k: string]: any }): netproto.GameTableInfo;

        /**
         * Creates a plain object from a GameTableInfo message. Also converts values to other types if specified.
         * @param message GameTableInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GameTableInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameTableInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameChairInfo. */
    interface IGameChairInfo {

        /** GameChairInfo ChairID */
        ChairID: number;

        /** GameChairInfo Status */
        Status: number;

        /** GameChairInfo UserID */
        UserID?: (number|null);

        /** GameChairInfo HeadID */
        HeadID?: (number|null);
    }

    /** Represents a GameChairInfo. */
    class GameChairInfo implements IGameChairInfo {

        /**
         * Constructs a new GameChairInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IGameChairInfo);

        /** GameChairInfo ChairID. */
        public ChairID: number;

        /** GameChairInfo Status. */
        public Status: number;

        /** GameChairInfo UserID. */
        public UserID: number;

        /** GameChairInfo HeadID. */
        public HeadID: number;

        /**
         * Creates a new GameChairInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameChairInfo instance
         */
        public static create(properties?: netproto.IGameChairInfo): netproto.GameChairInfo;

        /**
         * Encodes the specified GameChairInfo message. Does not implicitly {@link netproto.GameChairInfo.verify|verify} messages.
         * @param message GameChairInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGameChairInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameChairInfo message, length delimited. Does not implicitly {@link netproto.GameChairInfo.verify|verify} messages.
         * @param message GameChairInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGameChairInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameChairInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameChairInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GameChairInfo;

        /**
         * Decodes a GameChairInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameChairInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GameChairInfo;

        /**
         * Verifies a GameChairInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameChairInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameChairInfo
         */
        public static fromObject(object: { [k: string]: any }): netproto.GameChairInfo;

        /**
         * Creates a plain object from a GameChairInfo message. Also converts values to other types if specified.
         * @param message GameChairInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GameChairInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameChairInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameListNtf. */
    interface IGameListNtf {

        /** GameListNtf CategoryList */
        CategoryList?: (netproto.ICategoryInfo[]|null);

        /** GameListNtf CpList */
        CpList?: (netproto.ICpInfo[]|null);

        /** GameListNtf GameList */
        GameList?: (netproto.IGameInfo[]|null);

        /** GameListNtf IconUrlHead */
        IconUrlHead: string;
    }

    /** Represents a GameListNtf. */
    class GameListNtf implements IGameListNtf {

        /**
         * Constructs a new GameListNtf.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IGameListNtf);

        /** GameListNtf CategoryList. */
        public CategoryList: netproto.ICategoryInfo[];

        /** GameListNtf CpList. */
        public CpList: netproto.ICpInfo[];

        /** GameListNtf GameList. */
        public GameList: netproto.IGameInfo[];

        /** GameListNtf IconUrlHead. */
        public IconUrlHead: string;

        /**
         * Creates a new GameListNtf instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameListNtf instance
         */
        public static create(properties?: netproto.IGameListNtf): netproto.GameListNtf;

        /**
         * Encodes the specified GameListNtf message. Does not implicitly {@link netproto.GameListNtf.verify|verify} messages.
         * @param message GameListNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGameListNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameListNtf message, length delimited. Does not implicitly {@link netproto.GameListNtf.verify|verify} messages.
         * @param message GameListNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGameListNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameListNtf message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameListNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GameListNtf;

        /**
         * Decodes a GameListNtf message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameListNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GameListNtf;

        /**
         * Verifies a GameListNtf message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameListNtf message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameListNtf
         */
        public static fromObject(object: { [k: string]: any }): netproto.GameListNtf;

        /**
         * Creates a plain object from a GameListNtf message. Also converts values to other types if specified.
         * @param message GameListNtf
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GameListNtf, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameListNtf to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CategoryInfo. */
    interface ICategoryInfo {

        /** CategoryInfo CategoryID */
        CategoryID: number;

        /** CategoryInfo CategoryName */
        CategoryName: string;

        /** CategoryInfo DisplayType */
        DisplayType: number;

        /** CategoryInfo DisplayIDList */
        DisplayIDList?: (netproto.IDisplaySortID[]|null);
    }

    /** Represents a CategoryInfo. */
    class CategoryInfo implements ICategoryInfo {

        /**
         * Constructs a new CategoryInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.ICategoryInfo);

        /** CategoryInfo CategoryID. */
        public CategoryID: number;

        /** CategoryInfo CategoryName. */
        public CategoryName: string;

        /** CategoryInfo DisplayType. */
        public DisplayType: number;

        /** CategoryInfo DisplayIDList. */
        public DisplayIDList: netproto.IDisplaySortID[];

        /**
         * Creates a new CategoryInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CategoryInfo instance
         */
        public static create(properties?: netproto.ICategoryInfo): netproto.CategoryInfo;

        /**
         * Encodes the specified CategoryInfo message. Does not implicitly {@link netproto.CategoryInfo.verify|verify} messages.
         * @param message CategoryInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ICategoryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CategoryInfo message, length delimited. Does not implicitly {@link netproto.CategoryInfo.verify|verify} messages.
         * @param message CategoryInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ICategoryInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CategoryInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CategoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.CategoryInfo;

        /**
         * Decodes a CategoryInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CategoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.CategoryInfo;

        /**
         * Verifies a CategoryInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CategoryInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CategoryInfo
         */
        public static fromObject(object: { [k: string]: any }): netproto.CategoryInfo;

        /**
         * Creates a plain object from a CategoryInfo message. Also converts values to other types if specified.
         * @param message CategoryInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.CategoryInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CategoryInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DisplaySortID. */
    interface IDisplaySortID {

        /** DisplaySortID ID */
        ID: number;

        /** DisplaySortID SubID */
        SubID?: (number[]|null);

        /** DisplaySortID Label */
        Label?: (number|null);
    }

    /** Represents a DisplaySortID. */
    class DisplaySortID implements IDisplaySortID {

        /**
         * Constructs a new DisplaySortID.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IDisplaySortID);

        /** DisplaySortID ID. */
        public ID: number;

        /** DisplaySortID SubID. */
        public SubID: number[];

        /** DisplaySortID Label. */
        public Label: number;

        /**
         * Creates a new DisplaySortID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DisplaySortID instance
         */
        public static create(properties?: netproto.IDisplaySortID): netproto.DisplaySortID;

        /**
         * Encodes the specified DisplaySortID message. Does not implicitly {@link netproto.DisplaySortID.verify|verify} messages.
         * @param message DisplaySortID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IDisplaySortID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DisplaySortID message, length delimited. Does not implicitly {@link netproto.DisplaySortID.verify|verify} messages.
         * @param message DisplaySortID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IDisplaySortID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DisplaySortID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DisplaySortID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.DisplaySortID;

        /**
         * Decodes a DisplaySortID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DisplaySortID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.DisplaySortID;

        /**
         * Verifies a DisplaySortID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DisplaySortID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DisplaySortID
         */
        public static fromObject(object: { [k: string]: any }): netproto.DisplaySortID;

        /**
         * Creates a plain object from a DisplaySortID message. Also converts values to other types if specified.
         * @param message DisplaySortID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.DisplaySortID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DisplaySortID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CpInfo. */
    interface ICpInfo {

        /** CpInfo CpID */
        CpID: number;

        /** CpInfo CpName */
        CpName: string;

        /** CpInfo IconUrl */
        IconUrl?: (string|null);

        /** CpInfo Status */
        Status?: (number|null);

        /** CpInfo DiffTime */
        DiffTime?: (number|Long|null);

        /** CpInfo GameIDs */
        GameIDs?: (number[]|null);

        /** CpInfo ColorBoxID */
        ColorBoxID?: (number|null);

        /** CpInfo NoSelGame */
        NoSelGame?: (number|null);

        /** CpInfo VipLimit */
        VipLimit?: (number|null);
    }

    /** Represents a CpInfo. */
    class CpInfo implements ICpInfo {

        /**
         * Constructs a new CpInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.ICpInfo);

        /** CpInfo CpID. */
        public CpID: number;

        /** CpInfo CpName. */
        public CpName: string;

        /** CpInfo IconUrl. */
        public IconUrl: string;

        /** CpInfo Status. */
        public Status: number;

        /** CpInfo DiffTime. */
        public DiffTime: (number|Long);

        /** CpInfo GameIDs. */
        public GameIDs: number[];

        /** CpInfo ColorBoxID. */
        public ColorBoxID: number;

        /** CpInfo NoSelGame. */
        public NoSelGame: number;

        /** CpInfo VipLimit. */
        public VipLimit: number;

        /**
         * Creates a new CpInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CpInfo instance
         */
        public static create(properties?: netproto.ICpInfo): netproto.CpInfo;

        /**
         * Encodes the specified CpInfo message. Does not implicitly {@link netproto.CpInfo.verify|verify} messages.
         * @param message CpInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ICpInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CpInfo message, length delimited. Does not implicitly {@link netproto.CpInfo.verify|verify} messages.
         * @param message CpInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ICpInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CpInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CpInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.CpInfo;

        /**
         * Decodes a CpInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CpInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.CpInfo;

        /**
         * Verifies a CpInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CpInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CpInfo
         */
        public static fromObject(object: { [k: string]: any }): netproto.CpInfo;

        /**
         * Creates a plain object from a CpInfo message. Also converts values to other types if specified.
         * @param message CpInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.CpInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CpInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameInfo. */
    interface IGameInfo {

        /** GameInfo GameID */
        GameID: number;

        /** GameInfo GameCode */
        GameCode: string;

        /** GameInfo GameName */
        GameName: string;

        /** GameInfo Label */
        Label?: (number|null);

        /** GameInfo IconUrl */
        IconUrl?: (string|null);

        /** GameInfo Status */
        Status?: (number|null);

        /** GameInfo DiffTime */
        DiffTime?: (number|Long|null);

        /** GameInfo NoSelRoom */
        NoSelRoom?: (number|null);

        /** GameInfo GameRoomList */
        GameRoomList?: (netproto.IGameRoomInfo[]|null);
    }

    /** Represents a GameInfo. */
    class GameInfo implements IGameInfo {

        /**
         * Constructs a new GameInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IGameInfo);

        /** GameInfo GameID. */
        public GameID: number;

        /** GameInfo GameCode. */
        public GameCode: string;

        /** GameInfo GameName. */
        public GameName: string;

        /** GameInfo Label. */
        public Label: number;

        /** GameInfo IconUrl. */
        public IconUrl: string;

        /** GameInfo Status. */
        public Status: number;

        /** GameInfo DiffTime. */
        public DiffTime: (number|Long);

        /** GameInfo NoSelRoom. */
        public NoSelRoom: number;

        /** GameInfo GameRoomList. */
        public GameRoomList: netproto.IGameRoomInfo[];

        /**
         * Creates a new GameInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameInfo instance
         */
        public static create(properties?: netproto.IGameInfo): netproto.GameInfo;

        /**
         * Encodes the specified GameInfo message. Does not implicitly {@link netproto.GameInfo.verify|verify} messages.
         * @param message GameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameInfo message, length delimited. Does not implicitly {@link netproto.GameInfo.verify|verify} messages.
         * @param message GameInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGameInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GameInfo;

        /**
         * Decodes a GameInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GameInfo;

        /**
         * Verifies a GameInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameInfo
         */
        public static fromObject(object: { [k: string]: any }): netproto.GameInfo;

        /**
         * Creates a plain object from a GameInfo message. Also converts values to other types if specified.
         * @param message GameInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GameInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameRoomInfo. */
    interface IGameRoomInfo {

        /** GameRoomInfo LoginMoney */
        LoginMoney: number;

        /** GameRoomInfo Flag */
        Flag: string;

        /** GameRoomInfo BaseScore */
        BaseScore: number;

        /** GameRoomInfo ServerStatus */
        ServerStatus?: (number|null);

        /** GameRoomInfo RoomDesc */
        RoomDesc?: (string|null);

        /** GameRoomInfo LoginMoneyMax */
        LoginMoneyMax?: (number|null);
    }

    /** Represents a GameRoomInfo. */
    class GameRoomInfo implements IGameRoomInfo {

        /**
         * Constructs a new GameRoomInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IGameRoomInfo);

        /** GameRoomInfo LoginMoney. */
        public LoginMoney: number;

        /** GameRoomInfo Flag. */
        public Flag: string;

        /** GameRoomInfo BaseScore. */
        public BaseScore: number;

        /** GameRoomInfo ServerStatus. */
        public ServerStatus: number;

        /** GameRoomInfo RoomDesc. */
        public RoomDesc: string;

        /** GameRoomInfo LoginMoneyMax. */
        public LoginMoneyMax: number;

        /**
         * Creates a new GameRoomInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameRoomInfo instance
         */
        public static create(properties?: netproto.IGameRoomInfo): netproto.GameRoomInfo;

        /**
         * Encodes the specified GameRoomInfo message. Does not implicitly {@link netproto.GameRoomInfo.verify|verify} messages.
         * @param message GameRoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGameRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameRoomInfo message, length delimited. Does not implicitly {@link netproto.GameRoomInfo.verify|verify} messages.
         * @param message GameRoomInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGameRoomInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameRoomInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GameRoomInfo;

        /**
         * Decodes a GameRoomInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GameRoomInfo;

        /**
         * Verifies a GameRoomInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameRoomInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameRoomInfo
         */
        public static fromObject(object: { [k: string]: any }): netproto.GameRoomInfo;

        /**
         * Creates a plain object from a GameRoomInfo message. Also converts values to other types if specified.
         * @param message GameRoomInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GameRoomInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameRoomInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserLanguageUpdateReq. */
    interface IUserLanguageUpdateReq {

        /** UserLanguageUpdateReq UserID */
        UserID: number;

        /** UserLanguageUpdateReq Language */
        Language: string;
    }

    /** Represents a UserLanguageUpdateReq. */
    class UserLanguageUpdateReq implements IUserLanguageUpdateReq {

        /**
         * Constructs a new UserLanguageUpdateReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IUserLanguageUpdateReq);

        /** UserLanguageUpdateReq UserID. */
        public UserID: number;

        /** UserLanguageUpdateReq Language. */
        public Language: string;

        /**
         * Creates a new UserLanguageUpdateReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserLanguageUpdateReq instance
         */
        public static create(properties?: netproto.IUserLanguageUpdateReq): netproto.UserLanguageUpdateReq;

        /**
         * Encodes the specified UserLanguageUpdateReq message. Does not implicitly {@link netproto.UserLanguageUpdateReq.verify|verify} messages.
         * @param message UserLanguageUpdateReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IUserLanguageUpdateReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserLanguageUpdateReq message, length delimited. Does not implicitly {@link netproto.UserLanguageUpdateReq.verify|verify} messages.
         * @param message UserLanguageUpdateReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IUserLanguageUpdateReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserLanguageUpdateReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserLanguageUpdateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.UserLanguageUpdateReq;

        /**
         * Decodes a UserLanguageUpdateReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserLanguageUpdateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.UserLanguageUpdateReq;

        /**
         * Verifies a UserLanguageUpdateReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserLanguageUpdateReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserLanguageUpdateReq
         */
        public static fromObject(object: { [k: string]: any }): netproto.UserLanguageUpdateReq;

        /**
         * Creates a plain object from a UserLanguageUpdateReq message. Also converts values to other types if specified.
         * @param message UserLanguageUpdateReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.UserLanguageUpdateReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserLanguageUpdateReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserLanguageUpdateRes. */
    interface IUserLanguageUpdateRes {

        /** UserLanguageUpdateRes Code */
        Code: number;

        /** UserLanguageUpdateRes Message */
        Message: string;
    }

    /** Represents a UserLanguageUpdateRes. */
    class UserLanguageUpdateRes implements IUserLanguageUpdateRes {

        /**
         * Constructs a new UserLanguageUpdateRes.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IUserLanguageUpdateRes);

        /** UserLanguageUpdateRes Code. */
        public Code: number;

        /** UserLanguageUpdateRes Message. */
        public Message: string;

        /**
         * Creates a new UserLanguageUpdateRes instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserLanguageUpdateRes instance
         */
        public static create(properties?: netproto.IUserLanguageUpdateRes): netproto.UserLanguageUpdateRes;

        /**
         * Encodes the specified UserLanguageUpdateRes message. Does not implicitly {@link netproto.UserLanguageUpdateRes.verify|verify} messages.
         * @param message UserLanguageUpdateRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IUserLanguageUpdateRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserLanguageUpdateRes message, length delimited. Does not implicitly {@link netproto.UserLanguageUpdateRes.verify|verify} messages.
         * @param message UserLanguageUpdateRes message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IUserLanguageUpdateRes, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserLanguageUpdateRes message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserLanguageUpdateRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.UserLanguageUpdateRes;

        /**
         * Decodes a UserLanguageUpdateRes message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserLanguageUpdateRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.UserLanguageUpdateRes;

        /**
         * Verifies a UserLanguageUpdateRes message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserLanguageUpdateRes message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserLanguageUpdateRes
         */
        public static fromObject(object: { [k: string]: any }): netproto.UserLanguageUpdateRes;

        /**
         * Creates a plain object from a UserLanguageUpdateRes message. Also converts values to other types if specified.
         * @param message UserLanguageUpdateRes
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.UserLanguageUpdateRes, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserLanguageUpdateRes to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AttrFocusSuccess. */
    interface IAttrFocusSuccess {

        /** AttrFocusSuccess UserID */
        UserID: number;

        /** AttrFocusSuccess Key */
        Key: string;

        /** AttrFocusSuccess TypeID */
        TypeID: number;
    }

    /** Represents an AttrFocusSuccess. */
    class AttrFocusSuccess implements IAttrFocusSuccess {

        /**
         * Constructs a new AttrFocusSuccess.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IAttrFocusSuccess);

        /** AttrFocusSuccess UserID. */
        public UserID: number;

        /** AttrFocusSuccess Key. */
        public Key: string;

        /** AttrFocusSuccess TypeID. */
        public TypeID: number;

        /**
         * Creates a new AttrFocusSuccess instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AttrFocusSuccess instance
         */
        public static create(properties?: netproto.IAttrFocusSuccess): netproto.AttrFocusSuccess;

        /**
         * Encodes the specified AttrFocusSuccess message. Does not implicitly {@link netproto.AttrFocusSuccess.verify|verify} messages.
         * @param message AttrFocusSuccess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IAttrFocusSuccess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AttrFocusSuccess message, length delimited. Does not implicitly {@link netproto.AttrFocusSuccess.verify|verify} messages.
         * @param message AttrFocusSuccess message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IAttrFocusSuccess, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AttrFocusSuccess message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AttrFocusSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.AttrFocusSuccess;

        /**
         * Decodes an AttrFocusSuccess message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AttrFocusSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.AttrFocusSuccess;

        /**
         * Verifies an AttrFocusSuccess message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AttrFocusSuccess message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AttrFocusSuccess
         */
        public static fromObject(object: { [k: string]: any }): netproto.AttrFocusSuccess;

        /**
         * Creates a plain object from an AttrFocusSuccess message. Also converts values to other types if specified.
         * @param message AttrFocusSuccess
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.AttrFocusSuccess, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AttrFocusSuccess to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** NotifyServerClassID enum. */
    enum NotifyServerClassID {
        ServerRegID = 1,
        AnnID = 2,
        AttrChangeID = 3,
        ServerStopID = 4,
        RefreshVersionID = 5,
        ServerStopWhiteIPListID = 6,
        RefreshGameVersionID = 7,
        GameStatusChangeID = 8,
        GameLockTraceChangeID = 9,
        VersionID = 10,
        JackpotID = 11
    }

    /** Properties of a NotifyServerRegInfo. */
    interface INotifyServerRegInfo {

        /** NotifyServerRegInfo ServerID */
        ServerID: number;

        /** NotifyServerRegInfo GameID */
        GameID?: (number|null);

        /** NotifyServerRegInfo ServerType */
        ServerType: number;

        /** NotifyServerRegInfo LianyunID */
        LianyunID?: (number|null);
    }

    /** Represents a NotifyServerRegInfo. */
    class NotifyServerRegInfo implements INotifyServerRegInfo {

        /**
         * Constructs a new NotifyServerRegInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.INotifyServerRegInfo);

        /** NotifyServerRegInfo ServerID. */
        public ServerID: number;

        /** NotifyServerRegInfo GameID. */
        public GameID: number;

        /** NotifyServerRegInfo ServerType. */
        public ServerType: number;

        /** NotifyServerRegInfo LianyunID. */
        public LianyunID: number;

        /**
         * Creates a new NotifyServerRegInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotifyServerRegInfo instance
         */
        public static create(properties?: netproto.INotifyServerRegInfo): netproto.NotifyServerRegInfo;

        /**
         * Encodes the specified NotifyServerRegInfo message. Does not implicitly {@link netproto.NotifyServerRegInfo.verify|verify} messages.
         * @param message NotifyServerRegInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.INotifyServerRegInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotifyServerRegInfo message, length delimited. Does not implicitly {@link netproto.NotifyServerRegInfo.verify|verify} messages.
         * @param message NotifyServerRegInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.INotifyServerRegInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotifyServerRegInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyServerRegInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.NotifyServerRegInfo;

        /**
         * Decodes a NotifyServerRegInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyServerRegInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.NotifyServerRegInfo;

        /**
         * Verifies a NotifyServerRegInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotifyServerRegInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotifyServerRegInfo
         */
        public static fromObject(object: { [k: string]: any }): netproto.NotifyServerRegInfo;

        /**
         * Creates a plain object from a NotifyServerRegInfo message. Also converts values to other types if specified.
         * @param message NotifyServerRegInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.NotifyServerRegInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotifyServerRegInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AnnInfo. */
    interface IAnnInfo {

        /** AnnInfo ID */
        ID: number;

        /** AnnInfo PlatformID */
        PlatformID: number;

        /** AnnInfo MsgContent */
        MsgContent: string;

        /** AnnInfo LianyunID */
        LianyunID?: (number|null);

        /** AnnInfo AnnType */
        AnnType?: (number|null);
    }

    /** Represents an AnnInfo. */
    class AnnInfo implements IAnnInfo {

        /**
         * Constructs a new AnnInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IAnnInfo);

        /** AnnInfo ID. */
        public ID: number;

        /** AnnInfo PlatformID. */
        public PlatformID: number;

        /** AnnInfo MsgContent. */
        public MsgContent: string;

        /** AnnInfo LianyunID. */
        public LianyunID: number;

        /** AnnInfo AnnType. */
        public AnnType: number;

        /**
         * Creates a new AnnInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnnInfo instance
         */
        public static create(properties?: netproto.IAnnInfo): netproto.AnnInfo;

        /**
         * Encodes the specified AnnInfo message. Does not implicitly {@link netproto.AnnInfo.verify|verify} messages.
         * @param message AnnInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IAnnInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnnInfo message, length delimited. Does not implicitly {@link netproto.AnnInfo.verify|verify} messages.
         * @param message AnnInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IAnnInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnnInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnnInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.AnnInfo;

        /**
         * Decodes an AnnInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnnInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.AnnInfo;

        /**
         * Verifies an AnnInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnnInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnnInfo
         */
        public static fromObject(object: { [k: string]: any }): netproto.AnnInfo;

        /**
         * Creates a plain object from an AnnInfo message. Also converts values to other types if specified.
         * @param message AnnInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.AnnInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnnInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AnnList. */
    interface IAnnList {

        /** AnnList Ann */
        Ann?: (netproto.IAnnInfo[]|null);

        /** AnnList Language */
        Language?: (string|null);
    }

    /** Represents an AnnList. */
    class AnnList implements IAnnList {

        /**
         * Constructs a new AnnList.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IAnnList);

        /** AnnList Ann. */
        public Ann: netproto.IAnnInfo[];

        /** AnnList Language. */
        public Language: string;

        /**
         * Creates a new AnnList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnnList instance
         */
        public static create(properties?: netproto.IAnnList): netproto.AnnList;

        /**
         * Encodes the specified AnnList message. Does not implicitly {@link netproto.AnnList.verify|verify} messages.
         * @param message AnnList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IAnnList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnnList message, length delimited. Does not implicitly {@link netproto.AnnList.verify|verify} messages.
         * @param message AnnList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IAnnList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnnList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnnList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.AnnList;

        /**
         * Decodes an AnnList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnnList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.AnnList;

        /**
         * Verifies an AnnList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AnnList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnnList
         */
        public static fromObject(object: { [k: string]: any }): netproto.AnnList;

        /**
         * Creates a plain object from an AnnList message. Also converts values to other types if specified.
         * @param message AnnList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.AnnList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnnList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AttrChange. */
    interface IAttrChange {

        /** AttrChange UserID */
        UserID: number;

        /** AttrChange TypeID */
        TypeID: number;

        /** AttrChange Param */
        Param?: (number|Long|null);

        /** AttrChange SParam */
        SParam?: (string|null);
    }

    /** Represents an AttrChange. */
    class AttrChange implements IAttrChange {

        /**
         * Constructs a new AttrChange.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IAttrChange);

        /** AttrChange UserID. */
        public UserID: number;

        /** AttrChange TypeID. */
        public TypeID: number;

        /** AttrChange Param. */
        public Param: (number|Long);

        /** AttrChange SParam. */
        public SParam: string;

        /**
         * Creates a new AttrChange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AttrChange instance
         */
        public static create(properties?: netproto.IAttrChange): netproto.AttrChange;

        /**
         * Encodes the specified AttrChange message. Does not implicitly {@link netproto.AttrChange.verify|verify} messages.
         * @param message AttrChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IAttrChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AttrChange message, length delimited. Does not implicitly {@link netproto.AttrChange.verify|verify} messages.
         * @param message AttrChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IAttrChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AttrChange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AttrChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.AttrChange;

        /**
         * Decodes an AttrChange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AttrChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.AttrChange;

        /**
         * Verifies an AttrChange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AttrChange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AttrChange
         */
        public static fromObject(object: { [k: string]: any }): netproto.AttrChange;

        /**
         * Creates a plain object from an AttrChange message. Also converts values to other types if specified.
         * @param message AttrChange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.AttrChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AttrChange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AttrChangeList. */
    interface IAttrChangeList {

        /** AttrChangeList Attrs */
        Attrs?: (netproto.IAttrChange[]|null);
    }

    /** Represents an AttrChangeList. */
    class AttrChangeList implements IAttrChangeList {

        /**
         * Constructs a new AttrChangeList.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IAttrChangeList);

        /** AttrChangeList Attrs. */
        public Attrs: netproto.IAttrChange[];

        /**
         * Creates a new AttrChangeList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AttrChangeList instance
         */
        public static create(properties?: netproto.IAttrChangeList): netproto.AttrChangeList;

        /**
         * Encodes the specified AttrChangeList message. Does not implicitly {@link netproto.AttrChangeList.verify|verify} messages.
         * @param message AttrChangeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IAttrChangeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AttrChangeList message, length delimited. Does not implicitly {@link netproto.AttrChangeList.verify|verify} messages.
         * @param message AttrChangeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IAttrChangeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AttrChangeList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AttrChangeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.AttrChangeList;

        /**
         * Decodes an AttrChangeList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AttrChangeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.AttrChangeList;

        /**
         * Verifies an AttrChangeList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AttrChangeList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AttrChangeList
         */
        public static fromObject(object: { [k: string]: any }): netproto.AttrChangeList;

        /**
         * Creates a plain object from an AttrChangeList message. Also converts values to other types if specified.
         * @param message AttrChangeList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.AttrChangeList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AttrChangeList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServerStop. */
    interface IServerStop {

        /** ServerStop Type */
        Type: number;

        /** ServerStop Status */
        Status: number;

        /** ServerStop GameID */
        GameID?: (number|null);

        /** ServerStop ServerID */
        ServerID?: (number|null);

        /** ServerStop Message */
        Message: string;

        /** ServerStop LianyunID */
        LianyunID?: (number|null);
    }

    /** Represents a ServerStop. */
    class ServerStop implements IServerStop {

        /**
         * Constructs a new ServerStop.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IServerStop);

        /** ServerStop Type. */
        public Type: number;

        /** ServerStop Status. */
        public Status: number;

        /** ServerStop GameID. */
        public GameID: number;

        /** ServerStop ServerID. */
        public ServerID: number;

        /** ServerStop Message. */
        public Message: string;

        /** ServerStop LianyunID. */
        public LianyunID: number;

        /**
         * Creates a new ServerStop instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerStop instance
         */
        public static create(properties?: netproto.IServerStop): netproto.ServerStop;

        /**
         * Encodes the specified ServerStop message. Does not implicitly {@link netproto.ServerStop.verify|verify} messages.
         * @param message ServerStop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IServerStop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerStop message, length delimited. Does not implicitly {@link netproto.ServerStop.verify|verify} messages.
         * @param message ServerStop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IServerStop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerStop message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.ServerStop;

        /**
         * Decodes a ServerStop message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.ServerStop;

        /**
         * Verifies a ServerStop message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerStop message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerStop
         */
        public static fromObject(object: { [k: string]: any }): netproto.ServerStop;

        /**
         * Creates a plain object from a ServerStop message. Also converts values to other types if specified.
         * @param message ServerStop
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.ServerStop, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerStop to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServerStopWhiteIPList. */
    interface IServerStopWhiteIPList {

        /** ServerStopWhiteIPList IP */
        IP?: (string[]|null);
    }

    /** Represents a ServerStopWhiteIPList. */
    class ServerStopWhiteIPList implements IServerStopWhiteIPList {

        /**
         * Constructs a new ServerStopWhiteIPList.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IServerStopWhiteIPList);

        /** ServerStopWhiteIPList IP. */
        public IP: string[];

        /**
         * Creates a new ServerStopWhiteIPList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerStopWhiteIPList instance
         */
        public static create(properties?: netproto.IServerStopWhiteIPList): netproto.ServerStopWhiteIPList;

        /**
         * Encodes the specified ServerStopWhiteIPList message. Does not implicitly {@link netproto.ServerStopWhiteIPList.verify|verify} messages.
         * @param message ServerStopWhiteIPList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IServerStopWhiteIPList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerStopWhiteIPList message, length delimited. Does not implicitly {@link netproto.ServerStopWhiteIPList.verify|verify} messages.
         * @param message ServerStopWhiteIPList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IServerStopWhiteIPList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerStopWhiteIPList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerStopWhiteIPList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.ServerStopWhiteIPList;

        /**
         * Decodes a ServerStopWhiteIPList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerStopWhiteIPList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.ServerStopWhiteIPList;

        /**
         * Verifies a ServerStopWhiteIPList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServerStopWhiteIPList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServerStopWhiteIPList
         */
        public static fromObject(object: { [k: string]: any }): netproto.ServerStopWhiteIPList;

        /**
         * Creates a plain object from a ServerStopWhiteIPList message. Also converts values to other types if specified.
         * @param message ServerStopWhiteIPList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.ServerStopWhiteIPList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServerStopWhiteIPList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SMSVCode. */
    interface ISMSVCode {

        /** SMSVCode CodeID */
        CodeID?: (number|null);

        /** SMSVCode Tel */
        Tel?: (string|null);

        /** SMSVCode VCode */
        VCode?: (string|null);
    }

    /** Represents a SMSVCode. */
    class SMSVCode implements ISMSVCode {

        /**
         * Constructs a new SMSVCode.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.ISMSVCode);

        /** SMSVCode CodeID. */
        public CodeID: number;

        /** SMSVCode Tel. */
        public Tel: string;

        /** SMSVCode VCode. */
        public VCode: string;

        /**
         * Creates a new SMSVCode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SMSVCode instance
         */
        public static create(properties?: netproto.ISMSVCode): netproto.SMSVCode;

        /**
         * Encodes the specified SMSVCode message. Does not implicitly {@link netproto.SMSVCode.verify|verify} messages.
         * @param message SMSVCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ISMSVCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SMSVCode message, length delimited. Does not implicitly {@link netproto.SMSVCode.verify|verify} messages.
         * @param message SMSVCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ISMSVCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SMSVCode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SMSVCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.SMSVCode;

        /**
         * Decodes a SMSVCode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SMSVCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.SMSVCode;

        /**
         * Verifies a SMSVCode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SMSVCode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SMSVCode
         */
        public static fromObject(object: { [k: string]: any }): netproto.SMSVCode;

        /**
         * Creates a plain object from a SMSVCode message. Also converts values to other types if specified.
         * @param message SMSVCode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.SMSVCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SMSVCode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SMSVCodeList. */
    interface ISMSVCodeList {

        /** SMSVCodeList Attrs */
        Attrs?: (netproto.ISMSVCode[]|null);
    }

    /** Represents a SMSVCodeList. */
    class SMSVCodeList implements ISMSVCodeList {

        /**
         * Constructs a new SMSVCodeList.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.ISMSVCodeList);

        /** SMSVCodeList Attrs. */
        public Attrs: netproto.ISMSVCode[];

        /**
         * Creates a new SMSVCodeList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SMSVCodeList instance
         */
        public static create(properties?: netproto.ISMSVCodeList): netproto.SMSVCodeList;

        /**
         * Encodes the specified SMSVCodeList message. Does not implicitly {@link netproto.SMSVCodeList.verify|verify} messages.
         * @param message SMSVCodeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.ISMSVCodeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SMSVCodeList message, length delimited. Does not implicitly {@link netproto.SMSVCodeList.verify|verify} messages.
         * @param message SMSVCodeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.ISMSVCodeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SMSVCodeList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SMSVCodeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.SMSVCodeList;

        /**
         * Decodes a SMSVCodeList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SMSVCodeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.SMSVCodeList;

        /**
         * Verifies a SMSVCodeList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SMSVCodeList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SMSVCodeList
         */
        public static fromObject(object: { [k: string]: any }): netproto.SMSVCodeList;

        /**
         * Creates a plain object from a SMSVCodeList message. Also converts values to other types if specified.
         * @param message SMSVCodeList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.SMSVCodeList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SMSVCodeList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NotifyGameStatus. */
    interface INotifyGameStatus {

        /** NotifyGameStatus ServerID */
        ServerID: number;

        /** NotifyGameStatus GameID */
        GameID?: (number|null);

        /** NotifyGameStatus ServerStatus */
        ServerStatus?: (number|null);

        /** NotifyGameStatus LianyunID */
        LianyunID?: (number|null);
    }

    /** Represents a NotifyGameStatus. */
    class NotifyGameStatus implements INotifyGameStatus {

        /**
         * Constructs a new NotifyGameStatus.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.INotifyGameStatus);

        /** NotifyGameStatus ServerID. */
        public ServerID: number;

        /** NotifyGameStatus GameID. */
        public GameID: number;

        /** NotifyGameStatus ServerStatus. */
        public ServerStatus: number;

        /** NotifyGameStatus LianyunID. */
        public LianyunID: number;

        /**
         * Creates a new NotifyGameStatus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NotifyGameStatus instance
         */
        public static create(properties?: netproto.INotifyGameStatus): netproto.NotifyGameStatus;

        /**
         * Encodes the specified NotifyGameStatus message. Does not implicitly {@link netproto.NotifyGameStatus.verify|verify} messages.
         * @param message NotifyGameStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.INotifyGameStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotifyGameStatus message, length delimited. Does not implicitly {@link netproto.NotifyGameStatus.verify|verify} messages.
         * @param message NotifyGameStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.INotifyGameStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotifyGameStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyGameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.NotifyGameStatus;

        /**
         * Decodes a NotifyGameStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyGameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.NotifyGameStatus;

        /**
         * Verifies a NotifyGameStatus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NotifyGameStatus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NotifyGameStatus
         */
        public static fromObject(object: { [k: string]: any }): netproto.NotifyGameStatus;

        /**
         * Creates a plain object from a NotifyGameStatus message. Also converts values to other types if specified.
         * @param message NotifyGameStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.NotifyGameStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NotifyGameStatus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameLockTraceChange. */
    interface IGameLockTraceChange {

        /** GameLockTraceChange SuperUserID */
        SuperUserID: number;

        /** GameLockTraceChange TraceUserID */
        TraceUserID: number;
    }

    /** Represents a GameLockTraceChange. */
    class GameLockTraceChange implements IGameLockTraceChange {

        /**
         * Constructs a new GameLockTraceChange.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IGameLockTraceChange);

        /** GameLockTraceChange SuperUserID. */
        public SuperUserID: number;

        /** GameLockTraceChange TraceUserID. */
        public TraceUserID: number;

        /**
         * Creates a new GameLockTraceChange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameLockTraceChange instance
         */
        public static create(properties?: netproto.IGameLockTraceChange): netproto.GameLockTraceChange;

        /**
         * Encodes the specified GameLockTraceChange message. Does not implicitly {@link netproto.GameLockTraceChange.verify|verify} messages.
         * @param message GameLockTraceChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGameLockTraceChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameLockTraceChange message, length delimited. Does not implicitly {@link netproto.GameLockTraceChange.verify|verify} messages.
         * @param message GameLockTraceChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGameLockTraceChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameLockTraceChange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameLockTraceChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GameLockTraceChange;

        /**
         * Decodes a GameLockTraceChange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameLockTraceChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GameLockTraceChange;

        /**
         * Verifies a GameLockTraceChange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameLockTraceChange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameLockTraceChange
         */
        public static fromObject(object: { [k: string]: any }): netproto.GameLockTraceChange;

        /**
         * Creates a plain object from a GameLockTraceChange message. Also converts values to other types if specified.
         * @param message GameLockTraceChange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GameLockTraceChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameLockTraceChange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameLockTraceChangeList. */
    interface IGameLockTraceChangeList {

        /** GameLockTraceChangeList TraceChange */
        TraceChange?: (netproto.IGameLockTraceChange[]|null);
    }

    /** Represents a GameLockTraceChangeList. */
    class GameLockTraceChangeList implements IGameLockTraceChangeList {

        /**
         * Constructs a new GameLockTraceChangeList.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IGameLockTraceChangeList);

        /** GameLockTraceChangeList TraceChange. */
        public TraceChange: netproto.IGameLockTraceChange[];

        /**
         * Creates a new GameLockTraceChangeList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameLockTraceChangeList instance
         */
        public static create(properties?: netproto.IGameLockTraceChangeList): netproto.GameLockTraceChangeList;

        /**
         * Encodes the specified GameLockTraceChangeList message. Does not implicitly {@link netproto.GameLockTraceChangeList.verify|verify} messages.
         * @param message GameLockTraceChangeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGameLockTraceChangeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameLockTraceChangeList message, length delimited. Does not implicitly {@link netproto.GameLockTraceChangeList.verify|verify} messages.
         * @param message GameLockTraceChangeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGameLockTraceChangeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameLockTraceChangeList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameLockTraceChangeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GameLockTraceChangeList;

        /**
         * Decodes a GameLockTraceChangeList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameLockTraceChangeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GameLockTraceChangeList;

        /**
         * Verifies a GameLockTraceChangeList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameLockTraceChangeList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameLockTraceChangeList
         */
        public static fromObject(object: { [k: string]: any }): netproto.GameLockTraceChangeList;

        /**
         * Creates a plain object from a GameLockTraceChangeList message. Also converts values to other types if specified.
         * @param message GameLockTraceChangeList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GameLockTraceChangeList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameLockTraceChangeList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VersionInfo. */
    interface IVersionInfo {

        /** VersionInfo ID */
        ID: number;

        /** VersionInfo BunldID */
        BunldID: string;

        /** VersionInfo Ver */
        Ver: string;

        /** VersionInfo Path */
        Path: string;

        /** VersionInfo Ver1 */
        Ver1: string;

        /** VersionInfo Platform */
        Platform?: (string|null);

        /** VersionInfo Channel */
        Channel?: (string|null);

        /** VersionInfo SkinVer */
        SkinVer: string;

        /** VersionInfo LimitIP */
        LimitIP?: (string|null);
    }

    /** Represents a VersionInfo. */
    class VersionInfo implements IVersionInfo {

        /**
         * Constructs a new VersionInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IVersionInfo);

        /** VersionInfo ID. */
        public ID: number;

        /** VersionInfo BunldID. */
        public BunldID: string;

        /** VersionInfo Ver. */
        public Ver: string;

        /** VersionInfo Path. */
        public Path: string;

        /** VersionInfo Ver1. */
        public Ver1: string;

        /** VersionInfo Platform. */
        public Platform: string;

        /** VersionInfo Channel. */
        public Channel: string;

        /** VersionInfo SkinVer. */
        public SkinVer: string;

        /** VersionInfo LimitIP. */
        public LimitIP: string;

        /**
         * Creates a new VersionInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionInfo instance
         */
        public static create(properties?: netproto.IVersionInfo): netproto.VersionInfo;

        /**
         * Encodes the specified VersionInfo message. Does not implicitly {@link netproto.VersionInfo.verify|verify} messages.
         * @param message VersionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IVersionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionInfo message, length delimited. Does not implicitly {@link netproto.VersionInfo.verify|verify} messages.
         * @param message VersionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IVersionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.VersionInfo;

        /**
         * Decodes a VersionInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.VersionInfo;

        /**
         * Verifies a VersionInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VersionInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VersionInfo
         */
        public static fromObject(object: { [k: string]: any }): netproto.VersionInfo;

        /**
         * Creates a plain object from a VersionInfo message. Also converts values to other types if specified.
         * @param message VersionInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.VersionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VersionList. */
    interface IVersionList {

        /** VersionList Ver */
        Ver?: (netproto.IVersionInfo[]|null);
    }

    /** Represents a VersionList. */
    class VersionList implements IVersionList {

        /**
         * Constructs a new VersionList.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IVersionList);

        /** VersionList Ver. */
        public Ver: netproto.IVersionInfo[];

        /**
         * Creates a new VersionList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionList instance
         */
        public static create(properties?: netproto.IVersionList): netproto.VersionList;

        /**
         * Encodes the specified VersionList message. Does not implicitly {@link netproto.VersionList.verify|verify} messages.
         * @param message VersionList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IVersionList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionList message, length delimited. Does not implicitly {@link netproto.VersionList.verify|verify} messages.
         * @param message VersionList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IVersionList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.VersionList;

        /**
         * Decodes a VersionList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.VersionList;

        /**
         * Verifies a VersionList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VersionList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VersionList
         */
        public static fromObject(object: { [k: string]: any }): netproto.VersionList;

        /**
         * Creates a plain object from a VersionList message. Also converts values to other types if specified.
         * @param message VersionList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.VersionList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JackpotList. */
    interface IJackpotList {

        /** JackpotList GameJackpots */
        GameJackpots?: (netproto.IGameJackpot[]|null);

        /** JackpotList UpdateTime */
        UpdateTime: number;
    }

    /** Represents a JackpotList. */
    class JackpotList implements IJackpotList {

        /**
         * Constructs a new JackpotList.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IJackpotList);

        /** JackpotList GameJackpots. */
        public GameJackpots: netproto.IGameJackpot[];

        /** JackpotList UpdateTime. */
        public UpdateTime: number;

        /**
         * Creates a new JackpotList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JackpotList instance
         */
        public static create(properties?: netproto.IJackpotList): netproto.JackpotList;

        /**
         * Encodes the specified JackpotList message. Does not implicitly {@link netproto.JackpotList.verify|verify} messages.
         * @param message JackpotList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IJackpotList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JackpotList message, length delimited. Does not implicitly {@link netproto.JackpotList.verify|verify} messages.
         * @param message JackpotList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IJackpotList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JackpotList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JackpotList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.JackpotList;

        /**
         * Decodes a JackpotList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JackpotList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.JackpotList;

        /**
         * Verifies a JackpotList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JackpotList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JackpotList
         */
        public static fromObject(object: { [k: string]: any }): netproto.JackpotList;

        /**
         * Creates a plain object from a JackpotList message. Also converts values to other types if specified.
         * @param message JackpotList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.JackpotList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JackpotList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameJackpot. */
    interface IGameJackpot {

        /** GameJackpot GameID */
        GameID: number;

        /** GameJackpot JackpotTotol */
        JackpotTotol: netproto.IJackpotInfo;

        /** GameJackpot RoomJackpots */
        RoomJackpots?: (netproto.IGameRoomJackpot[]|null);
    }

    /** Represents a GameJackpot. */
    class GameJackpot implements IGameJackpot {

        /**
         * Constructs a new GameJackpot.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IGameJackpot);

        /** GameJackpot GameID. */
        public GameID: number;

        /** GameJackpot JackpotTotol. */
        public JackpotTotol: netproto.IJackpotInfo;

        /** GameJackpot RoomJackpots. */
        public RoomJackpots: netproto.IGameRoomJackpot[];

        /**
         * Creates a new GameJackpot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameJackpot instance
         */
        public static create(properties?: netproto.IGameJackpot): netproto.GameJackpot;

        /**
         * Encodes the specified GameJackpot message. Does not implicitly {@link netproto.GameJackpot.verify|verify} messages.
         * @param message GameJackpot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGameJackpot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameJackpot message, length delimited. Does not implicitly {@link netproto.GameJackpot.verify|verify} messages.
         * @param message GameJackpot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGameJackpot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameJackpot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GameJackpot;

        /**
         * Decodes a GameJackpot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GameJackpot;

        /**
         * Verifies a GameJackpot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameJackpot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameJackpot
         */
        public static fromObject(object: { [k: string]: any }): netproto.GameJackpot;

        /**
         * Creates a plain object from a GameJackpot message. Also converts values to other types if specified.
         * @param message GameJackpot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GameJackpot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameJackpot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameRoomJackpot. */
    interface IGameRoomJackpot {

        /** GameRoomJackpot Flag */
        Flag: string;

        /** GameRoomJackpot Jackpot */
        Jackpot: netproto.IJackpotInfo;
    }

    /** Represents a GameRoomJackpot. */
    class GameRoomJackpot implements IGameRoomJackpot {

        /**
         * Constructs a new GameRoomJackpot.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IGameRoomJackpot);

        /** GameRoomJackpot Flag. */
        public Flag: string;

        /** GameRoomJackpot Jackpot. */
        public Jackpot: netproto.IJackpotInfo;

        /**
         * Creates a new GameRoomJackpot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameRoomJackpot instance
         */
        public static create(properties?: netproto.IGameRoomJackpot): netproto.GameRoomJackpot;

        /**
         * Encodes the specified GameRoomJackpot message. Does not implicitly {@link netproto.GameRoomJackpot.verify|verify} messages.
         * @param message GameRoomJackpot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IGameRoomJackpot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameRoomJackpot message, length delimited. Does not implicitly {@link netproto.GameRoomJackpot.verify|verify} messages.
         * @param message GameRoomJackpot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IGameRoomJackpot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameRoomJackpot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameRoomJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.GameRoomJackpot;

        /**
         * Decodes a GameRoomJackpot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameRoomJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.GameRoomJackpot;

        /**
         * Verifies a GameRoomJackpot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GameRoomJackpot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GameRoomJackpot
         */
        public static fromObject(object: { [k: string]: any }): netproto.GameRoomJackpot;

        /**
         * Creates a plain object from a GameRoomJackpot message. Also converts values to other types if specified.
         * @param message GameRoomJackpot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.GameRoomJackpot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameRoomJackpot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JackpotInfo. */
    interface IJackpotInfo {

        /** JackpotInfo JackpotPool */
        JackpotPool: (number|Long);

        /** JackpotInfo JackpotAddValue */
        JackpotAddValue: (number|Long);
    }

    /** Represents a JackpotInfo. */
    class JackpotInfo implements IJackpotInfo {

        /**
         * Constructs a new JackpotInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: netproto.IJackpotInfo);

        /** JackpotInfo JackpotPool. */
        public JackpotPool: (number|Long);

        /** JackpotInfo JackpotAddValue. */
        public JackpotAddValue: (number|Long);

        /**
         * Creates a new JackpotInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JackpotInfo instance
         */
        public static create(properties?: netproto.IJackpotInfo): netproto.JackpotInfo;

        /**
         * Encodes the specified JackpotInfo message. Does not implicitly {@link netproto.JackpotInfo.verify|verify} messages.
         * @param message JackpotInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: netproto.IJackpotInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JackpotInfo message, length delimited. Does not implicitly {@link netproto.JackpotInfo.verify|verify} messages.
         * @param message JackpotInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: netproto.IJackpotInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JackpotInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JackpotInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): netproto.JackpotInfo;

        /**
         * Decodes a JackpotInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JackpotInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): netproto.JackpotInfo;

        /**
         * Verifies a JackpotInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JackpotInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JackpotInfo
         */
        public static fromObject(object: { [k: string]: any }): netproto.JackpotInfo;

        /**
         * Creates a plain object from a JackpotInfo message. Also converts values to other types if specified.
         * @param message JackpotInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: netproto.JackpotInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JackpotInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
