/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.common = (function() {

    /**
     * Namespace common.
     * @exports common
     * @namespace
     */
    var common = {};

    common.RetMessage = (function() {

        /**
         * Properties of a RetMessage.
         * @memberof common
         * @interface IRetMessage
         * @property {number} Code RetMessage Code
         * @property {string} Message RetMessage Message
         */

        /**
         * Constructs a new RetMessage.
         * @memberof common
         * @classdesc Represents a RetMessage.
         * @implements IRetMessage
         * @constructor
         * @param {common.IRetMessage=} [properties] Properties to set
         */
        function RetMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RetMessage Code.
         * @member {number} Code
         * @memberof common.RetMessage
         * @instance
         */
        RetMessage.prototype.Code = 0;

        /**
         * RetMessage Message.
         * @member {string} Message
         * @memberof common.RetMessage
         * @instance
         */
        RetMessage.prototype.Message = "";

        /**
         * Creates a new RetMessage instance using the specified properties.
         * @function create
         * @memberof common.RetMessage
         * @static
         * @param {common.IRetMessage=} [properties] Properties to set
         * @returns {common.RetMessage} RetMessage instance
         */
        RetMessage.create = function create(properties) {
            return new RetMessage(properties);
        };

        /**
         * Encodes the specified RetMessage message. Does not implicitly {@link common.RetMessage.verify|verify} messages.
         * @function encode
         * @memberof common.RetMessage
         * @static
         * @param {common.IRetMessage} message RetMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RetMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified RetMessage message, length delimited. Does not implicitly {@link common.RetMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.RetMessage
         * @static
         * @param {common.IRetMessage} message RetMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RetMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RetMessage message from the specified reader or buffer.
         * @function decode
         * @memberof common.RetMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.RetMessage} RetMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RetMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.RetMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                case 2:
                    message.Message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Code"))
                throw $util.ProtocolError("missing required 'Code'", { instance: message });
            if (!message.hasOwnProperty("Message"))
                throw $util.ProtocolError("missing required 'Message'", { instance: message });
            return message;
        };

        /**
         * Decodes a RetMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.RetMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.RetMessage} RetMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RetMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RetMessage message.
         * @function verify
         * @memberof common.RetMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RetMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Code))
                return "Code: integer expected";
            if (!$util.isString(message.Message))
                return "Message: string expected";
            return null;
        };

        /**
         * Creates a RetMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.RetMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.RetMessage} RetMessage
         */
        RetMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.common.RetMessage)
                return object;
            var message = new $root.common.RetMessage();
            if (object.Code != null)
                message.Code = object.Code | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            return message;
        };

        /**
         * Creates a plain object from a RetMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.RetMessage
         * @static
         * @param {common.RetMessage} message RetMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RetMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = 0;
                object.Message = "";
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this RetMessage to JSON.
         * @function toJSON
         * @memberof common.RetMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RetMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RetMessage;
    })();

    common.RPCInfo = (function() {

        /**
         * Properties of a RPCInfo.
         * @memberof common
         * @interface IRPCInfo
         * @property {string} ConnID RPCInfo ConnID
         * @property {number} QueueID RPCInfo QueueID
         * @property {string} IPAddress RPCInfo IPAddress
         * @property {number|null} [UserID] RPCInfo UserID
         * @property {string|null} [Cer] RPCInfo Cer
         * @property {number} RouteServerID RPCInfo RouteServerID
         * @property {string|null} [ExtendInfo] RPCInfo ExtendInfo
         */

        /**
         * Constructs a new RPCInfo.
         * @memberof common
         * @classdesc Represents a RPCInfo.
         * @implements IRPCInfo
         * @constructor
         * @param {common.IRPCInfo=} [properties] Properties to set
         */
        function RPCInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RPCInfo ConnID.
         * @member {string} ConnID
         * @memberof common.RPCInfo
         * @instance
         */
        RPCInfo.prototype.ConnID = "";

        /**
         * RPCInfo QueueID.
         * @member {number} QueueID
         * @memberof common.RPCInfo
         * @instance
         */
        RPCInfo.prototype.QueueID = 0;

        /**
         * RPCInfo IPAddress.
         * @member {string} IPAddress
         * @memberof common.RPCInfo
         * @instance
         */
        RPCInfo.prototype.IPAddress = "";

        /**
         * RPCInfo UserID.
         * @member {number} UserID
         * @memberof common.RPCInfo
         * @instance
         */
        RPCInfo.prototype.UserID = 0;

        /**
         * RPCInfo Cer.
         * @member {string} Cer
         * @memberof common.RPCInfo
         * @instance
         */
        RPCInfo.prototype.Cer = "";

        /**
         * RPCInfo RouteServerID.
         * @member {number} RouteServerID
         * @memberof common.RPCInfo
         * @instance
         */
        RPCInfo.prototype.RouteServerID = 0;

        /**
         * RPCInfo ExtendInfo.
         * @member {string} ExtendInfo
         * @memberof common.RPCInfo
         * @instance
         */
        RPCInfo.prototype.ExtendInfo = "";

        /**
         * Creates a new RPCInfo instance using the specified properties.
         * @function create
         * @memberof common.RPCInfo
         * @static
         * @param {common.IRPCInfo=} [properties] Properties to set
         * @returns {common.RPCInfo} RPCInfo instance
         */
        RPCInfo.create = function create(properties) {
            return new RPCInfo(properties);
        };

        /**
         * Encodes the specified RPCInfo message. Does not implicitly {@link common.RPCInfo.verify|verify} messages.
         * @function encode
         * @memberof common.RPCInfo
         * @static
         * @param {common.IRPCInfo} message RPCInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RPCInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ConnID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.QueueID);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.IPAddress);
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.UserID);
            if (message.Cer != null && Object.hasOwnProperty.call(message, "Cer"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Cer);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.RouteServerID);
            if (message.ExtendInfo != null && Object.hasOwnProperty.call(message, "ExtendInfo"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.ExtendInfo);
            return writer;
        };

        /**
         * Encodes the specified RPCInfo message, length delimited. Does not implicitly {@link common.RPCInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.RPCInfo
         * @static
         * @param {common.IRPCInfo} message RPCInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RPCInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RPCInfo message from the specified reader or buffer.
         * @function decode
         * @memberof common.RPCInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.RPCInfo} RPCInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RPCInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.RPCInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ConnID = reader.string();
                    break;
                case 2:
                    message.QueueID = reader.int32();
                    break;
                case 3:
                    message.IPAddress = reader.string();
                    break;
                case 4:
                    message.UserID = reader.int32();
                    break;
                case 5:
                    message.Cer = reader.string();
                    break;
                case 6:
                    message.RouteServerID = reader.int32();
                    break;
                case 7:
                    message.ExtendInfo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ConnID"))
                throw $util.ProtocolError("missing required 'ConnID'", { instance: message });
            if (!message.hasOwnProperty("QueueID"))
                throw $util.ProtocolError("missing required 'QueueID'", { instance: message });
            if (!message.hasOwnProperty("IPAddress"))
                throw $util.ProtocolError("missing required 'IPAddress'", { instance: message });
            if (!message.hasOwnProperty("RouteServerID"))
                throw $util.ProtocolError("missing required 'RouteServerID'", { instance: message });
            return message;
        };

        /**
         * Decodes a RPCInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.RPCInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.RPCInfo} RPCInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RPCInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RPCInfo message.
         * @function verify
         * @memberof common.RPCInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RPCInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ConnID))
                return "ConnID: string expected";
            if (!$util.isInteger(message.QueueID))
                return "QueueID: integer expected";
            if (!$util.isString(message.IPAddress))
                return "IPAddress: string expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.Cer != null && message.hasOwnProperty("Cer"))
                if (!$util.isString(message.Cer))
                    return "Cer: string expected";
            if (!$util.isInteger(message.RouteServerID))
                return "RouteServerID: integer expected";
            if (message.ExtendInfo != null && message.hasOwnProperty("ExtendInfo"))
                if (!$util.isString(message.ExtendInfo))
                    return "ExtendInfo: string expected";
            return null;
        };

        /**
         * Creates a RPCInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.RPCInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.RPCInfo} RPCInfo
         */
        RPCInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.common.RPCInfo)
                return object;
            var message = new $root.common.RPCInfo();
            if (object.ConnID != null)
                message.ConnID = String(object.ConnID);
            if (object.QueueID != null)
                message.QueueID = object.QueueID | 0;
            if (object.IPAddress != null)
                message.IPAddress = String(object.IPAddress);
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Cer != null)
                message.Cer = String(object.Cer);
            if (object.RouteServerID != null)
                message.RouteServerID = object.RouteServerID | 0;
            if (object.ExtendInfo != null)
                message.ExtendInfo = String(object.ExtendInfo);
            return message;
        };

        /**
         * Creates a plain object from a RPCInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.RPCInfo
         * @static
         * @param {common.RPCInfo} message RPCInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RPCInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ConnID = "";
                object.QueueID = 0;
                object.IPAddress = "";
                object.UserID = 0;
                object.Cer = "";
                object.RouteServerID = 0;
                object.ExtendInfo = "";
            }
            if (message.ConnID != null && message.hasOwnProperty("ConnID"))
                object.ConnID = message.ConnID;
            if (message.QueueID != null && message.hasOwnProperty("QueueID"))
                object.QueueID = message.QueueID;
            if (message.IPAddress != null && message.hasOwnProperty("IPAddress"))
                object.IPAddress = message.IPAddress;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Cer != null && message.hasOwnProperty("Cer"))
                object.Cer = message.Cer;
            if (message.RouteServerID != null && message.hasOwnProperty("RouteServerID"))
                object.RouteServerID = message.RouteServerID;
            if (message.ExtendInfo != null && message.hasOwnProperty("ExtendInfo"))
                object.ExtendInfo = message.ExtendInfo;
            return object;
        };

        /**
         * Converts this RPCInfo to JSON.
         * @function toJSON
         * @memberof common.RPCInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RPCInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RPCInfo;
    })();

    common.TipMessage = (function() {

        /**
         * Properties of a TipMessage.
         * @memberof common
         * @interface ITipMessage
         * @property {string} Message TipMessage Message
         * @property {number} MsgType TipMessage MsgType
         * @property {number|null} [Param] TipMessage Param
         */

        /**
         * Constructs a new TipMessage.
         * @memberof common
         * @classdesc Represents a TipMessage.
         * @implements ITipMessage
         * @constructor
         * @param {common.ITipMessage=} [properties] Properties to set
         */
        function TipMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TipMessage Message.
         * @member {string} Message
         * @memberof common.TipMessage
         * @instance
         */
        TipMessage.prototype.Message = "";

        /**
         * TipMessage MsgType.
         * @member {number} MsgType
         * @memberof common.TipMessage
         * @instance
         */
        TipMessage.prototype.MsgType = 0;

        /**
         * TipMessage Param.
         * @member {number} Param
         * @memberof common.TipMessage
         * @instance
         */
        TipMessage.prototype.Param = 0;

        /**
         * Creates a new TipMessage instance using the specified properties.
         * @function create
         * @memberof common.TipMessage
         * @static
         * @param {common.ITipMessage=} [properties] Properties to set
         * @returns {common.TipMessage} TipMessage instance
         */
        TipMessage.create = function create(properties) {
            return new TipMessage(properties);
        };

        /**
         * Encodes the specified TipMessage message. Does not implicitly {@link common.TipMessage.verify|verify} messages.
         * @function encode
         * @memberof common.TipMessage
         * @static
         * @param {common.ITipMessage} message TipMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TipMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Message);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.MsgType);
            if (message.Param != null && Object.hasOwnProperty.call(message, "Param"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Param);
            return writer;
        };

        /**
         * Encodes the specified TipMessage message, length delimited. Does not implicitly {@link common.TipMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.TipMessage
         * @static
         * @param {common.ITipMessage} message TipMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TipMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TipMessage message from the specified reader or buffer.
         * @function decode
         * @memberof common.TipMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.TipMessage} TipMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TipMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.TipMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Message = reader.string();
                    break;
                case 2:
                    message.MsgType = reader.int32();
                    break;
                case 3:
                    message.Param = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Message"))
                throw $util.ProtocolError("missing required 'Message'", { instance: message });
            if (!message.hasOwnProperty("MsgType"))
                throw $util.ProtocolError("missing required 'MsgType'", { instance: message });
            return message;
        };

        /**
         * Decodes a TipMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.TipMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.TipMessage} TipMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TipMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TipMessage message.
         * @function verify
         * @memberof common.TipMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TipMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.Message))
                return "Message: string expected";
            if (!$util.isInteger(message.MsgType))
                return "MsgType: integer expected";
            if (message.Param != null && message.hasOwnProperty("Param"))
                if (!$util.isInteger(message.Param))
                    return "Param: integer expected";
            return null;
        };

        /**
         * Creates a TipMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.TipMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.TipMessage} TipMessage
         */
        TipMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.common.TipMessage)
                return object;
            var message = new $root.common.TipMessage();
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.MsgType != null)
                message.MsgType = object.MsgType | 0;
            if (object.Param != null)
                message.Param = object.Param | 0;
            return message;
        };

        /**
         * Creates a plain object from a TipMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.TipMessage
         * @static
         * @param {common.TipMessage} message TipMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TipMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Message = "";
                object.MsgType = 0;
                object.Param = 0;
            }
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            if (message.MsgType != null && message.hasOwnProperty("MsgType"))
                object.MsgType = message.MsgType;
            if (message.Param != null && message.hasOwnProperty("Param"))
                object.Param = message.Param;
            return object;
        };

        /**
         * Converts this TipMessage to JSON.
         * @function toJSON
         * @memberof common.TipMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TipMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TipMessage;
    })();

    common.HeartBeatConfig = (function() {

        /**
         * Properties of a HeartBeatConfig.
         * @memberof common
         * @interface IHeartBeatConfig
         * @property {number} BeatInterval HeartBeatConfig BeatInterval
         * @property {number} ConnLoseTimeSpan HeartBeatConfig ConnLoseTimeSpan
         */

        /**
         * Constructs a new HeartBeatConfig.
         * @memberof common
         * @classdesc Represents a HeartBeatConfig.
         * @implements IHeartBeatConfig
         * @constructor
         * @param {common.IHeartBeatConfig=} [properties] Properties to set
         */
        function HeartBeatConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HeartBeatConfig BeatInterval.
         * @member {number} BeatInterval
         * @memberof common.HeartBeatConfig
         * @instance
         */
        HeartBeatConfig.prototype.BeatInterval = 0;

        /**
         * HeartBeatConfig ConnLoseTimeSpan.
         * @member {number} ConnLoseTimeSpan
         * @memberof common.HeartBeatConfig
         * @instance
         */
        HeartBeatConfig.prototype.ConnLoseTimeSpan = 0;

        /**
         * Creates a new HeartBeatConfig instance using the specified properties.
         * @function create
         * @memberof common.HeartBeatConfig
         * @static
         * @param {common.IHeartBeatConfig=} [properties] Properties to set
         * @returns {common.HeartBeatConfig} HeartBeatConfig instance
         */
        HeartBeatConfig.create = function create(properties) {
            return new HeartBeatConfig(properties);
        };

        /**
         * Encodes the specified HeartBeatConfig message. Does not implicitly {@link common.HeartBeatConfig.verify|verify} messages.
         * @function encode
         * @memberof common.HeartBeatConfig
         * @static
         * @param {common.IHeartBeatConfig} message HeartBeatConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.BeatInterval);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ConnLoseTimeSpan);
            return writer;
        };

        /**
         * Encodes the specified HeartBeatConfig message, length delimited. Does not implicitly {@link common.HeartBeatConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.HeartBeatConfig
         * @static
         * @param {common.IHeartBeatConfig} message HeartBeatConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HeartBeatConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HeartBeatConfig message from the specified reader or buffer.
         * @function decode
         * @memberof common.HeartBeatConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.HeartBeatConfig} HeartBeatConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.HeartBeatConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BeatInterval = reader.int32();
                    break;
                case 2:
                    message.ConnLoseTimeSpan = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("BeatInterval"))
                throw $util.ProtocolError("missing required 'BeatInterval'", { instance: message });
            if (!message.hasOwnProperty("ConnLoseTimeSpan"))
                throw $util.ProtocolError("missing required 'ConnLoseTimeSpan'", { instance: message });
            return message;
        };

        /**
         * Decodes a HeartBeatConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.HeartBeatConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.HeartBeatConfig} HeartBeatConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HeartBeatConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HeartBeatConfig message.
         * @function verify
         * @memberof common.HeartBeatConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HeartBeatConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.BeatInterval))
                return "BeatInterval: integer expected";
            if (!$util.isInteger(message.ConnLoseTimeSpan))
                return "ConnLoseTimeSpan: integer expected";
            return null;
        };

        /**
         * Creates a HeartBeatConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.HeartBeatConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.HeartBeatConfig} HeartBeatConfig
         */
        HeartBeatConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.common.HeartBeatConfig)
                return object;
            var message = new $root.common.HeartBeatConfig();
            if (object.BeatInterval != null)
                message.BeatInterval = object.BeatInterval | 0;
            if (object.ConnLoseTimeSpan != null)
                message.ConnLoseTimeSpan = object.ConnLoseTimeSpan | 0;
            return message;
        };

        /**
         * Creates a plain object from a HeartBeatConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.HeartBeatConfig
         * @static
         * @param {common.HeartBeatConfig} message HeartBeatConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HeartBeatConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.BeatInterval = 0;
                object.ConnLoseTimeSpan = 0;
            }
            if (message.BeatInterval != null && message.hasOwnProperty("BeatInterval"))
                object.BeatInterval = message.BeatInterval;
            if (message.ConnLoseTimeSpan != null && message.hasOwnProperty("ConnLoseTimeSpan"))
                object.ConnLoseTimeSpan = message.ConnLoseTimeSpan;
            return object;
        };

        /**
         * Converts this HeartBeatConfig to JSON.
         * @function toJSON
         * @memberof common.HeartBeatConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HeartBeatConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HeartBeatConfig;
    })();

    common.IPReport = (function() {

        /**
         * Properties of a IPReport.
         * @memberof common
         * @interface IIPReport
         * @property {string} IPAddress IPReport IPAddress
         */

        /**
         * Constructs a new IPReport.
         * @memberof common
         * @classdesc Represents a IPReport.
         * @implements IIPReport
         * @constructor
         * @param {common.IIPReport=} [properties] Properties to set
         */
        function IPReport(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IPReport IPAddress.
         * @member {string} IPAddress
         * @memberof common.IPReport
         * @instance
         */
        IPReport.prototype.IPAddress = "";

        /**
         * Creates a new IPReport instance using the specified properties.
         * @function create
         * @memberof common.IPReport
         * @static
         * @param {common.IIPReport=} [properties] Properties to set
         * @returns {common.IPReport} IPReport instance
         */
        IPReport.create = function create(properties) {
            return new IPReport(properties);
        };

        /**
         * Encodes the specified IPReport message. Does not implicitly {@link common.IPReport.verify|verify} messages.
         * @function encode
         * @memberof common.IPReport
         * @static
         * @param {common.IIPReport} message IPReport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IPReport.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.IPAddress);
            return writer;
        };

        /**
         * Encodes the specified IPReport message, length delimited. Does not implicitly {@link common.IPReport.verify|verify} messages.
         * @function encodeDelimited
         * @memberof common.IPReport
         * @static
         * @param {common.IIPReport} message IPReport message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IPReport.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a IPReport message from the specified reader or buffer.
         * @function decode
         * @memberof common.IPReport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {common.IPReport} IPReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IPReport.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.common.IPReport();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.IPAddress = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("IPAddress"))
                throw $util.ProtocolError("missing required 'IPAddress'", { instance: message });
            return message;
        };

        /**
         * Decodes a IPReport message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof common.IPReport
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {common.IPReport} IPReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IPReport.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a IPReport message.
         * @function verify
         * @memberof common.IPReport
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IPReport.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.IPAddress))
                return "IPAddress: string expected";
            return null;
        };

        /**
         * Creates a IPReport message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof common.IPReport
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {common.IPReport} IPReport
         */
        IPReport.fromObject = function fromObject(object) {
            if (object instanceof $root.common.IPReport)
                return object;
            var message = new $root.common.IPReport();
            if (object.IPAddress != null)
                message.IPAddress = String(object.IPAddress);
            return message;
        };

        /**
         * Creates a plain object from a IPReport message. Also converts values to other types if specified.
         * @function toObject
         * @memberof common.IPReport
         * @static
         * @param {common.IPReport} message IPReport
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IPReport.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.IPAddress = "";
            if (message.IPAddress != null && message.hasOwnProperty("IPAddress"))
                object.IPAddress = message.IPAddress;
            return object;
        };

        /**
         * Converts this IPReport to JSON.
         * @function toJSON
         * @memberof common.IPReport
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IPReport.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return IPReport;
    })();

    return common;
})();

module.exports = $root;
