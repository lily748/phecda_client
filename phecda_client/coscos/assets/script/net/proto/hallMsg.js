/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.hall = (function() {

    /**
     * Namespace hall.
     * @exports hall
     * @namespace
     */
    var hall = {};

    hall.GuestLogin = (function() {

        /**
         * Properties of a GuestLogin.
         * @memberof hall
         * @interface IGuestLogin
         * @property {string} HDCode GuestLogin HDCode
         * @property {number} HDType GuestLogin HDType
         * @property {number} SiteID GuestLogin SiteID
         * @property {string} Version GuestLogin Version
         * @property {number} PlatformID GuestLogin PlatformID
         * @property {number|null} [ServerID] GuestLogin ServerID
         * @property {string|null} [WxOpenID] GuestLogin WxOpenID
         * @property {string|null} [WxUnionID] GuestLogin WxUnionID
         * @property {string|null} [BunldID] GuestLogin BunldID
         * @property {string|null} [Ver] GuestLogin Ver
         */

        /**
         * Constructs a new GuestLogin.
         * @memberof hall
         * @classdesc Represents a GuestLogin.
         * @implements IGuestLogin
         * @constructor
         * @param {hall.IGuestLogin=} [properties] Properties to set
         */
        function GuestLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GuestLogin HDCode.
         * @member {string} HDCode
         * @memberof hall.GuestLogin
         * @instance
         */
        GuestLogin.prototype.HDCode = "";

        /**
         * GuestLogin HDType.
         * @member {number} HDType
         * @memberof hall.GuestLogin
         * @instance
         */
        GuestLogin.prototype.HDType = 0;

        /**
         * GuestLogin SiteID.
         * @member {number} SiteID
         * @memberof hall.GuestLogin
         * @instance
         */
        GuestLogin.prototype.SiteID = 0;

        /**
         * GuestLogin Version.
         * @member {string} Version
         * @memberof hall.GuestLogin
         * @instance
         */
        GuestLogin.prototype.Version = "";

        /**
         * GuestLogin PlatformID.
         * @member {number} PlatformID
         * @memberof hall.GuestLogin
         * @instance
         */
        GuestLogin.prototype.PlatformID = 0;

        /**
         * GuestLogin ServerID.
         * @member {number} ServerID
         * @memberof hall.GuestLogin
         * @instance
         */
        GuestLogin.prototype.ServerID = 0;

        /**
         * GuestLogin WxOpenID.
         * @member {string} WxOpenID
         * @memberof hall.GuestLogin
         * @instance
         */
        GuestLogin.prototype.WxOpenID = "";

        /**
         * GuestLogin WxUnionID.
         * @member {string} WxUnionID
         * @memberof hall.GuestLogin
         * @instance
         */
        GuestLogin.prototype.WxUnionID = "";

        /**
         * GuestLogin BunldID.
         * @member {string} BunldID
         * @memberof hall.GuestLogin
         * @instance
         */
        GuestLogin.prototype.BunldID = "";

        /**
         * GuestLogin Ver.
         * @member {string} Ver
         * @memberof hall.GuestLogin
         * @instance
         */
        GuestLogin.prototype.Ver = "";

        /**
         * Creates a new GuestLogin instance using the specified properties.
         * @function create
         * @memberof hall.GuestLogin
         * @static
         * @param {hall.IGuestLogin=} [properties] Properties to set
         * @returns {hall.GuestLogin} GuestLogin instance
         */
        GuestLogin.create = function create(properties) {
            return new GuestLogin(properties);
        };

        /**
         * Encodes the specified GuestLogin message. Does not implicitly {@link hall.GuestLogin.verify|verify} messages.
         * @function encode
         * @memberof hall.GuestLogin
         * @static
         * @param {hall.IGuestLogin} message GuestLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuestLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.HDCode);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.HDType);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.SiteID);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.Version);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.PlatformID);
            if (message.ServerID != null && Object.hasOwnProperty.call(message, "ServerID"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.ServerID);
            if (message.WxOpenID != null && Object.hasOwnProperty.call(message, "WxOpenID"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.WxOpenID);
            if (message.WxUnionID != null && Object.hasOwnProperty.call(message, "WxUnionID"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.WxUnionID);
            if (message.BunldID != null && Object.hasOwnProperty.call(message, "BunldID"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.BunldID);
            if (message.Ver != null && Object.hasOwnProperty.call(message, "Ver"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.Ver);
            return writer;
        };

        /**
         * Encodes the specified GuestLogin message, length delimited. Does not implicitly {@link hall.GuestLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.GuestLogin
         * @static
         * @param {hall.IGuestLogin} message GuestLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GuestLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GuestLogin message from the specified reader or buffer.
         * @function decode
         * @memberof hall.GuestLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.GuestLogin} GuestLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuestLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.GuestLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.HDCode = reader.string();
                    break;
                case 2:
                    message.HDType = reader.int32();
                    break;
                case 3:
                    message.SiteID = reader.int32();
                    break;
                case 4:
                    message.Version = reader.string();
                    break;
                case 5:
                    message.PlatformID = reader.int32();
                    break;
                case 6:
                    message.ServerID = reader.int32();
                    break;
                case 7:
                    message.WxOpenID = reader.string();
                    break;
                case 8:
                    message.WxUnionID = reader.string();
                    break;
                case 9:
                    message.BunldID = reader.string();
                    break;
                case 10:
                    message.Ver = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("HDCode"))
                throw $util.ProtocolError("missing required 'HDCode'", { instance: message });
            if (!message.hasOwnProperty("HDType"))
                throw $util.ProtocolError("missing required 'HDType'", { instance: message });
            if (!message.hasOwnProperty("SiteID"))
                throw $util.ProtocolError("missing required 'SiteID'", { instance: message });
            if (!message.hasOwnProperty("Version"))
                throw $util.ProtocolError("missing required 'Version'", { instance: message });
            if (!message.hasOwnProperty("PlatformID"))
                throw $util.ProtocolError("missing required 'PlatformID'", { instance: message });
            return message;
        };

        /**
         * Decodes a GuestLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.GuestLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.GuestLogin} GuestLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GuestLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GuestLogin message.
         * @function verify
         * @memberof hall.GuestLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GuestLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.HDCode))
                return "HDCode: string expected";
            if (!$util.isInteger(message.HDType))
                return "HDType: integer expected";
            if (!$util.isInteger(message.SiteID))
                return "SiteID: integer expected";
            if (!$util.isString(message.Version))
                return "Version: string expected";
            if (!$util.isInteger(message.PlatformID))
                return "PlatformID: integer expected";
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                if (!$util.isInteger(message.ServerID))
                    return "ServerID: integer expected";
            if (message.WxOpenID != null && message.hasOwnProperty("WxOpenID"))
                if (!$util.isString(message.WxOpenID))
                    return "WxOpenID: string expected";
            if (message.WxUnionID != null && message.hasOwnProperty("WxUnionID"))
                if (!$util.isString(message.WxUnionID))
                    return "WxUnionID: string expected";
            if (message.BunldID != null && message.hasOwnProperty("BunldID"))
                if (!$util.isString(message.BunldID))
                    return "BunldID: string expected";
            if (message.Ver != null && message.hasOwnProperty("Ver"))
                if (!$util.isString(message.Ver))
                    return "Ver: string expected";
            return null;
        };

        /**
         * Creates a GuestLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.GuestLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.GuestLogin} GuestLogin
         */
        GuestLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.GuestLogin)
                return object;
            var message = new $root.hall.GuestLogin();
            if (object.HDCode != null)
                message.HDCode = String(object.HDCode);
            if (object.HDType != null)
                message.HDType = object.HDType | 0;
            if (object.SiteID != null)
                message.SiteID = object.SiteID | 0;
            if (object.Version != null)
                message.Version = String(object.Version);
            if (object.PlatformID != null)
                message.PlatformID = object.PlatformID | 0;
            if (object.ServerID != null)
                message.ServerID = object.ServerID | 0;
            if (object.WxOpenID != null)
                message.WxOpenID = String(object.WxOpenID);
            if (object.WxUnionID != null)
                message.WxUnionID = String(object.WxUnionID);
            if (object.BunldID != null)
                message.BunldID = String(object.BunldID);
            if (object.Ver != null)
                message.Ver = String(object.Ver);
            return message;
        };

        /**
         * Creates a plain object from a GuestLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.GuestLogin
         * @static
         * @param {hall.GuestLogin} message GuestLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GuestLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.HDCode = "";
                object.HDType = 0;
                object.SiteID = 0;
                object.Version = "";
                object.PlatformID = 0;
                object.ServerID = 0;
                object.WxOpenID = "";
                object.WxUnionID = "";
                object.BunldID = "";
                object.Ver = "";
            }
            if (message.HDCode != null && message.hasOwnProperty("HDCode"))
                object.HDCode = message.HDCode;
            if (message.HDType != null && message.hasOwnProperty("HDType"))
                object.HDType = message.HDType;
            if (message.SiteID != null && message.hasOwnProperty("SiteID"))
                object.SiteID = message.SiteID;
            if (message.Version != null && message.hasOwnProperty("Version"))
                object.Version = message.Version;
            if (message.PlatformID != null && message.hasOwnProperty("PlatformID"))
                object.PlatformID = message.PlatformID;
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                object.ServerID = message.ServerID;
            if (message.WxOpenID != null && message.hasOwnProperty("WxOpenID"))
                object.WxOpenID = message.WxOpenID;
            if (message.WxUnionID != null && message.hasOwnProperty("WxUnionID"))
                object.WxUnionID = message.WxUnionID;
            if (message.BunldID != null && message.hasOwnProperty("BunldID"))
                object.BunldID = message.BunldID;
            if (message.Ver != null && message.hasOwnProperty("Ver"))
                object.Ver = message.Ver;
            return object;
        };

        /**
         * Converts this GuestLogin to JSON.
         * @function toJSON
         * @memberof hall.GuestLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GuestLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GuestLogin;
    })();

    hall.UserLogin = (function() {

        /**
         * Properties of a UserLogin.
         * @memberof hall
         * @interface IUserLogin
         * @property {string} HDCode UserLogin HDCode
         * @property {number} HDType UserLogin HDType
         * @property {number} SiteID UserLogin SiteID
         * @property {string} Version UserLogin Version
         * @property {number} PlatformID UserLogin PlatformID
         * @property {string|null} [LoginName] UserLogin LoginName
         * @property {string|null} [Password] UserLogin Password
         * @property {number|null} [UserID] UserLogin UserID
         * @property {string|null} [Cer] UserLogin Cer
         * @property {string|null} [BunldID] UserLogin BunldID
         * @property {string|null} [Ver] UserLogin Ver
         */

        /**
         * Constructs a new UserLogin.
         * @memberof hall
         * @classdesc Represents a UserLogin.
         * @implements IUserLogin
         * @constructor
         * @param {hall.IUserLogin=} [properties] Properties to set
         */
        function UserLogin(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserLogin HDCode.
         * @member {string} HDCode
         * @memberof hall.UserLogin
         * @instance
         */
        UserLogin.prototype.HDCode = "";

        /**
         * UserLogin HDType.
         * @member {number} HDType
         * @memberof hall.UserLogin
         * @instance
         */
        UserLogin.prototype.HDType = 0;

        /**
         * UserLogin SiteID.
         * @member {number} SiteID
         * @memberof hall.UserLogin
         * @instance
         */
        UserLogin.prototype.SiteID = 0;

        /**
         * UserLogin Version.
         * @member {string} Version
         * @memberof hall.UserLogin
         * @instance
         */
        UserLogin.prototype.Version = "";

        /**
         * UserLogin PlatformID.
         * @member {number} PlatformID
         * @memberof hall.UserLogin
         * @instance
         */
        UserLogin.prototype.PlatformID = 0;

        /**
         * UserLogin LoginName.
         * @member {string} LoginName
         * @memberof hall.UserLogin
         * @instance
         */
        UserLogin.prototype.LoginName = "";

        /**
         * UserLogin Password.
         * @member {string} Password
         * @memberof hall.UserLogin
         * @instance
         */
        UserLogin.prototype.Password = "";

        /**
         * UserLogin UserID.
         * @member {number} UserID
         * @memberof hall.UserLogin
         * @instance
         */
        UserLogin.prototype.UserID = 0;

        /**
         * UserLogin Cer.
         * @member {string} Cer
         * @memberof hall.UserLogin
         * @instance
         */
        UserLogin.prototype.Cer = "";

        /**
         * UserLogin BunldID.
         * @member {string} BunldID
         * @memberof hall.UserLogin
         * @instance
         */
        UserLogin.prototype.BunldID = "";

        /**
         * UserLogin Ver.
         * @member {string} Ver
         * @memberof hall.UserLogin
         * @instance
         */
        UserLogin.prototype.Ver = "";

        /**
         * Creates a new UserLogin instance using the specified properties.
         * @function create
         * @memberof hall.UserLogin
         * @static
         * @param {hall.IUserLogin=} [properties] Properties to set
         * @returns {hall.UserLogin} UserLogin instance
         */
        UserLogin.create = function create(properties) {
            return new UserLogin(properties);
        };

        /**
         * Encodes the specified UserLogin message. Does not implicitly {@link hall.UserLogin.verify|verify} messages.
         * @function encode
         * @memberof hall.UserLogin
         * @static
         * @param {hall.IUserLogin} message UserLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLogin.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.HDCode);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.HDType);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.SiteID);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.Version);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.PlatformID);
            if (message.LoginName != null && Object.hasOwnProperty.call(message, "LoginName"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.LoginName);
            if (message.Password != null && Object.hasOwnProperty.call(message, "Password"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.Password);
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.UserID);
            if (message.Cer != null && Object.hasOwnProperty.call(message, "Cer"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.Cer);
            if (message.BunldID != null && Object.hasOwnProperty.call(message, "BunldID"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.BunldID);
            if (message.Ver != null && Object.hasOwnProperty.call(message, "Ver"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.Ver);
            return writer;
        };

        /**
         * Encodes the specified UserLogin message, length delimited. Does not implicitly {@link hall.UserLogin.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.UserLogin
         * @static
         * @param {hall.IUserLogin} message UserLogin message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLogin.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLogin message from the specified reader or buffer.
         * @function decode
         * @memberof hall.UserLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.UserLogin} UserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLogin.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.UserLogin();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.HDCode = reader.string();
                    break;
                case 2:
                    message.HDType = reader.int32();
                    break;
                case 3:
                    message.SiteID = reader.int32();
                    break;
                case 4:
                    message.Version = reader.string();
                    break;
                case 5:
                    message.PlatformID = reader.int32();
                    break;
                case 6:
                    message.LoginName = reader.string();
                    break;
                case 7:
                    message.Password = reader.string();
                    break;
                case 8:
                    message.UserID = reader.int32();
                    break;
                case 9:
                    message.Cer = reader.string();
                    break;
                case 10:
                    message.BunldID = reader.string();
                    break;
                case 11:
                    message.Ver = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("HDCode"))
                throw $util.ProtocolError("missing required 'HDCode'", { instance: message });
            if (!message.hasOwnProperty("HDType"))
                throw $util.ProtocolError("missing required 'HDType'", { instance: message });
            if (!message.hasOwnProperty("SiteID"))
                throw $util.ProtocolError("missing required 'SiteID'", { instance: message });
            if (!message.hasOwnProperty("Version"))
                throw $util.ProtocolError("missing required 'Version'", { instance: message });
            if (!message.hasOwnProperty("PlatformID"))
                throw $util.ProtocolError("missing required 'PlatformID'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserLogin message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.UserLogin
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.UserLogin} UserLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLogin.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserLogin message.
         * @function verify
         * @memberof hall.UserLogin
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLogin.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.HDCode))
                return "HDCode: string expected";
            if (!$util.isInteger(message.HDType))
                return "HDType: integer expected";
            if (!$util.isInteger(message.SiteID))
                return "SiteID: integer expected";
            if (!$util.isString(message.Version))
                return "Version: string expected";
            if (!$util.isInteger(message.PlatformID))
                return "PlatformID: integer expected";
            if (message.LoginName != null && message.hasOwnProperty("LoginName"))
                if (!$util.isString(message.LoginName))
                    return "LoginName: string expected";
            if (message.Password != null && message.hasOwnProperty("Password"))
                if (!$util.isString(message.Password))
                    return "Password: string expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.Cer != null && message.hasOwnProperty("Cer"))
                if (!$util.isString(message.Cer))
                    return "Cer: string expected";
            if (message.BunldID != null && message.hasOwnProperty("BunldID"))
                if (!$util.isString(message.BunldID))
                    return "BunldID: string expected";
            if (message.Ver != null && message.hasOwnProperty("Ver"))
                if (!$util.isString(message.Ver))
                    return "Ver: string expected";
            return null;
        };

        /**
         * Creates a UserLogin message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.UserLogin
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.UserLogin} UserLogin
         */
        UserLogin.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.UserLogin)
                return object;
            var message = new $root.hall.UserLogin();
            if (object.HDCode != null)
                message.HDCode = String(object.HDCode);
            if (object.HDType != null)
                message.HDType = object.HDType | 0;
            if (object.SiteID != null)
                message.SiteID = object.SiteID | 0;
            if (object.Version != null)
                message.Version = String(object.Version);
            if (object.PlatformID != null)
                message.PlatformID = object.PlatformID | 0;
            if (object.LoginName != null)
                message.LoginName = String(object.LoginName);
            if (object.Password != null)
                message.Password = String(object.Password);
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Cer != null)
                message.Cer = String(object.Cer);
            if (object.BunldID != null)
                message.BunldID = String(object.BunldID);
            if (object.Ver != null)
                message.Ver = String(object.Ver);
            return message;
        };

        /**
         * Creates a plain object from a UserLogin message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.UserLogin
         * @static
         * @param {hall.UserLogin} message UserLogin
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserLogin.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.HDCode = "";
                object.HDType = 0;
                object.SiteID = 0;
                object.Version = "";
                object.PlatformID = 0;
                object.LoginName = "";
                object.Password = "";
                object.UserID = 0;
                object.Cer = "";
                object.BunldID = "";
                object.Ver = "";
            }
            if (message.HDCode != null && message.hasOwnProperty("HDCode"))
                object.HDCode = message.HDCode;
            if (message.HDType != null && message.hasOwnProperty("HDType"))
                object.HDType = message.HDType;
            if (message.SiteID != null && message.hasOwnProperty("SiteID"))
                object.SiteID = message.SiteID;
            if (message.Version != null && message.hasOwnProperty("Version"))
                object.Version = message.Version;
            if (message.PlatformID != null && message.hasOwnProperty("PlatformID"))
                object.PlatformID = message.PlatformID;
            if (message.LoginName != null && message.hasOwnProperty("LoginName"))
                object.LoginName = message.LoginName;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Cer != null && message.hasOwnProperty("Cer"))
                object.Cer = message.Cer;
            if (message.BunldID != null && message.hasOwnProperty("BunldID"))
                object.BunldID = message.BunldID;
            if (message.Ver != null && message.hasOwnProperty("Ver"))
                object.Ver = message.Ver;
            return object;
        };

        /**
         * Converts this UserLogin to JSON.
         * @function toJSON
         * @memberof hall.UserLogin
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLogin.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLogin;
    })();

    hall.UserLoginRet = (function() {

        /**
         * Properties of a UserLoginRet.
         * @memberof hall
         * @interface IUserLoginRet
         * @property {number} Code UserLoginRet Code
         * @property {string} Message UserLoginRet Message
         * @property {number|null} [UserID] UserLoginRet UserID
         * @property {string|null} [Cer] UserLoginRet Cer
         * @property {string|null} [HDCode] UserLoginRet HDCode
         * @property {number|null} [HDType] UserLoginRet HDType
         * @property {hall.IUserHallLogonData|null} [UserData] UserLoginRet UserData
         */

        /**
         * Constructs a new UserLoginRet.
         * @memberof hall
         * @classdesc Represents a UserLoginRet.
         * @implements IUserLoginRet
         * @constructor
         * @param {hall.IUserLoginRet=} [properties] Properties to set
         */
        function UserLoginRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserLoginRet Code.
         * @member {number} Code
         * @memberof hall.UserLoginRet
         * @instance
         */
        UserLoginRet.prototype.Code = 0;

        /**
         * UserLoginRet Message.
         * @member {string} Message
         * @memberof hall.UserLoginRet
         * @instance
         */
        UserLoginRet.prototype.Message = "";

        /**
         * UserLoginRet UserID.
         * @member {number} UserID
         * @memberof hall.UserLoginRet
         * @instance
         */
        UserLoginRet.prototype.UserID = 0;

        /**
         * UserLoginRet Cer.
         * @member {string} Cer
         * @memberof hall.UserLoginRet
         * @instance
         */
        UserLoginRet.prototype.Cer = "";

        /**
         * UserLoginRet HDCode.
         * @member {string} HDCode
         * @memberof hall.UserLoginRet
         * @instance
         */
        UserLoginRet.prototype.HDCode = "";

        /**
         * UserLoginRet HDType.
         * @member {number} HDType
         * @memberof hall.UserLoginRet
         * @instance
         */
        UserLoginRet.prototype.HDType = 0;

        /**
         * UserLoginRet UserData.
         * @member {hall.IUserHallLogonData|null|undefined} UserData
         * @memberof hall.UserLoginRet
         * @instance
         */
        UserLoginRet.prototype.UserData = null;

        /**
         * Creates a new UserLoginRet instance using the specified properties.
         * @function create
         * @memberof hall.UserLoginRet
         * @static
         * @param {hall.IUserLoginRet=} [properties] Properties to set
         * @returns {hall.UserLoginRet} UserLoginRet instance
         */
        UserLoginRet.create = function create(properties) {
            return new UserLoginRet(properties);
        };

        /**
         * Encodes the specified UserLoginRet message. Does not implicitly {@link hall.UserLoginRet.verify|verify} messages.
         * @function encode
         * @memberof hall.UserLoginRet
         * @static
         * @param {hall.IUserLoginRet} message UserLoginRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLoginRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Message);
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.UserID);
            if (message.Cer != null && Object.hasOwnProperty.call(message, "Cer"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Cer);
            if (message.HDCode != null && Object.hasOwnProperty.call(message, "HDCode"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.HDCode);
            if (message.HDType != null && Object.hasOwnProperty.call(message, "HDType"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.HDType);
            if (message.UserData != null && Object.hasOwnProperty.call(message, "UserData"))
                $root.hall.UserHallLogonData.encode(message.UserData, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserLoginRet message, length delimited. Does not implicitly {@link hall.UserLoginRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.UserLoginRet
         * @static
         * @param {hall.IUserLoginRet} message UserLoginRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLoginRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLoginRet message from the specified reader or buffer.
         * @function decode
         * @memberof hall.UserLoginRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.UserLoginRet} UserLoginRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLoginRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.UserLoginRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                case 2:
                    message.Message = reader.string();
                    break;
                case 3:
                    message.UserID = reader.int32();
                    break;
                case 4:
                    message.Cer = reader.string();
                    break;
                case 5:
                    message.HDCode = reader.string();
                    break;
                case 6:
                    message.HDType = reader.int32();
                    break;
                case 7:
                    message.UserData = $root.hall.UserHallLogonData.decode(reader, reader.uint32());
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
         * Decodes a UserLoginRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.UserLoginRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.UserLoginRet} UserLoginRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLoginRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserLoginRet message.
         * @function verify
         * @memberof hall.UserLoginRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLoginRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Code))
                return "Code: integer expected";
            if (!$util.isString(message.Message))
                return "Message: string expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!$util.isInteger(message.UserID))
                    return "UserID: integer expected";
            if (message.Cer != null && message.hasOwnProperty("Cer"))
                if (!$util.isString(message.Cer))
                    return "Cer: string expected";
            if (message.HDCode != null && message.hasOwnProperty("HDCode"))
                if (!$util.isString(message.HDCode))
                    return "HDCode: string expected";
            if (message.HDType != null && message.hasOwnProperty("HDType"))
                if (!$util.isInteger(message.HDType))
                    return "HDType: integer expected";
            if (message.UserData != null && message.hasOwnProperty("UserData")) {
                var error = $root.hall.UserHallLogonData.verify(message.UserData);
                if (error)
                    return "UserData." + error;
            }
            return null;
        };

        /**
         * Creates a UserLoginRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.UserLoginRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.UserLoginRet} UserLoginRet
         */
        UserLoginRet.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.UserLoginRet)
                return object;
            var message = new $root.hall.UserLoginRet();
            if (object.Code != null)
                message.Code = object.Code | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Cer != null)
                message.Cer = String(object.Cer);
            if (object.HDCode != null)
                message.HDCode = String(object.HDCode);
            if (object.HDType != null)
                message.HDType = object.HDType | 0;
            if (object.UserData != null) {
                if (typeof object.UserData !== "object")
                    throw TypeError(".hall.UserLoginRet.UserData: object expected");
                message.UserData = $root.hall.UserHallLogonData.fromObject(object.UserData);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserLoginRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.UserLoginRet
         * @static
         * @param {hall.UserLoginRet} message UserLoginRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserLoginRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = 0;
                object.Message = "";
                object.UserID = 0;
                object.Cer = "";
                object.HDCode = "";
                object.HDType = 0;
                object.UserData = null;
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Cer != null && message.hasOwnProperty("Cer"))
                object.Cer = message.Cer;
            if (message.HDCode != null && message.hasOwnProperty("HDCode"))
                object.HDCode = message.HDCode;
            if (message.HDType != null && message.hasOwnProperty("HDType"))
                object.HDType = message.HDType;
            if (message.UserData != null && message.hasOwnProperty("UserData"))
                object.UserData = $root.hall.UserHallLogonData.toObject(message.UserData, options);
            return object;
        };

        /**
         * Converts this UserLoginRet to JSON.
         * @function toJSON
         * @memberof hall.UserLoginRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLoginRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLoginRet;
    })();

    hall.UserHallLogonData = (function() {

        /**
         * Properties of a UserHallLogonData.
         * @memberof hall
         * @interface IUserHallLogonData
         * @property {string} LoginName UserHallLogonData LoginName
         * @property {string} NickName UserHallLogonData NickName
         * @property {number} UserType UserHallLogonData UserType
         * @property {number} Sex UserHallLogonData Sex
         * @property {number} HeadID UserHallLogonData HeadID
         * @property {boolean} IsTopWindow UserHallLogonData IsTopWindow
         * @property {number|Long} CashAmount UserHallLogonData CashAmount
         * @property {number|Long} BankAmount UserHallLogonData BankAmount
         * @property {boolean} IsGaming UserHallLogonData IsGaming
         * @property {string|null} [ServerAddr] UserHallLogonData ServerAddr
         * @property {string|null} [ServerName] UserHallLogonData ServerName
         * @property {boolean} IsKick UserHallLogonData IsKick
         * @property {boolean} IsBindGuest UserHallLogonData IsBindGuest
         * @property {number} UserLevel UserHallLogonData UserLevel
         * @property {string} LevelKey UserHallLogonData LevelKey
         * @property {string|null} [AnnMsg] UserHallLogonData AnnMsg
         * @property {string|null} [ConvertRateTipMsg] UserHallLogonData ConvertRateTipMsg
         * @property {string|null} [BankPwdTipMsg] UserHallLogonData BankPwdTipMsg
         * @property {string|null} [UIFlag] UserHallLogonData UIFlag
         * @property {string|null} [PaySort] UserHallLogonData PaySort
         * @property {string|null} [UpGradeMsg] UserHallLogonData UpGradeMsg
         * @property {number|null} [LockGameID] UserHallLogonData LockGameID
         * @property {boolean} IsBindZhifubao UserHallLogonData IsBindZhifubao
         * @property {string|null} [Zhifubao] UserHallLogonData Zhifubao
         * @property {string|null} [RealName] UserHallLogonData RealName
         * @property {Array.<hall.IGameSortCateInfo>|null} [GameList] UserHallLogonData GameList
         * @property {string|null} [PayAmountConfig] UserHallLogonData PayAmountConfig
         * @property {string|null} [PayNotifyMsg] UserHallLogonData PayNotifyMsg
         * @property {string|null} [NotifyFlag] UserHallLogonData NotifyFlag
         * @property {string|null} [PayTips] UserHallLogonData PayTips
         * @property {boolean|null} [IsBindBankCard] UserHallLogonData IsBindBankCard
         * @property {string|null} [BankCardNumber] UserHallLogonData BankCardNumber
         * @property {string|null} [BankCardName] UserHallLogonData BankCardName
         * @property {string|null} [BankName] UserHallLogonData BankName
         * @property {string|null} [BankConvertRateTipMsg] UserHallLogonData BankConvertRateTipMsg
         * @property {Array.<number>|null} [VGameIDS] UserHallLogonData VGameIDS
         * @property {number|null} [InVGameID] UserHallLogonData InVGameID
         * @property {number|Long|null} [XiuXianAmount] UserHallLogonData XiuXianAmount
         * @property {number|Long|null} [XiuXianTotalCharge] UserHallLogonData XiuXianTotalCharge
         * @property {Array.<hall.IGameCategoryInfo>|null} [GameCategoryList] UserHallLogonData GameCategoryList
         * @property {number|null} [LianyunID] UserHallLogonData LianyunID
         * @property {Array.<hall.ISkinVersionInfo>|null} [VersionList] UserHallLogonData VersionList
         * @property {number|null} [VipLv] UserHallLogonData VipLv
         * @property {number|null} [HeadFrameID] UserHallLogonData HeadFrameID
         */

        /**
         * Constructs a new UserHallLogonData.
         * @memberof hall
         * @classdesc Represents a UserHallLogonData.
         * @implements IUserHallLogonData
         * @constructor
         * @param {hall.IUserHallLogonData=} [properties] Properties to set
         */
        function UserHallLogonData(properties) {
            this.GameList = [];
            this.VGameIDS = [];
            this.GameCategoryList = [];
            this.VersionList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserHallLogonData LoginName.
         * @member {string} LoginName
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.LoginName = "";

        /**
         * UserHallLogonData NickName.
         * @member {string} NickName
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.NickName = "";

        /**
         * UserHallLogonData UserType.
         * @member {number} UserType
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.UserType = 0;

        /**
         * UserHallLogonData Sex.
         * @member {number} Sex
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.Sex = 0;

        /**
         * UserHallLogonData HeadID.
         * @member {number} HeadID
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.HeadID = 0;

        /**
         * UserHallLogonData IsTopWindow.
         * @member {boolean} IsTopWindow
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.IsTopWindow = false;

        /**
         * UserHallLogonData CashAmount.
         * @member {number|Long} CashAmount
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.CashAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserHallLogonData BankAmount.
         * @member {number|Long} BankAmount
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.BankAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserHallLogonData IsGaming.
         * @member {boolean} IsGaming
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.IsGaming = false;

        /**
         * UserHallLogonData ServerAddr.
         * @member {string} ServerAddr
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.ServerAddr = "";

        /**
         * UserHallLogonData ServerName.
         * @member {string} ServerName
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.ServerName = "";

        /**
         * UserHallLogonData IsKick.
         * @member {boolean} IsKick
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.IsKick = false;

        /**
         * UserHallLogonData IsBindGuest.
         * @member {boolean} IsBindGuest
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.IsBindGuest = false;

        /**
         * UserHallLogonData UserLevel.
         * @member {number} UserLevel
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.UserLevel = 0;

        /**
         * UserHallLogonData LevelKey.
         * @member {string} LevelKey
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.LevelKey = "";

        /**
         * UserHallLogonData AnnMsg.
         * @member {string} AnnMsg
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.AnnMsg = "";

        /**
         * UserHallLogonData ConvertRateTipMsg.
         * @member {string} ConvertRateTipMsg
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.ConvertRateTipMsg = "";

        /**
         * UserHallLogonData BankPwdTipMsg.
         * @member {string} BankPwdTipMsg
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.BankPwdTipMsg = "";

        /**
         * UserHallLogonData UIFlag.
         * @member {string} UIFlag
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.UIFlag = "";

        /**
         * UserHallLogonData PaySort.
         * @member {string} PaySort
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.PaySort = "";

        /**
         * UserHallLogonData UpGradeMsg.
         * @member {string} UpGradeMsg
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.UpGradeMsg = "";

        /**
         * UserHallLogonData LockGameID.
         * @member {number} LockGameID
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.LockGameID = 0;

        /**
         * UserHallLogonData IsBindZhifubao.
         * @member {boolean} IsBindZhifubao
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.IsBindZhifubao = false;

        /**
         * UserHallLogonData Zhifubao.
         * @member {string} Zhifubao
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.Zhifubao = "";

        /**
         * UserHallLogonData RealName.
         * @member {string} RealName
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.RealName = "";

        /**
         * UserHallLogonData GameList.
         * @member {Array.<hall.IGameSortCateInfo>} GameList
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.GameList = $util.emptyArray;

        /**
         * UserHallLogonData PayAmountConfig.
         * @member {string} PayAmountConfig
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.PayAmountConfig = "";

        /**
         * UserHallLogonData PayNotifyMsg.
         * @member {string} PayNotifyMsg
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.PayNotifyMsg = "";

        /**
         * UserHallLogonData NotifyFlag.
         * @member {string} NotifyFlag
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.NotifyFlag = "";

        /**
         * UserHallLogonData PayTips.
         * @member {string} PayTips
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.PayTips = "";

        /**
         * UserHallLogonData IsBindBankCard.
         * @member {boolean} IsBindBankCard
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.IsBindBankCard = false;

        /**
         * UserHallLogonData BankCardNumber.
         * @member {string} BankCardNumber
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.BankCardNumber = "";

        /**
         * UserHallLogonData BankCardName.
         * @member {string} BankCardName
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.BankCardName = "";

        /**
         * UserHallLogonData BankName.
         * @member {string} BankName
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.BankName = "";

        /**
         * UserHallLogonData BankConvertRateTipMsg.
         * @member {string} BankConvertRateTipMsg
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.BankConvertRateTipMsg = "";

        /**
         * UserHallLogonData VGameIDS.
         * @member {Array.<number>} VGameIDS
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.VGameIDS = $util.emptyArray;

        /**
         * UserHallLogonData InVGameID.
         * @member {number} InVGameID
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.InVGameID = 0;

        /**
         * UserHallLogonData XiuXianAmount.
         * @member {number|Long} XiuXianAmount
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.XiuXianAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserHallLogonData XiuXianTotalCharge.
         * @member {number|Long} XiuXianTotalCharge
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.XiuXianTotalCharge = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserHallLogonData GameCategoryList.
         * @member {Array.<hall.IGameCategoryInfo>} GameCategoryList
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.GameCategoryList = $util.emptyArray;

        /**
         * UserHallLogonData LianyunID.
         * @member {number} LianyunID
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.LianyunID = 0;

        /**
         * UserHallLogonData VersionList.
         * @member {Array.<hall.ISkinVersionInfo>} VersionList
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.VersionList = $util.emptyArray;

        /**
         * UserHallLogonData VipLv.
         * @member {number} VipLv
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.VipLv = 0;

        /**
         * UserHallLogonData HeadFrameID.
         * @member {number} HeadFrameID
         * @memberof hall.UserHallLogonData
         * @instance
         */
        UserHallLogonData.prototype.HeadFrameID = 0;

        /**
         * Creates a new UserHallLogonData instance using the specified properties.
         * @function create
         * @memberof hall.UserHallLogonData
         * @static
         * @param {hall.IUserHallLogonData=} [properties] Properties to set
         * @returns {hall.UserHallLogonData} UserHallLogonData instance
         */
        UserHallLogonData.create = function create(properties) {
            return new UserHallLogonData(properties);
        };

        /**
         * Encodes the specified UserHallLogonData message. Does not implicitly {@link hall.UserHallLogonData.verify|verify} messages.
         * @function encode
         * @memberof hall.UserHallLogonData
         * @static
         * @param {hall.IUserHallLogonData} message UserHallLogonData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserHallLogonData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.LoginName);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.NickName);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.UserType);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Sex);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.HeadID);
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.IsTopWindow);
            writer.uint32(/* id 7, wireType 0 =*/56).int64(message.CashAmount);
            writer.uint32(/* id 8, wireType 0 =*/64).int64(message.BankAmount);
            writer.uint32(/* id 9, wireType 0 =*/72).bool(message.IsGaming);
            if (message.ServerAddr != null && Object.hasOwnProperty.call(message, "ServerAddr"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.ServerAddr);
            if (message.ServerName != null && Object.hasOwnProperty.call(message, "ServerName"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.ServerName);
            writer.uint32(/* id 12, wireType 0 =*/96).bool(message.IsKick);
            writer.uint32(/* id 13, wireType 0 =*/104).bool(message.IsBindGuest);
            writer.uint32(/* id 14, wireType 0 =*/112).int32(message.UserLevel);
            writer.uint32(/* id 15, wireType 2 =*/122).string(message.LevelKey);
            if (message.AnnMsg != null && Object.hasOwnProperty.call(message, "AnnMsg"))
                writer.uint32(/* id 16, wireType 2 =*/130).string(message.AnnMsg);
            if (message.ConvertRateTipMsg != null && Object.hasOwnProperty.call(message, "ConvertRateTipMsg"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.ConvertRateTipMsg);
            if (message.BankPwdTipMsg != null && Object.hasOwnProperty.call(message, "BankPwdTipMsg"))
                writer.uint32(/* id 18, wireType 2 =*/146).string(message.BankPwdTipMsg);
            if (message.UIFlag != null && Object.hasOwnProperty.call(message, "UIFlag"))
                writer.uint32(/* id 19, wireType 2 =*/154).string(message.UIFlag);
            if (message.PaySort != null && Object.hasOwnProperty.call(message, "PaySort"))
                writer.uint32(/* id 20, wireType 2 =*/162).string(message.PaySort);
            if (message.UpGradeMsg != null && Object.hasOwnProperty.call(message, "UpGradeMsg"))
                writer.uint32(/* id 21, wireType 2 =*/170).string(message.UpGradeMsg);
            if (message.LockGameID != null && Object.hasOwnProperty.call(message, "LockGameID"))
                writer.uint32(/* id 22, wireType 0 =*/176).int32(message.LockGameID);
            writer.uint32(/* id 23, wireType 0 =*/184).bool(message.IsBindZhifubao);
            if (message.Zhifubao != null && Object.hasOwnProperty.call(message, "Zhifubao"))
                writer.uint32(/* id 24, wireType 2 =*/194).string(message.Zhifubao);
            if (message.RealName != null && Object.hasOwnProperty.call(message, "RealName"))
                writer.uint32(/* id 25, wireType 2 =*/202).string(message.RealName);
            if (message.GameList != null && message.GameList.length)
                for (var i = 0; i < message.GameList.length; ++i)
                    $root.hall.GameSortCateInfo.encode(message.GameList[i], writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
            if (message.PayAmountConfig != null && Object.hasOwnProperty.call(message, "PayAmountConfig"))
                writer.uint32(/* id 27, wireType 2 =*/218).string(message.PayAmountConfig);
            if (message.PayNotifyMsg != null && Object.hasOwnProperty.call(message, "PayNotifyMsg"))
                writer.uint32(/* id 28, wireType 2 =*/226).string(message.PayNotifyMsg);
            if (message.NotifyFlag != null && Object.hasOwnProperty.call(message, "NotifyFlag"))
                writer.uint32(/* id 29, wireType 2 =*/234).string(message.NotifyFlag);
            if (message.PayTips != null && Object.hasOwnProperty.call(message, "PayTips"))
                writer.uint32(/* id 30, wireType 2 =*/242).string(message.PayTips);
            if (message.IsBindBankCard != null && Object.hasOwnProperty.call(message, "IsBindBankCard"))
                writer.uint32(/* id 31, wireType 0 =*/248).bool(message.IsBindBankCard);
            if (message.BankCardNumber != null && Object.hasOwnProperty.call(message, "BankCardNumber"))
                writer.uint32(/* id 32, wireType 2 =*/258).string(message.BankCardNumber);
            if (message.BankCardName != null && Object.hasOwnProperty.call(message, "BankCardName"))
                writer.uint32(/* id 33, wireType 2 =*/266).string(message.BankCardName);
            if (message.BankName != null && Object.hasOwnProperty.call(message, "BankName"))
                writer.uint32(/* id 34, wireType 2 =*/274).string(message.BankName);
            if (message.BankConvertRateTipMsg != null && Object.hasOwnProperty.call(message, "BankConvertRateTipMsg"))
                writer.uint32(/* id 35, wireType 2 =*/282).string(message.BankConvertRateTipMsg);
            if (message.VGameIDS != null && message.VGameIDS.length)
                for (var i = 0; i < message.VGameIDS.length; ++i)
                    writer.uint32(/* id 36, wireType 0 =*/288).int32(message.VGameIDS[i]);
            if (message.InVGameID != null && Object.hasOwnProperty.call(message, "InVGameID"))
                writer.uint32(/* id 37, wireType 0 =*/296).int32(message.InVGameID);
            if (message.XiuXianAmount != null && Object.hasOwnProperty.call(message, "XiuXianAmount"))
                writer.uint32(/* id 38, wireType 0 =*/304).int64(message.XiuXianAmount);
            if (message.XiuXianTotalCharge != null && Object.hasOwnProperty.call(message, "XiuXianTotalCharge"))
                writer.uint32(/* id 39, wireType 0 =*/312).int64(message.XiuXianTotalCharge);
            if (message.GameCategoryList != null && message.GameCategoryList.length)
                for (var i = 0; i < message.GameCategoryList.length; ++i)
                    $root.hall.GameCategoryInfo.encode(message.GameCategoryList[i], writer.uint32(/* id 40, wireType 2 =*/322).fork()).ldelim();
            if (message.LianyunID != null && Object.hasOwnProperty.call(message, "LianyunID"))
                writer.uint32(/* id 41, wireType 0 =*/328).int32(message.LianyunID);
            if (message.VersionList != null && message.VersionList.length)
                for (var i = 0; i < message.VersionList.length; ++i)
                    $root.hall.SkinVersionInfo.encode(message.VersionList[i], writer.uint32(/* id 42, wireType 2 =*/338).fork()).ldelim();
            if (message.VipLv != null && Object.hasOwnProperty.call(message, "VipLv"))
                writer.uint32(/* id 43, wireType 0 =*/344).int32(message.VipLv);
            if (message.HeadFrameID != null && Object.hasOwnProperty.call(message, "HeadFrameID"))
                writer.uint32(/* id 44, wireType 0 =*/352).int32(message.HeadFrameID);
            return writer;
        };

        /**
         * Encodes the specified UserHallLogonData message, length delimited. Does not implicitly {@link hall.UserHallLogonData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.UserHallLogonData
         * @static
         * @param {hall.IUserHallLogonData} message UserHallLogonData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserHallLogonData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserHallLogonData message from the specified reader or buffer.
         * @function decode
         * @memberof hall.UserHallLogonData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.UserHallLogonData} UserHallLogonData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserHallLogonData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.UserHallLogonData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.LoginName = reader.string();
                    break;
                case 2:
                    message.NickName = reader.string();
                    break;
                case 3:
                    message.UserType = reader.int32();
                    break;
                case 4:
                    message.Sex = reader.int32();
                    break;
                case 5:
                    message.HeadID = reader.int32();
                    break;
                case 6:
                    message.IsTopWindow = reader.bool();
                    break;
                case 7:
                    message.CashAmount = reader.int64();
                    break;
                case 8:
                    message.BankAmount = reader.int64();
                    break;
                case 9:
                    message.IsGaming = reader.bool();
                    break;
                case 10:
                    message.ServerAddr = reader.string();
                    break;
                case 11:
                    message.ServerName = reader.string();
                    break;
                case 12:
                    message.IsKick = reader.bool();
                    break;
                case 13:
                    message.IsBindGuest = reader.bool();
                    break;
                case 14:
                    message.UserLevel = reader.int32();
                    break;
                case 15:
                    message.LevelKey = reader.string();
                    break;
                case 16:
                    message.AnnMsg = reader.string();
                    break;
                case 17:
                    message.ConvertRateTipMsg = reader.string();
                    break;
                case 18:
                    message.BankPwdTipMsg = reader.string();
                    break;
                case 19:
                    message.UIFlag = reader.string();
                    break;
                case 20:
                    message.PaySort = reader.string();
                    break;
                case 21:
                    message.UpGradeMsg = reader.string();
                    break;
                case 22:
                    message.LockGameID = reader.int32();
                    break;
                case 23:
                    message.IsBindZhifubao = reader.bool();
                    break;
                case 24:
                    message.Zhifubao = reader.string();
                    break;
                case 25:
                    message.RealName = reader.string();
                    break;
                case 26:
                    if (!(message.GameList && message.GameList.length))
                        message.GameList = [];
                    message.GameList.push($root.hall.GameSortCateInfo.decode(reader, reader.uint32()));
                    break;
                case 27:
                    message.PayAmountConfig = reader.string();
                    break;
                case 28:
                    message.PayNotifyMsg = reader.string();
                    break;
                case 29:
                    message.NotifyFlag = reader.string();
                    break;
                case 30:
                    message.PayTips = reader.string();
                    break;
                case 31:
                    message.IsBindBankCard = reader.bool();
                    break;
                case 32:
                    message.BankCardNumber = reader.string();
                    break;
                case 33:
                    message.BankCardName = reader.string();
                    break;
                case 34:
                    message.BankName = reader.string();
                    break;
                case 35:
                    message.BankConvertRateTipMsg = reader.string();
                    break;
                case 36:
                    if (!(message.VGameIDS && message.VGameIDS.length))
                        message.VGameIDS = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.VGameIDS.push(reader.int32());
                    } else
                        message.VGameIDS.push(reader.int32());
                    break;
                case 37:
                    message.InVGameID = reader.int32();
                    break;
                case 38:
                    message.XiuXianAmount = reader.int64();
                    break;
                case 39:
                    message.XiuXianTotalCharge = reader.int64();
                    break;
                case 40:
                    if (!(message.GameCategoryList && message.GameCategoryList.length))
                        message.GameCategoryList = [];
                    message.GameCategoryList.push($root.hall.GameCategoryInfo.decode(reader, reader.uint32()));
                    break;
                case 41:
                    message.LianyunID = reader.int32();
                    break;
                case 42:
                    if (!(message.VersionList && message.VersionList.length))
                        message.VersionList = [];
                    message.VersionList.push($root.hall.SkinVersionInfo.decode(reader, reader.uint32()));
                    break;
                case 43:
                    message.VipLv = reader.int32();
                    break;
                case 44:
                    message.HeadFrameID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("LoginName"))
                throw $util.ProtocolError("missing required 'LoginName'", { instance: message });
            if (!message.hasOwnProperty("NickName"))
                throw $util.ProtocolError("missing required 'NickName'", { instance: message });
            if (!message.hasOwnProperty("UserType"))
                throw $util.ProtocolError("missing required 'UserType'", { instance: message });
            if (!message.hasOwnProperty("Sex"))
                throw $util.ProtocolError("missing required 'Sex'", { instance: message });
            if (!message.hasOwnProperty("HeadID"))
                throw $util.ProtocolError("missing required 'HeadID'", { instance: message });
            if (!message.hasOwnProperty("IsTopWindow"))
                throw $util.ProtocolError("missing required 'IsTopWindow'", { instance: message });
            if (!message.hasOwnProperty("CashAmount"))
                throw $util.ProtocolError("missing required 'CashAmount'", { instance: message });
            if (!message.hasOwnProperty("BankAmount"))
                throw $util.ProtocolError("missing required 'BankAmount'", { instance: message });
            if (!message.hasOwnProperty("IsGaming"))
                throw $util.ProtocolError("missing required 'IsGaming'", { instance: message });
            if (!message.hasOwnProperty("IsKick"))
                throw $util.ProtocolError("missing required 'IsKick'", { instance: message });
            if (!message.hasOwnProperty("IsBindGuest"))
                throw $util.ProtocolError("missing required 'IsBindGuest'", { instance: message });
            if (!message.hasOwnProperty("UserLevel"))
                throw $util.ProtocolError("missing required 'UserLevel'", { instance: message });
            if (!message.hasOwnProperty("LevelKey"))
                throw $util.ProtocolError("missing required 'LevelKey'", { instance: message });
            if (!message.hasOwnProperty("IsBindZhifubao"))
                throw $util.ProtocolError("missing required 'IsBindZhifubao'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserHallLogonData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.UserHallLogonData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.UserHallLogonData} UserHallLogonData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserHallLogonData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserHallLogonData message.
         * @function verify
         * @memberof hall.UserHallLogonData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserHallLogonData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.LoginName))
                return "LoginName: string expected";
            if (!$util.isString(message.NickName))
                return "NickName: string expected";
            if (!$util.isInteger(message.UserType))
                return "UserType: integer expected";
            if (!$util.isInteger(message.Sex))
                return "Sex: integer expected";
            if (!$util.isInteger(message.HeadID))
                return "HeadID: integer expected";
            if (typeof message.IsTopWindow !== "boolean")
                return "IsTopWindow: boolean expected";
            if (!$util.isInteger(message.CashAmount) && !(message.CashAmount && $util.isInteger(message.CashAmount.low) && $util.isInteger(message.CashAmount.high)))
                return "CashAmount: integer|Long expected";
            if (!$util.isInteger(message.BankAmount) && !(message.BankAmount && $util.isInteger(message.BankAmount.low) && $util.isInteger(message.BankAmount.high)))
                return "BankAmount: integer|Long expected";
            if (typeof message.IsGaming !== "boolean")
                return "IsGaming: boolean expected";
            if (message.ServerAddr != null && message.hasOwnProperty("ServerAddr"))
                if (!$util.isString(message.ServerAddr))
                    return "ServerAddr: string expected";
            if (message.ServerName != null && message.hasOwnProperty("ServerName"))
                if (!$util.isString(message.ServerName))
                    return "ServerName: string expected";
            if (typeof message.IsKick !== "boolean")
                return "IsKick: boolean expected";
            if (typeof message.IsBindGuest !== "boolean")
                return "IsBindGuest: boolean expected";
            if (!$util.isInteger(message.UserLevel))
                return "UserLevel: integer expected";
            if (!$util.isString(message.LevelKey))
                return "LevelKey: string expected";
            if (message.AnnMsg != null && message.hasOwnProperty("AnnMsg"))
                if (!$util.isString(message.AnnMsg))
                    return "AnnMsg: string expected";
            if (message.ConvertRateTipMsg != null && message.hasOwnProperty("ConvertRateTipMsg"))
                if (!$util.isString(message.ConvertRateTipMsg))
                    return "ConvertRateTipMsg: string expected";
            if (message.BankPwdTipMsg != null && message.hasOwnProperty("BankPwdTipMsg"))
                if (!$util.isString(message.BankPwdTipMsg))
                    return "BankPwdTipMsg: string expected";
            if (message.UIFlag != null && message.hasOwnProperty("UIFlag"))
                if (!$util.isString(message.UIFlag))
                    return "UIFlag: string expected";
            if (message.PaySort != null && message.hasOwnProperty("PaySort"))
                if (!$util.isString(message.PaySort))
                    return "PaySort: string expected";
            if (message.UpGradeMsg != null && message.hasOwnProperty("UpGradeMsg"))
                if (!$util.isString(message.UpGradeMsg))
                    return "UpGradeMsg: string expected";
            if (message.LockGameID != null && message.hasOwnProperty("LockGameID"))
                if (!$util.isInteger(message.LockGameID))
                    return "LockGameID: integer expected";
            if (typeof message.IsBindZhifubao !== "boolean")
                return "IsBindZhifubao: boolean expected";
            if (message.Zhifubao != null && message.hasOwnProperty("Zhifubao"))
                if (!$util.isString(message.Zhifubao))
                    return "Zhifubao: string expected";
            if (message.RealName != null && message.hasOwnProperty("RealName"))
                if (!$util.isString(message.RealName))
                    return "RealName: string expected";
            if (message.GameList != null && message.hasOwnProperty("GameList")) {
                if (!Array.isArray(message.GameList))
                    return "GameList: array expected";
                for (var i = 0; i < message.GameList.length; ++i) {
                    var error = $root.hall.GameSortCateInfo.verify(message.GameList[i]);
                    if (error)
                        return "GameList." + error;
                }
            }
            if (message.PayAmountConfig != null && message.hasOwnProperty("PayAmountConfig"))
                if (!$util.isString(message.PayAmountConfig))
                    return "PayAmountConfig: string expected";
            if (message.PayNotifyMsg != null && message.hasOwnProperty("PayNotifyMsg"))
                if (!$util.isString(message.PayNotifyMsg))
                    return "PayNotifyMsg: string expected";
            if (message.NotifyFlag != null && message.hasOwnProperty("NotifyFlag"))
                if (!$util.isString(message.NotifyFlag))
                    return "NotifyFlag: string expected";
            if (message.PayTips != null && message.hasOwnProperty("PayTips"))
                if (!$util.isString(message.PayTips))
                    return "PayTips: string expected";
            if (message.IsBindBankCard != null && message.hasOwnProperty("IsBindBankCard"))
                if (typeof message.IsBindBankCard !== "boolean")
                    return "IsBindBankCard: boolean expected";
            if (message.BankCardNumber != null && message.hasOwnProperty("BankCardNumber"))
                if (!$util.isString(message.BankCardNumber))
                    return "BankCardNumber: string expected";
            if (message.BankCardName != null && message.hasOwnProperty("BankCardName"))
                if (!$util.isString(message.BankCardName))
                    return "BankCardName: string expected";
            if (message.BankName != null && message.hasOwnProperty("BankName"))
                if (!$util.isString(message.BankName))
                    return "BankName: string expected";
            if (message.BankConvertRateTipMsg != null && message.hasOwnProperty("BankConvertRateTipMsg"))
                if (!$util.isString(message.BankConvertRateTipMsg))
                    return "BankConvertRateTipMsg: string expected";
            if (message.VGameIDS != null && message.hasOwnProperty("VGameIDS")) {
                if (!Array.isArray(message.VGameIDS))
                    return "VGameIDS: array expected";
                for (var i = 0; i < message.VGameIDS.length; ++i)
                    if (!$util.isInteger(message.VGameIDS[i]))
                        return "VGameIDS: integer[] expected";
            }
            if (message.InVGameID != null && message.hasOwnProperty("InVGameID"))
                if (!$util.isInteger(message.InVGameID))
                    return "InVGameID: integer expected";
            if (message.XiuXianAmount != null && message.hasOwnProperty("XiuXianAmount"))
                if (!$util.isInteger(message.XiuXianAmount) && !(message.XiuXianAmount && $util.isInteger(message.XiuXianAmount.low) && $util.isInteger(message.XiuXianAmount.high)))
                    return "XiuXianAmount: integer|Long expected";
            if (message.XiuXianTotalCharge != null && message.hasOwnProperty("XiuXianTotalCharge"))
                if (!$util.isInteger(message.XiuXianTotalCharge) && !(message.XiuXianTotalCharge && $util.isInteger(message.XiuXianTotalCharge.low) && $util.isInteger(message.XiuXianTotalCharge.high)))
                    return "XiuXianTotalCharge: integer|Long expected";
            if (message.GameCategoryList != null && message.hasOwnProperty("GameCategoryList")) {
                if (!Array.isArray(message.GameCategoryList))
                    return "GameCategoryList: array expected";
                for (var i = 0; i < message.GameCategoryList.length; ++i) {
                    var error = $root.hall.GameCategoryInfo.verify(message.GameCategoryList[i]);
                    if (error)
                        return "GameCategoryList." + error;
                }
            }
            if (message.LianyunID != null && message.hasOwnProperty("LianyunID"))
                if (!$util.isInteger(message.LianyunID))
                    return "LianyunID: integer expected";
            if (message.VersionList != null && message.hasOwnProperty("VersionList")) {
                if (!Array.isArray(message.VersionList))
                    return "VersionList: array expected";
                for (var i = 0; i < message.VersionList.length; ++i) {
                    var error = $root.hall.SkinVersionInfo.verify(message.VersionList[i]);
                    if (error)
                        return "VersionList." + error;
                }
            }
            if (message.VipLv != null && message.hasOwnProperty("VipLv"))
                if (!$util.isInteger(message.VipLv))
                    return "VipLv: integer expected";
            if (message.HeadFrameID != null && message.hasOwnProperty("HeadFrameID"))
                if (!$util.isInteger(message.HeadFrameID))
                    return "HeadFrameID: integer expected";
            return null;
        };

        /**
         * Creates a UserHallLogonData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.UserHallLogonData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.UserHallLogonData} UserHallLogonData
         */
        UserHallLogonData.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.UserHallLogonData)
                return object;
            var message = new $root.hall.UserHallLogonData();
            if (object.LoginName != null)
                message.LoginName = String(object.LoginName);
            if (object.NickName != null)
                message.NickName = String(object.NickName);
            if (object.UserType != null)
                message.UserType = object.UserType | 0;
            if (object.Sex != null)
                message.Sex = object.Sex | 0;
            if (object.HeadID != null)
                message.HeadID = object.HeadID | 0;
            if (object.IsTopWindow != null)
                message.IsTopWindow = Boolean(object.IsTopWindow);
            if (object.CashAmount != null)
                if ($util.Long)
                    (message.CashAmount = $util.Long.fromValue(object.CashAmount)).unsigned = false;
                else if (typeof object.CashAmount === "string")
                    message.CashAmount = parseInt(object.CashAmount, 10);
                else if (typeof object.CashAmount === "number")
                    message.CashAmount = object.CashAmount;
                else if (typeof object.CashAmount === "object")
                    message.CashAmount = new $util.LongBits(object.CashAmount.low >>> 0, object.CashAmount.high >>> 0).toNumber();
            if (object.BankAmount != null)
                if ($util.Long)
                    (message.BankAmount = $util.Long.fromValue(object.BankAmount)).unsigned = false;
                else if (typeof object.BankAmount === "string")
                    message.BankAmount = parseInt(object.BankAmount, 10);
                else if (typeof object.BankAmount === "number")
                    message.BankAmount = object.BankAmount;
                else if (typeof object.BankAmount === "object")
                    message.BankAmount = new $util.LongBits(object.BankAmount.low >>> 0, object.BankAmount.high >>> 0).toNumber();
            if (object.IsGaming != null)
                message.IsGaming = Boolean(object.IsGaming);
            if (object.ServerAddr != null)
                message.ServerAddr = String(object.ServerAddr);
            if (object.ServerName != null)
                message.ServerName = String(object.ServerName);
            if (object.IsKick != null)
                message.IsKick = Boolean(object.IsKick);
            if (object.IsBindGuest != null)
                message.IsBindGuest = Boolean(object.IsBindGuest);
            if (object.UserLevel != null)
                message.UserLevel = object.UserLevel | 0;
            if (object.LevelKey != null)
                message.LevelKey = String(object.LevelKey);
            if (object.AnnMsg != null)
                message.AnnMsg = String(object.AnnMsg);
            if (object.ConvertRateTipMsg != null)
                message.ConvertRateTipMsg = String(object.ConvertRateTipMsg);
            if (object.BankPwdTipMsg != null)
                message.BankPwdTipMsg = String(object.BankPwdTipMsg);
            if (object.UIFlag != null)
                message.UIFlag = String(object.UIFlag);
            if (object.PaySort != null)
                message.PaySort = String(object.PaySort);
            if (object.UpGradeMsg != null)
                message.UpGradeMsg = String(object.UpGradeMsg);
            if (object.LockGameID != null)
                message.LockGameID = object.LockGameID | 0;
            if (object.IsBindZhifubao != null)
                message.IsBindZhifubao = Boolean(object.IsBindZhifubao);
            if (object.Zhifubao != null)
                message.Zhifubao = String(object.Zhifubao);
            if (object.RealName != null)
                message.RealName = String(object.RealName);
            if (object.GameList) {
                if (!Array.isArray(object.GameList))
                    throw TypeError(".hall.UserHallLogonData.GameList: array expected");
                message.GameList = [];
                for (var i = 0; i < object.GameList.length; ++i) {
                    if (typeof object.GameList[i] !== "object")
                        throw TypeError(".hall.UserHallLogonData.GameList: object expected");
                    message.GameList[i] = $root.hall.GameSortCateInfo.fromObject(object.GameList[i]);
                }
            }
            if (object.PayAmountConfig != null)
                message.PayAmountConfig = String(object.PayAmountConfig);
            if (object.PayNotifyMsg != null)
                message.PayNotifyMsg = String(object.PayNotifyMsg);
            if (object.NotifyFlag != null)
                message.NotifyFlag = String(object.NotifyFlag);
            if (object.PayTips != null)
                message.PayTips = String(object.PayTips);
            if (object.IsBindBankCard != null)
                message.IsBindBankCard = Boolean(object.IsBindBankCard);
            if (object.BankCardNumber != null)
                message.BankCardNumber = String(object.BankCardNumber);
            if (object.BankCardName != null)
                message.BankCardName = String(object.BankCardName);
            if (object.BankName != null)
                message.BankName = String(object.BankName);
            if (object.BankConvertRateTipMsg != null)
                message.BankConvertRateTipMsg = String(object.BankConvertRateTipMsg);
            if (object.VGameIDS) {
                if (!Array.isArray(object.VGameIDS))
                    throw TypeError(".hall.UserHallLogonData.VGameIDS: array expected");
                message.VGameIDS = [];
                for (var i = 0; i < object.VGameIDS.length; ++i)
                    message.VGameIDS[i] = object.VGameIDS[i] | 0;
            }
            if (object.InVGameID != null)
                message.InVGameID = object.InVGameID | 0;
            if (object.XiuXianAmount != null)
                if ($util.Long)
                    (message.XiuXianAmount = $util.Long.fromValue(object.XiuXianAmount)).unsigned = false;
                else if (typeof object.XiuXianAmount === "string")
                    message.XiuXianAmount = parseInt(object.XiuXianAmount, 10);
                else if (typeof object.XiuXianAmount === "number")
                    message.XiuXianAmount = object.XiuXianAmount;
                else if (typeof object.XiuXianAmount === "object")
                    message.XiuXianAmount = new $util.LongBits(object.XiuXianAmount.low >>> 0, object.XiuXianAmount.high >>> 0).toNumber();
            if (object.XiuXianTotalCharge != null)
                if ($util.Long)
                    (message.XiuXianTotalCharge = $util.Long.fromValue(object.XiuXianTotalCharge)).unsigned = false;
                else if (typeof object.XiuXianTotalCharge === "string")
                    message.XiuXianTotalCharge = parseInt(object.XiuXianTotalCharge, 10);
                else if (typeof object.XiuXianTotalCharge === "number")
                    message.XiuXianTotalCharge = object.XiuXianTotalCharge;
                else if (typeof object.XiuXianTotalCharge === "object")
                    message.XiuXianTotalCharge = new $util.LongBits(object.XiuXianTotalCharge.low >>> 0, object.XiuXianTotalCharge.high >>> 0).toNumber();
            if (object.GameCategoryList) {
                if (!Array.isArray(object.GameCategoryList))
                    throw TypeError(".hall.UserHallLogonData.GameCategoryList: array expected");
                message.GameCategoryList = [];
                for (var i = 0; i < object.GameCategoryList.length; ++i) {
                    if (typeof object.GameCategoryList[i] !== "object")
                        throw TypeError(".hall.UserHallLogonData.GameCategoryList: object expected");
                    message.GameCategoryList[i] = $root.hall.GameCategoryInfo.fromObject(object.GameCategoryList[i]);
                }
            }
            if (object.LianyunID != null)
                message.LianyunID = object.LianyunID | 0;
            if (object.VersionList) {
                if (!Array.isArray(object.VersionList))
                    throw TypeError(".hall.UserHallLogonData.VersionList: array expected");
                message.VersionList = [];
                for (var i = 0; i < object.VersionList.length; ++i) {
                    if (typeof object.VersionList[i] !== "object")
                        throw TypeError(".hall.UserHallLogonData.VersionList: object expected");
                    message.VersionList[i] = $root.hall.SkinVersionInfo.fromObject(object.VersionList[i]);
                }
            }
            if (object.VipLv != null)
                message.VipLv = object.VipLv | 0;
            if (object.HeadFrameID != null)
                message.HeadFrameID = object.HeadFrameID | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserHallLogonData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.UserHallLogonData
         * @static
         * @param {hall.UserHallLogonData} message UserHallLogonData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserHallLogonData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.GameList = [];
                object.VGameIDS = [];
                object.GameCategoryList = [];
                object.VersionList = [];
            }
            if (options.defaults) {
                object.LoginName = "";
                object.NickName = "";
                object.UserType = 0;
                object.Sex = 0;
                object.HeadID = 0;
                object.IsTopWindow = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CashAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CashAmount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BankAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BankAmount = options.longs === String ? "0" : 0;
                object.IsGaming = false;
                object.ServerAddr = "";
                object.ServerName = "";
                object.IsKick = false;
                object.IsBindGuest = false;
                object.UserLevel = 0;
                object.LevelKey = "";
                object.AnnMsg = "";
                object.ConvertRateTipMsg = "";
                object.BankPwdTipMsg = "";
                object.UIFlag = "";
                object.PaySort = "";
                object.UpGradeMsg = "";
                object.LockGameID = 0;
                object.IsBindZhifubao = false;
                object.Zhifubao = "";
                object.RealName = "";
                object.PayAmountConfig = "";
                object.PayNotifyMsg = "";
                object.NotifyFlag = "";
                object.PayTips = "";
                object.IsBindBankCard = false;
                object.BankCardNumber = "";
                object.BankCardName = "";
                object.BankName = "";
                object.BankConvertRateTipMsg = "";
                object.InVGameID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.XiuXianAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.XiuXianAmount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.XiuXianTotalCharge = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.XiuXianTotalCharge = options.longs === String ? "0" : 0;
                object.LianyunID = 0;
                object.VipLv = 0;
                object.HeadFrameID = 0;
            }
            if (message.LoginName != null && message.hasOwnProperty("LoginName"))
                object.LoginName = message.LoginName;
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                object.NickName = message.NickName;
            if (message.UserType != null && message.hasOwnProperty("UserType"))
                object.UserType = message.UserType;
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                object.Sex = message.Sex;
            if (message.HeadID != null && message.hasOwnProperty("HeadID"))
                object.HeadID = message.HeadID;
            if (message.IsTopWindow != null && message.hasOwnProperty("IsTopWindow"))
                object.IsTopWindow = message.IsTopWindow;
            if (message.CashAmount != null && message.hasOwnProperty("CashAmount"))
                if (typeof message.CashAmount === "number")
                    object.CashAmount = options.longs === String ? String(message.CashAmount) : message.CashAmount;
                else
                    object.CashAmount = options.longs === String ? $util.Long.prototype.toString.call(message.CashAmount) : options.longs === Number ? new $util.LongBits(message.CashAmount.low >>> 0, message.CashAmount.high >>> 0).toNumber() : message.CashAmount;
            if (message.BankAmount != null && message.hasOwnProperty("BankAmount"))
                if (typeof message.BankAmount === "number")
                    object.BankAmount = options.longs === String ? String(message.BankAmount) : message.BankAmount;
                else
                    object.BankAmount = options.longs === String ? $util.Long.prototype.toString.call(message.BankAmount) : options.longs === Number ? new $util.LongBits(message.BankAmount.low >>> 0, message.BankAmount.high >>> 0).toNumber() : message.BankAmount;
            if (message.IsGaming != null && message.hasOwnProperty("IsGaming"))
                object.IsGaming = message.IsGaming;
            if (message.ServerAddr != null && message.hasOwnProperty("ServerAddr"))
                object.ServerAddr = message.ServerAddr;
            if (message.ServerName != null && message.hasOwnProperty("ServerName"))
                object.ServerName = message.ServerName;
            if (message.IsKick != null && message.hasOwnProperty("IsKick"))
                object.IsKick = message.IsKick;
            if (message.IsBindGuest != null && message.hasOwnProperty("IsBindGuest"))
                object.IsBindGuest = message.IsBindGuest;
            if (message.UserLevel != null && message.hasOwnProperty("UserLevel"))
                object.UserLevel = message.UserLevel;
            if (message.LevelKey != null && message.hasOwnProperty("LevelKey"))
                object.LevelKey = message.LevelKey;
            if (message.AnnMsg != null && message.hasOwnProperty("AnnMsg"))
                object.AnnMsg = message.AnnMsg;
            if (message.ConvertRateTipMsg != null && message.hasOwnProperty("ConvertRateTipMsg"))
                object.ConvertRateTipMsg = message.ConvertRateTipMsg;
            if (message.BankPwdTipMsg != null && message.hasOwnProperty("BankPwdTipMsg"))
                object.BankPwdTipMsg = message.BankPwdTipMsg;
            if (message.UIFlag != null && message.hasOwnProperty("UIFlag"))
                object.UIFlag = message.UIFlag;
            if (message.PaySort != null && message.hasOwnProperty("PaySort"))
                object.PaySort = message.PaySort;
            if (message.UpGradeMsg != null && message.hasOwnProperty("UpGradeMsg"))
                object.UpGradeMsg = message.UpGradeMsg;
            if (message.LockGameID != null && message.hasOwnProperty("LockGameID"))
                object.LockGameID = message.LockGameID;
            if (message.IsBindZhifubao != null && message.hasOwnProperty("IsBindZhifubao"))
                object.IsBindZhifubao = message.IsBindZhifubao;
            if (message.Zhifubao != null && message.hasOwnProperty("Zhifubao"))
                object.Zhifubao = message.Zhifubao;
            if (message.RealName != null && message.hasOwnProperty("RealName"))
                object.RealName = message.RealName;
            if (message.GameList && message.GameList.length) {
                object.GameList = [];
                for (var j = 0; j < message.GameList.length; ++j)
                    object.GameList[j] = $root.hall.GameSortCateInfo.toObject(message.GameList[j], options);
            }
            if (message.PayAmountConfig != null && message.hasOwnProperty("PayAmountConfig"))
                object.PayAmountConfig = message.PayAmountConfig;
            if (message.PayNotifyMsg != null && message.hasOwnProperty("PayNotifyMsg"))
                object.PayNotifyMsg = message.PayNotifyMsg;
            if (message.NotifyFlag != null && message.hasOwnProperty("NotifyFlag"))
                object.NotifyFlag = message.NotifyFlag;
            if (message.PayTips != null && message.hasOwnProperty("PayTips"))
                object.PayTips = message.PayTips;
            if (message.IsBindBankCard != null && message.hasOwnProperty("IsBindBankCard"))
                object.IsBindBankCard = message.IsBindBankCard;
            if (message.BankCardNumber != null && message.hasOwnProperty("BankCardNumber"))
                object.BankCardNumber = message.BankCardNumber;
            if (message.BankCardName != null && message.hasOwnProperty("BankCardName"))
                object.BankCardName = message.BankCardName;
            if (message.BankName != null && message.hasOwnProperty("BankName"))
                object.BankName = message.BankName;
            if (message.BankConvertRateTipMsg != null && message.hasOwnProperty("BankConvertRateTipMsg"))
                object.BankConvertRateTipMsg = message.BankConvertRateTipMsg;
            if (message.VGameIDS && message.VGameIDS.length) {
                object.VGameIDS = [];
                for (var j = 0; j < message.VGameIDS.length; ++j)
                    object.VGameIDS[j] = message.VGameIDS[j];
            }
            if (message.InVGameID != null && message.hasOwnProperty("InVGameID"))
                object.InVGameID = message.InVGameID;
            if (message.XiuXianAmount != null && message.hasOwnProperty("XiuXianAmount"))
                if (typeof message.XiuXianAmount === "number")
                    object.XiuXianAmount = options.longs === String ? String(message.XiuXianAmount) : message.XiuXianAmount;
                else
                    object.XiuXianAmount = options.longs === String ? $util.Long.prototype.toString.call(message.XiuXianAmount) : options.longs === Number ? new $util.LongBits(message.XiuXianAmount.low >>> 0, message.XiuXianAmount.high >>> 0).toNumber() : message.XiuXianAmount;
            if (message.XiuXianTotalCharge != null && message.hasOwnProperty("XiuXianTotalCharge"))
                if (typeof message.XiuXianTotalCharge === "number")
                    object.XiuXianTotalCharge = options.longs === String ? String(message.XiuXianTotalCharge) : message.XiuXianTotalCharge;
                else
                    object.XiuXianTotalCharge = options.longs === String ? $util.Long.prototype.toString.call(message.XiuXianTotalCharge) : options.longs === Number ? new $util.LongBits(message.XiuXianTotalCharge.low >>> 0, message.XiuXianTotalCharge.high >>> 0).toNumber() : message.XiuXianTotalCharge;
            if (message.GameCategoryList && message.GameCategoryList.length) {
                object.GameCategoryList = [];
                for (var j = 0; j < message.GameCategoryList.length; ++j)
                    object.GameCategoryList[j] = $root.hall.GameCategoryInfo.toObject(message.GameCategoryList[j], options);
            }
            if (message.LianyunID != null && message.hasOwnProperty("LianyunID"))
                object.LianyunID = message.LianyunID;
            if (message.VersionList && message.VersionList.length) {
                object.VersionList = [];
                for (var j = 0; j < message.VersionList.length; ++j)
                    object.VersionList[j] = $root.hall.SkinVersionInfo.toObject(message.VersionList[j], options);
            }
            if (message.VipLv != null && message.hasOwnProperty("VipLv"))
                object.VipLv = message.VipLv;
            if (message.HeadFrameID != null && message.hasOwnProperty("HeadFrameID"))
                object.HeadFrameID = message.HeadFrameID;
            return object;
        };

        /**
         * Converts this UserHallLogonData to JSON.
         * @function toJSON
         * @memberof hall.UserHallLogonData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserHallLogonData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserHallLogonData;
    })();

    hall.GameSortCateInfo = (function() {

        /**
         * Properties of a GameSortCateInfo.
         * @memberof hall
         * @interface IGameSortCateInfo
         * @property {number} GameID GameSortCateInfo GameID
         * @property {string|null} [CategoryID] GameSortCateInfo CategoryID
         */

        /**
         * Constructs a new GameSortCateInfo.
         * @memberof hall
         * @classdesc Represents a GameSortCateInfo.
         * @implements IGameSortCateInfo
         * @constructor
         * @param {hall.IGameSortCateInfo=} [properties] Properties to set
         */
        function GameSortCateInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameSortCateInfo GameID.
         * @member {number} GameID
         * @memberof hall.GameSortCateInfo
         * @instance
         */
        GameSortCateInfo.prototype.GameID = 0;

        /**
         * GameSortCateInfo CategoryID.
         * @member {string} CategoryID
         * @memberof hall.GameSortCateInfo
         * @instance
         */
        GameSortCateInfo.prototype.CategoryID = "";

        /**
         * Creates a new GameSortCateInfo instance using the specified properties.
         * @function create
         * @memberof hall.GameSortCateInfo
         * @static
         * @param {hall.IGameSortCateInfo=} [properties] Properties to set
         * @returns {hall.GameSortCateInfo} GameSortCateInfo instance
         */
        GameSortCateInfo.create = function create(properties) {
            return new GameSortCateInfo(properties);
        };

        /**
         * Encodes the specified GameSortCateInfo message. Does not implicitly {@link hall.GameSortCateInfo.verify|verify} messages.
         * @function encode
         * @memberof hall.GameSortCateInfo
         * @static
         * @param {hall.IGameSortCateInfo} message GameSortCateInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameSortCateInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            if (message.CategoryID != null && Object.hasOwnProperty.call(message, "CategoryID"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.CategoryID);
            return writer;
        };

        /**
         * Encodes the specified GameSortCateInfo message, length delimited. Does not implicitly {@link hall.GameSortCateInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.GameSortCateInfo
         * @static
         * @param {hall.IGameSortCateInfo} message GameSortCateInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameSortCateInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameSortCateInfo message from the specified reader or buffer.
         * @function decode
         * @memberof hall.GameSortCateInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.GameSortCateInfo} GameSortCateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameSortCateInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.GameSortCateInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    message.CategoryID = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance: message });
            return message;
        };

        /**
         * Decodes a GameSortCateInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.GameSortCateInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.GameSortCateInfo} GameSortCateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameSortCateInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameSortCateInfo message.
         * @function verify
         * @memberof hall.GameSortCateInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameSortCateInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (message.CategoryID != null && message.hasOwnProperty("CategoryID"))
                if (!$util.isString(message.CategoryID))
                    return "CategoryID: string expected";
            return null;
        };

        /**
         * Creates a GameSortCateInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.GameSortCateInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.GameSortCateInfo} GameSortCateInfo
         */
        GameSortCateInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.GameSortCateInfo)
                return object;
            var message = new $root.hall.GameSortCateInfo();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.CategoryID != null)
                message.CategoryID = String(object.CategoryID);
            return message;
        };

        /**
         * Creates a plain object from a GameSortCateInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.GameSortCateInfo
         * @static
         * @param {hall.GameSortCateInfo} message GameSortCateInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameSortCateInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameID = 0;
                object.CategoryID = "";
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.CategoryID != null && message.hasOwnProperty("CategoryID"))
                object.CategoryID = message.CategoryID;
            return object;
        };

        /**
         * Converts this GameSortCateInfo to JSON.
         * @function toJSON
         * @memberof hall.GameSortCateInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameSortCateInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameSortCateInfo;
    })();

    hall.GameCategoryInfo = (function() {

        /**
         * Properties of a GameCategoryInfo.
         * @memberof hall
         * @interface IGameCategoryInfo
         * @property {number} CategoryID GameCategoryInfo CategoryID
         * @property {string} Name GameCategoryInfo Name
         */

        /**
         * Constructs a new GameCategoryInfo.
         * @memberof hall
         * @classdesc Represents a GameCategoryInfo.
         * @implements IGameCategoryInfo
         * @constructor
         * @param {hall.IGameCategoryInfo=} [properties] Properties to set
         */
        function GameCategoryInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameCategoryInfo CategoryID.
         * @member {number} CategoryID
         * @memberof hall.GameCategoryInfo
         * @instance
         */
        GameCategoryInfo.prototype.CategoryID = 0;

        /**
         * GameCategoryInfo Name.
         * @member {string} Name
         * @memberof hall.GameCategoryInfo
         * @instance
         */
        GameCategoryInfo.prototype.Name = "";

        /**
         * Creates a new GameCategoryInfo instance using the specified properties.
         * @function create
         * @memberof hall.GameCategoryInfo
         * @static
         * @param {hall.IGameCategoryInfo=} [properties] Properties to set
         * @returns {hall.GameCategoryInfo} GameCategoryInfo instance
         */
        GameCategoryInfo.create = function create(properties) {
            return new GameCategoryInfo(properties);
        };

        /**
         * Encodes the specified GameCategoryInfo message. Does not implicitly {@link hall.GameCategoryInfo.verify|verify} messages.
         * @function encode
         * @memberof hall.GameCategoryInfo
         * @static
         * @param {hall.IGameCategoryInfo} message GameCategoryInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameCategoryInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.CategoryID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            return writer;
        };

        /**
         * Encodes the specified GameCategoryInfo message, length delimited. Does not implicitly {@link hall.GameCategoryInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.GameCategoryInfo
         * @static
         * @param {hall.IGameCategoryInfo} message GameCategoryInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameCategoryInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameCategoryInfo message from the specified reader or buffer.
         * @function decode
         * @memberof hall.GameCategoryInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.GameCategoryInfo} GameCategoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameCategoryInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.GameCategoryInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CategoryID = reader.int32();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("CategoryID"))
                throw $util.ProtocolError("missing required 'CategoryID'", { instance: message });
            if (!message.hasOwnProperty("Name"))
                throw $util.ProtocolError("missing required 'Name'", { instance: message });
            return message;
        };

        /**
         * Decodes a GameCategoryInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.GameCategoryInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.GameCategoryInfo} GameCategoryInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameCategoryInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameCategoryInfo message.
         * @function verify
         * @memberof hall.GameCategoryInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameCategoryInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.CategoryID))
                return "CategoryID: integer expected";
            if (!$util.isString(message.Name))
                return "Name: string expected";
            return null;
        };

        /**
         * Creates a GameCategoryInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.GameCategoryInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.GameCategoryInfo} GameCategoryInfo
         */
        GameCategoryInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.GameCategoryInfo)
                return object;
            var message = new $root.hall.GameCategoryInfo();
            if (object.CategoryID != null)
                message.CategoryID = object.CategoryID | 0;
            if (object.Name != null)
                message.Name = String(object.Name);
            return message;
        };

        /**
         * Creates a plain object from a GameCategoryInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.GameCategoryInfo
         * @static
         * @param {hall.GameCategoryInfo} message GameCategoryInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameCategoryInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.CategoryID = 0;
                object.Name = "";
            }
            if (message.CategoryID != null && message.hasOwnProperty("CategoryID"))
                object.CategoryID = message.CategoryID;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            return object;
        };

        /**
         * Converts this GameCategoryInfo to JSON.
         * @function toJSON
         * @memberof hall.GameCategoryInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameCategoryInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameCategoryInfo;
    })();

    hall.SkinVersionInfo = (function() {

        /**
         * Properties of a SkinVersionInfo.
         * @memberof hall
         * @interface ISkinVersionInfo
         * @property {number} ID SkinVersionInfo ID
         * @property {string} BunldID SkinVersionInfo BunldID
         * @property {string} Ver SkinVersionInfo Ver
         * @property {string} Path SkinVersionInfo Path
         * @property {string} Ver1 SkinVersionInfo Ver1
         * @property {string|null} [Platform] SkinVersionInfo Platform
         * @property {string|null} [Channel] SkinVersionInfo Channel
         * @property {string} SkinVer SkinVersionInfo SkinVer
         * @property {string|null} [LimitIP] SkinVersionInfo LimitIP
         */

        /**
         * Constructs a new SkinVersionInfo.
         * @memberof hall
         * @classdesc Represents a SkinVersionInfo.
         * @implements ISkinVersionInfo
         * @constructor
         * @param {hall.ISkinVersionInfo=} [properties] Properties to set
         */
        function SkinVersionInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SkinVersionInfo ID.
         * @member {number} ID
         * @memberof hall.SkinVersionInfo
         * @instance
         */
        SkinVersionInfo.prototype.ID = 0;

        /**
         * SkinVersionInfo BunldID.
         * @member {string} BunldID
         * @memberof hall.SkinVersionInfo
         * @instance
         */
        SkinVersionInfo.prototype.BunldID = "";

        /**
         * SkinVersionInfo Ver.
         * @member {string} Ver
         * @memberof hall.SkinVersionInfo
         * @instance
         */
        SkinVersionInfo.prototype.Ver = "";

        /**
         * SkinVersionInfo Path.
         * @member {string} Path
         * @memberof hall.SkinVersionInfo
         * @instance
         */
        SkinVersionInfo.prototype.Path = "";

        /**
         * SkinVersionInfo Ver1.
         * @member {string} Ver1
         * @memberof hall.SkinVersionInfo
         * @instance
         */
        SkinVersionInfo.prototype.Ver1 = "";

        /**
         * SkinVersionInfo Platform.
         * @member {string} Platform
         * @memberof hall.SkinVersionInfo
         * @instance
         */
        SkinVersionInfo.prototype.Platform = "";

        /**
         * SkinVersionInfo Channel.
         * @member {string} Channel
         * @memberof hall.SkinVersionInfo
         * @instance
         */
        SkinVersionInfo.prototype.Channel = "";

        /**
         * SkinVersionInfo SkinVer.
         * @member {string} SkinVer
         * @memberof hall.SkinVersionInfo
         * @instance
         */
        SkinVersionInfo.prototype.SkinVer = "";

        /**
         * SkinVersionInfo LimitIP.
         * @member {string} LimitIP
         * @memberof hall.SkinVersionInfo
         * @instance
         */
        SkinVersionInfo.prototype.LimitIP = "";

        /**
         * Creates a new SkinVersionInfo instance using the specified properties.
         * @function create
         * @memberof hall.SkinVersionInfo
         * @static
         * @param {hall.ISkinVersionInfo=} [properties] Properties to set
         * @returns {hall.SkinVersionInfo} SkinVersionInfo instance
         */
        SkinVersionInfo.create = function create(properties) {
            return new SkinVersionInfo(properties);
        };

        /**
         * Encodes the specified SkinVersionInfo message. Does not implicitly {@link hall.SkinVersionInfo.verify|verify} messages.
         * @function encode
         * @memberof hall.SkinVersionInfo
         * @static
         * @param {hall.ISkinVersionInfo} message SkinVersionInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SkinVersionInfo.encode = function encode(message, writer) {
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
         * Encodes the specified SkinVersionInfo message, length delimited. Does not implicitly {@link hall.SkinVersionInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.SkinVersionInfo
         * @static
         * @param {hall.ISkinVersionInfo} message SkinVersionInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SkinVersionInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SkinVersionInfo message from the specified reader or buffer.
         * @function decode
         * @memberof hall.SkinVersionInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.SkinVersionInfo} SkinVersionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SkinVersionInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.SkinVersionInfo();
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
         * Decodes a SkinVersionInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.SkinVersionInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.SkinVersionInfo} SkinVersionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SkinVersionInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SkinVersionInfo message.
         * @function verify
         * @memberof hall.SkinVersionInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SkinVersionInfo.verify = function verify(message) {
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
         * Creates a SkinVersionInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.SkinVersionInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.SkinVersionInfo} SkinVersionInfo
         */
        SkinVersionInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.SkinVersionInfo)
                return object;
            var message = new $root.hall.SkinVersionInfo();
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
         * Creates a plain object from a SkinVersionInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.SkinVersionInfo
         * @static
         * @param {hall.SkinVersionInfo} message SkinVersionInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SkinVersionInfo.toObject = function toObject(message, options) {
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
         * Converts this SkinVersionInfo to JSON.
         * @function toJSON
         * @memberof hall.SkinVersionInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SkinVersionInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SkinVersionInfo;
    })();

    hall.UserLogout = (function() {

        /**
         * Properties of a UserLogout.
         * @memberof hall
         * @interface IUserLogout
         * @property {number} UserID UserLogout UserID
         * @property {string} Cer UserLogout Cer
         */

        /**
         * Constructs a new UserLogout.
         * @memberof hall
         * @classdesc Represents a UserLogout.
         * @implements IUserLogout
         * @constructor
         * @param {hall.IUserLogout=} [properties] Properties to set
         */
        function UserLogout(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserLogout UserID.
         * @member {number} UserID
         * @memberof hall.UserLogout
         * @instance
         */
        UserLogout.prototype.UserID = 0;

        /**
         * UserLogout Cer.
         * @member {string} Cer
         * @memberof hall.UserLogout
         * @instance
         */
        UserLogout.prototype.Cer = "";

        /**
         * Creates a new UserLogout instance using the specified properties.
         * @function create
         * @memberof hall.UserLogout
         * @static
         * @param {hall.IUserLogout=} [properties] Properties to set
         * @returns {hall.UserLogout} UserLogout instance
         */
        UserLogout.create = function create(properties) {
            return new UserLogout(properties);
        };

        /**
         * Encodes the specified UserLogout message. Does not implicitly {@link hall.UserLogout.verify|verify} messages.
         * @function encode
         * @memberof hall.UserLogout
         * @static
         * @param {hall.IUserLogout} message UserLogout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLogout.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Cer);
            return writer;
        };

        /**
         * Encodes the specified UserLogout message, length delimited. Does not implicitly {@link hall.UserLogout.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.UserLogout
         * @static
         * @param {hall.IUserLogout} message UserLogout message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserLogout.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserLogout message from the specified reader or buffer.
         * @function decode
         * @memberof hall.UserLogout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.UserLogout} UserLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLogout.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.UserLogout();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.Cer = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("Cer"))
                throw $util.ProtocolError("missing required 'Cer'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserLogout message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.UserLogout
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.UserLogout} UserLogout
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserLogout.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserLogout message.
         * @function verify
         * @memberof hall.UserLogout
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserLogout.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isString(message.Cer))
                return "Cer: string expected";
            return null;
        };

        /**
         * Creates a UserLogout message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.UserLogout
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.UserLogout} UserLogout
         */
        UserLogout.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.UserLogout)
                return object;
            var message = new $root.hall.UserLogout();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Cer != null)
                message.Cer = String(object.Cer);
            return message;
        };

        /**
         * Creates a plain object from a UserLogout message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.UserLogout
         * @static
         * @param {hall.UserLogout} message UserLogout
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserLogout.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.Cer = "";
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Cer != null && message.hasOwnProperty("Cer"))
                object.Cer = message.Cer;
            return object;
        };

        /**
         * Converts this UserLogout to JSON.
         * @function toJSON
         * @memberof hall.UserLogout
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserLogout.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserLogout;
    })();

    hall.HallVerInfo = (function() {

        /**
         * Properties of a HallVerInfo.
         * @memberof hall
         * @interface IHallVerInfo
         * @property {string} AndroidVersion HallVerInfo AndroidVersion
         * @property {string} IOSVersion HallVerInfo IOSVersion
         */

        /**
         * Constructs a new HallVerInfo.
         * @memberof hall
         * @classdesc Represents a HallVerInfo.
         * @implements IHallVerInfo
         * @constructor
         * @param {hall.IHallVerInfo=} [properties] Properties to set
         */
        function HallVerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HallVerInfo AndroidVersion.
         * @member {string} AndroidVersion
         * @memberof hall.HallVerInfo
         * @instance
         */
        HallVerInfo.prototype.AndroidVersion = "";

        /**
         * HallVerInfo IOSVersion.
         * @member {string} IOSVersion
         * @memberof hall.HallVerInfo
         * @instance
         */
        HallVerInfo.prototype.IOSVersion = "";

        /**
         * Creates a new HallVerInfo instance using the specified properties.
         * @function create
         * @memberof hall.HallVerInfo
         * @static
         * @param {hall.IHallVerInfo=} [properties] Properties to set
         * @returns {hall.HallVerInfo} HallVerInfo instance
         */
        HallVerInfo.create = function create(properties) {
            return new HallVerInfo(properties);
        };

        /**
         * Encodes the specified HallVerInfo message. Does not implicitly {@link hall.HallVerInfo.verify|verify} messages.
         * @function encode
         * @memberof hall.HallVerInfo
         * @static
         * @param {hall.IHallVerInfo} message HallVerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HallVerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.AndroidVersion);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.IOSVersion);
            return writer;
        };

        /**
         * Encodes the specified HallVerInfo message, length delimited. Does not implicitly {@link hall.HallVerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.HallVerInfo
         * @static
         * @param {hall.IHallVerInfo} message HallVerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HallVerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HallVerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof hall.HallVerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.HallVerInfo} HallVerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HallVerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.HallVerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AndroidVersion = reader.string();
                    break;
                case 2:
                    message.IOSVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("AndroidVersion"))
                throw $util.ProtocolError("missing required 'AndroidVersion'", { instance: message });
            if (!message.hasOwnProperty("IOSVersion"))
                throw $util.ProtocolError("missing required 'IOSVersion'", { instance: message });
            return message;
        };

        /**
         * Decodes a HallVerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.HallVerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.HallVerInfo} HallVerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HallVerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HallVerInfo message.
         * @function verify
         * @memberof hall.HallVerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HallVerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.AndroidVersion))
                return "AndroidVersion: string expected";
            if (!$util.isString(message.IOSVersion))
                return "IOSVersion: string expected";
            return null;
        };

        /**
         * Creates a HallVerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.HallVerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.HallVerInfo} HallVerInfo
         */
        HallVerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.HallVerInfo)
                return object;
            var message = new $root.hall.HallVerInfo();
            if (object.AndroidVersion != null)
                message.AndroidVersion = String(object.AndroidVersion);
            if (object.IOSVersion != null)
                message.IOSVersion = String(object.IOSVersion);
            return message;
        };

        /**
         * Creates a plain object from a HallVerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.HallVerInfo
         * @static
         * @param {hall.HallVerInfo} message HallVerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HallVerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.AndroidVersion = "";
                object.IOSVersion = "";
            }
            if (message.AndroidVersion != null && message.hasOwnProperty("AndroidVersion"))
                object.AndroidVersion = message.AndroidVersion;
            if (message.IOSVersion != null && message.hasOwnProperty("IOSVersion"))
                object.IOSVersion = message.IOSVersion;
            return object;
        };

        /**
         * Converts this HallVerInfo to JSON.
         * @function toJSON
         * @memberof hall.HallVerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HallVerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return HallVerInfo;
    })();

    hall.AllGameServerInfo = (function() {

        /**
         * Properties of an AllGameServerInfo.
         * @memberof hall
         * @interface IAllGameServerInfo
         * @property {Array.<hall.IGameServerInfo>|null} [ServerList] AllGameServerInfo ServerList
         */

        /**
         * Constructs a new AllGameServerInfo.
         * @memberof hall
         * @classdesc Represents an AllGameServerInfo.
         * @implements IAllGameServerInfo
         * @constructor
         * @param {hall.IAllGameServerInfo=} [properties] Properties to set
         */
        function AllGameServerInfo(properties) {
            this.ServerList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AllGameServerInfo ServerList.
         * @member {Array.<hall.IGameServerInfo>} ServerList
         * @memberof hall.AllGameServerInfo
         * @instance
         */
        AllGameServerInfo.prototype.ServerList = $util.emptyArray;

        /**
         * Creates a new AllGameServerInfo instance using the specified properties.
         * @function create
         * @memberof hall.AllGameServerInfo
         * @static
         * @param {hall.IAllGameServerInfo=} [properties] Properties to set
         * @returns {hall.AllGameServerInfo} AllGameServerInfo instance
         */
        AllGameServerInfo.create = function create(properties) {
            return new AllGameServerInfo(properties);
        };

        /**
         * Encodes the specified AllGameServerInfo message. Does not implicitly {@link hall.AllGameServerInfo.verify|verify} messages.
         * @function encode
         * @memberof hall.AllGameServerInfo
         * @static
         * @param {hall.IAllGameServerInfo} message AllGameServerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllGameServerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ServerList != null && message.ServerList.length)
                for (var i = 0; i < message.ServerList.length; ++i)
                    $root.hall.GameServerInfo.encode(message.ServerList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AllGameServerInfo message, length delimited. Does not implicitly {@link hall.AllGameServerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.AllGameServerInfo
         * @static
         * @param {hall.IAllGameServerInfo} message AllGameServerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AllGameServerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AllGameServerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof hall.AllGameServerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.AllGameServerInfo} AllGameServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllGameServerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.AllGameServerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.ServerList && message.ServerList.length))
                        message.ServerList = [];
                    message.ServerList.push($root.hall.GameServerInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AllGameServerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.AllGameServerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.AllGameServerInfo} AllGameServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AllGameServerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AllGameServerInfo message.
         * @function verify
         * @memberof hall.AllGameServerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AllGameServerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ServerList != null && message.hasOwnProperty("ServerList")) {
                if (!Array.isArray(message.ServerList))
                    return "ServerList: array expected";
                for (var i = 0; i < message.ServerList.length; ++i) {
                    var error = $root.hall.GameServerInfo.verify(message.ServerList[i]);
                    if (error)
                        return "ServerList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AllGameServerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.AllGameServerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.AllGameServerInfo} AllGameServerInfo
         */
        AllGameServerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.AllGameServerInfo)
                return object;
            var message = new $root.hall.AllGameServerInfo();
            if (object.ServerList) {
                if (!Array.isArray(object.ServerList))
                    throw TypeError(".hall.AllGameServerInfo.ServerList: array expected");
                message.ServerList = [];
                for (var i = 0; i < object.ServerList.length; ++i) {
                    if (typeof object.ServerList[i] !== "object")
                        throw TypeError(".hall.AllGameServerInfo.ServerList: object expected");
                    message.ServerList[i] = $root.hall.GameServerInfo.fromObject(object.ServerList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AllGameServerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.AllGameServerInfo
         * @static
         * @param {hall.AllGameServerInfo} message AllGameServerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AllGameServerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ServerList = [];
            if (message.ServerList && message.ServerList.length) {
                object.ServerList = [];
                for (var j = 0; j < message.ServerList.length; ++j)
                    object.ServerList[j] = $root.hall.GameServerInfo.toObject(message.ServerList[j], options);
            }
            return object;
        };

        /**
         * Converts this AllGameServerInfo to JSON.
         * @function toJSON
         * @memberof hall.AllGameServerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AllGameServerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AllGameServerInfo;
    })();

    hall.GameServerInfo = (function() {

        /**
         * Properties of a GameServerInfo.
         * @memberof hall
         * @interface IGameServerInfo
         * @property {number} GameID GameServerInfo GameID
         * @property {string} GameName GameServerInfo GameName
         * @property {number} LoginMoney GameServerInfo LoginMoney
         * @property {string} Flag GameServerInfo Flag
         * @property {string} Status GameServerInfo Status
         * @property {number} BaseScore GameServerInfo BaseScore
         * @property {string|null} [AndroidVersion] GameServerInfo AndroidVersion
         * @property {string|null} [IOSVersion] GameServerInfo IOSVersion
         * @property {number|null} [NoSelRoom] GameServerInfo NoSelRoom
         * @property {number|null} [ServerStatus] GameServerInfo ServerStatus
         * @property {string|null} [RoomDesc] GameServerInfo RoomDesc
         */

        /**
         * Constructs a new GameServerInfo.
         * @memberof hall
         * @classdesc Represents a GameServerInfo.
         * @implements IGameServerInfo
         * @constructor
         * @param {hall.IGameServerInfo=} [properties] Properties to set
         */
        function GameServerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameServerInfo GameID.
         * @member {number} GameID
         * @memberof hall.GameServerInfo
         * @instance
         */
        GameServerInfo.prototype.GameID = 0;

        /**
         * GameServerInfo GameName.
         * @member {string} GameName
         * @memberof hall.GameServerInfo
         * @instance
         */
        GameServerInfo.prototype.GameName = "";

        /**
         * GameServerInfo LoginMoney.
         * @member {number} LoginMoney
         * @memberof hall.GameServerInfo
         * @instance
         */
        GameServerInfo.prototype.LoginMoney = 0;

        /**
         * GameServerInfo Flag.
         * @member {string} Flag
         * @memberof hall.GameServerInfo
         * @instance
         */
        GameServerInfo.prototype.Flag = "";

        /**
         * GameServerInfo Status.
         * @member {string} Status
         * @memberof hall.GameServerInfo
         * @instance
         */
        GameServerInfo.prototype.Status = "";

        /**
         * GameServerInfo BaseScore.
         * @member {number} BaseScore
         * @memberof hall.GameServerInfo
         * @instance
         */
        GameServerInfo.prototype.BaseScore = 0;

        /**
         * GameServerInfo AndroidVersion.
         * @member {string} AndroidVersion
         * @memberof hall.GameServerInfo
         * @instance
         */
        GameServerInfo.prototype.AndroidVersion = "";

        /**
         * GameServerInfo IOSVersion.
         * @member {string} IOSVersion
         * @memberof hall.GameServerInfo
         * @instance
         */
        GameServerInfo.prototype.IOSVersion = "";

        /**
         * GameServerInfo NoSelRoom.
         * @member {number} NoSelRoom
         * @memberof hall.GameServerInfo
         * @instance
         */
        GameServerInfo.prototype.NoSelRoom = 0;

        /**
         * GameServerInfo ServerStatus.
         * @member {number} ServerStatus
         * @memberof hall.GameServerInfo
         * @instance
         */
        GameServerInfo.prototype.ServerStatus = 0;

        /**
         * GameServerInfo RoomDesc.
         * @member {string} RoomDesc
         * @memberof hall.GameServerInfo
         * @instance
         */
        GameServerInfo.prototype.RoomDesc = "";

        /**
         * Creates a new GameServerInfo instance using the specified properties.
         * @function create
         * @memberof hall.GameServerInfo
         * @static
         * @param {hall.IGameServerInfo=} [properties] Properties to set
         * @returns {hall.GameServerInfo} GameServerInfo instance
         */
        GameServerInfo.create = function create(properties) {
            return new GameServerInfo(properties);
        };

        /**
         * Encodes the specified GameServerInfo message. Does not implicitly {@link hall.GameServerInfo.verify|verify} messages.
         * @function encode
         * @memberof hall.GameServerInfo
         * @static
         * @param {hall.IGameServerInfo} message GameServerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameServerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.GameName);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.LoginMoney);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.Flag);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.Status);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.BaseScore);
            if (message.AndroidVersion != null && Object.hasOwnProperty.call(message, "AndroidVersion"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.AndroidVersion);
            if (message.IOSVersion != null && Object.hasOwnProperty.call(message, "IOSVersion"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.IOSVersion);
            if (message.NoSelRoom != null && Object.hasOwnProperty.call(message, "NoSelRoom"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.NoSelRoom);
            if (message.ServerStatus != null && Object.hasOwnProperty.call(message, "ServerStatus"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.ServerStatus);
            if (message.RoomDesc != null && Object.hasOwnProperty.call(message, "RoomDesc"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.RoomDesc);
            return writer;
        };

        /**
         * Encodes the specified GameServerInfo message, length delimited. Does not implicitly {@link hall.GameServerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.GameServerInfo
         * @static
         * @param {hall.IGameServerInfo} message GameServerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameServerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameServerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof hall.GameServerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.GameServerInfo} GameServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameServerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.GameServerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    message.GameName = reader.string();
                    break;
                case 3:
                    message.LoginMoney = reader.int32();
                    break;
                case 4:
                    message.Flag = reader.string();
                    break;
                case 5:
                    message.Status = reader.string();
                    break;
                case 6:
                    message.BaseScore = reader.int32();
                    break;
                case 7:
                    message.AndroidVersion = reader.string();
                    break;
                case 8:
                    message.IOSVersion = reader.string();
                    break;
                case 9:
                    message.NoSelRoom = reader.int32();
                    break;
                case 10:
                    message.ServerStatus = reader.int32();
                    break;
                case 11:
                    message.RoomDesc = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance: message });
            if (!message.hasOwnProperty("GameName"))
                throw $util.ProtocolError("missing required 'GameName'", { instance: message });
            if (!message.hasOwnProperty("LoginMoney"))
                throw $util.ProtocolError("missing required 'LoginMoney'", { instance: message });
            if (!message.hasOwnProperty("Flag"))
                throw $util.ProtocolError("missing required 'Flag'", { instance: message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance: message });
            if (!message.hasOwnProperty("BaseScore"))
                throw $util.ProtocolError("missing required 'BaseScore'", { instance: message });
            return message;
        };

        /**
         * Decodes a GameServerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.GameServerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.GameServerInfo} GameServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameServerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameServerInfo message.
         * @function verify
         * @memberof hall.GameServerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameServerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (!$util.isString(message.GameName))
                return "GameName: string expected";
            if (!$util.isInteger(message.LoginMoney))
                return "LoginMoney: integer expected";
            if (!$util.isString(message.Flag))
                return "Flag: string expected";
            if (!$util.isString(message.Status))
                return "Status: string expected";
            if (!$util.isInteger(message.BaseScore))
                return "BaseScore: integer expected";
            if (message.AndroidVersion != null && message.hasOwnProperty("AndroidVersion"))
                if (!$util.isString(message.AndroidVersion))
                    return "AndroidVersion: string expected";
            if (message.IOSVersion != null && message.hasOwnProperty("IOSVersion"))
                if (!$util.isString(message.IOSVersion))
                    return "IOSVersion: string expected";
            if (message.NoSelRoom != null && message.hasOwnProperty("NoSelRoom"))
                if (!$util.isInteger(message.NoSelRoom))
                    return "NoSelRoom: integer expected";
            if (message.ServerStatus != null && message.hasOwnProperty("ServerStatus"))
                if (!$util.isInteger(message.ServerStatus))
                    return "ServerStatus: integer expected";
            if (message.RoomDesc != null && message.hasOwnProperty("RoomDesc"))
                if (!$util.isString(message.RoomDesc))
                    return "RoomDesc: string expected";
            return null;
        };

        /**
         * Creates a GameServerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.GameServerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.GameServerInfo} GameServerInfo
         */
        GameServerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.GameServerInfo)
                return object;
            var message = new $root.hall.GameServerInfo();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.GameName != null)
                message.GameName = String(object.GameName);
            if (object.LoginMoney != null)
                message.LoginMoney = object.LoginMoney | 0;
            if (object.Flag != null)
                message.Flag = String(object.Flag);
            if (object.Status != null)
                message.Status = String(object.Status);
            if (object.BaseScore != null)
                message.BaseScore = object.BaseScore | 0;
            if (object.AndroidVersion != null)
                message.AndroidVersion = String(object.AndroidVersion);
            if (object.IOSVersion != null)
                message.IOSVersion = String(object.IOSVersion);
            if (object.NoSelRoom != null)
                message.NoSelRoom = object.NoSelRoom | 0;
            if (object.ServerStatus != null)
                message.ServerStatus = object.ServerStatus | 0;
            if (object.RoomDesc != null)
                message.RoomDesc = String(object.RoomDesc);
            return message;
        };

        /**
         * Creates a plain object from a GameServerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.GameServerInfo
         * @static
         * @param {hall.GameServerInfo} message GameServerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameServerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameID = 0;
                object.GameName = "";
                object.LoginMoney = 0;
                object.Flag = "";
                object.Status = "";
                object.BaseScore = 0;
                object.AndroidVersion = "";
                object.IOSVersion = "";
                object.NoSelRoom = 0;
                object.ServerStatus = 0;
                object.RoomDesc = "";
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.GameName != null && message.hasOwnProperty("GameName"))
                object.GameName = message.GameName;
            if (message.LoginMoney != null && message.hasOwnProperty("LoginMoney"))
                object.LoginMoney = message.LoginMoney;
            if (message.Flag != null && message.hasOwnProperty("Flag"))
                object.Flag = message.Flag;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            if (message.BaseScore != null && message.hasOwnProperty("BaseScore"))
                object.BaseScore = message.BaseScore;
            if (message.AndroidVersion != null && message.hasOwnProperty("AndroidVersion"))
                object.AndroidVersion = message.AndroidVersion;
            if (message.IOSVersion != null && message.hasOwnProperty("IOSVersion"))
                object.IOSVersion = message.IOSVersion;
            if (message.NoSelRoom != null && message.hasOwnProperty("NoSelRoom"))
                object.NoSelRoom = message.NoSelRoom;
            if (message.ServerStatus != null && message.hasOwnProperty("ServerStatus"))
                object.ServerStatus = message.ServerStatus;
            if (message.RoomDesc != null && message.hasOwnProperty("RoomDesc"))
                object.RoomDesc = message.RoomDesc;
            return object;
        };

        /**
         * Converts this GameServerInfo to JSON.
         * @function toJSON
         * @memberof hall.GameServerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameServerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameServerInfo;
    })();

    hall.RequestGameServerAddrInfo = (function() {

        /**
         * Properties of a RequestGameServerAddrInfo.
         * @memberof hall
         * @interface IRequestGameServerAddrInfo
         * @property {string} ServerFlag RequestGameServerAddrInfo ServerFlag
         * @property {number} GameID RequestGameServerAddrInfo GameID
         * @property {boolean|null} [IsLianyun] RequestGameServerAddrInfo IsLianyun
         * @property {number|null} [LianyunID] RequestGameServerAddrInfo LianyunID
         */

        /**
         * Constructs a new RequestGameServerAddrInfo.
         * @memberof hall
         * @classdesc Represents a RequestGameServerAddrInfo.
         * @implements IRequestGameServerAddrInfo
         * @constructor
         * @param {hall.IRequestGameServerAddrInfo=} [properties] Properties to set
         */
        function RequestGameServerAddrInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RequestGameServerAddrInfo ServerFlag.
         * @member {string} ServerFlag
         * @memberof hall.RequestGameServerAddrInfo
         * @instance
         */
        RequestGameServerAddrInfo.prototype.ServerFlag = "";

        /**
         * RequestGameServerAddrInfo GameID.
         * @member {number} GameID
         * @memberof hall.RequestGameServerAddrInfo
         * @instance
         */
        RequestGameServerAddrInfo.prototype.GameID = 0;

        /**
         * RequestGameServerAddrInfo IsLianyun.
         * @member {boolean} IsLianyun
         * @memberof hall.RequestGameServerAddrInfo
         * @instance
         */
        RequestGameServerAddrInfo.prototype.IsLianyun = false;

        /**
         * RequestGameServerAddrInfo LianyunID.
         * @member {number} LianyunID
         * @memberof hall.RequestGameServerAddrInfo
         * @instance
         */
        RequestGameServerAddrInfo.prototype.LianyunID = 0;

        /**
         * Creates a new RequestGameServerAddrInfo instance using the specified properties.
         * @function create
         * @memberof hall.RequestGameServerAddrInfo
         * @static
         * @param {hall.IRequestGameServerAddrInfo=} [properties] Properties to set
         * @returns {hall.RequestGameServerAddrInfo} RequestGameServerAddrInfo instance
         */
        RequestGameServerAddrInfo.create = function create(properties) {
            return new RequestGameServerAddrInfo(properties);
        };

        /**
         * Encodes the specified RequestGameServerAddrInfo message. Does not implicitly {@link hall.RequestGameServerAddrInfo.verify|verify} messages.
         * @function encode
         * @memberof hall.RequestGameServerAddrInfo
         * @static
         * @param {hall.IRequestGameServerAddrInfo} message RequestGameServerAddrInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestGameServerAddrInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ServerFlag);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GameID);
            if (message.IsLianyun != null && Object.hasOwnProperty.call(message, "IsLianyun"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.IsLianyun);
            if (message.LianyunID != null && Object.hasOwnProperty.call(message, "LianyunID"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.LianyunID);
            return writer;
        };

        /**
         * Encodes the specified RequestGameServerAddrInfo message, length delimited. Does not implicitly {@link hall.RequestGameServerAddrInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.RequestGameServerAddrInfo
         * @static
         * @param {hall.IRequestGameServerAddrInfo} message RequestGameServerAddrInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestGameServerAddrInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RequestGameServerAddrInfo message from the specified reader or buffer.
         * @function decode
         * @memberof hall.RequestGameServerAddrInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.RequestGameServerAddrInfo} RequestGameServerAddrInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestGameServerAddrInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.RequestGameServerAddrInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ServerFlag = reader.string();
                    break;
                case 2:
                    message.GameID = reader.int32();
                    break;
                case 3:
                    message.IsLianyun = reader.bool();
                    break;
                case 4:
                    message.LianyunID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ServerFlag"))
                throw $util.ProtocolError("missing required 'ServerFlag'", { instance: message });
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance: message });
            return message;
        };

        /**
         * Decodes a RequestGameServerAddrInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.RequestGameServerAddrInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.RequestGameServerAddrInfo} RequestGameServerAddrInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestGameServerAddrInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RequestGameServerAddrInfo message.
         * @function verify
         * @memberof hall.RequestGameServerAddrInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RequestGameServerAddrInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ServerFlag))
                return "ServerFlag: string expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (message.IsLianyun != null && message.hasOwnProperty("IsLianyun"))
                if (typeof message.IsLianyun !== "boolean")
                    return "IsLianyun: boolean expected";
            if (message.LianyunID != null && message.hasOwnProperty("LianyunID"))
                if (!$util.isInteger(message.LianyunID))
                    return "LianyunID: integer expected";
            return null;
        };

        /**
         * Creates a RequestGameServerAddrInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.RequestGameServerAddrInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.RequestGameServerAddrInfo} RequestGameServerAddrInfo
         */
        RequestGameServerAddrInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.RequestGameServerAddrInfo)
                return object;
            var message = new $root.hall.RequestGameServerAddrInfo();
            if (object.ServerFlag != null)
                message.ServerFlag = String(object.ServerFlag);
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.IsLianyun != null)
                message.IsLianyun = Boolean(object.IsLianyun);
            if (object.LianyunID != null)
                message.LianyunID = object.LianyunID | 0;
            return message;
        };

        /**
         * Creates a plain object from a RequestGameServerAddrInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.RequestGameServerAddrInfo
         * @static
         * @param {hall.RequestGameServerAddrInfo} message RequestGameServerAddrInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RequestGameServerAddrInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ServerFlag = "";
                object.GameID = 0;
                object.IsLianyun = false;
                object.LianyunID = 0;
            }
            if (message.ServerFlag != null && message.hasOwnProperty("ServerFlag"))
                object.ServerFlag = message.ServerFlag;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.IsLianyun != null && message.hasOwnProperty("IsLianyun"))
                object.IsLianyun = message.IsLianyun;
            if (message.LianyunID != null && message.hasOwnProperty("LianyunID"))
                object.LianyunID = message.LianyunID;
            return object;
        };

        /**
         * Converts this RequestGameServerAddrInfo to JSON.
         * @function toJSON
         * @memberof hall.RequestGameServerAddrInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequestGameServerAddrInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RequestGameServerAddrInfo;
    })();

    hall.GameServerAddr = (function() {

        /**
         * Properties of a GameServerAddr.
         * @memberof hall
         * @interface IGameServerAddr
         * @property {number} ServerID GameServerAddr ServerID
         * @property {string} IPAddress GameServerAddr IPAddress
         * @property {number} Port GameServerAddr Port
         */

        /**
         * Constructs a new GameServerAddr.
         * @memberof hall
         * @classdesc Represents a GameServerAddr.
         * @implements IGameServerAddr
         * @constructor
         * @param {hall.IGameServerAddr=} [properties] Properties to set
         */
        function GameServerAddr(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameServerAddr ServerID.
         * @member {number} ServerID
         * @memberof hall.GameServerAddr
         * @instance
         */
        GameServerAddr.prototype.ServerID = 0;

        /**
         * GameServerAddr IPAddress.
         * @member {string} IPAddress
         * @memberof hall.GameServerAddr
         * @instance
         */
        GameServerAddr.prototype.IPAddress = "";

        /**
         * GameServerAddr Port.
         * @member {number} Port
         * @memberof hall.GameServerAddr
         * @instance
         */
        GameServerAddr.prototype.Port = 0;

        /**
         * Creates a new GameServerAddr instance using the specified properties.
         * @function create
         * @memberof hall.GameServerAddr
         * @static
         * @param {hall.IGameServerAddr=} [properties] Properties to set
         * @returns {hall.GameServerAddr} GameServerAddr instance
         */
        GameServerAddr.create = function create(properties) {
            return new GameServerAddr(properties);
        };

        /**
         * Encodes the specified GameServerAddr message. Does not implicitly {@link hall.GameServerAddr.verify|verify} messages.
         * @function encode
         * @memberof hall.GameServerAddr
         * @static
         * @param {hall.IGameServerAddr} message GameServerAddr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameServerAddr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ServerID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.IPAddress);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Port);
            return writer;
        };

        /**
         * Encodes the specified GameServerAddr message, length delimited. Does not implicitly {@link hall.GameServerAddr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.GameServerAddr
         * @static
         * @param {hall.IGameServerAddr} message GameServerAddr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameServerAddr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameServerAddr message from the specified reader or buffer.
         * @function decode
         * @memberof hall.GameServerAddr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.GameServerAddr} GameServerAddr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameServerAddr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.GameServerAddr();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ServerID = reader.int32();
                    break;
                case 2:
                    message.IPAddress = reader.string();
                    break;
                case 3:
                    message.Port = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ServerID"))
                throw $util.ProtocolError("missing required 'ServerID'", { instance: message });
            if (!message.hasOwnProperty("IPAddress"))
                throw $util.ProtocolError("missing required 'IPAddress'", { instance: message });
            if (!message.hasOwnProperty("Port"))
                throw $util.ProtocolError("missing required 'Port'", { instance: message });
            return message;
        };

        /**
         * Decodes a GameServerAddr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.GameServerAddr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.GameServerAddr} GameServerAddr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameServerAddr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameServerAddr message.
         * @function verify
         * @memberof hall.GameServerAddr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameServerAddr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ServerID))
                return "ServerID: integer expected";
            if (!$util.isString(message.IPAddress))
                return "IPAddress: string expected";
            if (!$util.isInteger(message.Port))
                return "Port: integer expected";
            return null;
        };

        /**
         * Creates a GameServerAddr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.GameServerAddr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.GameServerAddr} GameServerAddr
         */
        GameServerAddr.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.GameServerAddr)
                return object;
            var message = new $root.hall.GameServerAddr();
            if (object.ServerID != null)
                message.ServerID = object.ServerID | 0;
            if (object.IPAddress != null)
                message.IPAddress = String(object.IPAddress);
            if (object.Port != null)
                message.Port = object.Port | 0;
            return message;
        };

        /**
         * Creates a plain object from a GameServerAddr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.GameServerAddr
         * @static
         * @param {hall.GameServerAddr} message GameServerAddr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameServerAddr.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ServerID = 0;
                object.IPAddress = "";
                object.Port = 0;
            }
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                object.ServerID = message.ServerID;
            if (message.IPAddress != null && message.hasOwnProperty("IPAddress"))
                object.IPAddress = message.IPAddress;
            if (message.Port != null && message.hasOwnProperty("Port"))
                object.Port = message.Port;
            return object;
        };

        /**
         * Converts this GameServerAddr to JSON.
         * @function toJSON
         * @memberof hall.GameServerAddr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameServerAddr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameServerAddr;
    })();

    hall.ZhifubaoInfo = (function() {

        /**
         * Properties of a ZhifubaoInfo.
         * @memberof hall
         * @interface IZhifubaoInfo
         * @property {string} Zhifubao ZhifubaoInfo Zhifubao
         * @property {string} RealName ZhifubaoInfo RealName
         * @property {number|null} [NeedVcode] ZhifubaoInfo NeedVcode
         * @property {string|null} [Vcode] ZhifubaoInfo Vcode
         */

        /**
         * Constructs a new ZhifubaoInfo.
         * @memberof hall
         * @classdesc Represents a ZhifubaoInfo.
         * @implements IZhifubaoInfo
         * @constructor
         * @param {hall.IZhifubaoInfo=} [properties] Properties to set
         */
        function ZhifubaoInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ZhifubaoInfo Zhifubao.
         * @member {string} Zhifubao
         * @memberof hall.ZhifubaoInfo
         * @instance
         */
        ZhifubaoInfo.prototype.Zhifubao = "";

        /**
         * ZhifubaoInfo RealName.
         * @member {string} RealName
         * @memberof hall.ZhifubaoInfo
         * @instance
         */
        ZhifubaoInfo.prototype.RealName = "";

        /**
         * ZhifubaoInfo NeedVcode.
         * @member {number} NeedVcode
         * @memberof hall.ZhifubaoInfo
         * @instance
         */
        ZhifubaoInfo.prototype.NeedVcode = 0;

        /**
         * ZhifubaoInfo Vcode.
         * @member {string} Vcode
         * @memberof hall.ZhifubaoInfo
         * @instance
         */
        ZhifubaoInfo.prototype.Vcode = "";

        /**
         * Creates a new ZhifubaoInfo instance using the specified properties.
         * @function create
         * @memberof hall.ZhifubaoInfo
         * @static
         * @param {hall.IZhifubaoInfo=} [properties] Properties to set
         * @returns {hall.ZhifubaoInfo} ZhifubaoInfo instance
         */
        ZhifubaoInfo.create = function create(properties) {
            return new ZhifubaoInfo(properties);
        };

        /**
         * Encodes the specified ZhifubaoInfo message. Does not implicitly {@link hall.ZhifubaoInfo.verify|verify} messages.
         * @function encode
         * @memberof hall.ZhifubaoInfo
         * @static
         * @param {hall.IZhifubaoInfo} message ZhifubaoInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZhifubaoInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Zhifubao);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.RealName);
            if (message.NeedVcode != null && Object.hasOwnProperty.call(message, "NeedVcode"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.NeedVcode);
            if (message.Vcode != null && Object.hasOwnProperty.call(message, "Vcode"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Vcode);
            return writer;
        };

        /**
         * Encodes the specified ZhifubaoInfo message, length delimited. Does not implicitly {@link hall.ZhifubaoInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.ZhifubaoInfo
         * @static
         * @param {hall.IZhifubaoInfo} message ZhifubaoInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ZhifubaoInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ZhifubaoInfo message from the specified reader or buffer.
         * @function decode
         * @memberof hall.ZhifubaoInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.ZhifubaoInfo} ZhifubaoInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZhifubaoInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.ZhifubaoInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Zhifubao = reader.string();
                    break;
                case 2:
                    message.RealName = reader.string();
                    break;
                case 3:
                    message.NeedVcode = reader.int32();
                    break;
                case 4:
                    message.Vcode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Zhifubao"))
                throw $util.ProtocolError("missing required 'Zhifubao'", { instance: message });
            if (!message.hasOwnProperty("RealName"))
                throw $util.ProtocolError("missing required 'RealName'", { instance: message });
            return message;
        };

        /**
         * Decodes a ZhifubaoInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.ZhifubaoInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.ZhifubaoInfo} ZhifubaoInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ZhifubaoInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ZhifubaoInfo message.
         * @function verify
         * @memberof hall.ZhifubaoInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ZhifubaoInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.Zhifubao))
                return "Zhifubao: string expected";
            if (!$util.isString(message.RealName))
                return "RealName: string expected";
            if (message.NeedVcode != null && message.hasOwnProperty("NeedVcode"))
                if (!$util.isInteger(message.NeedVcode))
                    return "NeedVcode: integer expected";
            if (message.Vcode != null && message.hasOwnProperty("Vcode"))
                if (!$util.isString(message.Vcode))
                    return "Vcode: string expected";
            return null;
        };

        /**
         * Creates a ZhifubaoInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.ZhifubaoInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.ZhifubaoInfo} ZhifubaoInfo
         */
        ZhifubaoInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.ZhifubaoInfo)
                return object;
            var message = new $root.hall.ZhifubaoInfo();
            if (object.Zhifubao != null)
                message.Zhifubao = String(object.Zhifubao);
            if (object.RealName != null)
                message.RealName = String(object.RealName);
            if (object.NeedVcode != null)
                message.NeedVcode = object.NeedVcode | 0;
            if (object.Vcode != null)
                message.Vcode = String(object.Vcode);
            return message;
        };

        /**
         * Creates a plain object from a ZhifubaoInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.ZhifubaoInfo
         * @static
         * @param {hall.ZhifubaoInfo} message ZhifubaoInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ZhifubaoInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Zhifubao = "";
                object.RealName = "";
                object.NeedVcode = 0;
                object.Vcode = "";
            }
            if (message.Zhifubao != null && message.hasOwnProperty("Zhifubao"))
                object.Zhifubao = message.Zhifubao;
            if (message.RealName != null && message.hasOwnProperty("RealName"))
                object.RealName = message.RealName;
            if (message.NeedVcode != null && message.hasOwnProperty("NeedVcode"))
                object.NeedVcode = message.NeedVcode;
            if (message.Vcode != null && message.hasOwnProperty("Vcode"))
                object.Vcode = message.Vcode;
            return object;
        };

        /**
         * Converts this ZhifubaoInfo to JSON.
         * @function toJSON
         * @memberof hall.ZhifubaoInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ZhifubaoInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ZhifubaoInfo;
    })();

    hall.ModifyPassword = (function() {

        /**
         * Properties of a ModifyPassword.
         * @memberof hall
         * @interface IModifyPassword
         * @property {string} OldPwd ModifyPassword OldPwd
         * @property {string} NewPassword ModifyPassword NewPassword
         */

        /**
         * Constructs a new ModifyPassword.
         * @memberof hall
         * @classdesc Represents a ModifyPassword.
         * @implements IModifyPassword
         * @constructor
         * @param {hall.IModifyPassword=} [properties] Properties to set
         */
        function ModifyPassword(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ModifyPassword OldPwd.
         * @member {string} OldPwd
         * @memberof hall.ModifyPassword
         * @instance
         */
        ModifyPassword.prototype.OldPwd = "";

        /**
         * ModifyPassword NewPassword.
         * @member {string} NewPassword
         * @memberof hall.ModifyPassword
         * @instance
         */
        ModifyPassword.prototype.NewPassword = "";

        /**
         * Creates a new ModifyPassword instance using the specified properties.
         * @function create
         * @memberof hall.ModifyPassword
         * @static
         * @param {hall.IModifyPassword=} [properties] Properties to set
         * @returns {hall.ModifyPassword} ModifyPassword instance
         */
        ModifyPassword.create = function create(properties) {
            return new ModifyPassword(properties);
        };

        /**
         * Encodes the specified ModifyPassword message. Does not implicitly {@link hall.ModifyPassword.verify|verify} messages.
         * @function encode
         * @memberof hall.ModifyPassword
         * @static
         * @param {hall.IModifyPassword} message ModifyPassword message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyPassword.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.OldPwd);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.NewPassword);
            return writer;
        };

        /**
         * Encodes the specified ModifyPassword message, length delimited. Does not implicitly {@link hall.ModifyPassword.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.ModifyPassword
         * @static
         * @param {hall.IModifyPassword} message ModifyPassword message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyPassword.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ModifyPassword message from the specified reader or buffer.
         * @function decode
         * @memberof hall.ModifyPassword
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.ModifyPassword} ModifyPassword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyPassword.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.ModifyPassword();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.OldPwd = reader.string();
                    break;
                case 2:
                    message.NewPassword = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("OldPwd"))
                throw $util.ProtocolError("missing required 'OldPwd'", { instance: message });
            if (!message.hasOwnProperty("NewPassword"))
                throw $util.ProtocolError("missing required 'NewPassword'", { instance: message });
            return message;
        };

        /**
         * Decodes a ModifyPassword message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.ModifyPassword
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.ModifyPassword} ModifyPassword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyPassword.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ModifyPassword message.
         * @function verify
         * @memberof hall.ModifyPassword
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ModifyPassword.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.OldPwd))
                return "OldPwd: string expected";
            if (!$util.isString(message.NewPassword))
                return "NewPassword: string expected";
            return null;
        };

        /**
         * Creates a ModifyPassword message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.ModifyPassword
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.ModifyPassword} ModifyPassword
         */
        ModifyPassword.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.ModifyPassword)
                return object;
            var message = new $root.hall.ModifyPassword();
            if (object.OldPwd != null)
                message.OldPwd = String(object.OldPwd);
            if (object.NewPassword != null)
                message.NewPassword = String(object.NewPassword);
            return message;
        };

        /**
         * Creates a plain object from a ModifyPassword message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.ModifyPassword
         * @static
         * @param {hall.ModifyPassword} message ModifyPassword
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModifyPassword.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.OldPwd = "";
                object.NewPassword = "";
            }
            if (message.OldPwd != null && message.hasOwnProperty("OldPwd"))
                object.OldPwd = message.OldPwd;
            if (message.NewPassword != null && message.hasOwnProperty("NewPassword"))
                object.NewPassword = message.NewPassword;
            return object;
        };

        /**
         * Converts this ModifyPassword to JSON.
         * @function toJSON
         * @memberof hall.ModifyPassword
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ModifyPassword.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ModifyPassword;
    })();

    hall.SendPhoneVCode = (function() {

        /**
         * Properties of a SendPhoneVCode.
         * @memberof hall
         * @interface ISendPhoneVCode
         * @property {string|null} [Tel] SendPhoneVCode Tel
         * @property {number} CodeType SendPhoneVCode CodeType
         */

        /**
         * Constructs a new SendPhoneVCode.
         * @memberof hall
         * @classdesc Represents a SendPhoneVCode.
         * @implements ISendPhoneVCode
         * @constructor
         * @param {hall.ISendPhoneVCode=} [properties] Properties to set
         */
        function SendPhoneVCode(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendPhoneVCode Tel.
         * @member {string} Tel
         * @memberof hall.SendPhoneVCode
         * @instance
         */
        SendPhoneVCode.prototype.Tel = "";

        /**
         * SendPhoneVCode CodeType.
         * @member {number} CodeType
         * @memberof hall.SendPhoneVCode
         * @instance
         */
        SendPhoneVCode.prototype.CodeType = 0;

        /**
         * Creates a new SendPhoneVCode instance using the specified properties.
         * @function create
         * @memberof hall.SendPhoneVCode
         * @static
         * @param {hall.ISendPhoneVCode=} [properties] Properties to set
         * @returns {hall.SendPhoneVCode} SendPhoneVCode instance
         */
        SendPhoneVCode.create = function create(properties) {
            return new SendPhoneVCode(properties);
        };

        /**
         * Encodes the specified SendPhoneVCode message. Does not implicitly {@link hall.SendPhoneVCode.verify|verify} messages.
         * @function encode
         * @memberof hall.SendPhoneVCode
         * @static
         * @param {hall.ISendPhoneVCode} message SendPhoneVCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendPhoneVCode.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Tel != null && Object.hasOwnProperty.call(message, "Tel"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tel);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.CodeType);
            return writer;
        };

        /**
         * Encodes the specified SendPhoneVCode message, length delimited. Does not implicitly {@link hall.SendPhoneVCode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.SendPhoneVCode
         * @static
         * @param {hall.ISendPhoneVCode} message SendPhoneVCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendPhoneVCode.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendPhoneVCode message from the specified reader or buffer.
         * @function decode
         * @memberof hall.SendPhoneVCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.SendPhoneVCode} SendPhoneVCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendPhoneVCode.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.SendPhoneVCode();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Tel = reader.string();
                    break;
                case 2:
                    message.CodeType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("CodeType"))
                throw $util.ProtocolError("missing required 'CodeType'", { instance: message });
            return message;
        };

        /**
         * Decodes a SendPhoneVCode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.SendPhoneVCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.SendPhoneVCode} SendPhoneVCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendPhoneVCode.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendPhoneVCode message.
         * @function verify
         * @memberof hall.SendPhoneVCode
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendPhoneVCode.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Tel != null && message.hasOwnProperty("Tel"))
                if (!$util.isString(message.Tel))
                    return "Tel: string expected";
            if (!$util.isInteger(message.CodeType))
                return "CodeType: integer expected";
            return null;
        };

        /**
         * Creates a SendPhoneVCode message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.SendPhoneVCode
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.SendPhoneVCode} SendPhoneVCode
         */
        SendPhoneVCode.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.SendPhoneVCode)
                return object;
            var message = new $root.hall.SendPhoneVCode();
            if (object.Tel != null)
                message.Tel = String(object.Tel);
            if (object.CodeType != null)
                message.CodeType = object.CodeType | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendPhoneVCode message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.SendPhoneVCode
         * @static
         * @param {hall.SendPhoneVCode} message SendPhoneVCode
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendPhoneVCode.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Tel = "";
                object.CodeType = 0;
            }
            if (message.Tel != null && message.hasOwnProperty("Tel"))
                object.Tel = message.Tel;
            if (message.CodeType != null && message.hasOwnProperty("CodeType"))
                object.CodeType = message.CodeType;
            return object;
        };

        /**
         * Converts this SendPhoneVCode to JSON.
         * @function toJSON
         * @memberof hall.SendPhoneVCode
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendPhoneVCode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendPhoneVCode;
    })();

    hall.SendPhoneVCodeRet = (function() {

        /**
         * Properties of a SendPhoneVCodeRet.
         * @memberof hall
         * @interface ISendPhoneVCodeRet
         * @property {number} Code SendPhoneVCodeRet Code
         * @property {string} Message SendPhoneVCodeRet Message
         * @property {number} CountDown SendPhoneVCodeRet CountDown
         */

        /**
         * Constructs a new SendPhoneVCodeRet.
         * @memberof hall
         * @classdesc Represents a SendPhoneVCodeRet.
         * @implements ISendPhoneVCodeRet
         * @constructor
         * @param {hall.ISendPhoneVCodeRet=} [properties] Properties to set
         */
        function SendPhoneVCodeRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendPhoneVCodeRet Code.
         * @member {number} Code
         * @memberof hall.SendPhoneVCodeRet
         * @instance
         */
        SendPhoneVCodeRet.prototype.Code = 0;

        /**
         * SendPhoneVCodeRet Message.
         * @member {string} Message
         * @memberof hall.SendPhoneVCodeRet
         * @instance
         */
        SendPhoneVCodeRet.prototype.Message = "";

        /**
         * SendPhoneVCodeRet CountDown.
         * @member {number} CountDown
         * @memberof hall.SendPhoneVCodeRet
         * @instance
         */
        SendPhoneVCodeRet.prototype.CountDown = 0;

        /**
         * Creates a new SendPhoneVCodeRet instance using the specified properties.
         * @function create
         * @memberof hall.SendPhoneVCodeRet
         * @static
         * @param {hall.ISendPhoneVCodeRet=} [properties] Properties to set
         * @returns {hall.SendPhoneVCodeRet} SendPhoneVCodeRet instance
         */
        SendPhoneVCodeRet.create = function create(properties) {
            return new SendPhoneVCodeRet(properties);
        };

        /**
         * Encodes the specified SendPhoneVCodeRet message. Does not implicitly {@link hall.SendPhoneVCodeRet.verify|verify} messages.
         * @function encode
         * @memberof hall.SendPhoneVCodeRet
         * @static
         * @param {hall.ISendPhoneVCodeRet} message SendPhoneVCodeRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendPhoneVCodeRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Message);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.CountDown);
            return writer;
        };

        /**
         * Encodes the specified SendPhoneVCodeRet message, length delimited. Does not implicitly {@link hall.SendPhoneVCodeRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.SendPhoneVCodeRet
         * @static
         * @param {hall.ISendPhoneVCodeRet} message SendPhoneVCodeRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendPhoneVCodeRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendPhoneVCodeRet message from the specified reader or buffer.
         * @function decode
         * @memberof hall.SendPhoneVCodeRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.SendPhoneVCodeRet} SendPhoneVCodeRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendPhoneVCodeRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.SendPhoneVCodeRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                case 2:
                    message.Message = reader.string();
                    break;
                case 3:
                    message.CountDown = reader.int32();
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
            if (!message.hasOwnProperty("CountDown"))
                throw $util.ProtocolError("missing required 'CountDown'", { instance: message });
            return message;
        };

        /**
         * Decodes a SendPhoneVCodeRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.SendPhoneVCodeRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.SendPhoneVCodeRet} SendPhoneVCodeRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendPhoneVCodeRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendPhoneVCodeRet message.
         * @function verify
         * @memberof hall.SendPhoneVCodeRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendPhoneVCodeRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Code))
                return "Code: integer expected";
            if (!$util.isString(message.Message))
                return "Message: string expected";
            if (!$util.isInteger(message.CountDown))
                return "CountDown: integer expected";
            return null;
        };

        /**
         * Creates a SendPhoneVCodeRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.SendPhoneVCodeRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.SendPhoneVCodeRet} SendPhoneVCodeRet
         */
        SendPhoneVCodeRet.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.SendPhoneVCodeRet)
                return object;
            var message = new $root.hall.SendPhoneVCodeRet();
            if (object.Code != null)
                message.Code = object.Code | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.CountDown != null)
                message.CountDown = object.CountDown | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendPhoneVCodeRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.SendPhoneVCodeRet
         * @static
         * @param {hall.SendPhoneVCodeRet} message SendPhoneVCodeRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendPhoneVCodeRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = 0;
                object.Message = "";
                object.CountDown = 0;
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            if (message.CountDown != null && message.hasOwnProperty("CountDown"))
                object.CountDown = message.CountDown;
            return object;
        };

        /**
         * Converts this SendPhoneVCodeRet to JSON.
         * @function toJSON
         * @memberof hall.SendPhoneVCodeRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendPhoneVCodeRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendPhoneVCodeRet;
    })();

    hall.ModifyFace = (function() {

        /**
         * Properties of a ModifyFace.
         * @memberof hall
         * @interface IModifyFace
         * @property {number} FaceID ModifyFace FaceID
         * @property {number|null} [FaceFrameID] ModifyFace FaceFrameID
         */

        /**
         * Constructs a new ModifyFace.
         * @memberof hall
         * @classdesc Represents a ModifyFace.
         * @implements IModifyFace
         * @constructor
         * @param {hall.IModifyFace=} [properties] Properties to set
         */
        function ModifyFace(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ModifyFace FaceID.
         * @member {number} FaceID
         * @memberof hall.ModifyFace
         * @instance
         */
        ModifyFace.prototype.FaceID = 0;

        /**
         * ModifyFace FaceFrameID.
         * @member {number} FaceFrameID
         * @memberof hall.ModifyFace
         * @instance
         */
        ModifyFace.prototype.FaceFrameID = 0;

        /**
         * Creates a new ModifyFace instance using the specified properties.
         * @function create
         * @memberof hall.ModifyFace
         * @static
         * @param {hall.IModifyFace=} [properties] Properties to set
         * @returns {hall.ModifyFace} ModifyFace instance
         */
        ModifyFace.create = function create(properties) {
            return new ModifyFace(properties);
        };

        /**
         * Encodes the specified ModifyFace message. Does not implicitly {@link hall.ModifyFace.verify|verify} messages.
         * @function encode
         * @memberof hall.ModifyFace
         * @static
         * @param {hall.IModifyFace} message ModifyFace message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyFace.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FaceID);
            if (message.FaceFrameID != null && Object.hasOwnProperty.call(message, "FaceFrameID"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FaceFrameID);
            return writer;
        };

        /**
         * Encodes the specified ModifyFace message, length delimited. Does not implicitly {@link hall.ModifyFace.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.ModifyFace
         * @static
         * @param {hall.IModifyFace} message ModifyFace message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyFace.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ModifyFace message from the specified reader or buffer.
         * @function decode
         * @memberof hall.ModifyFace
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.ModifyFace} ModifyFace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyFace.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.ModifyFace();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FaceID = reader.int32();
                    break;
                case 2:
                    message.FaceFrameID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("FaceID"))
                throw $util.ProtocolError("missing required 'FaceID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ModifyFace message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.ModifyFace
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.ModifyFace} ModifyFace
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyFace.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ModifyFace message.
         * @function verify
         * @memberof hall.ModifyFace
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ModifyFace.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.FaceID))
                return "FaceID: integer expected";
            if (message.FaceFrameID != null && message.hasOwnProperty("FaceFrameID"))
                if (!$util.isInteger(message.FaceFrameID))
                    return "FaceFrameID: integer expected";
            return null;
        };

        /**
         * Creates a ModifyFace message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.ModifyFace
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.ModifyFace} ModifyFace
         */
        ModifyFace.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.ModifyFace)
                return object;
            var message = new $root.hall.ModifyFace();
            if (object.FaceID != null)
                message.FaceID = object.FaceID | 0;
            if (object.FaceFrameID != null)
                message.FaceFrameID = object.FaceFrameID | 0;
            return message;
        };

        /**
         * Creates a plain object from a ModifyFace message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.ModifyFace
         * @static
         * @param {hall.ModifyFace} message ModifyFace
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModifyFace.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.FaceID = 0;
                object.FaceFrameID = 0;
            }
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                object.FaceID = message.FaceID;
            if (message.FaceFrameID != null && message.hasOwnProperty("FaceFrameID"))
                object.FaceFrameID = message.FaceFrameID;
            return object;
        };

        /**
         * Converts this ModifyFace to JSON.
         * @function toJSON
         * @memberof hall.ModifyFace
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ModifyFace.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ModifyFace;
    })();

    hall.MoneyDeposit = (function() {

        /**
         * Properties of a MoneyDeposit.
         * @memberof hall
         * @interface IMoneyDeposit
         * @property {number|Long} Amount MoneyDeposit Amount
         * @property {string|null} [MoneyPassword] MoneyDeposit MoneyPassword
         * @property {number} OP MoneyDeposit OP
         */

        /**
         * Constructs a new MoneyDeposit.
         * @memberof hall
         * @classdesc Represents a MoneyDeposit.
         * @implements IMoneyDeposit
         * @constructor
         * @param {hall.IMoneyDeposit=} [properties] Properties to set
         */
        function MoneyDeposit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MoneyDeposit Amount.
         * @member {number|Long} Amount
         * @memberof hall.MoneyDeposit
         * @instance
         */
        MoneyDeposit.prototype.Amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MoneyDeposit MoneyPassword.
         * @member {string} MoneyPassword
         * @memberof hall.MoneyDeposit
         * @instance
         */
        MoneyDeposit.prototype.MoneyPassword = "";

        /**
         * MoneyDeposit OP.
         * @member {number} OP
         * @memberof hall.MoneyDeposit
         * @instance
         */
        MoneyDeposit.prototype.OP = 0;

        /**
         * Creates a new MoneyDeposit instance using the specified properties.
         * @function create
         * @memberof hall.MoneyDeposit
         * @static
         * @param {hall.IMoneyDeposit=} [properties] Properties to set
         * @returns {hall.MoneyDeposit} MoneyDeposit instance
         */
        MoneyDeposit.create = function create(properties) {
            return new MoneyDeposit(properties);
        };

        /**
         * Encodes the specified MoneyDeposit message. Does not implicitly {@link hall.MoneyDeposit.verify|verify} messages.
         * @function encode
         * @memberof hall.MoneyDeposit
         * @static
         * @param {hall.IMoneyDeposit} message MoneyDeposit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MoneyDeposit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Amount);
            if (message.MoneyPassword != null && Object.hasOwnProperty.call(message, "MoneyPassword"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.MoneyPassword);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.OP);
            return writer;
        };

        /**
         * Encodes the specified MoneyDeposit message, length delimited. Does not implicitly {@link hall.MoneyDeposit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.MoneyDeposit
         * @static
         * @param {hall.IMoneyDeposit} message MoneyDeposit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MoneyDeposit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MoneyDeposit message from the specified reader or buffer.
         * @function decode
         * @memberof hall.MoneyDeposit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.MoneyDeposit} MoneyDeposit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MoneyDeposit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.MoneyDeposit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Amount = reader.int64();
                    break;
                case 2:
                    message.MoneyPassword = reader.string();
                    break;
                case 3:
                    message.OP = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Amount"))
                throw $util.ProtocolError("missing required 'Amount'", { instance: message });
            if (!message.hasOwnProperty("OP"))
                throw $util.ProtocolError("missing required 'OP'", { instance: message });
            return message;
        };

        /**
         * Decodes a MoneyDeposit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.MoneyDeposit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.MoneyDeposit} MoneyDeposit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MoneyDeposit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MoneyDeposit message.
         * @function verify
         * @memberof hall.MoneyDeposit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MoneyDeposit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Amount) && !(message.Amount && $util.isInteger(message.Amount.low) && $util.isInteger(message.Amount.high)))
                return "Amount: integer|Long expected";
            if (message.MoneyPassword != null && message.hasOwnProperty("MoneyPassword"))
                if (!$util.isString(message.MoneyPassword))
                    return "MoneyPassword: string expected";
            if (!$util.isInteger(message.OP))
                return "OP: integer expected";
            return null;
        };

        /**
         * Creates a MoneyDeposit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.MoneyDeposit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.MoneyDeposit} MoneyDeposit
         */
        MoneyDeposit.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.MoneyDeposit)
                return object;
            var message = new $root.hall.MoneyDeposit();
            if (object.Amount != null)
                if ($util.Long)
                    (message.Amount = $util.Long.fromValue(object.Amount)).unsigned = false;
                else if (typeof object.Amount === "string")
                    message.Amount = parseInt(object.Amount, 10);
                else if (typeof object.Amount === "number")
                    message.Amount = object.Amount;
                else if (typeof object.Amount === "object")
                    message.Amount = new $util.LongBits(object.Amount.low >>> 0, object.Amount.high >>> 0).toNumber();
            if (object.MoneyPassword != null)
                message.MoneyPassword = String(object.MoneyPassword);
            if (object.OP != null)
                message.OP = object.OP | 0;
            return message;
        };

        /**
         * Creates a plain object from a MoneyDeposit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.MoneyDeposit
         * @static
         * @param {hall.MoneyDeposit} message MoneyDeposit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MoneyDeposit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Amount = options.longs === String ? "0" : 0;
                object.MoneyPassword = "";
                object.OP = 0;
            }
            if (message.Amount != null && message.hasOwnProperty("Amount"))
                if (typeof message.Amount === "number")
                    object.Amount = options.longs === String ? String(message.Amount) : message.Amount;
                else
                    object.Amount = options.longs === String ? $util.Long.prototype.toString.call(message.Amount) : options.longs === Number ? new $util.LongBits(message.Amount.low >>> 0, message.Amount.high >>> 0).toNumber() : message.Amount;
            if (message.MoneyPassword != null && message.hasOwnProperty("MoneyPassword"))
                object.MoneyPassword = message.MoneyPassword;
            if (message.OP != null && message.hasOwnProperty("OP"))
                object.OP = message.OP;
            return object;
        };

        /**
         * Converts this MoneyDeposit to JSON.
         * @function toJSON
         * @memberof hall.MoneyDeposit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MoneyDeposit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MoneyDeposit;
    })();

    hall.MoneyDepositRet = (function() {

        /**
         * Properties of a MoneyDepositRet.
         * @memberof hall
         * @interface IMoneyDepositRet
         * @property {number|Long} Amount MoneyDepositRet Amount
         * @property {number} OP MoneyDepositRet OP
         * @property {number} Code MoneyDepositRet Code
         * @property {string} Message MoneyDepositRet Message
         * @property {number|Long} CurrentMoney MoneyDepositRet CurrentMoney
         * @property {number|Long} CurrentBank MoneyDepositRet CurrentBank
         */

        /**
         * Constructs a new MoneyDepositRet.
         * @memberof hall
         * @classdesc Represents a MoneyDepositRet.
         * @implements IMoneyDepositRet
         * @constructor
         * @param {hall.IMoneyDepositRet=} [properties] Properties to set
         */
        function MoneyDepositRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MoneyDepositRet Amount.
         * @member {number|Long} Amount
         * @memberof hall.MoneyDepositRet
         * @instance
         */
        MoneyDepositRet.prototype.Amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MoneyDepositRet OP.
         * @member {number} OP
         * @memberof hall.MoneyDepositRet
         * @instance
         */
        MoneyDepositRet.prototype.OP = 0;

        /**
         * MoneyDepositRet Code.
         * @member {number} Code
         * @memberof hall.MoneyDepositRet
         * @instance
         */
        MoneyDepositRet.prototype.Code = 0;

        /**
         * MoneyDepositRet Message.
         * @member {string} Message
         * @memberof hall.MoneyDepositRet
         * @instance
         */
        MoneyDepositRet.prototype.Message = "";

        /**
         * MoneyDepositRet CurrentMoney.
         * @member {number|Long} CurrentMoney
         * @memberof hall.MoneyDepositRet
         * @instance
         */
        MoneyDepositRet.prototype.CurrentMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * MoneyDepositRet CurrentBank.
         * @member {number|Long} CurrentBank
         * @memberof hall.MoneyDepositRet
         * @instance
         */
        MoneyDepositRet.prototype.CurrentBank = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new MoneyDepositRet instance using the specified properties.
         * @function create
         * @memberof hall.MoneyDepositRet
         * @static
         * @param {hall.IMoneyDepositRet=} [properties] Properties to set
         * @returns {hall.MoneyDepositRet} MoneyDepositRet instance
         */
        MoneyDepositRet.create = function create(properties) {
            return new MoneyDepositRet(properties);
        };

        /**
         * Encodes the specified MoneyDepositRet message. Does not implicitly {@link hall.MoneyDepositRet.verify|verify} messages.
         * @function encode
         * @memberof hall.MoneyDepositRet
         * @static
         * @param {hall.IMoneyDepositRet} message MoneyDepositRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MoneyDepositRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Amount);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.OP);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Code);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.Message);
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.CurrentMoney);
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.CurrentBank);
            return writer;
        };

        /**
         * Encodes the specified MoneyDepositRet message, length delimited. Does not implicitly {@link hall.MoneyDepositRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.MoneyDepositRet
         * @static
         * @param {hall.IMoneyDepositRet} message MoneyDepositRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MoneyDepositRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MoneyDepositRet message from the specified reader or buffer.
         * @function decode
         * @memberof hall.MoneyDepositRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.MoneyDepositRet} MoneyDepositRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MoneyDepositRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.MoneyDepositRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Amount = reader.int64();
                    break;
                case 2:
                    message.OP = reader.int32();
                    break;
                case 3:
                    message.Code = reader.int32();
                    break;
                case 4:
                    message.Message = reader.string();
                    break;
                case 5:
                    message.CurrentMoney = reader.int64();
                    break;
                case 6:
                    message.CurrentBank = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Amount"))
                throw $util.ProtocolError("missing required 'Amount'", { instance: message });
            if (!message.hasOwnProperty("OP"))
                throw $util.ProtocolError("missing required 'OP'", { instance: message });
            if (!message.hasOwnProperty("Code"))
                throw $util.ProtocolError("missing required 'Code'", { instance: message });
            if (!message.hasOwnProperty("Message"))
                throw $util.ProtocolError("missing required 'Message'", { instance: message });
            if (!message.hasOwnProperty("CurrentMoney"))
                throw $util.ProtocolError("missing required 'CurrentMoney'", { instance: message });
            if (!message.hasOwnProperty("CurrentBank"))
                throw $util.ProtocolError("missing required 'CurrentBank'", { instance: message });
            return message;
        };

        /**
         * Decodes a MoneyDepositRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.MoneyDepositRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.MoneyDepositRet} MoneyDepositRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MoneyDepositRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MoneyDepositRet message.
         * @function verify
         * @memberof hall.MoneyDepositRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MoneyDepositRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Amount) && !(message.Amount && $util.isInteger(message.Amount.low) && $util.isInteger(message.Amount.high)))
                return "Amount: integer|Long expected";
            if (!$util.isInteger(message.OP))
                return "OP: integer expected";
            if (!$util.isInteger(message.Code))
                return "Code: integer expected";
            if (!$util.isString(message.Message))
                return "Message: string expected";
            if (!$util.isInteger(message.CurrentMoney) && !(message.CurrentMoney && $util.isInteger(message.CurrentMoney.low) && $util.isInteger(message.CurrentMoney.high)))
                return "CurrentMoney: integer|Long expected";
            if (!$util.isInteger(message.CurrentBank) && !(message.CurrentBank && $util.isInteger(message.CurrentBank.low) && $util.isInteger(message.CurrentBank.high)))
                return "CurrentBank: integer|Long expected";
            return null;
        };

        /**
         * Creates a MoneyDepositRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.MoneyDepositRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.MoneyDepositRet} MoneyDepositRet
         */
        MoneyDepositRet.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.MoneyDepositRet)
                return object;
            var message = new $root.hall.MoneyDepositRet();
            if (object.Amount != null)
                if ($util.Long)
                    (message.Amount = $util.Long.fromValue(object.Amount)).unsigned = false;
                else if (typeof object.Amount === "string")
                    message.Amount = parseInt(object.Amount, 10);
                else if (typeof object.Amount === "number")
                    message.Amount = object.Amount;
                else if (typeof object.Amount === "object")
                    message.Amount = new $util.LongBits(object.Amount.low >>> 0, object.Amount.high >>> 0).toNumber();
            if (object.OP != null)
                message.OP = object.OP | 0;
            if (object.Code != null)
                message.Code = object.Code | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.CurrentMoney != null)
                if ($util.Long)
                    (message.CurrentMoney = $util.Long.fromValue(object.CurrentMoney)).unsigned = false;
                else if (typeof object.CurrentMoney === "string")
                    message.CurrentMoney = parseInt(object.CurrentMoney, 10);
                else if (typeof object.CurrentMoney === "number")
                    message.CurrentMoney = object.CurrentMoney;
                else if (typeof object.CurrentMoney === "object")
                    message.CurrentMoney = new $util.LongBits(object.CurrentMoney.low >>> 0, object.CurrentMoney.high >>> 0).toNumber();
            if (object.CurrentBank != null)
                if ($util.Long)
                    (message.CurrentBank = $util.Long.fromValue(object.CurrentBank)).unsigned = false;
                else if (typeof object.CurrentBank === "string")
                    message.CurrentBank = parseInt(object.CurrentBank, 10);
                else if (typeof object.CurrentBank === "number")
                    message.CurrentBank = object.CurrentBank;
                else if (typeof object.CurrentBank === "object")
                    message.CurrentBank = new $util.LongBits(object.CurrentBank.low >>> 0, object.CurrentBank.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a MoneyDepositRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.MoneyDepositRet
         * @static
         * @param {hall.MoneyDepositRet} message MoneyDepositRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MoneyDepositRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Amount = options.longs === String ? "0" : 0;
                object.OP = 0;
                object.Code = 0;
                object.Message = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CurrentMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CurrentMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CurrentBank = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CurrentBank = options.longs === String ? "0" : 0;
            }
            if (message.Amount != null && message.hasOwnProperty("Amount"))
                if (typeof message.Amount === "number")
                    object.Amount = options.longs === String ? String(message.Amount) : message.Amount;
                else
                    object.Amount = options.longs === String ? $util.Long.prototype.toString.call(message.Amount) : options.longs === Number ? new $util.LongBits(message.Amount.low >>> 0, message.Amount.high >>> 0).toNumber() : message.Amount;
            if (message.OP != null && message.hasOwnProperty("OP"))
                object.OP = message.OP;
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            if (message.CurrentMoney != null && message.hasOwnProperty("CurrentMoney"))
                if (typeof message.CurrentMoney === "number")
                    object.CurrentMoney = options.longs === String ? String(message.CurrentMoney) : message.CurrentMoney;
                else
                    object.CurrentMoney = options.longs === String ? $util.Long.prototype.toString.call(message.CurrentMoney) : options.longs === Number ? new $util.LongBits(message.CurrentMoney.low >>> 0, message.CurrentMoney.high >>> 0).toNumber() : message.CurrentMoney;
            if (message.CurrentBank != null && message.hasOwnProperty("CurrentBank"))
                if (typeof message.CurrentBank === "number")
                    object.CurrentBank = options.longs === String ? String(message.CurrentBank) : message.CurrentBank;
                else
                    object.CurrentBank = options.longs === String ? $util.Long.prototype.toString.call(message.CurrentBank) : options.longs === Number ? new $util.LongBits(message.CurrentBank.low >>> 0, message.CurrentBank.high >>> 0).toNumber() : message.CurrentBank;
            return object;
        };

        /**
         * Converts this MoneyDepositRet to JSON.
         * @function toJSON
         * @memberof hall.MoneyDepositRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MoneyDepositRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MoneyDepositRet;
    })();

    hall.BindGuestAccount = (function() {

        /**
         * Properties of a BindGuestAccount.
         * @memberof hall
         * @interface IBindGuestAccount
         * @property {string} Tel BindGuestAccount Tel
         * @property {string} VCode BindGuestAccount VCode
         * @property {string} Password BindGuestAccount Password
         */

        /**
         * Constructs a new BindGuestAccount.
         * @memberof hall
         * @classdesc Represents a BindGuestAccount.
         * @implements IBindGuestAccount
         * @constructor
         * @param {hall.IBindGuestAccount=} [properties] Properties to set
         */
        function BindGuestAccount(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BindGuestAccount Tel.
         * @member {string} Tel
         * @memberof hall.BindGuestAccount
         * @instance
         */
        BindGuestAccount.prototype.Tel = "";

        /**
         * BindGuestAccount VCode.
         * @member {string} VCode
         * @memberof hall.BindGuestAccount
         * @instance
         */
        BindGuestAccount.prototype.VCode = "";

        /**
         * BindGuestAccount Password.
         * @member {string} Password
         * @memberof hall.BindGuestAccount
         * @instance
         */
        BindGuestAccount.prototype.Password = "";

        /**
         * Creates a new BindGuestAccount instance using the specified properties.
         * @function create
         * @memberof hall.BindGuestAccount
         * @static
         * @param {hall.IBindGuestAccount=} [properties] Properties to set
         * @returns {hall.BindGuestAccount} BindGuestAccount instance
         */
        BindGuestAccount.create = function create(properties) {
            return new BindGuestAccount(properties);
        };

        /**
         * Encodes the specified BindGuestAccount message. Does not implicitly {@link hall.BindGuestAccount.verify|verify} messages.
         * @function encode
         * @memberof hall.BindGuestAccount
         * @static
         * @param {hall.IBindGuestAccount} message BindGuestAccount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BindGuestAccount.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tel);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.VCode);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.Password);
            return writer;
        };

        /**
         * Encodes the specified BindGuestAccount message, length delimited. Does not implicitly {@link hall.BindGuestAccount.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.BindGuestAccount
         * @static
         * @param {hall.IBindGuestAccount} message BindGuestAccount message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BindGuestAccount.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BindGuestAccount message from the specified reader or buffer.
         * @function decode
         * @memberof hall.BindGuestAccount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.BindGuestAccount} BindGuestAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BindGuestAccount.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.BindGuestAccount();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Tel = reader.string();
                    break;
                case 2:
                    message.VCode = reader.string();
                    break;
                case 3:
                    message.Password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Tel"))
                throw $util.ProtocolError("missing required 'Tel'", { instance: message });
            if (!message.hasOwnProperty("VCode"))
                throw $util.ProtocolError("missing required 'VCode'", { instance: message });
            if (!message.hasOwnProperty("Password"))
                throw $util.ProtocolError("missing required 'Password'", { instance: message });
            return message;
        };

        /**
         * Decodes a BindGuestAccount message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.BindGuestAccount
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.BindGuestAccount} BindGuestAccount
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BindGuestAccount.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BindGuestAccount message.
         * @function verify
         * @memberof hall.BindGuestAccount
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BindGuestAccount.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.Tel))
                return "Tel: string expected";
            if (!$util.isString(message.VCode))
                return "VCode: string expected";
            if (!$util.isString(message.Password))
                return "Password: string expected";
            return null;
        };

        /**
         * Creates a BindGuestAccount message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.BindGuestAccount
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.BindGuestAccount} BindGuestAccount
         */
        BindGuestAccount.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.BindGuestAccount)
                return object;
            var message = new $root.hall.BindGuestAccount();
            if (object.Tel != null)
                message.Tel = String(object.Tel);
            if (object.VCode != null)
                message.VCode = String(object.VCode);
            if (object.Password != null)
                message.Password = String(object.Password);
            return message;
        };

        /**
         * Creates a plain object from a BindGuestAccount message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.BindGuestAccount
         * @static
         * @param {hall.BindGuestAccount} message BindGuestAccount
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BindGuestAccount.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Tel = "";
                object.VCode = "";
                object.Password = "";
            }
            if (message.Tel != null && message.hasOwnProperty("Tel"))
                object.Tel = message.Tel;
            if (message.VCode != null && message.hasOwnProperty("VCode"))
                object.VCode = message.VCode;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            return object;
        };

        /**
         * Converts this BindGuestAccount to JSON.
         * @function toJSON
         * @memberof hall.BindGuestAccount
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BindGuestAccount.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BindGuestAccount;
    })();

    hall.RequestUserHallInfo = (function() {

        /**
         * Properties of a RequestUserHallInfo.
         * @memberof hall
         * @interface IRequestUserHallInfo
         * @property {number} SiteID RequestUserHallInfo SiteID
         */

        /**
         * Constructs a new RequestUserHallInfo.
         * @memberof hall
         * @classdesc Represents a RequestUserHallInfo.
         * @implements IRequestUserHallInfo
         * @constructor
         * @param {hall.IRequestUserHallInfo=} [properties] Properties to set
         */
        function RequestUserHallInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RequestUserHallInfo SiteID.
         * @member {number} SiteID
         * @memberof hall.RequestUserHallInfo
         * @instance
         */
        RequestUserHallInfo.prototype.SiteID = 0;

        /**
         * Creates a new RequestUserHallInfo instance using the specified properties.
         * @function create
         * @memberof hall.RequestUserHallInfo
         * @static
         * @param {hall.IRequestUserHallInfo=} [properties] Properties to set
         * @returns {hall.RequestUserHallInfo} RequestUserHallInfo instance
         */
        RequestUserHallInfo.create = function create(properties) {
            return new RequestUserHallInfo(properties);
        };

        /**
         * Encodes the specified RequestUserHallInfo message. Does not implicitly {@link hall.RequestUserHallInfo.verify|verify} messages.
         * @function encode
         * @memberof hall.RequestUserHallInfo
         * @static
         * @param {hall.IRequestUserHallInfo} message RequestUserHallInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestUserHallInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.SiteID);
            return writer;
        };

        /**
         * Encodes the specified RequestUserHallInfo message, length delimited. Does not implicitly {@link hall.RequestUserHallInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.RequestUserHallInfo
         * @static
         * @param {hall.IRequestUserHallInfo} message RequestUserHallInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestUserHallInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RequestUserHallInfo message from the specified reader or buffer.
         * @function decode
         * @memberof hall.RequestUserHallInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.RequestUserHallInfo} RequestUserHallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestUserHallInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.RequestUserHallInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.SiteID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("SiteID"))
                throw $util.ProtocolError("missing required 'SiteID'", { instance: message });
            return message;
        };

        /**
         * Decodes a RequestUserHallInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.RequestUserHallInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.RequestUserHallInfo} RequestUserHallInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestUserHallInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RequestUserHallInfo message.
         * @function verify
         * @memberof hall.RequestUserHallInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RequestUserHallInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.SiteID))
                return "SiteID: integer expected";
            return null;
        };

        /**
         * Creates a RequestUserHallInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.RequestUserHallInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.RequestUserHallInfo} RequestUserHallInfo
         */
        RequestUserHallInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.RequestUserHallInfo)
                return object;
            var message = new $root.hall.RequestUserHallInfo();
            if (object.SiteID != null)
                message.SiteID = object.SiteID | 0;
            return message;
        };

        /**
         * Creates a plain object from a RequestUserHallInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.RequestUserHallInfo
         * @static
         * @param {hall.RequestUserHallInfo} message RequestUserHallInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RequestUserHallInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.SiteID = 0;
            if (message.SiteID != null && message.hasOwnProperty("SiteID"))
                object.SiteID = message.SiteID;
            return object;
        };

        /**
         * Converts this RequestUserHallInfo to JSON.
         * @function toJSON
         * @memberof hall.RequestUserHallInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequestUserHallInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RequestUserHallInfo;
    })();

    hall.FindSetPwdByPhone = (function() {

        /**
         * Properties of a FindSetPwdByPhone.
         * @memberof hall
         * @interface IFindSetPwdByPhone
         * @property {string} Tel FindSetPwdByPhone Tel
         * @property {string} VCode FindSetPwdByPhone VCode
         * @property {string} Password FindSetPwdByPhone Password
         */

        /**
         * Constructs a new FindSetPwdByPhone.
         * @memberof hall
         * @classdesc Represents a FindSetPwdByPhone.
         * @implements IFindSetPwdByPhone
         * @constructor
         * @param {hall.IFindSetPwdByPhone=} [properties] Properties to set
         */
        function FindSetPwdByPhone(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindSetPwdByPhone Tel.
         * @member {string} Tel
         * @memberof hall.FindSetPwdByPhone
         * @instance
         */
        FindSetPwdByPhone.prototype.Tel = "";

        /**
         * FindSetPwdByPhone VCode.
         * @member {string} VCode
         * @memberof hall.FindSetPwdByPhone
         * @instance
         */
        FindSetPwdByPhone.prototype.VCode = "";

        /**
         * FindSetPwdByPhone Password.
         * @member {string} Password
         * @memberof hall.FindSetPwdByPhone
         * @instance
         */
        FindSetPwdByPhone.prototype.Password = "";

        /**
         * Creates a new FindSetPwdByPhone instance using the specified properties.
         * @function create
         * @memberof hall.FindSetPwdByPhone
         * @static
         * @param {hall.IFindSetPwdByPhone=} [properties] Properties to set
         * @returns {hall.FindSetPwdByPhone} FindSetPwdByPhone instance
         */
        FindSetPwdByPhone.create = function create(properties) {
            return new FindSetPwdByPhone(properties);
        };

        /**
         * Encodes the specified FindSetPwdByPhone message. Does not implicitly {@link hall.FindSetPwdByPhone.verify|verify} messages.
         * @function encode
         * @memberof hall.FindSetPwdByPhone
         * @static
         * @param {hall.IFindSetPwdByPhone} message FindSetPwdByPhone message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindSetPwdByPhone.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tel);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.VCode);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.Password);
            return writer;
        };

        /**
         * Encodes the specified FindSetPwdByPhone message, length delimited. Does not implicitly {@link hall.FindSetPwdByPhone.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.FindSetPwdByPhone
         * @static
         * @param {hall.IFindSetPwdByPhone} message FindSetPwdByPhone message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindSetPwdByPhone.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindSetPwdByPhone message from the specified reader or buffer.
         * @function decode
         * @memberof hall.FindSetPwdByPhone
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.FindSetPwdByPhone} FindSetPwdByPhone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindSetPwdByPhone.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.FindSetPwdByPhone();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Tel = reader.string();
                    break;
                case 2:
                    message.VCode = reader.string();
                    break;
                case 3:
                    message.Password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Tel"))
                throw $util.ProtocolError("missing required 'Tel'", { instance: message });
            if (!message.hasOwnProperty("VCode"))
                throw $util.ProtocolError("missing required 'VCode'", { instance: message });
            if (!message.hasOwnProperty("Password"))
                throw $util.ProtocolError("missing required 'Password'", { instance: message });
            return message;
        };

        /**
         * Decodes a FindSetPwdByPhone message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.FindSetPwdByPhone
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.FindSetPwdByPhone} FindSetPwdByPhone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindSetPwdByPhone.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindSetPwdByPhone message.
         * @function verify
         * @memberof hall.FindSetPwdByPhone
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindSetPwdByPhone.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.Tel))
                return "Tel: string expected";
            if (!$util.isString(message.VCode))
                return "VCode: string expected";
            if (!$util.isString(message.Password))
                return "Password: string expected";
            return null;
        };

        /**
         * Creates a FindSetPwdByPhone message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.FindSetPwdByPhone
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.FindSetPwdByPhone} FindSetPwdByPhone
         */
        FindSetPwdByPhone.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.FindSetPwdByPhone)
                return object;
            var message = new $root.hall.FindSetPwdByPhone();
            if (object.Tel != null)
                message.Tel = String(object.Tel);
            if (object.VCode != null)
                message.VCode = String(object.VCode);
            if (object.Password != null)
                message.Password = String(object.Password);
            return message;
        };

        /**
         * Creates a plain object from a FindSetPwdByPhone message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.FindSetPwdByPhone
         * @static
         * @param {hall.FindSetPwdByPhone} message FindSetPwdByPhone
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindSetPwdByPhone.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Tel = "";
                object.VCode = "";
                object.Password = "";
            }
            if (message.Tel != null && message.hasOwnProperty("Tel"))
                object.Tel = message.Tel;
            if (message.VCode != null && message.hasOwnProperty("VCode"))
                object.VCode = message.VCode;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            return object;
        };

        /**
         * Converts this FindSetPwdByPhone to JSON.
         * @function toJSON
         * @memberof hall.FindSetPwdByPhone
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindSetPwdByPhone.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FindSetPwdByPhone;
    })();

    hall.ModifyBankPassword = (function() {

        /**
         * Properties of a ModifyBankPassword.
         * @memberof hall
         * @interface IModifyBankPassword
         * @property {string} OldPwd ModifyBankPassword OldPwd
         * @property {string} NewPassword ModifyBankPassword NewPassword
         */

        /**
         * Constructs a new ModifyBankPassword.
         * @memberof hall
         * @classdesc Represents a ModifyBankPassword.
         * @implements IModifyBankPassword
         * @constructor
         * @param {hall.IModifyBankPassword=} [properties] Properties to set
         */
        function ModifyBankPassword(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ModifyBankPassword OldPwd.
         * @member {string} OldPwd
         * @memberof hall.ModifyBankPassword
         * @instance
         */
        ModifyBankPassword.prototype.OldPwd = "";

        /**
         * ModifyBankPassword NewPassword.
         * @member {string} NewPassword
         * @memberof hall.ModifyBankPassword
         * @instance
         */
        ModifyBankPassword.prototype.NewPassword = "";

        /**
         * Creates a new ModifyBankPassword instance using the specified properties.
         * @function create
         * @memberof hall.ModifyBankPassword
         * @static
         * @param {hall.IModifyBankPassword=} [properties] Properties to set
         * @returns {hall.ModifyBankPassword} ModifyBankPassword instance
         */
        ModifyBankPassword.create = function create(properties) {
            return new ModifyBankPassword(properties);
        };

        /**
         * Encodes the specified ModifyBankPassword message. Does not implicitly {@link hall.ModifyBankPassword.verify|verify} messages.
         * @function encode
         * @memberof hall.ModifyBankPassword
         * @static
         * @param {hall.IModifyBankPassword} message ModifyBankPassword message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyBankPassword.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.OldPwd);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.NewPassword);
            return writer;
        };

        /**
         * Encodes the specified ModifyBankPassword message, length delimited. Does not implicitly {@link hall.ModifyBankPassword.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.ModifyBankPassword
         * @static
         * @param {hall.IModifyBankPassword} message ModifyBankPassword message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ModifyBankPassword.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ModifyBankPassword message from the specified reader or buffer.
         * @function decode
         * @memberof hall.ModifyBankPassword
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.ModifyBankPassword} ModifyBankPassword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyBankPassword.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.ModifyBankPassword();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.OldPwd = reader.string();
                    break;
                case 2:
                    message.NewPassword = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("OldPwd"))
                throw $util.ProtocolError("missing required 'OldPwd'", { instance: message });
            if (!message.hasOwnProperty("NewPassword"))
                throw $util.ProtocolError("missing required 'NewPassword'", { instance: message });
            return message;
        };

        /**
         * Decodes a ModifyBankPassword message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.ModifyBankPassword
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.ModifyBankPassword} ModifyBankPassword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ModifyBankPassword.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ModifyBankPassword message.
         * @function verify
         * @memberof hall.ModifyBankPassword
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ModifyBankPassword.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.OldPwd))
                return "OldPwd: string expected";
            if (!$util.isString(message.NewPassword))
                return "NewPassword: string expected";
            return null;
        };

        /**
         * Creates a ModifyBankPassword message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.ModifyBankPassword
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.ModifyBankPassword} ModifyBankPassword
         */
        ModifyBankPassword.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.ModifyBankPassword)
                return object;
            var message = new $root.hall.ModifyBankPassword();
            if (object.OldPwd != null)
                message.OldPwd = String(object.OldPwd);
            if (object.NewPassword != null)
                message.NewPassword = String(object.NewPassword);
            return message;
        };

        /**
         * Creates a plain object from a ModifyBankPassword message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.ModifyBankPassword
         * @static
         * @param {hall.ModifyBankPassword} message ModifyBankPassword
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ModifyBankPassword.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.OldPwd = "";
                object.NewPassword = "";
            }
            if (message.OldPwd != null && message.hasOwnProperty("OldPwd"))
                object.OldPwd = message.OldPwd;
            if (message.NewPassword != null && message.hasOwnProperty("NewPassword"))
                object.NewPassword = message.NewPassword;
            return object;
        };

        /**
         * Converts this ModifyBankPassword to JSON.
         * @function toJSON
         * @memberof hall.ModifyBankPassword
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ModifyBankPassword.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ModifyBankPassword;
    })();

    hall.FindSetBankPwdByPhone = (function() {

        /**
         * Properties of a FindSetBankPwdByPhone.
         * @memberof hall
         * @interface IFindSetBankPwdByPhone
         * @property {string} VCode FindSetBankPwdByPhone VCode
         * @property {string} Password FindSetBankPwdByPhone Password
         */

        /**
         * Constructs a new FindSetBankPwdByPhone.
         * @memberof hall
         * @classdesc Represents a FindSetBankPwdByPhone.
         * @implements IFindSetBankPwdByPhone
         * @constructor
         * @param {hall.IFindSetBankPwdByPhone=} [properties] Properties to set
         */
        function FindSetBankPwdByPhone(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FindSetBankPwdByPhone VCode.
         * @member {string} VCode
         * @memberof hall.FindSetBankPwdByPhone
         * @instance
         */
        FindSetBankPwdByPhone.prototype.VCode = "";

        /**
         * FindSetBankPwdByPhone Password.
         * @member {string} Password
         * @memberof hall.FindSetBankPwdByPhone
         * @instance
         */
        FindSetBankPwdByPhone.prototype.Password = "";

        /**
         * Creates a new FindSetBankPwdByPhone instance using the specified properties.
         * @function create
         * @memberof hall.FindSetBankPwdByPhone
         * @static
         * @param {hall.IFindSetBankPwdByPhone=} [properties] Properties to set
         * @returns {hall.FindSetBankPwdByPhone} FindSetBankPwdByPhone instance
         */
        FindSetBankPwdByPhone.create = function create(properties) {
            return new FindSetBankPwdByPhone(properties);
        };

        /**
         * Encodes the specified FindSetBankPwdByPhone message. Does not implicitly {@link hall.FindSetBankPwdByPhone.verify|verify} messages.
         * @function encode
         * @memberof hall.FindSetBankPwdByPhone
         * @static
         * @param {hall.IFindSetBankPwdByPhone} message FindSetBankPwdByPhone message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindSetBankPwdByPhone.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.VCode);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Password);
            return writer;
        };

        /**
         * Encodes the specified FindSetBankPwdByPhone message, length delimited. Does not implicitly {@link hall.FindSetBankPwdByPhone.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.FindSetBankPwdByPhone
         * @static
         * @param {hall.IFindSetBankPwdByPhone} message FindSetBankPwdByPhone message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FindSetBankPwdByPhone.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FindSetBankPwdByPhone message from the specified reader or buffer.
         * @function decode
         * @memberof hall.FindSetBankPwdByPhone
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.FindSetBankPwdByPhone} FindSetBankPwdByPhone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindSetBankPwdByPhone.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.FindSetBankPwdByPhone();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.VCode = reader.string();
                    break;
                case 2:
                    message.Password = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("VCode"))
                throw $util.ProtocolError("missing required 'VCode'", { instance: message });
            if (!message.hasOwnProperty("Password"))
                throw $util.ProtocolError("missing required 'Password'", { instance: message });
            return message;
        };

        /**
         * Decodes a FindSetBankPwdByPhone message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.FindSetBankPwdByPhone
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.FindSetBankPwdByPhone} FindSetBankPwdByPhone
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FindSetBankPwdByPhone.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FindSetBankPwdByPhone message.
         * @function verify
         * @memberof hall.FindSetBankPwdByPhone
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FindSetBankPwdByPhone.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.VCode))
                return "VCode: string expected";
            if (!$util.isString(message.Password))
                return "Password: string expected";
            return null;
        };

        /**
         * Creates a FindSetBankPwdByPhone message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.FindSetBankPwdByPhone
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.FindSetBankPwdByPhone} FindSetBankPwdByPhone
         */
        FindSetBankPwdByPhone.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.FindSetBankPwdByPhone)
                return object;
            var message = new $root.hall.FindSetBankPwdByPhone();
            if (object.VCode != null)
                message.VCode = String(object.VCode);
            if (object.Password != null)
                message.Password = String(object.Password);
            return message;
        };

        /**
         * Creates a plain object from a FindSetBankPwdByPhone message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.FindSetBankPwdByPhone
         * @static
         * @param {hall.FindSetBankPwdByPhone} message FindSetBankPwdByPhone
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FindSetBankPwdByPhone.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.VCode = "";
                object.Password = "";
            }
            if (message.VCode != null && message.hasOwnProperty("VCode"))
                object.VCode = message.VCode;
            if (message.Password != null && message.hasOwnProperty("Password"))
                object.Password = message.Password;
            return object;
        };

        /**
         * Converts this FindSetBankPwdByPhone to JSON.
         * @function toJSON
         * @memberof hall.FindSetBankPwdByPhone
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FindSetBankPwdByPhone.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FindSetBankPwdByPhone;
    })();

    hall.MailDetail = (function() {

        /**
         * Properties of a MailDetail.
         * @memberof hall
         * @interface IMailDetail
         * @property {number} ID MailDetail ID
         * @property {string} Title MailDetail Title
         * @property {string} Content MailDetail Content
         * @property {boolean} IsRead MailDetail IsRead
         * @property {string} SendTime MailDetail SendTime
         * @property {Array.<hall.IMailAnnex>|null} [MailAnnexList] MailDetail MailAnnexList
         * @property {boolean|null} [IsReceive] MailDetail IsReceive
         * @property {number|null} [SendTimeStamp] MailDetail SendTimeStamp
         */

        /**
         * Constructs a new MailDetail.
         * @memberof hall
         * @classdesc Represents a MailDetail.
         * @implements IMailDetail
         * @constructor
         * @param {hall.IMailDetail=} [properties] Properties to set
         */
        function MailDetail(properties) {
            this.MailAnnexList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailDetail ID.
         * @member {number} ID
         * @memberof hall.MailDetail
         * @instance
         */
        MailDetail.prototype.ID = 0;

        /**
         * MailDetail Title.
         * @member {string} Title
         * @memberof hall.MailDetail
         * @instance
         */
        MailDetail.prototype.Title = "";

        /**
         * MailDetail Content.
         * @member {string} Content
         * @memberof hall.MailDetail
         * @instance
         */
        MailDetail.prototype.Content = "";

        /**
         * MailDetail IsRead.
         * @member {boolean} IsRead
         * @memberof hall.MailDetail
         * @instance
         */
        MailDetail.prototype.IsRead = false;

        /**
         * MailDetail SendTime.
         * @member {string} SendTime
         * @memberof hall.MailDetail
         * @instance
         */
        MailDetail.prototype.SendTime = "";

        /**
         * MailDetail MailAnnexList.
         * @member {Array.<hall.IMailAnnex>} MailAnnexList
         * @memberof hall.MailDetail
         * @instance
         */
        MailDetail.prototype.MailAnnexList = $util.emptyArray;

        /**
         * MailDetail IsReceive.
         * @member {boolean} IsReceive
         * @memberof hall.MailDetail
         * @instance
         */
        MailDetail.prototype.IsReceive = false;

        /**
         * MailDetail SendTimeStamp.
         * @member {number} SendTimeStamp
         * @memberof hall.MailDetail
         * @instance
         */
        MailDetail.prototype.SendTimeStamp = 0;

        /**
         * Creates a new MailDetail instance using the specified properties.
         * @function create
         * @memberof hall.MailDetail
         * @static
         * @param {hall.IMailDetail=} [properties] Properties to set
         * @returns {hall.MailDetail} MailDetail instance
         */
        MailDetail.create = function create(properties) {
            return new MailDetail(properties);
        };

        /**
         * Encodes the specified MailDetail message. Does not implicitly {@link hall.MailDetail.verify|verify} messages.
         * @function encode
         * @memberof hall.MailDetail
         * @static
         * @param {hall.IMailDetail} message MailDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Title);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.Content);
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.IsRead);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.SendTime);
            if (message.MailAnnexList != null && message.MailAnnexList.length)
                for (var i = 0; i < message.MailAnnexList.length; ++i)
                    $root.hall.MailAnnex.encode(message.MailAnnexList[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.IsReceive != null && Object.hasOwnProperty.call(message, "IsReceive"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.IsReceive);
            if (message.SendTimeStamp != null && Object.hasOwnProperty.call(message, "SendTimeStamp"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.SendTimeStamp);
            return writer;
        };

        /**
         * Encodes the specified MailDetail message, length delimited. Does not implicitly {@link hall.MailDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.MailDetail
         * @static
         * @param {hall.IMailDetail} message MailDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailDetail message from the specified reader or buffer.
         * @function decode
         * @memberof hall.MailDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.MailDetail} MailDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.MailDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int32();
                    break;
                case 2:
                    message.Title = reader.string();
                    break;
                case 3:
                    message.Content = reader.string();
                    break;
                case 4:
                    message.IsRead = reader.bool();
                    break;
                case 5:
                    message.SendTime = reader.string();
                    break;
                case 6:
                    if (!(message.MailAnnexList && message.MailAnnexList.length))
                        message.MailAnnexList = [];
                    message.MailAnnexList.push($root.hall.MailAnnex.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.IsReceive = reader.bool();
                    break;
                case 8:
                    message.SendTimeStamp = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ID"))
                throw $util.ProtocolError("missing required 'ID'", { instance: message });
            if (!message.hasOwnProperty("Title"))
                throw $util.ProtocolError("missing required 'Title'", { instance: message });
            if (!message.hasOwnProperty("Content"))
                throw $util.ProtocolError("missing required 'Content'", { instance: message });
            if (!message.hasOwnProperty("IsRead"))
                throw $util.ProtocolError("missing required 'IsRead'", { instance: message });
            if (!message.hasOwnProperty("SendTime"))
                throw $util.ProtocolError("missing required 'SendTime'", { instance: message });
            return message;
        };

        /**
         * Decodes a MailDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.MailDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.MailDetail} MailDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailDetail message.
         * @function verify
         * @memberof hall.MailDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ID))
                return "ID: integer expected";
            if (!$util.isString(message.Title))
                return "Title: string expected";
            if (!$util.isString(message.Content))
                return "Content: string expected";
            if (typeof message.IsRead !== "boolean")
                return "IsRead: boolean expected";
            if (!$util.isString(message.SendTime))
                return "SendTime: string expected";
            if (message.MailAnnexList != null && message.hasOwnProperty("MailAnnexList")) {
                if (!Array.isArray(message.MailAnnexList))
                    return "MailAnnexList: array expected";
                for (var i = 0; i < message.MailAnnexList.length; ++i) {
                    var error = $root.hall.MailAnnex.verify(message.MailAnnexList[i]);
                    if (error)
                        return "MailAnnexList." + error;
                }
            }
            if (message.IsReceive != null && message.hasOwnProperty("IsReceive"))
                if (typeof message.IsReceive !== "boolean")
                    return "IsReceive: boolean expected";
            if (message.SendTimeStamp != null && message.hasOwnProperty("SendTimeStamp"))
                if (!$util.isInteger(message.SendTimeStamp))
                    return "SendTimeStamp: integer expected";
            return null;
        };

        /**
         * Creates a MailDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.MailDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.MailDetail} MailDetail
         */
        MailDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.MailDetail)
                return object;
            var message = new $root.hall.MailDetail();
            if (object.ID != null)
                message.ID = object.ID | 0;
            if (object.Title != null)
                message.Title = String(object.Title);
            if (object.Content != null)
                message.Content = String(object.Content);
            if (object.IsRead != null)
                message.IsRead = Boolean(object.IsRead);
            if (object.SendTime != null)
                message.SendTime = String(object.SendTime);
            if (object.MailAnnexList) {
                if (!Array.isArray(object.MailAnnexList))
                    throw TypeError(".hall.MailDetail.MailAnnexList: array expected");
                message.MailAnnexList = [];
                for (var i = 0; i < object.MailAnnexList.length; ++i) {
                    if (typeof object.MailAnnexList[i] !== "object")
                        throw TypeError(".hall.MailDetail.MailAnnexList: object expected");
                    message.MailAnnexList[i] = $root.hall.MailAnnex.fromObject(object.MailAnnexList[i]);
                }
            }
            if (object.IsReceive != null)
                message.IsReceive = Boolean(object.IsReceive);
            if (object.SendTimeStamp != null)
                message.SendTimeStamp = object.SendTimeStamp | 0;
            return message;
        };

        /**
         * Creates a plain object from a MailDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.MailDetail
         * @static
         * @param {hall.MailDetail} message MailDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MailDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.MailAnnexList = [];
            if (options.defaults) {
                object.ID = 0;
                object.Title = "";
                object.Content = "";
                object.IsRead = false;
                object.SendTime = "";
                object.IsReceive = false;
                object.SendTimeStamp = 0;
            }
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.Title != null && message.hasOwnProperty("Title"))
                object.Title = message.Title;
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            if (message.IsRead != null && message.hasOwnProperty("IsRead"))
                object.IsRead = message.IsRead;
            if (message.SendTime != null && message.hasOwnProperty("SendTime"))
                object.SendTime = message.SendTime;
            if (message.MailAnnexList && message.MailAnnexList.length) {
                object.MailAnnexList = [];
                for (var j = 0; j < message.MailAnnexList.length; ++j)
                    object.MailAnnexList[j] = $root.hall.MailAnnex.toObject(message.MailAnnexList[j], options);
            }
            if (message.IsReceive != null && message.hasOwnProperty("IsReceive"))
                object.IsReceive = message.IsReceive;
            if (message.SendTimeStamp != null && message.hasOwnProperty("SendTimeStamp"))
                object.SendTimeStamp = message.SendTimeStamp;
            return object;
        };

        /**
         * Converts this MailDetail to JSON.
         * @function toJSON
         * @memberof hall.MailDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MailDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MailDetail;
    })();

    hall.MailList = (function() {

        /**
         * Properties of a MailList.
         * @memberof hall
         * @interface IMailList
         * @property {Array.<hall.IMailDetail>|null} [MailList] MailList MailList
         */

        /**
         * Constructs a new MailList.
         * @memberof hall
         * @classdesc Represents a MailList.
         * @implements IMailList
         * @constructor
         * @param {hall.IMailList=} [properties] Properties to set
         */
        function MailList(properties) {
            this.MailList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailList MailList.
         * @member {Array.<hall.IMailDetail>} MailList
         * @memberof hall.MailList
         * @instance
         */
        MailList.prototype.MailList = $util.emptyArray;

        /**
         * Creates a new MailList instance using the specified properties.
         * @function create
         * @memberof hall.MailList
         * @static
         * @param {hall.IMailList=} [properties] Properties to set
         * @returns {hall.MailList} MailList instance
         */
        MailList.create = function create(properties) {
            return new MailList(properties);
        };

        /**
         * Encodes the specified MailList message. Does not implicitly {@link hall.MailList.verify|verify} messages.
         * @function encode
         * @memberof hall.MailList
         * @static
         * @param {hall.IMailList} message MailList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.MailList != null && message.MailList.length)
                for (var i = 0; i < message.MailList.length; ++i)
                    $root.hall.MailDetail.encode(message.MailList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified MailList message, length delimited. Does not implicitly {@link hall.MailList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.MailList
         * @static
         * @param {hall.IMailList} message MailList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailList message from the specified reader or buffer.
         * @function decode
         * @memberof hall.MailList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.MailList} MailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.MailList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.MailList && message.MailList.length))
                        message.MailList = [];
                    message.MailList.push($root.hall.MailDetail.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MailList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.MailList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.MailList} MailList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailList message.
         * @function verify
         * @memberof hall.MailList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.MailList != null && message.hasOwnProperty("MailList")) {
                if (!Array.isArray(message.MailList))
                    return "MailList: array expected";
                for (var i = 0; i < message.MailList.length; ++i) {
                    var error = $root.hall.MailDetail.verify(message.MailList[i]);
                    if (error)
                        return "MailList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a MailList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.MailList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.MailList} MailList
         */
        MailList.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.MailList)
                return object;
            var message = new $root.hall.MailList();
            if (object.MailList) {
                if (!Array.isArray(object.MailList))
                    throw TypeError(".hall.MailList.MailList: array expected");
                message.MailList = [];
                for (var i = 0; i < object.MailList.length; ++i) {
                    if (typeof object.MailList[i] !== "object")
                        throw TypeError(".hall.MailList.MailList: object expected");
                    message.MailList[i] = $root.hall.MailDetail.fromObject(object.MailList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a MailList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.MailList
         * @static
         * @param {hall.MailList} message MailList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MailList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.MailList = [];
            if (message.MailList && message.MailList.length) {
                object.MailList = [];
                for (var j = 0; j < message.MailList.length; ++j)
                    object.MailList[j] = $root.hall.MailDetail.toObject(message.MailList[j], options);
            }
            return object;
        };

        /**
         * Converts this MailList to JSON.
         * @function toJSON
         * @memberof hall.MailList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MailList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MailList;
    })();

    hall.RequestMailDetail = (function() {

        /**
         * Properties of a RequestMailDetail.
         * @memberof hall
         * @interface IRequestMailDetail
         * @property {number} ID RequestMailDetail ID
         */

        /**
         * Constructs a new RequestMailDetail.
         * @memberof hall
         * @classdesc Represents a RequestMailDetail.
         * @implements IRequestMailDetail
         * @constructor
         * @param {hall.IRequestMailDetail=} [properties] Properties to set
         */
        function RequestMailDetail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RequestMailDetail ID.
         * @member {number} ID
         * @memberof hall.RequestMailDetail
         * @instance
         */
        RequestMailDetail.prototype.ID = 0;

        /**
         * Creates a new RequestMailDetail instance using the specified properties.
         * @function create
         * @memberof hall.RequestMailDetail
         * @static
         * @param {hall.IRequestMailDetail=} [properties] Properties to set
         * @returns {hall.RequestMailDetail} RequestMailDetail instance
         */
        RequestMailDetail.create = function create(properties) {
            return new RequestMailDetail(properties);
        };

        /**
         * Encodes the specified RequestMailDetail message. Does not implicitly {@link hall.RequestMailDetail.verify|verify} messages.
         * @function encode
         * @memberof hall.RequestMailDetail
         * @static
         * @param {hall.IRequestMailDetail} message RequestMailDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestMailDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ID);
            return writer;
        };

        /**
         * Encodes the specified RequestMailDetail message, length delimited. Does not implicitly {@link hall.RequestMailDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.RequestMailDetail
         * @static
         * @param {hall.IRequestMailDetail} message RequestMailDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestMailDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RequestMailDetail message from the specified reader or buffer.
         * @function decode
         * @memberof hall.RequestMailDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.RequestMailDetail} RequestMailDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestMailDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.RequestMailDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ID"))
                throw $util.ProtocolError("missing required 'ID'", { instance: message });
            return message;
        };

        /**
         * Decodes a RequestMailDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.RequestMailDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.RequestMailDetail} RequestMailDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestMailDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RequestMailDetail message.
         * @function verify
         * @memberof hall.RequestMailDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RequestMailDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ID))
                return "ID: integer expected";
            return null;
        };

        /**
         * Creates a RequestMailDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.RequestMailDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.RequestMailDetail} RequestMailDetail
         */
        RequestMailDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.RequestMailDetail)
                return object;
            var message = new $root.hall.RequestMailDetail();
            if (object.ID != null)
                message.ID = object.ID | 0;
            return message;
        };

        /**
         * Creates a plain object from a RequestMailDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.RequestMailDetail
         * @static
         * @param {hall.RequestMailDetail} message RequestMailDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RequestMailDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.ID = 0;
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            return object;
        };

        /**
         * Converts this RequestMailDetail to JSON.
         * @function toJSON
         * @memberof hall.RequestMailDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequestMailDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RequestMailDetail;
    })();

    hall.ContactService = (function() {

        /**
         * Properties of a ContactService.
         * @memberof hall
         * @interface IContactService
         * @property {string} Msg ContactService Msg
         */

        /**
         * Constructs a new ContactService.
         * @memberof hall
         * @classdesc Represents a ContactService.
         * @implements IContactService
         * @constructor
         * @param {hall.IContactService=} [properties] Properties to set
         */
        function ContactService(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ContactService Msg.
         * @member {string} Msg
         * @memberof hall.ContactService
         * @instance
         */
        ContactService.prototype.Msg = "";

        /**
         * Creates a new ContactService instance using the specified properties.
         * @function create
         * @memberof hall.ContactService
         * @static
         * @param {hall.IContactService=} [properties] Properties to set
         * @returns {hall.ContactService} ContactService instance
         */
        ContactService.create = function create(properties) {
            return new ContactService(properties);
        };

        /**
         * Encodes the specified ContactService message. Does not implicitly {@link hall.ContactService.verify|verify} messages.
         * @function encode
         * @memberof hall.ContactService
         * @static
         * @param {hall.IContactService} message ContactService message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContactService.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Msg);
            return writer;
        };

        /**
         * Encodes the specified ContactService message, length delimited. Does not implicitly {@link hall.ContactService.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.ContactService
         * @static
         * @param {hall.IContactService} message ContactService message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContactService.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ContactService message from the specified reader or buffer.
         * @function decode
         * @memberof hall.ContactService
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.ContactService} ContactService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContactService.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.ContactService();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Msg"))
                throw $util.ProtocolError("missing required 'Msg'", { instance: message });
            return message;
        };

        /**
         * Decodes a ContactService message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.ContactService
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.ContactService} ContactService
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContactService.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ContactService message.
         * @function verify
         * @memberof hall.ContactService
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ContactService.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.Msg))
                return "Msg: string expected";
            return null;
        };

        /**
         * Creates a ContactService message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.ContactService
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.ContactService} ContactService
         */
        ContactService.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.ContactService)
                return object;
            var message = new $root.hall.ContactService();
            if (object.Msg != null)
                message.Msg = String(object.Msg);
            return message;
        };

        /**
         * Creates a plain object from a ContactService message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.ContactService
         * @static
         * @param {hall.ContactService} message ContactService
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ContactService.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Msg = "";
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                object.Msg = message.Msg;
            return object;
        };

        /**
         * Converts this ContactService to JSON.
         * @function toJSON
         * @memberof hall.ContactService
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContactService.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ContactService;
    })();

    hall.AgentDeatil = (function() {

        /**
         * Properties of an AgentDeatil.
         * @memberof hall
         * @interface IAgentDeatil
         * @property {string} Name AgentDeatil Name
         * @property {string} WXNo AgentDeatil WXNo
         * @property {string} QQ AgentDeatil QQ
         */

        /**
         * Constructs a new AgentDeatil.
         * @memberof hall
         * @classdesc Represents an AgentDeatil.
         * @implements IAgentDeatil
         * @constructor
         * @param {hall.IAgentDeatil=} [properties] Properties to set
         */
        function AgentDeatil(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AgentDeatil Name.
         * @member {string} Name
         * @memberof hall.AgentDeatil
         * @instance
         */
        AgentDeatil.prototype.Name = "";

        /**
         * AgentDeatil WXNo.
         * @member {string} WXNo
         * @memberof hall.AgentDeatil
         * @instance
         */
        AgentDeatil.prototype.WXNo = "";

        /**
         * AgentDeatil QQ.
         * @member {string} QQ
         * @memberof hall.AgentDeatil
         * @instance
         */
        AgentDeatil.prototype.QQ = "";

        /**
         * Creates a new AgentDeatil instance using the specified properties.
         * @function create
         * @memberof hall.AgentDeatil
         * @static
         * @param {hall.IAgentDeatil=} [properties] Properties to set
         * @returns {hall.AgentDeatil} AgentDeatil instance
         */
        AgentDeatil.create = function create(properties) {
            return new AgentDeatil(properties);
        };

        /**
         * Encodes the specified AgentDeatil message. Does not implicitly {@link hall.AgentDeatil.verify|verify} messages.
         * @function encode
         * @memberof hall.AgentDeatil
         * @static
         * @param {hall.IAgentDeatil} message AgentDeatil message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AgentDeatil.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.WXNo);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.QQ);
            return writer;
        };

        /**
         * Encodes the specified AgentDeatil message, length delimited. Does not implicitly {@link hall.AgentDeatil.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.AgentDeatil
         * @static
         * @param {hall.IAgentDeatil} message AgentDeatil message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AgentDeatil.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AgentDeatil message from the specified reader or buffer.
         * @function decode
         * @memberof hall.AgentDeatil
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.AgentDeatil} AgentDeatil
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AgentDeatil.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.AgentDeatil();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Name = reader.string();
                    break;
                case 2:
                    message.WXNo = reader.string();
                    break;
                case 3:
                    message.QQ = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Name"))
                throw $util.ProtocolError("missing required 'Name'", { instance: message });
            if (!message.hasOwnProperty("WXNo"))
                throw $util.ProtocolError("missing required 'WXNo'", { instance: message });
            if (!message.hasOwnProperty("QQ"))
                throw $util.ProtocolError("missing required 'QQ'", { instance: message });
            return message;
        };

        /**
         * Decodes an AgentDeatil message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.AgentDeatil
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.AgentDeatil} AgentDeatil
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AgentDeatil.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AgentDeatil message.
         * @function verify
         * @memberof hall.AgentDeatil
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AgentDeatil.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.Name))
                return "Name: string expected";
            if (!$util.isString(message.WXNo))
                return "WXNo: string expected";
            if (!$util.isString(message.QQ))
                return "QQ: string expected";
            return null;
        };

        /**
         * Creates an AgentDeatil message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.AgentDeatil
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.AgentDeatil} AgentDeatil
         */
        AgentDeatil.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.AgentDeatil)
                return object;
            var message = new $root.hall.AgentDeatil();
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.WXNo != null)
                message.WXNo = String(object.WXNo);
            if (object.QQ != null)
                message.QQ = String(object.QQ);
            return message;
        };

        /**
         * Creates a plain object from an AgentDeatil message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.AgentDeatil
         * @static
         * @param {hall.AgentDeatil} message AgentDeatil
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AgentDeatil.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Name = "";
                object.WXNo = "";
                object.QQ = "";
            }
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.WXNo != null && message.hasOwnProperty("WXNo"))
                object.WXNo = message.WXNo;
            if (message.QQ != null && message.hasOwnProperty("QQ"))
                object.QQ = message.QQ;
            return object;
        };

        /**
         * Converts this AgentDeatil to JSON.
         * @function toJSON
         * @memberof hall.AgentDeatil
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AgentDeatil.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AgentDeatil;
    })();

    hall.AgentList = (function() {

        /**
         * Properties of an AgentList.
         * @memberof hall
         * @interface IAgentList
         * @property {Array.<hall.IAgentDeatil>|null} [AgentList] AgentList AgentList
         */

        /**
         * Constructs a new AgentList.
         * @memberof hall
         * @classdesc Represents an AgentList.
         * @implements IAgentList
         * @constructor
         * @param {hall.IAgentList=} [properties] Properties to set
         */
        function AgentList(properties) {
            this.AgentList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AgentList AgentList.
         * @member {Array.<hall.IAgentDeatil>} AgentList
         * @memberof hall.AgentList
         * @instance
         */
        AgentList.prototype.AgentList = $util.emptyArray;

        /**
         * Creates a new AgentList instance using the specified properties.
         * @function create
         * @memberof hall.AgentList
         * @static
         * @param {hall.IAgentList=} [properties] Properties to set
         * @returns {hall.AgentList} AgentList instance
         */
        AgentList.create = function create(properties) {
            return new AgentList(properties);
        };

        /**
         * Encodes the specified AgentList message. Does not implicitly {@link hall.AgentList.verify|verify} messages.
         * @function encode
         * @memberof hall.AgentList
         * @static
         * @param {hall.IAgentList} message AgentList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AgentList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AgentList != null && message.AgentList.length)
                for (var i = 0; i < message.AgentList.length; ++i)
                    $root.hall.AgentDeatil.encode(message.AgentList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AgentList message, length delimited. Does not implicitly {@link hall.AgentList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.AgentList
         * @static
         * @param {hall.IAgentList} message AgentList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AgentList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AgentList message from the specified reader or buffer.
         * @function decode
         * @memberof hall.AgentList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.AgentList} AgentList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AgentList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.AgentList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.AgentList && message.AgentList.length))
                        message.AgentList = [];
                    message.AgentList.push($root.hall.AgentDeatil.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AgentList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.AgentList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.AgentList} AgentList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AgentList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AgentList message.
         * @function verify
         * @memberof hall.AgentList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AgentList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AgentList != null && message.hasOwnProperty("AgentList")) {
                if (!Array.isArray(message.AgentList))
                    return "AgentList: array expected";
                for (var i = 0; i < message.AgentList.length; ++i) {
                    var error = $root.hall.AgentDeatil.verify(message.AgentList[i]);
                    if (error)
                        return "AgentList." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AgentList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.AgentList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.AgentList} AgentList
         */
        AgentList.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.AgentList)
                return object;
            var message = new $root.hall.AgentList();
            if (object.AgentList) {
                if (!Array.isArray(object.AgentList))
                    throw TypeError(".hall.AgentList.AgentList: array expected");
                message.AgentList = [];
                for (var i = 0; i < object.AgentList.length; ++i) {
                    if (typeof object.AgentList[i] !== "object")
                        throw TypeError(".hall.AgentList.AgentList: object expected");
                    message.AgentList[i] = $root.hall.AgentDeatil.fromObject(object.AgentList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AgentList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.AgentList
         * @static
         * @param {hall.AgentList} message AgentList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AgentList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.AgentList = [];
            if (message.AgentList && message.AgentList.length) {
                object.AgentList = [];
                for (var j = 0; j < message.AgentList.length; ++j)
                    object.AgentList[j] = $root.hall.AgentDeatil.toObject(message.AgentList[j], options);
            }
            return object;
        };

        /**
         * Converts this AgentList to JSON.
         * @function toJSON
         * @memberof hall.AgentList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AgentList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AgentList;
    })();

    hall.ReportAgent = (function() {

        /**
         * Properties of a ReportAgent.
         * @memberof hall
         * @interface IReportAgent
         * @property {number} AreaID ReportAgent AreaID
         * @property {string} AgentName ReportAgent AgentName
         * @property {string} Content ReportAgent Content
         */

        /**
         * Constructs a new ReportAgent.
         * @memberof hall
         * @classdesc Represents a ReportAgent.
         * @implements IReportAgent
         * @constructor
         * @param {hall.IReportAgent=} [properties] Properties to set
         */
        function ReportAgent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReportAgent AreaID.
         * @member {number} AreaID
         * @memberof hall.ReportAgent
         * @instance
         */
        ReportAgent.prototype.AreaID = 0;

        /**
         * ReportAgent AgentName.
         * @member {string} AgentName
         * @memberof hall.ReportAgent
         * @instance
         */
        ReportAgent.prototype.AgentName = "";

        /**
         * ReportAgent Content.
         * @member {string} Content
         * @memberof hall.ReportAgent
         * @instance
         */
        ReportAgent.prototype.Content = "";

        /**
         * Creates a new ReportAgent instance using the specified properties.
         * @function create
         * @memberof hall.ReportAgent
         * @static
         * @param {hall.IReportAgent=} [properties] Properties to set
         * @returns {hall.ReportAgent} ReportAgent instance
         */
        ReportAgent.create = function create(properties) {
            return new ReportAgent(properties);
        };

        /**
         * Encodes the specified ReportAgent message. Does not implicitly {@link hall.ReportAgent.verify|verify} messages.
         * @function encode
         * @memberof hall.ReportAgent
         * @static
         * @param {hall.IReportAgent} message ReportAgent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReportAgent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.AreaID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.AgentName);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.Content);
            return writer;
        };

        /**
         * Encodes the specified ReportAgent message, length delimited. Does not implicitly {@link hall.ReportAgent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.ReportAgent
         * @static
         * @param {hall.IReportAgent} message ReportAgent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReportAgent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReportAgent message from the specified reader or buffer.
         * @function decode
         * @memberof hall.ReportAgent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.ReportAgent} ReportAgent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReportAgent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.ReportAgent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AreaID = reader.int32();
                    break;
                case 2:
                    message.AgentName = reader.string();
                    break;
                case 3:
                    message.Content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("AreaID"))
                throw $util.ProtocolError("missing required 'AreaID'", { instance: message });
            if (!message.hasOwnProperty("AgentName"))
                throw $util.ProtocolError("missing required 'AgentName'", { instance: message });
            if (!message.hasOwnProperty("Content"))
                throw $util.ProtocolError("missing required 'Content'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReportAgent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.ReportAgent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.ReportAgent} ReportAgent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReportAgent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReportAgent message.
         * @function verify
         * @memberof hall.ReportAgent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReportAgent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.AreaID))
                return "AreaID: integer expected";
            if (!$util.isString(message.AgentName))
                return "AgentName: string expected";
            if (!$util.isString(message.Content))
                return "Content: string expected";
            return null;
        };

        /**
         * Creates a ReportAgent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.ReportAgent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.ReportAgent} ReportAgent
         */
        ReportAgent.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.ReportAgent)
                return object;
            var message = new $root.hall.ReportAgent();
            if (object.AreaID != null)
                message.AreaID = object.AreaID | 0;
            if (object.AgentName != null)
                message.AgentName = String(object.AgentName);
            if (object.Content != null)
                message.Content = String(object.Content);
            return message;
        };

        /**
         * Creates a plain object from a ReportAgent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.ReportAgent
         * @static
         * @param {hall.ReportAgent} message ReportAgent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReportAgent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.AreaID = 0;
                object.AgentName = "";
                object.Content = "";
            }
            if (message.AreaID != null && message.hasOwnProperty("AreaID"))
                object.AreaID = message.AreaID;
            if (message.AgentName != null && message.hasOwnProperty("AgentName"))
                object.AgentName = message.AgentName;
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            return object;
        };

        /**
         * Converts this ReportAgent to JSON.
         * @function toJSON
         * @memberof hall.ReportAgent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReportAgent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReportAgent;
    })();

    hall.RequestAgentList = (function() {

        /**
         * Properties of a RequestAgentList.
         * @memberof hall
         * @interface IRequestAgentList
         * @property {number} AreaID RequestAgentList AreaID
         */

        /**
         * Constructs a new RequestAgentList.
         * @memberof hall
         * @classdesc Represents a RequestAgentList.
         * @implements IRequestAgentList
         * @constructor
         * @param {hall.IRequestAgentList=} [properties] Properties to set
         */
        function RequestAgentList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RequestAgentList AreaID.
         * @member {number} AreaID
         * @memberof hall.RequestAgentList
         * @instance
         */
        RequestAgentList.prototype.AreaID = 0;

        /**
         * Creates a new RequestAgentList instance using the specified properties.
         * @function create
         * @memberof hall.RequestAgentList
         * @static
         * @param {hall.IRequestAgentList=} [properties] Properties to set
         * @returns {hall.RequestAgentList} RequestAgentList instance
         */
        RequestAgentList.create = function create(properties) {
            return new RequestAgentList(properties);
        };

        /**
         * Encodes the specified RequestAgentList message. Does not implicitly {@link hall.RequestAgentList.verify|verify} messages.
         * @function encode
         * @memberof hall.RequestAgentList
         * @static
         * @param {hall.IRequestAgentList} message RequestAgentList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestAgentList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.AreaID);
            return writer;
        };

        /**
         * Encodes the specified RequestAgentList message, length delimited. Does not implicitly {@link hall.RequestAgentList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.RequestAgentList
         * @static
         * @param {hall.IRequestAgentList} message RequestAgentList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RequestAgentList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RequestAgentList message from the specified reader or buffer.
         * @function decode
         * @memberof hall.RequestAgentList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.RequestAgentList} RequestAgentList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestAgentList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.RequestAgentList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2:
                    message.AreaID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("AreaID"))
                throw $util.ProtocolError("missing required 'AreaID'", { instance: message });
            return message;
        };

        /**
         * Decodes a RequestAgentList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.RequestAgentList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.RequestAgentList} RequestAgentList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RequestAgentList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RequestAgentList message.
         * @function verify
         * @memberof hall.RequestAgentList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RequestAgentList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.AreaID))
                return "AreaID: integer expected";
            return null;
        };

        /**
         * Creates a RequestAgentList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.RequestAgentList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.RequestAgentList} RequestAgentList
         */
        RequestAgentList.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.RequestAgentList)
                return object;
            var message = new $root.hall.RequestAgentList();
            if (object.AreaID != null)
                message.AreaID = object.AreaID | 0;
            return message;
        };

        /**
         * Creates a plain object from a RequestAgentList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.RequestAgentList
         * @static
         * @param {hall.RequestAgentList} message RequestAgentList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RequestAgentList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.AreaID = 0;
            if (message.AreaID != null && message.hasOwnProperty("AreaID"))
                object.AreaID = message.AreaID;
            return object;
        };

        /**
         * Converts this RequestAgentList to JSON.
         * @function toJSON
         * @memberof hall.RequestAgentList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RequestAgentList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RequestAgentList;
    })();

    hall.ApplyAgent = (function() {

        /**
         * Properties of an ApplyAgent.
         * @memberof hall
         * @interface IApplyAgent
         * @property {number} AreaID ApplyAgent AreaID
         * @property {string} Name ApplyAgent Name
         * @property {string} Tel ApplyAgent Tel
         * @property {string} QQ ApplyAgent QQ
         * @property {string} WXNo ApplyAgent WXNo
         * @property {string} Memo ApplyAgent Memo
         */

        /**
         * Constructs a new ApplyAgent.
         * @memberof hall
         * @classdesc Represents an ApplyAgent.
         * @implements IApplyAgent
         * @constructor
         * @param {hall.IApplyAgent=} [properties] Properties to set
         */
        function ApplyAgent(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ApplyAgent AreaID.
         * @member {number} AreaID
         * @memberof hall.ApplyAgent
         * @instance
         */
        ApplyAgent.prototype.AreaID = 0;

        /**
         * ApplyAgent Name.
         * @member {string} Name
         * @memberof hall.ApplyAgent
         * @instance
         */
        ApplyAgent.prototype.Name = "";

        /**
         * ApplyAgent Tel.
         * @member {string} Tel
         * @memberof hall.ApplyAgent
         * @instance
         */
        ApplyAgent.prototype.Tel = "";

        /**
         * ApplyAgent QQ.
         * @member {string} QQ
         * @memberof hall.ApplyAgent
         * @instance
         */
        ApplyAgent.prototype.QQ = "";

        /**
         * ApplyAgent WXNo.
         * @member {string} WXNo
         * @memberof hall.ApplyAgent
         * @instance
         */
        ApplyAgent.prototype.WXNo = "";

        /**
         * ApplyAgent Memo.
         * @member {string} Memo
         * @memberof hall.ApplyAgent
         * @instance
         */
        ApplyAgent.prototype.Memo = "";

        /**
         * Creates a new ApplyAgent instance using the specified properties.
         * @function create
         * @memberof hall.ApplyAgent
         * @static
         * @param {hall.IApplyAgent=} [properties] Properties to set
         * @returns {hall.ApplyAgent} ApplyAgent instance
         */
        ApplyAgent.create = function create(properties) {
            return new ApplyAgent(properties);
        };

        /**
         * Encodes the specified ApplyAgent message. Does not implicitly {@link hall.ApplyAgent.verify|verify} messages.
         * @function encode
         * @memberof hall.ApplyAgent
         * @static
         * @param {hall.IApplyAgent} message ApplyAgent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApplyAgent.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.AreaID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.Tel);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.QQ);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.WXNo);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.Memo);
            return writer;
        };

        /**
         * Encodes the specified ApplyAgent message, length delimited. Does not implicitly {@link hall.ApplyAgent.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.ApplyAgent
         * @static
         * @param {hall.IApplyAgent} message ApplyAgent message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ApplyAgent.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ApplyAgent message from the specified reader or buffer.
         * @function decode
         * @memberof hall.ApplyAgent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.ApplyAgent} ApplyAgent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApplyAgent.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.ApplyAgent();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AreaID = reader.int32();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                case 3:
                    message.Tel = reader.string();
                    break;
                case 4:
                    message.QQ = reader.string();
                    break;
                case 5:
                    message.WXNo = reader.string();
                    break;
                case 6:
                    message.Memo = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("AreaID"))
                throw $util.ProtocolError("missing required 'AreaID'", { instance: message });
            if (!message.hasOwnProperty("Name"))
                throw $util.ProtocolError("missing required 'Name'", { instance: message });
            if (!message.hasOwnProperty("Tel"))
                throw $util.ProtocolError("missing required 'Tel'", { instance: message });
            if (!message.hasOwnProperty("QQ"))
                throw $util.ProtocolError("missing required 'QQ'", { instance: message });
            if (!message.hasOwnProperty("WXNo"))
                throw $util.ProtocolError("missing required 'WXNo'", { instance: message });
            if (!message.hasOwnProperty("Memo"))
                throw $util.ProtocolError("missing required 'Memo'", { instance: message });
            return message;
        };

        /**
         * Decodes an ApplyAgent message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.ApplyAgent
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.ApplyAgent} ApplyAgent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ApplyAgent.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ApplyAgent message.
         * @function verify
         * @memberof hall.ApplyAgent
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ApplyAgent.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.AreaID))
                return "AreaID: integer expected";
            if (!$util.isString(message.Name))
                return "Name: string expected";
            if (!$util.isString(message.Tel))
                return "Tel: string expected";
            if (!$util.isString(message.QQ))
                return "QQ: string expected";
            if (!$util.isString(message.WXNo))
                return "WXNo: string expected";
            if (!$util.isString(message.Memo))
                return "Memo: string expected";
            return null;
        };

        /**
         * Creates an ApplyAgent message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.ApplyAgent
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.ApplyAgent} ApplyAgent
         */
        ApplyAgent.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.ApplyAgent)
                return object;
            var message = new $root.hall.ApplyAgent();
            if (object.AreaID != null)
                message.AreaID = object.AreaID | 0;
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Tel != null)
                message.Tel = String(object.Tel);
            if (object.QQ != null)
                message.QQ = String(object.QQ);
            if (object.WXNo != null)
                message.WXNo = String(object.WXNo);
            if (object.Memo != null)
                message.Memo = String(object.Memo);
            return message;
        };

        /**
         * Creates a plain object from an ApplyAgent message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.ApplyAgent
         * @static
         * @param {hall.ApplyAgent} message ApplyAgent
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ApplyAgent.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.AreaID = 0;
                object.Name = "";
                object.Tel = "";
                object.QQ = "";
                object.WXNo = "";
                object.Memo = "";
            }
            if (message.AreaID != null && message.hasOwnProperty("AreaID"))
                object.AreaID = message.AreaID;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Tel != null && message.hasOwnProperty("Tel"))
                object.Tel = message.Tel;
            if (message.QQ != null && message.hasOwnProperty("QQ"))
                object.QQ = message.QQ;
            if (message.WXNo != null && message.hasOwnProperty("WXNo"))
                object.WXNo = message.WXNo;
            if (message.Memo != null && message.hasOwnProperty("Memo"))
                object.Memo = message.Memo;
            return object;
        };

        /**
         * Converts this ApplyAgent to JSON.
         * @function toJSON
         * @memberof hall.ApplyAgent
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ApplyAgent.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ApplyAgent;
    })();

    hall.ConvertMoney = (function() {

        /**
         * Properties of a ConvertMoney.
         * @memberof hall
         * @interface IConvertMoney
         * @property {number|Long} Amount ConvertMoney Amount
         * @property {number|null} [cvttype] ConvertMoney cvttype
         */

        /**
         * Constructs a new ConvertMoney.
         * @memberof hall
         * @classdesc Represents a ConvertMoney.
         * @implements IConvertMoney
         * @constructor
         * @param {hall.IConvertMoney=} [properties] Properties to set
         */
        function ConvertMoney(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ConvertMoney Amount.
         * @member {number|Long} Amount
         * @memberof hall.ConvertMoney
         * @instance
         */
        ConvertMoney.prototype.Amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * ConvertMoney cvttype.
         * @member {number} cvttype
         * @memberof hall.ConvertMoney
         * @instance
         */
        ConvertMoney.prototype.cvttype = 0;

        /**
         * Creates a new ConvertMoney instance using the specified properties.
         * @function create
         * @memberof hall.ConvertMoney
         * @static
         * @param {hall.IConvertMoney=} [properties] Properties to set
         * @returns {hall.ConvertMoney} ConvertMoney instance
         */
        ConvertMoney.create = function create(properties) {
            return new ConvertMoney(properties);
        };

        /**
         * Encodes the specified ConvertMoney message. Does not implicitly {@link hall.ConvertMoney.verify|verify} messages.
         * @function encode
         * @memberof hall.ConvertMoney
         * @static
         * @param {hall.IConvertMoney} message ConvertMoney message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConvertMoney.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Amount);
            if (message.cvttype != null && Object.hasOwnProperty.call(message, "cvttype"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.cvttype);
            return writer;
        };

        /**
         * Encodes the specified ConvertMoney message, length delimited. Does not implicitly {@link hall.ConvertMoney.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.ConvertMoney
         * @static
         * @param {hall.IConvertMoney} message ConvertMoney message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ConvertMoney.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ConvertMoney message from the specified reader or buffer.
         * @function decode
         * @memberof hall.ConvertMoney
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.ConvertMoney} ConvertMoney
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConvertMoney.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.ConvertMoney();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Amount = reader.int64();
                    break;
                case 2:
                    message.cvttype = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Amount"))
                throw $util.ProtocolError("missing required 'Amount'", { instance: message });
            return message;
        };

        /**
         * Decodes a ConvertMoney message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.ConvertMoney
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.ConvertMoney} ConvertMoney
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ConvertMoney.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ConvertMoney message.
         * @function verify
         * @memberof hall.ConvertMoney
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ConvertMoney.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Amount) && !(message.Amount && $util.isInteger(message.Amount.low) && $util.isInteger(message.Amount.high)))
                return "Amount: integer|Long expected";
            if (message.cvttype != null && message.hasOwnProperty("cvttype"))
                if (!$util.isInteger(message.cvttype))
                    return "cvttype: integer expected";
            return null;
        };

        /**
         * Creates a ConvertMoney message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.ConvertMoney
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.ConvertMoney} ConvertMoney
         */
        ConvertMoney.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.ConvertMoney)
                return object;
            var message = new $root.hall.ConvertMoney();
            if (object.Amount != null)
                if ($util.Long)
                    (message.Amount = $util.Long.fromValue(object.Amount)).unsigned = false;
                else if (typeof object.Amount === "string")
                    message.Amount = parseInt(object.Amount, 10);
                else if (typeof object.Amount === "number")
                    message.Amount = object.Amount;
                else if (typeof object.Amount === "object")
                    message.Amount = new $util.LongBits(object.Amount.low >>> 0, object.Amount.high >>> 0).toNumber();
            if (object.cvttype != null)
                message.cvttype = object.cvttype | 0;
            return message;
        };

        /**
         * Creates a plain object from a ConvertMoney message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.ConvertMoney
         * @static
         * @param {hall.ConvertMoney} message ConvertMoney
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ConvertMoney.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Amount = options.longs === String ? "0" : 0;
                object.cvttype = 0;
            }
            if (message.Amount != null && message.hasOwnProperty("Amount"))
                if (typeof message.Amount === "number")
                    object.Amount = options.longs === String ? String(message.Amount) : message.Amount;
                else
                    object.Amount = options.longs === String ? $util.Long.prototype.toString.call(message.Amount) : options.longs === Number ? new $util.LongBits(message.Amount.low >>> 0, message.Amount.high >>> 0).toNumber() : message.Amount;
            if (message.cvttype != null && message.hasOwnProperty("cvttype"))
                object.cvttype = message.cvttype;
            return object;
        };

        /**
         * Converts this ConvertMoney to JSON.
         * @function toJSON
         * @memberof hall.ConvertMoney
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ConvertMoney.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ConvertMoney;
    })();

    hall.CreatePayOrder = (function() {

        /**
         * Properties of a CreatePayOrder.
         * @memberof hall
         * @interface ICreatePayOrder
         * @property {number} PayTypeID CreatePayOrder PayTypeID
         * @property {number|Long} Amount CreatePayOrder Amount
         */

        /**
         * Constructs a new CreatePayOrder.
         * @memberof hall
         * @classdesc Represents a CreatePayOrder.
         * @implements ICreatePayOrder
         * @constructor
         * @param {hall.ICreatePayOrder=} [properties] Properties to set
         */
        function CreatePayOrder(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreatePayOrder PayTypeID.
         * @member {number} PayTypeID
         * @memberof hall.CreatePayOrder
         * @instance
         */
        CreatePayOrder.prototype.PayTypeID = 0;

        /**
         * CreatePayOrder Amount.
         * @member {number|Long} Amount
         * @memberof hall.CreatePayOrder
         * @instance
         */
        CreatePayOrder.prototype.Amount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new CreatePayOrder instance using the specified properties.
         * @function create
         * @memberof hall.CreatePayOrder
         * @static
         * @param {hall.ICreatePayOrder=} [properties] Properties to set
         * @returns {hall.CreatePayOrder} CreatePayOrder instance
         */
        CreatePayOrder.create = function create(properties) {
            return new CreatePayOrder(properties);
        };

        /**
         * Encodes the specified CreatePayOrder message. Does not implicitly {@link hall.CreatePayOrder.verify|verify} messages.
         * @function encode
         * @memberof hall.CreatePayOrder
         * @static
         * @param {hall.ICreatePayOrder} message CreatePayOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePayOrder.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.PayTypeID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Amount);
            return writer;
        };

        /**
         * Encodes the specified CreatePayOrder message, length delimited. Does not implicitly {@link hall.CreatePayOrder.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.CreatePayOrder
         * @static
         * @param {hall.ICreatePayOrder} message CreatePayOrder message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePayOrder.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreatePayOrder message from the specified reader or buffer.
         * @function decode
         * @memberof hall.CreatePayOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.CreatePayOrder} CreatePayOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePayOrder.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.CreatePayOrder();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.PayTypeID = reader.int32();
                    break;
                case 2:
                    message.Amount = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("PayTypeID"))
                throw $util.ProtocolError("missing required 'PayTypeID'", { instance: message });
            if (!message.hasOwnProperty("Amount"))
                throw $util.ProtocolError("missing required 'Amount'", { instance: message });
            return message;
        };

        /**
         * Decodes a CreatePayOrder message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.CreatePayOrder
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.CreatePayOrder} CreatePayOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePayOrder.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreatePayOrder message.
         * @function verify
         * @memberof hall.CreatePayOrder
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreatePayOrder.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.PayTypeID))
                return "PayTypeID: integer expected";
            if (!$util.isInteger(message.Amount) && !(message.Amount && $util.isInteger(message.Amount.low) && $util.isInteger(message.Amount.high)))
                return "Amount: integer|Long expected";
            return null;
        };

        /**
         * Creates a CreatePayOrder message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.CreatePayOrder
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.CreatePayOrder} CreatePayOrder
         */
        CreatePayOrder.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.CreatePayOrder)
                return object;
            var message = new $root.hall.CreatePayOrder();
            if (object.PayTypeID != null)
                message.PayTypeID = object.PayTypeID | 0;
            if (object.Amount != null)
                if ($util.Long)
                    (message.Amount = $util.Long.fromValue(object.Amount)).unsigned = false;
                else if (typeof object.Amount === "string")
                    message.Amount = parseInt(object.Amount, 10);
                else if (typeof object.Amount === "number")
                    message.Amount = object.Amount;
                else if (typeof object.Amount === "object")
                    message.Amount = new $util.LongBits(object.Amount.low >>> 0, object.Amount.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a CreatePayOrder message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.CreatePayOrder
         * @static
         * @param {hall.CreatePayOrder} message CreatePayOrder
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreatePayOrder.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.PayTypeID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Amount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Amount = options.longs === String ? "0" : 0;
            }
            if (message.PayTypeID != null && message.hasOwnProperty("PayTypeID"))
                object.PayTypeID = message.PayTypeID;
            if (message.Amount != null && message.hasOwnProperty("Amount"))
                if (typeof message.Amount === "number")
                    object.Amount = options.longs === String ? String(message.Amount) : message.Amount;
                else
                    object.Amount = options.longs === String ? $util.Long.prototype.toString.call(message.Amount) : options.longs === Number ? new $util.LongBits(message.Amount.low >>> 0, message.Amount.high >>> 0).toNumber() : message.Amount;
            return object;
        };

        /**
         * Converts this CreatePayOrder to JSON.
         * @function toJSON
         * @memberof hall.CreatePayOrder
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreatePayOrder.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreatePayOrder;
    })();

    hall.CreatePayOrderRet = (function() {

        /**
         * Properties of a CreatePayOrderRet.
         * @memberof hall
         * @interface ICreatePayOrderRet
         * @property {number} code CreatePayOrderRet code
         * @property {string} message CreatePayOrderRet message
         * @property {number} OrderID CreatePayOrderRet OrderID
         */

        /**
         * Constructs a new CreatePayOrderRet.
         * @memberof hall
         * @classdesc Represents a CreatePayOrderRet.
         * @implements ICreatePayOrderRet
         * @constructor
         * @param {hall.ICreatePayOrderRet=} [properties] Properties to set
         */
        function CreatePayOrderRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreatePayOrderRet code.
         * @member {number} code
         * @memberof hall.CreatePayOrderRet
         * @instance
         */
        CreatePayOrderRet.prototype.code = 0;

        /**
         * CreatePayOrderRet message.
         * @member {string} message
         * @memberof hall.CreatePayOrderRet
         * @instance
         */
        CreatePayOrderRet.prototype.message = "";

        /**
         * CreatePayOrderRet OrderID.
         * @member {number} OrderID
         * @memberof hall.CreatePayOrderRet
         * @instance
         */
        CreatePayOrderRet.prototype.OrderID = 0;

        /**
         * Creates a new CreatePayOrderRet instance using the specified properties.
         * @function create
         * @memberof hall.CreatePayOrderRet
         * @static
         * @param {hall.ICreatePayOrderRet=} [properties] Properties to set
         * @returns {hall.CreatePayOrderRet} CreatePayOrderRet instance
         */
        CreatePayOrderRet.create = function create(properties) {
            return new CreatePayOrderRet(properties);
        };

        /**
         * Encodes the specified CreatePayOrderRet message. Does not implicitly {@link hall.CreatePayOrderRet.verify|verify} messages.
         * @function encode
         * @memberof hall.CreatePayOrderRet
         * @static
         * @param {hall.ICreatePayOrderRet} message CreatePayOrderRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePayOrderRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.OrderID);
            return writer;
        };

        /**
         * Encodes the specified CreatePayOrderRet message, length delimited. Does not implicitly {@link hall.CreatePayOrderRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.CreatePayOrderRet
         * @static
         * @param {hall.ICreatePayOrderRet} message CreatePayOrderRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreatePayOrderRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreatePayOrderRet message from the specified reader or buffer.
         * @function decode
         * @memberof hall.CreatePayOrderRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.CreatePayOrderRet} CreatePayOrderRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePayOrderRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.CreatePayOrderRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.int32();
                    break;
                case 2:
                    message.message = reader.string();
                    break;
                case 3:
                    message.OrderID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            if (!message.hasOwnProperty("message"))
                throw $util.ProtocolError("missing required 'message'", { instance: message });
            if (!message.hasOwnProperty("OrderID"))
                throw $util.ProtocolError("missing required 'OrderID'", { instance: message });
            return message;
        };

        /**
         * Decodes a CreatePayOrderRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.CreatePayOrderRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.CreatePayOrderRet} CreatePayOrderRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreatePayOrderRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreatePayOrderRet message.
         * @function verify
         * @memberof hall.CreatePayOrderRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreatePayOrderRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.code))
                return "code: integer expected";
            if (!$util.isString(message.message))
                return "message: string expected";
            if (!$util.isInteger(message.OrderID))
                return "OrderID: integer expected";
            return null;
        };

        /**
         * Creates a CreatePayOrderRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.CreatePayOrderRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.CreatePayOrderRet} CreatePayOrderRet
         */
        CreatePayOrderRet.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.CreatePayOrderRet)
                return object;
            var message = new $root.hall.CreatePayOrderRet();
            if (object.code != null)
                message.code = object.code | 0;
            if (object.message != null)
                message.message = String(object.message);
            if (object.OrderID != null)
                message.OrderID = object.OrderID | 0;
            return message;
        };

        /**
         * Creates a plain object from a CreatePayOrderRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.CreatePayOrderRet
         * @static
         * @param {hall.CreatePayOrderRet} message CreatePayOrderRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreatePayOrderRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.code = 0;
                object.message = "";
                object.OrderID = 0;
            }
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            if (message.message != null && message.hasOwnProperty("message"))
                object.message = message.message;
            if (message.OrderID != null && message.hasOwnProperty("OrderID"))
                object.OrderID = message.OrderID;
            return object;
        };

        /**
         * Converts this CreatePayOrderRet to JSON.
         * @function toJSON
         * @memberof hall.CreatePayOrderRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreatePayOrderRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreatePayOrderRet;
    })();

    hall.GetFAQ = (function() {

        /**
         * Properties of a GetFAQ.
         * @memberof hall
         * @interface IGetFAQ
         * @property {number} PlatformID GetFAQ PlatformID
         */

        /**
         * Constructs a new GetFAQ.
         * @memberof hall
         * @classdesc Represents a GetFAQ.
         * @implements IGetFAQ
         * @constructor
         * @param {hall.IGetFAQ=} [properties] Properties to set
         */
        function GetFAQ(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetFAQ PlatformID.
         * @member {number} PlatformID
         * @memberof hall.GetFAQ
         * @instance
         */
        GetFAQ.prototype.PlatformID = 0;

        /**
         * Creates a new GetFAQ instance using the specified properties.
         * @function create
         * @memberof hall.GetFAQ
         * @static
         * @param {hall.IGetFAQ=} [properties] Properties to set
         * @returns {hall.GetFAQ} GetFAQ instance
         */
        GetFAQ.create = function create(properties) {
            return new GetFAQ(properties);
        };

        /**
         * Encodes the specified GetFAQ message. Does not implicitly {@link hall.GetFAQ.verify|verify} messages.
         * @function encode
         * @memberof hall.GetFAQ
         * @static
         * @param {hall.IGetFAQ} message GetFAQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFAQ.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.PlatformID);
            return writer;
        };

        /**
         * Encodes the specified GetFAQ message, length delimited. Does not implicitly {@link hall.GetFAQ.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.GetFAQ
         * @static
         * @param {hall.IGetFAQ} message GetFAQ message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetFAQ.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetFAQ message from the specified reader or buffer.
         * @function decode
         * @memberof hall.GetFAQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.GetFAQ} GetFAQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFAQ.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.GetFAQ();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.PlatformID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("PlatformID"))
                throw $util.ProtocolError("missing required 'PlatformID'", { instance: message });
            return message;
        };

        /**
         * Decodes a GetFAQ message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.GetFAQ
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.GetFAQ} GetFAQ
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetFAQ.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetFAQ message.
         * @function verify
         * @memberof hall.GetFAQ
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetFAQ.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.PlatformID))
                return "PlatformID: integer expected";
            return null;
        };

        /**
         * Creates a GetFAQ message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.GetFAQ
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.GetFAQ} GetFAQ
         */
        GetFAQ.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.GetFAQ)
                return object;
            var message = new $root.hall.GetFAQ();
            if (object.PlatformID != null)
                message.PlatformID = object.PlatformID | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetFAQ message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.GetFAQ
         * @static
         * @param {hall.GetFAQ} message GetFAQ
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetFAQ.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.PlatformID = 0;
            if (message.PlatformID != null && message.hasOwnProperty("PlatformID"))
                object.PlatformID = message.PlatformID;
            return object;
        };

        /**
         * Converts this GetFAQ to JSON.
         * @function toJSON
         * @memberof hall.GetFAQ
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetFAQ.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetFAQ;
    })();

    hall.FAQDetail = (function() {

        /**
         * Properties of a FAQDetail.
         * @memberof hall
         * @interface IFAQDetail
         * @property {string} Content FAQDetail Content
         */

        /**
         * Constructs a new FAQDetail.
         * @memberof hall
         * @classdesc Represents a FAQDetail.
         * @implements IFAQDetail
         * @constructor
         * @param {hall.IFAQDetail=} [properties] Properties to set
         */
        function FAQDetail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * FAQDetail Content.
         * @member {string} Content
         * @memberof hall.FAQDetail
         * @instance
         */
        FAQDetail.prototype.Content = "";

        /**
         * Creates a new FAQDetail instance using the specified properties.
         * @function create
         * @memberof hall.FAQDetail
         * @static
         * @param {hall.IFAQDetail=} [properties] Properties to set
         * @returns {hall.FAQDetail} FAQDetail instance
         */
        FAQDetail.create = function create(properties) {
            return new FAQDetail(properties);
        };

        /**
         * Encodes the specified FAQDetail message. Does not implicitly {@link hall.FAQDetail.verify|verify} messages.
         * @function encode
         * @memberof hall.FAQDetail
         * @static
         * @param {hall.IFAQDetail} message FAQDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FAQDetail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Content);
            return writer;
        };

        /**
         * Encodes the specified FAQDetail message, length delimited. Does not implicitly {@link hall.FAQDetail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.FAQDetail
         * @static
         * @param {hall.IFAQDetail} message FAQDetail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FAQDetail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FAQDetail message from the specified reader or buffer.
         * @function decode
         * @memberof hall.FAQDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.FAQDetail} FAQDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FAQDetail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.FAQDetail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Content"))
                throw $util.ProtocolError("missing required 'Content'", { instance: message });
            return message;
        };

        /**
         * Decodes a FAQDetail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.FAQDetail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.FAQDetail} FAQDetail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FAQDetail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FAQDetail message.
         * @function verify
         * @memberof hall.FAQDetail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FAQDetail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.Content))
                return "Content: string expected";
            return null;
        };

        /**
         * Creates a FAQDetail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.FAQDetail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.FAQDetail} FAQDetail
         */
        FAQDetail.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.FAQDetail)
                return object;
            var message = new $root.hall.FAQDetail();
            if (object.Content != null)
                message.Content = String(object.Content);
            return message;
        };

        /**
         * Creates a plain object from a FAQDetail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.FAQDetail
         * @static
         * @param {hall.FAQDetail} message FAQDetail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FAQDetail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Content = "";
            if (message.Content != null && message.hasOwnProperty("Content"))
                object.Content = message.Content;
            return object;
        };

        /**
         * Converts this FAQDetail to JSON.
         * @function toJSON
         * @memberof hall.FAQDetail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FAQDetail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return FAQDetail;
    })();

    hall.BankCardInfo = (function() {

        /**
         * Properties of a BankCardInfo.
         * @memberof hall
         * @interface IBankCardInfo
         * @property {string} BankCardNumber BankCardInfo BankCardNumber
         * @property {string} BankCardName BankCardInfo BankCardName
         * @property {string|null} [BankName] BankCardInfo BankName
         * @property {number|null} [NeedVcode] BankCardInfo NeedVcode
         * @property {string|null} [Vcode] BankCardInfo Vcode
         */

        /**
         * Constructs a new BankCardInfo.
         * @memberof hall
         * @classdesc Represents a BankCardInfo.
         * @implements IBankCardInfo
         * @constructor
         * @param {hall.IBankCardInfo=} [properties] Properties to set
         */
        function BankCardInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BankCardInfo BankCardNumber.
         * @member {string} BankCardNumber
         * @memberof hall.BankCardInfo
         * @instance
         */
        BankCardInfo.prototype.BankCardNumber = "";

        /**
         * BankCardInfo BankCardName.
         * @member {string} BankCardName
         * @memberof hall.BankCardInfo
         * @instance
         */
        BankCardInfo.prototype.BankCardName = "";

        /**
         * BankCardInfo BankName.
         * @member {string} BankName
         * @memberof hall.BankCardInfo
         * @instance
         */
        BankCardInfo.prototype.BankName = "";

        /**
         * BankCardInfo NeedVcode.
         * @member {number} NeedVcode
         * @memberof hall.BankCardInfo
         * @instance
         */
        BankCardInfo.prototype.NeedVcode = 0;

        /**
         * BankCardInfo Vcode.
         * @member {string} Vcode
         * @memberof hall.BankCardInfo
         * @instance
         */
        BankCardInfo.prototype.Vcode = "";

        /**
         * Creates a new BankCardInfo instance using the specified properties.
         * @function create
         * @memberof hall.BankCardInfo
         * @static
         * @param {hall.IBankCardInfo=} [properties] Properties to set
         * @returns {hall.BankCardInfo} BankCardInfo instance
         */
        BankCardInfo.create = function create(properties) {
            return new BankCardInfo(properties);
        };

        /**
         * Encodes the specified BankCardInfo message. Does not implicitly {@link hall.BankCardInfo.verify|verify} messages.
         * @function encode
         * @memberof hall.BankCardInfo
         * @static
         * @param {hall.IBankCardInfo} message BankCardInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BankCardInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.BankCardNumber);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.BankCardName);
            if (message.BankName != null && Object.hasOwnProperty.call(message, "BankName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.BankName);
            if (message.NeedVcode != null && Object.hasOwnProperty.call(message, "NeedVcode"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.NeedVcode);
            if (message.Vcode != null && Object.hasOwnProperty.call(message, "Vcode"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Vcode);
            return writer;
        };

        /**
         * Encodes the specified BankCardInfo message, length delimited. Does not implicitly {@link hall.BankCardInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.BankCardInfo
         * @static
         * @param {hall.IBankCardInfo} message BankCardInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BankCardInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BankCardInfo message from the specified reader or buffer.
         * @function decode
         * @memberof hall.BankCardInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.BankCardInfo} BankCardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BankCardInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.BankCardInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.BankCardNumber = reader.string();
                    break;
                case 2:
                    message.BankCardName = reader.string();
                    break;
                case 3:
                    message.BankName = reader.string();
                    break;
                case 4:
                    message.NeedVcode = reader.int32();
                    break;
                case 5:
                    message.Vcode = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("BankCardNumber"))
                throw $util.ProtocolError("missing required 'BankCardNumber'", { instance: message });
            if (!message.hasOwnProperty("BankCardName"))
                throw $util.ProtocolError("missing required 'BankCardName'", { instance: message });
            return message;
        };

        /**
         * Decodes a BankCardInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.BankCardInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.BankCardInfo} BankCardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BankCardInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BankCardInfo message.
         * @function verify
         * @memberof hall.BankCardInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BankCardInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.BankCardNumber))
                return "BankCardNumber: string expected";
            if (!$util.isString(message.BankCardName))
                return "BankCardName: string expected";
            if (message.BankName != null && message.hasOwnProperty("BankName"))
                if (!$util.isString(message.BankName))
                    return "BankName: string expected";
            if (message.NeedVcode != null && message.hasOwnProperty("NeedVcode"))
                if (!$util.isInteger(message.NeedVcode))
                    return "NeedVcode: integer expected";
            if (message.Vcode != null && message.hasOwnProperty("Vcode"))
                if (!$util.isString(message.Vcode))
                    return "Vcode: string expected";
            return null;
        };

        /**
         * Creates a BankCardInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.BankCardInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.BankCardInfo} BankCardInfo
         */
        BankCardInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.BankCardInfo)
                return object;
            var message = new $root.hall.BankCardInfo();
            if (object.BankCardNumber != null)
                message.BankCardNumber = String(object.BankCardNumber);
            if (object.BankCardName != null)
                message.BankCardName = String(object.BankCardName);
            if (object.BankName != null)
                message.BankName = String(object.BankName);
            if (object.NeedVcode != null)
                message.NeedVcode = object.NeedVcode | 0;
            if (object.Vcode != null)
                message.Vcode = String(object.Vcode);
            return message;
        };

        /**
         * Creates a plain object from a BankCardInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.BankCardInfo
         * @static
         * @param {hall.BankCardInfo} message BankCardInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BankCardInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.BankCardNumber = "";
                object.BankCardName = "";
                object.BankName = "";
                object.NeedVcode = 0;
                object.Vcode = "";
            }
            if (message.BankCardNumber != null && message.hasOwnProperty("BankCardNumber"))
                object.BankCardNumber = message.BankCardNumber;
            if (message.BankCardName != null && message.hasOwnProperty("BankCardName"))
                object.BankCardName = message.BankCardName;
            if (message.BankName != null && message.hasOwnProperty("BankName"))
                object.BankName = message.BankName;
            if (message.NeedVcode != null && message.hasOwnProperty("NeedVcode"))
                object.NeedVcode = message.NeedVcode;
            if (message.Vcode != null && message.hasOwnProperty("Vcode"))
                object.Vcode = message.Vcode;
            return object;
        };

        /**
         * Converts this BankCardInfo to JSON.
         * @function toJSON
         * @memberof hall.BankCardInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BankCardInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BankCardInfo;
    })();

    hall.UnbindConvertType = (function() {

        /**
         * Properties of an UnbindConvertType.
         * @memberof hall
         * @interface IUnbindConvertType
         * @property {string} Tel UnbindConvertType Tel
         * @property {string} VCode UnbindConvertType VCode
         * @property {number} cvttype UnbindConvertType cvttype
         */

        /**
         * Constructs a new UnbindConvertType.
         * @memberof hall
         * @classdesc Represents an UnbindConvertType.
         * @implements IUnbindConvertType
         * @constructor
         * @param {hall.IUnbindConvertType=} [properties] Properties to set
         */
        function UnbindConvertType(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UnbindConvertType Tel.
         * @member {string} Tel
         * @memberof hall.UnbindConvertType
         * @instance
         */
        UnbindConvertType.prototype.Tel = "";

        /**
         * UnbindConvertType VCode.
         * @member {string} VCode
         * @memberof hall.UnbindConvertType
         * @instance
         */
        UnbindConvertType.prototype.VCode = "";

        /**
         * UnbindConvertType cvttype.
         * @member {number} cvttype
         * @memberof hall.UnbindConvertType
         * @instance
         */
        UnbindConvertType.prototype.cvttype = 0;

        /**
         * Creates a new UnbindConvertType instance using the specified properties.
         * @function create
         * @memberof hall.UnbindConvertType
         * @static
         * @param {hall.IUnbindConvertType=} [properties] Properties to set
         * @returns {hall.UnbindConvertType} UnbindConvertType instance
         */
        UnbindConvertType.create = function create(properties) {
            return new UnbindConvertType(properties);
        };

        /**
         * Encodes the specified UnbindConvertType message. Does not implicitly {@link hall.UnbindConvertType.verify|verify} messages.
         * @function encode
         * @memberof hall.UnbindConvertType
         * @static
         * @param {hall.IUnbindConvertType} message UnbindConvertType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnbindConvertType.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tel);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.VCode);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.cvttype);
            return writer;
        };

        /**
         * Encodes the specified UnbindConvertType message, length delimited. Does not implicitly {@link hall.UnbindConvertType.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.UnbindConvertType
         * @static
         * @param {hall.IUnbindConvertType} message UnbindConvertType message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UnbindConvertType.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UnbindConvertType message from the specified reader or buffer.
         * @function decode
         * @memberof hall.UnbindConvertType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.UnbindConvertType} UnbindConvertType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnbindConvertType.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.UnbindConvertType();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Tel = reader.string();
                    break;
                case 2:
                    message.VCode = reader.string();
                    break;
                case 3:
                    message.cvttype = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Tel"))
                throw $util.ProtocolError("missing required 'Tel'", { instance: message });
            if (!message.hasOwnProperty("VCode"))
                throw $util.ProtocolError("missing required 'VCode'", { instance: message });
            if (!message.hasOwnProperty("cvttype"))
                throw $util.ProtocolError("missing required 'cvttype'", { instance: message });
            return message;
        };

        /**
         * Decodes an UnbindConvertType message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.UnbindConvertType
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.UnbindConvertType} UnbindConvertType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UnbindConvertType.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UnbindConvertType message.
         * @function verify
         * @memberof hall.UnbindConvertType
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UnbindConvertType.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.Tel))
                return "Tel: string expected";
            if (!$util.isString(message.VCode))
                return "VCode: string expected";
            if (!$util.isInteger(message.cvttype))
                return "cvttype: integer expected";
            return null;
        };

        /**
         * Creates an UnbindConvertType message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.UnbindConvertType
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.UnbindConvertType} UnbindConvertType
         */
        UnbindConvertType.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.UnbindConvertType)
                return object;
            var message = new $root.hall.UnbindConvertType();
            if (object.Tel != null)
                message.Tel = String(object.Tel);
            if (object.VCode != null)
                message.VCode = String(object.VCode);
            if (object.cvttype != null)
                message.cvttype = object.cvttype | 0;
            return message;
        };

        /**
         * Creates a plain object from an UnbindConvertType message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.UnbindConvertType
         * @static
         * @param {hall.UnbindConvertType} message UnbindConvertType
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UnbindConvertType.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Tel = "";
                object.VCode = "";
                object.cvttype = 0;
            }
            if (message.Tel != null && message.hasOwnProperty("Tel"))
                object.Tel = message.Tel;
            if (message.VCode != null && message.hasOwnProperty("VCode"))
                object.VCode = message.VCode;
            if (message.cvttype != null && message.hasOwnProperty("cvttype"))
                object.cvttype = message.cvttype;
            return object;
        };

        /**
         * Converts this UnbindConvertType to JSON.
         * @function toJSON
         * @memberof hall.UnbindConvertType
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UnbindConvertType.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UnbindConvertType;
    })();

    hall.ThirdAPIParam = (function() {

        /**
         * Properties of a ThirdAPIParam.
         * @memberof hall
         * @interface IThirdAPIParam
         * @property {string} Name ThirdAPIParam Name
         * @property {string} Value ThirdAPIParam Value
         */

        /**
         * Constructs a new ThirdAPIParam.
         * @memberof hall
         * @classdesc Represents a ThirdAPIParam.
         * @implements IThirdAPIParam
         * @constructor
         * @param {hall.IThirdAPIParam=} [properties] Properties to set
         */
        function ThirdAPIParam(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ThirdAPIParam Name.
         * @member {string} Name
         * @memberof hall.ThirdAPIParam
         * @instance
         */
        ThirdAPIParam.prototype.Name = "";

        /**
         * ThirdAPIParam Value.
         * @member {string} Value
         * @memberof hall.ThirdAPIParam
         * @instance
         */
        ThirdAPIParam.prototype.Value = "";

        /**
         * Creates a new ThirdAPIParam instance using the specified properties.
         * @function create
         * @memberof hall.ThirdAPIParam
         * @static
         * @param {hall.IThirdAPIParam=} [properties] Properties to set
         * @returns {hall.ThirdAPIParam} ThirdAPIParam instance
         */
        ThirdAPIParam.create = function create(properties) {
            return new ThirdAPIParam(properties);
        };

        /**
         * Encodes the specified ThirdAPIParam message. Does not implicitly {@link hall.ThirdAPIParam.verify|verify} messages.
         * @function encode
         * @memberof hall.ThirdAPIParam
         * @static
         * @param {hall.IThirdAPIParam} message ThirdAPIParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ThirdAPIParam.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Value);
            return writer;
        };

        /**
         * Encodes the specified ThirdAPIParam message, length delimited. Does not implicitly {@link hall.ThirdAPIParam.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.ThirdAPIParam
         * @static
         * @param {hall.IThirdAPIParam} message ThirdAPIParam message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ThirdAPIParam.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ThirdAPIParam message from the specified reader or buffer.
         * @function decode
         * @memberof hall.ThirdAPIParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.ThirdAPIParam} ThirdAPIParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ThirdAPIParam.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.ThirdAPIParam();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Name = reader.string();
                    break;
                case 2:
                    message.Value = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Name"))
                throw $util.ProtocolError("missing required 'Name'", { instance: message });
            if (!message.hasOwnProperty("Value"))
                throw $util.ProtocolError("missing required 'Value'", { instance: message });
            return message;
        };

        /**
         * Decodes a ThirdAPIParam message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.ThirdAPIParam
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.ThirdAPIParam} ThirdAPIParam
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ThirdAPIParam.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ThirdAPIParam message.
         * @function verify
         * @memberof hall.ThirdAPIParam
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ThirdAPIParam.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.Name))
                return "Name: string expected";
            if (!$util.isString(message.Value))
                return "Value: string expected";
            return null;
        };

        /**
         * Creates a ThirdAPIParam message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.ThirdAPIParam
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.ThirdAPIParam} ThirdAPIParam
         */
        ThirdAPIParam.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.ThirdAPIParam)
                return object;
            var message = new $root.hall.ThirdAPIParam();
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Value != null)
                message.Value = String(object.Value);
            return message;
        };

        /**
         * Creates a plain object from a ThirdAPIParam message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.ThirdAPIParam
         * @static
         * @param {hall.ThirdAPIParam} message ThirdAPIParam
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ThirdAPIParam.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Name = "";
                object.Value = "";
            }
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Value != null && message.hasOwnProperty("Value"))
                object.Value = message.Value;
            return object;
        };

        /**
         * Converts this ThirdAPIParam to JSON.
         * @function toJSON
         * @memberof hall.ThirdAPIParam
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ThirdAPIParam.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ThirdAPIParam;
    })();

    hall.ThirdAPIReq = (function() {

        /**
         * Properties of a ThirdAPIReq.
         * @memberof hall
         * @interface IThirdAPIReq
         * @property {Array.<string>|null} [ReqNames] ThirdAPIReq ReqNames
         * @property {Array.<hall.IThirdAPIParam>|null} [Params] ThirdAPIReq Params
         */

        /**
         * Constructs a new ThirdAPIReq.
         * @memberof hall
         * @classdesc Represents a ThirdAPIReq.
         * @implements IThirdAPIReq
         * @constructor
         * @param {hall.IThirdAPIReq=} [properties] Properties to set
         */
        function ThirdAPIReq(properties) {
            this.ReqNames = [];
            this.Params = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ThirdAPIReq ReqNames.
         * @member {Array.<string>} ReqNames
         * @memberof hall.ThirdAPIReq
         * @instance
         */
        ThirdAPIReq.prototype.ReqNames = $util.emptyArray;

        /**
         * ThirdAPIReq Params.
         * @member {Array.<hall.IThirdAPIParam>} Params
         * @memberof hall.ThirdAPIReq
         * @instance
         */
        ThirdAPIReq.prototype.Params = $util.emptyArray;

        /**
         * Creates a new ThirdAPIReq instance using the specified properties.
         * @function create
         * @memberof hall.ThirdAPIReq
         * @static
         * @param {hall.IThirdAPIReq=} [properties] Properties to set
         * @returns {hall.ThirdAPIReq} ThirdAPIReq instance
         */
        ThirdAPIReq.create = function create(properties) {
            return new ThirdAPIReq(properties);
        };

        /**
         * Encodes the specified ThirdAPIReq message. Does not implicitly {@link hall.ThirdAPIReq.verify|verify} messages.
         * @function encode
         * @memberof hall.ThirdAPIReq
         * @static
         * @param {hall.IThirdAPIReq} message ThirdAPIReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ThirdAPIReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ReqNames != null && message.ReqNames.length)
                for (var i = 0; i < message.ReqNames.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.ReqNames[i]);
            if (message.Params != null && message.Params.length)
                for (var i = 0; i < message.Params.length; ++i)
                    $root.hall.ThirdAPIParam.encode(message.Params[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ThirdAPIReq message, length delimited. Does not implicitly {@link hall.ThirdAPIReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.ThirdAPIReq
         * @static
         * @param {hall.IThirdAPIReq} message ThirdAPIReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ThirdAPIReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ThirdAPIReq message from the specified reader or buffer.
         * @function decode
         * @memberof hall.ThirdAPIReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.ThirdAPIReq} ThirdAPIReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ThirdAPIReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.ThirdAPIReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.ReqNames && message.ReqNames.length))
                        message.ReqNames = [];
                    message.ReqNames.push(reader.string());
                    break;
                case 2:
                    if (!(message.Params && message.Params.length))
                        message.Params = [];
                    message.Params.push($root.hall.ThirdAPIParam.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ThirdAPIReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.ThirdAPIReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.ThirdAPIReq} ThirdAPIReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ThirdAPIReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ThirdAPIReq message.
         * @function verify
         * @memberof hall.ThirdAPIReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ThirdAPIReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ReqNames != null && message.hasOwnProperty("ReqNames")) {
                if (!Array.isArray(message.ReqNames))
                    return "ReqNames: array expected";
                for (var i = 0; i < message.ReqNames.length; ++i)
                    if (!$util.isString(message.ReqNames[i]))
                        return "ReqNames: string[] expected";
            }
            if (message.Params != null && message.hasOwnProperty("Params")) {
                if (!Array.isArray(message.Params))
                    return "Params: array expected";
                for (var i = 0; i < message.Params.length; ++i) {
                    var error = $root.hall.ThirdAPIParam.verify(message.Params[i]);
                    if (error)
                        return "Params." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ThirdAPIReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.ThirdAPIReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.ThirdAPIReq} ThirdAPIReq
         */
        ThirdAPIReq.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.ThirdAPIReq)
                return object;
            var message = new $root.hall.ThirdAPIReq();
            if (object.ReqNames) {
                if (!Array.isArray(object.ReqNames))
                    throw TypeError(".hall.ThirdAPIReq.ReqNames: array expected");
                message.ReqNames = [];
                for (var i = 0; i < object.ReqNames.length; ++i)
                    message.ReqNames[i] = String(object.ReqNames[i]);
            }
            if (object.Params) {
                if (!Array.isArray(object.Params))
                    throw TypeError(".hall.ThirdAPIReq.Params: array expected");
                message.Params = [];
                for (var i = 0; i < object.Params.length; ++i) {
                    if (typeof object.Params[i] !== "object")
                        throw TypeError(".hall.ThirdAPIReq.Params: object expected");
                    message.Params[i] = $root.hall.ThirdAPIParam.fromObject(object.Params[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ThirdAPIReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.ThirdAPIReq
         * @static
         * @param {hall.ThirdAPIReq} message ThirdAPIReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ThirdAPIReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.ReqNames = [];
                object.Params = [];
            }
            if (message.ReqNames && message.ReqNames.length) {
                object.ReqNames = [];
                for (var j = 0; j < message.ReqNames.length; ++j)
                    object.ReqNames[j] = message.ReqNames[j];
            }
            if (message.Params && message.Params.length) {
                object.Params = [];
                for (var j = 0; j < message.Params.length; ++j)
                    object.Params[j] = $root.hall.ThirdAPIParam.toObject(message.Params[j], options);
            }
            return object;
        };

        /**
         * Converts this ThirdAPIReq to JSON.
         * @function toJSON
         * @memberof hall.ThirdAPIReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ThirdAPIReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ThirdAPIReq;
    })();

    hall.ThirdAPIResp = (function() {

        /**
         * Properties of a ThirdAPIResp.
         * @memberof hall
         * @interface IThirdAPIResp
         * @property {number} Code ThirdAPIResp Code
         * @property {string|null} [Message] ThirdAPIResp Message
         * @property {string|null} [RetJson] ThirdAPIResp RetJson
         */

        /**
         * Constructs a new ThirdAPIResp.
         * @memberof hall
         * @classdesc Represents a ThirdAPIResp.
         * @implements IThirdAPIResp
         * @constructor
         * @param {hall.IThirdAPIResp=} [properties] Properties to set
         */
        function ThirdAPIResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ThirdAPIResp Code.
         * @member {number} Code
         * @memberof hall.ThirdAPIResp
         * @instance
         */
        ThirdAPIResp.prototype.Code = 0;

        /**
         * ThirdAPIResp Message.
         * @member {string} Message
         * @memberof hall.ThirdAPIResp
         * @instance
         */
        ThirdAPIResp.prototype.Message = "";

        /**
         * ThirdAPIResp RetJson.
         * @member {string} RetJson
         * @memberof hall.ThirdAPIResp
         * @instance
         */
        ThirdAPIResp.prototype.RetJson = "";

        /**
         * Creates a new ThirdAPIResp instance using the specified properties.
         * @function create
         * @memberof hall.ThirdAPIResp
         * @static
         * @param {hall.IThirdAPIResp=} [properties] Properties to set
         * @returns {hall.ThirdAPIResp} ThirdAPIResp instance
         */
        ThirdAPIResp.create = function create(properties) {
            return new ThirdAPIResp(properties);
        };

        /**
         * Encodes the specified ThirdAPIResp message. Does not implicitly {@link hall.ThirdAPIResp.verify|verify} messages.
         * @function encode
         * @memberof hall.ThirdAPIResp
         * @static
         * @param {hall.IThirdAPIResp} message ThirdAPIResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ThirdAPIResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Message);
            if (message.RetJson != null && Object.hasOwnProperty.call(message, "RetJson"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.RetJson);
            return writer;
        };

        /**
         * Encodes the specified ThirdAPIResp message, length delimited. Does not implicitly {@link hall.ThirdAPIResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.ThirdAPIResp
         * @static
         * @param {hall.IThirdAPIResp} message ThirdAPIResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ThirdAPIResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ThirdAPIResp message from the specified reader or buffer.
         * @function decode
         * @memberof hall.ThirdAPIResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.ThirdAPIResp} ThirdAPIResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ThirdAPIResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.ThirdAPIResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                case 2:
                    message.Message = reader.string();
                    break;
                case 3:
                    message.RetJson = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Code"))
                throw $util.ProtocolError("missing required 'Code'", { instance: message });
            return message;
        };

        /**
         * Decodes a ThirdAPIResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.ThirdAPIResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.ThirdAPIResp} ThirdAPIResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ThirdAPIResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ThirdAPIResp message.
         * @function verify
         * @memberof hall.ThirdAPIResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ThirdAPIResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Code))
                return "Code: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.RetJson != null && message.hasOwnProperty("RetJson"))
                if (!$util.isString(message.RetJson))
                    return "RetJson: string expected";
            return null;
        };

        /**
         * Creates a ThirdAPIResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.ThirdAPIResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.ThirdAPIResp} ThirdAPIResp
         */
        ThirdAPIResp.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.ThirdAPIResp)
                return object;
            var message = new $root.hall.ThirdAPIResp();
            if (object.Code != null)
                message.Code = object.Code | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.RetJson != null)
                message.RetJson = String(object.RetJson);
            return message;
        };

        /**
         * Creates a plain object from a ThirdAPIResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.ThirdAPIResp
         * @static
         * @param {hall.ThirdAPIResp} message ThirdAPIResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ThirdAPIResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = 0;
                object.Message = "";
                object.RetJson = "";
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            if (message.RetJson != null && message.hasOwnProperty("RetJson"))
                object.RetJson = message.RetJson;
            return object;
        };

        /**
         * Converts this ThirdAPIResp to JSON.
         * @function toJSON
         * @memberof hall.ThirdAPIResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ThirdAPIResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ThirdAPIResp;
    })();

    hall.VideoGameAPIReq = (function() {

        /**
         * Properties of a VideoGameAPIReq.
         * @memberof hall
         * @interface IVideoGameAPIReq
         * @property {number} VGameID VideoGameAPIReq VGameID
         */

        /**
         * Constructs a new VideoGameAPIReq.
         * @memberof hall
         * @classdesc Represents a VideoGameAPIReq.
         * @implements IVideoGameAPIReq
         * @constructor
         * @param {hall.IVideoGameAPIReq=} [properties] Properties to set
         */
        function VideoGameAPIReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VideoGameAPIReq VGameID.
         * @member {number} VGameID
         * @memberof hall.VideoGameAPIReq
         * @instance
         */
        VideoGameAPIReq.prototype.VGameID = 0;

        /**
         * Creates a new VideoGameAPIReq instance using the specified properties.
         * @function create
         * @memberof hall.VideoGameAPIReq
         * @static
         * @param {hall.IVideoGameAPIReq=} [properties] Properties to set
         * @returns {hall.VideoGameAPIReq} VideoGameAPIReq instance
         */
        VideoGameAPIReq.create = function create(properties) {
            return new VideoGameAPIReq(properties);
        };

        /**
         * Encodes the specified VideoGameAPIReq message. Does not implicitly {@link hall.VideoGameAPIReq.verify|verify} messages.
         * @function encode
         * @memberof hall.VideoGameAPIReq
         * @static
         * @param {hall.IVideoGameAPIReq} message VideoGameAPIReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VideoGameAPIReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.VGameID);
            return writer;
        };

        /**
         * Encodes the specified VideoGameAPIReq message, length delimited. Does not implicitly {@link hall.VideoGameAPIReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.VideoGameAPIReq
         * @static
         * @param {hall.IVideoGameAPIReq} message VideoGameAPIReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VideoGameAPIReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VideoGameAPIReq message from the specified reader or buffer.
         * @function decode
         * @memberof hall.VideoGameAPIReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.VideoGameAPIReq} VideoGameAPIReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VideoGameAPIReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.VideoGameAPIReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.VGameID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("VGameID"))
                throw $util.ProtocolError("missing required 'VGameID'", { instance: message });
            return message;
        };

        /**
         * Decodes a VideoGameAPIReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.VideoGameAPIReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.VideoGameAPIReq} VideoGameAPIReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VideoGameAPIReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VideoGameAPIReq message.
         * @function verify
         * @memberof hall.VideoGameAPIReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VideoGameAPIReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.VGameID))
                return "VGameID: integer expected";
            return null;
        };

        /**
         * Creates a VideoGameAPIReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.VideoGameAPIReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.VideoGameAPIReq} VideoGameAPIReq
         */
        VideoGameAPIReq.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.VideoGameAPIReq)
                return object;
            var message = new $root.hall.VideoGameAPIReq();
            if (object.VGameID != null)
                message.VGameID = object.VGameID | 0;
            return message;
        };

        /**
         * Creates a plain object from a VideoGameAPIReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.VideoGameAPIReq
         * @static
         * @param {hall.VideoGameAPIReq} message VideoGameAPIReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VideoGameAPIReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.VGameID = 0;
            if (message.VGameID != null && message.hasOwnProperty("VGameID"))
                object.VGameID = message.VGameID;
            return object;
        };

        /**
         * Converts this VideoGameAPIReq to JSON.
         * @function toJSON
         * @memberof hall.VideoGameAPIReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VideoGameAPIReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VideoGameAPIReq;
    })();

    hall.VideoGameAPIRet = (function() {

        /**
         * Properties of a VideoGameAPIRet.
         * @memberof hall
         * @interface IVideoGameAPIRet
         * @property {number} VGameID VideoGameAPIRet VGameID
         * @property {number} Status VideoGameAPIRet Status
         * @property {string|null} [Result] VideoGameAPIRet Result
         */

        /**
         * Constructs a new VideoGameAPIRet.
         * @memberof hall
         * @classdesc Represents a VideoGameAPIRet.
         * @implements IVideoGameAPIRet
         * @constructor
         * @param {hall.IVideoGameAPIRet=} [properties] Properties to set
         */
        function VideoGameAPIRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VideoGameAPIRet VGameID.
         * @member {number} VGameID
         * @memberof hall.VideoGameAPIRet
         * @instance
         */
        VideoGameAPIRet.prototype.VGameID = 0;

        /**
         * VideoGameAPIRet Status.
         * @member {number} Status
         * @memberof hall.VideoGameAPIRet
         * @instance
         */
        VideoGameAPIRet.prototype.Status = 0;

        /**
         * VideoGameAPIRet Result.
         * @member {string} Result
         * @memberof hall.VideoGameAPIRet
         * @instance
         */
        VideoGameAPIRet.prototype.Result = "";

        /**
         * Creates a new VideoGameAPIRet instance using the specified properties.
         * @function create
         * @memberof hall.VideoGameAPIRet
         * @static
         * @param {hall.IVideoGameAPIRet=} [properties] Properties to set
         * @returns {hall.VideoGameAPIRet} VideoGameAPIRet instance
         */
        VideoGameAPIRet.create = function create(properties) {
            return new VideoGameAPIRet(properties);
        };

        /**
         * Encodes the specified VideoGameAPIRet message. Does not implicitly {@link hall.VideoGameAPIRet.verify|verify} messages.
         * @function encode
         * @memberof hall.VideoGameAPIRet
         * @static
         * @param {hall.IVideoGameAPIRet} message VideoGameAPIRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VideoGameAPIRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.VGameID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Status);
            if (message.Result != null && Object.hasOwnProperty.call(message, "Result"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Result);
            return writer;
        };

        /**
         * Encodes the specified VideoGameAPIRet message, length delimited. Does not implicitly {@link hall.VideoGameAPIRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.VideoGameAPIRet
         * @static
         * @param {hall.IVideoGameAPIRet} message VideoGameAPIRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VideoGameAPIRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VideoGameAPIRet message from the specified reader or buffer.
         * @function decode
         * @memberof hall.VideoGameAPIRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.VideoGameAPIRet} VideoGameAPIRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VideoGameAPIRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.VideoGameAPIRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.VGameID = reader.int32();
                    break;
                case 2:
                    message.Status = reader.int32();
                    break;
                case 3:
                    message.Result = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("VGameID"))
                throw $util.ProtocolError("missing required 'VGameID'", { instance: message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance: message });
            return message;
        };

        /**
         * Decodes a VideoGameAPIRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.VideoGameAPIRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.VideoGameAPIRet} VideoGameAPIRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VideoGameAPIRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VideoGameAPIRet message.
         * @function verify
         * @memberof hall.VideoGameAPIRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VideoGameAPIRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.VGameID))
                return "VGameID: integer expected";
            if (!$util.isInteger(message.Status))
                return "Status: integer expected";
            if (message.Result != null && message.hasOwnProperty("Result"))
                if (!$util.isString(message.Result))
                    return "Result: string expected";
            return null;
        };

        /**
         * Creates a VideoGameAPIRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.VideoGameAPIRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.VideoGameAPIRet} VideoGameAPIRet
         */
        VideoGameAPIRet.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.VideoGameAPIRet)
                return object;
            var message = new $root.hall.VideoGameAPIRet();
            if (object.VGameID != null)
                message.VGameID = object.VGameID | 0;
            if (object.Status != null)
                message.Status = object.Status | 0;
            if (object.Result != null)
                message.Result = String(object.Result);
            return message;
        };

        /**
         * Creates a plain object from a VideoGameAPIRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.VideoGameAPIRet
         * @static
         * @param {hall.VideoGameAPIRet} message VideoGameAPIRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VideoGameAPIRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.VGameID = 0;
                object.Status = 0;
                object.Result = "";
            }
            if (message.VGameID != null && message.hasOwnProperty("VGameID"))
                object.VGameID = message.VGameID;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            if (message.Result != null && message.hasOwnProperty("Result"))
                object.Result = message.Result;
            return object;
        };

        /**
         * Converts this VideoGameAPIRet to JSON.
         * @function toJSON
         * @memberof hall.VideoGameAPIRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VideoGameAPIRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VideoGameAPIRet;
    })();

    hall.ActivityInfoRet = (function() {

        /**
         * Properties of an ActivityInfoRet.
         * @memberof hall
         * @interface IActivityInfoRet
         * @property {number} Code ActivityInfoRet Code
         * @property {string|null} [Message] ActivityInfoRet Message
         * @property {hall.IUserActivityInfo|null} [UserActivityInfo] ActivityInfoRet UserActivityInfo
         * @property {hall.IActivityBaseInfo} ActivityBaseInfo ActivityInfoRet ActivityBaseInfo
         */

        /**
         * Constructs a new ActivityInfoRet.
         * @memberof hall
         * @classdesc Represents an ActivityInfoRet.
         * @implements IActivityInfoRet
         * @constructor
         * @param {hall.IActivityInfoRet=} [properties] Properties to set
         */
        function ActivityInfoRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActivityInfoRet Code.
         * @member {number} Code
         * @memberof hall.ActivityInfoRet
         * @instance
         */
        ActivityInfoRet.prototype.Code = 0;

        /**
         * ActivityInfoRet Message.
         * @member {string} Message
         * @memberof hall.ActivityInfoRet
         * @instance
         */
        ActivityInfoRet.prototype.Message = "";

        /**
         * ActivityInfoRet UserActivityInfo.
         * @member {hall.IUserActivityInfo|null|undefined} UserActivityInfo
         * @memberof hall.ActivityInfoRet
         * @instance
         */
        ActivityInfoRet.prototype.UserActivityInfo = null;

        /**
         * ActivityInfoRet ActivityBaseInfo.
         * @member {hall.IActivityBaseInfo} ActivityBaseInfo
         * @memberof hall.ActivityInfoRet
         * @instance
         */
        ActivityInfoRet.prototype.ActivityBaseInfo = null;

        /**
         * Creates a new ActivityInfoRet instance using the specified properties.
         * @function create
         * @memberof hall.ActivityInfoRet
         * @static
         * @param {hall.IActivityInfoRet=} [properties] Properties to set
         * @returns {hall.ActivityInfoRet} ActivityInfoRet instance
         */
        ActivityInfoRet.create = function create(properties) {
            return new ActivityInfoRet(properties);
        };

        /**
         * Encodes the specified ActivityInfoRet message. Does not implicitly {@link hall.ActivityInfoRet.verify|verify} messages.
         * @function encode
         * @memberof hall.ActivityInfoRet
         * @static
         * @param {hall.IActivityInfoRet} message ActivityInfoRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityInfoRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Message);
            if (message.UserActivityInfo != null && Object.hasOwnProperty.call(message, "UserActivityInfo"))
                $root.hall.UserActivityInfo.encode(message.UserActivityInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            $root.hall.ActivityBaseInfo.encode(message.ActivityBaseInfo, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ActivityInfoRet message, length delimited. Does not implicitly {@link hall.ActivityInfoRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.ActivityInfoRet
         * @static
         * @param {hall.IActivityInfoRet} message ActivityInfoRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityInfoRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActivityInfoRet message from the specified reader or buffer.
         * @function decode
         * @memberof hall.ActivityInfoRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.ActivityInfoRet} ActivityInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityInfoRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.ActivityInfoRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                case 2:
                    message.Message = reader.string();
                    break;
                case 3:
                    message.UserActivityInfo = $root.hall.UserActivityInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.ActivityBaseInfo = $root.hall.ActivityBaseInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Code"))
                throw $util.ProtocolError("missing required 'Code'", { instance: message });
            if (!message.hasOwnProperty("ActivityBaseInfo"))
                throw $util.ProtocolError("missing required 'ActivityBaseInfo'", { instance: message });
            return message;
        };

        /**
         * Decodes an ActivityInfoRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.ActivityInfoRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.ActivityInfoRet} ActivityInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityInfoRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActivityInfoRet message.
         * @function verify
         * @memberof hall.ActivityInfoRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActivityInfoRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Code))
                return "Code: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.UserActivityInfo != null && message.hasOwnProperty("UserActivityInfo")) {
                var error = $root.hall.UserActivityInfo.verify(message.UserActivityInfo);
                if (error)
                    return "UserActivityInfo." + error;
            }
            {
                var error = $root.hall.ActivityBaseInfo.verify(message.ActivityBaseInfo);
                if (error)
                    return "ActivityBaseInfo." + error;
            }
            return null;
        };

        /**
         * Creates an ActivityInfoRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.ActivityInfoRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.ActivityInfoRet} ActivityInfoRet
         */
        ActivityInfoRet.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.ActivityInfoRet)
                return object;
            var message = new $root.hall.ActivityInfoRet();
            if (object.Code != null)
                message.Code = object.Code | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.UserActivityInfo != null) {
                if (typeof object.UserActivityInfo !== "object")
                    throw TypeError(".hall.ActivityInfoRet.UserActivityInfo: object expected");
                message.UserActivityInfo = $root.hall.UserActivityInfo.fromObject(object.UserActivityInfo);
            }
            if (object.ActivityBaseInfo != null) {
                if (typeof object.ActivityBaseInfo !== "object")
                    throw TypeError(".hall.ActivityInfoRet.ActivityBaseInfo: object expected");
                message.ActivityBaseInfo = $root.hall.ActivityBaseInfo.fromObject(object.ActivityBaseInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from an ActivityInfoRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.ActivityInfoRet
         * @static
         * @param {hall.ActivityInfoRet} message ActivityInfoRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActivityInfoRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = 0;
                object.Message = "";
                object.UserActivityInfo = null;
                object.ActivityBaseInfo = null;
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            if (message.UserActivityInfo != null && message.hasOwnProperty("UserActivityInfo"))
                object.UserActivityInfo = $root.hall.UserActivityInfo.toObject(message.UserActivityInfo, options);
            if (message.ActivityBaseInfo != null && message.hasOwnProperty("ActivityBaseInfo"))
                object.ActivityBaseInfo = $root.hall.ActivityBaseInfo.toObject(message.ActivityBaseInfo, options);
            return object;
        };

        /**
         * Converts this ActivityInfoRet to JSON.
         * @function toJSON
         * @memberof hall.ActivityInfoRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActivityInfoRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ActivityInfoRet;
    })();

    hall.UserActivityInfo = (function() {

        /**
         * Properties of a UserActivityInfo.
         * @memberof hall
         * @interface IUserActivityInfo
         * @property {number} UserID UserActivityInfo UserID
         * @property {number|Long} TotalEnroll UserActivityInfo TotalEnroll
         * @property {number|Long} CurrentAmount UserActivityInfo CurrentAmount
         * @property {number|Long} TotalAmount UserActivityInfo TotalAmount
         * @property {number} Status UserActivityInfo Status
         */

        /**
         * Constructs a new UserActivityInfo.
         * @memberof hall
         * @classdesc Represents a UserActivityInfo.
         * @implements IUserActivityInfo
         * @constructor
         * @param {hall.IUserActivityInfo=} [properties] Properties to set
         */
        function UserActivityInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserActivityInfo UserID.
         * @member {number} UserID
         * @memberof hall.UserActivityInfo
         * @instance
         */
        UserActivityInfo.prototype.UserID = 0;

        /**
         * UserActivityInfo TotalEnroll.
         * @member {number|Long} TotalEnroll
         * @memberof hall.UserActivityInfo
         * @instance
         */
        UserActivityInfo.prototype.TotalEnroll = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserActivityInfo CurrentAmount.
         * @member {number|Long} CurrentAmount
         * @memberof hall.UserActivityInfo
         * @instance
         */
        UserActivityInfo.prototype.CurrentAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserActivityInfo TotalAmount.
         * @member {number|Long} TotalAmount
         * @memberof hall.UserActivityInfo
         * @instance
         */
        UserActivityInfo.prototype.TotalAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserActivityInfo Status.
         * @member {number} Status
         * @memberof hall.UserActivityInfo
         * @instance
         */
        UserActivityInfo.prototype.Status = 0;

        /**
         * Creates a new UserActivityInfo instance using the specified properties.
         * @function create
         * @memberof hall.UserActivityInfo
         * @static
         * @param {hall.IUserActivityInfo=} [properties] Properties to set
         * @returns {hall.UserActivityInfo} UserActivityInfo instance
         */
        UserActivityInfo.create = function create(properties) {
            return new UserActivityInfo(properties);
        };

        /**
         * Encodes the specified UserActivityInfo message. Does not implicitly {@link hall.UserActivityInfo.verify|verify} messages.
         * @function encode
         * @memberof hall.UserActivityInfo
         * @static
         * @param {hall.IUserActivityInfo} message UserActivityInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserActivityInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.TotalEnroll);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.CurrentAmount);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.TotalAmount);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Status);
            return writer;
        };

        /**
         * Encodes the specified UserActivityInfo message, length delimited. Does not implicitly {@link hall.UserActivityInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.UserActivityInfo
         * @static
         * @param {hall.IUserActivityInfo} message UserActivityInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserActivityInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserActivityInfo message from the specified reader or buffer.
         * @function decode
         * @memberof hall.UserActivityInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.UserActivityInfo} UserActivityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserActivityInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.UserActivityInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.TotalEnroll = reader.int64();
                    break;
                case 3:
                    message.CurrentAmount = reader.int64();
                    break;
                case 4:
                    message.TotalAmount = reader.int64();
                    break;
                case 5:
                    message.Status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("TotalEnroll"))
                throw $util.ProtocolError("missing required 'TotalEnroll'", { instance: message });
            if (!message.hasOwnProperty("CurrentAmount"))
                throw $util.ProtocolError("missing required 'CurrentAmount'", { instance: message });
            if (!message.hasOwnProperty("TotalAmount"))
                throw $util.ProtocolError("missing required 'TotalAmount'", { instance: message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserActivityInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.UserActivityInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.UserActivityInfo} UserActivityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserActivityInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserActivityInfo message.
         * @function verify
         * @memberof hall.UserActivityInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserActivityInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.TotalEnroll) && !(message.TotalEnroll && $util.isInteger(message.TotalEnroll.low) && $util.isInteger(message.TotalEnroll.high)))
                return "TotalEnroll: integer|Long expected";
            if (!$util.isInteger(message.CurrentAmount) && !(message.CurrentAmount && $util.isInteger(message.CurrentAmount.low) && $util.isInteger(message.CurrentAmount.high)))
                return "CurrentAmount: integer|Long expected";
            if (!$util.isInteger(message.TotalAmount) && !(message.TotalAmount && $util.isInteger(message.TotalAmount.low) && $util.isInteger(message.TotalAmount.high)))
                return "TotalAmount: integer|Long expected";
            if (!$util.isInteger(message.Status))
                return "Status: integer expected";
            return null;
        };

        /**
         * Creates a UserActivityInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.UserActivityInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.UserActivityInfo} UserActivityInfo
         */
        UserActivityInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.UserActivityInfo)
                return object;
            var message = new $root.hall.UserActivityInfo();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.TotalEnroll != null)
                if ($util.Long)
                    (message.TotalEnroll = $util.Long.fromValue(object.TotalEnroll)).unsigned = false;
                else if (typeof object.TotalEnroll === "string")
                    message.TotalEnroll = parseInt(object.TotalEnroll, 10);
                else if (typeof object.TotalEnroll === "number")
                    message.TotalEnroll = object.TotalEnroll;
                else if (typeof object.TotalEnroll === "object")
                    message.TotalEnroll = new $util.LongBits(object.TotalEnroll.low >>> 0, object.TotalEnroll.high >>> 0).toNumber();
            if (object.CurrentAmount != null)
                if ($util.Long)
                    (message.CurrentAmount = $util.Long.fromValue(object.CurrentAmount)).unsigned = false;
                else if (typeof object.CurrentAmount === "string")
                    message.CurrentAmount = parseInt(object.CurrentAmount, 10);
                else if (typeof object.CurrentAmount === "number")
                    message.CurrentAmount = object.CurrentAmount;
                else if (typeof object.CurrentAmount === "object")
                    message.CurrentAmount = new $util.LongBits(object.CurrentAmount.low >>> 0, object.CurrentAmount.high >>> 0).toNumber();
            if (object.TotalAmount != null)
                if ($util.Long)
                    (message.TotalAmount = $util.Long.fromValue(object.TotalAmount)).unsigned = false;
                else if (typeof object.TotalAmount === "string")
                    message.TotalAmount = parseInt(object.TotalAmount, 10);
                else if (typeof object.TotalAmount === "number")
                    message.TotalAmount = object.TotalAmount;
                else if (typeof object.TotalAmount === "object")
                    message.TotalAmount = new $util.LongBits(object.TotalAmount.low >>> 0, object.TotalAmount.high >>> 0).toNumber();
            if (object.Status != null)
                message.Status = object.Status | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserActivityInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.UserActivityInfo
         * @static
         * @param {hall.UserActivityInfo} message UserActivityInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserActivityInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TotalEnroll = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TotalEnroll = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CurrentAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CurrentAmount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TotalAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TotalAmount = options.longs === String ? "0" : 0;
                object.Status = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.TotalEnroll != null && message.hasOwnProperty("TotalEnroll"))
                if (typeof message.TotalEnroll === "number")
                    object.TotalEnroll = options.longs === String ? String(message.TotalEnroll) : message.TotalEnroll;
                else
                    object.TotalEnroll = options.longs === String ? $util.Long.prototype.toString.call(message.TotalEnroll) : options.longs === Number ? new $util.LongBits(message.TotalEnroll.low >>> 0, message.TotalEnroll.high >>> 0).toNumber() : message.TotalEnroll;
            if (message.CurrentAmount != null && message.hasOwnProperty("CurrentAmount"))
                if (typeof message.CurrentAmount === "number")
                    object.CurrentAmount = options.longs === String ? String(message.CurrentAmount) : message.CurrentAmount;
                else
                    object.CurrentAmount = options.longs === String ? $util.Long.prototype.toString.call(message.CurrentAmount) : options.longs === Number ? new $util.LongBits(message.CurrentAmount.low >>> 0, message.CurrentAmount.high >>> 0).toNumber() : message.CurrentAmount;
            if (message.TotalAmount != null && message.hasOwnProperty("TotalAmount"))
                if (typeof message.TotalAmount === "number")
                    object.TotalAmount = options.longs === String ? String(message.TotalAmount) : message.TotalAmount;
                else
                    object.TotalAmount = options.longs === String ? $util.Long.prototype.toString.call(message.TotalAmount) : options.longs === Number ? new $util.LongBits(message.TotalAmount.low >>> 0, message.TotalAmount.high >>> 0).toNumber() : message.TotalAmount;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this UserActivityInfo to JSON.
         * @function toJSON
         * @memberof hall.UserActivityInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserActivityInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserActivityInfo;
    })();

    hall.ActivityBaseInfo = (function() {

        /**
         * Properties of an ActivityBaseInfo.
         * @memberof hall
         * @interface IActivityBaseInfo
         * @property {number} ActivityID ActivityBaseInfo ActivityID
         * @property {string} ActivityName ActivityBaseInfo ActivityName
         * @property {string} ActivityContent ActivityBaseInfo ActivityContent
         * @property {Array.<hall.IActivityConfig>|null} [ActivityConfig] ActivityBaseInfo ActivityConfig
         * @property {number} ActivityStatus ActivityBaseInfo ActivityStatus
         * @property {string|null} [ActivityBeginTime] ActivityBaseInfo ActivityBeginTime
         * @property {string|null} [ActivityEndTime] ActivityBaseInfo ActivityEndTime
         */

        /**
         * Constructs a new ActivityBaseInfo.
         * @memberof hall
         * @classdesc Represents an ActivityBaseInfo.
         * @implements IActivityBaseInfo
         * @constructor
         * @param {hall.IActivityBaseInfo=} [properties] Properties to set
         */
        function ActivityBaseInfo(properties) {
            this.ActivityConfig = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActivityBaseInfo ActivityID.
         * @member {number} ActivityID
         * @memberof hall.ActivityBaseInfo
         * @instance
         */
        ActivityBaseInfo.prototype.ActivityID = 0;

        /**
         * ActivityBaseInfo ActivityName.
         * @member {string} ActivityName
         * @memberof hall.ActivityBaseInfo
         * @instance
         */
        ActivityBaseInfo.prototype.ActivityName = "";

        /**
         * ActivityBaseInfo ActivityContent.
         * @member {string} ActivityContent
         * @memberof hall.ActivityBaseInfo
         * @instance
         */
        ActivityBaseInfo.prototype.ActivityContent = "";

        /**
         * ActivityBaseInfo ActivityConfig.
         * @member {Array.<hall.IActivityConfig>} ActivityConfig
         * @memberof hall.ActivityBaseInfo
         * @instance
         */
        ActivityBaseInfo.prototype.ActivityConfig = $util.emptyArray;

        /**
         * ActivityBaseInfo ActivityStatus.
         * @member {number} ActivityStatus
         * @memberof hall.ActivityBaseInfo
         * @instance
         */
        ActivityBaseInfo.prototype.ActivityStatus = 0;

        /**
         * ActivityBaseInfo ActivityBeginTime.
         * @member {string} ActivityBeginTime
         * @memberof hall.ActivityBaseInfo
         * @instance
         */
        ActivityBaseInfo.prototype.ActivityBeginTime = "";

        /**
         * ActivityBaseInfo ActivityEndTime.
         * @member {string} ActivityEndTime
         * @memberof hall.ActivityBaseInfo
         * @instance
         */
        ActivityBaseInfo.prototype.ActivityEndTime = "";

        /**
         * Creates a new ActivityBaseInfo instance using the specified properties.
         * @function create
         * @memberof hall.ActivityBaseInfo
         * @static
         * @param {hall.IActivityBaseInfo=} [properties] Properties to set
         * @returns {hall.ActivityBaseInfo} ActivityBaseInfo instance
         */
        ActivityBaseInfo.create = function create(properties) {
            return new ActivityBaseInfo(properties);
        };

        /**
         * Encodes the specified ActivityBaseInfo message. Does not implicitly {@link hall.ActivityBaseInfo.verify|verify} messages.
         * @function encode
         * @memberof hall.ActivityBaseInfo
         * @static
         * @param {hall.IActivityBaseInfo} message ActivityBaseInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityBaseInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ActivityID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.ActivityName);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.ActivityContent);
            if (message.ActivityConfig != null && message.ActivityConfig.length)
                for (var i = 0; i < message.ActivityConfig.length; ++i)
                    $root.hall.ActivityConfig.encode(message.ActivityConfig[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.ActivityStatus);
            if (message.ActivityBeginTime != null && Object.hasOwnProperty.call(message, "ActivityBeginTime"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.ActivityBeginTime);
            if (message.ActivityEndTime != null && Object.hasOwnProperty.call(message, "ActivityEndTime"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.ActivityEndTime);
            return writer;
        };

        /**
         * Encodes the specified ActivityBaseInfo message, length delimited. Does not implicitly {@link hall.ActivityBaseInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.ActivityBaseInfo
         * @static
         * @param {hall.IActivityBaseInfo} message ActivityBaseInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityBaseInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActivityBaseInfo message from the specified reader or buffer.
         * @function decode
         * @memberof hall.ActivityBaseInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.ActivityBaseInfo} ActivityBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityBaseInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.ActivityBaseInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ActivityID = reader.int32();
                    break;
                case 2:
                    message.ActivityName = reader.string();
                    break;
                case 3:
                    message.ActivityContent = reader.string();
                    break;
                case 4:
                    if (!(message.ActivityConfig && message.ActivityConfig.length))
                        message.ActivityConfig = [];
                    message.ActivityConfig.push($root.hall.ActivityConfig.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.ActivityStatus = reader.int32();
                    break;
                case 6:
                    message.ActivityBeginTime = reader.string();
                    break;
                case 7:
                    message.ActivityEndTime = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ActivityID"))
                throw $util.ProtocolError("missing required 'ActivityID'", { instance: message });
            if (!message.hasOwnProperty("ActivityName"))
                throw $util.ProtocolError("missing required 'ActivityName'", { instance: message });
            if (!message.hasOwnProperty("ActivityContent"))
                throw $util.ProtocolError("missing required 'ActivityContent'", { instance: message });
            if (!message.hasOwnProperty("ActivityStatus"))
                throw $util.ProtocolError("missing required 'ActivityStatus'", { instance: message });
            return message;
        };

        /**
         * Decodes an ActivityBaseInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.ActivityBaseInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.ActivityBaseInfo} ActivityBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityBaseInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActivityBaseInfo message.
         * @function verify
         * @memberof hall.ActivityBaseInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActivityBaseInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ActivityID))
                return "ActivityID: integer expected";
            if (!$util.isString(message.ActivityName))
                return "ActivityName: string expected";
            if (!$util.isString(message.ActivityContent))
                return "ActivityContent: string expected";
            if (message.ActivityConfig != null && message.hasOwnProperty("ActivityConfig")) {
                if (!Array.isArray(message.ActivityConfig))
                    return "ActivityConfig: array expected";
                for (var i = 0; i < message.ActivityConfig.length; ++i) {
                    var error = $root.hall.ActivityConfig.verify(message.ActivityConfig[i]);
                    if (error)
                        return "ActivityConfig." + error;
                }
            }
            if (!$util.isInteger(message.ActivityStatus))
                return "ActivityStatus: integer expected";
            if (message.ActivityBeginTime != null && message.hasOwnProperty("ActivityBeginTime"))
                if (!$util.isString(message.ActivityBeginTime))
                    return "ActivityBeginTime: string expected";
            if (message.ActivityEndTime != null && message.hasOwnProperty("ActivityEndTime"))
                if (!$util.isString(message.ActivityEndTime))
                    return "ActivityEndTime: string expected";
            return null;
        };

        /**
         * Creates an ActivityBaseInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.ActivityBaseInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.ActivityBaseInfo} ActivityBaseInfo
         */
        ActivityBaseInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.ActivityBaseInfo)
                return object;
            var message = new $root.hall.ActivityBaseInfo();
            if (object.ActivityID != null)
                message.ActivityID = object.ActivityID | 0;
            if (object.ActivityName != null)
                message.ActivityName = String(object.ActivityName);
            if (object.ActivityContent != null)
                message.ActivityContent = String(object.ActivityContent);
            if (object.ActivityConfig) {
                if (!Array.isArray(object.ActivityConfig))
                    throw TypeError(".hall.ActivityBaseInfo.ActivityConfig: array expected");
                message.ActivityConfig = [];
                for (var i = 0; i < object.ActivityConfig.length; ++i) {
                    if (typeof object.ActivityConfig[i] !== "object")
                        throw TypeError(".hall.ActivityBaseInfo.ActivityConfig: object expected");
                    message.ActivityConfig[i] = $root.hall.ActivityConfig.fromObject(object.ActivityConfig[i]);
                }
            }
            if (object.ActivityStatus != null)
                message.ActivityStatus = object.ActivityStatus | 0;
            if (object.ActivityBeginTime != null)
                message.ActivityBeginTime = String(object.ActivityBeginTime);
            if (object.ActivityEndTime != null)
                message.ActivityEndTime = String(object.ActivityEndTime);
            return message;
        };

        /**
         * Creates a plain object from an ActivityBaseInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.ActivityBaseInfo
         * @static
         * @param {hall.ActivityBaseInfo} message ActivityBaseInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActivityBaseInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ActivityConfig = [];
            if (options.defaults) {
                object.ActivityID = 0;
                object.ActivityName = "";
                object.ActivityContent = "";
                object.ActivityStatus = 0;
                object.ActivityBeginTime = "";
                object.ActivityEndTime = "";
            }
            if (message.ActivityID != null && message.hasOwnProperty("ActivityID"))
                object.ActivityID = message.ActivityID;
            if (message.ActivityName != null && message.hasOwnProperty("ActivityName"))
                object.ActivityName = message.ActivityName;
            if (message.ActivityContent != null && message.hasOwnProperty("ActivityContent"))
                object.ActivityContent = message.ActivityContent;
            if (message.ActivityConfig && message.ActivityConfig.length) {
                object.ActivityConfig = [];
                for (var j = 0; j < message.ActivityConfig.length; ++j)
                    object.ActivityConfig[j] = $root.hall.ActivityConfig.toObject(message.ActivityConfig[j], options);
            }
            if (message.ActivityStatus != null && message.hasOwnProperty("ActivityStatus"))
                object.ActivityStatus = message.ActivityStatus;
            if (message.ActivityBeginTime != null && message.hasOwnProperty("ActivityBeginTime"))
                object.ActivityBeginTime = message.ActivityBeginTime;
            if (message.ActivityEndTime != null && message.hasOwnProperty("ActivityEndTime"))
                object.ActivityEndTime = message.ActivityEndTime;
            return object;
        };

        /**
         * Converts this ActivityBaseInfo to JSON.
         * @function toJSON
         * @memberof hall.ActivityBaseInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActivityBaseInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ActivityBaseInfo;
    })();

    hall.ActivityConfig = (function() {

        /**
         * Properties of an ActivityConfig.
         * @memberof hall
         * @interface IActivityConfig
         * @property {string} ParamName ActivityConfig ParamName
         * @property {string} ParamValue ActivityConfig ParamValue
         * @property {string|null} [ParamDesc] ActivityConfig ParamDesc
         */

        /**
         * Constructs a new ActivityConfig.
         * @memberof hall
         * @classdesc Represents an ActivityConfig.
         * @implements IActivityConfig
         * @constructor
         * @param {hall.IActivityConfig=} [properties] Properties to set
         */
        function ActivityConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ActivityConfig ParamName.
         * @member {string} ParamName
         * @memberof hall.ActivityConfig
         * @instance
         */
        ActivityConfig.prototype.ParamName = "";

        /**
         * ActivityConfig ParamValue.
         * @member {string} ParamValue
         * @memberof hall.ActivityConfig
         * @instance
         */
        ActivityConfig.prototype.ParamValue = "";

        /**
         * ActivityConfig ParamDesc.
         * @member {string} ParamDesc
         * @memberof hall.ActivityConfig
         * @instance
         */
        ActivityConfig.prototype.ParamDesc = "";

        /**
         * Creates a new ActivityConfig instance using the specified properties.
         * @function create
         * @memberof hall.ActivityConfig
         * @static
         * @param {hall.IActivityConfig=} [properties] Properties to set
         * @returns {hall.ActivityConfig} ActivityConfig instance
         */
        ActivityConfig.create = function create(properties) {
            return new ActivityConfig(properties);
        };

        /**
         * Encodes the specified ActivityConfig message. Does not implicitly {@link hall.ActivityConfig.verify|verify} messages.
         * @function encode
         * @memberof hall.ActivityConfig
         * @static
         * @param {hall.IActivityConfig} message ActivityConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ParamName);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.ParamValue);
            if (message.ParamDesc != null && Object.hasOwnProperty.call(message, "ParamDesc"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.ParamDesc);
            return writer;
        };

        /**
         * Encodes the specified ActivityConfig message, length delimited. Does not implicitly {@link hall.ActivityConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.ActivityConfig
         * @static
         * @param {hall.IActivityConfig} message ActivityConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ActivityConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ActivityConfig message from the specified reader or buffer.
         * @function decode
         * @memberof hall.ActivityConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.ActivityConfig} ActivityConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.ActivityConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ParamName = reader.string();
                    break;
                case 2:
                    message.ParamValue = reader.string();
                    break;
                case 3:
                    message.ParamDesc = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ParamName"))
                throw $util.ProtocolError("missing required 'ParamName'", { instance: message });
            if (!message.hasOwnProperty("ParamValue"))
                throw $util.ProtocolError("missing required 'ParamValue'", { instance: message });
            return message;
        };

        /**
         * Decodes an ActivityConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.ActivityConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.ActivityConfig} ActivityConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ActivityConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ActivityConfig message.
         * @function verify
         * @memberof hall.ActivityConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ActivityConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.ParamName))
                return "ParamName: string expected";
            if (!$util.isString(message.ParamValue))
                return "ParamValue: string expected";
            if (message.ParamDesc != null && message.hasOwnProperty("ParamDesc"))
                if (!$util.isString(message.ParamDesc))
                    return "ParamDesc: string expected";
            return null;
        };

        /**
         * Creates an ActivityConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.ActivityConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.ActivityConfig} ActivityConfig
         */
        ActivityConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.ActivityConfig)
                return object;
            var message = new $root.hall.ActivityConfig();
            if (object.ParamName != null)
                message.ParamName = String(object.ParamName);
            if (object.ParamValue != null)
                message.ParamValue = String(object.ParamValue);
            if (object.ParamDesc != null)
                message.ParamDesc = String(object.ParamDesc);
            return message;
        };

        /**
         * Creates a plain object from an ActivityConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.ActivityConfig
         * @static
         * @param {hall.ActivityConfig} message ActivityConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ActivityConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ParamName = "";
                object.ParamValue = "";
                object.ParamDesc = "";
            }
            if (message.ParamName != null && message.hasOwnProperty("ParamName"))
                object.ParamName = message.ParamName;
            if (message.ParamValue != null && message.hasOwnProperty("ParamValue"))
                object.ParamValue = message.ParamValue;
            if (message.ParamDesc != null && message.hasOwnProperty("ParamDesc"))
                object.ParamDesc = message.ParamDesc;
            return object;
        };

        /**
         * Converts this ActivityConfig to JSON.
         * @function toJSON
         * @memberof hall.ActivityConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ActivityConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ActivityConfig;
    })();

    hall.AdvanceInfoRet = (function() {

        /**
         * Properties of an AdvanceInfoRet.
         * @memberof hall
         * @interface IAdvanceInfoRet
         * @property {number} Code AdvanceInfoRet Code
         * @property {string|null} [Message] AdvanceInfoRet Message
         * @property {number|null} [YesterdayAmount] AdvanceInfoRet YesterdayAmount
         * @property {number|null} [NowadayAmount] AdvanceInfoRet NowadayAmount
         * @property {number|null} [YesterdayReward] AdvanceInfoRet YesterdayReward
         * @property {number|null} [TomorrowAmount] AdvanceInfoRet TomorrowAmount
         * @property {Array.<hall.IAdvanceConfig>|null} [AdvanceConfig] AdvanceInfoRet AdvanceConfig
         */

        /**
         * Constructs a new AdvanceInfoRet.
         * @memberof hall
         * @classdesc Represents an AdvanceInfoRet.
         * @implements IAdvanceInfoRet
         * @constructor
         * @param {hall.IAdvanceInfoRet=} [properties] Properties to set
         */
        function AdvanceInfoRet(properties) {
            this.AdvanceConfig = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AdvanceInfoRet Code.
         * @member {number} Code
         * @memberof hall.AdvanceInfoRet
         * @instance
         */
        AdvanceInfoRet.prototype.Code = 0;

        /**
         * AdvanceInfoRet Message.
         * @member {string} Message
         * @memberof hall.AdvanceInfoRet
         * @instance
         */
        AdvanceInfoRet.prototype.Message = "";

        /**
         * AdvanceInfoRet YesterdayAmount.
         * @member {number} YesterdayAmount
         * @memberof hall.AdvanceInfoRet
         * @instance
         */
        AdvanceInfoRet.prototype.YesterdayAmount = 0;

        /**
         * AdvanceInfoRet NowadayAmount.
         * @member {number} NowadayAmount
         * @memberof hall.AdvanceInfoRet
         * @instance
         */
        AdvanceInfoRet.prototype.NowadayAmount = 0;

        /**
         * AdvanceInfoRet YesterdayReward.
         * @member {number} YesterdayReward
         * @memberof hall.AdvanceInfoRet
         * @instance
         */
        AdvanceInfoRet.prototype.YesterdayReward = 0;

        /**
         * AdvanceInfoRet TomorrowAmount.
         * @member {number} TomorrowAmount
         * @memberof hall.AdvanceInfoRet
         * @instance
         */
        AdvanceInfoRet.prototype.TomorrowAmount = 0;

        /**
         * AdvanceInfoRet AdvanceConfig.
         * @member {Array.<hall.IAdvanceConfig>} AdvanceConfig
         * @memberof hall.AdvanceInfoRet
         * @instance
         */
        AdvanceInfoRet.prototype.AdvanceConfig = $util.emptyArray;

        /**
         * Creates a new AdvanceInfoRet instance using the specified properties.
         * @function create
         * @memberof hall.AdvanceInfoRet
         * @static
         * @param {hall.IAdvanceInfoRet=} [properties] Properties to set
         * @returns {hall.AdvanceInfoRet} AdvanceInfoRet instance
         */
        AdvanceInfoRet.create = function create(properties) {
            return new AdvanceInfoRet(properties);
        };

        /**
         * Encodes the specified AdvanceInfoRet message. Does not implicitly {@link hall.AdvanceInfoRet.verify|verify} messages.
         * @function encode
         * @memberof hall.AdvanceInfoRet
         * @static
         * @param {hall.IAdvanceInfoRet} message AdvanceInfoRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdvanceInfoRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Message);
            if (message.YesterdayAmount != null && Object.hasOwnProperty.call(message, "YesterdayAmount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.YesterdayAmount);
            if (message.NowadayAmount != null && Object.hasOwnProperty.call(message, "NowadayAmount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.NowadayAmount);
            if (message.YesterdayReward != null && Object.hasOwnProperty.call(message, "YesterdayReward"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.YesterdayReward);
            if (message.TomorrowAmount != null && Object.hasOwnProperty.call(message, "TomorrowAmount"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.TomorrowAmount);
            if (message.AdvanceConfig != null && message.AdvanceConfig.length)
                for (var i = 0; i < message.AdvanceConfig.length; ++i)
                    $root.hall.AdvanceConfig.encode(message.AdvanceConfig[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AdvanceInfoRet message, length delimited. Does not implicitly {@link hall.AdvanceInfoRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.AdvanceInfoRet
         * @static
         * @param {hall.IAdvanceInfoRet} message AdvanceInfoRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdvanceInfoRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AdvanceInfoRet message from the specified reader or buffer.
         * @function decode
         * @memberof hall.AdvanceInfoRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.AdvanceInfoRet} AdvanceInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdvanceInfoRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.AdvanceInfoRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                case 2:
                    message.Message = reader.string();
                    break;
                case 3:
                    message.YesterdayAmount = reader.int32();
                    break;
                case 4:
                    message.NowadayAmount = reader.int32();
                    break;
                case 5:
                    message.YesterdayReward = reader.int32();
                    break;
                case 6:
                    message.TomorrowAmount = reader.int32();
                    break;
                case 7:
                    if (!(message.AdvanceConfig && message.AdvanceConfig.length))
                        message.AdvanceConfig = [];
                    message.AdvanceConfig.push($root.hall.AdvanceConfig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Code"))
                throw $util.ProtocolError("missing required 'Code'", { instance: message });
            return message;
        };

        /**
         * Decodes an AdvanceInfoRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.AdvanceInfoRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.AdvanceInfoRet} AdvanceInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdvanceInfoRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AdvanceInfoRet message.
         * @function verify
         * @memberof hall.AdvanceInfoRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AdvanceInfoRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Code))
                return "Code: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.YesterdayAmount != null && message.hasOwnProperty("YesterdayAmount"))
                if (!$util.isInteger(message.YesterdayAmount))
                    return "YesterdayAmount: integer expected";
            if (message.NowadayAmount != null && message.hasOwnProperty("NowadayAmount"))
                if (!$util.isInteger(message.NowadayAmount))
                    return "NowadayAmount: integer expected";
            if (message.YesterdayReward != null && message.hasOwnProperty("YesterdayReward"))
                if (!$util.isInteger(message.YesterdayReward))
                    return "YesterdayReward: integer expected";
            if (message.TomorrowAmount != null && message.hasOwnProperty("TomorrowAmount"))
                if (!$util.isInteger(message.TomorrowAmount))
                    return "TomorrowAmount: integer expected";
            if (message.AdvanceConfig != null && message.hasOwnProperty("AdvanceConfig")) {
                if (!Array.isArray(message.AdvanceConfig))
                    return "AdvanceConfig: array expected";
                for (var i = 0; i < message.AdvanceConfig.length; ++i) {
                    var error = $root.hall.AdvanceConfig.verify(message.AdvanceConfig[i]);
                    if (error)
                        return "AdvanceConfig." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AdvanceInfoRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.AdvanceInfoRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.AdvanceInfoRet} AdvanceInfoRet
         */
        AdvanceInfoRet.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.AdvanceInfoRet)
                return object;
            var message = new $root.hall.AdvanceInfoRet();
            if (object.Code != null)
                message.Code = object.Code | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.YesterdayAmount != null)
                message.YesterdayAmount = object.YesterdayAmount | 0;
            if (object.NowadayAmount != null)
                message.NowadayAmount = object.NowadayAmount | 0;
            if (object.YesterdayReward != null)
                message.YesterdayReward = object.YesterdayReward | 0;
            if (object.TomorrowAmount != null)
                message.TomorrowAmount = object.TomorrowAmount | 0;
            if (object.AdvanceConfig) {
                if (!Array.isArray(object.AdvanceConfig))
                    throw TypeError(".hall.AdvanceInfoRet.AdvanceConfig: array expected");
                message.AdvanceConfig = [];
                for (var i = 0; i < object.AdvanceConfig.length; ++i) {
                    if (typeof object.AdvanceConfig[i] !== "object")
                        throw TypeError(".hall.AdvanceInfoRet.AdvanceConfig: object expected");
                    message.AdvanceConfig[i] = $root.hall.AdvanceConfig.fromObject(object.AdvanceConfig[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AdvanceInfoRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.AdvanceInfoRet
         * @static
         * @param {hall.AdvanceInfoRet} message AdvanceInfoRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AdvanceInfoRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.AdvanceConfig = [];
            if (options.defaults) {
                object.Code = 0;
                object.Message = "";
                object.YesterdayAmount = 0;
                object.NowadayAmount = 0;
                object.YesterdayReward = 0;
                object.TomorrowAmount = 0;
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            if (message.YesterdayAmount != null && message.hasOwnProperty("YesterdayAmount"))
                object.YesterdayAmount = message.YesterdayAmount;
            if (message.NowadayAmount != null && message.hasOwnProperty("NowadayAmount"))
                object.NowadayAmount = message.NowadayAmount;
            if (message.YesterdayReward != null && message.hasOwnProperty("YesterdayReward"))
                object.YesterdayReward = message.YesterdayReward;
            if (message.TomorrowAmount != null && message.hasOwnProperty("TomorrowAmount"))
                object.TomorrowAmount = message.TomorrowAmount;
            if (message.AdvanceConfig && message.AdvanceConfig.length) {
                object.AdvanceConfig = [];
                for (var j = 0; j < message.AdvanceConfig.length; ++j)
                    object.AdvanceConfig[j] = $root.hall.AdvanceConfig.toObject(message.AdvanceConfig[j], options);
            }
            return object;
        };

        /**
         * Converts this AdvanceInfoRet to JSON.
         * @function toJSON
         * @memberof hall.AdvanceInfoRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AdvanceInfoRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AdvanceInfoRet;
    })();

    hall.AdvanceConfig = (function() {

        /**
         * Properties of an AdvanceConfig.
         * @memberof hall
         * @interface IAdvanceConfig
         * @property {number} AdvanceID AdvanceConfig AdvanceID
         * @property {number} TotalAmount AdvanceConfig TotalAmount
         * @property {number} RewardAmount AdvanceConfig RewardAmount
         * @property {number} Status AdvanceConfig Status
         */

        /**
         * Constructs a new AdvanceConfig.
         * @memberof hall
         * @classdesc Represents an AdvanceConfig.
         * @implements IAdvanceConfig
         * @constructor
         * @param {hall.IAdvanceConfig=} [properties] Properties to set
         */
        function AdvanceConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AdvanceConfig AdvanceID.
         * @member {number} AdvanceID
         * @memberof hall.AdvanceConfig
         * @instance
         */
        AdvanceConfig.prototype.AdvanceID = 0;

        /**
         * AdvanceConfig TotalAmount.
         * @member {number} TotalAmount
         * @memberof hall.AdvanceConfig
         * @instance
         */
        AdvanceConfig.prototype.TotalAmount = 0;

        /**
         * AdvanceConfig RewardAmount.
         * @member {number} RewardAmount
         * @memberof hall.AdvanceConfig
         * @instance
         */
        AdvanceConfig.prototype.RewardAmount = 0;

        /**
         * AdvanceConfig Status.
         * @member {number} Status
         * @memberof hall.AdvanceConfig
         * @instance
         */
        AdvanceConfig.prototype.Status = 0;

        /**
         * Creates a new AdvanceConfig instance using the specified properties.
         * @function create
         * @memberof hall.AdvanceConfig
         * @static
         * @param {hall.IAdvanceConfig=} [properties] Properties to set
         * @returns {hall.AdvanceConfig} AdvanceConfig instance
         */
        AdvanceConfig.create = function create(properties) {
            return new AdvanceConfig(properties);
        };

        /**
         * Encodes the specified AdvanceConfig message. Does not implicitly {@link hall.AdvanceConfig.verify|verify} messages.
         * @function encode
         * @memberof hall.AdvanceConfig
         * @static
         * @param {hall.IAdvanceConfig} message AdvanceConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdvanceConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.AdvanceID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TotalAmount);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.RewardAmount);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Status);
            return writer;
        };

        /**
         * Encodes the specified AdvanceConfig message, length delimited. Does not implicitly {@link hall.AdvanceConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.AdvanceConfig
         * @static
         * @param {hall.IAdvanceConfig} message AdvanceConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdvanceConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AdvanceConfig message from the specified reader or buffer.
         * @function decode
         * @memberof hall.AdvanceConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.AdvanceConfig} AdvanceConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdvanceConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.AdvanceConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AdvanceID = reader.int32();
                    break;
                case 2:
                    message.TotalAmount = reader.int32();
                    break;
                case 3:
                    message.RewardAmount = reader.int32();
                    break;
                case 4:
                    message.Status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("AdvanceID"))
                throw $util.ProtocolError("missing required 'AdvanceID'", { instance: message });
            if (!message.hasOwnProperty("TotalAmount"))
                throw $util.ProtocolError("missing required 'TotalAmount'", { instance: message });
            if (!message.hasOwnProperty("RewardAmount"))
                throw $util.ProtocolError("missing required 'RewardAmount'", { instance: message });
            if (!message.hasOwnProperty("Status"))
                throw $util.ProtocolError("missing required 'Status'", { instance: message });
            return message;
        };

        /**
         * Decodes an AdvanceConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.AdvanceConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.AdvanceConfig} AdvanceConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdvanceConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AdvanceConfig message.
         * @function verify
         * @memberof hall.AdvanceConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AdvanceConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.AdvanceID))
                return "AdvanceID: integer expected";
            if (!$util.isInteger(message.TotalAmount))
                return "TotalAmount: integer expected";
            if (!$util.isInteger(message.RewardAmount))
                return "RewardAmount: integer expected";
            if (!$util.isInteger(message.Status))
                return "Status: integer expected";
            return null;
        };

        /**
         * Creates an AdvanceConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.AdvanceConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.AdvanceConfig} AdvanceConfig
         */
        AdvanceConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.AdvanceConfig)
                return object;
            var message = new $root.hall.AdvanceConfig();
            if (object.AdvanceID != null)
                message.AdvanceID = object.AdvanceID | 0;
            if (object.TotalAmount != null)
                message.TotalAmount = object.TotalAmount | 0;
            if (object.RewardAmount != null)
                message.RewardAmount = object.RewardAmount | 0;
            if (object.Status != null)
                message.Status = object.Status | 0;
            return message;
        };

        /**
         * Creates a plain object from an AdvanceConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.AdvanceConfig
         * @static
         * @param {hall.AdvanceConfig} message AdvanceConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AdvanceConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.AdvanceID = 0;
                object.TotalAmount = 0;
                object.RewardAmount = 0;
                object.Status = 0;
            }
            if (message.AdvanceID != null && message.hasOwnProperty("AdvanceID"))
                object.AdvanceID = message.AdvanceID;
            if (message.TotalAmount != null && message.hasOwnProperty("TotalAmount"))
                object.TotalAmount = message.TotalAmount;
            if (message.RewardAmount != null && message.hasOwnProperty("RewardAmount"))
                object.RewardAmount = message.RewardAmount;
            if (message.Status != null && message.hasOwnProperty("Status"))
                object.Status = message.Status;
            return object;
        };

        /**
         * Converts this AdvanceConfig to JSON.
         * @function toJSON
         * @memberof hall.AdvanceConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AdvanceConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AdvanceConfig;
    })();

    hall.RechargeActivityRet = (function() {

        /**
         * Properties of a RechargeActivityRet.
         * @memberof hall
         * @interface IRechargeActivityRet
         * @property {number} Code RechargeActivityRet Code
         * @property {string|null} [Message] RechargeActivityRet Message
         * @property {string|null} [ActivityEndTime] RechargeActivityRet ActivityEndTime
         * @property {number|null} [MaxAmount] RechargeActivityRet MaxAmount
         * @property {number|null} [CurAmount] RechargeActivityRet CurAmount
         * @property {number|null} [RecAmount] RechargeActivityRet RecAmount
         * @property {number|null} [AvailableAmoun] RechargeActivityRet AvailableAmoun
         * @property {Array.<hall.IRechargeConfig>|null} [RechargeConfig] RechargeActivityRet RechargeConfig
         */

        /**
         * Constructs a new RechargeActivityRet.
         * @memberof hall
         * @classdesc Represents a RechargeActivityRet.
         * @implements IRechargeActivityRet
         * @constructor
         * @param {hall.IRechargeActivityRet=} [properties] Properties to set
         */
        function RechargeActivityRet(properties) {
            this.RechargeConfig = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RechargeActivityRet Code.
         * @member {number} Code
         * @memberof hall.RechargeActivityRet
         * @instance
         */
        RechargeActivityRet.prototype.Code = 0;

        /**
         * RechargeActivityRet Message.
         * @member {string} Message
         * @memberof hall.RechargeActivityRet
         * @instance
         */
        RechargeActivityRet.prototype.Message = "";

        /**
         * RechargeActivityRet ActivityEndTime.
         * @member {string} ActivityEndTime
         * @memberof hall.RechargeActivityRet
         * @instance
         */
        RechargeActivityRet.prototype.ActivityEndTime = "";

        /**
         * RechargeActivityRet MaxAmount.
         * @member {number} MaxAmount
         * @memberof hall.RechargeActivityRet
         * @instance
         */
        RechargeActivityRet.prototype.MaxAmount = 0;

        /**
         * RechargeActivityRet CurAmount.
         * @member {number} CurAmount
         * @memberof hall.RechargeActivityRet
         * @instance
         */
        RechargeActivityRet.prototype.CurAmount = 0;

        /**
         * RechargeActivityRet RecAmount.
         * @member {number} RecAmount
         * @memberof hall.RechargeActivityRet
         * @instance
         */
        RechargeActivityRet.prototype.RecAmount = 0;

        /**
         * RechargeActivityRet AvailableAmoun.
         * @member {number} AvailableAmoun
         * @memberof hall.RechargeActivityRet
         * @instance
         */
        RechargeActivityRet.prototype.AvailableAmoun = 0;

        /**
         * RechargeActivityRet RechargeConfig.
         * @member {Array.<hall.IRechargeConfig>} RechargeConfig
         * @memberof hall.RechargeActivityRet
         * @instance
         */
        RechargeActivityRet.prototype.RechargeConfig = $util.emptyArray;

        /**
         * Creates a new RechargeActivityRet instance using the specified properties.
         * @function create
         * @memberof hall.RechargeActivityRet
         * @static
         * @param {hall.IRechargeActivityRet=} [properties] Properties to set
         * @returns {hall.RechargeActivityRet} RechargeActivityRet instance
         */
        RechargeActivityRet.create = function create(properties) {
            return new RechargeActivityRet(properties);
        };

        /**
         * Encodes the specified RechargeActivityRet message. Does not implicitly {@link hall.RechargeActivityRet.verify|verify} messages.
         * @function encode
         * @memberof hall.RechargeActivityRet
         * @static
         * @param {hall.IRechargeActivityRet} message RechargeActivityRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RechargeActivityRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Message);
            if (message.ActivityEndTime != null && Object.hasOwnProperty.call(message, "ActivityEndTime"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.ActivityEndTime);
            if (message.MaxAmount != null && Object.hasOwnProperty.call(message, "MaxAmount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.MaxAmount);
            if (message.CurAmount != null && Object.hasOwnProperty.call(message, "CurAmount"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.CurAmount);
            if (message.RecAmount != null && Object.hasOwnProperty.call(message, "RecAmount"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.RecAmount);
            if (message.AvailableAmoun != null && Object.hasOwnProperty.call(message, "AvailableAmoun"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.AvailableAmoun);
            if (message.RechargeConfig != null && message.RechargeConfig.length)
                for (var i = 0; i < message.RechargeConfig.length; ++i)
                    $root.hall.RechargeConfig.encode(message.RechargeConfig[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RechargeActivityRet message, length delimited. Does not implicitly {@link hall.RechargeActivityRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.RechargeActivityRet
         * @static
         * @param {hall.IRechargeActivityRet} message RechargeActivityRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RechargeActivityRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RechargeActivityRet message from the specified reader or buffer.
         * @function decode
         * @memberof hall.RechargeActivityRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.RechargeActivityRet} RechargeActivityRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RechargeActivityRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.RechargeActivityRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                case 2:
                    message.Message = reader.string();
                    break;
                case 3:
                    message.ActivityEndTime = reader.string();
                    break;
                case 4:
                    message.MaxAmount = reader.int32();
                    break;
                case 5:
                    message.CurAmount = reader.int32();
                    break;
                case 6:
                    message.RecAmount = reader.int32();
                    break;
                case 7:
                    message.AvailableAmoun = reader.int32();
                    break;
                case 8:
                    if (!(message.RechargeConfig && message.RechargeConfig.length))
                        message.RechargeConfig = [];
                    message.RechargeConfig.push($root.hall.RechargeConfig.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Code"))
                throw $util.ProtocolError("missing required 'Code'", { instance: message });
            return message;
        };

        /**
         * Decodes a RechargeActivityRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.RechargeActivityRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.RechargeActivityRet} RechargeActivityRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RechargeActivityRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RechargeActivityRet message.
         * @function verify
         * @memberof hall.RechargeActivityRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RechargeActivityRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Code))
                return "Code: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.ActivityEndTime != null && message.hasOwnProperty("ActivityEndTime"))
                if (!$util.isString(message.ActivityEndTime))
                    return "ActivityEndTime: string expected";
            if (message.MaxAmount != null && message.hasOwnProperty("MaxAmount"))
                if (!$util.isInteger(message.MaxAmount))
                    return "MaxAmount: integer expected";
            if (message.CurAmount != null && message.hasOwnProperty("CurAmount"))
                if (!$util.isInteger(message.CurAmount))
                    return "CurAmount: integer expected";
            if (message.RecAmount != null && message.hasOwnProperty("RecAmount"))
                if (!$util.isInteger(message.RecAmount))
                    return "RecAmount: integer expected";
            if (message.AvailableAmoun != null && message.hasOwnProperty("AvailableAmoun"))
                if (!$util.isInteger(message.AvailableAmoun))
                    return "AvailableAmoun: integer expected";
            if (message.RechargeConfig != null && message.hasOwnProperty("RechargeConfig")) {
                if (!Array.isArray(message.RechargeConfig))
                    return "RechargeConfig: array expected";
                for (var i = 0; i < message.RechargeConfig.length; ++i) {
                    var error = $root.hall.RechargeConfig.verify(message.RechargeConfig[i]);
                    if (error)
                        return "RechargeConfig." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RechargeActivityRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.RechargeActivityRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.RechargeActivityRet} RechargeActivityRet
         */
        RechargeActivityRet.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.RechargeActivityRet)
                return object;
            var message = new $root.hall.RechargeActivityRet();
            if (object.Code != null)
                message.Code = object.Code | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.ActivityEndTime != null)
                message.ActivityEndTime = String(object.ActivityEndTime);
            if (object.MaxAmount != null)
                message.MaxAmount = object.MaxAmount | 0;
            if (object.CurAmount != null)
                message.CurAmount = object.CurAmount | 0;
            if (object.RecAmount != null)
                message.RecAmount = object.RecAmount | 0;
            if (object.AvailableAmoun != null)
                message.AvailableAmoun = object.AvailableAmoun | 0;
            if (object.RechargeConfig) {
                if (!Array.isArray(object.RechargeConfig))
                    throw TypeError(".hall.RechargeActivityRet.RechargeConfig: array expected");
                message.RechargeConfig = [];
                for (var i = 0; i < object.RechargeConfig.length; ++i) {
                    if (typeof object.RechargeConfig[i] !== "object")
                        throw TypeError(".hall.RechargeActivityRet.RechargeConfig: object expected");
                    message.RechargeConfig[i] = $root.hall.RechargeConfig.fromObject(object.RechargeConfig[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RechargeActivityRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.RechargeActivityRet
         * @static
         * @param {hall.RechargeActivityRet} message RechargeActivityRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RechargeActivityRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.RechargeConfig = [];
            if (options.defaults) {
                object.Code = 0;
                object.Message = "";
                object.ActivityEndTime = "";
                object.MaxAmount = 0;
                object.CurAmount = 0;
                object.RecAmount = 0;
                object.AvailableAmoun = 0;
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            if (message.ActivityEndTime != null && message.hasOwnProperty("ActivityEndTime"))
                object.ActivityEndTime = message.ActivityEndTime;
            if (message.MaxAmount != null && message.hasOwnProperty("MaxAmount"))
                object.MaxAmount = message.MaxAmount;
            if (message.CurAmount != null && message.hasOwnProperty("CurAmount"))
                object.CurAmount = message.CurAmount;
            if (message.RecAmount != null && message.hasOwnProperty("RecAmount"))
                object.RecAmount = message.RecAmount;
            if (message.AvailableAmoun != null && message.hasOwnProperty("AvailableAmoun"))
                object.AvailableAmoun = message.AvailableAmoun;
            if (message.RechargeConfig && message.RechargeConfig.length) {
                object.RechargeConfig = [];
                for (var j = 0; j < message.RechargeConfig.length; ++j)
                    object.RechargeConfig[j] = $root.hall.RechargeConfig.toObject(message.RechargeConfig[j], options);
            }
            return object;
        };

        /**
         * Converts this RechargeActivityRet to JSON.
         * @function toJSON
         * @memberof hall.RechargeActivityRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RechargeActivityRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RechargeActivityRet;
    })();

    hall.RechargeConfig = (function() {

        /**
         * Properties of a RechargeConfig.
         * @memberof hall
         * @interface IRechargeConfig
         * @property {number} RechargeID RechargeConfig RechargeID
         * @property {number} RechargeAmount RechargeConfig RechargeAmount
         * @property {number} WinAmount RechargeConfig WinAmount
         * @property {number} RewardAmount RechargeConfig RewardAmount
         */

        /**
         * Constructs a new RechargeConfig.
         * @memberof hall
         * @classdesc Represents a RechargeConfig.
         * @implements IRechargeConfig
         * @constructor
         * @param {hall.IRechargeConfig=} [properties] Properties to set
         */
        function RechargeConfig(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RechargeConfig RechargeID.
         * @member {number} RechargeID
         * @memberof hall.RechargeConfig
         * @instance
         */
        RechargeConfig.prototype.RechargeID = 0;

        /**
         * RechargeConfig RechargeAmount.
         * @member {number} RechargeAmount
         * @memberof hall.RechargeConfig
         * @instance
         */
        RechargeConfig.prototype.RechargeAmount = 0;

        /**
         * RechargeConfig WinAmount.
         * @member {number} WinAmount
         * @memberof hall.RechargeConfig
         * @instance
         */
        RechargeConfig.prototype.WinAmount = 0;

        /**
         * RechargeConfig RewardAmount.
         * @member {number} RewardAmount
         * @memberof hall.RechargeConfig
         * @instance
         */
        RechargeConfig.prototype.RewardAmount = 0;

        /**
         * Creates a new RechargeConfig instance using the specified properties.
         * @function create
         * @memberof hall.RechargeConfig
         * @static
         * @param {hall.IRechargeConfig=} [properties] Properties to set
         * @returns {hall.RechargeConfig} RechargeConfig instance
         */
        RechargeConfig.create = function create(properties) {
            return new RechargeConfig(properties);
        };

        /**
         * Encodes the specified RechargeConfig message. Does not implicitly {@link hall.RechargeConfig.verify|verify} messages.
         * @function encode
         * @memberof hall.RechargeConfig
         * @static
         * @param {hall.IRechargeConfig} message RechargeConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RechargeConfig.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.RechargeID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.RechargeAmount);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.WinAmount);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.RewardAmount);
            return writer;
        };

        /**
         * Encodes the specified RechargeConfig message, length delimited. Does not implicitly {@link hall.RechargeConfig.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.RechargeConfig
         * @static
         * @param {hall.IRechargeConfig} message RechargeConfig message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RechargeConfig.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RechargeConfig message from the specified reader or buffer.
         * @function decode
         * @memberof hall.RechargeConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.RechargeConfig} RechargeConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RechargeConfig.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.RechargeConfig();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RechargeID = reader.int32();
                    break;
                case 2:
                    message.RechargeAmount = reader.int32();
                    break;
                case 3:
                    message.WinAmount = reader.int32();
                    break;
                case 4:
                    message.RewardAmount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("RechargeID"))
                throw $util.ProtocolError("missing required 'RechargeID'", { instance: message });
            if (!message.hasOwnProperty("RechargeAmount"))
                throw $util.ProtocolError("missing required 'RechargeAmount'", { instance: message });
            if (!message.hasOwnProperty("WinAmount"))
                throw $util.ProtocolError("missing required 'WinAmount'", { instance: message });
            if (!message.hasOwnProperty("RewardAmount"))
                throw $util.ProtocolError("missing required 'RewardAmount'", { instance: message });
            return message;
        };

        /**
         * Decodes a RechargeConfig message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.RechargeConfig
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.RechargeConfig} RechargeConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RechargeConfig.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RechargeConfig message.
         * @function verify
         * @memberof hall.RechargeConfig
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RechargeConfig.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.RechargeID))
                return "RechargeID: integer expected";
            if (!$util.isInteger(message.RechargeAmount))
                return "RechargeAmount: integer expected";
            if (!$util.isInteger(message.WinAmount))
                return "WinAmount: integer expected";
            if (!$util.isInteger(message.RewardAmount))
                return "RewardAmount: integer expected";
            return null;
        };

        /**
         * Creates a RechargeConfig message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.RechargeConfig
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.RechargeConfig} RechargeConfig
         */
        RechargeConfig.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.RechargeConfig)
                return object;
            var message = new $root.hall.RechargeConfig();
            if (object.RechargeID != null)
                message.RechargeID = object.RechargeID | 0;
            if (object.RechargeAmount != null)
                message.RechargeAmount = object.RechargeAmount | 0;
            if (object.WinAmount != null)
                message.WinAmount = object.WinAmount | 0;
            if (object.RewardAmount != null)
                message.RewardAmount = object.RewardAmount | 0;
            return message;
        };

        /**
         * Creates a plain object from a RechargeConfig message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.RechargeConfig
         * @static
         * @param {hall.RechargeConfig} message RechargeConfig
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RechargeConfig.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.RechargeID = 0;
                object.RechargeAmount = 0;
                object.WinAmount = 0;
                object.RewardAmount = 0;
            }
            if (message.RechargeID != null && message.hasOwnProperty("RechargeID"))
                object.RechargeID = message.RechargeID;
            if (message.RechargeAmount != null && message.hasOwnProperty("RechargeAmount"))
                object.RechargeAmount = message.RechargeAmount;
            if (message.WinAmount != null && message.hasOwnProperty("WinAmount"))
                object.WinAmount = message.WinAmount;
            if (message.RewardAmount != null && message.hasOwnProperty("RewardAmount"))
                object.RewardAmount = message.RewardAmount;
            return object;
        };

        /**
         * Converts this RechargeConfig to JSON.
         * @function toJSON
         * @memberof hall.RechargeConfig
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RechargeConfig.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RechargeConfig;
    })();

    hall.DailySingActionLoadRes = (function() {

        /**
         * Properties of a DailySingActionLoadRes.
         * @memberof hall
         * @interface IDailySingActionLoadRes
         * @property {number|null} [Day] DailySingActionLoadRes Day
         * @property {number|null} [EndTimeStamp] DailySingActionLoadRes EndTimeStamp
         * @property {Array.<hall.ISignInfo>|null} [ReachSign] DailySingActionLoadRes ReachSign
         * @property {Array.<hall.IPoolInfo>|null} [LotteryPool] DailySingActionLoadRes LotteryPool
         * @property {number|null} [LotteryCount] DailySingActionLoadRes LotteryCount
         * @property {number} Code DailySingActionLoadRes Code
         * @property {string|null} [Msg] DailySingActionLoadRes Msg
         * @property {string|null} [ActiveDes] DailySingActionLoadRes ActiveDes
         */

        /**
         * Constructs a new DailySingActionLoadRes.
         * @memberof hall
         * @classdesc Represents a DailySingActionLoadRes.
         * @implements IDailySingActionLoadRes
         * @constructor
         * @param {hall.IDailySingActionLoadRes=} [properties] Properties to set
         */
        function DailySingActionLoadRes(properties) {
            this.ReachSign = [];
            this.LotteryPool = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DailySingActionLoadRes Day.
         * @member {number} Day
         * @memberof hall.DailySingActionLoadRes
         * @instance
         */
        DailySingActionLoadRes.prototype.Day = 0;

        /**
         * DailySingActionLoadRes EndTimeStamp.
         * @member {number} EndTimeStamp
         * @memberof hall.DailySingActionLoadRes
         * @instance
         */
        DailySingActionLoadRes.prototype.EndTimeStamp = 0;

        /**
         * DailySingActionLoadRes ReachSign.
         * @member {Array.<hall.ISignInfo>} ReachSign
         * @memberof hall.DailySingActionLoadRes
         * @instance
         */
        DailySingActionLoadRes.prototype.ReachSign = $util.emptyArray;

        /**
         * DailySingActionLoadRes LotteryPool.
         * @member {Array.<hall.IPoolInfo>} LotteryPool
         * @memberof hall.DailySingActionLoadRes
         * @instance
         */
        DailySingActionLoadRes.prototype.LotteryPool = $util.emptyArray;

        /**
         * DailySingActionLoadRes LotteryCount.
         * @member {number} LotteryCount
         * @memberof hall.DailySingActionLoadRes
         * @instance
         */
        DailySingActionLoadRes.prototype.LotteryCount = 0;

        /**
         * DailySingActionLoadRes Code.
         * @member {number} Code
         * @memberof hall.DailySingActionLoadRes
         * @instance
         */
        DailySingActionLoadRes.prototype.Code = 0;

        /**
         * DailySingActionLoadRes Msg.
         * @member {string} Msg
         * @memberof hall.DailySingActionLoadRes
         * @instance
         */
        DailySingActionLoadRes.prototype.Msg = "";

        /**
         * DailySingActionLoadRes ActiveDes.
         * @member {string} ActiveDes
         * @memberof hall.DailySingActionLoadRes
         * @instance
         */
        DailySingActionLoadRes.prototype.ActiveDes = "";

        /**
         * Creates a new DailySingActionLoadRes instance using the specified properties.
         * @function create
         * @memberof hall.DailySingActionLoadRes
         * @static
         * @param {hall.IDailySingActionLoadRes=} [properties] Properties to set
         * @returns {hall.DailySingActionLoadRes} DailySingActionLoadRes instance
         */
        DailySingActionLoadRes.create = function create(properties) {
            return new DailySingActionLoadRes(properties);
        };

        /**
         * Encodes the specified DailySingActionLoadRes message. Does not implicitly {@link hall.DailySingActionLoadRes.verify|verify} messages.
         * @function encode
         * @memberof hall.DailySingActionLoadRes
         * @static
         * @param {hall.IDailySingActionLoadRes} message DailySingActionLoadRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DailySingActionLoadRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Day != null && Object.hasOwnProperty.call(message, "Day"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Day);
            if (message.EndTimeStamp != null && Object.hasOwnProperty.call(message, "EndTimeStamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.EndTimeStamp);
            if (message.ReachSign != null && message.ReachSign.length)
                for (var i = 0; i < message.ReachSign.length; ++i)
                    $root.hall.SignInfo.encode(message.ReachSign[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.LotteryPool != null && message.LotteryPool.length)
                for (var i = 0; i < message.LotteryPool.length; ++i)
                    $root.hall.PoolInfo.encode(message.LotteryPool[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.LotteryCount != null && Object.hasOwnProperty.call(message, "LotteryCount"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.LotteryCount);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.Code);
            if (message.Msg != null && Object.hasOwnProperty.call(message, "Msg"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.Msg);
            if (message.ActiveDes != null && Object.hasOwnProperty.call(message, "ActiveDes"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.ActiveDes);
            return writer;
        };

        /**
         * Encodes the specified DailySingActionLoadRes message, length delimited. Does not implicitly {@link hall.DailySingActionLoadRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.DailySingActionLoadRes
         * @static
         * @param {hall.IDailySingActionLoadRes} message DailySingActionLoadRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DailySingActionLoadRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DailySingActionLoadRes message from the specified reader or buffer.
         * @function decode
         * @memberof hall.DailySingActionLoadRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.DailySingActionLoadRes} DailySingActionLoadRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DailySingActionLoadRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.DailySingActionLoadRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Day = reader.int32();
                    break;
                case 2:
                    message.EndTimeStamp = reader.int32();
                    break;
                case 3:
                    if (!(message.ReachSign && message.ReachSign.length))
                        message.ReachSign = [];
                    message.ReachSign.push($root.hall.SignInfo.decode(reader, reader.uint32()));
                    break;
                case 4:
                    if (!(message.LotteryPool && message.LotteryPool.length))
                        message.LotteryPool = [];
                    message.LotteryPool.push($root.hall.PoolInfo.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.LotteryCount = reader.int32();
                    break;
                case 6:
                    message.Code = reader.int32();
                    break;
                case 7:
                    message.Msg = reader.string();
                    break;
                case 8:
                    message.ActiveDes = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Code"))
                throw $util.ProtocolError("missing required 'Code'", { instance: message });
            return message;
        };

        /**
         * Decodes a DailySingActionLoadRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.DailySingActionLoadRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.DailySingActionLoadRes} DailySingActionLoadRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DailySingActionLoadRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DailySingActionLoadRes message.
         * @function verify
         * @memberof hall.DailySingActionLoadRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DailySingActionLoadRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Day != null && message.hasOwnProperty("Day"))
                if (!$util.isInteger(message.Day))
                    return "Day: integer expected";
            if (message.EndTimeStamp != null && message.hasOwnProperty("EndTimeStamp"))
                if (!$util.isInteger(message.EndTimeStamp))
                    return "EndTimeStamp: integer expected";
            if (message.ReachSign != null && message.hasOwnProperty("ReachSign")) {
                if (!Array.isArray(message.ReachSign))
                    return "ReachSign: array expected";
                for (var i = 0; i < message.ReachSign.length; ++i) {
                    var error = $root.hall.SignInfo.verify(message.ReachSign[i]);
                    if (error)
                        return "ReachSign." + error;
                }
            }
            if (message.LotteryPool != null && message.hasOwnProperty("LotteryPool")) {
                if (!Array.isArray(message.LotteryPool))
                    return "LotteryPool: array expected";
                for (var i = 0; i < message.LotteryPool.length; ++i) {
                    var error = $root.hall.PoolInfo.verify(message.LotteryPool[i]);
                    if (error)
                        return "LotteryPool." + error;
                }
            }
            if (message.LotteryCount != null && message.hasOwnProperty("LotteryCount"))
                if (!$util.isInteger(message.LotteryCount))
                    return "LotteryCount: integer expected";
            if (!$util.isInteger(message.Code))
                return "Code: integer expected";
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                if (!$util.isString(message.Msg))
                    return "Msg: string expected";
            if (message.ActiveDes != null && message.hasOwnProperty("ActiveDes"))
                if (!$util.isString(message.ActiveDes))
                    return "ActiveDes: string expected";
            return null;
        };

        /**
         * Creates a DailySingActionLoadRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.DailySingActionLoadRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.DailySingActionLoadRes} DailySingActionLoadRes
         */
        DailySingActionLoadRes.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.DailySingActionLoadRes)
                return object;
            var message = new $root.hall.DailySingActionLoadRes();
            if (object.Day != null)
                message.Day = object.Day | 0;
            if (object.EndTimeStamp != null)
                message.EndTimeStamp = object.EndTimeStamp | 0;
            if (object.ReachSign) {
                if (!Array.isArray(object.ReachSign))
                    throw TypeError(".hall.DailySingActionLoadRes.ReachSign: array expected");
                message.ReachSign = [];
                for (var i = 0; i < object.ReachSign.length; ++i) {
                    if (typeof object.ReachSign[i] !== "object")
                        throw TypeError(".hall.DailySingActionLoadRes.ReachSign: object expected");
                    message.ReachSign[i] = $root.hall.SignInfo.fromObject(object.ReachSign[i]);
                }
            }
            if (object.LotteryPool) {
                if (!Array.isArray(object.LotteryPool))
                    throw TypeError(".hall.DailySingActionLoadRes.LotteryPool: array expected");
                message.LotteryPool = [];
                for (var i = 0; i < object.LotteryPool.length; ++i) {
                    if (typeof object.LotteryPool[i] !== "object")
                        throw TypeError(".hall.DailySingActionLoadRes.LotteryPool: object expected");
                    message.LotteryPool[i] = $root.hall.PoolInfo.fromObject(object.LotteryPool[i]);
                }
            }
            if (object.LotteryCount != null)
                message.LotteryCount = object.LotteryCount | 0;
            if (object.Code != null)
                message.Code = object.Code | 0;
            if (object.Msg != null)
                message.Msg = String(object.Msg);
            if (object.ActiveDes != null)
                message.ActiveDes = String(object.ActiveDes);
            return message;
        };

        /**
         * Creates a plain object from a DailySingActionLoadRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.DailySingActionLoadRes
         * @static
         * @param {hall.DailySingActionLoadRes} message DailySingActionLoadRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DailySingActionLoadRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.ReachSign = [];
                object.LotteryPool = [];
            }
            if (options.defaults) {
                object.Day = 0;
                object.EndTimeStamp = 0;
                object.LotteryCount = 0;
                object.Code = 0;
                object.Msg = "";
                object.ActiveDes = "";
            }
            if (message.Day != null && message.hasOwnProperty("Day"))
                object.Day = message.Day;
            if (message.EndTimeStamp != null && message.hasOwnProperty("EndTimeStamp"))
                object.EndTimeStamp = message.EndTimeStamp;
            if (message.ReachSign && message.ReachSign.length) {
                object.ReachSign = [];
                for (var j = 0; j < message.ReachSign.length; ++j)
                    object.ReachSign[j] = $root.hall.SignInfo.toObject(message.ReachSign[j], options);
            }
            if (message.LotteryPool && message.LotteryPool.length) {
                object.LotteryPool = [];
                for (var j = 0; j < message.LotteryPool.length; ++j)
                    object.LotteryPool[j] = $root.hall.PoolInfo.toObject(message.LotteryPool[j], options);
            }
            if (message.LotteryCount != null && message.hasOwnProperty("LotteryCount"))
                object.LotteryCount = message.LotteryCount;
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                object.Msg = message.Msg;
            if (message.ActiveDes != null && message.hasOwnProperty("ActiveDes"))
                object.ActiveDes = message.ActiveDes;
            return object;
        };

        /**
         * Converts this DailySingActionLoadRes to JSON.
         * @function toJSON
         * @memberof hall.DailySingActionLoadRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DailySingActionLoadRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DailySingActionLoadRes;
    })();

    hall.PoolInfo = (function() {

        /**
         * Properties of a PoolInfo.
         * @memberof hall
         * @interface IPoolInfo
         * @property {number} Index PoolInfo Index
         * @property {number|Long} RewardMoney PoolInfo RewardMoney
         */

        /**
         * Constructs a new PoolInfo.
         * @memberof hall
         * @classdesc Represents a PoolInfo.
         * @implements IPoolInfo
         * @constructor
         * @param {hall.IPoolInfo=} [properties] Properties to set
         */
        function PoolInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PoolInfo Index.
         * @member {number} Index
         * @memberof hall.PoolInfo
         * @instance
         */
        PoolInfo.prototype.Index = 0;

        /**
         * PoolInfo RewardMoney.
         * @member {number|Long} RewardMoney
         * @memberof hall.PoolInfo
         * @instance
         */
        PoolInfo.prototype.RewardMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PoolInfo instance using the specified properties.
         * @function create
         * @memberof hall.PoolInfo
         * @static
         * @param {hall.IPoolInfo=} [properties] Properties to set
         * @returns {hall.PoolInfo} PoolInfo instance
         */
        PoolInfo.create = function create(properties) {
            return new PoolInfo(properties);
        };

        /**
         * Encodes the specified PoolInfo message. Does not implicitly {@link hall.PoolInfo.verify|verify} messages.
         * @function encode
         * @memberof hall.PoolInfo
         * @static
         * @param {hall.IPoolInfo} message PoolInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PoolInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Index);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.RewardMoney);
            return writer;
        };

        /**
         * Encodes the specified PoolInfo message, length delimited. Does not implicitly {@link hall.PoolInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.PoolInfo
         * @static
         * @param {hall.IPoolInfo} message PoolInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PoolInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PoolInfo message from the specified reader or buffer.
         * @function decode
         * @memberof hall.PoolInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.PoolInfo} PoolInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PoolInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.PoolInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Index = reader.int32();
                    break;
                case 2:
                    message.RewardMoney = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Index"))
                throw $util.ProtocolError("missing required 'Index'", { instance: message });
            if (!message.hasOwnProperty("RewardMoney"))
                throw $util.ProtocolError("missing required 'RewardMoney'", { instance: message });
            return message;
        };

        /**
         * Decodes a PoolInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.PoolInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.PoolInfo} PoolInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PoolInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PoolInfo message.
         * @function verify
         * @memberof hall.PoolInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PoolInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Index))
                return "Index: integer expected";
            if (!$util.isInteger(message.RewardMoney) && !(message.RewardMoney && $util.isInteger(message.RewardMoney.low) && $util.isInteger(message.RewardMoney.high)))
                return "RewardMoney: integer|Long expected";
            return null;
        };

        /**
         * Creates a PoolInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.PoolInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.PoolInfo} PoolInfo
         */
        PoolInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.PoolInfo)
                return object;
            var message = new $root.hall.PoolInfo();
            if (object.Index != null)
                message.Index = object.Index | 0;
            if (object.RewardMoney != null)
                if ($util.Long)
                    (message.RewardMoney = $util.Long.fromValue(object.RewardMoney)).unsigned = false;
                else if (typeof object.RewardMoney === "string")
                    message.RewardMoney = parseInt(object.RewardMoney, 10);
                else if (typeof object.RewardMoney === "number")
                    message.RewardMoney = object.RewardMoney;
                else if (typeof object.RewardMoney === "object")
                    message.RewardMoney = new $util.LongBits(object.RewardMoney.low >>> 0, object.RewardMoney.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PoolInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.PoolInfo
         * @static
         * @param {hall.PoolInfo} message PoolInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PoolInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Index = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.RewardMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.RewardMoney = options.longs === String ? "0" : 0;
            }
            if (message.Index != null && message.hasOwnProperty("Index"))
                object.Index = message.Index;
            if (message.RewardMoney != null && message.hasOwnProperty("RewardMoney"))
                if (typeof message.RewardMoney === "number")
                    object.RewardMoney = options.longs === String ? String(message.RewardMoney) : message.RewardMoney;
                else
                    object.RewardMoney = options.longs === String ? $util.Long.prototype.toString.call(message.RewardMoney) : options.longs === Number ? new $util.LongBits(message.RewardMoney.low >>> 0, message.RewardMoney.high >>> 0).toNumber() : message.RewardMoney;
            return object;
        };

        /**
         * Converts this PoolInfo to JSON.
         * @function toJSON
         * @memberof hall.PoolInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PoolInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PoolInfo;
    })();

    hall.SignInfo = (function() {

        /**
         * Properties of a SignInfo.
         * @memberof hall
         * @interface ISignInfo
         * @property {number} Day SignInfo Day
         * @property {number} RewardMoney SignInfo RewardMoney
         * @property {number|Long} CostAmount SignInfo CostAmount
         * @property {number|Long} ConfigAmount SignInfo ConfigAmount
         * @property {number} State SignInfo State
         */

        /**
         * Constructs a new SignInfo.
         * @memberof hall
         * @classdesc Represents a SignInfo.
         * @implements ISignInfo
         * @constructor
         * @param {hall.ISignInfo=} [properties] Properties to set
         */
        function SignInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignInfo Day.
         * @member {number} Day
         * @memberof hall.SignInfo
         * @instance
         */
        SignInfo.prototype.Day = 0;

        /**
         * SignInfo RewardMoney.
         * @member {number} RewardMoney
         * @memberof hall.SignInfo
         * @instance
         */
        SignInfo.prototype.RewardMoney = 0;

        /**
         * SignInfo CostAmount.
         * @member {number|Long} CostAmount
         * @memberof hall.SignInfo
         * @instance
         */
        SignInfo.prototype.CostAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SignInfo ConfigAmount.
         * @member {number|Long} ConfigAmount
         * @memberof hall.SignInfo
         * @instance
         */
        SignInfo.prototype.ConfigAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SignInfo State.
         * @member {number} State
         * @memberof hall.SignInfo
         * @instance
         */
        SignInfo.prototype.State = 0;

        /**
         * Creates a new SignInfo instance using the specified properties.
         * @function create
         * @memberof hall.SignInfo
         * @static
         * @param {hall.ISignInfo=} [properties] Properties to set
         * @returns {hall.SignInfo} SignInfo instance
         */
        SignInfo.create = function create(properties) {
            return new SignInfo(properties);
        };

        /**
         * Encodes the specified SignInfo message. Does not implicitly {@link hall.SignInfo.verify|verify} messages.
         * @function encode
         * @memberof hall.SignInfo
         * @static
         * @param {hall.ISignInfo} message SignInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Day);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.RewardMoney);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.CostAmount);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.ConfigAmount);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.State);
            return writer;
        };

        /**
         * Encodes the specified SignInfo message, length delimited. Does not implicitly {@link hall.SignInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.SignInfo
         * @static
         * @param {hall.ISignInfo} message SignInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignInfo message from the specified reader or buffer.
         * @function decode
         * @memberof hall.SignInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.SignInfo} SignInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.SignInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Day = reader.int32();
                    break;
                case 2:
                    message.RewardMoney = reader.int32();
                    break;
                case 3:
                    message.CostAmount = reader.int64();
                    break;
                case 4:
                    message.ConfigAmount = reader.int64();
                    break;
                case 5:
                    message.State = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Day"))
                throw $util.ProtocolError("missing required 'Day'", { instance: message });
            if (!message.hasOwnProperty("RewardMoney"))
                throw $util.ProtocolError("missing required 'RewardMoney'", { instance: message });
            if (!message.hasOwnProperty("CostAmount"))
                throw $util.ProtocolError("missing required 'CostAmount'", { instance: message });
            if (!message.hasOwnProperty("ConfigAmount"))
                throw $util.ProtocolError("missing required 'ConfigAmount'", { instance: message });
            if (!message.hasOwnProperty("State"))
                throw $util.ProtocolError("missing required 'State'", { instance: message });
            return message;
        };

        /**
         * Decodes a SignInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.SignInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.SignInfo} SignInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignInfo message.
         * @function verify
         * @memberof hall.SignInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Day))
                return "Day: integer expected";
            if (!$util.isInteger(message.RewardMoney))
                return "RewardMoney: integer expected";
            if (!$util.isInteger(message.CostAmount) && !(message.CostAmount && $util.isInteger(message.CostAmount.low) && $util.isInteger(message.CostAmount.high)))
                return "CostAmount: integer|Long expected";
            if (!$util.isInteger(message.ConfigAmount) && !(message.ConfigAmount && $util.isInteger(message.ConfigAmount.low) && $util.isInteger(message.ConfigAmount.high)))
                return "ConfigAmount: integer|Long expected";
            if (!$util.isInteger(message.State))
                return "State: integer expected";
            return null;
        };

        /**
         * Creates a SignInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.SignInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.SignInfo} SignInfo
         */
        SignInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.SignInfo)
                return object;
            var message = new $root.hall.SignInfo();
            if (object.Day != null)
                message.Day = object.Day | 0;
            if (object.RewardMoney != null)
                message.RewardMoney = object.RewardMoney | 0;
            if (object.CostAmount != null)
                if ($util.Long)
                    (message.CostAmount = $util.Long.fromValue(object.CostAmount)).unsigned = false;
                else if (typeof object.CostAmount === "string")
                    message.CostAmount = parseInt(object.CostAmount, 10);
                else if (typeof object.CostAmount === "number")
                    message.CostAmount = object.CostAmount;
                else if (typeof object.CostAmount === "object")
                    message.CostAmount = new $util.LongBits(object.CostAmount.low >>> 0, object.CostAmount.high >>> 0).toNumber();
            if (object.ConfigAmount != null)
                if ($util.Long)
                    (message.ConfigAmount = $util.Long.fromValue(object.ConfigAmount)).unsigned = false;
                else if (typeof object.ConfigAmount === "string")
                    message.ConfigAmount = parseInt(object.ConfigAmount, 10);
                else if (typeof object.ConfigAmount === "number")
                    message.ConfigAmount = object.ConfigAmount;
                else if (typeof object.ConfigAmount === "object")
                    message.ConfigAmount = new $util.LongBits(object.ConfigAmount.low >>> 0, object.ConfigAmount.high >>> 0).toNumber();
            if (object.State != null)
                message.State = object.State | 0;
            return message;
        };

        /**
         * Creates a plain object from a SignInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.SignInfo
         * @static
         * @param {hall.SignInfo} message SignInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Day = 0;
                object.RewardMoney = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CostAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CostAmount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ConfigAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ConfigAmount = options.longs === String ? "0" : 0;
                object.State = 0;
            }
            if (message.Day != null && message.hasOwnProperty("Day"))
                object.Day = message.Day;
            if (message.RewardMoney != null && message.hasOwnProperty("RewardMoney"))
                object.RewardMoney = message.RewardMoney;
            if (message.CostAmount != null && message.hasOwnProperty("CostAmount"))
                if (typeof message.CostAmount === "number")
                    object.CostAmount = options.longs === String ? String(message.CostAmount) : message.CostAmount;
                else
                    object.CostAmount = options.longs === String ? $util.Long.prototype.toString.call(message.CostAmount) : options.longs === Number ? new $util.LongBits(message.CostAmount.low >>> 0, message.CostAmount.high >>> 0).toNumber() : message.CostAmount;
            if (message.ConfigAmount != null && message.hasOwnProperty("ConfigAmount"))
                if (typeof message.ConfigAmount === "number")
                    object.ConfigAmount = options.longs === String ? String(message.ConfigAmount) : message.ConfigAmount;
                else
                    object.ConfigAmount = options.longs === String ? $util.Long.prototype.toString.call(message.ConfigAmount) : options.longs === Number ? new $util.LongBits(message.ConfigAmount.low >>> 0, message.ConfigAmount.high >>> 0).toNumber() : message.ConfigAmount;
            if (message.State != null && message.hasOwnProperty("State"))
                object.State = message.State;
            return object;
        };

        /**
         * Converts this SignInfo to JSON.
         * @function toJSON
         * @memberof hall.SignInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SignInfo;
    })();

    hall.DailySignReceiveRewardReq = (function() {

        /**
         * Properties of a DailySignReceiveRewardReq.
         * @memberof hall
         * @interface IDailySignReceiveRewardReq
         * @property {number} Day DailySignReceiveRewardReq Day
         */

        /**
         * Constructs a new DailySignReceiveRewardReq.
         * @memberof hall
         * @classdesc Represents a DailySignReceiveRewardReq.
         * @implements IDailySignReceiveRewardReq
         * @constructor
         * @param {hall.IDailySignReceiveRewardReq=} [properties] Properties to set
         */
        function DailySignReceiveRewardReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DailySignReceiveRewardReq Day.
         * @member {number} Day
         * @memberof hall.DailySignReceiveRewardReq
         * @instance
         */
        DailySignReceiveRewardReq.prototype.Day = 0;

        /**
         * Creates a new DailySignReceiveRewardReq instance using the specified properties.
         * @function create
         * @memberof hall.DailySignReceiveRewardReq
         * @static
         * @param {hall.IDailySignReceiveRewardReq=} [properties] Properties to set
         * @returns {hall.DailySignReceiveRewardReq} DailySignReceiveRewardReq instance
         */
        DailySignReceiveRewardReq.create = function create(properties) {
            return new DailySignReceiveRewardReq(properties);
        };

        /**
         * Encodes the specified DailySignReceiveRewardReq message. Does not implicitly {@link hall.DailySignReceiveRewardReq.verify|verify} messages.
         * @function encode
         * @memberof hall.DailySignReceiveRewardReq
         * @static
         * @param {hall.IDailySignReceiveRewardReq} message DailySignReceiveRewardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DailySignReceiveRewardReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Day);
            return writer;
        };

        /**
         * Encodes the specified DailySignReceiveRewardReq message, length delimited. Does not implicitly {@link hall.DailySignReceiveRewardReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.DailySignReceiveRewardReq
         * @static
         * @param {hall.IDailySignReceiveRewardReq} message DailySignReceiveRewardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DailySignReceiveRewardReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DailySignReceiveRewardReq message from the specified reader or buffer.
         * @function decode
         * @memberof hall.DailySignReceiveRewardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.DailySignReceiveRewardReq} DailySignReceiveRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DailySignReceiveRewardReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.DailySignReceiveRewardReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Day = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Day"))
                throw $util.ProtocolError("missing required 'Day'", { instance: message });
            return message;
        };

        /**
         * Decodes a DailySignReceiveRewardReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.DailySignReceiveRewardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.DailySignReceiveRewardReq} DailySignReceiveRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DailySignReceiveRewardReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DailySignReceiveRewardReq message.
         * @function verify
         * @memberof hall.DailySignReceiveRewardReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DailySignReceiveRewardReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Day))
                return "Day: integer expected";
            return null;
        };

        /**
         * Creates a DailySignReceiveRewardReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.DailySignReceiveRewardReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.DailySignReceiveRewardReq} DailySignReceiveRewardReq
         */
        DailySignReceiveRewardReq.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.DailySignReceiveRewardReq)
                return object;
            var message = new $root.hall.DailySignReceiveRewardReq();
            if (object.Day != null)
                message.Day = object.Day | 0;
            return message;
        };

        /**
         * Creates a plain object from a DailySignReceiveRewardReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.DailySignReceiveRewardReq
         * @static
         * @param {hall.DailySignReceiveRewardReq} message DailySignReceiveRewardReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DailySignReceiveRewardReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Day = 0;
            if (message.Day != null && message.hasOwnProperty("Day"))
                object.Day = message.Day;
            return object;
        };

        /**
         * Converts this DailySignReceiveRewardReq to JSON.
         * @function toJSON
         * @memberof hall.DailySignReceiveRewardReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DailySignReceiveRewardReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DailySignReceiveRewardReq;
    })();

    hall.DailySignReceiveRewardRes = (function() {

        /**
         * Properties of a DailySignReceiveRewardRes.
         * @memberof hall
         * @interface IDailySignReceiveRewardRes
         * @property {number} Day DailySignReceiveRewardRes Day
         * @property {number} Code DailySignReceiveRewardRes Code
         * @property {string|null} [Msg] DailySignReceiveRewardRes Msg
         * @property {hall.ISignReward|null} [Reward] DailySignReceiveRewardRes Reward
         */

        /**
         * Constructs a new DailySignReceiveRewardRes.
         * @memberof hall
         * @classdesc Represents a DailySignReceiveRewardRes.
         * @implements IDailySignReceiveRewardRes
         * @constructor
         * @param {hall.IDailySignReceiveRewardRes=} [properties] Properties to set
         */
        function DailySignReceiveRewardRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DailySignReceiveRewardRes Day.
         * @member {number} Day
         * @memberof hall.DailySignReceiveRewardRes
         * @instance
         */
        DailySignReceiveRewardRes.prototype.Day = 0;

        /**
         * DailySignReceiveRewardRes Code.
         * @member {number} Code
         * @memberof hall.DailySignReceiveRewardRes
         * @instance
         */
        DailySignReceiveRewardRes.prototype.Code = 0;

        /**
         * DailySignReceiveRewardRes Msg.
         * @member {string} Msg
         * @memberof hall.DailySignReceiveRewardRes
         * @instance
         */
        DailySignReceiveRewardRes.prototype.Msg = "";

        /**
         * DailySignReceiveRewardRes Reward.
         * @member {hall.ISignReward|null|undefined} Reward
         * @memberof hall.DailySignReceiveRewardRes
         * @instance
         */
        DailySignReceiveRewardRes.prototype.Reward = null;

        /**
         * Creates a new DailySignReceiveRewardRes instance using the specified properties.
         * @function create
         * @memberof hall.DailySignReceiveRewardRes
         * @static
         * @param {hall.IDailySignReceiveRewardRes=} [properties] Properties to set
         * @returns {hall.DailySignReceiveRewardRes} DailySignReceiveRewardRes instance
         */
        DailySignReceiveRewardRes.create = function create(properties) {
            return new DailySignReceiveRewardRes(properties);
        };

        /**
         * Encodes the specified DailySignReceiveRewardRes message. Does not implicitly {@link hall.DailySignReceiveRewardRes.verify|verify} messages.
         * @function encode
         * @memberof hall.DailySignReceiveRewardRes
         * @static
         * @param {hall.IDailySignReceiveRewardRes} message DailySignReceiveRewardRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DailySignReceiveRewardRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Day);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Code);
            if (message.Msg != null && Object.hasOwnProperty.call(message, "Msg"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Msg);
            if (message.Reward != null && Object.hasOwnProperty.call(message, "Reward"))
                $root.hall.SignReward.encode(message.Reward, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DailySignReceiveRewardRes message, length delimited. Does not implicitly {@link hall.DailySignReceiveRewardRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.DailySignReceiveRewardRes
         * @static
         * @param {hall.IDailySignReceiveRewardRes} message DailySignReceiveRewardRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DailySignReceiveRewardRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DailySignReceiveRewardRes message from the specified reader or buffer.
         * @function decode
         * @memberof hall.DailySignReceiveRewardRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.DailySignReceiveRewardRes} DailySignReceiveRewardRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DailySignReceiveRewardRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.DailySignReceiveRewardRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Day = reader.int32();
                    break;
                case 2:
                    message.Code = reader.int32();
                    break;
                case 3:
                    message.Msg = reader.string();
                    break;
                case 4:
                    message.Reward = $root.hall.SignReward.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Day"))
                throw $util.ProtocolError("missing required 'Day'", { instance: message });
            if (!message.hasOwnProperty("Code"))
                throw $util.ProtocolError("missing required 'Code'", { instance: message });
            return message;
        };

        /**
         * Decodes a DailySignReceiveRewardRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.DailySignReceiveRewardRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.DailySignReceiveRewardRes} DailySignReceiveRewardRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DailySignReceiveRewardRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DailySignReceiveRewardRes message.
         * @function verify
         * @memberof hall.DailySignReceiveRewardRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DailySignReceiveRewardRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Day))
                return "Day: integer expected";
            if (!$util.isInteger(message.Code))
                return "Code: integer expected";
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                if (!$util.isString(message.Msg))
                    return "Msg: string expected";
            if (message.Reward != null && message.hasOwnProperty("Reward")) {
                var error = $root.hall.SignReward.verify(message.Reward);
                if (error)
                    return "Reward." + error;
            }
            return null;
        };

        /**
         * Creates a DailySignReceiveRewardRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.DailySignReceiveRewardRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.DailySignReceiveRewardRes} DailySignReceiveRewardRes
         */
        DailySignReceiveRewardRes.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.DailySignReceiveRewardRes)
                return object;
            var message = new $root.hall.DailySignReceiveRewardRes();
            if (object.Day != null)
                message.Day = object.Day | 0;
            if (object.Code != null)
                message.Code = object.Code | 0;
            if (object.Msg != null)
                message.Msg = String(object.Msg);
            if (object.Reward != null) {
                if (typeof object.Reward !== "object")
                    throw TypeError(".hall.DailySignReceiveRewardRes.Reward: object expected");
                message.Reward = $root.hall.SignReward.fromObject(object.Reward);
            }
            return message;
        };

        /**
         * Creates a plain object from a DailySignReceiveRewardRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.DailySignReceiveRewardRes
         * @static
         * @param {hall.DailySignReceiveRewardRes} message DailySignReceiveRewardRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DailySignReceiveRewardRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Day = 0;
                object.Code = 0;
                object.Msg = "";
                object.Reward = null;
            }
            if (message.Day != null && message.hasOwnProperty("Day"))
                object.Day = message.Day;
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                object.Msg = message.Msg;
            if (message.Reward != null && message.hasOwnProperty("Reward"))
                object.Reward = $root.hall.SignReward.toObject(message.Reward, options);
            return object;
        };

        /**
         * Converts this DailySignReceiveRewardRes to JSON.
         * @function toJSON
         * @memberof hall.DailySignReceiveRewardRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DailySignReceiveRewardRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DailySignReceiveRewardRes;
    })();

    hall.SignReward = (function() {

        /**
         * Properties of a SignReward.
         * @memberof hall
         * @interface ISignReward
         * @property {number|Long} RewardAmount SignReward RewardAmount
         * @property {number|Long} BankAmount SignReward BankAmount
         * @property {number|null} [Index] SignReward Index
         */

        /**
         * Constructs a new SignReward.
         * @memberof hall
         * @classdesc Represents a SignReward.
         * @implements ISignReward
         * @constructor
         * @param {hall.ISignReward=} [properties] Properties to set
         */
        function SignReward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignReward RewardAmount.
         * @member {number|Long} RewardAmount
         * @memberof hall.SignReward
         * @instance
         */
        SignReward.prototype.RewardAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SignReward BankAmount.
         * @member {number|Long} BankAmount
         * @memberof hall.SignReward
         * @instance
         */
        SignReward.prototype.BankAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SignReward Index.
         * @member {number} Index
         * @memberof hall.SignReward
         * @instance
         */
        SignReward.prototype.Index = 0;

        /**
         * Creates a new SignReward instance using the specified properties.
         * @function create
         * @memberof hall.SignReward
         * @static
         * @param {hall.ISignReward=} [properties] Properties to set
         * @returns {hall.SignReward} SignReward instance
         */
        SignReward.create = function create(properties) {
            return new SignReward(properties);
        };

        /**
         * Encodes the specified SignReward message. Does not implicitly {@link hall.SignReward.verify|verify} messages.
         * @function encode
         * @memberof hall.SignReward
         * @static
         * @param {hall.ISignReward} message SignReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignReward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.RewardAmount);
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.BankAmount);
            if (message.Index != null && Object.hasOwnProperty.call(message, "Index"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Index);
            return writer;
        };

        /**
         * Encodes the specified SignReward message, length delimited. Does not implicitly {@link hall.SignReward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.SignReward
         * @static
         * @param {hall.ISignReward} message SignReward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignReward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignReward message from the specified reader or buffer.
         * @function decode
         * @memberof hall.SignReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.SignReward} SignReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignReward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.SignReward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RewardAmount = reader.int64();
                    break;
                case 2:
                    message.BankAmount = reader.int64();
                    break;
                case 3:
                    message.Index = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("RewardAmount"))
                throw $util.ProtocolError("missing required 'RewardAmount'", { instance: message });
            if (!message.hasOwnProperty("BankAmount"))
                throw $util.ProtocolError("missing required 'BankAmount'", { instance: message });
            return message;
        };

        /**
         * Decodes a SignReward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.SignReward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.SignReward} SignReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignReward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignReward message.
         * @function verify
         * @memberof hall.SignReward
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignReward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.RewardAmount) && !(message.RewardAmount && $util.isInteger(message.RewardAmount.low) && $util.isInteger(message.RewardAmount.high)))
                return "RewardAmount: integer|Long expected";
            if (!$util.isInteger(message.BankAmount) && !(message.BankAmount && $util.isInteger(message.BankAmount.low) && $util.isInteger(message.BankAmount.high)))
                return "BankAmount: integer|Long expected";
            if (message.Index != null && message.hasOwnProperty("Index"))
                if (!$util.isInteger(message.Index))
                    return "Index: integer expected";
            return null;
        };

        /**
         * Creates a SignReward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.SignReward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.SignReward} SignReward
         */
        SignReward.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.SignReward)
                return object;
            var message = new $root.hall.SignReward();
            if (object.RewardAmount != null)
                if ($util.Long)
                    (message.RewardAmount = $util.Long.fromValue(object.RewardAmount)).unsigned = false;
                else if (typeof object.RewardAmount === "string")
                    message.RewardAmount = parseInt(object.RewardAmount, 10);
                else if (typeof object.RewardAmount === "number")
                    message.RewardAmount = object.RewardAmount;
                else if (typeof object.RewardAmount === "object")
                    message.RewardAmount = new $util.LongBits(object.RewardAmount.low >>> 0, object.RewardAmount.high >>> 0).toNumber();
            if (object.BankAmount != null)
                if ($util.Long)
                    (message.BankAmount = $util.Long.fromValue(object.BankAmount)).unsigned = false;
                else if (typeof object.BankAmount === "string")
                    message.BankAmount = parseInt(object.BankAmount, 10);
                else if (typeof object.BankAmount === "number")
                    message.BankAmount = object.BankAmount;
                else if (typeof object.BankAmount === "object")
                    message.BankAmount = new $util.LongBits(object.BankAmount.low >>> 0, object.BankAmount.high >>> 0).toNumber();
            if (object.Index != null)
                message.Index = object.Index | 0;
            return message;
        };

        /**
         * Creates a plain object from a SignReward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.SignReward
         * @static
         * @param {hall.SignReward} message SignReward
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignReward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.RewardAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.RewardAmount = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BankAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BankAmount = options.longs === String ? "0" : 0;
                object.Index = 0;
            }
            if (message.RewardAmount != null && message.hasOwnProperty("RewardAmount"))
                if (typeof message.RewardAmount === "number")
                    object.RewardAmount = options.longs === String ? String(message.RewardAmount) : message.RewardAmount;
                else
                    object.RewardAmount = options.longs === String ? $util.Long.prototype.toString.call(message.RewardAmount) : options.longs === Number ? new $util.LongBits(message.RewardAmount.low >>> 0, message.RewardAmount.high >>> 0).toNumber() : message.RewardAmount;
            if (message.BankAmount != null && message.hasOwnProperty("BankAmount"))
                if (typeof message.BankAmount === "number")
                    object.BankAmount = options.longs === String ? String(message.BankAmount) : message.BankAmount;
                else
                    object.BankAmount = options.longs === String ? $util.Long.prototype.toString.call(message.BankAmount) : options.longs === Number ? new $util.LongBits(message.BankAmount.low >>> 0, message.BankAmount.high >>> 0).toNumber() : message.BankAmount;
            if (message.Index != null && message.hasOwnProperty("Index"))
                object.Index = message.Index;
            return object;
        };

        /**
         * Converts this SignReward to JSON.
         * @function toJSON
         * @memberof hall.SignReward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignReward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SignReward;
    })();

    hall.DailySignLotteryRes = (function() {

        /**
         * Properties of a DailySignLotteryRes.
         * @memberof hall
         * @interface IDailySignLotteryRes
         * @property {number} Code DailySignLotteryRes Code
         * @property {string|null} [Msg] DailySignLotteryRes Msg
         * @property {hall.ISignReward|null} [Reward] DailySignLotteryRes Reward
         */

        /**
         * Constructs a new DailySignLotteryRes.
         * @memberof hall
         * @classdesc Represents a DailySignLotteryRes.
         * @implements IDailySignLotteryRes
         * @constructor
         * @param {hall.IDailySignLotteryRes=} [properties] Properties to set
         */
        function DailySignLotteryRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DailySignLotteryRes Code.
         * @member {number} Code
         * @memberof hall.DailySignLotteryRes
         * @instance
         */
        DailySignLotteryRes.prototype.Code = 0;

        /**
         * DailySignLotteryRes Msg.
         * @member {string} Msg
         * @memberof hall.DailySignLotteryRes
         * @instance
         */
        DailySignLotteryRes.prototype.Msg = "";

        /**
         * DailySignLotteryRes Reward.
         * @member {hall.ISignReward|null|undefined} Reward
         * @memberof hall.DailySignLotteryRes
         * @instance
         */
        DailySignLotteryRes.prototype.Reward = null;

        /**
         * Creates a new DailySignLotteryRes instance using the specified properties.
         * @function create
         * @memberof hall.DailySignLotteryRes
         * @static
         * @param {hall.IDailySignLotteryRes=} [properties] Properties to set
         * @returns {hall.DailySignLotteryRes} DailySignLotteryRes instance
         */
        DailySignLotteryRes.create = function create(properties) {
            return new DailySignLotteryRes(properties);
        };

        /**
         * Encodes the specified DailySignLotteryRes message. Does not implicitly {@link hall.DailySignLotteryRes.verify|verify} messages.
         * @function encode
         * @memberof hall.DailySignLotteryRes
         * @static
         * @param {hall.IDailySignLotteryRes} message DailySignLotteryRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DailySignLotteryRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            if (message.Msg != null && Object.hasOwnProperty.call(message, "Msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Msg);
            if (message.Reward != null && Object.hasOwnProperty.call(message, "Reward"))
                $root.hall.SignReward.encode(message.Reward, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified DailySignLotteryRes message, length delimited. Does not implicitly {@link hall.DailySignLotteryRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.DailySignLotteryRes
         * @static
         * @param {hall.IDailySignLotteryRes} message DailySignLotteryRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DailySignLotteryRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DailySignLotteryRes message from the specified reader or buffer.
         * @function decode
         * @memberof hall.DailySignLotteryRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.DailySignLotteryRes} DailySignLotteryRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DailySignLotteryRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.DailySignLotteryRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                case 2:
                    message.Msg = reader.string();
                    break;
                case 3:
                    message.Reward = $root.hall.SignReward.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Code"))
                throw $util.ProtocolError("missing required 'Code'", { instance: message });
            return message;
        };

        /**
         * Decodes a DailySignLotteryRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.DailySignLotteryRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.DailySignLotteryRes} DailySignLotteryRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DailySignLotteryRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DailySignLotteryRes message.
         * @function verify
         * @memberof hall.DailySignLotteryRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DailySignLotteryRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Code))
                return "Code: integer expected";
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                if (!$util.isString(message.Msg))
                    return "Msg: string expected";
            if (message.Reward != null && message.hasOwnProperty("Reward")) {
                var error = $root.hall.SignReward.verify(message.Reward);
                if (error)
                    return "Reward." + error;
            }
            return null;
        };

        /**
         * Creates a DailySignLotteryRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.DailySignLotteryRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.DailySignLotteryRes} DailySignLotteryRes
         */
        DailySignLotteryRes.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.DailySignLotteryRes)
                return object;
            var message = new $root.hall.DailySignLotteryRes();
            if (object.Code != null)
                message.Code = object.Code | 0;
            if (object.Msg != null)
                message.Msg = String(object.Msg);
            if (object.Reward != null) {
                if (typeof object.Reward !== "object")
                    throw TypeError(".hall.DailySignLotteryRes.Reward: object expected");
                message.Reward = $root.hall.SignReward.fromObject(object.Reward);
            }
            return message;
        };

        /**
         * Creates a plain object from a DailySignLotteryRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.DailySignLotteryRes
         * @static
         * @param {hall.DailySignLotteryRes} message DailySignLotteryRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DailySignLotteryRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = 0;
                object.Msg = "";
                object.Reward = null;
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Msg != null && message.hasOwnProperty("Msg"))
                object.Msg = message.Msg;
            if (message.Reward != null && message.hasOwnProperty("Reward"))
                object.Reward = $root.hall.SignReward.toObject(message.Reward, options);
            return object;
        };

        /**
         * Converts this DailySignLotteryRes to JSON.
         * @function toJSON
         * @memberof hall.DailySignLotteryRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DailySignLotteryRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DailySignLotteryRes;
    })();

    hall.ReliefConfigRet = (function() {

        /**
         * Properties of a ReliefConfigRet.
         * @memberof hall
         * @interface IReliefConfigRet
         * @property {number} Reward ReliefConfigRet Reward
         * @property {number} LessThanMoney ReliefConfigRet LessThanMoney
         * @property {number} MaxCollectTimes ReliefConfigRet MaxCollectTimes
         * @property {number} DayCollectTimes ReliefConfigRet DayCollectTimes
         * @property {string|null} [Desc] ReliefConfigRet Desc
         */

        /**
         * Constructs a new ReliefConfigRet.
         * @memberof hall
         * @classdesc Represents a ReliefConfigRet.
         * @implements IReliefConfigRet
         * @constructor
         * @param {hall.IReliefConfigRet=} [properties] Properties to set
         */
        function ReliefConfigRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReliefConfigRet Reward.
         * @member {number} Reward
         * @memberof hall.ReliefConfigRet
         * @instance
         */
        ReliefConfigRet.prototype.Reward = 0;

        /**
         * ReliefConfigRet LessThanMoney.
         * @member {number} LessThanMoney
         * @memberof hall.ReliefConfigRet
         * @instance
         */
        ReliefConfigRet.prototype.LessThanMoney = 0;

        /**
         * ReliefConfigRet MaxCollectTimes.
         * @member {number} MaxCollectTimes
         * @memberof hall.ReliefConfigRet
         * @instance
         */
        ReliefConfigRet.prototype.MaxCollectTimes = 0;

        /**
         * ReliefConfigRet DayCollectTimes.
         * @member {number} DayCollectTimes
         * @memberof hall.ReliefConfigRet
         * @instance
         */
        ReliefConfigRet.prototype.DayCollectTimes = 0;

        /**
         * ReliefConfigRet Desc.
         * @member {string} Desc
         * @memberof hall.ReliefConfigRet
         * @instance
         */
        ReliefConfigRet.prototype.Desc = "";

        /**
         * Creates a new ReliefConfigRet instance using the specified properties.
         * @function create
         * @memberof hall.ReliefConfigRet
         * @static
         * @param {hall.IReliefConfigRet=} [properties] Properties to set
         * @returns {hall.ReliefConfigRet} ReliefConfigRet instance
         */
        ReliefConfigRet.create = function create(properties) {
            return new ReliefConfigRet(properties);
        };

        /**
         * Encodes the specified ReliefConfigRet message. Does not implicitly {@link hall.ReliefConfigRet.verify|verify} messages.
         * @function encode
         * @memberof hall.ReliefConfigRet
         * @static
         * @param {hall.IReliefConfigRet} message ReliefConfigRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReliefConfigRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Reward);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.LessThanMoney);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.MaxCollectTimes);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.DayCollectTimes);
            if (message.Desc != null && Object.hasOwnProperty.call(message, "Desc"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Desc);
            return writer;
        };

        /**
         * Encodes the specified ReliefConfigRet message, length delimited. Does not implicitly {@link hall.ReliefConfigRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.ReliefConfigRet
         * @static
         * @param {hall.IReliefConfigRet} message ReliefConfigRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReliefConfigRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReliefConfigRet message from the specified reader or buffer.
         * @function decode
         * @memberof hall.ReliefConfigRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.ReliefConfigRet} ReliefConfigRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReliefConfigRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.ReliefConfigRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Reward = reader.int32();
                    break;
                case 2:
                    message.LessThanMoney = reader.int32();
                    break;
                case 3:
                    message.MaxCollectTimes = reader.int32();
                    break;
                case 4:
                    message.DayCollectTimes = reader.int32();
                    break;
                case 5:
                    message.Desc = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Reward"))
                throw $util.ProtocolError("missing required 'Reward'", { instance: message });
            if (!message.hasOwnProperty("LessThanMoney"))
                throw $util.ProtocolError("missing required 'LessThanMoney'", { instance: message });
            if (!message.hasOwnProperty("MaxCollectTimes"))
                throw $util.ProtocolError("missing required 'MaxCollectTimes'", { instance: message });
            if (!message.hasOwnProperty("DayCollectTimes"))
                throw $util.ProtocolError("missing required 'DayCollectTimes'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReliefConfigRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.ReliefConfigRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.ReliefConfigRet} ReliefConfigRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReliefConfigRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReliefConfigRet message.
         * @function verify
         * @memberof hall.ReliefConfigRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReliefConfigRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Reward))
                return "Reward: integer expected";
            if (!$util.isInteger(message.LessThanMoney))
                return "LessThanMoney: integer expected";
            if (!$util.isInteger(message.MaxCollectTimes))
                return "MaxCollectTimes: integer expected";
            if (!$util.isInteger(message.DayCollectTimes))
                return "DayCollectTimes: integer expected";
            if (message.Desc != null && message.hasOwnProperty("Desc"))
                if (!$util.isString(message.Desc))
                    return "Desc: string expected";
            return null;
        };

        /**
         * Creates a ReliefConfigRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.ReliefConfigRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.ReliefConfigRet} ReliefConfigRet
         */
        ReliefConfigRet.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.ReliefConfigRet)
                return object;
            var message = new $root.hall.ReliefConfigRet();
            if (object.Reward != null)
                message.Reward = object.Reward | 0;
            if (object.LessThanMoney != null)
                message.LessThanMoney = object.LessThanMoney | 0;
            if (object.MaxCollectTimes != null)
                message.MaxCollectTimes = object.MaxCollectTimes | 0;
            if (object.DayCollectTimes != null)
                message.DayCollectTimes = object.DayCollectTimes | 0;
            if (object.Desc != null)
                message.Desc = String(object.Desc);
            return message;
        };

        /**
         * Creates a plain object from a ReliefConfigRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.ReliefConfigRet
         * @static
         * @param {hall.ReliefConfigRet} message ReliefConfigRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReliefConfigRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Reward = 0;
                object.LessThanMoney = 0;
                object.MaxCollectTimes = 0;
                object.DayCollectTimes = 0;
                object.Desc = "";
            }
            if (message.Reward != null && message.hasOwnProperty("Reward"))
                object.Reward = message.Reward;
            if (message.LessThanMoney != null && message.hasOwnProperty("LessThanMoney"))
                object.LessThanMoney = message.LessThanMoney;
            if (message.MaxCollectTimes != null && message.hasOwnProperty("MaxCollectTimes"))
                object.MaxCollectTimes = message.MaxCollectTimes;
            if (message.DayCollectTimes != null && message.hasOwnProperty("DayCollectTimes"))
                object.DayCollectTimes = message.DayCollectTimes;
            if (message.Desc != null && message.hasOwnProperty("Desc"))
                object.Desc = message.Desc;
            return object;
        };

        /**
         * Converts this ReliefConfigRet to JSON.
         * @function toJSON
         * @memberof hall.ReliefConfigRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReliefConfigRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReliefConfigRet;
    })();

    hall.ReliefCollectRet = (function() {

        /**
         * Properties of a ReliefCollectRet.
         * @memberof hall
         * @interface IReliefCollectRet
         * @property {number} Code ReliefCollectRet Code
         * @property {string|null} [Message] ReliefCollectRet Message
         * @property {number|null} [Reward] ReliefCollectRet Reward
         * @property {number|null} [DayCollectTimes] ReliefCollectRet DayCollectTimes
         */

        /**
         * Constructs a new ReliefCollectRet.
         * @memberof hall
         * @classdesc Represents a ReliefCollectRet.
         * @implements IReliefCollectRet
         * @constructor
         * @param {hall.IReliefCollectRet=} [properties] Properties to set
         */
        function ReliefCollectRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReliefCollectRet Code.
         * @member {number} Code
         * @memberof hall.ReliefCollectRet
         * @instance
         */
        ReliefCollectRet.prototype.Code = 0;

        /**
         * ReliefCollectRet Message.
         * @member {string} Message
         * @memberof hall.ReliefCollectRet
         * @instance
         */
        ReliefCollectRet.prototype.Message = "";

        /**
         * ReliefCollectRet Reward.
         * @member {number} Reward
         * @memberof hall.ReliefCollectRet
         * @instance
         */
        ReliefCollectRet.prototype.Reward = 0;

        /**
         * ReliefCollectRet DayCollectTimes.
         * @member {number} DayCollectTimes
         * @memberof hall.ReliefCollectRet
         * @instance
         */
        ReliefCollectRet.prototype.DayCollectTimes = 0;

        /**
         * Creates a new ReliefCollectRet instance using the specified properties.
         * @function create
         * @memberof hall.ReliefCollectRet
         * @static
         * @param {hall.IReliefCollectRet=} [properties] Properties to set
         * @returns {hall.ReliefCollectRet} ReliefCollectRet instance
         */
        ReliefCollectRet.create = function create(properties) {
            return new ReliefCollectRet(properties);
        };

        /**
         * Encodes the specified ReliefCollectRet message. Does not implicitly {@link hall.ReliefCollectRet.verify|verify} messages.
         * @function encode
         * @memberof hall.ReliefCollectRet
         * @static
         * @param {hall.IReliefCollectRet} message ReliefCollectRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReliefCollectRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Message);
            if (message.Reward != null && Object.hasOwnProperty.call(message, "Reward"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Reward);
            if (message.DayCollectTimes != null && Object.hasOwnProperty.call(message, "DayCollectTimes"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.DayCollectTimes);
            return writer;
        };

        /**
         * Encodes the specified ReliefCollectRet message, length delimited. Does not implicitly {@link hall.ReliefCollectRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.ReliefCollectRet
         * @static
         * @param {hall.IReliefCollectRet} message ReliefCollectRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReliefCollectRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReliefCollectRet message from the specified reader or buffer.
         * @function decode
         * @memberof hall.ReliefCollectRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.ReliefCollectRet} ReliefCollectRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReliefCollectRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.ReliefCollectRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Code = reader.int32();
                    break;
                case 2:
                    message.Message = reader.string();
                    break;
                case 3:
                    message.Reward = reader.int32();
                    break;
                case 4:
                    message.DayCollectTimes = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Code"))
                throw $util.ProtocolError("missing required 'Code'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReliefCollectRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.ReliefCollectRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.ReliefCollectRet} ReliefCollectRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReliefCollectRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReliefCollectRet message.
         * @function verify
         * @memberof hall.ReliefCollectRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReliefCollectRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Code))
                return "Code: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.Reward != null && message.hasOwnProperty("Reward"))
                if (!$util.isInteger(message.Reward))
                    return "Reward: integer expected";
            if (message.DayCollectTimes != null && message.hasOwnProperty("DayCollectTimes"))
                if (!$util.isInteger(message.DayCollectTimes))
                    return "DayCollectTimes: integer expected";
            return null;
        };

        /**
         * Creates a ReliefCollectRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.ReliefCollectRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.ReliefCollectRet} ReliefCollectRet
         */
        ReliefCollectRet.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.ReliefCollectRet)
                return object;
            var message = new $root.hall.ReliefCollectRet();
            if (object.Code != null)
                message.Code = object.Code | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.Reward != null)
                message.Reward = object.Reward | 0;
            if (object.DayCollectTimes != null)
                message.DayCollectTimes = object.DayCollectTimes | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReliefCollectRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.ReliefCollectRet
         * @static
         * @param {hall.ReliefCollectRet} message ReliefCollectRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReliefCollectRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = 0;
                object.Message = "";
                object.Reward = 0;
                object.DayCollectTimes = 0;
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            if (message.Reward != null && message.hasOwnProperty("Reward"))
                object.Reward = message.Reward;
            if (message.DayCollectTimes != null && message.hasOwnProperty("DayCollectTimes"))
                object.DayCollectTimes = message.DayCollectTimes;
            return object;
        };

        /**
         * Converts this ReliefCollectRet to JSON.
         * @function toJSON
         * @memberof hall.ReliefCollectRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReliefCollectRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReliefCollectRet;
    })();

    hall.ReceiveMailAnnexReq = (function() {

        /**
         * Properties of a ReceiveMailAnnexReq.
         * @memberof hall
         * @interface IReceiveMailAnnexReq
         * @property {number} UserID ReceiveMailAnnexReq UserID
         * @property {number} MsgID ReceiveMailAnnexReq MsgID
         * @property {number} IsAll ReceiveMailAnnexReq IsAll
         */

        /**
         * Constructs a new ReceiveMailAnnexReq.
         * @memberof hall
         * @classdesc Represents a ReceiveMailAnnexReq.
         * @implements IReceiveMailAnnexReq
         * @constructor
         * @param {hall.IReceiveMailAnnexReq=} [properties] Properties to set
         */
        function ReceiveMailAnnexReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReceiveMailAnnexReq UserID.
         * @member {number} UserID
         * @memberof hall.ReceiveMailAnnexReq
         * @instance
         */
        ReceiveMailAnnexReq.prototype.UserID = 0;

        /**
         * ReceiveMailAnnexReq MsgID.
         * @member {number} MsgID
         * @memberof hall.ReceiveMailAnnexReq
         * @instance
         */
        ReceiveMailAnnexReq.prototype.MsgID = 0;

        /**
         * ReceiveMailAnnexReq IsAll.
         * @member {number} IsAll
         * @memberof hall.ReceiveMailAnnexReq
         * @instance
         */
        ReceiveMailAnnexReq.prototype.IsAll = 0;

        /**
         * Creates a new ReceiveMailAnnexReq instance using the specified properties.
         * @function create
         * @memberof hall.ReceiveMailAnnexReq
         * @static
         * @param {hall.IReceiveMailAnnexReq=} [properties] Properties to set
         * @returns {hall.ReceiveMailAnnexReq} ReceiveMailAnnexReq instance
         */
        ReceiveMailAnnexReq.create = function create(properties) {
            return new ReceiveMailAnnexReq(properties);
        };

        /**
         * Encodes the specified ReceiveMailAnnexReq message. Does not implicitly {@link hall.ReceiveMailAnnexReq.verify|verify} messages.
         * @function encode
         * @memberof hall.ReceiveMailAnnexReq
         * @static
         * @param {hall.IReceiveMailAnnexReq} message ReceiveMailAnnexReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiveMailAnnexReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.MsgID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.IsAll);
            return writer;
        };

        /**
         * Encodes the specified ReceiveMailAnnexReq message, length delimited. Does not implicitly {@link hall.ReceiveMailAnnexReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.ReceiveMailAnnexReq
         * @static
         * @param {hall.IReceiveMailAnnexReq} message ReceiveMailAnnexReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiveMailAnnexReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReceiveMailAnnexReq message from the specified reader or buffer.
         * @function decode
         * @memberof hall.ReceiveMailAnnexReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.ReceiveMailAnnexReq} ReceiveMailAnnexReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiveMailAnnexReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.ReceiveMailAnnexReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.MsgID = reader.int32();
                    break;
                case 3:
                    message.IsAll = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            if (!message.hasOwnProperty("IsAll"))
                throw $util.ProtocolError("missing required 'IsAll'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReceiveMailAnnexReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.ReceiveMailAnnexReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.ReceiveMailAnnexReq} ReceiveMailAnnexReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiveMailAnnexReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReceiveMailAnnexReq message.
         * @function verify
         * @memberof hall.ReceiveMailAnnexReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReceiveMailAnnexReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (!$util.isInteger(message.IsAll))
                return "IsAll: integer expected";
            return null;
        };

        /**
         * Creates a ReceiveMailAnnexReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.ReceiveMailAnnexReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.ReceiveMailAnnexReq} ReceiveMailAnnexReq
         */
        ReceiveMailAnnexReq.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.ReceiveMailAnnexReq)
                return object;
            var message = new $root.hall.ReceiveMailAnnexReq();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.IsAll != null)
                message.IsAll = object.IsAll | 0;
            return message;
        };

        /**
         * Creates a plain object from a ReceiveMailAnnexReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.ReceiveMailAnnexReq
         * @static
         * @param {hall.ReceiveMailAnnexReq} message ReceiveMailAnnexReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReceiveMailAnnexReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.MsgID = 0;
                object.IsAll = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.IsAll != null && message.hasOwnProperty("IsAll"))
                object.IsAll = message.IsAll;
            return object;
        };

        /**
         * Converts this ReceiveMailAnnexReq to JSON.
         * @function toJSON
         * @memberof hall.ReceiveMailAnnexReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReceiveMailAnnexReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReceiveMailAnnexReq;
    })();

    hall.ReceiveMailAnnexRet = (function() {

        /**
         * Properties of a ReceiveMailAnnexRet.
         * @memberof hall
         * @interface IReceiveMailAnnexRet
         * @property {number} UserID ReceiveMailAnnexRet UserID
         * @property {number} MsgID ReceiveMailAnnexRet MsgID
         * @property {number} IsAll ReceiveMailAnnexRet IsAll
         * @property {number} Code ReceiveMailAnnexRet Code
         * @property {string|null} [Message] ReceiveMailAnnexRet Message
         * @property {Array.<hall.IMailAnnex>|null} [MailAnnexList] ReceiveMailAnnexRet MailAnnexList
         */

        /**
         * Constructs a new ReceiveMailAnnexRet.
         * @memberof hall
         * @classdesc Represents a ReceiveMailAnnexRet.
         * @implements IReceiveMailAnnexRet
         * @constructor
         * @param {hall.IReceiveMailAnnexRet=} [properties] Properties to set
         */
        function ReceiveMailAnnexRet(properties) {
            this.MailAnnexList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReceiveMailAnnexRet UserID.
         * @member {number} UserID
         * @memberof hall.ReceiveMailAnnexRet
         * @instance
         */
        ReceiveMailAnnexRet.prototype.UserID = 0;

        /**
         * ReceiveMailAnnexRet MsgID.
         * @member {number} MsgID
         * @memberof hall.ReceiveMailAnnexRet
         * @instance
         */
        ReceiveMailAnnexRet.prototype.MsgID = 0;

        /**
         * ReceiveMailAnnexRet IsAll.
         * @member {number} IsAll
         * @memberof hall.ReceiveMailAnnexRet
         * @instance
         */
        ReceiveMailAnnexRet.prototype.IsAll = 0;

        /**
         * ReceiveMailAnnexRet Code.
         * @member {number} Code
         * @memberof hall.ReceiveMailAnnexRet
         * @instance
         */
        ReceiveMailAnnexRet.prototype.Code = 0;

        /**
         * ReceiveMailAnnexRet Message.
         * @member {string} Message
         * @memberof hall.ReceiveMailAnnexRet
         * @instance
         */
        ReceiveMailAnnexRet.prototype.Message = "";

        /**
         * ReceiveMailAnnexRet MailAnnexList.
         * @member {Array.<hall.IMailAnnex>} MailAnnexList
         * @memberof hall.ReceiveMailAnnexRet
         * @instance
         */
        ReceiveMailAnnexRet.prototype.MailAnnexList = $util.emptyArray;

        /**
         * Creates a new ReceiveMailAnnexRet instance using the specified properties.
         * @function create
         * @memberof hall.ReceiveMailAnnexRet
         * @static
         * @param {hall.IReceiveMailAnnexRet=} [properties] Properties to set
         * @returns {hall.ReceiveMailAnnexRet} ReceiveMailAnnexRet instance
         */
        ReceiveMailAnnexRet.create = function create(properties) {
            return new ReceiveMailAnnexRet(properties);
        };

        /**
         * Encodes the specified ReceiveMailAnnexRet message. Does not implicitly {@link hall.ReceiveMailAnnexRet.verify|verify} messages.
         * @function encode
         * @memberof hall.ReceiveMailAnnexRet
         * @static
         * @param {hall.IReceiveMailAnnexRet} message ReceiveMailAnnexRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiveMailAnnexRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.MsgID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.IsAll);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Code);
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Message);
            if (message.MailAnnexList != null && message.MailAnnexList.length)
                for (var i = 0; i < message.MailAnnexList.length; ++i)
                    $root.hall.MailAnnex.encode(message.MailAnnexList[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ReceiveMailAnnexRet message, length delimited. Does not implicitly {@link hall.ReceiveMailAnnexRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.ReceiveMailAnnexRet
         * @static
         * @param {hall.IReceiveMailAnnexRet} message ReceiveMailAnnexRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReceiveMailAnnexRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReceiveMailAnnexRet message from the specified reader or buffer.
         * @function decode
         * @memberof hall.ReceiveMailAnnexRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.ReceiveMailAnnexRet} ReceiveMailAnnexRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiveMailAnnexRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.ReceiveMailAnnexRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.MsgID = reader.int32();
                    break;
                case 3:
                    message.IsAll = reader.int32();
                    break;
                case 4:
                    message.Code = reader.int32();
                    break;
                case 5:
                    message.Message = reader.string();
                    break;
                case 6:
                    if (!(message.MailAnnexList && message.MailAnnexList.length))
                        message.MailAnnexList = [];
                    message.MailAnnexList.push($root.hall.MailAnnex.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("MsgID"))
                throw $util.ProtocolError("missing required 'MsgID'", { instance: message });
            if (!message.hasOwnProperty("IsAll"))
                throw $util.ProtocolError("missing required 'IsAll'", { instance: message });
            if (!message.hasOwnProperty("Code"))
                throw $util.ProtocolError("missing required 'Code'", { instance: message });
            return message;
        };

        /**
         * Decodes a ReceiveMailAnnexRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.ReceiveMailAnnexRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.ReceiveMailAnnexRet} ReceiveMailAnnexRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReceiveMailAnnexRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReceiveMailAnnexRet message.
         * @function verify
         * @memberof hall.ReceiveMailAnnexRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReceiveMailAnnexRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.MsgID))
                return "MsgID: integer expected";
            if (!$util.isInteger(message.IsAll))
                return "IsAll: integer expected";
            if (!$util.isInteger(message.Code))
                return "Code: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.MailAnnexList != null && message.hasOwnProperty("MailAnnexList")) {
                if (!Array.isArray(message.MailAnnexList))
                    return "MailAnnexList: array expected";
                for (var i = 0; i < message.MailAnnexList.length; ++i) {
                    var error = $root.hall.MailAnnex.verify(message.MailAnnexList[i]);
                    if (error)
                        return "MailAnnexList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ReceiveMailAnnexRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.ReceiveMailAnnexRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.ReceiveMailAnnexRet} ReceiveMailAnnexRet
         */
        ReceiveMailAnnexRet.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.ReceiveMailAnnexRet)
                return object;
            var message = new $root.hall.ReceiveMailAnnexRet();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.MsgID != null)
                message.MsgID = object.MsgID | 0;
            if (object.IsAll != null)
                message.IsAll = object.IsAll | 0;
            if (object.Code != null)
                message.Code = object.Code | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.MailAnnexList) {
                if (!Array.isArray(object.MailAnnexList))
                    throw TypeError(".hall.ReceiveMailAnnexRet.MailAnnexList: array expected");
                message.MailAnnexList = [];
                for (var i = 0; i < object.MailAnnexList.length; ++i) {
                    if (typeof object.MailAnnexList[i] !== "object")
                        throw TypeError(".hall.ReceiveMailAnnexRet.MailAnnexList: object expected");
                    message.MailAnnexList[i] = $root.hall.MailAnnex.fromObject(object.MailAnnexList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ReceiveMailAnnexRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.ReceiveMailAnnexRet
         * @static
         * @param {hall.ReceiveMailAnnexRet} message ReceiveMailAnnexRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReceiveMailAnnexRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.MailAnnexList = [];
            if (options.defaults) {
                object.UserID = 0;
                object.MsgID = 0;
                object.IsAll = 0;
                object.Code = 0;
                object.Message = "";
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.MsgID != null && message.hasOwnProperty("MsgID"))
                object.MsgID = message.MsgID;
            if (message.IsAll != null && message.hasOwnProperty("IsAll"))
                object.IsAll = message.IsAll;
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            if (message.MailAnnexList && message.MailAnnexList.length) {
                object.MailAnnexList = [];
                for (var j = 0; j < message.MailAnnexList.length; ++j)
                    object.MailAnnexList[j] = $root.hall.MailAnnex.toObject(message.MailAnnexList[j], options);
            }
            return object;
        };

        /**
         * Converts this ReceiveMailAnnexRet to JSON.
         * @function toJSON
         * @memberof hall.ReceiveMailAnnexRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReceiveMailAnnexRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReceiveMailAnnexRet;
    })();

    hall.MailAnnex = (function() {

        /**
         * Properties of a MailAnnex.
         * @memberof hall
         * @interface IMailAnnex
         * @property {number} ItemType MailAnnex ItemType
         * @property {number} ItemNum MailAnnex ItemNum
         */

        /**
         * Constructs a new MailAnnex.
         * @memberof hall
         * @classdesc Represents a MailAnnex.
         * @implements IMailAnnex
         * @constructor
         * @param {hall.IMailAnnex=} [properties] Properties to set
         */
        function MailAnnex(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MailAnnex ItemType.
         * @member {number} ItemType
         * @memberof hall.MailAnnex
         * @instance
         */
        MailAnnex.prototype.ItemType = 0;

        /**
         * MailAnnex ItemNum.
         * @member {number} ItemNum
         * @memberof hall.MailAnnex
         * @instance
         */
        MailAnnex.prototype.ItemNum = 0;

        /**
         * Creates a new MailAnnex instance using the specified properties.
         * @function create
         * @memberof hall.MailAnnex
         * @static
         * @param {hall.IMailAnnex=} [properties] Properties to set
         * @returns {hall.MailAnnex} MailAnnex instance
         */
        MailAnnex.create = function create(properties) {
            return new MailAnnex(properties);
        };

        /**
         * Encodes the specified MailAnnex message. Does not implicitly {@link hall.MailAnnex.verify|verify} messages.
         * @function encode
         * @memberof hall.MailAnnex
         * @static
         * @param {hall.IMailAnnex} message MailAnnex message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailAnnex.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ItemType);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ItemNum);
            return writer;
        };

        /**
         * Encodes the specified MailAnnex message, length delimited. Does not implicitly {@link hall.MailAnnex.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.MailAnnex
         * @static
         * @param {hall.IMailAnnex} message MailAnnex message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MailAnnex.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MailAnnex message from the specified reader or buffer.
         * @function decode
         * @memberof hall.MailAnnex
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.MailAnnex} MailAnnex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailAnnex.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.MailAnnex();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ItemType = reader.int32();
                    break;
                case 2:
                    message.ItemNum = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("ItemType"))
                throw $util.ProtocolError("missing required 'ItemType'", { instance: message });
            if (!message.hasOwnProperty("ItemNum"))
                throw $util.ProtocolError("missing required 'ItemNum'", { instance: message });
            return message;
        };

        /**
         * Decodes a MailAnnex message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.MailAnnex
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.MailAnnex} MailAnnex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MailAnnex.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MailAnnex message.
         * @function verify
         * @memberof hall.MailAnnex
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MailAnnex.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.ItemType))
                return "ItemType: integer expected";
            if (!$util.isInteger(message.ItemNum))
                return "ItemNum: integer expected";
            return null;
        };

        /**
         * Creates a MailAnnex message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.MailAnnex
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.MailAnnex} MailAnnex
         */
        MailAnnex.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.MailAnnex)
                return object;
            var message = new $root.hall.MailAnnex();
            if (object.ItemType != null)
                message.ItemType = object.ItemType | 0;
            if (object.ItemNum != null)
                message.ItemNum = object.ItemNum | 0;
            return message;
        };

        /**
         * Creates a plain object from a MailAnnex message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.MailAnnex
         * @static
         * @param {hall.MailAnnex} message MailAnnex
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MailAnnex.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ItemType = 0;
                object.ItemNum = 0;
            }
            if (message.ItemType != null && message.hasOwnProperty("ItemType"))
                object.ItemType = message.ItemType;
            if (message.ItemNum != null && message.hasOwnProperty("ItemNum"))
                object.ItemNum = message.ItemNum;
            return object;
        };

        /**
         * Converts this MailAnnex to JSON.
         * @function toJSON
         * @memberof hall.MailAnnex
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MailAnnex.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return MailAnnex;
    })();

    hall.ClearReadMailReq = (function() {

        /**
         * Properties of a ClearReadMailReq.
         * @memberof hall
         * @interface IClearReadMailReq
         * @property {number} UserID ClearReadMailReq UserID
         */

        /**
         * Constructs a new ClearReadMailReq.
         * @memberof hall
         * @classdesc Represents a ClearReadMailReq.
         * @implements IClearReadMailReq
         * @constructor
         * @param {hall.IClearReadMailReq=} [properties] Properties to set
         */
        function ClearReadMailReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClearReadMailReq UserID.
         * @member {number} UserID
         * @memberof hall.ClearReadMailReq
         * @instance
         */
        ClearReadMailReq.prototype.UserID = 0;

        /**
         * Creates a new ClearReadMailReq instance using the specified properties.
         * @function create
         * @memberof hall.ClearReadMailReq
         * @static
         * @param {hall.IClearReadMailReq=} [properties] Properties to set
         * @returns {hall.ClearReadMailReq} ClearReadMailReq instance
         */
        ClearReadMailReq.create = function create(properties) {
            return new ClearReadMailReq(properties);
        };

        /**
         * Encodes the specified ClearReadMailReq message. Does not implicitly {@link hall.ClearReadMailReq.verify|verify} messages.
         * @function encode
         * @memberof hall.ClearReadMailReq
         * @static
         * @param {hall.IClearReadMailReq} message ClearReadMailReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClearReadMailReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            return writer;
        };

        /**
         * Encodes the specified ClearReadMailReq message, length delimited. Does not implicitly {@link hall.ClearReadMailReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof hall.ClearReadMailReq
         * @static
         * @param {hall.IClearReadMailReq} message ClearReadMailReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClearReadMailReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClearReadMailReq message from the specified reader or buffer.
         * @function decode
         * @memberof hall.ClearReadMailReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {hall.ClearReadMailReq} ClearReadMailReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClearReadMailReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.hall.ClearReadMailReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            return message;
        };

        /**
         * Decodes a ClearReadMailReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof hall.ClearReadMailReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {hall.ClearReadMailReq} ClearReadMailReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClearReadMailReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClearReadMailReq message.
         * @function verify
         * @memberof hall.ClearReadMailReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClearReadMailReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            return null;
        };

        /**
         * Creates a ClearReadMailReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof hall.ClearReadMailReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {hall.ClearReadMailReq} ClearReadMailReq
         */
        ClearReadMailReq.fromObject = function fromObject(object) {
            if (object instanceof $root.hall.ClearReadMailReq)
                return object;
            var message = new $root.hall.ClearReadMailReq();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            return message;
        };

        /**
         * Creates a plain object from a ClearReadMailReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof hall.ClearReadMailReq
         * @static
         * @param {hall.ClearReadMailReq} message ClearReadMailReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClearReadMailReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.UserID = 0;
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            return object;
        };

        /**
         * Converts this ClearReadMailReq to JSON.
         * @function toJSON
         * @memberof hall.ClearReadMailReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClearReadMailReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ClearReadMailReq;
    })();

    return hall;
})();

module.exports = $root;
