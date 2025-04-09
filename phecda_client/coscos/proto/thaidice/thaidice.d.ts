// DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace carsh. */
export namespace carsh {

    /** Carsh_GameMessageClassID enum. */
    enum Carsh_GameMessageClassID {
        CarshSceneNtfID = 10001,
        CarshBetNtfID = 10002,
        CarshStartNtfID = 10003,
        CarshEndNtfID = 10004,
        CarshBetRankReqID = 10005,
        CarshBetRankAckID = 10006,
        CarshBetReqID = 10007,
        CarshBetAckID = 10008,
        CarshOutReqID = 10009,
        CarshOutAckID = 10010,
        CarshAutoOutReqID = 10011,
        CarshAutoOutAckID = 10012
    }

    /** Carsh_State enum. */
    enum Carsh_State {
        Carsh_Bet = 1,
        Carsh_Start = 2,
        Carsh_End = 3
    }

    /** Carsh_Error enum. */
    enum Carsh_Error {
        Code_Success = 0,
        Code_State = 1,
        Code_BetGold = 2,
        Code_AlreadyBet = 3
    }

    /** Properties of a Carsh_SceneNtf. */
    interface ICarsh_SceneNtf {

        /** Carsh_SceneNtf State */
        State?: (carsh.Carsh_State|null);

        /** Carsh_SceneNtf StateRemain */
        StateRemain?: (number|Long|null);

        /** Carsh_SceneNtf BetChip */
        BetChip?: ((number|Long)[]|null);

        /** Carsh_SceneNtf MulConf */
        MulConf?: (carsh.Carsh_SceneNtf.IMulItem[]|null);

        /** Carsh_SceneNtf BetTime */
        BetTime?: (number|null);

        /** Carsh_SceneNtf BetCount */
        BetCount?: (number|Long|null);

        /** Carsh_SceneNtf AutoCarshOut */
        AutoCarshOut?: (number|null);

        /** Carsh_SceneNtf MaxRecordCount */
        MaxRecordCount?: (number|null);

        /** Carsh_SceneNtf Record */
        Record?: (number[]|null);

        /** Carsh_SceneNtf OnlineCount */
        OnlineCount?: (number|null);

        /** Carsh_SceneNtf RankInfo */
        RankInfo?: (carsh.ICarsh_BetRankAck|null);
    }

    /** Represents a Carsh_SceneNtf. */
    class Carsh_SceneNtf implements ICarsh_SceneNtf {

        /**
         * Constructs a new Carsh_SceneNtf.
         * @param [properties] Properties to set
         */
        constructor(properties?: carsh.ICarsh_SceneNtf);

        /** Carsh_SceneNtf State. */
        public State: carsh.Carsh_State;

        /** Carsh_SceneNtf StateRemain. */
        public StateRemain: (number|Long);

        /** Carsh_SceneNtf BetChip. */
        public BetChip: (number|Long)[];

        /** Carsh_SceneNtf MulConf. */
        public MulConf: carsh.Carsh_SceneNtf.IMulItem[];

        /** Carsh_SceneNtf BetTime. */
        public BetTime: number;

        /** Carsh_SceneNtf BetCount. */
        public BetCount: (number|Long);

        /** Carsh_SceneNtf AutoCarshOut. */
        public AutoCarshOut: number;

        /** Carsh_SceneNtf MaxRecordCount. */
        public MaxRecordCount: number;

        /** Carsh_SceneNtf Record. */
        public Record: number[];

        /** Carsh_SceneNtf OnlineCount. */
        public OnlineCount: number;

        /** Carsh_SceneNtf RankInfo. */
        public RankInfo?: (carsh.ICarsh_BetRankAck|null);

        /**
         * Creates a new Carsh_SceneNtf instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Carsh_SceneNtf instance
         */
        public static create(properties?: carsh.ICarsh_SceneNtf): carsh.Carsh_SceneNtf;

        /**
         * Encodes the specified Carsh_SceneNtf message. Does not implicitly {@link carsh.Carsh_SceneNtf.verify|verify} messages.
         * @param message Carsh_SceneNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: carsh.ICarsh_SceneNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Carsh_SceneNtf message, length delimited. Does not implicitly {@link carsh.Carsh_SceneNtf.verify|verify} messages.
         * @param message Carsh_SceneNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: carsh.ICarsh_SceneNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Carsh_SceneNtf message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Carsh_SceneNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): carsh.Carsh_SceneNtf;

        /**
         * Decodes a Carsh_SceneNtf message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Carsh_SceneNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): carsh.Carsh_SceneNtf;

        /**
         * Verifies a Carsh_SceneNtf message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Carsh_SceneNtf message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Carsh_SceneNtf
         */
        public static fromObject(object: { [k: string]: any }): carsh.Carsh_SceneNtf;

        /**
         * Creates a plain object from a Carsh_SceneNtf message. Also converts values to other types if specified.
         * @param message Carsh_SceneNtf
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: carsh.Carsh_SceneNtf, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Carsh_SceneNtf to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Carsh_SceneNtf {

        /** Properties of a MulItem. */
        interface IMulItem {

            /** MulItem SecondMul */
            SecondMul?: (number|null);

            /** MulItem MilliSecond */
            MilliSecond?: (number|null);
        }

        /** Represents a MulItem. */
        class MulItem implements IMulItem {

            /**
             * Constructs a new MulItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: carsh.Carsh_SceneNtf.IMulItem);

            /** MulItem SecondMul. */
            public SecondMul: number;

            /** MulItem MilliSecond. */
            public MilliSecond: number;

            /**
             * Creates a new MulItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MulItem instance
             */
            public static create(properties?: carsh.Carsh_SceneNtf.IMulItem): carsh.Carsh_SceneNtf.MulItem;

            /**
             * Encodes the specified MulItem message. Does not implicitly {@link carsh.Carsh_SceneNtf.MulItem.verify|verify} messages.
             * @param message MulItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: carsh.Carsh_SceneNtf.IMulItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MulItem message, length delimited. Does not implicitly {@link carsh.Carsh_SceneNtf.MulItem.verify|verify} messages.
             * @param message MulItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: carsh.Carsh_SceneNtf.IMulItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MulItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MulItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): carsh.Carsh_SceneNtf.MulItem;

            /**
             * Decodes a MulItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MulItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): carsh.Carsh_SceneNtf.MulItem;

            /**
             * Verifies a MulItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MulItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MulItem
             */
            public static fromObject(object: { [k: string]: any }): carsh.Carsh_SceneNtf.MulItem;

            /**
             * Creates a plain object from a MulItem message. Also converts values to other types if specified.
             * @param message MulItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: carsh.Carsh_SceneNtf.MulItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MulItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a Carsh_BetNtf. */
    interface ICarsh_BetNtf {

        /** Carsh_BetNtf OnlineCount */
        OnlineCount?: (number|null);
    }

    /** Represents a Carsh_BetNtf. */
    class Carsh_BetNtf implements ICarsh_BetNtf {

        /**
         * Constructs a new Carsh_BetNtf.
         * @param [properties] Properties to set
         */
        constructor(properties?: carsh.ICarsh_BetNtf);

        /** Carsh_BetNtf OnlineCount. */
        public OnlineCount: number;

        /**
         * Creates a new Carsh_BetNtf instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Carsh_BetNtf instance
         */
        public static create(properties?: carsh.ICarsh_BetNtf): carsh.Carsh_BetNtf;

        /**
         * Encodes the specified Carsh_BetNtf message. Does not implicitly {@link carsh.Carsh_BetNtf.verify|verify} messages.
         * @param message Carsh_BetNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: carsh.ICarsh_BetNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Carsh_BetNtf message, length delimited. Does not implicitly {@link carsh.Carsh_BetNtf.verify|verify} messages.
         * @param message Carsh_BetNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: carsh.ICarsh_BetNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Carsh_BetNtf message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Carsh_BetNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): carsh.Carsh_BetNtf;

        /**
         * Decodes a Carsh_BetNtf message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Carsh_BetNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): carsh.Carsh_BetNtf;

        /**
         * Verifies a Carsh_BetNtf message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Carsh_BetNtf message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Carsh_BetNtf
         */
        public static fromObject(object: { [k: string]: any }): carsh.Carsh_BetNtf;

        /**
         * Creates a plain object from a Carsh_BetNtf message. Also converts values to other types if specified.
         * @param message Carsh_BetNtf
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: carsh.Carsh_BetNtf, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Carsh_BetNtf to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Carsh_StartNtf. */
    interface ICarsh_StartNtf {

        /** Carsh_StartNtf EndMul */
        EndMul?: (number|null);

        /** Carsh_StartNtf AddMul */
        AddMul?: (number|null);

        /** Carsh_StartNtf StartTime */
        StartTime?: (number|Long|null);

        /** Carsh_StartNtf RobotOutList */
        RobotOutList?: (carsh.Carsh_StartNtf.IRobotOutItem[]|null);
    }

    /** Represents a Carsh_StartNtf. */
    class Carsh_StartNtf implements ICarsh_StartNtf {

        /**
         * Constructs a new Carsh_StartNtf.
         * @param [properties] Properties to set
         */
        constructor(properties?: carsh.ICarsh_StartNtf);

        /** Carsh_StartNtf EndMul. */
        public EndMul: number;

        /** Carsh_StartNtf AddMul. */
        public AddMul: number;

        /** Carsh_StartNtf StartTime. */
        public StartTime: (number|Long);

        /** Carsh_StartNtf RobotOutList. */
        public RobotOutList: carsh.Carsh_StartNtf.IRobotOutItem[];

        /**
         * Creates a new Carsh_StartNtf instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Carsh_StartNtf instance
         */
        public static create(properties?: carsh.ICarsh_StartNtf): carsh.Carsh_StartNtf;

        /**
         * Encodes the specified Carsh_StartNtf message. Does not implicitly {@link carsh.Carsh_StartNtf.verify|verify} messages.
         * @param message Carsh_StartNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: carsh.ICarsh_StartNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Carsh_StartNtf message, length delimited. Does not implicitly {@link carsh.Carsh_StartNtf.verify|verify} messages.
         * @param message Carsh_StartNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: carsh.ICarsh_StartNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Carsh_StartNtf message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Carsh_StartNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): carsh.Carsh_StartNtf;

        /**
         * Decodes a Carsh_StartNtf message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Carsh_StartNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): carsh.Carsh_StartNtf;

        /**
         * Verifies a Carsh_StartNtf message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Carsh_StartNtf message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Carsh_StartNtf
         */
        public static fromObject(object: { [k: string]: any }): carsh.Carsh_StartNtf;

        /**
         * Creates a plain object from a Carsh_StartNtf message. Also converts values to other types if specified.
         * @param message Carsh_StartNtf
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: carsh.Carsh_StartNtf, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Carsh_StartNtf to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Carsh_StartNtf {

        /** Properties of a RobotOutItem. */
        interface IRobotOutItem {

            /** RobotOutItem Name */
            Name?: (string|null);

            /** RobotOutItem OutMul */
            OutMul?: (number|null);

            /** RobotOutItem IsAuto */
            IsAuto?: (boolean|null);
        }

        /** Represents a RobotOutItem. */
        class RobotOutItem implements IRobotOutItem {

            /**
             * Constructs a new RobotOutItem.
             * @param [properties] Properties to set
             */
            constructor(properties?: carsh.Carsh_StartNtf.IRobotOutItem);

            /** RobotOutItem Name. */
            public Name: string;

            /** RobotOutItem OutMul. */
            public OutMul: number;

            /** RobotOutItem IsAuto. */
            public IsAuto: boolean;

            /**
             * Creates a new RobotOutItem instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RobotOutItem instance
             */
            public static create(properties?: carsh.Carsh_StartNtf.IRobotOutItem): carsh.Carsh_StartNtf.RobotOutItem;

            /**
             * Encodes the specified RobotOutItem message. Does not implicitly {@link carsh.Carsh_StartNtf.RobotOutItem.verify|verify} messages.
             * @param message RobotOutItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: carsh.Carsh_StartNtf.IRobotOutItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RobotOutItem message, length delimited. Does not implicitly {@link carsh.Carsh_StartNtf.RobotOutItem.verify|verify} messages.
             * @param message RobotOutItem message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: carsh.Carsh_StartNtf.IRobotOutItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RobotOutItem message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RobotOutItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): carsh.Carsh_StartNtf.RobotOutItem;

            /**
             * Decodes a RobotOutItem message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RobotOutItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): carsh.Carsh_StartNtf.RobotOutItem;

            /**
             * Verifies a RobotOutItem message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RobotOutItem message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RobotOutItem
             */
            public static fromObject(object: { [k: string]: any }): carsh.Carsh_StartNtf.RobotOutItem;

            /**
             * Creates a plain object from a RobotOutItem message. Also converts values to other types if specified.
             * @param message RobotOutItem
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: carsh.Carsh_StartNtf.RobotOutItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RobotOutItem to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a Carsh_ModMulNtf. */
    interface ICarsh_ModMulNtf {

        /** Carsh_ModMulNtf EndMul */
        EndMul?: (number|null);
    }

    /** Represents a Carsh_ModMulNtf. */
    class Carsh_ModMulNtf implements ICarsh_ModMulNtf {

        /**
         * Constructs a new Carsh_ModMulNtf.
         * @param [properties] Properties to set
         */
        constructor(properties?: carsh.ICarsh_ModMulNtf);

        /** Carsh_ModMulNtf EndMul. */
        public EndMul: number;

        /**
         * Creates a new Carsh_ModMulNtf instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Carsh_ModMulNtf instance
         */
        public static create(properties?: carsh.ICarsh_ModMulNtf): carsh.Carsh_ModMulNtf;

        /**
         * Encodes the specified Carsh_ModMulNtf message. Does not implicitly {@link carsh.Carsh_ModMulNtf.verify|verify} messages.
         * @param message Carsh_ModMulNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: carsh.ICarsh_ModMulNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Carsh_ModMulNtf message, length delimited. Does not implicitly {@link carsh.Carsh_ModMulNtf.verify|verify} messages.
         * @param message Carsh_ModMulNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: carsh.ICarsh_ModMulNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Carsh_ModMulNtf message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Carsh_ModMulNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): carsh.Carsh_ModMulNtf;

        /**
         * Decodes a Carsh_ModMulNtf message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Carsh_ModMulNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): carsh.Carsh_ModMulNtf;

        /**
         * Verifies a Carsh_ModMulNtf message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Carsh_ModMulNtf message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Carsh_ModMulNtf
         */
        public static fromObject(object: { [k: string]: any }): carsh.Carsh_ModMulNtf;

        /**
         * Creates a plain object from a Carsh_ModMulNtf message. Also converts values to other types if specified.
         * @param message Carsh_ModMulNtf
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: carsh.Carsh_ModMulNtf, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Carsh_ModMulNtf to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Carsh_EndNtf. */
    interface ICarsh_EndNtf {

        /** Carsh_EndNtf LoseWin */
        LoseWin?: (number|Long|null);
    }

    /** Represents a Carsh_EndNtf. */
    class Carsh_EndNtf implements ICarsh_EndNtf {

        /**
         * Constructs a new Carsh_EndNtf.
         * @param [properties] Properties to set
         */
        constructor(properties?: carsh.ICarsh_EndNtf);

        /** Carsh_EndNtf LoseWin. */
        public LoseWin: (number|Long);

        /**
         * Creates a new Carsh_EndNtf instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Carsh_EndNtf instance
         */
        public static create(properties?: carsh.ICarsh_EndNtf): carsh.Carsh_EndNtf;

        /**
         * Encodes the specified Carsh_EndNtf message. Does not implicitly {@link carsh.Carsh_EndNtf.verify|verify} messages.
         * @param message Carsh_EndNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: carsh.ICarsh_EndNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Carsh_EndNtf message, length delimited. Does not implicitly {@link carsh.Carsh_EndNtf.verify|verify} messages.
         * @param message Carsh_EndNtf message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: carsh.ICarsh_EndNtf, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Carsh_EndNtf message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Carsh_EndNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): carsh.Carsh_EndNtf;

        /**
         * Decodes a Carsh_EndNtf message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Carsh_EndNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): carsh.Carsh_EndNtf;

        /**
         * Verifies a Carsh_EndNtf message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Carsh_EndNtf message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Carsh_EndNtf
         */
        public static fromObject(object: { [k: string]: any }): carsh.Carsh_EndNtf;

        /**
         * Creates a plain object from a Carsh_EndNtf message. Also converts values to other types if specified.
         * @param message Carsh_EndNtf
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: carsh.Carsh_EndNtf, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Carsh_EndNtf to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Carsh_BetRankReq. */
    interface ICarsh_BetRankReq {
    }

    /** Represents a Carsh_BetRankReq. */
    class Carsh_BetRankReq implements ICarsh_BetRankReq {

        /**
         * Constructs a new Carsh_BetRankReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: carsh.ICarsh_BetRankReq);

        /**
         * Creates a new Carsh_BetRankReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Carsh_BetRankReq instance
         */
        public static create(properties?: carsh.ICarsh_BetRankReq): carsh.Carsh_BetRankReq;

        /**
         * Encodes the specified Carsh_BetRankReq message. Does not implicitly {@link carsh.Carsh_BetRankReq.verify|verify} messages.
         * @param message Carsh_BetRankReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: carsh.ICarsh_BetRankReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Carsh_BetRankReq message, length delimited. Does not implicitly {@link carsh.Carsh_BetRankReq.verify|verify} messages.
         * @param message Carsh_BetRankReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: carsh.ICarsh_BetRankReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Carsh_BetRankReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Carsh_BetRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): carsh.Carsh_BetRankReq;

        /**
         * Decodes a Carsh_BetRankReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Carsh_BetRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): carsh.Carsh_BetRankReq;

        /**
         * Verifies a Carsh_BetRankReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Carsh_BetRankReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Carsh_BetRankReq
         */
        public static fromObject(object: { [k: string]: any }): carsh.Carsh_BetRankReq;

        /**
         * Creates a plain object from a Carsh_BetRankReq message. Also converts values to other types if specified.
         * @param message Carsh_BetRankReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: carsh.Carsh_BetRankReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Carsh_BetRankReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Carsh_BetRankAck. */
    interface ICarsh_BetRankAck {

        /** Carsh_BetRankAck TotalBet */
        TotalBet?: (number|Long|null);

        /** Carsh_BetRankAck RankList */
        RankList?: (carsh.Carsh_BetRankAck.IItem[]|null);
    }

    /** Represents a Carsh_BetRankAck. */
    class Carsh_BetRankAck implements ICarsh_BetRankAck {

        /**
         * Constructs a new Carsh_BetRankAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: carsh.ICarsh_BetRankAck);

        /** Carsh_BetRankAck TotalBet. */
        public TotalBet: (number|Long);

        /** Carsh_BetRankAck RankList. */
        public RankList: carsh.Carsh_BetRankAck.IItem[];

        /**
         * Creates a new Carsh_BetRankAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Carsh_BetRankAck instance
         */
        public static create(properties?: carsh.ICarsh_BetRankAck): carsh.Carsh_BetRankAck;

        /**
         * Encodes the specified Carsh_BetRankAck message. Does not implicitly {@link carsh.Carsh_BetRankAck.verify|verify} messages.
         * @param message Carsh_BetRankAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: carsh.ICarsh_BetRankAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Carsh_BetRankAck message, length delimited. Does not implicitly {@link carsh.Carsh_BetRankAck.verify|verify} messages.
         * @param message Carsh_BetRankAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: carsh.ICarsh_BetRankAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Carsh_BetRankAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Carsh_BetRankAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): carsh.Carsh_BetRankAck;

        /**
         * Decodes a Carsh_BetRankAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Carsh_BetRankAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): carsh.Carsh_BetRankAck;

        /**
         * Verifies a Carsh_BetRankAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Carsh_BetRankAck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Carsh_BetRankAck
         */
        public static fromObject(object: { [k: string]: any }): carsh.Carsh_BetRankAck;

        /**
         * Creates a plain object from a Carsh_BetRankAck message. Also converts values to other types if specified.
         * @param message Carsh_BetRankAck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: carsh.Carsh_BetRankAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Carsh_BetRankAck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Carsh_BetRankAck {

        /** Properties of an Item. */
        interface IItem {

            /** Item Name */
            Name?: (string|null);

            /** Item BetNum */
            BetNum?: (number|Long|null);
        }

        /** Represents an Item. */
        class Item implements IItem {

            /**
             * Constructs a new Item.
             * @param [properties] Properties to set
             */
            constructor(properties?: carsh.Carsh_BetRankAck.IItem);

            /** Item Name. */
            public Name: string;

            /** Item BetNum. */
            public BetNum: (number|Long);

            /**
             * Creates a new Item instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Item instance
             */
            public static create(properties?: carsh.Carsh_BetRankAck.IItem): carsh.Carsh_BetRankAck.Item;

            /**
             * Encodes the specified Item message. Does not implicitly {@link carsh.Carsh_BetRankAck.Item.verify|verify} messages.
             * @param message Item message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: carsh.Carsh_BetRankAck.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Item message, length delimited. Does not implicitly {@link carsh.Carsh_BetRankAck.Item.verify|verify} messages.
             * @param message Item message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: carsh.Carsh_BetRankAck.IItem, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Item message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): carsh.Carsh_BetRankAck.Item;

            /**
             * Decodes an Item message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): carsh.Carsh_BetRankAck.Item;

            /**
             * Verifies an Item message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Item message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Item
             */
            public static fromObject(object: { [k: string]: any }): carsh.Carsh_BetRankAck.Item;

            /**
             * Creates a plain object from an Item message. Also converts values to other types if specified.
             * @param message Item
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: carsh.Carsh_BetRankAck.Item, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Item to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a Carsh_BetReq. */
    interface ICarsh_BetReq {

        /** Carsh_BetReq BetNum */
        BetNum?: (number|Long|null);
    }

    /** Represents a Carsh_BetReq. */
    class Carsh_BetReq implements ICarsh_BetReq {

        /**
         * Constructs a new Carsh_BetReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: carsh.ICarsh_BetReq);

        /** Carsh_BetReq BetNum. */
        public BetNum: (number|Long);

        /**
         * Creates a new Carsh_BetReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Carsh_BetReq instance
         */
        public static create(properties?: carsh.ICarsh_BetReq): carsh.Carsh_BetReq;

        /**
         * Encodes the specified Carsh_BetReq message. Does not implicitly {@link carsh.Carsh_BetReq.verify|verify} messages.
         * @param message Carsh_BetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: carsh.ICarsh_BetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Carsh_BetReq message, length delimited. Does not implicitly {@link carsh.Carsh_BetReq.verify|verify} messages.
         * @param message Carsh_BetReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: carsh.ICarsh_BetReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Carsh_BetReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Carsh_BetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): carsh.Carsh_BetReq;

        /**
         * Decodes a Carsh_BetReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Carsh_BetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): carsh.Carsh_BetReq;

        /**
         * Verifies a Carsh_BetReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Carsh_BetReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Carsh_BetReq
         */
        public static fromObject(object: { [k: string]: any }): carsh.Carsh_BetReq;

        /**
         * Creates a plain object from a Carsh_BetReq message. Also converts values to other types if specified.
         * @param message Carsh_BetReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: carsh.Carsh_BetReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Carsh_BetReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Carsh_BetAck. */
    interface ICarsh_BetAck {

        /** Carsh_BetAck Code */
        Code?: (carsh.Carsh_Error|null);

        /** Carsh_BetAck TotalBet */
        TotalBet?: (number|Long|null);
    }

    /** Represents a Carsh_BetAck. */
    class Carsh_BetAck implements ICarsh_BetAck {

        /**
         * Constructs a new Carsh_BetAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: carsh.ICarsh_BetAck);

        /** Carsh_BetAck Code. */
        public Code: carsh.Carsh_Error;

        /** Carsh_BetAck TotalBet. */
        public TotalBet: (number|Long);

        /**
         * Creates a new Carsh_BetAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Carsh_BetAck instance
         */
        public static create(properties?: carsh.ICarsh_BetAck): carsh.Carsh_BetAck;

        /**
         * Encodes the specified Carsh_BetAck message. Does not implicitly {@link carsh.Carsh_BetAck.verify|verify} messages.
         * @param message Carsh_BetAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: carsh.ICarsh_BetAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Carsh_BetAck message, length delimited. Does not implicitly {@link carsh.Carsh_BetAck.verify|verify} messages.
         * @param message Carsh_BetAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: carsh.ICarsh_BetAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Carsh_BetAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Carsh_BetAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): carsh.Carsh_BetAck;

        /**
         * Decodes a Carsh_BetAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Carsh_BetAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): carsh.Carsh_BetAck;

        /**
         * Verifies a Carsh_BetAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Carsh_BetAck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Carsh_BetAck
         */
        public static fromObject(object: { [k: string]: any }): carsh.Carsh_BetAck;

        /**
         * Creates a plain object from a Carsh_BetAck message. Also converts values to other types if specified.
         * @param message Carsh_BetAck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: carsh.Carsh_BetAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Carsh_BetAck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Carsh_OutReq. */
    interface ICarsh_OutReq {

        /** Carsh_OutReq OutTime */
        OutTime?: (number|Long|null);
    }

    /** Represents a Carsh_OutReq. */
    class Carsh_OutReq implements ICarsh_OutReq {

        /**
         * Constructs a new Carsh_OutReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: carsh.ICarsh_OutReq);

        /** Carsh_OutReq OutTime. */
        public OutTime: (number|Long);

        /**
         * Creates a new Carsh_OutReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Carsh_OutReq instance
         */
        public static create(properties?: carsh.ICarsh_OutReq): carsh.Carsh_OutReq;

        /**
         * Encodes the specified Carsh_OutReq message. Does not implicitly {@link carsh.Carsh_OutReq.verify|verify} messages.
         * @param message Carsh_OutReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: carsh.ICarsh_OutReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Carsh_OutReq message, length delimited. Does not implicitly {@link carsh.Carsh_OutReq.verify|verify} messages.
         * @param message Carsh_OutReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: carsh.ICarsh_OutReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Carsh_OutReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Carsh_OutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): carsh.Carsh_OutReq;

        /**
         * Decodes a Carsh_OutReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Carsh_OutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): carsh.Carsh_OutReq;

        /**
         * Verifies a Carsh_OutReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Carsh_OutReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Carsh_OutReq
         */
        public static fromObject(object: { [k: string]: any }): carsh.Carsh_OutReq;

        /**
         * Creates a plain object from a Carsh_OutReq message. Also converts values to other types if specified.
         * @param message Carsh_OutReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: carsh.Carsh_OutReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Carsh_OutReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Carsh_OutAck. */
    interface ICarsh_OutAck {

        /** Carsh_OutAck Code */
        Code?: (carsh.Carsh_Error|null);

        /** Carsh_OutAck OutMul */
        OutMul?: (number|null);

        /** Carsh_OutAck IsAuto */
        IsAuto?: (boolean|null);
    }

    /** Represents a Carsh_OutAck. */
    class Carsh_OutAck implements ICarsh_OutAck {

        /**
         * Constructs a new Carsh_OutAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: carsh.ICarsh_OutAck);

        /** Carsh_OutAck Code. */
        public Code: carsh.Carsh_Error;

        /** Carsh_OutAck OutMul. */
        public OutMul: number;

        /** Carsh_OutAck IsAuto. */
        public IsAuto: boolean;

        /**
         * Creates a new Carsh_OutAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Carsh_OutAck instance
         */
        public static create(properties?: carsh.ICarsh_OutAck): carsh.Carsh_OutAck;

        /**
         * Encodes the specified Carsh_OutAck message. Does not implicitly {@link carsh.Carsh_OutAck.verify|verify} messages.
         * @param message Carsh_OutAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: carsh.ICarsh_OutAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Carsh_OutAck message, length delimited. Does not implicitly {@link carsh.Carsh_OutAck.verify|verify} messages.
         * @param message Carsh_OutAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: carsh.ICarsh_OutAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Carsh_OutAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Carsh_OutAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): carsh.Carsh_OutAck;

        /**
         * Decodes a Carsh_OutAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Carsh_OutAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): carsh.Carsh_OutAck;

        /**
         * Verifies a Carsh_OutAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Carsh_OutAck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Carsh_OutAck
         */
        public static fromObject(object: { [k: string]: any }): carsh.Carsh_OutAck;

        /**
         * Creates a plain object from a Carsh_OutAck message. Also converts values to other types if specified.
         * @param message Carsh_OutAck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: carsh.Carsh_OutAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Carsh_OutAck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Carsh_AutoOutReq. */
    interface ICarsh_AutoOutReq {

        /** Carsh_AutoOutReq OutMul */
        OutMul?: (number|null);
    }

    /** Represents a Carsh_AutoOutReq. */
    class Carsh_AutoOutReq implements ICarsh_AutoOutReq {

        /**
         * Constructs a new Carsh_AutoOutReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: carsh.ICarsh_AutoOutReq);

        /** Carsh_AutoOutReq OutMul. */
        public OutMul: number;

        /**
         * Creates a new Carsh_AutoOutReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Carsh_AutoOutReq instance
         */
        public static create(properties?: carsh.ICarsh_AutoOutReq): carsh.Carsh_AutoOutReq;

        /**
         * Encodes the specified Carsh_AutoOutReq message. Does not implicitly {@link carsh.Carsh_AutoOutReq.verify|verify} messages.
         * @param message Carsh_AutoOutReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: carsh.ICarsh_AutoOutReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Carsh_AutoOutReq message, length delimited. Does not implicitly {@link carsh.Carsh_AutoOutReq.verify|verify} messages.
         * @param message Carsh_AutoOutReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: carsh.ICarsh_AutoOutReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Carsh_AutoOutReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Carsh_AutoOutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): carsh.Carsh_AutoOutReq;

        /**
         * Decodes a Carsh_AutoOutReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Carsh_AutoOutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): carsh.Carsh_AutoOutReq;

        /**
         * Verifies a Carsh_AutoOutReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Carsh_AutoOutReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Carsh_AutoOutReq
         */
        public static fromObject(object: { [k: string]: any }): carsh.Carsh_AutoOutReq;

        /**
         * Creates a plain object from a Carsh_AutoOutReq message. Also converts values to other types if specified.
         * @param message Carsh_AutoOutReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: carsh.Carsh_AutoOutReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Carsh_AutoOutReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Carsh_AutoOutAck. */
    interface ICarsh_AutoOutAck {

        /** Carsh_AutoOutAck Code */
        Code?: (carsh.Carsh_Error|null);
    }

    /** Represents a Carsh_AutoOutAck. */
    class Carsh_AutoOutAck implements ICarsh_AutoOutAck {

        /**
         * Constructs a new Carsh_AutoOutAck.
         * @param [properties] Properties to set
         */
        constructor(properties?: carsh.ICarsh_AutoOutAck);

        /** Carsh_AutoOutAck Code. */
        public Code: carsh.Carsh_Error;

        /**
         * Creates a new Carsh_AutoOutAck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Carsh_AutoOutAck instance
         */
        public static create(properties?: carsh.ICarsh_AutoOutAck): carsh.Carsh_AutoOutAck;

        /**
         * Encodes the specified Carsh_AutoOutAck message. Does not implicitly {@link carsh.Carsh_AutoOutAck.verify|verify} messages.
         * @param message Carsh_AutoOutAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: carsh.ICarsh_AutoOutAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Carsh_AutoOutAck message, length delimited. Does not implicitly {@link carsh.Carsh_AutoOutAck.verify|verify} messages.
         * @param message Carsh_AutoOutAck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: carsh.ICarsh_AutoOutAck, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Carsh_AutoOutAck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Carsh_AutoOutAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): carsh.Carsh_AutoOutAck;

        /**
         * Decodes a Carsh_AutoOutAck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Carsh_AutoOutAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): carsh.Carsh_AutoOutAck;

        /**
         * Verifies a Carsh_AutoOutAck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Carsh_AutoOutAck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Carsh_AutoOutAck
         */
        public static fromObject(object: { [k: string]: any }): carsh.Carsh_AutoOutAck;

        /**
         * Creates a plain object from a Carsh_AutoOutAck message. Also converts values to other types if specified.
         * @param message Carsh_AutoOutAck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: carsh.Carsh_AutoOutAck, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Carsh_AutoOutAck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
