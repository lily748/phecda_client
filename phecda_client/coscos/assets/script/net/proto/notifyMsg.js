/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.notify = (function() {

    /**
     * Namespace notify.
     * @exports notify
     * @namespace
     */
    var notify = {};

    notify.NotifyServerRegInfo = (function() {

        /**
         * Properties of a NotifyServerRegInfo.
         * @memberof notify
         * @interface INotifyServerRegInfo
         * @property {number} ServerID NotifyServerRegInfo ServerID
         * @property {number|null} [GameID] NotifyServerRegInfo GameID
         * @property {number} ServerType NotifyServerRegInfo ServerType
         * @property {number|null} [LianyunID] NotifyServerRegInfo LianyunID
         */

        /**
         * Constructs a new NotifyServerRegInfo.
         * @memberof notify
         * @classdesc Represents a NotifyServerRegInfo.
         * @implements INotifyServerRegInfo
         * @constructor
         * @param {notify.INotifyServerRegInfo=} [properties] Properties to set
         */
        function NotifyServerRegInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotifyServerRegInfo ServerID.
         * @member {number} ServerID
         * @memberof notify.NotifyServerRegInfo
         * @instance
         */
        NotifyServerRegInfo.prototype.ServerID = 0;

        /**
         * NotifyServerRegInfo GameID.
         * @member {number} GameID
         * @memberof notify.NotifyServerRegInfo
         * @instance
         */
        NotifyServerRegInfo.prototype.GameID = 0;

        /**
         * NotifyServerRegInfo ServerType.
         * @member {number} ServerType
         * @memberof notify.NotifyServerRegInfo
         * @instance
         */
        NotifyServerRegInfo.prototype.ServerType = 0;

        /**
         * NotifyServerRegInfo LianyunID.
         * @member {number} LianyunID
         * @memberof notify.NotifyServerRegInfo
         * @instance
         */
        NotifyServerRegInfo.prototype.LianyunID = 0;

        /**
         * Creates a new NotifyServerRegInfo instance using the specified properties.
         * @function create
         * @memberof notify.NotifyServerRegInfo
         * @static
         * @param {notify.INotifyServerRegInfo=} [properties] Properties to set
         * @returns {notify.NotifyServerRegInfo} NotifyServerRegInfo instance
         */
        NotifyServerRegInfo.create = function create(properties) {
            return new NotifyServerRegInfo(properties);
        };

        /**
         * Encodes the specified NotifyServerRegInfo message. Does not implicitly {@link notify.NotifyServerRegInfo.verify|verify} messages.
         * @function encode
         * @memberof notify.NotifyServerRegInfo
         * @static
         * @param {notify.INotifyServerRegInfo} message NotifyServerRegInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyServerRegInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ServerID);
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GameID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ServerType);
            if (message.LianyunID != null && Object.hasOwnProperty.call(message, "LianyunID"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.LianyunID);
            return writer;
        };

        /**
         * Encodes the specified NotifyServerRegInfo message, length delimited. Does not implicitly {@link notify.NotifyServerRegInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof notify.NotifyServerRegInfo
         * @static
         * @param {notify.INotifyServerRegInfo} message NotifyServerRegInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyServerRegInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotifyServerRegInfo message from the specified reader or buffer.
         * @function decode
         * @memberof notify.NotifyServerRegInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {notify.NotifyServerRegInfo} NotifyServerRegInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyServerRegInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.notify.NotifyServerRegInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ServerID = reader.int32();
                    break;
                case 2:
                    message.GameID = reader.int32();
                    break;
                case 3:
                    message.ServerType = reader.int32();
                    break;
                case 4:
                    message.LianyunID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ServerID"))
                throw $util.ProtocolError("missing required 'ServerID'", { instance: message });
            if (!message.hasOwnProperty("ServerType"))
                throw $util.ProtocolError("missing required 'ServerType'", { instance: message });
            return message;
        };

        /**
         * Decodes a NotifyServerRegInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof notify.NotifyServerRegInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {notify.NotifyServerRegInfo} NotifyServerRegInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyServerRegInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotifyServerRegInfo message.
         * @function verify
         * @memberof notify.NotifyServerRegInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotifyServerRegInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ServerID))
                return "ServerID: integer expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            if (!$util.isInteger(message.ServerType))
                return "ServerType: integer expected";
            if (message.LianyunID != null && message.hasOwnProperty("LianyunID"))
                if (!$util.isInteger(message.LianyunID))
                    return "LianyunID: integer expected";
            return null;
        };

        /**
         * Creates a NotifyServerRegInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof notify.NotifyServerRegInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {notify.NotifyServerRegInfo} NotifyServerRegInfo
         */
        NotifyServerRegInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.notify.NotifyServerRegInfo)
                return object;
            var message = new $root.notify.NotifyServerRegInfo();
            if (object.ServerID != null)
                message.ServerID = object.ServerID | 0;
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.ServerType != null)
                message.ServerType = object.ServerType | 0;
            if (object.LianyunID != null)
                message.LianyunID = object.LianyunID | 0;
            return message;
        };

        /**
         * Creates a plain object from a NotifyServerRegInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof notify.NotifyServerRegInfo
         * @static
         * @param {notify.NotifyServerRegInfo} message NotifyServerRegInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotifyServerRegInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ServerID = 0;
                object.GameID = 0;
                object.ServerType = 0;
                object.LianyunID = 0;
            }
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                object.ServerID = message.ServerID;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.ServerType != null && message.hasOwnProperty("ServerType"))
                object.ServerType = message.ServerType;
            if (message.LianyunID != null && message.hasOwnProperty("LianyunID"))
                object.LianyunID = message.LianyunID;
            return object;
        };

        /**
         * Converts this NotifyServerRegInfo to JSON.
         * @function toJSON
         * @memberof notify.NotifyServerRegInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotifyServerRegInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NotifyServerRegInfo;
    })();

    notify.AnnInfo = (function() {

        /**
         * Properties of an AnnInfo.
         * @memberof notify
         * @interface IAnnInfo
         * @property {number} ID AnnInfo ID
         * @property {number} PlatformID AnnInfo PlatformID
         * @property {string} MsgContent AnnInfo MsgContent
         * @property {number|null} [LianyunID] AnnInfo LianyunID
         */

        /**
         * Constructs a new AnnInfo.
         * @memberof notify
         * @classdesc Represents an AnnInfo.
         * @implements IAnnInfo
         * @constructor
         * @param {notify.IAnnInfo=} [properties] Properties to set
         */
        function AnnInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnnInfo ID.
         * @member {number} ID
         * @memberof notify.AnnInfo
         * @instance
         */
        AnnInfo.prototype.ID = 0;

        /**
         * AnnInfo PlatformID.
         * @member {number} PlatformID
         * @memberof notify.AnnInfo
         * @instance
         */
        AnnInfo.prototype.PlatformID = 0;

        /**
         * AnnInfo MsgContent.
         * @member {string} MsgContent
         * @memberof notify.AnnInfo
         * @instance
         */
        AnnInfo.prototype.MsgContent = "";

        /**
         * AnnInfo LianyunID.
         * @member {number} LianyunID
         * @memberof notify.AnnInfo
         * @instance
         */
        AnnInfo.prototype.LianyunID = 0;

        /**
         * Creates a new AnnInfo instance using the specified properties.
         * @function create
         * @memberof notify.AnnInfo
         * @static
         * @param {notify.IAnnInfo=} [properties] Properties to set
         * @returns {notify.AnnInfo} AnnInfo instance
         */
        AnnInfo.create = function create(properties) {
            return new AnnInfo(properties);
        };

        /**
         * Encodes the specified AnnInfo message. Does not implicitly {@link notify.AnnInfo.verify|verify} messages.
         * @function encode
         * @memberof notify.AnnInfo
         * @static
         * @param {notify.IAnnInfo} message AnnInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnnInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.PlatformID);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.MsgContent);
            if (message.LianyunID != null && Object.hasOwnProperty.call(message, "LianyunID"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.LianyunID);
            return writer;
        };

        /**
         * Encodes the specified AnnInfo message, length delimited. Does not implicitly {@link notify.AnnInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof notify.AnnInfo
         * @static
         * @param {notify.IAnnInfo} message AnnInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnnInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnnInfo message from the specified reader or buffer.
         * @function decode
         * @memberof notify.AnnInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {notify.AnnInfo} AnnInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnnInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.notify.AnnInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int32();
                    break;
                case 2:
                    message.PlatformID = reader.int32();
                    break;
                case 3:
                    message.MsgContent = reader.string();
                    break;
                case 4:
                    message.LianyunID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ID"))
                throw $util.ProtocolError("missing required 'ID'", { instance: message });
            if (!message.hasOwnProperty("PlatformID"))
                throw $util.ProtocolError("missing required 'PlatformID'", { instance: message });
            if (!message.hasOwnProperty("MsgContent"))
                throw $util.ProtocolError("missing required 'MsgContent'", { instance: message });
            return message;
        };

        /**
         * Decodes an AnnInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof notify.AnnInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {notify.AnnInfo} AnnInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnnInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnnInfo message.
         * @function verify
         * @memberof notify.AnnInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnnInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ID))
                return "ID: integer expected";
            if (!$util.isInteger(message.PlatformID))
                return "PlatformID: integer expected";
            if (!$util.isString(message.MsgContent))
                return "MsgContent: string expected";
            if (message.LianyunID != null && message.hasOwnProperty("LianyunID"))
                if (!$util.isInteger(message.LianyunID))
                    return "LianyunID: integer expected";
            return null;
        };

        /**
         * Creates an AnnInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof notify.AnnInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {notify.AnnInfo} AnnInfo
         */
        AnnInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.notify.AnnInfo)
                return object;
            var message = new $root.notify.AnnInfo();
            if (object.ID != null)
                message.ID = object.ID | 0;
            if (object.PlatformID != null)
                message.PlatformID = object.PlatformID | 0;
            if (object.MsgContent != null)
                message.MsgContent = String(object.MsgContent);
            if (object.LianyunID != null)
                message.LianyunID = object.LianyunID | 0;
            return message;
        };

        /**
         * Creates a plain object from an AnnInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof notify.AnnInfo
         * @static
         * @param {notify.AnnInfo} message AnnInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnnInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.PlatformID = 0;
                object.MsgContent = "";
                object.LianyunID = 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.PlatformID != null && message.hasOwnProperty("PlatformID"))
                object.PlatformID = message.PlatformID;
            if (message.MsgContent != null && message.hasOwnProperty("MsgContent"))
                object.MsgContent = message.MsgContent;
            if (message.LianyunID != null && message.hasOwnProperty("LianyunID"))
                object.LianyunID = message.LianyunID;
            return object;
        };

        /**
         * Converts this AnnInfo to JSON.
         * @function toJSON
         * @memberof notify.AnnInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnnInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AnnInfo;
    })();

    notify.AnnList = (function() {

        /**
         * Properties of an AnnList.
         * @memberof notify
         * @interface IAnnList
         * @property {Array.<notify.IAnnInfo>|null} [Ann] AnnList Ann
         */

        /**
         * Constructs a new AnnList.
         * @memberof notify
         * @classdesc Represents an AnnList.
         * @implements IAnnList
         * @constructor
         * @param {notify.IAnnList=} [properties] Properties to set
         */
        function AnnList(properties) {
            this.Ann = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AnnList Ann.
         * @member {Array.<notify.IAnnInfo>} Ann
         * @memberof notify.AnnList
         * @instance
         */
        AnnList.prototype.Ann = $util.emptyArray;

        /**
         * Creates a new AnnList instance using the specified properties.
         * @function create
         * @memberof notify.AnnList
         * @static
         * @param {notify.IAnnList=} [properties] Properties to set
         * @returns {notify.AnnList} AnnList instance
         */
        AnnList.create = function create(properties) {
            return new AnnList(properties);
        };

        /**
         * Encodes the specified AnnList message. Does not implicitly {@link notify.AnnList.verify|verify} messages.
         * @function encode
         * @memberof notify.AnnList
         * @static
         * @param {notify.IAnnList} message AnnList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnnList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ann != null && message.Ann.length)
                for (var i = 0; i < message.Ann.length; ++i)
                    $root.notify.AnnInfo.encode(message.Ann[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AnnList message, length delimited. Does not implicitly {@link notify.AnnList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof notify.AnnList
         * @static
         * @param {notify.IAnnList} message AnnList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AnnList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AnnList message from the specified reader or buffer.
         * @function decode
         * @memberof notify.AnnList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {notify.AnnList} AnnList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnnList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.notify.AnnList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Ann && message.Ann.length))
                        message.Ann = [];
                    message.Ann.push($root.notify.AnnInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AnnList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof notify.AnnList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {notify.AnnList} AnnList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AnnList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AnnList message.
         * @function verify
         * @memberof notify.AnnList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AnnList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Ann != null && message.hasOwnProperty("Ann")) {
                if (!Array.isArray(message.Ann))
                    return "Ann: array expected";
                for (var i = 0; i < message.Ann.length; ++i) {
                    var error = $root.notify.AnnInfo.verify(message.Ann[i]);
                    if (error)
                        return "Ann." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AnnList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof notify.AnnList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {notify.AnnList} AnnList
         */
        AnnList.fromObject = function fromObject(object) {
            if (object instanceof $root.notify.AnnList)
                return object;
            var message = new $root.notify.AnnList();
            if (object.Ann) {
                if (!Array.isArray(object.Ann))
                    throw TypeError(".notify.AnnList.Ann: array expected");
                message.Ann = [];
                for (var i = 0; i < object.Ann.length; ++i) {
                    if (typeof object.Ann[i] !== "object")
                        throw TypeError(".notify.AnnList.Ann: object expected");
                    message.Ann[i] = $root.notify.AnnInfo.fromObject(object.Ann[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AnnList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof notify.AnnList
         * @static
         * @param {notify.AnnList} message AnnList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AnnList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Ann = [];
            if (message.Ann && message.Ann.length) {
                object.Ann = [];
                for (var j = 0; j < message.Ann.length; ++j)
                    object.Ann[j] = $root.notify.AnnInfo.toObject(message.Ann[j], options);
            }
            return object;
        };

        /**
         * Converts this AnnList to JSON.
         * @function toJSON
         * @memberof notify.AnnList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AnnList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AnnList;
    })();

    notify.AttrChange = (function() {

        /**
         * Properties of an AttrChange.
         * @memberof notify
         * @interface IAttrChange
         * @property {number} UserID AttrChange UserID
         * @property {number} TypeID AttrChange TypeID
         * @property {number|Long|null} [Param] AttrChange Param
         * @property {string|null} [SParam] AttrChange SParam
         */

        /**
         * Constructs a new AttrChange.
         * @memberof notify
         * @classdesc Represents an AttrChange.
         * @implements IAttrChange
         * @constructor
         * @param {notify.IAttrChange=} [properties] Properties to set
         */
        function AttrChange(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AttrChange UserID.
         * @member {number} UserID
         * @memberof notify.AttrChange
         * @instance
         */
        AttrChange.prototype.UserID = 0;

        /**
         * AttrChange TypeID.
         * @member {number} TypeID
         * @memberof notify.AttrChange
         * @instance
         */
        AttrChange.prototype.TypeID = 0;

        /**
         * AttrChange Param.
         * @member {number|Long} Param
         * @memberof notify.AttrChange
         * @instance
         */
        AttrChange.prototype.Param = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * AttrChange SParam.
         * @member {string} SParam
         * @memberof notify.AttrChange
         * @instance
         */
        AttrChange.prototype.SParam = "";

        /**
         * Creates a new AttrChange instance using the specified properties.
         * @function create
         * @memberof notify.AttrChange
         * @static
         * @param {notify.IAttrChange=} [properties] Properties to set
         * @returns {notify.AttrChange} AttrChange instance
         */
        AttrChange.create = function create(properties) {
            return new AttrChange(properties);
        };

        /**
         * Encodes the specified AttrChange message. Does not implicitly {@link notify.AttrChange.verify|verify} messages.
         * @function encode
         * @memberof notify.AttrChange
         * @static
         * @param {notify.IAttrChange} message AttrChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttrChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TypeID);
            if (message.Param != null && Object.hasOwnProperty.call(message, "Param"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Param);
            if (message.SParam != null && Object.hasOwnProperty.call(message, "SParam"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.SParam);
            return writer;
        };

        /**
         * Encodes the specified AttrChange message, length delimited. Does not implicitly {@link notify.AttrChange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof notify.AttrChange
         * @static
         * @param {notify.IAttrChange} message AttrChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttrChange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AttrChange message from the specified reader or buffer.
         * @function decode
         * @memberof notify.AttrChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {notify.AttrChange} AttrChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttrChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.notify.AttrChange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.TypeID = reader.int32();
                    break;
                case 3:
                    message.Param = reader.int64();
                    break;
                case 4:
                    message.SParam = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("TypeID"))
                throw $util.ProtocolError("missing required 'TypeID'", { instance: message });
            return message;
        };

        /**
         * Decodes an AttrChange message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof notify.AttrChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {notify.AttrChange} AttrChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttrChange.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AttrChange message.
         * @function verify
         * @memberof notify.AttrChange
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AttrChange.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.TypeID))
                return "TypeID: integer expected";
            if (message.Param != null && message.hasOwnProperty("Param"))
                if (!$util.isInteger(message.Param) && !(message.Param && $util.isInteger(message.Param.low) && $util.isInteger(message.Param.high)))
                    return "Param: integer|Long expected";
            if (message.SParam != null && message.hasOwnProperty("SParam"))
                if (!$util.isString(message.SParam))
                    return "SParam: string expected";
            return null;
        };

        /**
         * Creates an AttrChange message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof notify.AttrChange
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {notify.AttrChange} AttrChange
         */
        AttrChange.fromObject = function fromObject(object) {
            if (object instanceof $root.notify.AttrChange)
                return object;
            var message = new $root.notify.AttrChange();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.TypeID != null)
                message.TypeID = object.TypeID | 0;
            if (object.Param != null)
                if ($util.Long)
                    (message.Param = $util.Long.fromValue(object.Param)).unsigned = false;
                else if (typeof object.Param === "string")
                    message.Param = parseInt(object.Param, 10);
                else if (typeof object.Param === "number")
                    message.Param = object.Param;
                else if (typeof object.Param === "object")
                    message.Param = new $util.LongBits(object.Param.low >>> 0, object.Param.high >>> 0).toNumber();
            if (object.SParam != null)
                message.SParam = String(object.SParam);
            return message;
        };

        /**
         * Creates a plain object from an AttrChange message. Also converts values to other types if specified.
         * @function toObject
         * @memberof notify.AttrChange
         * @static
         * @param {notify.AttrChange} message AttrChange
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AttrChange.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.TypeID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Param = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Param = options.longs === String ? "0" : 0;
                object.SParam = "";
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.TypeID != null && message.hasOwnProperty("TypeID"))
                object.TypeID = message.TypeID;
            if (message.Param != null && message.hasOwnProperty("Param"))
                if (typeof message.Param === "number")
                    object.Param = options.longs === String ? String(message.Param) : message.Param;
                else
                    object.Param = options.longs === String ? $util.Long.prototype.toString.call(message.Param) : options.longs === Number ? new $util.LongBits(message.Param.low >>> 0, message.Param.high >>> 0).toNumber() : message.Param;
            if (message.SParam != null && message.hasOwnProperty("SParam"))
                object.SParam = message.SParam;
            return object;
        };

        /**
         * Converts this AttrChange to JSON.
         * @function toJSON
         * @memberof notify.AttrChange
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AttrChange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AttrChange;
    })();

    notify.AttrChangeList = (function() {

        /**
         * Properties of an AttrChangeList.
         * @memberof notify
         * @interface IAttrChangeList
         * @property {Array.<notify.IAttrChange>|null} [Attrs] AttrChangeList Attrs
         */

        /**
         * Constructs a new AttrChangeList.
         * @memberof notify
         * @classdesc Represents an AttrChangeList.
         * @implements IAttrChangeList
         * @constructor
         * @param {notify.IAttrChangeList=} [properties] Properties to set
         */
        function AttrChangeList(properties) {
            this.Attrs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AttrChangeList Attrs.
         * @member {Array.<notify.IAttrChange>} Attrs
         * @memberof notify.AttrChangeList
         * @instance
         */
        AttrChangeList.prototype.Attrs = $util.emptyArray;

        /**
         * Creates a new AttrChangeList instance using the specified properties.
         * @function create
         * @memberof notify.AttrChangeList
         * @static
         * @param {notify.IAttrChangeList=} [properties] Properties to set
         * @returns {notify.AttrChangeList} AttrChangeList instance
         */
        AttrChangeList.create = function create(properties) {
            return new AttrChangeList(properties);
        };

        /**
         * Encodes the specified AttrChangeList message. Does not implicitly {@link notify.AttrChangeList.verify|verify} messages.
         * @function encode
         * @memberof notify.AttrChangeList
         * @static
         * @param {notify.IAttrChangeList} message AttrChangeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttrChangeList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Attrs != null && message.Attrs.length)
                for (var i = 0; i < message.Attrs.length; ++i)
                    $root.notify.AttrChange.encode(message.Attrs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AttrChangeList message, length delimited. Does not implicitly {@link notify.AttrChangeList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof notify.AttrChangeList
         * @static
         * @param {notify.IAttrChangeList} message AttrChangeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AttrChangeList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AttrChangeList message from the specified reader or buffer.
         * @function decode
         * @memberof notify.AttrChangeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {notify.AttrChangeList} AttrChangeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttrChangeList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.notify.AttrChangeList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Attrs && message.Attrs.length))
                        message.Attrs = [];
                    message.Attrs.push($root.notify.AttrChange.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AttrChangeList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof notify.AttrChangeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {notify.AttrChangeList} AttrChangeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AttrChangeList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AttrChangeList message.
         * @function verify
         * @memberof notify.AttrChangeList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AttrChangeList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Attrs != null && message.hasOwnProperty("Attrs")) {
                if (!Array.isArray(message.Attrs))
                    return "Attrs: array expected";
                for (var i = 0; i < message.Attrs.length; ++i) {
                    var error = $root.notify.AttrChange.verify(message.Attrs[i]);
                    if (error)
                        return "Attrs." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AttrChangeList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof notify.AttrChangeList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {notify.AttrChangeList} AttrChangeList
         */
        AttrChangeList.fromObject = function fromObject(object) {
            if (object instanceof $root.notify.AttrChangeList)
                return object;
            var message = new $root.notify.AttrChangeList();
            if (object.Attrs) {
                if (!Array.isArray(object.Attrs))
                    throw TypeError(".notify.AttrChangeList.Attrs: array expected");
                message.Attrs = [];
                for (var i = 0; i < object.Attrs.length; ++i) {
                    if (typeof object.Attrs[i] !== "object")
                        throw TypeError(".notify.AttrChangeList.Attrs: object expected");
                    message.Attrs[i] = $root.notify.AttrChange.fromObject(object.Attrs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AttrChangeList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof notify.AttrChangeList
         * @static
         * @param {notify.AttrChangeList} message AttrChangeList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AttrChangeList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Attrs = [];
            if (message.Attrs && message.Attrs.length) {
                object.Attrs = [];
                for (var j = 0; j < message.Attrs.length; ++j)
                    object.Attrs[j] = $root.notify.AttrChange.toObject(message.Attrs[j], options);
            }
            return object;
        };

        /**
         * Converts this AttrChangeList to JSON.
         * @function toJSON
         * @memberof notify.AttrChangeList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AttrChangeList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AttrChangeList;
    })();

    notify.ServerStop = (function() {

        /**
         * Properties of a ServerStop.
         * @memberof notify
         * @interface IServerStop
         * @property {number} Type ServerStop Type
         * @property {number} Status ServerStop Status
         * @property {number|null} [GameID] ServerStop GameID
         * @property {number|null} [ServerID] ServerStop ServerID
         * @property {string} Message ServerStop Message
         * @property {number|null} [LianyunID] ServerStop LianyunID
         */

        /**
         * Constructs a new ServerStop.
         * @memberof notify
         * @classdesc Represents a ServerStop.
         * @implements IServerStop
         * @constructor
         * @param {notify.IServerStop=} [properties] Properties to set
         */
        function ServerStop(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerStop Type.
         * @member {number} Type
         * @memberof notify.ServerStop
         * @instance
         */
        ServerStop.prototype.Type = 0;

        /**
         * ServerStop Status.
         * @member {number} Status
         * @memberof notify.ServerStop
         * @instance
         */
        ServerStop.prototype.Status = 0;

        /**
         * ServerStop GameID.
         * @member {number} GameID
         * @memberof notify.ServerStop
         * @instance
         */
        ServerStop.prototype.GameID = 0;

        /**
         * ServerStop ServerID.
         * @member {number} ServerID
         * @memberof notify.ServerStop
         * @instance
         */
        ServerStop.prototype.ServerID = 0;

        /**
         * ServerStop Message.
         * @member {string} Message
         * @memberof notify.ServerStop
         * @instance
         */
        ServerStop.prototype.Message = "";

        /**
         * ServerStop LianyunID.
         * @member {number} LianyunID
         * @memberof notify.ServerStop
         * @instance
         */
        ServerStop.prototype.LianyunID = 0;

        /**
         * Creates a new ServerStop instance using the specified properties.
         * @function create
         * @memberof notify.ServerStop
         * @static
         * @param {notify.IServerStop=} [properties] Properties to set
         * @returns {notify.ServerStop} ServerStop instance
         */
        ServerStop.create = function create(properties) {
            return new ServerStop(properties);
        };

        /**
         * Encodes the specified ServerStop message. Does not implicitly {@link notify.ServerStop.verify|verify} messages.
         * @function encode
         * @memberof notify.ServerStop
         * @static
         * @param {notify.IServerStop} message ServerStop message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerStop.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Type);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Status);
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.GameID);
            if (message.ServerID != null && Object.hasOwnProperty.call(message, "ServerID"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.ServerID);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.Message);
            if (message.LianyunID != null && Object.hasOwnProperty.call(message, "LianyunID"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.LianyunID);
            return writer;
        };

        /**
         * Encodes the specified ServerStop message, length delimited. Does not implicitly {@link notify.ServerStop.verify|verify} messages.
         * @function encodeDelimited
         * @memberof notify.ServerStop
         * @static
         * @param {notify.IServerStop} message ServerStop message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerStop.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerStop message from the specified reader or buffer.
         * @function decode
         * @memberof notify.ServerStop
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {notify.ServerStop} ServerStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerStop.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.notify.ServerStop();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.int32();
                    break;
                case 2:
                    message.Status = reader.int32();
                    break;
                case 3:
                    message.GameID = reader.int32();
                    break;
                case 4:
                    message.ServerID = reader.int32();
                    break;
                case 5:
                    message.Message = reader.string();
                    break;
                case 6:
                    message.LianyunID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Type"))
                throw $util.ProtocolError("missing required 'Type'", { instance: message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance: message });
            if (!message.hasOwnProperty("Message"))
                throw $util.ProtocolError("missing required 'Message'", { instance: message });
            return message;
        };

        /**
         * Decodes a ServerStop message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof notify.ServerStop
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {notify.ServerStop} ServerStop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerStop.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerStop message.
         * @function verify
         * @memberof notify.ServerStop
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerStop.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Type))
                return "Type: integer expected";
            if (!$util.isInteger(message.Status))
                return "Status: integer expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                if (!$util.isInteger(message.ServerID))
                    return "ServerID: integer expected";
            if (!$util.isString(message.Message))
                return "Message: string expected";
            if (message.LianyunID != null && message.hasOwnProperty("LianyunID"))
                if (!$util.isInteger(message.LianyunID))
                    return "LianyunID: integer expected";
            return null;
        };

        /**
         * Creates a ServerStop message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof notify.ServerStop
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {notify.ServerStop} ServerStop
         */
        ServerStop.fromObject = function fromObject(object) {
            if (object instanceof $root.notify.ServerStop)
                return object;
            var message = new $root.notify.ServerStop();
            if (object.Type != null)
                message.Type = object.Type | 0;
            if (object.Status != null)
                message.Status = object.Status | 0;
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.ServerID != null)
                message.ServerID = object.ServerID | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.LianyunID != null)
                message.LianyunID = object.LianyunID | 0;
            return message;
        };

        /**
         * Creates a plain object from a ServerStop message. Also converts values to other types if specified.
         * @function toObject
         * @memberof notify.ServerStop
         * @static
         * @param {notify.ServerStop} message ServerStop
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerStop.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = 0;
                object.Status = 0;
                object.GameID = 0;
                object.ServerID = 0;
                object.Message = "";
                object.LianyunID = 0;
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                object.ServerID = message.ServerID;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            if (message.LianyunID != null && message.hasOwnProperty("LianyunID"))
                object.LianyunID = message.LianyunID;
            return object;
        };

        /**
         * Converts this ServerStop to JSON.
         * @function toJSON
         * @memberof notify.ServerStop
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerStop.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ServerStop;
    })();

    notify.ServerStopWhiteIPList = (function() {

        /**
         * Properties of a ServerStopWhiteIPList.
         * @memberof notify
         * @interface IServerStopWhiteIPList
         * @property {Array.<string>|null} [IP] ServerStopWhiteIPList IP
         */

        /**
         * Constructs a new ServerStopWhiteIPList.
         * @memberof notify
         * @classdesc Represents a ServerStopWhiteIPList.
         * @implements IServerStopWhiteIPList
         * @constructor
         * @param {notify.IServerStopWhiteIPList=} [properties] Properties to set
         */
        function ServerStopWhiteIPList(properties) {
            this.IP = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerStopWhiteIPList IP.
         * @member {Array.<string>} IP
         * @memberof notify.ServerStopWhiteIPList
         * @instance
         */
        ServerStopWhiteIPList.prototype.IP = $util.emptyArray;

        /**
         * Creates a new ServerStopWhiteIPList instance using the specified properties.
         * @function create
         * @memberof notify.ServerStopWhiteIPList
         * @static
         * @param {notify.IServerStopWhiteIPList=} [properties] Properties to set
         * @returns {notify.ServerStopWhiteIPList} ServerStopWhiteIPList instance
         */
        ServerStopWhiteIPList.create = function create(properties) {
            return new ServerStopWhiteIPList(properties);
        };

        /**
         * Encodes the specified ServerStopWhiteIPList message. Does not implicitly {@link notify.ServerStopWhiteIPList.verify|verify} messages.
         * @function encode
         * @memberof notify.ServerStopWhiteIPList
         * @static
         * @param {notify.IServerStopWhiteIPList} message ServerStopWhiteIPList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerStopWhiteIPList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.IP != null && message.IP.length)
                for (var i = 0; i < message.IP.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.IP[i]);
            return writer;
        };

        /**
         * Encodes the specified ServerStopWhiteIPList message, length delimited. Does not implicitly {@link notify.ServerStopWhiteIPList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof notify.ServerStopWhiteIPList
         * @static
         * @param {notify.IServerStopWhiteIPList} message ServerStopWhiteIPList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerStopWhiteIPList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerStopWhiteIPList message from the specified reader or buffer.
         * @function decode
         * @memberof notify.ServerStopWhiteIPList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {notify.ServerStopWhiteIPList} ServerStopWhiteIPList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerStopWhiteIPList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.notify.ServerStopWhiteIPList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.IP && message.IP.length))
                        message.IP = [];
                    message.IP.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerStopWhiteIPList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof notify.ServerStopWhiteIPList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {notify.ServerStopWhiteIPList} ServerStopWhiteIPList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerStopWhiteIPList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerStopWhiteIPList message.
         * @function verify
         * @memberof notify.ServerStopWhiteIPList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerStopWhiteIPList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.IP != null && message.hasOwnProperty("IP")) {
                if (!Array.isArray(message.IP))
                    return "IP: array expected";
                for (var i = 0; i < message.IP.length; ++i)
                    if (!$util.isString(message.IP[i]))
                        return "IP: string[] expected";
            }
            return null;
        };

        /**
         * Creates a ServerStopWhiteIPList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof notify.ServerStopWhiteIPList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {notify.ServerStopWhiteIPList} ServerStopWhiteIPList
         */
        ServerStopWhiteIPList.fromObject = function fromObject(object) {
            if (object instanceof $root.notify.ServerStopWhiteIPList)
                return object;
            var message = new $root.notify.ServerStopWhiteIPList();
            if (object.IP) {
                if (!Array.isArray(object.IP))
                    throw TypeError(".notify.ServerStopWhiteIPList.IP: array expected");
                message.IP = [];
                for (var i = 0; i < object.IP.length; ++i)
                    message.IP[i] = String(object.IP[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ServerStopWhiteIPList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof notify.ServerStopWhiteIPList
         * @static
         * @param {notify.ServerStopWhiteIPList} message ServerStopWhiteIPList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerStopWhiteIPList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.IP = [];
            if (message.IP && message.IP.length) {
                object.IP = [];
                for (var j = 0; j < message.IP.length; ++j)
                    object.IP[j] = message.IP[j];
            }
            return object;
        };

        /**
         * Converts this ServerStopWhiteIPList to JSON.
         * @function toJSON
         * @memberof notify.ServerStopWhiteIPList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerStopWhiteIPList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ServerStopWhiteIPList;
    })();

    notify.SMSVCode = (function() {

        /**
         * Properties of a SMSVCode.
         * @memberof notify
         * @interface ISMSVCode
         * @property {number|null} [CodeID] SMSVCode CodeID
         * @property {string|null} [Tel] SMSVCode Tel
         * @property {string|null} [VCode] SMSVCode VCode
         */

        /**
         * Constructs a new SMSVCode.
         * @memberof notify
         * @classdesc Represents a SMSVCode.
         * @implements ISMSVCode
         * @constructor
         * @param {notify.ISMSVCode=} [properties] Properties to set
         */
        function SMSVCode(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SMSVCode CodeID.
         * @member {number} CodeID
         * @memberof notify.SMSVCode
         * @instance
         */
        SMSVCode.prototype.CodeID = 0;

        /**
         * SMSVCode Tel.
         * @member {string} Tel
         * @memberof notify.SMSVCode
         * @instance
         */
        SMSVCode.prototype.Tel = "";

        /**
         * SMSVCode VCode.
         * @member {string} VCode
         * @memberof notify.SMSVCode
         * @instance
         */
        SMSVCode.prototype.VCode = "";

        /**
         * Creates a new SMSVCode instance using the specified properties.
         * @function create
         * @memberof notify.SMSVCode
         * @static
         * @param {notify.ISMSVCode=} [properties] Properties to set
         * @returns {notify.SMSVCode} SMSVCode instance
         */
        SMSVCode.create = function create(properties) {
            return new SMSVCode(properties);
        };

        /**
         * Encodes the specified SMSVCode message. Does not implicitly {@link notify.SMSVCode.verify|verify} messages.
         * @function encode
         * @memberof notify.SMSVCode
         * @static
         * @param {notify.ISMSVCode} message SMSVCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SMSVCode.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CodeID != null && Object.hasOwnProperty.call(message, "CodeID"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.CodeID);
            if (message.Tel != null && Object.hasOwnProperty.call(message, "Tel"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Tel);
            if (message.VCode != null && Object.hasOwnProperty.call(message, "VCode"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.VCode);
            return writer;
        };

        /**
         * Encodes the specified SMSVCode message, length delimited. Does not implicitly {@link notify.SMSVCode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof notify.SMSVCode
         * @static
         * @param {notify.ISMSVCode} message SMSVCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SMSVCode.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SMSVCode message from the specified reader or buffer.
         * @function decode
         * @memberof notify.SMSVCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {notify.SMSVCode} SMSVCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SMSVCode.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.notify.SMSVCode();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CodeID = reader.int32();
                    break;
                case 2:
                    message.Tel = reader.string();
                    break;
                case 3:
                    message.VCode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SMSVCode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof notify.SMSVCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {notify.SMSVCode} SMSVCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SMSVCode.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SMSVCode message.
         * @function verify
         * @memberof notify.SMSVCode
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SMSVCode.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CodeID != null && message.hasOwnProperty("CodeID"))
                if (!$util.isInteger(message.CodeID))
                    return "CodeID: integer expected";
            if (message.Tel != null && message.hasOwnProperty("Tel"))
                if (!$util.isString(message.Tel))
                    return "Tel: string expected";
            if (message.VCode != null && message.hasOwnProperty("VCode"))
                if (!$util.isString(message.VCode))
                    return "VCode: string expected";
            return null;
        };

        /**
         * Creates a SMSVCode message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof notify.SMSVCode
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {notify.SMSVCode} SMSVCode
         */
        SMSVCode.fromObject = function fromObject(object) {
            if (object instanceof $root.notify.SMSVCode)
                return object;
            var message = new $root.notify.SMSVCode();
            if (object.CodeID != null)
                message.CodeID = object.CodeID | 0;
            if (object.Tel != null)
                message.Tel = String(object.Tel);
            if (object.VCode != null)
                message.VCode = String(object.VCode);
            return message;
        };

        /**
         * Creates a plain object from a SMSVCode message. Also converts values to other types if specified.
         * @function toObject
         * @memberof notify.SMSVCode
         * @static
         * @param {notify.SMSVCode} message SMSVCode
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SMSVCode.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.CodeID = 0;
                object.Tel = "";
                object.VCode = "";
            }
            if (message.CodeID != null && message.hasOwnProperty("CodeID"))
                object.CodeID = message.CodeID;
            if (message.Tel != null && message.hasOwnProperty("Tel"))
                object.Tel = message.Tel;
            if (message.VCode != null && message.hasOwnProperty("VCode"))
                object.VCode = message.VCode;
            return object;
        };

        /**
         * Converts this SMSVCode to JSON.
         * @function toJSON
         * @memberof notify.SMSVCode
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SMSVCode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SMSVCode;
    })();

    notify.SMSVCodeList = (function() {

        /**
         * Properties of a SMSVCodeList.
         * @memberof notify
         * @interface ISMSVCodeList
         * @property {Array.<notify.ISMSVCode>|null} [Attrs] SMSVCodeList Attrs
         */

        /**
         * Constructs a new SMSVCodeList.
         * @memberof notify
         * @classdesc Represents a SMSVCodeList.
         * @implements ISMSVCodeList
         * @constructor
         * @param {notify.ISMSVCodeList=} [properties] Properties to set
         */
        function SMSVCodeList(properties) {
            this.Attrs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SMSVCodeList Attrs.
         * @member {Array.<notify.ISMSVCode>} Attrs
         * @memberof notify.SMSVCodeList
         * @instance
         */
        SMSVCodeList.prototype.Attrs = $util.emptyArray;

        /**
         * Creates a new SMSVCodeList instance using the specified properties.
         * @function create
         * @memberof notify.SMSVCodeList
         * @static
         * @param {notify.ISMSVCodeList=} [properties] Properties to set
         * @returns {notify.SMSVCodeList} SMSVCodeList instance
         */
        SMSVCodeList.create = function create(properties) {
            return new SMSVCodeList(properties);
        };

        /**
         * Encodes the specified SMSVCodeList message. Does not implicitly {@link notify.SMSVCodeList.verify|verify} messages.
         * @function encode
         * @memberof notify.SMSVCodeList
         * @static
         * @param {notify.ISMSVCodeList} message SMSVCodeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SMSVCodeList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Attrs != null && message.Attrs.length)
                for (var i = 0; i < message.Attrs.length; ++i)
                    $root.notify.SMSVCode.encode(message.Attrs[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SMSVCodeList message, length delimited. Does not implicitly {@link notify.SMSVCodeList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof notify.SMSVCodeList
         * @static
         * @param {notify.ISMSVCodeList} message SMSVCodeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SMSVCodeList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SMSVCodeList message from the specified reader or buffer.
         * @function decode
         * @memberof notify.SMSVCodeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {notify.SMSVCodeList} SMSVCodeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SMSVCodeList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.notify.SMSVCodeList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Attrs && message.Attrs.length))
                        message.Attrs = [];
                    message.Attrs.push($root.notify.SMSVCode.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SMSVCodeList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof notify.SMSVCodeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {notify.SMSVCodeList} SMSVCodeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SMSVCodeList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SMSVCodeList message.
         * @function verify
         * @memberof notify.SMSVCodeList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SMSVCodeList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Attrs != null && message.hasOwnProperty("Attrs")) {
                if (!Array.isArray(message.Attrs))
                    return "Attrs: array expected";
                for (var i = 0; i < message.Attrs.length; ++i) {
                    var error = $root.notify.SMSVCode.verify(message.Attrs[i]);
                    if (error)
                        return "Attrs." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SMSVCodeList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof notify.SMSVCodeList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {notify.SMSVCodeList} SMSVCodeList
         */
        SMSVCodeList.fromObject = function fromObject(object) {
            if (object instanceof $root.notify.SMSVCodeList)
                return object;
            var message = new $root.notify.SMSVCodeList();
            if (object.Attrs) {
                if (!Array.isArray(object.Attrs))
                    throw TypeError(".notify.SMSVCodeList.Attrs: array expected");
                message.Attrs = [];
                for (var i = 0; i < object.Attrs.length; ++i) {
                    if (typeof object.Attrs[i] !== "object")
                        throw TypeError(".notify.SMSVCodeList.Attrs: object expected");
                    message.Attrs[i] = $root.notify.SMSVCode.fromObject(object.Attrs[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SMSVCodeList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof notify.SMSVCodeList
         * @static
         * @param {notify.SMSVCodeList} message SMSVCodeList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SMSVCodeList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Attrs = [];
            if (message.Attrs && message.Attrs.length) {
                object.Attrs = [];
                for (var j = 0; j < message.Attrs.length; ++j)
                    object.Attrs[j] = $root.notify.SMSVCode.toObject(message.Attrs[j], options);
            }
            return object;
        };

        /**
         * Converts this SMSVCodeList to JSON.
         * @function toJSON
         * @memberof notify.SMSVCodeList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SMSVCodeList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SMSVCodeList;
    })();

    notify.NotifyGameStatus = (function() {

        /**
         * Properties of a NotifyGameStatus.
         * @memberof notify
         * @interface INotifyGameStatus
         * @property {number} ServerID NotifyGameStatus ServerID
         * @property {number|null} [GameID] NotifyGameStatus GameID
         * @property {number|null} [ServerStatus] NotifyGameStatus ServerStatus
         * @property {number|null} [LianyunID] NotifyGameStatus LianyunID
         */

        /**
         * Constructs a new NotifyGameStatus.
         * @memberof notify
         * @classdesc Represents a NotifyGameStatus.
         * @implements INotifyGameStatus
         * @constructor
         * @param {notify.INotifyGameStatus=} [properties] Properties to set
         */
        function NotifyGameStatus(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NotifyGameStatus ServerID.
         * @member {number} ServerID
         * @memberof notify.NotifyGameStatus
         * @instance
         */
        NotifyGameStatus.prototype.ServerID = 0;

        /**
         * NotifyGameStatus GameID.
         * @member {number} GameID
         * @memberof notify.NotifyGameStatus
         * @instance
         */
        NotifyGameStatus.prototype.GameID = 0;

        /**
         * NotifyGameStatus ServerStatus.
         * @member {number} ServerStatus
         * @memberof notify.NotifyGameStatus
         * @instance
         */
        NotifyGameStatus.prototype.ServerStatus = 0;

        /**
         * NotifyGameStatus LianyunID.
         * @member {number} LianyunID
         * @memberof notify.NotifyGameStatus
         * @instance
         */
        NotifyGameStatus.prototype.LianyunID = 0;

        /**
         * Creates a new NotifyGameStatus instance using the specified properties.
         * @function create
         * @memberof notify.NotifyGameStatus
         * @static
         * @param {notify.INotifyGameStatus=} [properties] Properties to set
         * @returns {notify.NotifyGameStatus} NotifyGameStatus instance
         */
        NotifyGameStatus.create = function create(properties) {
            return new NotifyGameStatus(properties);
        };

        /**
         * Encodes the specified NotifyGameStatus message. Does not implicitly {@link notify.NotifyGameStatus.verify|verify} messages.
         * @function encode
         * @memberof notify.NotifyGameStatus
         * @static
         * @param {notify.INotifyGameStatus} message NotifyGameStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyGameStatus.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ServerID);
            if (message.GameID != null && Object.hasOwnProperty.call(message, "GameID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GameID);
            if (message.ServerStatus != null && Object.hasOwnProperty.call(message, "ServerStatus"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ServerStatus);
            if (message.LianyunID != null && Object.hasOwnProperty.call(message, "LianyunID"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.LianyunID);
            return writer;
        };

        /**
         * Encodes the specified NotifyGameStatus message, length delimited. Does not implicitly {@link notify.NotifyGameStatus.verify|verify} messages.
         * @function encodeDelimited
         * @memberof notify.NotifyGameStatus
         * @static
         * @param {notify.INotifyGameStatus} message NotifyGameStatus message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NotifyGameStatus.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NotifyGameStatus message from the specified reader or buffer.
         * @function decode
         * @memberof notify.NotifyGameStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {notify.NotifyGameStatus} NotifyGameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyGameStatus.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.notify.NotifyGameStatus();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ServerID = reader.int32();
                    break;
                case 2:
                    message.GameID = reader.int32();
                    break;
                case 3:
                    message.ServerStatus = reader.int32();
                    break;
                case 4:
                    message.LianyunID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ServerID"))
                throw $util.ProtocolError("missing required 'ServerID'", { instance: message });
            return message;
        };

        /**
         * Decodes a NotifyGameStatus message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof notify.NotifyGameStatus
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {notify.NotifyGameStatus} NotifyGameStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NotifyGameStatus.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NotifyGameStatus message.
         * @function verify
         * @memberof notify.NotifyGameStatus
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NotifyGameStatus.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ServerID))
                return "ServerID: integer expected";
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                if (!$util.isInteger(message.GameID))
                    return "GameID: integer expected";
            if (message.ServerStatus != null && message.hasOwnProperty("ServerStatus"))
                if (!$util.isInteger(message.ServerStatus))
                    return "ServerStatus: integer expected";
            if (message.LianyunID != null && message.hasOwnProperty("LianyunID"))
                if (!$util.isInteger(message.LianyunID))
                    return "LianyunID: integer expected";
            return null;
        };

        /**
         * Creates a NotifyGameStatus message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof notify.NotifyGameStatus
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {notify.NotifyGameStatus} NotifyGameStatus
         */
        NotifyGameStatus.fromObject = function fromObject(object) {
            if (object instanceof $root.notify.NotifyGameStatus)
                return object;
            var message = new $root.notify.NotifyGameStatus();
            if (object.ServerID != null)
                message.ServerID = object.ServerID | 0;
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.ServerStatus != null)
                message.ServerStatus = object.ServerStatus | 0;
            if (object.LianyunID != null)
                message.LianyunID = object.LianyunID | 0;
            return message;
        };

        /**
         * Creates a plain object from a NotifyGameStatus message. Also converts values to other types if specified.
         * @function toObject
         * @memberof notify.NotifyGameStatus
         * @static
         * @param {notify.NotifyGameStatus} message NotifyGameStatus
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NotifyGameStatus.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ServerID = 0;
                object.GameID = 0;
                object.ServerStatus = 0;
                object.LianyunID = 0;
            }
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                object.ServerID = message.ServerID;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.ServerStatus != null && message.hasOwnProperty("ServerStatus"))
                object.ServerStatus = message.ServerStatus;
            if (message.LianyunID != null && message.hasOwnProperty("LianyunID"))
                object.LianyunID = message.LianyunID;
            return object;
        };

        /**
         * Converts this NotifyGameStatus to JSON.
         * @function toJSON
         * @memberof notify.NotifyGameStatus
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NotifyGameStatus.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NotifyGameStatus;
    })();

    notify.GameLockTraceChange = (function() {

        /**
         * Properties of a GameLockTraceChange.
         * @memberof notify
         * @interface IGameLockTraceChange
         * @property {number} SuperUserID GameLockTraceChange SuperUserID
         * @property {number} TraceUserID GameLockTraceChange TraceUserID
         */

        /**
         * Constructs a new GameLockTraceChange.
         * @memberof notify
         * @classdesc Represents a GameLockTraceChange.
         * @implements IGameLockTraceChange
         * @constructor
         * @param {notify.IGameLockTraceChange=} [properties] Properties to set
         */
        function GameLockTraceChange(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameLockTraceChange SuperUserID.
         * @member {number} SuperUserID
         * @memberof notify.GameLockTraceChange
         * @instance
         */
        GameLockTraceChange.prototype.SuperUserID = 0;

        /**
         * GameLockTraceChange TraceUserID.
         * @member {number} TraceUserID
         * @memberof notify.GameLockTraceChange
         * @instance
         */
        GameLockTraceChange.prototype.TraceUserID = 0;

        /**
         * Creates a new GameLockTraceChange instance using the specified properties.
         * @function create
         * @memberof notify.GameLockTraceChange
         * @static
         * @param {notify.IGameLockTraceChange=} [properties] Properties to set
         * @returns {notify.GameLockTraceChange} GameLockTraceChange instance
         */
        GameLockTraceChange.create = function create(properties) {
            return new GameLockTraceChange(properties);
        };

        /**
         * Encodes the specified GameLockTraceChange message. Does not implicitly {@link notify.GameLockTraceChange.verify|verify} messages.
         * @function encode
         * @memberof notify.GameLockTraceChange
         * @static
         * @param {notify.IGameLockTraceChange} message GameLockTraceChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameLockTraceChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SuperUserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TraceUserID);
            return writer;
        };

        /**
         * Encodes the specified GameLockTraceChange message, length delimited. Does not implicitly {@link notify.GameLockTraceChange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof notify.GameLockTraceChange
         * @static
         * @param {notify.IGameLockTraceChange} message GameLockTraceChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameLockTraceChange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameLockTraceChange message from the specified reader or buffer.
         * @function decode
         * @memberof notify.GameLockTraceChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {notify.GameLockTraceChange} GameLockTraceChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameLockTraceChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.notify.GameLockTraceChange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SuperUserID = reader.int32();
                    break;
                case 2:
                    message.TraceUserID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("SuperUserID"))
                throw $util.ProtocolError("missing required 'SuperUserID'", { instance: message });
            if (!message.hasOwnProperty("TraceUserID"))
                throw $util.ProtocolError("missing required 'TraceUserID'", { instance: message });
            return message;
        };

        /**
         * Decodes a GameLockTraceChange message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof notify.GameLockTraceChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {notify.GameLockTraceChange} GameLockTraceChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameLockTraceChange.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameLockTraceChange message.
         * @function verify
         * @memberof notify.GameLockTraceChange
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameLockTraceChange.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.SuperUserID))
                return "SuperUserID: integer expected";
            if (!$util.isInteger(message.TraceUserID))
                return "TraceUserID: integer expected";
            return null;
        };

        /**
         * Creates a GameLockTraceChange message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof notify.GameLockTraceChange
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {notify.GameLockTraceChange} GameLockTraceChange
         */
        GameLockTraceChange.fromObject = function fromObject(object) {
            if (object instanceof $root.notify.GameLockTraceChange)
                return object;
            var message = new $root.notify.GameLockTraceChange();
            if (object.SuperUserID != null)
                message.SuperUserID = object.SuperUserID | 0;
            if (object.TraceUserID != null)
                message.TraceUserID = object.TraceUserID | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameLockTraceChange message. Also converts values to other types if specified.
         * @function toObject
         * @memberof notify.GameLockTraceChange
         * @static
         * @param {notify.GameLockTraceChange} message GameLockTraceChange
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameLockTraceChange.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.SuperUserID = 0;
                object.TraceUserID = 0;
            }
            if (message.SuperUserID != null && message.hasOwnProperty("SuperUserID"))
                object.SuperUserID = message.SuperUserID;
            if (message.TraceUserID != null && message.hasOwnProperty("TraceUserID"))
                object.TraceUserID = message.TraceUserID;
            return object;
        };

        /**
         * Converts this GameLockTraceChange to JSON.
         * @function toJSON
         * @memberof notify.GameLockTraceChange
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameLockTraceChange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameLockTraceChange;
    })();

    notify.GameLockTraceChangeList = (function() {

        /**
         * Properties of a GameLockTraceChangeList.
         * @memberof notify
         * @interface IGameLockTraceChangeList
         * @property {Array.<notify.IGameLockTraceChange>|null} [TraceChange] GameLockTraceChangeList TraceChange
         */

        /**
         * Constructs a new GameLockTraceChangeList.
         * @memberof notify
         * @classdesc Represents a GameLockTraceChangeList.
         * @implements IGameLockTraceChangeList
         * @constructor
         * @param {notify.IGameLockTraceChangeList=} [properties] Properties to set
         */
        function GameLockTraceChangeList(properties) {
            this.TraceChange = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameLockTraceChangeList TraceChange.
         * @member {Array.<notify.IGameLockTraceChange>} TraceChange
         * @memberof notify.GameLockTraceChangeList
         * @instance
         */
        GameLockTraceChangeList.prototype.TraceChange = $util.emptyArray;

        /**
         * Creates a new GameLockTraceChangeList instance using the specified properties.
         * @function create
         * @memberof notify.GameLockTraceChangeList
         * @static
         * @param {notify.IGameLockTraceChangeList=} [properties] Properties to set
         * @returns {notify.GameLockTraceChangeList} GameLockTraceChangeList instance
         */
        GameLockTraceChangeList.create = function create(properties) {
            return new GameLockTraceChangeList(properties);
        };

        /**
         * Encodes the specified GameLockTraceChangeList message. Does not implicitly {@link notify.GameLockTraceChangeList.verify|verify} messages.
         * @function encode
         * @memberof notify.GameLockTraceChangeList
         * @static
         * @param {notify.IGameLockTraceChangeList} message GameLockTraceChangeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameLockTraceChangeList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TraceChange != null && message.TraceChange.length)
                for (var i = 0; i < message.TraceChange.length; ++i)
                    $root.notify.GameLockTraceChange.encode(message.TraceChange[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified GameLockTraceChangeList message, length delimited. Does not implicitly {@link notify.GameLockTraceChangeList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof notify.GameLockTraceChangeList
         * @static
         * @param {notify.IGameLockTraceChangeList} message GameLockTraceChangeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameLockTraceChangeList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameLockTraceChangeList message from the specified reader or buffer.
         * @function decode
         * @memberof notify.GameLockTraceChangeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {notify.GameLockTraceChangeList} GameLockTraceChangeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameLockTraceChangeList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.notify.GameLockTraceChangeList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.TraceChange && message.TraceChange.length))
                        message.TraceChange = [];
                    message.TraceChange.push($root.notify.GameLockTraceChange.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GameLockTraceChangeList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof notify.GameLockTraceChangeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {notify.GameLockTraceChangeList} GameLockTraceChangeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameLockTraceChangeList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameLockTraceChangeList message.
         * @function verify
         * @memberof notify.GameLockTraceChangeList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameLockTraceChangeList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TraceChange != null && message.hasOwnProperty("TraceChange")) {
                if (!Array.isArray(message.TraceChange))
                    return "TraceChange: array expected";
                for (var i = 0; i < message.TraceChange.length; ++i) {
                    var error = $root.notify.GameLockTraceChange.verify(message.TraceChange[i]);
                    if (error)
                        return "TraceChange." + error;
                }
            }
            return null;
        };

        /**
         * Creates a GameLockTraceChangeList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof notify.GameLockTraceChangeList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {notify.GameLockTraceChangeList} GameLockTraceChangeList
         */
        GameLockTraceChangeList.fromObject = function fromObject(object) {
            if (object instanceof $root.notify.GameLockTraceChangeList)
                return object;
            var message = new $root.notify.GameLockTraceChangeList();
            if (object.TraceChange) {
                if (!Array.isArray(object.TraceChange))
                    throw TypeError(".notify.GameLockTraceChangeList.TraceChange: array expected");
                message.TraceChange = [];
                for (var i = 0; i < object.TraceChange.length; ++i) {
                    if (typeof object.TraceChange[i] !== "object")
                        throw TypeError(".notify.GameLockTraceChangeList.TraceChange: object expected");
                    message.TraceChange[i] = $root.notify.GameLockTraceChange.fromObject(object.TraceChange[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a GameLockTraceChangeList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof notify.GameLockTraceChangeList
         * @static
         * @param {notify.GameLockTraceChangeList} message GameLockTraceChangeList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameLockTraceChangeList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.TraceChange = [];
            if (message.TraceChange && message.TraceChange.length) {
                object.TraceChange = [];
                for (var j = 0; j < message.TraceChange.length; ++j)
                    object.TraceChange[j] = $root.notify.GameLockTraceChange.toObject(message.TraceChange[j], options);
            }
            return object;
        };

        /**
         * Converts this GameLockTraceChangeList to JSON.
         * @function toJSON
         * @memberof notify.GameLockTraceChangeList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameLockTraceChangeList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameLockTraceChangeList;
    })();

    notify.VersionInfo = (function() {

        /**
         * Properties of a VersionInfo.
         * @memberof notify
         * @interface IVersionInfo
         * @property {number} ID VersionInfo ID
         * @property {string} BunldID VersionInfo BunldID
         * @property {string} Ver VersionInfo Ver
         * @property {string} Path VersionInfo Path
         * @property {string} Ver1 VersionInfo Ver1
         * @property {string|null} [Platform] VersionInfo Platform
         * @property {string|null} [Channel] VersionInfo Channel
         * @property {string} SkinVer VersionInfo SkinVer
         * @property {string|null} [LimitIP] VersionInfo LimitIP
         */

        /**
         * Constructs a new VersionInfo.
         * @memberof notify
         * @classdesc Represents a VersionInfo.
         * @implements IVersionInfo
         * @constructor
         * @param {notify.IVersionInfo=} [properties] Properties to set
         */
        function VersionInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VersionInfo ID.
         * @member {number} ID
         * @memberof notify.VersionInfo
         * @instance
         */
        VersionInfo.prototype.ID = 0;

        /**
         * VersionInfo BunldID.
         * @member {string} BunldID
         * @memberof notify.VersionInfo
         * @instance
         */
        VersionInfo.prototype.BunldID = "";

        /**
         * VersionInfo Ver.
         * @member {string} Ver
         * @memberof notify.VersionInfo
         * @instance
         */
        VersionInfo.prototype.Ver = "";

        /**
         * VersionInfo Path.
         * @member {string} Path
         * @memberof notify.VersionInfo
         * @instance
         */
        VersionInfo.prototype.Path = "";

        /**
         * VersionInfo Ver1.
         * @member {string} Ver1
         * @memberof notify.VersionInfo
         * @instance
         */
        VersionInfo.prototype.Ver1 = "";

        /**
         * VersionInfo Platform.
         * @member {string} Platform
         * @memberof notify.VersionInfo
         * @instance
         */
        VersionInfo.prototype.Platform = "";

        /**
         * VersionInfo Channel.
         * @member {string} Channel
         * @memberof notify.VersionInfo
         * @instance
         */
        VersionInfo.prototype.Channel = "";

        /**
         * VersionInfo SkinVer.
         * @member {string} SkinVer
         * @memberof notify.VersionInfo
         * @instance
         */
        VersionInfo.prototype.SkinVer = "";

        /**
         * VersionInfo LimitIP.
         * @member {string} LimitIP
         * @memberof notify.VersionInfo
         * @instance
         */
        VersionInfo.prototype.LimitIP = "";

        /**
         * Creates a new VersionInfo instance using the specified properties.
         * @function create
         * @memberof notify.VersionInfo
         * @static
         * @param {notify.IVersionInfo=} [properties] Properties to set
         * @returns {notify.VersionInfo} VersionInfo instance
         */
        VersionInfo.create = function create(properties) {
            return new VersionInfo(properties);
        };

        /**
         * Encodes the specified VersionInfo message. Does not implicitly {@link notify.VersionInfo.verify|verify} messages.
         * @function encode
         * @memberof notify.VersionInfo
         * @static
         * @param {notify.IVersionInfo} message VersionInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.BunldID);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.Ver);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.Path);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.Ver1);
            if (message.Platform != null && Object.hasOwnProperty.call(message, "Platform"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.Platform);
            if (message.Channel != null && Object.hasOwnProperty.call(message, "Channel"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.Channel);
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.SkinVer);
            if (message.LimitIP != null && Object.hasOwnProperty.call(message, "LimitIP"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.LimitIP);
            return writer;
        };

        /**
         * Encodes the specified VersionInfo message, length delimited. Does not implicitly {@link notify.VersionInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof notify.VersionInfo
         * @static
         * @param {notify.IVersionInfo} message VersionInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VersionInfo message from the specified reader or buffer.
         * @function decode
         * @memberof notify.VersionInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {notify.VersionInfo} VersionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.notify.VersionInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int32();
                    break;
                case 2:
                    message.BunldID = reader.string();
                    break;
                case 3:
                    message.Ver = reader.string();
                    break;
                case 4:
                    message.Path = reader.string();
                    break;
                case 5:
                    message.Ver1 = reader.string();
                    break;
                case 6:
                    message.Platform = reader.string();
                    break;
                case 7:
                    message.Channel = reader.string();
                    break;
                case 8:
                    message.SkinVer = reader.string();
                    break;
                case 9:
                    message.LimitIP = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ID"))
                throw $util.ProtocolError("missing required 'ID'", { instance: message });
            if (!message.hasOwnProperty("BunldID"))
                throw $util.ProtocolError("missing required 'BunldID'", { instance: message });
            if (!message.hasOwnProperty("Ver"))
                throw $util.ProtocolError("missing required 'Ver'", { instance: message });
            if (!message.hasOwnProperty("Path"))
                throw $util.ProtocolError("missing required 'Path'", { instance: message });
            if (!message.hasOwnProperty("Ver1"))
                throw $util.ProtocolError("missing required 'Ver1'", { instance: message });
            if (!message.hasOwnProperty("SkinVer"))
                throw $util.ProtocolError("missing required 'SkinVer'", { instance: message });
            return message;
        };

        /**
         * Decodes a VersionInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof notify.VersionInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {notify.VersionInfo} VersionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VersionInfo message.
         * @function verify
         * @memberof notify.VersionInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VersionInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ID))
                return "ID: integer expected";
            if (!$util.isString(message.BunldID))
                return "BunldID: string expected";
            if (!$util.isString(message.Ver))
                return "Ver: string expected";
            if (!$util.isString(message.Path))
                return "Path: string expected";
            if (!$util.isString(message.Ver1))
                return "Ver1: string expected";
            if (message.Platform != null && message.hasOwnProperty("Platform"))
                if (!$util.isString(message.Platform))
                    return "Platform: string expected";
            if (message.Channel != null && message.hasOwnProperty("Channel"))
                if (!$util.isString(message.Channel))
                    return "Channel: string expected";
            if (!$util.isString(message.SkinVer))
                return "SkinVer: string expected";
            if (message.LimitIP != null && message.hasOwnProperty("LimitIP"))
                if (!$util.isString(message.LimitIP))
                    return "LimitIP: string expected";
            return null;
        };

        /**
         * Creates a VersionInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof notify.VersionInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {notify.VersionInfo} VersionInfo
         */
        VersionInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.notify.VersionInfo)
                return object;
            var message = new $root.notify.VersionInfo();
            if (object.ID != null)
                message.ID = object.ID | 0;
            if (object.BunldID != null)
                message.BunldID = String(object.BunldID);
            if (object.Ver != null)
                message.Ver = String(object.Ver);
            if (object.Path != null)
                message.Path = String(object.Path);
            if (object.Ver1 != null)
                message.Ver1 = String(object.Ver1);
            if (object.Platform != null)
                message.Platform = String(object.Platform);
            if (object.Channel != null)
                message.Channel = String(object.Channel);
            if (object.SkinVer != null)
                message.SkinVer = String(object.SkinVer);
            if (object.LimitIP != null)
                message.LimitIP = String(object.LimitIP);
            return message;
        };

        /**
         * Creates a plain object from a VersionInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof notify.VersionInfo
         * @static
         * @param {notify.VersionInfo} message VersionInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VersionInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ID = 0;
                object.BunldID = "";
                object.Ver = "";
                object.Path = "";
                object.Ver1 = "";
                object.Platform = "";
                object.Channel = "";
                object.SkinVer = "";
                object.LimitIP = "";
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.BunldID != null && message.hasOwnProperty("BunldID"))
                object.BunldID = message.BunldID;
            if (message.Ver != null && message.hasOwnProperty("Ver"))
                object.Ver = message.Ver;
            if (message.Path != null && message.hasOwnProperty("Path"))
                object.Path = message.Path;
            if (message.Ver1 != null && message.hasOwnProperty("Ver1"))
                object.Ver1 = message.Ver1;
            if (message.Platform != null && message.hasOwnProperty("Platform"))
                object.Platform = message.Platform;
            if (message.Channel != null && message.hasOwnProperty("Channel"))
                object.Channel = message.Channel;
            if (message.SkinVer != null && message.hasOwnProperty("SkinVer"))
                object.SkinVer = message.SkinVer;
            if (message.LimitIP != null && message.hasOwnProperty("LimitIP"))
                object.LimitIP = message.LimitIP;
            return object;
        };

        /**
         * Converts this VersionInfo to JSON.
         * @function toJSON
         * @memberof notify.VersionInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VersionInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VersionInfo;
    })();

    notify.VersionList = (function() {

        /**
         * Properties of a VersionList.
         * @memberof notify
         * @interface IVersionList
         * @property {Array.<notify.IVersionInfo>|null} [Ver] VersionList Ver
         */

        /**
         * Constructs a new VersionList.
         * @memberof notify
         * @classdesc Represents a VersionList.
         * @implements IVersionList
         * @constructor
         * @param {notify.IVersionList=} [properties] Properties to set
         */
        function VersionList(properties) {
            this.Ver = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VersionList Ver.
         * @member {Array.<notify.IVersionInfo>} Ver
         * @memberof notify.VersionList
         * @instance
         */
        VersionList.prototype.Ver = $util.emptyArray;

        /**
         * Creates a new VersionList instance using the specified properties.
         * @function create
         * @memberof notify.VersionList
         * @static
         * @param {notify.IVersionList=} [properties] Properties to set
         * @returns {notify.VersionList} VersionList instance
         */
        VersionList.create = function create(properties) {
            return new VersionList(properties);
        };

        /**
         * Encodes the specified VersionList message. Does not implicitly {@link notify.VersionList.verify|verify} messages.
         * @function encode
         * @memberof notify.VersionList
         * @static
         * @param {notify.IVersionList} message VersionList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ver != null && message.Ver.length)
                for (var i = 0; i < message.Ver.length; ++i)
                    $root.notify.VersionInfo.encode(message.Ver[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified VersionList message, length delimited. Does not implicitly {@link notify.VersionList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof notify.VersionList
         * @static
         * @param {notify.IVersionList} message VersionList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VersionList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VersionList message from the specified reader or buffer.
         * @function decode
         * @memberof notify.VersionList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {notify.VersionList} VersionList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.notify.VersionList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Ver && message.Ver.length))
                        message.Ver = [];
                    message.Ver.push($root.notify.VersionInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VersionList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof notify.VersionList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {notify.VersionList} VersionList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VersionList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VersionList message.
         * @function verify
         * @memberof notify.VersionList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VersionList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Ver != null && message.hasOwnProperty("Ver")) {
                if (!Array.isArray(message.Ver))
                    return "Ver: array expected";
                for (var i = 0; i < message.Ver.length; ++i) {
                    var error = $root.notify.VersionInfo.verify(message.Ver[i]);
                    if (error)
                        return "Ver." + error;
                }
            }
            return null;
        };

        /**
         * Creates a VersionList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof notify.VersionList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {notify.VersionList} VersionList
         */
        VersionList.fromObject = function fromObject(object) {
            if (object instanceof $root.notify.VersionList)
                return object;
            var message = new $root.notify.VersionList();
            if (object.Ver) {
                if (!Array.isArray(object.Ver))
                    throw TypeError(".notify.VersionList.Ver: array expected");
                message.Ver = [];
                for (var i = 0; i < object.Ver.length; ++i) {
                    if (typeof object.Ver[i] !== "object")
                        throw TypeError(".notify.VersionList.Ver: object expected");
                    message.Ver[i] = $root.notify.VersionInfo.fromObject(object.Ver[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a VersionList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof notify.VersionList
         * @static
         * @param {notify.VersionList} message VersionList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VersionList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Ver = [];
            if (message.Ver && message.Ver.length) {
                object.Ver = [];
                for (var j = 0; j < message.Ver.length; ++j)
                    object.Ver[j] = $root.notify.VersionInfo.toObject(message.Ver[j], options);
            }
            return object;
        };

        /**
         * Converts this VersionList to JSON.
         * @function toJSON
         * @memberof notify.VersionList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VersionList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VersionList;
    })();

    return notify;
})();

module.exports = $root;
