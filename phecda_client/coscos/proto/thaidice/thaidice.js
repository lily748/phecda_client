/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.carsh = (function() {

    /**
     * Namespace carsh.
     * @exports carsh
     * @namespace
     */
    var carsh = {};

    /**
     * Carsh_GameMessageClassID enum.
     * @name carsh.Carsh_GameMessageClassID
     * @enum {number}
     * @property {number} CarshSceneNtfID=10001 CarshSceneNtfID value
     * @property {number} CarshBetNtfID=10002 CarshBetNtfID value
     * @property {number} CarshStartNtfID=10003 CarshStartNtfID value
     * @property {number} CarshEndNtfID=10004 CarshEndNtfID value
     * @property {number} CarshBetRankReqID=10005 CarshBetRankReqID value
     * @property {number} CarshBetRankAckID=10006 CarshBetRankAckID value
     * @property {number} CarshBetReqID=10007 CarshBetReqID value
     * @property {number} CarshBetAckID=10008 CarshBetAckID value
     * @property {number} CarshOutReqID=10009 CarshOutReqID value
     * @property {number} CarshOutAckID=10010 CarshOutAckID value
     * @property {number} CarshAutoOutReqID=10011 CarshAutoOutReqID value
     * @property {number} CarshAutoOutAckID=10012 CarshAutoOutAckID value
     */
    carsh.Carsh_GameMessageClassID = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[10001] = "CarshSceneNtfID"] = 10001;
        values[valuesById[10002] = "CarshBetNtfID"] = 10002;
        values[valuesById[10003] = "CarshStartNtfID"] = 10003;
        values[valuesById[10004] = "CarshEndNtfID"] = 10004;
        values[valuesById[10005] = "CarshBetRankReqID"] = 10005;
        values[valuesById[10006] = "CarshBetRankAckID"] = 10006;
        values[valuesById[10007] = "CarshBetReqID"] = 10007;
        values[valuesById[10008] = "CarshBetAckID"] = 10008;
        values[valuesById[10009] = "CarshOutReqID"] = 10009;
        values[valuesById[10010] = "CarshOutAckID"] = 10010;
        values[valuesById[10011] = "CarshAutoOutReqID"] = 10011;
        values[valuesById[10012] = "CarshAutoOutAckID"] = 10012;
        return values;
    })();

    /**
     * Carsh_State enum.
     * @name carsh.Carsh_State
     * @enum {number}
     * @property {number} Carsh_Bet=1 Carsh_Bet value
     * @property {number} Carsh_Start=2 Carsh_Start value
     * @property {number} Carsh_End=3 Carsh_End value
     */
    carsh.Carsh_State = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[1] = "Carsh_Bet"] = 1;
        values[valuesById[2] = "Carsh_Start"] = 2;
        values[valuesById[3] = "Carsh_End"] = 3;
        return values;
    })();

    /**
     * Carsh_Error enum.
     * @name carsh.Carsh_Error
     * @enum {number}
     * @property {number} Code_Success=0 Code_Success value
     * @property {number} Code_State=1 Code_State value
     * @property {number} Code_BetGold=2 Code_BetGold value
     * @property {number} Code_AlreadyBet=3 Code_AlreadyBet value
     */
    carsh.Carsh_Error = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Code_Success"] = 0;
        values[valuesById[1] = "Code_State"] = 1;
        values[valuesById[2] = "Code_BetGold"] = 2;
        values[valuesById[3] = "Code_AlreadyBet"] = 3;
        return values;
    })();

    carsh.Carsh_SceneNtf = (function() {

        /**
         * Properties of a Carsh_SceneNtf.
         * @memberof carsh
         * @interface ICarsh_SceneNtf
         * @property {carsh.Carsh_State|null} [State] Carsh_SceneNtf State
         * @property {number|Long|null} [StateRemain] Carsh_SceneNtf StateRemain
         * @property {Array.<number|Long>|null} [BetChip] Carsh_SceneNtf BetChip
         * @property {Array.<carsh.Carsh_SceneNtf.IMulItem>|null} [MulConf] Carsh_SceneNtf MulConf
         * @property {number|null} [BetTime] Carsh_SceneNtf BetTime
         * @property {number|Long|null} [BetCount] Carsh_SceneNtf BetCount
         * @property {number|null} [AutoCarshOut] Carsh_SceneNtf AutoCarshOut
         * @property {number|null} [MaxRecordCount] Carsh_SceneNtf MaxRecordCount
         * @property {Array.<number>|null} [Record] Carsh_SceneNtf Record
         * @property {number|null} [OnlineCount] Carsh_SceneNtf OnlineCount
         * @property {carsh.ICarsh_BetRankAck|null} [RankInfo] Carsh_SceneNtf RankInfo
         */

        /**
         * Constructs a new Carsh_SceneNtf.
         * @memberof carsh
         * @classdesc Represents a Carsh_SceneNtf.
         * @implements ICarsh_SceneNtf
         * @constructor
         * @param {carsh.ICarsh_SceneNtf=} [properties] Properties to set
         */
        function Carsh_SceneNtf(properties) {
            this.BetChip = [];
            this.MulConf = [];
            this.Record = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Carsh_SceneNtf State.
         * @member {carsh.Carsh_State} State
         * @memberof carsh.Carsh_SceneNtf
         * @instance
         */
        Carsh_SceneNtf.prototype.State = 1;

        /**
         * Carsh_SceneNtf StateRemain.
         * @member {number|Long} StateRemain
         * @memberof carsh.Carsh_SceneNtf
         * @instance
         */
        Carsh_SceneNtf.prototype.StateRemain = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Carsh_SceneNtf BetChip.
         * @member {Array.<number|Long>} BetChip
         * @memberof carsh.Carsh_SceneNtf
         * @instance
         */
        Carsh_SceneNtf.prototype.BetChip = $util.emptyArray;

        /**
         * Carsh_SceneNtf MulConf.
         * @member {Array.<carsh.Carsh_SceneNtf.IMulItem>} MulConf
         * @memberof carsh.Carsh_SceneNtf
         * @instance
         */
        Carsh_SceneNtf.prototype.MulConf = $util.emptyArray;

        /**
         * Carsh_SceneNtf BetTime.
         * @member {number} BetTime
         * @memberof carsh.Carsh_SceneNtf
         * @instance
         */
        Carsh_SceneNtf.prototype.BetTime = 0;

        /**
         * Carsh_SceneNtf BetCount.
         * @member {number|Long} BetCount
         * @memberof carsh.Carsh_SceneNtf
         * @instance
         */
        Carsh_SceneNtf.prototype.BetCount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Carsh_SceneNtf AutoCarshOut.
         * @member {number} AutoCarshOut
         * @memberof carsh.Carsh_SceneNtf
         * @instance
         */
        Carsh_SceneNtf.prototype.AutoCarshOut = 0;

        /**
         * Carsh_SceneNtf MaxRecordCount.
         * @member {number} MaxRecordCount
         * @memberof carsh.Carsh_SceneNtf
         * @instance
         */
        Carsh_SceneNtf.prototype.MaxRecordCount = 0;

        /**
         * Carsh_SceneNtf Record.
         * @member {Array.<number>} Record
         * @memberof carsh.Carsh_SceneNtf
         * @instance
         */
        Carsh_SceneNtf.prototype.Record = $util.emptyArray;

        /**
         * Carsh_SceneNtf OnlineCount.
         * @member {number} OnlineCount
         * @memberof carsh.Carsh_SceneNtf
         * @instance
         */
        Carsh_SceneNtf.prototype.OnlineCount = 0;

        /**
         * Carsh_SceneNtf RankInfo.
         * @member {carsh.ICarsh_BetRankAck|null|undefined} RankInfo
         * @memberof carsh.Carsh_SceneNtf
         * @instance
         */
        Carsh_SceneNtf.prototype.RankInfo = null;

        /**
         * Creates a new Carsh_SceneNtf instance using the specified properties.
         * @function create
         * @memberof carsh.Carsh_SceneNtf
         * @static
         * @param {carsh.ICarsh_SceneNtf=} [properties] Properties to set
         * @returns {carsh.Carsh_SceneNtf} Carsh_SceneNtf instance
         */
        Carsh_SceneNtf.create = function create(properties) {
            return new Carsh_SceneNtf(properties);
        };

        /**
         * Encodes the specified Carsh_SceneNtf message. Does not implicitly {@link carsh.Carsh_SceneNtf.verify|verify} messages.
         * @function encode
         * @memberof carsh.Carsh_SceneNtf
         * @static
         * @param {carsh.ICarsh_SceneNtf} message Carsh_SceneNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_SceneNtf.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.State);
            if (message.StateRemain != null && Object.hasOwnProperty.call(message, "StateRemain"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.StateRemain);
            if (message.BetChip != null && message.BetChip.length)
                for (var i = 0; i < message.BetChip.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).int64(message.BetChip[i]);
            if (message.MulConf != null && message.MulConf.length)
                for (var i = 0; i < message.MulConf.length; ++i)
                    $root.carsh.Carsh_SceneNtf.MulItem.encode(message.MulConf[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.BetTime != null && Object.hasOwnProperty.call(message, "BetTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.BetTime);
            if (message.BetCount != null && Object.hasOwnProperty.call(message, "BetCount"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.BetCount);
            if (message.AutoCarshOut != null && Object.hasOwnProperty.call(message, "AutoCarshOut"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.AutoCarshOut);
            if (message.MaxRecordCount != null && Object.hasOwnProperty.call(message, "MaxRecordCount"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.MaxRecordCount);
            if (message.Record != null && message.Record.length)
                for (var i = 0; i < message.Record.length; ++i)
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.Record[i]);
            if (message.OnlineCount != null && Object.hasOwnProperty.call(message, "OnlineCount"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.OnlineCount);
            if (message.RankInfo != null && Object.hasOwnProperty.call(message, "RankInfo"))
                $root.carsh.Carsh_BetRankAck.encode(message.RankInfo, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Carsh_SceneNtf message, length delimited. Does not implicitly {@link carsh.Carsh_SceneNtf.verify|verify} messages.
         * @function encodeDelimited
         * @memberof carsh.Carsh_SceneNtf
         * @static
         * @param {carsh.ICarsh_SceneNtf} message Carsh_SceneNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_SceneNtf.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Carsh_SceneNtf message from the specified reader or buffer.
         * @function decode
         * @memberof carsh.Carsh_SceneNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {carsh.Carsh_SceneNtf} Carsh_SceneNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_SceneNtf.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.carsh.Carsh_SceneNtf();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.State = reader.int32();
                    break;
                case 2:
                    message.StateRemain = reader.int64();
                    break;
                case 3:
                    if (!(message.BetChip && message.BetChip.length))
                        message.BetChip = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.BetChip.push(reader.int64());
                    } else
                        message.BetChip.push(reader.int64());
                    break;
                case 4:
                    if (!(message.MulConf && message.MulConf.length))
                        message.MulConf = [];
                    message.MulConf.push($root.carsh.Carsh_SceneNtf.MulItem.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.BetTime = reader.int32();
                    break;
                case 6:
                    message.BetCount = reader.int64();
                    break;
                case 7:
                    message.AutoCarshOut = reader.int32();
                    break;
                case 8:
                    message.MaxRecordCount = reader.int32();
                    break;
                case 9:
                    if (!(message.Record && message.Record.length))
                        message.Record = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Record.push(reader.int32());
                    } else
                        message.Record.push(reader.int32());
                    break;
                case 10:
                    message.OnlineCount = reader.int32();
                    break;
                case 11:
                    message.RankInfo = $root.carsh.Carsh_BetRankAck.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Carsh_SceneNtf message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof carsh.Carsh_SceneNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {carsh.Carsh_SceneNtf} Carsh_SceneNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_SceneNtf.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Carsh_SceneNtf message.
         * @function verify
         * @memberof carsh.Carsh_SceneNtf
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Carsh_SceneNtf.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.State != null && message.hasOwnProperty("State"))
                switch (message.State) {
                default:
                    return "State: enum value expected";
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.StateRemain != null && message.hasOwnProperty("StateRemain"))
                if (!$util.isInteger(message.StateRemain) && !(message.StateRemain && $util.isInteger(message.StateRemain.low) && $util.isInteger(message.StateRemain.high)))
                    return "StateRemain: integer|Long expected";
            if (message.BetChip != null && message.hasOwnProperty("BetChip")) {
                if (!Array.isArray(message.BetChip))
                    return "BetChip: array expected";
                for (var i = 0; i < message.BetChip.length; ++i)
                    if (!$util.isInteger(message.BetChip[i]) && !(message.BetChip[i] && $util.isInteger(message.BetChip[i].low) && $util.isInteger(message.BetChip[i].high)))
                        return "BetChip: integer|Long[] expected";
            }
            if (message.MulConf != null && message.hasOwnProperty("MulConf")) {
                if (!Array.isArray(message.MulConf))
                    return "MulConf: array expected";
                for (var i = 0; i < message.MulConf.length; ++i) {
                    var error = $root.carsh.Carsh_SceneNtf.MulItem.verify(message.MulConf[i]);
                    if (error)
                        return "MulConf." + error;
                }
            }
            if (message.BetTime != null && message.hasOwnProperty("BetTime"))
                if (!$util.isInteger(message.BetTime))
                    return "BetTime: integer expected";
            if (message.BetCount != null && message.hasOwnProperty("BetCount"))
                if (!$util.isInteger(message.BetCount) && !(message.BetCount && $util.isInteger(message.BetCount.low) && $util.isInteger(message.BetCount.high)))
                    return "BetCount: integer|Long expected";
            if (message.AutoCarshOut != null && message.hasOwnProperty("AutoCarshOut"))
                if (!$util.isInteger(message.AutoCarshOut))
                    return "AutoCarshOut: integer expected";
            if (message.MaxRecordCount != null && message.hasOwnProperty("MaxRecordCount"))
                if (!$util.isInteger(message.MaxRecordCount))
                    return "MaxRecordCount: integer expected";
            if (message.Record != null && message.hasOwnProperty("Record")) {
                if (!Array.isArray(message.Record))
                    return "Record: array expected";
                for (var i = 0; i < message.Record.length; ++i)
                    if (!$util.isInteger(message.Record[i]))
                        return "Record: integer[] expected";
            }
            if (message.OnlineCount != null && message.hasOwnProperty("OnlineCount"))
                if (!$util.isInteger(message.OnlineCount))
                    return "OnlineCount: integer expected";
            if (message.RankInfo != null && message.hasOwnProperty("RankInfo")) {
                var error = $root.carsh.Carsh_BetRankAck.verify(message.RankInfo);
                if (error)
                    return "RankInfo." + error;
            }
            return null;
        };

        /**
         * Creates a Carsh_SceneNtf message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof carsh.Carsh_SceneNtf
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {carsh.Carsh_SceneNtf} Carsh_SceneNtf
         */
        Carsh_SceneNtf.fromObject = function fromObject(object) {
            if (object instanceof $root.carsh.Carsh_SceneNtf)
                return object;
            var message = new $root.carsh.Carsh_SceneNtf();
            switch (object.State) {
            case "Carsh_Bet":
            case 1:
                message.State = 1;
                break;
            case "Carsh_Start":
            case 2:
                message.State = 2;
                break;
            case "Carsh_End":
            case 3:
                message.State = 3;
                break;
            }
            if (object.StateRemain != null)
                if ($util.Long)
                    (message.StateRemain = $util.Long.fromValue(object.StateRemain)).unsigned = false;
                else if (typeof object.StateRemain === "string")
                    message.StateRemain = parseInt(object.StateRemain, 10);
                else if (typeof object.StateRemain === "number")
                    message.StateRemain = object.StateRemain;
                else if (typeof object.StateRemain === "object")
                    message.StateRemain = new $util.LongBits(object.StateRemain.low >>> 0, object.StateRemain.high >>> 0).toNumber();
            if (object.BetChip) {
                if (!Array.isArray(object.BetChip))
                    throw TypeError(".carsh.Carsh_SceneNtf.BetChip: array expected");
                message.BetChip = [];
                for (var i = 0; i < object.BetChip.length; ++i)
                    if ($util.Long)
                        (message.BetChip[i] = $util.Long.fromValue(object.BetChip[i])).unsigned = false;
                    else if (typeof object.BetChip[i] === "string")
                        message.BetChip[i] = parseInt(object.BetChip[i], 10);
                    else if (typeof object.BetChip[i] === "number")
                        message.BetChip[i] = object.BetChip[i];
                    else if (typeof object.BetChip[i] === "object")
                        message.BetChip[i] = new $util.LongBits(object.BetChip[i].low >>> 0, object.BetChip[i].high >>> 0).toNumber();
            }
            if (object.MulConf) {
                if (!Array.isArray(object.MulConf))
                    throw TypeError(".carsh.Carsh_SceneNtf.MulConf: array expected");
                message.MulConf = [];
                for (var i = 0; i < object.MulConf.length; ++i) {
                    if (typeof object.MulConf[i] !== "object")
                        throw TypeError(".carsh.Carsh_SceneNtf.MulConf: object expected");
                    message.MulConf[i] = $root.carsh.Carsh_SceneNtf.MulItem.fromObject(object.MulConf[i]);
                }
            }
            if (object.BetTime != null)
                message.BetTime = object.BetTime | 0;
            if (object.BetCount != null)
                if ($util.Long)
                    (message.BetCount = $util.Long.fromValue(object.BetCount)).unsigned = false;
                else if (typeof object.BetCount === "string")
                    message.BetCount = parseInt(object.BetCount, 10);
                else if (typeof object.BetCount === "number")
                    message.BetCount = object.BetCount;
                else if (typeof object.BetCount === "object")
                    message.BetCount = new $util.LongBits(object.BetCount.low >>> 0, object.BetCount.high >>> 0).toNumber();
            if (object.AutoCarshOut != null)
                message.AutoCarshOut = object.AutoCarshOut | 0;
            if (object.MaxRecordCount != null)
                message.MaxRecordCount = object.MaxRecordCount | 0;
            if (object.Record) {
                if (!Array.isArray(object.Record))
                    throw TypeError(".carsh.Carsh_SceneNtf.Record: array expected");
                message.Record = [];
                for (var i = 0; i < object.Record.length; ++i)
                    message.Record[i] = object.Record[i] | 0;
            }
            if (object.OnlineCount != null)
                message.OnlineCount = object.OnlineCount | 0;
            if (object.RankInfo != null) {
                if (typeof object.RankInfo !== "object")
                    throw TypeError(".carsh.Carsh_SceneNtf.RankInfo: object expected");
                message.RankInfo = $root.carsh.Carsh_BetRankAck.fromObject(object.RankInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a Carsh_SceneNtf message. Also converts values to other types if specified.
         * @function toObject
         * @memberof carsh.Carsh_SceneNtf
         * @static
         * @param {carsh.Carsh_SceneNtf} message Carsh_SceneNtf
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Carsh_SceneNtf.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.BetChip = [];
                object.MulConf = [];
                object.Record = [];
            }
            if (options.defaults) {
                object.State = options.enums === String ? "Carsh_Bet" : 1;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.StateRemain = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.StateRemain = options.longs === String ? "0" : 0;
                object.BetTime = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetCount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetCount = options.longs === String ? "0" : 0;
                object.AutoCarshOut = 0;
                object.MaxRecordCount = 0;
                object.OnlineCount = 0;
                object.RankInfo = null;
            }
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = options.enums === String ? $root.carsh.Carsh_State[message.State] : message.State;
            if (message.StateRemain != null && message.hasOwnProperty("StateRemain"))
                if (typeof message.StateRemain === "number")
                    object.StateRemain = options.longs === String ? String(message.StateRemain) : message.StateRemain;
                else
                    object.StateRemain = options.longs === String ? $util.Long.prototype.toString.call(message.StateRemain) : options.longs === Number ? new $util.LongBits(message.StateRemain.low >>> 0, message.StateRemain.high >>> 0).toNumber() : message.StateRemain;
            if (message.BetChip && message.BetChip.length) {
                object.BetChip = [];
                for (var j = 0; j < message.BetChip.length; ++j)
                    if (typeof message.BetChip[j] === "number")
                        object.BetChip[j] = options.longs === String ? String(message.BetChip[j]) : message.BetChip[j];
                    else
                        object.BetChip[j] = options.longs === String ? $util.Long.prototype.toString.call(message.BetChip[j]) : options.longs === Number ? new $util.LongBits(message.BetChip[j].low >>> 0, message.BetChip[j].high >>> 0).toNumber() : message.BetChip[j];
            }
            if (message.MulConf && message.MulConf.length) {
                object.MulConf = [];
                for (var j = 0; j < message.MulConf.length; ++j)
                    object.MulConf[j] = $root.carsh.Carsh_SceneNtf.MulItem.toObject(message.MulConf[j], options);
            }
            if (message.BetTime != null && message.hasOwnProperty("BetTime"))
                object.BetTime = message.BetTime;
            if (message.BetCount != null && message.hasOwnProperty("BetCount"))
                if (typeof message.BetCount === "number")
                    object.BetCount = options.longs === String ? String(message.BetCount) : message.BetCount;
                else
                    object.BetCount = options.longs === String ? $util.Long.prototype.toString.call(message.BetCount) : options.longs === Number ? new $util.LongBits(message.BetCount.low >>> 0, message.BetCount.high >>> 0).toNumber() : message.BetCount;
            if (message.AutoCarshOut != null && message.hasOwnProperty("AutoCarshOut"))
                object.AutoCarshOut = message.AutoCarshOut;
            if (message.MaxRecordCount != null && message.hasOwnProperty("MaxRecordCount"))
                object.MaxRecordCount = message.MaxRecordCount;
            if (message.Record && message.Record.length) {
                object.Record = [];
                for (var j = 0; j < message.Record.length; ++j)
                    object.Record[j] = message.Record[j];
            }
            if (message.OnlineCount != null && message.hasOwnProperty("OnlineCount"))
                object.OnlineCount = message.OnlineCount;
            if (message.RankInfo != null && message.hasOwnProperty("RankInfo"))
                object.RankInfo = $root.carsh.Carsh_BetRankAck.toObject(message.RankInfo, options);
            return object;
        };

        /**
         * Converts this Carsh_SceneNtf to JSON.
         * @function toJSON
         * @memberof carsh.Carsh_SceneNtf
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Carsh_SceneNtf.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Carsh_SceneNtf.MulItem = (function() {

            /**
             * Properties of a MulItem.
             * @memberof carsh.Carsh_SceneNtf
             * @interface IMulItem
             * @property {number|null} [SecondMul] MulItem SecondMul
             * @property {number|null} [MilliSecond] MulItem MilliSecond
             */

            /**
             * Constructs a new MulItem.
             * @memberof carsh.Carsh_SceneNtf
             * @classdesc Represents a MulItem.
             * @implements IMulItem
             * @constructor
             * @param {carsh.Carsh_SceneNtf.IMulItem=} [properties] Properties to set
             */
            function MulItem(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * MulItem SecondMul.
             * @member {number} SecondMul
             * @memberof carsh.Carsh_SceneNtf.MulItem
             * @instance
             */
            MulItem.prototype.SecondMul = 0;

            /**
             * MulItem MilliSecond.
             * @member {number} MilliSecond
             * @memberof carsh.Carsh_SceneNtf.MulItem
             * @instance
             */
            MulItem.prototype.MilliSecond = 0;

            /**
             * Creates a new MulItem instance using the specified properties.
             * @function create
             * @memberof carsh.Carsh_SceneNtf.MulItem
             * @static
             * @param {carsh.Carsh_SceneNtf.IMulItem=} [properties] Properties to set
             * @returns {carsh.Carsh_SceneNtf.MulItem} MulItem instance
             */
            MulItem.create = function create(properties) {
                return new MulItem(properties);
            };

            /**
             * Encodes the specified MulItem message. Does not implicitly {@link carsh.Carsh_SceneNtf.MulItem.verify|verify} messages.
             * @function encode
             * @memberof carsh.Carsh_SceneNtf.MulItem
             * @static
             * @param {carsh.Carsh_SceneNtf.IMulItem} message MulItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MulItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.SecondMul != null && Object.hasOwnProperty.call(message, "SecondMul"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SecondMul);
                if (message.MilliSecond != null && Object.hasOwnProperty.call(message, "MilliSecond"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.MilliSecond);
                return writer;
            };

            /**
             * Encodes the specified MulItem message, length delimited. Does not implicitly {@link carsh.Carsh_SceneNtf.MulItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof carsh.Carsh_SceneNtf.MulItem
             * @static
             * @param {carsh.Carsh_SceneNtf.IMulItem} message MulItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            MulItem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a MulItem message from the specified reader or buffer.
             * @function decode
             * @memberof carsh.Carsh_SceneNtf.MulItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {carsh.Carsh_SceneNtf.MulItem} MulItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MulItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.carsh.Carsh_SceneNtf.MulItem();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.SecondMul = reader.int32();
                        break;
                    case 2:
                        message.MilliSecond = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a MulItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof carsh.Carsh_SceneNtf.MulItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {carsh.Carsh_SceneNtf.MulItem} MulItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            MulItem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a MulItem message.
             * @function verify
             * @memberof carsh.Carsh_SceneNtf.MulItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            MulItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.SecondMul != null && message.hasOwnProperty("SecondMul"))
                    if (!$util.isInteger(message.SecondMul))
                        return "SecondMul: integer expected";
                if (message.MilliSecond != null && message.hasOwnProperty("MilliSecond"))
                    if (!$util.isInteger(message.MilliSecond))
                        return "MilliSecond: integer expected";
                return null;
            };

            /**
             * Creates a MulItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof carsh.Carsh_SceneNtf.MulItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {carsh.Carsh_SceneNtf.MulItem} MulItem
             */
            MulItem.fromObject = function fromObject(object) {
                if (object instanceof $root.carsh.Carsh_SceneNtf.MulItem)
                    return object;
                var message = new $root.carsh.Carsh_SceneNtf.MulItem();
                if (object.SecondMul != null)
                    message.SecondMul = object.SecondMul | 0;
                if (object.MilliSecond != null)
                    message.MilliSecond = object.MilliSecond | 0;
                return message;
            };

            /**
             * Creates a plain object from a MulItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof carsh.Carsh_SceneNtf.MulItem
             * @static
             * @param {carsh.Carsh_SceneNtf.MulItem} message MulItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            MulItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.SecondMul = 0;
                    object.MilliSecond = 0;
                }
                if (message.SecondMul != null && message.hasOwnProperty("SecondMul"))
                    object.SecondMul = message.SecondMul;
                if (message.MilliSecond != null && message.hasOwnProperty("MilliSecond"))
                    object.MilliSecond = message.MilliSecond;
                return object;
            };

            /**
             * Converts this MulItem to JSON.
             * @function toJSON
             * @memberof carsh.Carsh_SceneNtf.MulItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            MulItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return MulItem;
        })();

        return Carsh_SceneNtf;
    })();

    carsh.Carsh_BetNtf = (function() {

        /**
         * Properties of a Carsh_BetNtf.
         * @memberof carsh
         * @interface ICarsh_BetNtf
         * @property {number|null} [OnlineCount] Carsh_BetNtf OnlineCount
         */

        /**
         * Constructs a new Carsh_BetNtf.
         * @memberof carsh
         * @classdesc Represents a Carsh_BetNtf.
         * @implements ICarsh_BetNtf
         * @constructor
         * @param {carsh.ICarsh_BetNtf=} [properties] Properties to set
         */
        function Carsh_BetNtf(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Carsh_BetNtf OnlineCount.
         * @member {number} OnlineCount
         * @memberof carsh.Carsh_BetNtf
         * @instance
         */
        Carsh_BetNtf.prototype.OnlineCount = 0;

        /**
         * Creates a new Carsh_BetNtf instance using the specified properties.
         * @function create
         * @memberof carsh.Carsh_BetNtf
         * @static
         * @param {carsh.ICarsh_BetNtf=} [properties] Properties to set
         * @returns {carsh.Carsh_BetNtf} Carsh_BetNtf instance
         */
        Carsh_BetNtf.create = function create(properties) {
            return new Carsh_BetNtf(properties);
        };

        /**
         * Encodes the specified Carsh_BetNtf message. Does not implicitly {@link carsh.Carsh_BetNtf.verify|verify} messages.
         * @function encode
         * @memberof carsh.Carsh_BetNtf
         * @static
         * @param {carsh.ICarsh_BetNtf} message Carsh_BetNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_BetNtf.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.OnlineCount != null && Object.hasOwnProperty.call(message, "OnlineCount"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.OnlineCount);
            return writer;
        };

        /**
         * Encodes the specified Carsh_BetNtf message, length delimited. Does not implicitly {@link carsh.Carsh_BetNtf.verify|verify} messages.
         * @function encodeDelimited
         * @memberof carsh.Carsh_BetNtf
         * @static
         * @param {carsh.ICarsh_BetNtf} message Carsh_BetNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_BetNtf.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Carsh_BetNtf message from the specified reader or buffer.
         * @function decode
         * @memberof carsh.Carsh_BetNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {carsh.Carsh_BetNtf} Carsh_BetNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_BetNtf.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.carsh.Carsh_BetNtf();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.OnlineCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Carsh_BetNtf message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof carsh.Carsh_BetNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {carsh.Carsh_BetNtf} Carsh_BetNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_BetNtf.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Carsh_BetNtf message.
         * @function verify
         * @memberof carsh.Carsh_BetNtf
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Carsh_BetNtf.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.OnlineCount != null && message.hasOwnProperty("OnlineCount"))
                if (!$util.isInteger(message.OnlineCount))
                    return "OnlineCount: integer expected";
            return null;
        };

        /**
         * Creates a Carsh_BetNtf message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof carsh.Carsh_BetNtf
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {carsh.Carsh_BetNtf} Carsh_BetNtf
         */
        Carsh_BetNtf.fromObject = function fromObject(object) {
            if (object instanceof $root.carsh.Carsh_BetNtf)
                return object;
            var message = new $root.carsh.Carsh_BetNtf();
            if (object.OnlineCount != null)
                message.OnlineCount = object.OnlineCount | 0;
            return message;
        };

        /**
         * Creates a plain object from a Carsh_BetNtf message. Also converts values to other types if specified.
         * @function toObject
         * @memberof carsh.Carsh_BetNtf
         * @static
         * @param {carsh.Carsh_BetNtf} message Carsh_BetNtf
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Carsh_BetNtf.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.OnlineCount = 0;
            if (message.OnlineCount != null && message.hasOwnProperty("OnlineCount"))
                object.OnlineCount = message.OnlineCount;
            return object;
        };

        /**
         * Converts this Carsh_BetNtf to JSON.
         * @function toJSON
         * @memberof carsh.Carsh_BetNtf
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Carsh_BetNtf.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Carsh_BetNtf;
    })();

    carsh.Carsh_StartNtf = (function() {

        /**
         * Properties of a Carsh_StartNtf.
         * @memberof carsh
         * @interface ICarsh_StartNtf
         * @property {number|null} [EndMul] Carsh_StartNtf EndMul
         * @property {number|null} [AddMul] Carsh_StartNtf AddMul
         * @property {number|Long|null} [StartTime] Carsh_StartNtf StartTime
         * @property {Array.<carsh.Carsh_StartNtf.IRobotOutItem>|null} [RobotOutList] Carsh_StartNtf RobotOutList
         */

        /**
         * Constructs a new Carsh_StartNtf.
         * @memberof carsh
         * @classdesc Represents a Carsh_StartNtf.
         * @implements ICarsh_StartNtf
         * @constructor
         * @param {carsh.ICarsh_StartNtf=} [properties] Properties to set
         */
        function Carsh_StartNtf(properties) {
            this.RobotOutList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Carsh_StartNtf EndMul.
         * @member {number} EndMul
         * @memberof carsh.Carsh_StartNtf
         * @instance
         */
        Carsh_StartNtf.prototype.EndMul = 0;

        /**
         * Carsh_StartNtf AddMul.
         * @member {number} AddMul
         * @memberof carsh.Carsh_StartNtf
         * @instance
         */
        Carsh_StartNtf.prototype.AddMul = 0;

        /**
         * Carsh_StartNtf StartTime.
         * @member {number|Long} StartTime
         * @memberof carsh.Carsh_StartNtf
         * @instance
         */
        Carsh_StartNtf.prototype.StartTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Carsh_StartNtf RobotOutList.
         * @member {Array.<carsh.Carsh_StartNtf.IRobotOutItem>} RobotOutList
         * @memberof carsh.Carsh_StartNtf
         * @instance
         */
        Carsh_StartNtf.prototype.RobotOutList = $util.emptyArray;

        /**
         * Creates a new Carsh_StartNtf instance using the specified properties.
         * @function create
         * @memberof carsh.Carsh_StartNtf
         * @static
         * @param {carsh.ICarsh_StartNtf=} [properties] Properties to set
         * @returns {carsh.Carsh_StartNtf} Carsh_StartNtf instance
         */
        Carsh_StartNtf.create = function create(properties) {
            return new Carsh_StartNtf(properties);
        };

        /**
         * Encodes the specified Carsh_StartNtf message. Does not implicitly {@link carsh.Carsh_StartNtf.verify|verify} messages.
         * @function encode
         * @memberof carsh.Carsh_StartNtf
         * @static
         * @param {carsh.ICarsh_StartNtf} message Carsh_StartNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_StartNtf.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.EndMul != null && Object.hasOwnProperty.call(message, "EndMul"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.EndMul);
            if (message.AddMul != null && Object.hasOwnProperty.call(message, "AddMul"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.AddMul);
            if (message.StartTime != null && Object.hasOwnProperty.call(message, "StartTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.StartTime);
            if (message.RobotOutList != null && message.RobotOutList.length)
                for (var i = 0; i < message.RobotOutList.length; ++i)
                    $root.carsh.Carsh_StartNtf.RobotOutItem.encode(message.RobotOutList[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Carsh_StartNtf message, length delimited. Does not implicitly {@link carsh.Carsh_StartNtf.verify|verify} messages.
         * @function encodeDelimited
         * @memberof carsh.Carsh_StartNtf
         * @static
         * @param {carsh.ICarsh_StartNtf} message Carsh_StartNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_StartNtf.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Carsh_StartNtf message from the specified reader or buffer.
         * @function decode
         * @memberof carsh.Carsh_StartNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {carsh.Carsh_StartNtf} Carsh_StartNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_StartNtf.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.carsh.Carsh_StartNtf();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.EndMul = reader.int32();
                    break;
                case 2:
                    message.AddMul = reader.int32();
                    break;
                case 3:
                    message.StartTime = reader.int64();
                    break;
                case 4:
                    if (!(message.RobotOutList && message.RobotOutList.length))
                        message.RobotOutList = [];
                    message.RobotOutList.push($root.carsh.Carsh_StartNtf.RobotOutItem.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Carsh_StartNtf message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof carsh.Carsh_StartNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {carsh.Carsh_StartNtf} Carsh_StartNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_StartNtf.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Carsh_StartNtf message.
         * @function verify
         * @memberof carsh.Carsh_StartNtf
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Carsh_StartNtf.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.EndMul != null && message.hasOwnProperty("EndMul"))
                if (!$util.isInteger(message.EndMul))
                    return "EndMul: integer expected";
            if (message.AddMul != null && message.hasOwnProperty("AddMul"))
                if (!$util.isInteger(message.AddMul))
                    return "AddMul: integer expected";
            if (message.StartTime != null && message.hasOwnProperty("StartTime"))
                if (!$util.isInteger(message.StartTime) && !(message.StartTime && $util.isInteger(message.StartTime.low) && $util.isInteger(message.StartTime.high)))
                    return "StartTime: integer|Long expected";
            if (message.RobotOutList != null && message.hasOwnProperty("RobotOutList")) {
                if (!Array.isArray(message.RobotOutList))
                    return "RobotOutList: array expected";
                for (var i = 0; i < message.RobotOutList.length; ++i) {
                    var error = $root.carsh.Carsh_StartNtf.RobotOutItem.verify(message.RobotOutList[i]);
                    if (error)
                        return "RobotOutList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Carsh_StartNtf message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof carsh.Carsh_StartNtf
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {carsh.Carsh_StartNtf} Carsh_StartNtf
         */
        Carsh_StartNtf.fromObject = function fromObject(object) {
            if (object instanceof $root.carsh.Carsh_StartNtf)
                return object;
            var message = new $root.carsh.Carsh_StartNtf();
            if (object.EndMul != null)
                message.EndMul = object.EndMul | 0;
            if (object.AddMul != null)
                message.AddMul = object.AddMul | 0;
            if (object.StartTime != null)
                if ($util.Long)
                    (message.StartTime = $util.Long.fromValue(object.StartTime)).unsigned = false;
                else if (typeof object.StartTime === "string")
                    message.StartTime = parseInt(object.StartTime, 10);
                else if (typeof object.StartTime === "number")
                    message.StartTime = object.StartTime;
                else if (typeof object.StartTime === "object")
                    message.StartTime = new $util.LongBits(object.StartTime.low >>> 0, object.StartTime.high >>> 0).toNumber();
            if (object.RobotOutList) {
                if (!Array.isArray(object.RobotOutList))
                    throw TypeError(".carsh.Carsh_StartNtf.RobotOutList: array expected");
                message.RobotOutList = [];
                for (var i = 0; i < object.RobotOutList.length; ++i) {
                    if (typeof object.RobotOutList[i] !== "object")
                        throw TypeError(".carsh.Carsh_StartNtf.RobotOutList: object expected");
                    message.RobotOutList[i] = $root.carsh.Carsh_StartNtf.RobotOutItem.fromObject(object.RobotOutList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Carsh_StartNtf message. Also converts values to other types if specified.
         * @function toObject
         * @memberof carsh.Carsh_StartNtf
         * @static
         * @param {carsh.Carsh_StartNtf} message Carsh_StartNtf
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Carsh_StartNtf.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.RobotOutList = [];
            if (options.defaults) {
                object.EndMul = 0;
                object.AddMul = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.StartTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.StartTime = options.longs === String ? "0" : 0;
            }
            if (message.EndMul != null && message.hasOwnProperty("EndMul"))
                object.EndMul = message.EndMul;
            if (message.AddMul != null && message.hasOwnProperty("AddMul"))
                object.AddMul = message.AddMul;
            if (message.StartTime != null && message.hasOwnProperty("StartTime"))
                if (typeof message.StartTime === "number")
                    object.StartTime = options.longs === String ? String(message.StartTime) : message.StartTime;
                else
                    object.StartTime = options.longs === String ? $util.Long.prototype.toString.call(message.StartTime) : options.longs === Number ? new $util.LongBits(message.StartTime.low >>> 0, message.StartTime.high >>> 0).toNumber() : message.StartTime;
            if (message.RobotOutList && message.RobotOutList.length) {
                object.RobotOutList = [];
                for (var j = 0; j < message.RobotOutList.length; ++j)
                    object.RobotOutList[j] = $root.carsh.Carsh_StartNtf.RobotOutItem.toObject(message.RobotOutList[j], options);
            }
            return object;
        };

        /**
         * Converts this Carsh_StartNtf to JSON.
         * @function toJSON
         * @memberof carsh.Carsh_StartNtf
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Carsh_StartNtf.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Carsh_StartNtf.RobotOutItem = (function() {

            /**
             * Properties of a RobotOutItem.
             * @memberof carsh.Carsh_StartNtf
             * @interface IRobotOutItem
             * @property {string|null} [Name] RobotOutItem Name
             * @property {number|null} [OutMul] RobotOutItem OutMul
             * @property {boolean|null} [IsAuto] RobotOutItem IsAuto
             */

            /**
             * Constructs a new RobotOutItem.
             * @memberof carsh.Carsh_StartNtf
             * @classdesc Represents a RobotOutItem.
             * @implements IRobotOutItem
             * @constructor
             * @param {carsh.Carsh_StartNtf.IRobotOutItem=} [properties] Properties to set
             */
            function RobotOutItem(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RobotOutItem Name.
             * @member {string} Name
             * @memberof carsh.Carsh_StartNtf.RobotOutItem
             * @instance
             */
            RobotOutItem.prototype.Name = "";

            /**
             * RobotOutItem OutMul.
             * @member {number} OutMul
             * @memberof carsh.Carsh_StartNtf.RobotOutItem
             * @instance
             */
            RobotOutItem.prototype.OutMul = 0;

            /**
             * RobotOutItem IsAuto.
             * @member {boolean} IsAuto
             * @memberof carsh.Carsh_StartNtf.RobotOutItem
             * @instance
             */
            RobotOutItem.prototype.IsAuto = false;

            /**
             * Creates a new RobotOutItem instance using the specified properties.
             * @function create
             * @memberof carsh.Carsh_StartNtf.RobotOutItem
             * @static
             * @param {carsh.Carsh_StartNtf.IRobotOutItem=} [properties] Properties to set
             * @returns {carsh.Carsh_StartNtf.RobotOutItem} RobotOutItem instance
             */
            RobotOutItem.create = function create(properties) {
                return new RobotOutItem(properties);
            };

            /**
             * Encodes the specified RobotOutItem message. Does not implicitly {@link carsh.Carsh_StartNtf.RobotOutItem.verify|verify} messages.
             * @function encode
             * @memberof carsh.Carsh_StartNtf.RobotOutItem
             * @static
             * @param {carsh.Carsh_StartNtf.IRobotOutItem} message RobotOutItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RobotOutItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
                if (message.OutMul != null && Object.hasOwnProperty.call(message, "OutMul"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.OutMul);
                if (message.IsAuto != null && Object.hasOwnProperty.call(message, "IsAuto"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.IsAuto);
                return writer;
            };

            /**
             * Encodes the specified RobotOutItem message, length delimited. Does not implicitly {@link carsh.Carsh_StartNtf.RobotOutItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof carsh.Carsh_StartNtf.RobotOutItem
             * @static
             * @param {carsh.Carsh_StartNtf.IRobotOutItem} message RobotOutItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RobotOutItem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RobotOutItem message from the specified reader or buffer.
             * @function decode
             * @memberof carsh.Carsh_StartNtf.RobotOutItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {carsh.Carsh_StartNtf.RobotOutItem} RobotOutItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RobotOutItem.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.carsh.Carsh_StartNtf.RobotOutItem();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Name = reader.string();
                        break;
                    case 2:
                        message.OutMul = reader.int32();
                        break;
                    case 3:
                        message.IsAuto = reader.bool();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a RobotOutItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof carsh.Carsh_StartNtf.RobotOutItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {carsh.Carsh_StartNtf.RobotOutItem} RobotOutItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RobotOutItem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RobotOutItem message.
             * @function verify
             * @memberof carsh.Carsh_StartNtf.RobotOutItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RobotOutItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Name != null && message.hasOwnProperty("Name"))
                    if (!$util.isString(message.Name))
                        return "Name: string expected";
                if (message.OutMul != null && message.hasOwnProperty("OutMul"))
                    if (!$util.isInteger(message.OutMul))
                        return "OutMul: integer expected";
                if (message.IsAuto != null && message.hasOwnProperty("IsAuto"))
                    if (typeof message.IsAuto !== "boolean")
                        return "IsAuto: boolean expected";
                return null;
            };

            /**
             * Creates a RobotOutItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof carsh.Carsh_StartNtf.RobotOutItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {carsh.Carsh_StartNtf.RobotOutItem} RobotOutItem
             */
            RobotOutItem.fromObject = function fromObject(object) {
                if (object instanceof $root.carsh.Carsh_StartNtf.RobotOutItem)
                    return object;
                var message = new $root.carsh.Carsh_StartNtf.RobotOutItem();
                if (object.Name != null)
                    message.Name = String(object.Name);
                if (object.OutMul != null)
                    message.OutMul = object.OutMul | 0;
                if (object.IsAuto != null)
                    message.IsAuto = Boolean(object.IsAuto);
                return message;
            };

            /**
             * Creates a plain object from a RobotOutItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof carsh.Carsh_StartNtf.RobotOutItem
             * @static
             * @param {carsh.Carsh_StartNtf.RobotOutItem} message RobotOutItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RobotOutItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Name = "";
                    object.OutMul = 0;
                    object.IsAuto = false;
                }
                if (message.Name != null && message.hasOwnProperty("Name"))
                    object.Name = message.Name;
                if (message.OutMul != null && message.hasOwnProperty("OutMul"))
                    object.OutMul = message.OutMul;
                if (message.IsAuto != null && message.hasOwnProperty("IsAuto"))
                    object.IsAuto = message.IsAuto;
                return object;
            };

            /**
             * Converts this RobotOutItem to JSON.
             * @function toJSON
             * @memberof carsh.Carsh_StartNtf.RobotOutItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RobotOutItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RobotOutItem;
        })();

        return Carsh_StartNtf;
    })();

    carsh.Carsh_ModMulNtf = (function() {

        /**
         * Properties of a Carsh_ModMulNtf.
         * @memberof carsh
         * @interface ICarsh_ModMulNtf
         * @property {number|null} [EndMul] Carsh_ModMulNtf EndMul
         */

        /**
         * Constructs a new Carsh_ModMulNtf.
         * @memberof carsh
         * @classdesc Represents a Carsh_ModMulNtf.
         * @implements ICarsh_ModMulNtf
         * @constructor
         * @param {carsh.ICarsh_ModMulNtf=} [properties] Properties to set
         */
        function Carsh_ModMulNtf(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Carsh_ModMulNtf EndMul.
         * @member {number} EndMul
         * @memberof carsh.Carsh_ModMulNtf
         * @instance
         */
        Carsh_ModMulNtf.prototype.EndMul = 0;

        /**
         * Creates a new Carsh_ModMulNtf instance using the specified properties.
         * @function create
         * @memberof carsh.Carsh_ModMulNtf
         * @static
         * @param {carsh.ICarsh_ModMulNtf=} [properties] Properties to set
         * @returns {carsh.Carsh_ModMulNtf} Carsh_ModMulNtf instance
         */
        Carsh_ModMulNtf.create = function create(properties) {
            return new Carsh_ModMulNtf(properties);
        };

        /**
         * Encodes the specified Carsh_ModMulNtf message. Does not implicitly {@link carsh.Carsh_ModMulNtf.verify|verify} messages.
         * @function encode
         * @memberof carsh.Carsh_ModMulNtf
         * @static
         * @param {carsh.ICarsh_ModMulNtf} message Carsh_ModMulNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_ModMulNtf.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.EndMul != null && Object.hasOwnProperty.call(message, "EndMul"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.EndMul);
            return writer;
        };

        /**
         * Encodes the specified Carsh_ModMulNtf message, length delimited. Does not implicitly {@link carsh.Carsh_ModMulNtf.verify|verify} messages.
         * @function encodeDelimited
         * @memberof carsh.Carsh_ModMulNtf
         * @static
         * @param {carsh.ICarsh_ModMulNtf} message Carsh_ModMulNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_ModMulNtf.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Carsh_ModMulNtf message from the specified reader or buffer.
         * @function decode
         * @memberof carsh.Carsh_ModMulNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {carsh.Carsh_ModMulNtf} Carsh_ModMulNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_ModMulNtf.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.carsh.Carsh_ModMulNtf();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.EndMul = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Carsh_ModMulNtf message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof carsh.Carsh_ModMulNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {carsh.Carsh_ModMulNtf} Carsh_ModMulNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_ModMulNtf.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Carsh_ModMulNtf message.
         * @function verify
         * @memberof carsh.Carsh_ModMulNtf
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Carsh_ModMulNtf.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.EndMul != null && message.hasOwnProperty("EndMul"))
                if (!$util.isInteger(message.EndMul))
                    return "EndMul: integer expected";
            return null;
        };

        /**
         * Creates a Carsh_ModMulNtf message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof carsh.Carsh_ModMulNtf
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {carsh.Carsh_ModMulNtf} Carsh_ModMulNtf
         */
        Carsh_ModMulNtf.fromObject = function fromObject(object) {
            if (object instanceof $root.carsh.Carsh_ModMulNtf)
                return object;
            var message = new $root.carsh.Carsh_ModMulNtf();
            if (object.EndMul != null)
                message.EndMul = object.EndMul | 0;
            return message;
        };

        /**
         * Creates a plain object from a Carsh_ModMulNtf message. Also converts values to other types if specified.
         * @function toObject
         * @memberof carsh.Carsh_ModMulNtf
         * @static
         * @param {carsh.Carsh_ModMulNtf} message Carsh_ModMulNtf
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Carsh_ModMulNtf.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.EndMul = 0;
            if (message.EndMul != null && message.hasOwnProperty("EndMul"))
                object.EndMul = message.EndMul;
            return object;
        };

        /**
         * Converts this Carsh_ModMulNtf to JSON.
         * @function toJSON
         * @memberof carsh.Carsh_ModMulNtf
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Carsh_ModMulNtf.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Carsh_ModMulNtf;
    })();

    carsh.Carsh_EndNtf = (function() {

        /**
         * Properties of a Carsh_EndNtf.
         * @memberof carsh
         * @interface ICarsh_EndNtf
         * @property {number|Long|null} [LoseWin] Carsh_EndNtf LoseWin
         */

        /**
         * Constructs a new Carsh_EndNtf.
         * @memberof carsh
         * @classdesc Represents a Carsh_EndNtf.
         * @implements ICarsh_EndNtf
         * @constructor
         * @param {carsh.ICarsh_EndNtf=} [properties] Properties to set
         */
        function Carsh_EndNtf(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Carsh_EndNtf LoseWin.
         * @member {number|Long} LoseWin
         * @memberof carsh.Carsh_EndNtf
         * @instance
         */
        Carsh_EndNtf.prototype.LoseWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Carsh_EndNtf instance using the specified properties.
         * @function create
         * @memberof carsh.Carsh_EndNtf
         * @static
         * @param {carsh.ICarsh_EndNtf=} [properties] Properties to set
         * @returns {carsh.Carsh_EndNtf} Carsh_EndNtf instance
         */
        Carsh_EndNtf.create = function create(properties) {
            return new Carsh_EndNtf(properties);
        };

        /**
         * Encodes the specified Carsh_EndNtf message. Does not implicitly {@link carsh.Carsh_EndNtf.verify|verify} messages.
         * @function encode
         * @memberof carsh.Carsh_EndNtf
         * @static
         * @param {carsh.ICarsh_EndNtf} message Carsh_EndNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_EndNtf.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.LoseWin != null && Object.hasOwnProperty.call(message, "LoseWin"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.LoseWin);
            return writer;
        };

        /**
         * Encodes the specified Carsh_EndNtf message, length delimited. Does not implicitly {@link carsh.Carsh_EndNtf.verify|verify} messages.
         * @function encodeDelimited
         * @memberof carsh.Carsh_EndNtf
         * @static
         * @param {carsh.ICarsh_EndNtf} message Carsh_EndNtf message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_EndNtf.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Carsh_EndNtf message from the specified reader or buffer.
         * @function decode
         * @memberof carsh.Carsh_EndNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {carsh.Carsh_EndNtf} Carsh_EndNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_EndNtf.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.carsh.Carsh_EndNtf();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.LoseWin = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Carsh_EndNtf message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof carsh.Carsh_EndNtf
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {carsh.Carsh_EndNtf} Carsh_EndNtf
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_EndNtf.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Carsh_EndNtf message.
         * @function verify
         * @memberof carsh.Carsh_EndNtf
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Carsh_EndNtf.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.LoseWin != null && message.hasOwnProperty("LoseWin"))
                if (!$util.isInteger(message.LoseWin) && !(message.LoseWin && $util.isInteger(message.LoseWin.low) && $util.isInteger(message.LoseWin.high)))
                    return "LoseWin: integer|Long expected";
            return null;
        };

        /**
         * Creates a Carsh_EndNtf message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof carsh.Carsh_EndNtf
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {carsh.Carsh_EndNtf} Carsh_EndNtf
         */
        Carsh_EndNtf.fromObject = function fromObject(object) {
            if (object instanceof $root.carsh.Carsh_EndNtf)
                return object;
            var message = new $root.carsh.Carsh_EndNtf();
            if (object.LoseWin != null)
                if ($util.Long)
                    (message.LoseWin = $util.Long.fromValue(object.LoseWin)).unsigned = false;
                else if (typeof object.LoseWin === "string")
                    message.LoseWin = parseInt(object.LoseWin, 10);
                else if (typeof object.LoseWin === "number")
                    message.LoseWin = object.LoseWin;
                else if (typeof object.LoseWin === "object")
                    message.LoseWin = new $util.LongBits(object.LoseWin.low >>> 0, object.LoseWin.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Carsh_EndNtf message. Also converts values to other types if specified.
         * @function toObject
         * @memberof carsh.Carsh_EndNtf
         * @static
         * @param {carsh.Carsh_EndNtf} message Carsh_EndNtf
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Carsh_EndNtf.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.LoseWin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.LoseWin = options.longs === String ? "0" : 0;
            if (message.LoseWin != null && message.hasOwnProperty("LoseWin"))
                if (typeof message.LoseWin === "number")
                    object.LoseWin = options.longs === String ? String(message.LoseWin) : message.LoseWin;
                else
                    object.LoseWin = options.longs === String ? $util.Long.prototype.toString.call(message.LoseWin) : options.longs === Number ? new $util.LongBits(message.LoseWin.low >>> 0, message.LoseWin.high >>> 0).toNumber() : message.LoseWin;
            return object;
        };

        /**
         * Converts this Carsh_EndNtf to JSON.
         * @function toJSON
         * @memberof carsh.Carsh_EndNtf
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Carsh_EndNtf.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Carsh_EndNtf;
    })();

    carsh.Carsh_BetRankReq = (function() {

        /**
         * Properties of a Carsh_BetRankReq.
         * @memberof carsh
         * @interface ICarsh_BetRankReq
         */

        /**
         * Constructs a new Carsh_BetRankReq.
         * @memberof carsh
         * @classdesc Represents a Carsh_BetRankReq.
         * @implements ICarsh_BetRankReq
         * @constructor
         * @param {carsh.ICarsh_BetRankReq=} [properties] Properties to set
         */
        function Carsh_BetRankReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Carsh_BetRankReq instance using the specified properties.
         * @function create
         * @memberof carsh.Carsh_BetRankReq
         * @static
         * @param {carsh.ICarsh_BetRankReq=} [properties] Properties to set
         * @returns {carsh.Carsh_BetRankReq} Carsh_BetRankReq instance
         */
        Carsh_BetRankReq.create = function create(properties) {
            return new Carsh_BetRankReq(properties);
        };

        /**
         * Encodes the specified Carsh_BetRankReq message. Does not implicitly {@link carsh.Carsh_BetRankReq.verify|verify} messages.
         * @function encode
         * @memberof carsh.Carsh_BetRankReq
         * @static
         * @param {carsh.ICarsh_BetRankReq} message Carsh_BetRankReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_BetRankReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified Carsh_BetRankReq message, length delimited. Does not implicitly {@link carsh.Carsh_BetRankReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof carsh.Carsh_BetRankReq
         * @static
         * @param {carsh.ICarsh_BetRankReq} message Carsh_BetRankReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_BetRankReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Carsh_BetRankReq message from the specified reader or buffer.
         * @function decode
         * @memberof carsh.Carsh_BetRankReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {carsh.Carsh_BetRankReq} Carsh_BetRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_BetRankReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.carsh.Carsh_BetRankReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Carsh_BetRankReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof carsh.Carsh_BetRankReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {carsh.Carsh_BetRankReq} Carsh_BetRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_BetRankReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Carsh_BetRankReq message.
         * @function verify
         * @memberof carsh.Carsh_BetRankReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Carsh_BetRankReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a Carsh_BetRankReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof carsh.Carsh_BetRankReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {carsh.Carsh_BetRankReq} Carsh_BetRankReq
         */
        Carsh_BetRankReq.fromObject = function fromObject(object) {
            if (object instanceof $root.carsh.Carsh_BetRankReq)
                return object;
            return new $root.carsh.Carsh_BetRankReq();
        };

        /**
         * Creates a plain object from a Carsh_BetRankReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof carsh.Carsh_BetRankReq
         * @static
         * @param {carsh.Carsh_BetRankReq} message Carsh_BetRankReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Carsh_BetRankReq.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this Carsh_BetRankReq to JSON.
         * @function toJSON
         * @memberof carsh.Carsh_BetRankReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Carsh_BetRankReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Carsh_BetRankReq;
    })();

    carsh.Carsh_BetRankAck = (function() {

        /**
         * Properties of a Carsh_BetRankAck.
         * @memberof carsh
         * @interface ICarsh_BetRankAck
         * @property {number|Long|null} [TotalBet] Carsh_BetRankAck TotalBet
         * @property {Array.<carsh.Carsh_BetRankAck.IItem>|null} [RankList] Carsh_BetRankAck RankList
         */

        /**
         * Constructs a new Carsh_BetRankAck.
         * @memberof carsh
         * @classdesc Represents a Carsh_BetRankAck.
         * @implements ICarsh_BetRankAck
         * @constructor
         * @param {carsh.ICarsh_BetRankAck=} [properties] Properties to set
         */
        function Carsh_BetRankAck(properties) {
            this.RankList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Carsh_BetRankAck TotalBet.
         * @member {number|Long} TotalBet
         * @memberof carsh.Carsh_BetRankAck
         * @instance
         */
        Carsh_BetRankAck.prototype.TotalBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Carsh_BetRankAck RankList.
         * @member {Array.<carsh.Carsh_BetRankAck.IItem>} RankList
         * @memberof carsh.Carsh_BetRankAck
         * @instance
         */
        Carsh_BetRankAck.prototype.RankList = $util.emptyArray;

        /**
         * Creates a new Carsh_BetRankAck instance using the specified properties.
         * @function create
         * @memberof carsh.Carsh_BetRankAck
         * @static
         * @param {carsh.ICarsh_BetRankAck=} [properties] Properties to set
         * @returns {carsh.Carsh_BetRankAck} Carsh_BetRankAck instance
         */
        Carsh_BetRankAck.create = function create(properties) {
            return new Carsh_BetRankAck(properties);
        };

        /**
         * Encodes the specified Carsh_BetRankAck message. Does not implicitly {@link carsh.Carsh_BetRankAck.verify|verify} messages.
         * @function encode
         * @memberof carsh.Carsh_BetRankAck
         * @static
         * @param {carsh.ICarsh_BetRankAck} message Carsh_BetRankAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_BetRankAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TotalBet != null && Object.hasOwnProperty.call(message, "TotalBet"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.TotalBet);
            if (message.RankList != null && message.RankList.length)
                for (var i = 0; i < message.RankList.length; ++i)
                    $root.carsh.Carsh_BetRankAck.Item.encode(message.RankList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Carsh_BetRankAck message, length delimited. Does not implicitly {@link carsh.Carsh_BetRankAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof carsh.Carsh_BetRankAck
         * @static
         * @param {carsh.ICarsh_BetRankAck} message Carsh_BetRankAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_BetRankAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Carsh_BetRankAck message from the specified reader or buffer.
         * @function decode
         * @memberof carsh.Carsh_BetRankAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {carsh.Carsh_BetRankAck} Carsh_BetRankAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_BetRankAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.carsh.Carsh_BetRankAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TotalBet = reader.int64();
                    break;
                case 2:
                    if (!(message.RankList && message.RankList.length))
                        message.RankList = [];
                    message.RankList.push($root.carsh.Carsh_BetRankAck.Item.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Carsh_BetRankAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof carsh.Carsh_BetRankAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {carsh.Carsh_BetRankAck} Carsh_BetRankAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_BetRankAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Carsh_BetRankAck message.
         * @function verify
         * @memberof carsh.Carsh_BetRankAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Carsh_BetRankAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TotalBet != null && message.hasOwnProperty("TotalBet"))
                if (!$util.isInteger(message.TotalBet) && !(message.TotalBet && $util.isInteger(message.TotalBet.low) && $util.isInteger(message.TotalBet.high)))
                    return "TotalBet: integer|Long expected";
            if (message.RankList != null && message.hasOwnProperty("RankList")) {
                if (!Array.isArray(message.RankList))
                    return "RankList: array expected";
                for (var i = 0; i < message.RankList.length; ++i) {
                    var error = $root.carsh.Carsh_BetRankAck.Item.verify(message.RankList[i]);
                    if (error)
                        return "RankList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Carsh_BetRankAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof carsh.Carsh_BetRankAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {carsh.Carsh_BetRankAck} Carsh_BetRankAck
         */
        Carsh_BetRankAck.fromObject = function fromObject(object) {
            if (object instanceof $root.carsh.Carsh_BetRankAck)
                return object;
            var message = new $root.carsh.Carsh_BetRankAck();
            if (object.TotalBet != null)
                if ($util.Long)
                    (message.TotalBet = $util.Long.fromValue(object.TotalBet)).unsigned = false;
                else if (typeof object.TotalBet === "string")
                    message.TotalBet = parseInt(object.TotalBet, 10);
                else if (typeof object.TotalBet === "number")
                    message.TotalBet = object.TotalBet;
                else if (typeof object.TotalBet === "object")
                    message.TotalBet = new $util.LongBits(object.TotalBet.low >>> 0, object.TotalBet.high >>> 0).toNumber();
            if (object.RankList) {
                if (!Array.isArray(object.RankList))
                    throw TypeError(".carsh.Carsh_BetRankAck.RankList: array expected");
                message.RankList = [];
                for (var i = 0; i < object.RankList.length; ++i) {
                    if (typeof object.RankList[i] !== "object")
                        throw TypeError(".carsh.Carsh_BetRankAck.RankList: object expected");
                    message.RankList[i] = $root.carsh.Carsh_BetRankAck.Item.fromObject(object.RankList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Carsh_BetRankAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof carsh.Carsh_BetRankAck
         * @static
         * @param {carsh.Carsh_BetRankAck} message Carsh_BetRankAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Carsh_BetRankAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.RankList = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TotalBet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TotalBet = options.longs === String ? "0" : 0;
            if (message.TotalBet != null && message.hasOwnProperty("TotalBet"))
                if (typeof message.TotalBet === "number")
                    object.TotalBet = options.longs === String ? String(message.TotalBet) : message.TotalBet;
                else
                    object.TotalBet = options.longs === String ? $util.Long.prototype.toString.call(message.TotalBet) : options.longs === Number ? new $util.LongBits(message.TotalBet.low >>> 0, message.TotalBet.high >>> 0).toNumber() : message.TotalBet;
            if (message.RankList && message.RankList.length) {
                object.RankList = [];
                for (var j = 0; j < message.RankList.length; ++j)
                    object.RankList[j] = $root.carsh.Carsh_BetRankAck.Item.toObject(message.RankList[j], options);
            }
            return object;
        };

        /**
         * Converts this Carsh_BetRankAck to JSON.
         * @function toJSON
         * @memberof carsh.Carsh_BetRankAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Carsh_BetRankAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        Carsh_BetRankAck.Item = (function() {

            /**
             * Properties of an Item.
             * @memberof carsh.Carsh_BetRankAck
             * @interface IItem
             * @property {string|null} [Name] Item Name
             * @property {number|Long|null} [BetNum] Item BetNum
             */

            /**
             * Constructs a new Item.
             * @memberof carsh.Carsh_BetRankAck
             * @classdesc Represents an Item.
             * @implements IItem
             * @constructor
             * @param {carsh.Carsh_BetRankAck.IItem=} [properties] Properties to set
             */
            function Item(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Item Name.
             * @member {string} Name
             * @memberof carsh.Carsh_BetRankAck.Item
             * @instance
             */
            Item.prototype.Name = "";

            /**
             * Item BetNum.
             * @member {number|Long} BetNum
             * @memberof carsh.Carsh_BetRankAck.Item
             * @instance
             */
            Item.prototype.BetNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new Item instance using the specified properties.
             * @function create
             * @memberof carsh.Carsh_BetRankAck.Item
             * @static
             * @param {carsh.Carsh_BetRankAck.IItem=} [properties] Properties to set
             * @returns {carsh.Carsh_BetRankAck.Item} Item instance
             */
            Item.create = function create(properties) {
                return new Item(properties);
            };

            /**
             * Encodes the specified Item message. Does not implicitly {@link carsh.Carsh_BetRankAck.Item.verify|verify} messages.
             * @function encode
             * @memberof carsh.Carsh_BetRankAck.Item
             * @static
             * @param {carsh.Carsh_BetRankAck.IItem} message Item message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Item.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
                if (message.BetNum != null && Object.hasOwnProperty.call(message, "BetNum"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.BetNum);
                return writer;
            };

            /**
             * Encodes the specified Item message, length delimited. Does not implicitly {@link carsh.Carsh_BetRankAck.Item.verify|verify} messages.
             * @function encodeDelimited
             * @memberof carsh.Carsh_BetRankAck.Item
             * @static
             * @param {carsh.Carsh_BetRankAck.IItem} message Item message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Item.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Item message from the specified reader or buffer.
             * @function decode
             * @memberof carsh.Carsh_BetRankAck.Item
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {carsh.Carsh_BetRankAck.Item} Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Item.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.carsh.Carsh_BetRankAck.Item();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.Name = reader.string();
                        break;
                    case 2:
                        message.BetNum = reader.int64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes an Item message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof carsh.Carsh_BetRankAck.Item
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {carsh.Carsh_BetRankAck.Item} Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Item.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Item message.
             * @function verify
             * @memberof carsh.Carsh_BetRankAck.Item
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Item.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.Name != null && message.hasOwnProperty("Name"))
                    if (!$util.isString(message.Name))
                        return "Name: string expected";
                if (message.BetNum != null && message.hasOwnProperty("BetNum"))
                    if (!$util.isInteger(message.BetNum) && !(message.BetNum && $util.isInteger(message.BetNum.low) && $util.isInteger(message.BetNum.high)))
                        return "BetNum: integer|Long expected";
                return null;
            };

            /**
             * Creates an Item message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof carsh.Carsh_BetRankAck.Item
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {carsh.Carsh_BetRankAck.Item} Item
             */
            Item.fromObject = function fromObject(object) {
                if (object instanceof $root.carsh.Carsh_BetRankAck.Item)
                    return object;
                var message = new $root.carsh.Carsh_BetRankAck.Item();
                if (object.Name != null)
                    message.Name = String(object.Name);
                if (object.BetNum != null)
                    if ($util.Long)
                        (message.BetNum = $util.Long.fromValue(object.BetNum)).unsigned = false;
                    else if (typeof object.BetNum === "string")
                        message.BetNum = parseInt(object.BetNum, 10);
                    else if (typeof object.BetNum === "number")
                        message.BetNum = object.BetNum;
                    else if (typeof object.BetNum === "object")
                        message.BetNum = new $util.LongBits(object.BetNum.low >>> 0, object.BetNum.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from an Item message. Also converts values to other types if specified.
             * @function toObject
             * @memberof carsh.Carsh_BetRankAck.Item
             * @static
             * @param {carsh.Carsh_BetRankAck.Item} message Item
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Item.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.Name = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.BetNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.BetNum = options.longs === String ? "0" : 0;
                }
                if (message.Name != null && message.hasOwnProperty("Name"))
                    object.Name = message.Name;
                if (message.BetNum != null && message.hasOwnProperty("BetNum"))
                    if (typeof message.BetNum === "number")
                        object.BetNum = options.longs === String ? String(message.BetNum) : message.BetNum;
                    else
                        object.BetNum = options.longs === String ? $util.Long.prototype.toString.call(message.BetNum) : options.longs === Number ? new $util.LongBits(message.BetNum.low >>> 0, message.BetNum.high >>> 0).toNumber() : message.BetNum;
                return object;
            };

            /**
             * Converts this Item to JSON.
             * @function toJSON
             * @memberof carsh.Carsh_BetRankAck.Item
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Item.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Item;
        })();

        return Carsh_BetRankAck;
    })();

    carsh.Carsh_BetReq = (function() {

        /**
         * Properties of a Carsh_BetReq.
         * @memberof carsh
         * @interface ICarsh_BetReq
         * @property {number|Long|null} [BetNum] Carsh_BetReq BetNum
         */

        /**
         * Constructs a new Carsh_BetReq.
         * @memberof carsh
         * @classdesc Represents a Carsh_BetReq.
         * @implements ICarsh_BetReq
         * @constructor
         * @param {carsh.ICarsh_BetReq=} [properties] Properties to set
         */
        function Carsh_BetReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Carsh_BetReq BetNum.
         * @member {number|Long} BetNum
         * @memberof carsh.Carsh_BetReq
         * @instance
         */
        Carsh_BetReq.prototype.BetNum = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Carsh_BetReq instance using the specified properties.
         * @function create
         * @memberof carsh.Carsh_BetReq
         * @static
         * @param {carsh.ICarsh_BetReq=} [properties] Properties to set
         * @returns {carsh.Carsh_BetReq} Carsh_BetReq instance
         */
        Carsh_BetReq.create = function create(properties) {
            return new Carsh_BetReq(properties);
        };

        /**
         * Encodes the specified Carsh_BetReq message. Does not implicitly {@link carsh.Carsh_BetReq.verify|verify} messages.
         * @function encode
         * @memberof carsh.Carsh_BetReq
         * @static
         * @param {carsh.ICarsh_BetReq} message Carsh_BetReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_BetReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BetNum != null && Object.hasOwnProperty.call(message, "BetNum"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.BetNum);
            return writer;
        };

        /**
         * Encodes the specified Carsh_BetReq message, length delimited. Does not implicitly {@link carsh.Carsh_BetReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof carsh.Carsh_BetReq
         * @static
         * @param {carsh.ICarsh_BetReq} message Carsh_BetReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_BetReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Carsh_BetReq message from the specified reader or buffer.
         * @function decode
         * @memberof carsh.Carsh_BetReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {carsh.Carsh_BetReq} Carsh_BetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_BetReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.carsh.Carsh_BetReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BetNum = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Carsh_BetReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof carsh.Carsh_BetReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {carsh.Carsh_BetReq} Carsh_BetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_BetReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Carsh_BetReq message.
         * @function verify
         * @memberof carsh.Carsh_BetReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Carsh_BetReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.BetNum != null && message.hasOwnProperty("BetNum"))
                if (!$util.isInteger(message.BetNum) && !(message.BetNum && $util.isInteger(message.BetNum.low) && $util.isInteger(message.BetNum.high)))
                    return "BetNum: integer|Long expected";
            return null;
        };

        /**
         * Creates a Carsh_BetReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof carsh.Carsh_BetReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {carsh.Carsh_BetReq} Carsh_BetReq
         */
        Carsh_BetReq.fromObject = function fromObject(object) {
            if (object instanceof $root.carsh.Carsh_BetReq)
                return object;
            var message = new $root.carsh.Carsh_BetReq();
            if (object.BetNum != null)
                if ($util.Long)
                    (message.BetNum = $util.Long.fromValue(object.BetNum)).unsigned = false;
                else if (typeof object.BetNum === "string")
                    message.BetNum = parseInt(object.BetNum, 10);
                else if (typeof object.BetNum === "number")
                    message.BetNum = object.BetNum;
                else if (typeof object.BetNum === "object")
                    message.BetNum = new $util.LongBits(object.BetNum.low >>> 0, object.BetNum.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Carsh_BetReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof carsh.Carsh_BetReq
         * @static
         * @param {carsh.Carsh_BetReq} message Carsh_BetReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Carsh_BetReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BetNum = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BetNum = options.longs === String ? "0" : 0;
            if (message.BetNum != null && message.hasOwnProperty("BetNum"))
                if (typeof message.BetNum === "number")
                    object.BetNum = options.longs === String ? String(message.BetNum) : message.BetNum;
                else
                    object.BetNum = options.longs === String ? $util.Long.prototype.toString.call(message.BetNum) : options.longs === Number ? new $util.LongBits(message.BetNum.low >>> 0, message.BetNum.high >>> 0).toNumber() : message.BetNum;
            return object;
        };

        /**
         * Converts this Carsh_BetReq to JSON.
         * @function toJSON
         * @memberof carsh.Carsh_BetReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Carsh_BetReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Carsh_BetReq;
    })();

    carsh.Carsh_BetAck = (function() {

        /**
         * Properties of a Carsh_BetAck.
         * @memberof carsh
         * @interface ICarsh_BetAck
         * @property {carsh.Carsh_Error|null} [Code] Carsh_BetAck Code
         * @property {number|Long|null} [TotalBet] Carsh_BetAck TotalBet
         */

        /**
         * Constructs a new Carsh_BetAck.
         * @memberof carsh
         * @classdesc Represents a Carsh_BetAck.
         * @implements ICarsh_BetAck
         * @constructor
         * @param {carsh.ICarsh_BetAck=} [properties] Properties to set
         */
        function Carsh_BetAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Carsh_BetAck Code.
         * @member {carsh.Carsh_Error} Code
         * @memberof carsh.Carsh_BetAck
         * @instance
         */
        Carsh_BetAck.prototype.Code = 0;

        /**
         * Carsh_BetAck TotalBet.
         * @member {number|Long} TotalBet
         * @memberof carsh.Carsh_BetAck
         * @instance
         */
        Carsh_BetAck.prototype.TotalBet = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Carsh_BetAck instance using the specified properties.
         * @function create
         * @memberof carsh.Carsh_BetAck
         * @static
         * @param {carsh.ICarsh_BetAck=} [properties] Properties to set
         * @returns {carsh.Carsh_BetAck} Carsh_BetAck instance
         */
        Carsh_BetAck.create = function create(properties) {
            return new Carsh_BetAck(properties);
        };

        /**
         * Encodes the specified Carsh_BetAck message. Does not implicitly {@link carsh.Carsh_BetAck.verify|verify} messages.
         * @function encode
         * @memberof carsh.Carsh_BetAck
         * @static
         * @param {carsh.ICarsh_BetAck} message Carsh_BetAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_BetAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            if (message.TotalBet != null && Object.hasOwnProperty.call(message, "TotalBet"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.TotalBet);
            return writer;
        };

        /**
         * Encodes the specified Carsh_BetAck message, length delimited. Does not implicitly {@link carsh.Carsh_BetAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof carsh.Carsh_BetAck
         * @static
         * @param {carsh.ICarsh_BetAck} message Carsh_BetAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_BetAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Carsh_BetAck message from the specified reader or buffer.
         * @function decode
         * @memberof carsh.Carsh_BetAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {carsh.Carsh_BetAck} Carsh_BetAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_BetAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.carsh.Carsh_BetAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                case 2:
                    message.TotalBet = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Carsh_BetAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof carsh.Carsh_BetAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {carsh.Carsh_BetAck} Carsh_BetAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_BetAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Carsh_BetAck message.
         * @function verify
         * @memberof carsh.Carsh_BetAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Carsh_BetAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Code != null && message.hasOwnProperty("Code"))
                switch (message.Code) {
                default:
                    return "Code: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.TotalBet != null && message.hasOwnProperty("TotalBet"))
                if (!$util.isInteger(message.TotalBet) && !(message.TotalBet && $util.isInteger(message.TotalBet.low) && $util.isInteger(message.TotalBet.high)))
                    return "TotalBet: integer|Long expected";
            return null;
        };

        /**
         * Creates a Carsh_BetAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof carsh.Carsh_BetAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {carsh.Carsh_BetAck} Carsh_BetAck
         */
        Carsh_BetAck.fromObject = function fromObject(object) {
            if (object instanceof $root.carsh.Carsh_BetAck)
                return object;
            var message = new $root.carsh.Carsh_BetAck();
            switch (object.Code) {
            case "Code_Success":
            case 0:
                message.Code = 0;
                break;
            case "Code_State":
            case 1:
                message.Code = 1;
                break;
            case "Code_BetGold":
            case 2:
                message.Code = 2;
                break;
            case "Code_AlreadyBet":
            case 3:
                message.Code = 3;
                break;
            }
            if (object.TotalBet != null)
                if ($util.Long)
                    (message.TotalBet = $util.Long.fromValue(object.TotalBet)).unsigned = false;
                else if (typeof object.TotalBet === "string")
                    message.TotalBet = parseInt(object.TotalBet, 10);
                else if (typeof object.TotalBet === "number")
                    message.TotalBet = object.TotalBet;
                else if (typeof object.TotalBet === "object")
                    message.TotalBet = new $util.LongBits(object.TotalBet.low >>> 0, object.TotalBet.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Carsh_BetAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof carsh.Carsh_BetAck
         * @static
         * @param {carsh.Carsh_BetAck} message Carsh_BetAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Carsh_BetAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = options.enums === String ? "Code_Success" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TotalBet = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TotalBet = options.longs === String ? "0" : 0;
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = options.enums === String ? $root.carsh.Carsh_Error[message.Code] : message.Code;
            if (message.TotalBet != null && message.hasOwnProperty("TotalBet"))
                if (typeof message.TotalBet === "number")
                    object.TotalBet = options.longs === String ? String(message.TotalBet) : message.TotalBet;
                else
                    object.TotalBet = options.longs === String ? $util.Long.prototype.toString.call(message.TotalBet) : options.longs === Number ? new $util.LongBits(message.TotalBet.low >>> 0, message.TotalBet.high >>> 0).toNumber() : message.TotalBet;
            return object;
        };

        /**
         * Converts this Carsh_BetAck to JSON.
         * @function toJSON
         * @memberof carsh.Carsh_BetAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Carsh_BetAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Carsh_BetAck;
    })();

    carsh.Carsh_OutReq = (function() {

        /**
         * Properties of a Carsh_OutReq.
         * @memberof carsh
         * @interface ICarsh_OutReq
         * @property {number|Long|null} [OutTime] Carsh_OutReq OutTime
         */

        /**
         * Constructs a new Carsh_OutReq.
         * @memberof carsh
         * @classdesc Represents a Carsh_OutReq.
         * @implements ICarsh_OutReq
         * @constructor
         * @param {carsh.ICarsh_OutReq=} [properties] Properties to set
         */
        function Carsh_OutReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Carsh_OutReq OutTime.
         * @member {number|Long} OutTime
         * @memberof carsh.Carsh_OutReq
         * @instance
         */
        Carsh_OutReq.prototype.OutTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Carsh_OutReq instance using the specified properties.
         * @function create
         * @memberof carsh.Carsh_OutReq
         * @static
         * @param {carsh.ICarsh_OutReq=} [properties] Properties to set
         * @returns {carsh.Carsh_OutReq} Carsh_OutReq instance
         */
        Carsh_OutReq.create = function create(properties) {
            return new Carsh_OutReq(properties);
        };

        /**
         * Encodes the specified Carsh_OutReq message. Does not implicitly {@link carsh.Carsh_OutReq.verify|verify} messages.
         * @function encode
         * @memberof carsh.Carsh_OutReq
         * @static
         * @param {carsh.ICarsh_OutReq} message Carsh_OutReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_OutReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.OutTime != null && Object.hasOwnProperty.call(message, "OutTime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.OutTime);
            return writer;
        };

        /**
         * Encodes the specified Carsh_OutReq message, length delimited. Does not implicitly {@link carsh.Carsh_OutReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof carsh.Carsh_OutReq
         * @static
         * @param {carsh.ICarsh_OutReq} message Carsh_OutReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_OutReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Carsh_OutReq message from the specified reader or buffer.
         * @function decode
         * @memberof carsh.Carsh_OutReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {carsh.Carsh_OutReq} Carsh_OutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_OutReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.carsh.Carsh_OutReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.OutTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Carsh_OutReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof carsh.Carsh_OutReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {carsh.Carsh_OutReq} Carsh_OutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_OutReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Carsh_OutReq message.
         * @function verify
         * @memberof carsh.Carsh_OutReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Carsh_OutReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.OutTime != null && message.hasOwnProperty("OutTime"))
                if (!$util.isInteger(message.OutTime) && !(message.OutTime && $util.isInteger(message.OutTime.low) && $util.isInteger(message.OutTime.high)))
                    return "OutTime: integer|Long expected";
            return null;
        };

        /**
         * Creates a Carsh_OutReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof carsh.Carsh_OutReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {carsh.Carsh_OutReq} Carsh_OutReq
         */
        Carsh_OutReq.fromObject = function fromObject(object) {
            if (object instanceof $root.carsh.Carsh_OutReq)
                return object;
            var message = new $root.carsh.Carsh_OutReq();
            if (object.OutTime != null)
                if ($util.Long)
                    (message.OutTime = $util.Long.fromValue(object.OutTime)).unsigned = false;
                else if (typeof object.OutTime === "string")
                    message.OutTime = parseInt(object.OutTime, 10);
                else if (typeof object.OutTime === "number")
                    message.OutTime = object.OutTime;
                else if (typeof object.OutTime === "object")
                    message.OutTime = new $util.LongBits(object.OutTime.low >>> 0, object.OutTime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a Carsh_OutReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof carsh.Carsh_OutReq
         * @static
         * @param {carsh.Carsh_OutReq} message Carsh_OutReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Carsh_OutReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.OutTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.OutTime = options.longs === String ? "0" : 0;
            if (message.OutTime != null && message.hasOwnProperty("OutTime"))
                if (typeof message.OutTime === "number")
                    object.OutTime = options.longs === String ? String(message.OutTime) : message.OutTime;
                else
                    object.OutTime = options.longs === String ? $util.Long.prototype.toString.call(message.OutTime) : options.longs === Number ? new $util.LongBits(message.OutTime.low >>> 0, message.OutTime.high >>> 0).toNumber() : message.OutTime;
            return object;
        };

        /**
         * Converts this Carsh_OutReq to JSON.
         * @function toJSON
         * @memberof carsh.Carsh_OutReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Carsh_OutReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Carsh_OutReq;
    })();

    carsh.Carsh_OutAck = (function() {

        /**
         * Properties of a Carsh_OutAck.
         * @memberof carsh
         * @interface ICarsh_OutAck
         * @property {carsh.Carsh_Error|null} [Code] Carsh_OutAck Code
         * @property {number|null} [OutMul] Carsh_OutAck OutMul
         * @property {boolean|null} [IsAuto] Carsh_OutAck IsAuto
         */

        /**
         * Constructs a new Carsh_OutAck.
         * @memberof carsh
         * @classdesc Represents a Carsh_OutAck.
         * @implements ICarsh_OutAck
         * @constructor
         * @param {carsh.ICarsh_OutAck=} [properties] Properties to set
         */
        function Carsh_OutAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Carsh_OutAck Code.
         * @member {carsh.Carsh_Error} Code
         * @memberof carsh.Carsh_OutAck
         * @instance
         */
        Carsh_OutAck.prototype.Code = 0;

        /**
         * Carsh_OutAck OutMul.
         * @member {number} OutMul
         * @memberof carsh.Carsh_OutAck
         * @instance
         */
        Carsh_OutAck.prototype.OutMul = 0;

        /**
         * Carsh_OutAck IsAuto.
         * @member {boolean} IsAuto
         * @memberof carsh.Carsh_OutAck
         * @instance
         */
        Carsh_OutAck.prototype.IsAuto = false;

        /**
         * Creates a new Carsh_OutAck instance using the specified properties.
         * @function create
         * @memberof carsh.Carsh_OutAck
         * @static
         * @param {carsh.ICarsh_OutAck=} [properties] Properties to set
         * @returns {carsh.Carsh_OutAck} Carsh_OutAck instance
         */
        Carsh_OutAck.create = function create(properties) {
            return new Carsh_OutAck(properties);
        };

        /**
         * Encodes the specified Carsh_OutAck message. Does not implicitly {@link carsh.Carsh_OutAck.verify|verify} messages.
         * @function encode
         * @memberof carsh.Carsh_OutAck
         * @static
         * @param {carsh.ICarsh_OutAck} message Carsh_OutAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_OutAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            if (message.OutMul != null && Object.hasOwnProperty.call(message, "OutMul"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.OutMul);
            if (message.IsAuto != null && Object.hasOwnProperty.call(message, "IsAuto"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.IsAuto);
            return writer;
        };

        /**
         * Encodes the specified Carsh_OutAck message, length delimited. Does not implicitly {@link carsh.Carsh_OutAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof carsh.Carsh_OutAck
         * @static
         * @param {carsh.ICarsh_OutAck} message Carsh_OutAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_OutAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Carsh_OutAck message from the specified reader or buffer.
         * @function decode
         * @memberof carsh.Carsh_OutAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {carsh.Carsh_OutAck} Carsh_OutAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_OutAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.carsh.Carsh_OutAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                case 2:
                    message.OutMul = reader.int32();
                    break;
                case 3:
                    message.IsAuto = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Carsh_OutAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof carsh.Carsh_OutAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {carsh.Carsh_OutAck} Carsh_OutAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_OutAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Carsh_OutAck message.
         * @function verify
         * @memberof carsh.Carsh_OutAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Carsh_OutAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Code != null && message.hasOwnProperty("Code"))
                switch (message.Code) {
                default:
                    return "Code: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.OutMul != null && message.hasOwnProperty("OutMul"))
                if (!$util.isInteger(message.OutMul))
                    return "OutMul: integer expected";
            if (message.IsAuto != null && message.hasOwnProperty("IsAuto"))
                if (typeof message.IsAuto !== "boolean")
                    return "IsAuto: boolean expected";
            return null;
        };

        /**
         * Creates a Carsh_OutAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof carsh.Carsh_OutAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {carsh.Carsh_OutAck} Carsh_OutAck
         */
        Carsh_OutAck.fromObject = function fromObject(object) {
            if (object instanceof $root.carsh.Carsh_OutAck)
                return object;
            var message = new $root.carsh.Carsh_OutAck();
            switch (object.Code) {
            case "Code_Success":
            case 0:
                message.Code = 0;
                break;
            case "Code_State":
            case 1:
                message.Code = 1;
                break;
            case "Code_BetGold":
            case 2:
                message.Code = 2;
                break;
            case "Code_AlreadyBet":
            case 3:
                message.Code = 3;
                break;
            }
            if (object.OutMul != null)
                message.OutMul = object.OutMul | 0;
            if (object.IsAuto != null)
                message.IsAuto = Boolean(object.IsAuto);
            return message;
        };

        /**
         * Creates a plain object from a Carsh_OutAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof carsh.Carsh_OutAck
         * @static
         * @param {carsh.Carsh_OutAck} message Carsh_OutAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Carsh_OutAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = options.enums === String ? "Code_Success" : 0;
                object.OutMul = 0;
                object.IsAuto = false;
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = options.enums === String ? $root.carsh.Carsh_Error[message.Code] : message.Code;
            if (message.OutMul != null && message.hasOwnProperty("OutMul"))
                object.OutMul = message.OutMul;
            if (message.IsAuto != null && message.hasOwnProperty("IsAuto"))
                object.IsAuto = message.IsAuto;
            return object;
        };

        /**
         * Converts this Carsh_OutAck to JSON.
         * @function toJSON
         * @memberof carsh.Carsh_OutAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Carsh_OutAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Carsh_OutAck;
    })();

    carsh.Carsh_AutoOutReq = (function() {

        /**
         * Properties of a Carsh_AutoOutReq.
         * @memberof carsh
         * @interface ICarsh_AutoOutReq
         * @property {number|null} [OutMul] Carsh_AutoOutReq OutMul
         */

        /**
         * Constructs a new Carsh_AutoOutReq.
         * @memberof carsh
         * @classdesc Represents a Carsh_AutoOutReq.
         * @implements ICarsh_AutoOutReq
         * @constructor
         * @param {carsh.ICarsh_AutoOutReq=} [properties] Properties to set
         */
        function Carsh_AutoOutReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Carsh_AutoOutReq OutMul.
         * @member {number} OutMul
         * @memberof carsh.Carsh_AutoOutReq
         * @instance
         */
        Carsh_AutoOutReq.prototype.OutMul = 0;

        /**
         * Creates a new Carsh_AutoOutReq instance using the specified properties.
         * @function create
         * @memberof carsh.Carsh_AutoOutReq
         * @static
         * @param {carsh.ICarsh_AutoOutReq=} [properties] Properties to set
         * @returns {carsh.Carsh_AutoOutReq} Carsh_AutoOutReq instance
         */
        Carsh_AutoOutReq.create = function create(properties) {
            return new Carsh_AutoOutReq(properties);
        };

        /**
         * Encodes the specified Carsh_AutoOutReq message. Does not implicitly {@link carsh.Carsh_AutoOutReq.verify|verify} messages.
         * @function encode
         * @memberof carsh.Carsh_AutoOutReq
         * @static
         * @param {carsh.ICarsh_AutoOutReq} message Carsh_AutoOutReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_AutoOutReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.OutMul != null && Object.hasOwnProperty.call(message, "OutMul"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.OutMul);
            return writer;
        };

        /**
         * Encodes the specified Carsh_AutoOutReq message, length delimited. Does not implicitly {@link carsh.Carsh_AutoOutReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof carsh.Carsh_AutoOutReq
         * @static
         * @param {carsh.ICarsh_AutoOutReq} message Carsh_AutoOutReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_AutoOutReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Carsh_AutoOutReq message from the specified reader or buffer.
         * @function decode
         * @memberof carsh.Carsh_AutoOutReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {carsh.Carsh_AutoOutReq} Carsh_AutoOutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_AutoOutReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.carsh.Carsh_AutoOutReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.OutMul = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Carsh_AutoOutReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof carsh.Carsh_AutoOutReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {carsh.Carsh_AutoOutReq} Carsh_AutoOutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_AutoOutReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Carsh_AutoOutReq message.
         * @function verify
         * @memberof carsh.Carsh_AutoOutReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Carsh_AutoOutReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.OutMul != null && message.hasOwnProperty("OutMul"))
                if (!$util.isInteger(message.OutMul))
                    return "OutMul: integer expected";
            return null;
        };

        /**
         * Creates a Carsh_AutoOutReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof carsh.Carsh_AutoOutReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {carsh.Carsh_AutoOutReq} Carsh_AutoOutReq
         */
        Carsh_AutoOutReq.fromObject = function fromObject(object) {
            if (object instanceof $root.carsh.Carsh_AutoOutReq)
                return object;
            var message = new $root.carsh.Carsh_AutoOutReq();
            if (object.OutMul != null)
                message.OutMul = object.OutMul | 0;
            return message;
        };

        /**
         * Creates a plain object from a Carsh_AutoOutReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof carsh.Carsh_AutoOutReq
         * @static
         * @param {carsh.Carsh_AutoOutReq} message Carsh_AutoOutReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Carsh_AutoOutReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.OutMul = 0;
            if (message.OutMul != null && message.hasOwnProperty("OutMul"))
                object.OutMul = message.OutMul;
            return object;
        };

        /**
         * Converts this Carsh_AutoOutReq to JSON.
         * @function toJSON
         * @memberof carsh.Carsh_AutoOutReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Carsh_AutoOutReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Carsh_AutoOutReq;
    })();

    carsh.Carsh_AutoOutAck = (function() {

        /**
         * Properties of a Carsh_AutoOutAck.
         * @memberof carsh
         * @interface ICarsh_AutoOutAck
         * @property {carsh.Carsh_Error|null} [Code] Carsh_AutoOutAck Code
         */

        /**
         * Constructs a new Carsh_AutoOutAck.
         * @memberof carsh
         * @classdesc Represents a Carsh_AutoOutAck.
         * @implements ICarsh_AutoOutAck
         * @constructor
         * @param {carsh.ICarsh_AutoOutAck=} [properties] Properties to set
         */
        function Carsh_AutoOutAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Carsh_AutoOutAck Code.
         * @member {carsh.Carsh_Error} Code
         * @memberof carsh.Carsh_AutoOutAck
         * @instance
         */
        Carsh_AutoOutAck.prototype.Code = 0;

        /**
         * Creates a new Carsh_AutoOutAck instance using the specified properties.
         * @function create
         * @memberof carsh.Carsh_AutoOutAck
         * @static
         * @param {carsh.ICarsh_AutoOutAck=} [properties] Properties to set
         * @returns {carsh.Carsh_AutoOutAck} Carsh_AutoOutAck instance
         */
        Carsh_AutoOutAck.create = function create(properties) {
            return new Carsh_AutoOutAck(properties);
        };

        /**
         * Encodes the specified Carsh_AutoOutAck message. Does not implicitly {@link carsh.Carsh_AutoOutAck.verify|verify} messages.
         * @function encode
         * @memberof carsh.Carsh_AutoOutAck
         * @static
         * @param {carsh.ICarsh_AutoOutAck} message Carsh_AutoOutAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_AutoOutAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            return writer;
        };

        /**
         * Encodes the specified Carsh_AutoOutAck message, length delimited. Does not implicitly {@link carsh.Carsh_AutoOutAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof carsh.Carsh_AutoOutAck
         * @static
         * @param {carsh.ICarsh_AutoOutAck} message Carsh_AutoOutAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Carsh_AutoOutAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Carsh_AutoOutAck message from the specified reader or buffer.
         * @function decode
         * @memberof carsh.Carsh_AutoOutAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {carsh.Carsh_AutoOutAck} Carsh_AutoOutAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_AutoOutAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.carsh.Carsh_AutoOutAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Carsh_AutoOutAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof carsh.Carsh_AutoOutAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {carsh.Carsh_AutoOutAck} Carsh_AutoOutAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Carsh_AutoOutAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Carsh_AutoOutAck message.
         * @function verify
         * @memberof carsh.Carsh_AutoOutAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Carsh_AutoOutAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Code != null && message.hasOwnProperty("Code"))
                switch (message.Code) {
                default:
                    return "Code: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a Carsh_AutoOutAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof carsh.Carsh_AutoOutAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {carsh.Carsh_AutoOutAck} Carsh_AutoOutAck
         */
        Carsh_AutoOutAck.fromObject = function fromObject(object) {
            if (object instanceof $root.carsh.Carsh_AutoOutAck)
                return object;
            var message = new $root.carsh.Carsh_AutoOutAck();
            switch (object.Code) {
            case "Code_Success":
            case 0:
                message.Code = 0;
                break;
            case "Code_State":
            case 1:
                message.Code = 1;
                break;
            case "Code_BetGold":
            case 2:
                message.Code = 2;
                break;
            case "Code_AlreadyBet":
            case 3:
                message.Code = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a Carsh_AutoOutAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof carsh.Carsh_AutoOutAck
         * @static
         * @param {carsh.Carsh_AutoOutAck} message Carsh_AutoOutAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Carsh_AutoOutAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Code = options.enums === String ? "Code_Success" : 0;
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = options.enums === String ? $root.carsh.Carsh_Error[message.Code] : message.Code;
            return object;
        };

        /**
         * Converts this Carsh_AutoOutAck to JSON.
         * @function toJSON
         * @memberof carsh.Carsh_AutoOutAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Carsh_AutoOutAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Carsh_AutoOutAck;
    })();

    return carsh;
})();

module.exports = $root;
