import * as $protobuf from "protobufjs";
/** Namespace common. */
export namespace common {

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
        constructor(properties?: common.IRetMessage);

        /** RetMessage Code. */
        public Code: number;

        /** RetMessage Message. */
        public Message: string;

        /**
         * Creates a new RetMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RetMessage instance
         */
        public static create(properties?: common.IRetMessage): common.RetMessage;

        /**
         * Encodes the specified RetMessage message. Does not implicitly {@link common.RetMessage.verify|verify} messages.
         * @param message RetMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IRetMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RetMessage message, length delimited. Does not implicitly {@link common.RetMessage.verify|verify} messages.
         * @param message RetMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IRetMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RetMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RetMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.RetMessage;

        /**
         * Decodes a RetMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RetMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.RetMessage;

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
        public static fromObject(object: { [k: string]: any }): common.RetMessage;

        /**
         * Creates a plain object from a RetMessage message. Also converts values to other types if specified.
         * @param message RetMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.RetMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    }

    /** Represents a RPCInfo. */
    class RPCInfo implements IRPCInfo {

        /**
         * Constructs a new RPCInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IRPCInfo);

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

        /**
         * Creates a new RPCInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RPCInfo instance
         */
        public static create(properties?: common.IRPCInfo): common.RPCInfo;

        /**
         * Encodes the specified RPCInfo message. Does not implicitly {@link common.RPCInfo.verify|verify} messages.
         * @param message RPCInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IRPCInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RPCInfo message, length delimited. Does not implicitly {@link common.RPCInfo.verify|verify} messages.
         * @param message RPCInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IRPCInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RPCInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RPCInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.RPCInfo;

        /**
         * Decodes a RPCInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RPCInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.RPCInfo;

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
        public static fromObject(object: { [k: string]: any }): common.RPCInfo;

        /**
         * Creates a plain object from a RPCInfo message. Also converts values to other types if specified.
         * @param message RPCInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.RPCInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: common.ITipMessage);

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
        public static create(properties?: common.ITipMessage): common.TipMessage;

        /**
         * Encodes the specified TipMessage message. Does not implicitly {@link common.TipMessage.verify|verify} messages.
         * @param message TipMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.ITipMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TipMessage message, length delimited. Does not implicitly {@link common.TipMessage.verify|verify} messages.
         * @param message TipMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.ITipMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TipMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TipMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.TipMessage;

        /**
         * Decodes a TipMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TipMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.TipMessage;

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
        public static fromObject(object: { [k: string]: any }): common.TipMessage;

        /**
         * Creates a plain object from a TipMessage message. Also converts values to other types if specified.
         * @param message TipMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.TipMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: common.IHeartBeatConfig);

        /** HeartBeatConfig BeatInterval. */
        public BeatInterval: number;

        /** HeartBeatConfig ConnLoseTimeSpan. */
        public ConnLoseTimeSpan: number;

        /**
         * Creates a new HeartBeatConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HeartBeatConfig instance
         */
        public static create(properties?: common.IHeartBeatConfig): common.HeartBeatConfig;

        /**
         * Encodes the specified HeartBeatConfig message. Does not implicitly {@link common.HeartBeatConfig.verify|verify} messages.
         * @param message HeartBeatConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IHeartBeatConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HeartBeatConfig message, length delimited. Does not implicitly {@link common.HeartBeatConfig.verify|verify} messages.
         * @param message HeartBeatConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IHeartBeatConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeartBeatConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HeartBeatConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.HeartBeatConfig;

        /**
         * Decodes a HeartBeatConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HeartBeatConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.HeartBeatConfig;

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
        public static fromObject(object: { [k: string]: any }): common.HeartBeatConfig;

        /**
         * Creates a plain object from a HeartBeatConfig message. Also converts values to other types if specified.
         * @param message HeartBeatConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.HeartBeatConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: common.IIPReport);

        /** IPReport IPAddress. */
        public IPAddress: string;

        /**
         * Creates a new IPReport instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IPReport instance
         */
        public static create(properties?: common.IIPReport): common.IPReport;

        /**
         * Encodes the specified IPReport message. Does not implicitly {@link common.IPReport.verify|verify} messages.
         * @param message IPReport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IIPReport, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IPReport message, length delimited. Does not implicitly {@link common.IPReport.verify|verify} messages.
         * @param message IPReport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IIPReport, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a IPReport message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IPReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.IPReport;

        /**
         * Decodes a IPReport message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IPReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.IPReport;

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
        public static fromObject(object: { [k: string]: any }): common.IPReport;

        /**
         * Creates a plain object from a IPReport message. Also converts values to other types if specified.
         * @param message IPReport
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.IPReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IPReport to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
