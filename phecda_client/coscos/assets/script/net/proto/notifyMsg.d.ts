import * as $protobuf from "protobufjs";
/** Namespace notify. */
export namespace notify {

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
        constructor(properties?: notify.INotifyServerRegInfo);

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
        public static create(properties?: notify.INotifyServerRegInfo): notify.NotifyServerRegInfo;

        /**
         * Encodes the specified NotifyServerRegInfo message. Does not implicitly {@link notify.NotifyServerRegInfo.verify|verify} messages.
         * @param message NotifyServerRegInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: notify.INotifyServerRegInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotifyServerRegInfo message, length delimited. Does not implicitly {@link notify.NotifyServerRegInfo.verify|verify} messages.
         * @param message NotifyServerRegInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: notify.INotifyServerRegInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotifyServerRegInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyServerRegInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notify.NotifyServerRegInfo;

        /**
         * Decodes a NotifyServerRegInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyServerRegInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notify.NotifyServerRegInfo;

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
        public static fromObject(object: { [k: string]: any }): notify.NotifyServerRegInfo;

        /**
         * Creates a plain object from a NotifyServerRegInfo message. Also converts values to other types if specified.
         * @param message NotifyServerRegInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: notify.NotifyServerRegInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
    }

    /** Represents an AnnInfo. */
    class AnnInfo implements IAnnInfo {

        /**
         * Constructs a new AnnInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: notify.IAnnInfo);

        /** AnnInfo ID. */
        public ID: number;

        /** AnnInfo PlatformID. */
        public PlatformID: number;

        /** AnnInfo MsgContent. */
        public MsgContent: string;

        /** AnnInfo LianyunID. */
        public LianyunID: number;

        /**
         * Creates a new AnnInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnnInfo instance
         */
        public static create(properties?: notify.IAnnInfo): notify.AnnInfo;

        /**
         * Encodes the specified AnnInfo message. Does not implicitly {@link notify.AnnInfo.verify|verify} messages.
         * @param message AnnInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: notify.IAnnInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnnInfo message, length delimited. Does not implicitly {@link notify.AnnInfo.verify|verify} messages.
         * @param message AnnInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: notify.IAnnInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnnInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnnInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notify.AnnInfo;

        /**
         * Decodes an AnnInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnnInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notify.AnnInfo;

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
        public static fromObject(object: { [k: string]: any }): notify.AnnInfo;

        /**
         * Creates a plain object from an AnnInfo message. Also converts values to other types if specified.
         * @param message AnnInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: notify.AnnInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnnInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AnnList. */
    interface IAnnList {

        /** AnnList Ann */
        Ann?: (notify.IAnnInfo[]|null);
    }

    /** Represents an AnnList. */
    class AnnList implements IAnnList {

        /**
         * Constructs a new AnnList.
         * @param [properties] Properties to set
         */
        constructor(properties?: notify.IAnnList);

        /** AnnList Ann. */
        public Ann: notify.IAnnInfo[];

        /**
         * Creates a new AnnList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnnList instance
         */
        public static create(properties?: notify.IAnnList): notify.AnnList;

        /**
         * Encodes the specified AnnList message. Does not implicitly {@link notify.AnnList.verify|verify} messages.
         * @param message AnnList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: notify.IAnnList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnnList message, length delimited. Does not implicitly {@link notify.AnnList.verify|verify} messages.
         * @param message AnnList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: notify.IAnnList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnnList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnnList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notify.AnnList;

        /**
         * Decodes an AnnList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnnList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notify.AnnList;

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
        public static fromObject(object: { [k: string]: any }): notify.AnnList;

        /**
         * Creates a plain object from an AnnList message. Also converts values to other types if specified.
         * @param message AnnList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: notify.AnnList, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: notify.IAttrChange);

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
        public static create(properties?: notify.IAttrChange): notify.AttrChange;

        /**
         * Encodes the specified AttrChange message. Does not implicitly {@link notify.AttrChange.verify|verify} messages.
         * @param message AttrChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: notify.IAttrChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AttrChange message, length delimited. Does not implicitly {@link notify.AttrChange.verify|verify} messages.
         * @param message AttrChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: notify.IAttrChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AttrChange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AttrChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notify.AttrChange;

        /**
         * Decodes an AttrChange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AttrChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notify.AttrChange;

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
        public static fromObject(object: { [k: string]: any }): notify.AttrChange;

        /**
         * Creates a plain object from an AttrChange message. Also converts values to other types if specified.
         * @param message AttrChange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: notify.AttrChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AttrChange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AttrChangeList. */
    interface IAttrChangeList {

        /** AttrChangeList Attrs */
        Attrs?: (notify.IAttrChange[]|null);
    }

    /** Represents an AttrChangeList. */
    class AttrChangeList implements IAttrChangeList {

        /**
         * Constructs a new AttrChangeList.
         * @param [properties] Properties to set
         */
        constructor(properties?: notify.IAttrChangeList);

        /** AttrChangeList Attrs. */
        public Attrs: notify.IAttrChange[];

        /**
         * Creates a new AttrChangeList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AttrChangeList instance
         */
        public static create(properties?: notify.IAttrChangeList): notify.AttrChangeList;

        /**
         * Encodes the specified AttrChangeList message. Does not implicitly {@link notify.AttrChangeList.verify|verify} messages.
         * @param message AttrChangeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: notify.IAttrChangeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AttrChangeList message, length delimited. Does not implicitly {@link notify.AttrChangeList.verify|verify} messages.
         * @param message AttrChangeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: notify.IAttrChangeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AttrChangeList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AttrChangeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notify.AttrChangeList;

        /**
         * Decodes an AttrChangeList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AttrChangeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notify.AttrChangeList;

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
        public static fromObject(object: { [k: string]: any }): notify.AttrChangeList;

        /**
         * Creates a plain object from an AttrChangeList message. Also converts values to other types if specified.
         * @param message AttrChangeList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: notify.AttrChangeList, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: notify.IServerStop);

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
        public static create(properties?: notify.IServerStop): notify.ServerStop;

        /**
         * Encodes the specified ServerStop message. Does not implicitly {@link notify.ServerStop.verify|verify} messages.
         * @param message ServerStop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: notify.IServerStop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerStop message, length delimited. Does not implicitly {@link notify.ServerStop.verify|verify} messages.
         * @param message ServerStop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: notify.IServerStop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerStop message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notify.ServerStop;

        /**
         * Decodes a ServerStop message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notify.ServerStop;

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
        public static fromObject(object: { [k: string]: any }): notify.ServerStop;

        /**
         * Creates a plain object from a ServerStop message. Also converts values to other types if specified.
         * @param message ServerStop
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: notify.ServerStop, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: notify.IServerStopWhiteIPList);

        /** ServerStopWhiteIPList IP. */
        public IP: string[];

        /**
         * Creates a new ServerStopWhiteIPList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServerStopWhiteIPList instance
         */
        public static create(properties?: notify.IServerStopWhiteIPList): notify.ServerStopWhiteIPList;

        /**
         * Encodes the specified ServerStopWhiteIPList message. Does not implicitly {@link notify.ServerStopWhiteIPList.verify|verify} messages.
         * @param message ServerStopWhiteIPList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: notify.IServerStopWhiteIPList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServerStopWhiteIPList message, length delimited. Does not implicitly {@link notify.ServerStopWhiteIPList.verify|verify} messages.
         * @param message ServerStopWhiteIPList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: notify.IServerStopWhiteIPList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServerStopWhiteIPList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServerStopWhiteIPList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notify.ServerStopWhiteIPList;

        /**
         * Decodes a ServerStopWhiteIPList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServerStopWhiteIPList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notify.ServerStopWhiteIPList;

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
        public static fromObject(object: { [k: string]: any }): notify.ServerStopWhiteIPList;

        /**
         * Creates a plain object from a ServerStopWhiteIPList message. Also converts values to other types if specified.
         * @param message ServerStopWhiteIPList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: notify.ServerStopWhiteIPList, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: notify.ISMSVCode);

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
        public static create(properties?: notify.ISMSVCode): notify.SMSVCode;

        /**
         * Encodes the specified SMSVCode message. Does not implicitly {@link notify.SMSVCode.verify|verify} messages.
         * @param message SMSVCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: notify.ISMSVCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SMSVCode message, length delimited. Does not implicitly {@link notify.SMSVCode.verify|verify} messages.
         * @param message SMSVCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: notify.ISMSVCode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SMSVCode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SMSVCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notify.SMSVCode;

        /**
         * Decodes a SMSVCode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SMSVCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notify.SMSVCode;

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
        public static fromObject(object: { [k: string]: any }): notify.SMSVCode;

        /**
         * Creates a plain object from a SMSVCode message. Also converts values to other types if specified.
         * @param message SMSVCode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: notify.SMSVCode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SMSVCode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SMSVCodeList. */
    interface ISMSVCodeList {

        /** SMSVCodeList Attrs */
        Attrs?: (notify.ISMSVCode[]|null);
    }

    /** Represents a SMSVCodeList. */
    class SMSVCodeList implements ISMSVCodeList {

        /**
         * Constructs a new SMSVCodeList.
         * @param [properties] Properties to set
         */
        constructor(properties?: notify.ISMSVCodeList);

        /** SMSVCodeList Attrs. */
        public Attrs: notify.ISMSVCode[];

        /**
         * Creates a new SMSVCodeList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SMSVCodeList instance
         */
        public static create(properties?: notify.ISMSVCodeList): notify.SMSVCodeList;

        /**
         * Encodes the specified SMSVCodeList message. Does not implicitly {@link notify.SMSVCodeList.verify|verify} messages.
         * @param message SMSVCodeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: notify.ISMSVCodeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SMSVCodeList message, length delimited. Does not implicitly {@link notify.SMSVCodeList.verify|verify} messages.
         * @param message SMSVCodeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: notify.ISMSVCodeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SMSVCodeList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SMSVCodeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notify.SMSVCodeList;

        /**
         * Decodes a SMSVCodeList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SMSVCodeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notify.SMSVCodeList;

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
        public static fromObject(object: { [k: string]: any }): notify.SMSVCodeList;

        /**
         * Creates a plain object from a SMSVCodeList message. Also converts values to other types if specified.
         * @param message SMSVCodeList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: notify.SMSVCodeList, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: notify.INotifyGameStatus);

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
        public static create(properties?: notify.INotifyGameStatus): notify.NotifyGameStatus;

        /**
         * Encodes the specified NotifyGameStatus message. Does not implicitly {@link notify.NotifyGameStatus.verify|verify} messages.
         * @param message NotifyGameStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: notify.INotifyGameStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NotifyGameStatus message, length delimited. Does not implicitly {@link notify.NotifyGameStatus.verify|verify} messages.
         * @param message NotifyGameStatus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: notify.INotifyGameStatus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NotifyGameStatus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NotifyGameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notify.NotifyGameStatus;

        /**
         * Decodes a NotifyGameStatus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NotifyGameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notify.NotifyGameStatus;

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
        public static fromObject(object: { [k: string]: any }): notify.NotifyGameStatus;

        /**
         * Creates a plain object from a NotifyGameStatus message. Also converts values to other types if specified.
         * @param message NotifyGameStatus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: notify.NotifyGameStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: notify.IGameLockTraceChange);

        /** GameLockTraceChange SuperUserID. */
        public SuperUserID: number;

        /** GameLockTraceChange TraceUserID. */
        public TraceUserID: number;

        /**
         * Creates a new GameLockTraceChange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameLockTraceChange instance
         */
        public static create(properties?: notify.IGameLockTraceChange): notify.GameLockTraceChange;

        /**
         * Encodes the specified GameLockTraceChange message. Does not implicitly {@link notify.GameLockTraceChange.verify|verify} messages.
         * @param message GameLockTraceChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: notify.IGameLockTraceChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameLockTraceChange message, length delimited. Does not implicitly {@link notify.GameLockTraceChange.verify|verify} messages.
         * @param message GameLockTraceChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: notify.IGameLockTraceChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameLockTraceChange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameLockTraceChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notify.GameLockTraceChange;

        /**
         * Decodes a GameLockTraceChange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameLockTraceChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notify.GameLockTraceChange;

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
        public static fromObject(object: { [k: string]: any }): notify.GameLockTraceChange;

        /**
         * Creates a plain object from a GameLockTraceChange message. Also converts values to other types if specified.
         * @param message GameLockTraceChange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: notify.GameLockTraceChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GameLockTraceChange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GameLockTraceChangeList. */
    interface IGameLockTraceChangeList {

        /** GameLockTraceChangeList TraceChange */
        TraceChange?: (notify.IGameLockTraceChange[]|null);
    }

    /** Represents a GameLockTraceChangeList. */
    class GameLockTraceChangeList implements IGameLockTraceChangeList {

        /**
         * Constructs a new GameLockTraceChangeList.
         * @param [properties] Properties to set
         */
        constructor(properties?: notify.IGameLockTraceChangeList);

        /** GameLockTraceChangeList TraceChange. */
        public TraceChange: notify.IGameLockTraceChange[];

        /**
         * Creates a new GameLockTraceChangeList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GameLockTraceChangeList instance
         */
        public static create(properties?: notify.IGameLockTraceChangeList): notify.GameLockTraceChangeList;

        /**
         * Encodes the specified GameLockTraceChangeList message. Does not implicitly {@link notify.GameLockTraceChangeList.verify|verify} messages.
         * @param message GameLockTraceChangeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: notify.IGameLockTraceChangeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GameLockTraceChangeList message, length delimited. Does not implicitly {@link notify.GameLockTraceChangeList.verify|verify} messages.
         * @param message GameLockTraceChangeList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: notify.IGameLockTraceChangeList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GameLockTraceChangeList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GameLockTraceChangeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notify.GameLockTraceChangeList;

        /**
         * Decodes a GameLockTraceChangeList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GameLockTraceChangeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notify.GameLockTraceChangeList;

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
        public static fromObject(object: { [k: string]: any }): notify.GameLockTraceChangeList;

        /**
         * Creates a plain object from a GameLockTraceChangeList message. Also converts values to other types if specified.
         * @param message GameLockTraceChangeList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: notify.GameLockTraceChangeList, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        constructor(properties?: notify.IVersionInfo);

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
        public static create(properties?: notify.IVersionInfo): notify.VersionInfo;

        /**
         * Encodes the specified VersionInfo message. Does not implicitly {@link notify.VersionInfo.verify|verify} messages.
         * @param message VersionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: notify.IVersionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionInfo message, length delimited. Does not implicitly {@link notify.VersionInfo.verify|verify} messages.
         * @param message VersionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: notify.IVersionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notify.VersionInfo;

        /**
         * Decodes a VersionInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notify.VersionInfo;

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
        public static fromObject(object: { [k: string]: any }): notify.VersionInfo;

        /**
         * Creates a plain object from a VersionInfo message. Also converts values to other types if specified.
         * @param message VersionInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: notify.VersionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VersionList. */
    interface IVersionList {

        /** VersionList Ver */
        Ver?: (notify.IVersionInfo[]|null);
    }

    /** Represents a VersionList. */
    class VersionList implements IVersionList {

        /**
         * Constructs a new VersionList.
         * @param [properties] Properties to set
         */
        constructor(properties?: notify.IVersionList);

        /** VersionList Ver. */
        public Ver: notify.IVersionInfo[];

        /**
         * Creates a new VersionList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VersionList instance
         */
        public static create(properties?: notify.IVersionList): notify.VersionList;

        /**
         * Encodes the specified VersionList message. Does not implicitly {@link notify.VersionList.verify|verify} messages.
         * @param message VersionList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: notify.IVersionList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VersionList message, length delimited. Does not implicitly {@link notify.VersionList.verify|verify} messages.
         * @param message VersionList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: notify.IVersionList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VersionList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VersionList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): notify.VersionList;

        /**
         * Decodes a VersionList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VersionList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): notify.VersionList;

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
        public static fromObject(object: { [k: string]: any }): notify.VersionList;

        /**
         * Creates a plain object from a VersionList message. Also converts values to other types if specified.
         * @param message VersionList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: notify.VersionList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VersionList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
