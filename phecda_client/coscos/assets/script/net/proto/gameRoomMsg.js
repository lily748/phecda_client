/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.gameRoom = (function() {

    /**
     * Namespace gameRoom.
     * @exports gameRoom
     * @namespace
     */
    var gameRoom = {};

    gameRoom.LoginGameRoomInfo = (function() {

        /**
         * Properties of a LoginGameRoomInfo.
         * @memberof gameRoom
         * @interface ILoginGameRoomInfo
         * @property {number} UserID LoginGameRoomInfo UserID
         * @property {string} Cer LoginGameRoomInfo Cer
         * @property {string} HDCode LoginGameRoomInfo HDCode
         * @property {number} HDType LoginGameRoomInfo HDType
         * @property {number|null} [IsSitByNum] LoginGameRoomInfo IsSitByNum
         * @property {number|null} [TableID] LoginGameRoomInfo TableID
         * @property {number|null} [ChairID] LoginGameRoomInfo ChairID
         */

        /**
         * Constructs a new LoginGameRoomInfo.
         * @memberof gameRoom
         * @classdesc Represents a LoginGameRoomInfo.
         * @implements ILoginGameRoomInfo
         * @constructor
         * @param {gameRoom.ILoginGameRoomInfo=} [properties] Properties to set
         */
        function LoginGameRoomInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginGameRoomInfo UserID.
         * @member {number} UserID
         * @memberof gameRoom.LoginGameRoomInfo
         * @instance
         */
        LoginGameRoomInfo.prototype.UserID = 0;

        /**
         * LoginGameRoomInfo Cer.
         * @member {string} Cer
         * @memberof gameRoom.LoginGameRoomInfo
         * @instance
         */
        LoginGameRoomInfo.prototype.Cer = "";

        /**
         * LoginGameRoomInfo HDCode.
         * @member {string} HDCode
         * @memberof gameRoom.LoginGameRoomInfo
         * @instance
         */
        LoginGameRoomInfo.prototype.HDCode = "";

        /**
         * LoginGameRoomInfo HDType.
         * @member {number} HDType
         * @memberof gameRoom.LoginGameRoomInfo
         * @instance
         */
        LoginGameRoomInfo.prototype.HDType = 0;

        /**
         * LoginGameRoomInfo IsSitByNum.
         * @member {number} IsSitByNum
         * @memberof gameRoom.LoginGameRoomInfo
         * @instance
         */
        LoginGameRoomInfo.prototype.IsSitByNum = 0;

        /**
         * LoginGameRoomInfo TableID.
         * @member {number} TableID
         * @memberof gameRoom.LoginGameRoomInfo
         * @instance
         */
        LoginGameRoomInfo.prototype.TableID = 0;

        /**
         * LoginGameRoomInfo ChairID.
         * @member {number} ChairID
         * @memberof gameRoom.LoginGameRoomInfo
         * @instance
         */
        LoginGameRoomInfo.prototype.ChairID = 0;

        /**
         * Creates a new LoginGameRoomInfo instance using the specified properties.
         * @function create
         * @memberof gameRoom.LoginGameRoomInfo
         * @static
         * @param {gameRoom.ILoginGameRoomInfo=} [properties] Properties to set
         * @returns {gameRoom.LoginGameRoomInfo} LoginGameRoomInfo instance
         */
        LoginGameRoomInfo.create = function create(properties) {
            return new LoginGameRoomInfo(properties);
        };

        /**
         * Encodes the specified LoginGameRoomInfo message. Does not implicitly {@link gameRoom.LoginGameRoomInfo.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.LoginGameRoomInfo
         * @static
         * @param {gameRoom.ILoginGameRoomInfo} message LoginGameRoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginGameRoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Cer);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.HDCode);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.HDType);
            if (message.IsSitByNum != null && Object.hasOwnProperty.call(message, "IsSitByNum"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.IsSitByNum);
            if (message.TableID != null && Object.hasOwnProperty.call(message, "TableID"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.TableID);
            if (message.ChairID != null && Object.hasOwnProperty.call(message, "ChairID"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.ChairID);
            return writer;
        };

        /**
         * Encodes the specified LoginGameRoomInfo message, length delimited. Does not implicitly {@link gameRoom.LoginGameRoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.LoginGameRoomInfo
         * @static
         * @param {gameRoom.ILoginGameRoomInfo} message LoginGameRoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginGameRoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginGameRoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.LoginGameRoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.LoginGameRoomInfo} LoginGameRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginGameRoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.LoginGameRoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.Cer = reader.string();
                    break;
                case 3:
                    message.HDCode = reader.string();
                    break;
                case 4:
                    message.HDType = reader.int32();
                    break;
                case 5:
                    message.IsSitByNum = reader.int32();
                    break;
                case 6:
                    message.TableID = reader.int32();
                    break;
                case 7:
                    message.ChairID = reader.int32();
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
            if (!message.hasOwnProperty("HDCode"))
                throw $util.ProtocolError("missing required 'HDCode'", { instance: message });
            if (!message.hasOwnProperty("HDType"))
                throw $util.ProtocolError("missing required 'HDType'", { instance: message });
            return message;
        };

        /**
         * Decodes a LoginGameRoomInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.LoginGameRoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.LoginGameRoomInfo} LoginGameRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginGameRoomInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginGameRoomInfo message.
         * @function verify
         * @memberof gameRoom.LoginGameRoomInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginGameRoomInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isString(message.Cer))
                return "Cer: string expected";
            if (!$util.isString(message.HDCode))
                return "HDCode: string expected";
            if (!$util.isInteger(message.HDType))
                return "HDType: integer expected";
            if (message.IsSitByNum != null && message.hasOwnProperty("IsSitByNum"))
                if (!$util.isInteger(message.IsSitByNum))
                    return "IsSitByNum: integer expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.ChairID != null && message.hasOwnProperty("ChairID"))
                if (!$util.isInteger(message.ChairID))
                    return "ChairID: integer expected";
            return null;
        };

        /**
         * Creates a LoginGameRoomInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.LoginGameRoomInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.LoginGameRoomInfo} LoginGameRoomInfo
         */
        LoginGameRoomInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.LoginGameRoomInfo)
                return object;
            var message = new $root.gameRoom.LoginGameRoomInfo();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.Cer != null)
                message.Cer = String(object.Cer);
            if (object.HDCode != null)
                message.HDCode = String(object.HDCode);
            if (object.HDType != null)
                message.HDType = object.HDType | 0;
            if (object.IsSitByNum != null)
                message.IsSitByNum = object.IsSitByNum | 0;
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.ChairID != null)
                message.ChairID = object.ChairID | 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginGameRoomInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.LoginGameRoomInfo
         * @static
         * @param {gameRoom.LoginGameRoomInfo} message LoginGameRoomInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginGameRoomInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.Cer = "";
                object.HDCode = "";
                object.HDType = 0;
                object.IsSitByNum = 0;
                object.TableID = 0;
                object.ChairID = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.Cer != null && message.hasOwnProperty("Cer"))
                object.Cer = message.Cer;
            if (message.HDCode != null && message.hasOwnProperty("HDCode"))
                object.HDCode = message.HDCode;
            if (message.HDType != null && message.hasOwnProperty("HDType"))
                object.HDType = message.HDType;
            if (message.IsSitByNum != null && message.hasOwnProperty("IsSitByNum"))
                object.IsSitByNum = message.IsSitByNum;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.ChairID != null && message.hasOwnProperty("ChairID"))
                object.ChairID = message.ChairID;
            return object;
        };

        /**
         * Converts this LoginGameRoomInfo to JSON.
         * @function toJSON
         * @memberof gameRoom.LoginGameRoomInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginGameRoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginGameRoomInfo;
    })();

    gameRoom.LoginGameRoomRet = (function() {

        /**
         * Properties of a LoginGameRoomRet.
         * @memberof gameRoom
         * @interface ILoginGameRoomRet
         * @property {number} Code LoginGameRoomRet Code
         * @property {string} Message LoginGameRoomRet Message
         * @property {gameRoom.ILoginGameRoomInfo|null} [LoginRequestData] LoginGameRoomRet LoginRequestData
         * @property {gameRoom.IUserRoomLogonData|null} [UserData] LoginGameRoomRet UserData
         * @property {gameRoom.IRoomInfo|null} [RoomInfo] LoginGameRoomRet RoomInfo
         */

        /**
         * Constructs a new LoginGameRoomRet.
         * @memberof gameRoom
         * @classdesc Represents a LoginGameRoomRet.
         * @implements ILoginGameRoomRet
         * @constructor
         * @param {gameRoom.ILoginGameRoomRet=} [properties] Properties to set
         */
        function LoginGameRoomRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginGameRoomRet Code.
         * @member {number} Code
         * @memberof gameRoom.LoginGameRoomRet
         * @instance
         */
        LoginGameRoomRet.prototype.Code = 0;

        /**
         * LoginGameRoomRet Message.
         * @member {string} Message
         * @memberof gameRoom.LoginGameRoomRet
         * @instance
         */
        LoginGameRoomRet.prototype.Message = "";

        /**
         * LoginGameRoomRet LoginRequestData.
         * @member {gameRoom.ILoginGameRoomInfo|null|undefined} LoginRequestData
         * @memberof gameRoom.LoginGameRoomRet
         * @instance
         */
        LoginGameRoomRet.prototype.LoginRequestData = null;

        /**
         * LoginGameRoomRet UserData.
         * @member {gameRoom.IUserRoomLogonData|null|undefined} UserData
         * @memberof gameRoom.LoginGameRoomRet
         * @instance
         */
        LoginGameRoomRet.prototype.UserData = null;

        /**
         * LoginGameRoomRet RoomInfo.
         * @member {gameRoom.IRoomInfo|null|undefined} RoomInfo
         * @memberof gameRoom.LoginGameRoomRet
         * @instance
         */
        LoginGameRoomRet.prototype.RoomInfo = null;

        /**
         * Creates a new LoginGameRoomRet instance using the specified properties.
         * @function create
         * @memberof gameRoom.LoginGameRoomRet
         * @static
         * @param {gameRoom.ILoginGameRoomRet=} [properties] Properties to set
         * @returns {gameRoom.LoginGameRoomRet} LoginGameRoomRet instance
         */
        LoginGameRoomRet.create = function create(properties) {
            return new LoginGameRoomRet(properties);
        };

        /**
         * Encodes the specified LoginGameRoomRet message. Does not implicitly {@link gameRoom.LoginGameRoomRet.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.LoginGameRoomRet
         * @static
         * @param {gameRoom.ILoginGameRoomRet} message LoginGameRoomRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginGameRoomRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.Message);
            if (message.LoginRequestData != null && Object.hasOwnProperty.call(message, "LoginRequestData"))
                $root.gameRoom.LoginGameRoomInfo.encode(message.LoginRequestData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.UserData != null && Object.hasOwnProperty.call(message, "UserData"))
                $root.gameRoom.UserRoomLogonData.encode(message.UserData, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.RoomInfo != null && Object.hasOwnProperty.call(message, "RoomInfo"))
                $root.gameRoom.RoomInfo.encode(message.RoomInfo, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LoginGameRoomRet message, length delimited. Does not implicitly {@link gameRoom.LoginGameRoomRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.LoginGameRoomRet
         * @static
         * @param {gameRoom.ILoginGameRoomRet} message LoginGameRoomRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginGameRoomRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginGameRoomRet message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.LoginGameRoomRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.LoginGameRoomRet} LoginGameRoomRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginGameRoomRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.LoginGameRoomRet();
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
                    message.LoginRequestData = $root.gameRoom.LoginGameRoomInfo.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.UserData = $root.gameRoom.UserRoomLogonData.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.RoomInfo = $root.gameRoom.RoomInfo.decode(reader, reader.uint32());
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
         * Decodes a LoginGameRoomRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.LoginGameRoomRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.LoginGameRoomRet} LoginGameRoomRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginGameRoomRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginGameRoomRet message.
         * @function verify
         * @memberof gameRoom.LoginGameRoomRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginGameRoomRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Code))
                return "Code: integer expected";
            if (!$util.isString(message.Message))
                return "Message: string expected";
            if (message.LoginRequestData != null && message.hasOwnProperty("LoginRequestData")) {
                var error = $root.gameRoom.LoginGameRoomInfo.verify(message.LoginRequestData);
                if (error)
                    return "LoginRequestData." + error;
            }
            if (message.UserData != null && message.hasOwnProperty("UserData")) {
                var error = $root.gameRoom.UserRoomLogonData.verify(message.UserData);
                if (error)
                    return "UserData." + error;
            }
            if (message.RoomInfo != null && message.hasOwnProperty("RoomInfo")) {
                var error = $root.gameRoom.RoomInfo.verify(message.RoomInfo);
                if (error)
                    return "RoomInfo." + error;
            }
            return null;
        };

        /**
         * Creates a LoginGameRoomRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.LoginGameRoomRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.LoginGameRoomRet} LoginGameRoomRet
         */
        LoginGameRoomRet.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.LoginGameRoomRet)
                return object;
            var message = new $root.gameRoom.LoginGameRoomRet();
            if (object.Code != null)
                message.Code = object.Code | 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.LoginRequestData != null) {
                if (typeof object.LoginRequestData !== "object")
                    throw TypeError(".gameRoom.LoginGameRoomRet.LoginRequestData: object expected");
                message.LoginRequestData = $root.gameRoom.LoginGameRoomInfo.fromObject(object.LoginRequestData);
            }
            if (object.UserData != null) {
                if (typeof object.UserData !== "object")
                    throw TypeError(".gameRoom.LoginGameRoomRet.UserData: object expected");
                message.UserData = $root.gameRoom.UserRoomLogonData.fromObject(object.UserData);
            }
            if (object.RoomInfo != null) {
                if (typeof object.RoomInfo !== "object")
                    throw TypeError(".gameRoom.LoginGameRoomRet.RoomInfo: object expected");
                message.RoomInfo = $root.gameRoom.RoomInfo.fromObject(object.RoomInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a LoginGameRoomRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.LoginGameRoomRet
         * @static
         * @param {gameRoom.LoginGameRoomRet} message LoginGameRoomRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginGameRoomRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Code = 0;
                object.Message = "";
                object.LoginRequestData = null;
                object.UserData = null;
                object.RoomInfo = null;
            }
            if (message.Code != null && message.hasOwnProperty("Code"))
                object.Code = message.Code;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            if (message.LoginRequestData != null && message.hasOwnProperty("LoginRequestData"))
                object.LoginRequestData = $root.gameRoom.LoginGameRoomInfo.toObject(message.LoginRequestData, options);
            if (message.UserData != null && message.hasOwnProperty("UserData"))
                object.UserData = $root.gameRoom.UserRoomLogonData.toObject(message.UserData, options);
            if (message.RoomInfo != null && message.hasOwnProperty("RoomInfo"))
                object.RoomInfo = $root.gameRoom.RoomInfo.toObject(message.RoomInfo, options);
            return object;
        };

        /**
         * Converts this LoginGameRoomRet to JSON.
         * @function toJSON
         * @memberof gameRoom.LoginGameRoomRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginGameRoomRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginGameRoomRet;
    })();

    gameRoom.UserRoomLogonData = (function() {

        /**
         * Properties of a UserRoomLogonData.
         * @memberof gameRoom
         * @interface IUserRoomLogonData
         * @property {number} UserID UserRoomLogonData UserID
         * @property {number} UserType UserRoomLogonData UserType
         * @property {string} NickName UserRoomLogonData NickName
         * @property {number} FaceID UserRoomLogonData FaceID
         * @property {number} Sex UserRoomLogonData Sex
         * @property {number|Long} CashAmount UserRoomLogonData CashAmount
         * @property {number} WinCount UserRoomLogonData WinCount
         * @property {number} LoseCount UserRoomLogonData LoseCount
         * @property {number} DrawCount UserRoomLogonData DrawCount
         * @property {string|null} [ServerAddr] UserRoomLogonData ServerAddr
         * @property {string|null} [GameBuff] UserRoomLogonData GameBuff
         * @property {number|Long|null} [TotalScore] UserRoomLogonData TotalScore
         * @property {number|Long|null} [XiuXianScore] UserRoomLogonData XiuXianScore
         * @property {boolean|null} [IsSuperUser] UserRoomLogonData IsSuperUser
         * @property {number|null} [TracedUserID] UserRoomLogonData TracedUserID
         * @property {number|null} [TodayScoreDan] UserRoomLogonData TodayScoreDan
         * @property {number|null} [TotalWinDan] UserRoomLogonData TotalWinDan
         * @property {number|null} [ChargeDan] UserRoomLogonData ChargeDan
         * @property {number|null} [WinRateDan] UserRoomLogonData WinRateDan
         * @property {number|null} [GameTimeDan] UserRoomLogonData GameTimeDan
         * @property {boolean|null} [IsNewBee] UserRoomLogonData IsNewBee
         * @property {number|Long|null} [BankMoney] UserRoomLogonData BankMoney
         * @property {number|Long|null} [CurrGameLoseWin] UserRoomLogonData CurrGameLoseWin
         * @property {number|Long|null} [PlatformLoseWin] UserRoomLogonData PlatformLoseWin
         * @property {number|Long|null} [FirstGameTimestamp] UserRoomLogonData FirstGameTimestamp
         * @property {number|Long|null} [TotalRecharge] UserRoomLogonData TotalRecharge
         * @property {number|Long|null} [DayRecharge] UserRoomLogonData DayRecharge
         * @property {number|null} [ControlSwitchState] UserRoomLogonData ControlSwitchState
         * @property {number|null} [IsSitByNum] UserRoomLogonData IsSitByNum
         * @property {number|null} [TableID] UserRoomLogonData TableID
         * @property {number|null} [ChairID] UserRoomLogonData ChairID
         */

        /**
         * Constructs a new UserRoomLogonData.
         * @memberof gameRoom
         * @classdesc Represents a UserRoomLogonData.
         * @implements IUserRoomLogonData
         * @constructor
         * @param {gameRoom.IUserRoomLogonData=} [properties] Properties to set
         */
        function UserRoomLogonData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserRoomLogonData UserID.
         * @member {number} UserID
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.UserID = 0;

        /**
         * UserRoomLogonData UserType.
         * @member {number} UserType
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.UserType = 0;

        /**
         * UserRoomLogonData NickName.
         * @member {string} NickName
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.NickName = "";

        /**
         * UserRoomLogonData FaceID.
         * @member {number} FaceID
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.FaceID = 0;

        /**
         * UserRoomLogonData Sex.
         * @member {number} Sex
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.Sex = 0;

        /**
         * UserRoomLogonData CashAmount.
         * @member {number|Long} CashAmount
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.CashAmount = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserRoomLogonData WinCount.
         * @member {number} WinCount
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.WinCount = 0;

        /**
         * UserRoomLogonData LoseCount.
         * @member {number} LoseCount
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.LoseCount = 0;

        /**
         * UserRoomLogonData DrawCount.
         * @member {number} DrawCount
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.DrawCount = 0;

        /**
         * UserRoomLogonData ServerAddr.
         * @member {string} ServerAddr
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.ServerAddr = "";

        /**
         * UserRoomLogonData GameBuff.
         * @member {string} GameBuff
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.GameBuff = "";

        /**
         * UserRoomLogonData TotalScore.
         * @member {number|Long} TotalScore
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.TotalScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserRoomLogonData XiuXianScore.
         * @member {number|Long} XiuXianScore
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.XiuXianScore = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserRoomLogonData IsSuperUser.
         * @member {boolean} IsSuperUser
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.IsSuperUser = false;

        /**
         * UserRoomLogonData TracedUserID.
         * @member {number} TracedUserID
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.TracedUserID = 0;

        /**
         * UserRoomLogonData TodayScoreDan.
         * @member {number} TodayScoreDan
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.TodayScoreDan = 0;

        /**
         * UserRoomLogonData TotalWinDan.
         * @member {number} TotalWinDan
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.TotalWinDan = 0;

        /**
         * UserRoomLogonData ChargeDan.
         * @member {number} ChargeDan
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.ChargeDan = 0;

        /**
         * UserRoomLogonData WinRateDan.
         * @member {number} WinRateDan
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.WinRateDan = 0;

        /**
         * UserRoomLogonData GameTimeDan.
         * @member {number} GameTimeDan
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.GameTimeDan = 0;

        /**
         * UserRoomLogonData IsNewBee.
         * @member {boolean} IsNewBee
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.IsNewBee = false;

        /**
         * UserRoomLogonData BankMoney.
         * @member {number|Long} BankMoney
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.BankMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserRoomLogonData CurrGameLoseWin.
         * @member {number|Long} CurrGameLoseWin
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.CurrGameLoseWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserRoomLogonData PlatformLoseWin.
         * @member {number|Long} PlatformLoseWin
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.PlatformLoseWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserRoomLogonData FirstGameTimestamp.
         * @member {number|Long} FirstGameTimestamp
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.FirstGameTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserRoomLogonData TotalRecharge.
         * @member {number|Long} TotalRecharge
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.TotalRecharge = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserRoomLogonData DayRecharge.
         * @member {number|Long} DayRecharge
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.DayRecharge = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserRoomLogonData ControlSwitchState.
         * @member {number} ControlSwitchState
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.ControlSwitchState = 0;

        /**
         * UserRoomLogonData IsSitByNum.
         * @member {number} IsSitByNum
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.IsSitByNum = 0;

        /**
         * UserRoomLogonData TableID.
         * @member {number} TableID
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.TableID = 0;

        /**
         * UserRoomLogonData ChairID.
         * @member {number} ChairID
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         */
        UserRoomLogonData.prototype.ChairID = 0;

        /**
         * Creates a new UserRoomLogonData instance using the specified properties.
         * @function create
         * @memberof gameRoom.UserRoomLogonData
         * @static
         * @param {gameRoom.IUserRoomLogonData=} [properties] Properties to set
         * @returns {gameRoom.UserRoomLogonData} UserRoomLogonData instance
         */
        UserRoomLogonData.create = function create(properties) {
            return new UserRoomLogonData(properties);
        };

        /**
         * Encodes the specified UserRoomLogonData message. Does not implicitly {@link gameRoom.UserRoomLogonData.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.UserRoomLogonData
         * @static
         * @param {gameRoom.IUserRoomLogonData} message UserRoomLogonData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserRoomLogonData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.UserType);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.NickName);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.FaceID);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Sex);
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.CashAmount);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.WinCount);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.LoseCount);
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.DrawCount);
            if (message.ServerAddr != null && Object.hasOwnProperty.call(message, "ServerAddr"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.ServerAddr);
            if (message.GameBuff != null && Object.hasOwnProperty.call(message, "GameBuff"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.GameBuff);
            if (message.TotalScore != null && Object.hasOwnProperty.call(message, "TotalScore"))
                writer.uint32(/* id 12, wireType 0 =*/96).int64(message.TotalScore);
            if (message.XiuXianScore != null && Object.hasOwnProperty.call(message, "XiuXianScore"))
                writer.uint32(/* id 13, wireType 0 =*/104).int64(message.XiuXianScore);
            if (message.IsSuperUser != null && Object.hasOwnProperty.call(message, "IsSuperUser"))
                writer.uint32(/* id 14, wireType 0 =*/112).bool(message.IsSuperUser);
            if (message.TracedUserID != null && Object.hasOwnProperty.call(message, "TracedUserID"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.TracedUserID);
            if (message.TodayScoreDan != null && Object.hasOwnProperty.call(message, "TodayScoreDan"))
                writer.uint32(/* id 16, wireType 0 =*/128).int32(message.TodayScoreDan);
            if (message.TotalWinDan != null && Object.hasOwnProperty.call(message, "TotalWinDan"))
                writer.uint32(/* id 17, wireType 0 =*/136).int32(message.TotalWinDan);
            if (message.ChargeDan != null && Object.hasOwnProperty.call(message, "ChargeDan"))
                writer.uint32(/* id 18, wireType 0 =*/144).int32(message.ChargeDan);
            if (message.WinRateDan != null && Object.hasOwnProperty.call(message, "WinRateDan"))
                writer.uint32(/* id 19, wireType 0 =*/152).int32(message.WinRateDan);
            if (message.GameTimeDan != null && Object.hasOwnProperty.call(message, "GameTimeDan"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.GameTimeDan);
            if (message.IsNewBee != null && Object.hasOwnProperty.call(message, "IsNewBee"))
                writer.uint32(/* id 21, wireType 0 =*/168).bool(message.IsNewBee);
            if (message.BankMoney != null && Object.hasOwnProperty.call(message, "BankMoney"))
                writer.uint32(/* id 22, wireType 0 =*/176).int64(message.BankMoney);
            if (message.CurrGameLoseWin != null && Object.hasOwnProperty.call(message, "CurrGameLoseWin"))
                writer.uint32(/* id 23, wireType 0 =*/184).int64(message.CurrGameLoseWin);
            if (message.PlatformLoseWin != null && Object.hasOwnProperty.call(message, "PlatformLoseWin"))
                writer.uint32(/* id 24, wireType 0 =*/192).int64(message.PlatformLoseWin);
            if (message.FirstGameTimestamp != null && Object.hasOwnProperty.call(message, "FirstGameTimestamp"))
                writer.uint32(/* id 25, wireType 0 =*/200).int64(message.FirstGameTimestamp);
            if (message.TotalRecharge != null && Object.hasOwnProperty.call(message, "TotalRecharge"))
                writer.uint32(/* id 26, wireType 0 =*/208).int64(message.TotalRecharge);
            if (message.DayRecharge != null && Object.hasOwnProperty.call(message, "DayRecharge"))
                writer.uint32(/* id 27, wireType 0 =*/216).int64(message.DayRecharge);
            if (message.ControlSwitchState != null && Object.hasOwnProperty.call(message, "ControlSwitchState"))
                writer.uint32(/* id 28, wireType 0 =*/224).int32(message.ControlSwitchState);
            if (message.IsSitByNum != null && Object.hasOwnProperty.call(message, "IsSitByNum"))
                writer.uint32(/* id 29, wireType 0 =*/232).int32(message.IsSitByNum);
            if (message.TableID != null && Object.hasOwnProperty.call(message, "TableID"))
                writer.uint32(/* id 30, wireType 0 =*/240).int32(message.TableID);
            if (message.ChairID != null && Object.hasOwnProperty.call(message, "ChairID"))
                writer.uint32(/* id 31, wireType 0 =*/248).int32(message.ChairID);
            return writer;
        };

        /**
         * Encodes the specified UserRoomLogonData message, length delimited. Does not implicitly {@link gameRoom.UserRoomLogonData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.UserRoomLogonData
         * @static
         * @param {gameRoom.IUserRoomLogonData} message UserRoomLogonData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserRoomLogonData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserRoomLogonData message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.UserRoomLogonData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.UserRoomLogonData} UserRoomLogonData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserRoomLogonData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.UserRoomLogonData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.UserType = reader.int32();
                    break;
                case 3:
                    message.NickName = reader.string();
                    break;
                case 4:
                    message.FaceID = reader.int32();
                    break;
                case 5:
                    message.Sex = reader.int32();
                    break;
                case 6:
                    message.CashAmount = reader.int64();
                    break;
                case 7:
                    message.WinCount = reader.int32();
                    break;
                case 8:
                    message.LoseCount = reader.int32();
                    break;
                case 9:
                    message.DrawCount = reader.int32();
                    break;
                case 10:
                    message.ServerAddr = reader.string();
                    break;
                case 11:
                    message.GameBuff = reader.string();
                    break;
                case 12:
                    message.TotalScore = reader.int64();
                    break;
                case 13:
                    message.XiuXianScore = reader.int64();
                    break;
                case 14:
                    message.IsSuperUser = reader.bool();
                    break;
                case 15:
                    message.TracedUserID = reader.int32();
                    break;
                case 16:
                    message.TodayScoreDan = reader.int32();
                    break;
                case 17:
                    message.TotalWinDan = reader.int32();
                    break;
                case 18:
                    message.ChargeDan = reader.int32();
                    break;
                case 19:
                    message.WinRateDan = reader.int32();
                    break;
                case 20:
                    message.GameTimeDan = reader.int32();
                    break;
                case 21:
                    message.IsNewBee = reader.bool();
                    break;
                case 22:
                    message.BankMoney = reader.int64();
                    break;
                case 23:
                    message.CurrGameLoseWin = reader.int64();
                    break;
                case 24:
                    message.PlatformLoseWin = reader.int64();
                    break;
                case 25:
                    message.FirstGameTimestamp = reader.int64();
                    break;
                case 26:
                    message.TotalRecharge = reader.int64();
                    break;
                case 27:
                    message.DayRecharge = reader.int64();
                    break;
                case 28:
                    message.ControlSwitchState = reader.int32();
                    break;
                case 29:
                    message.IsSitByNum = reader.int32();
                    break;
                case 30:
                    message.TableID = reader.int32();
                    break;
                case 31:
                    message.ChairID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("UserType"))
                throw $util.ProtocolError("missing required 'UserType'", { instance: message });
            if (!message.hasOwnProperty("NickName"))
                throw $util.ProtocolError("missing required 'NickName'", { instance: message });
            if (!message.hasOwnProperty("FaceID"))
                throw $util.ProtocolError("missing required 'FaceID'", { instance: message });
            if (!message.hasOwnProperty("Sex"))
                throw $util.ProtocolError("missing required 'Sex'", { instance: message });
            if (!message.hasOwnProperty("CashAmount"))
                throw $util.ProtocolError("missing required 'CashAmount'", { instance: message });
            if (!message.hasOwnProperty("WinCount"))
                throw $util.ProtocolError("missing required 'WinCount'", { instance: message });
            if (!message.hasOwnProperty("LoseCount"))
                throw $util.ProtocolError("missing required 'LoseCount'", { instance: message });
            if (!message.hasOwnProperty("DrawCount"))
                throw $util.ProtocolError("missing required 'DrawCount'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserRoomLogonData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.UserRoomLogonData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.UserRoomLogonData} UserRoomLogonData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserRoomLogonData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserRoomLogonData message.
         * @function verify
         * @memberof gameRoom.UserRoomLogonData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserRoomLogonData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.UserType))
                return "UserType: integer expected";
            if (!$util.isString(message.NickName))
                return "NickName: string expected";
            if (!$util.isInteger(message.FaceID))
                return "FaceID: integer expected";
            if (!$util.isInteger(message.Sex))
                return "Sex: integer expected";
            if (!$util.isInteger(message.CashAmount) && !(message.CashAmount && $util.isInteger(message.CashAmount.low) && $util.isInteger(message.CashAmount.high)))
                return "CashAmount: integer|Long expected";
            if (!$util.isInteger(message.WinCount))
                return "WinCount: integer expected";
            if (!$util.isInteger(message.LoseCount))
                return "LoseCount: integer expected";
            if (!$util.isInteger(message.DrawCount))
                return "DrawCount: integer expected";
            if (message.ServerAddr != null && message.hasOwnProperty("ServerAddr"))
                if (!$util.isString(message.ServerAddr))
                    return "ServerAddr: string expected";
            if (message.GameBuff != null && message.hasOwnProperty("GameBuff"))
                if (!$util.isString(message.GameBuff))
                    return "GameBuff: string expected";
            if (message.TotalScore != null && message.hasOwnProperty("TotalScore"))
                if (!$util.isInteger(message.TotalScore) && !(message.TotalScore && $util.isInteger(message.TotalScore.low) && $util.isInteger(message.TotalScore.high)))
                    return "TotalScore: integer|Long expected";
            if (message.XiuXianScore != null && message.hasOwnProperty("XiuXianScore"))
                if (!$util.isInteger(message.XiuXianScore) && !(message.XiuXianScore && $util.isInteger(message.XiuXianScore.low) && $util.isInteger(message.XiuXianScore.high)))
                    return "XiuXianScore: integer|Long expected";
            if (message.IsSuperUser != null && message.hasOwnProperty("IsSuperUser"))
                if (typeof message.IsSuperUser !== "boolean")
                    return "IsSuperUser: boolean expected";
            if (message.TracedUserID != null && message.hasOwnProperty("TracedUserID"))
                if (!$util.isInteger(message.TracedUserID))
                    return "TracedUserID: integer expected";
            if (message.TodayScoreDan != null && message.hasOwnProperty("TodayScoreDan"))
                if (!$util.isInteger(message.TodayScoreDan))
                    return "TodayScoreDan: integer expected";
            if (message.TotalWinDan != null && message.hasOwnProperty("TotalWinDan"))
                if (!$util.isInteger(message.TotalWinDan))
                    return "TotalWinDan: integer expected";
            if (message.ChargeDan != null && message.hasOwnProperty("ChargeDan"))
                if (!$util.isInteger(message.ChargeDan))
                    return "ChargeDan: integer expected";
            if (message.WinRateDan != null && message.hasOwnProperty("WinRateDan"))
                if (!$util.isInteger(message.WinRateDan))
                    return "WinRateDan: integer expected";
            if (message.GameTimeDan != null && message.hasOwnProperty("GameTimeDan"))
                if (!$util.isInteger(message.GameTimeDan))
                    return "GameTimeDan: integer expected";
            if (message.IsNewBee != null && message.hasOwnProperty("IsNewBee"))
                if (typeof message.IsNewBee !== "boolean")
                    return "IsNewBee: boolean expected";
            if (message.BankMoney != null && message.hasOwnProperty("BankMoney"))
                if (!$util.isInteger(message.BankMoney) && !(message.BankMoney && $util.isInteger(message.BankMoney.low) && $util.isInteger(message.BankMoney.high)))
                    return "BankMoney: integer|Long expected";
            if (message.CurrGameLoseWin != null && message.hasOwnProperty("CurrGameLoseWin"))
                if (!$util.isInteger(message.CurrGameLoseWin) && !(message.CurrGameLoseWin && $util.isInteger(message.CurrGameLoseWin.low) && $util.isInteger(message.CurrGameLoseWin.high)))
                    return "CurrGameLoseWin: integer|Long expected";
            if (message.PlatformLoseWin != null && message.hasOwnProperty("PlatformLoseWin"))
                if (!$util.isInteger(message.PlatformLoseWin) && !(message.PlatformLoseWin && $util.isInteger(message.PlatformLoseWin.low) && $util.isInteger(message.PlatformLoseWin.high)))
                    return "PlatformLoseWin: integer|Long expected";
            if (message.FirstGameTimestamp != null && message.hasOwnProperty("FirstGameTimestamp"))
                if (!$util.isInteger(message.FirstGameTimestamp) && !(message.FirstGameTimestamp && $util.isInteger(message.FirstGameTimestamp.low) && $util.isInteger(message.FirstGameTimestamp.high)))
                    return "FirstGameTimestamp: integer|Long expected";
            if (message.TotalRecharge != null && message.hasOwnProperty("TotalRecharge"))
                if (!$util.isInteger(message.TotalRecharge) && !(message.TotalRecharge && $util.isInteger(message.TotalRecharge.low) && $util.isInteger(message.TotalRecharge.high)))
                    return "TotalRecharge: integer|Long expected";
            if (message.DayRecharge != null && message.hasOwnProperty("DayRecharge"))
                if (!$util.isInteger(message.DayRecharge) && !(message.DayRecharge && $util.isInteger(message.DayRecharge.low) && $util.isInteger(message.DayRecharge.high)))
                    return "DayRecharge: integer|Long expected";
            if (message.ControlSwitchState != null && message.hasOwnProperty("ControlSwitchState"))
                if (!$util.isInteger(message.ControlSwitchState))
                    return "ControlSwitchState: integer expected";
            if (message.IsSitByNum != null && message.hasOwnProperty("IsSitByNum"))
                if (!$util.isInteger(message.IsSitByNum))
                    return "IsSitByNum: integer expected";
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                if (!$util.isInteger(message.TableID))
                    return "TableID: integer expected";
            if (message.ChairID != null && message.hasOwnProperty("ChairID"))
                if (!$util.isInteger(message.ChairID))
                    return "ChairID: integer expected";
            return null;
        };

        /**
         * Creates a UserRoomLogonData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.UserRoomLogonData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.UserRoomLogonData} UserRoomLogonData
         */
        UserRoomLogonData.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.UserRoomLogonData)
                return object;
            var message = new $root.gameRoom.UserRoomLogonData();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.UserType != null)
                message.UserType = object.UserType | 0;
            if (object.NickName != null)
                message.NickName = String(object.NickName);
            if (object.FaceID != null)
                message.FaceID = object.FaceID | 0;
            if (object.Sex != null)
                message.Sex = object.Sex | 0;
            if (object.CashAmount != null)
                if ($util.Long)
                    (message.CashAmount = $util.Long.fromValue(object.CashAmount)).unsigned = false;
                else if (typeof object.CashAmount === "string")
                    message.CashAmount = parseInt(object.CashAmount, 10);
                else if (typeof object.CashAmount === "number")
                    message.CashAmount = object.CashAmount;
                else if (typeof object.CashAmount === "object")
                    message.CashAmount = new $util.LongBits(object.CashAmount.low >>> 0, object.CashAmount.high >>> 0).toNumber();
            if (object.WinCount != null)
                message.WinCount = object.WinCount | 0;
            if (object.LoseCount != null)
                message.LoseCount = object.LoseCount | 0;
            if (object.DrawCount != null)
                message.DrawCount = object.DrawCount | 0;
            if (object.ServerAddr != null)
                message.ServerAddr = String(object.ServerAddr);
            if (object.GameBuff != null)
                message.GameBuff = String(object.GameBuff);
            if (object.TotalScore != null)
                if ($util.Long)
                    (message.TotalScore = $util.Long.fromValue(object.TotalScore)).unsigned = false;
                else if (typeof object.TotalScore === "string")
                    message.TotalScore = parseInt(object.TotalScore, 10);
                else if (typeof object.TotalScore === "number")
                    message.TotalScore = object.TotalScore;
                else if (typeof object.TotalScore === "object")
                    message.TotalScore = new $util.LongBits(object.TotalScore.low >>> 0, object.TotalScore.high >>> 0).toNumber();
            if (object.XiuXianScore != null)
                if ($util.Long)
                    (message.XiuXianScore = $util.Long.fromValue(object.XiuXianScore)).unsigned = false;
                else if (typeof object.XiuXianScore === "string")
                    message.XiuXianScore = parseInt(object.XiuXianScore, 10);
                else if (typeof object.XiuXianScore === "number")
                    message.XiuXianScore = object.XiuXianScore;
                else if (typeof object.XiuXianScore === "object")
                    message.XiuXianScore = new $util.LongBits(object.XiuXianScore.low >>> 0, object.XiuXianScore.high >>> 0).toNumber();
            if (object.IsSuperUser != null)
                message.IsSuperUser = Boolean(object.IsSuperUser);
            if (object.TracedUserID != null)
                message.TracedUserID = object.TracedUserID | 0;
            if (object.TodayScoreDan != null)
                message.TodayScoreDan = object.TodayScoreDan | 0;
            if (object.TotalWinDan != null)
                message.TotalWinDan = object.TotalWinDan | 0;
            if (object.ChargeDan != null)
                message.ChargeDan = object.ChargeDan | 0;
            if (object.WinRateDan != null)
                message.WinRateDan = object.WinRateDan | 0;
            if (object.GameTimeDan != null)
                message.GameTimeDan = object.GameTimeDan | 0;
            if (object.IsNewBee != null)
                message.IsNewBee = Boolean(object.IsNewBee);
            if (object.BankMoney != null)
                if ($util.Long)
                    (message.BankMoney = $util.Long.fromValue(object.BankMoney)).unsigned = false;
                else if (typeof object.BankMoney === "string")
                    message.BankMoney = parseInt(object.BankMoney, 10);
                else if (typeof object.BankMoney === "number")
                    message.BankMoney = object.BankMoney;
                else if (typeof object.BankMoney === "object")
                    message.BankMoney = new $util.LongBits(object.BankMoney.low >>> 0, object.BankMoney.high >>> 0).toNumber();
            if (object.CurrGameLoseWin != null)
                if ($util.Long)
                    (message.CurrGameLoseWin = $util.Long.fromValue(object.CurrGameLoseWin)).unsigned = false;
                else if (typeof object.CurrGameLoseWin === "string")
                    message.CurrGameLoseWin = parseInt(object.CurrGameLoseWin, 10);
                else if (typeof object.CurrGameLoseWin === "number")
                    message.CurrGameLoseWin = object.CurrGameLoseWin;
                else if (typeof object.CurrGameLoseWin === "object")
                    message.CurrGameLoseWin = new $util.LongBits(object.CurrGameLoseWin.low >>> 0, object.CurrGameLoseWin.high >>> 0).toNumber();
            if (object.PlatformLoseWin != null)
                if ($util.Long)
                    (message.PlatformLoseWin = $util.Long.fromValue(object.PlatformLoseWin)).unsigned = false;
                else if (typeof object.PlatformLoseWin === "string")
                    message.PlatformLoseWin = parseInt(object.PlatformLoseWin, 10);
                else if (typeof object.PlatformLoseWin === "number")
                    message.PlatformLoseWin = object.PlatformLoseWin;
                else if (typeof object.PlatformLoseWin === "object")
                    message.PlatformLoseWin = new $util.LongBits(object.PlatformLoseWin.low >>> 0, object.PlatformLoseWin.high >>> 0).toNumber();
            if (object.FirstGameTimestamp != null)
                if ($util.Long)
                    (message.FirstGameTimestamp = $util.Long.fromValue(object.FirstGameTimestamp)).unsigned = false;
                else if (typeof object.FirstGameTimestamp === "string")
                    message.FirstGameTimestamp = parseInt(object.FirstGameTimestamp, 10);
                else if (typeof object.FirstGameTimestamp === "number")
                    message.FirstGameTimestamp = object.FirstGameTimestamp;
                else if (typeof object.FirstGameTimestamp === "object")
                    message.FirstGameTimestamp = new $util.LongBits(object.FirstGameTimestamp.low >>> 0, object.FirstGameTimestamp.high >>> 0).toNumber();
            if (object.TotalRecharge != null)
                if ($util.Long)
                    (message.TotalRecharge = $util.Long.fromValue(object.TotalRecharge)).unsigned = false;
                else if (typeof object.TotalRecharge === "string")
                    message.TotalRecharge = parseInt(object.TotalRecharge, 10);
                else if (typeof object.TotalRecharge === "number")
                    message.TotalRecharge = object.TotalRecharge;
                else if (typeof object.TotalRecharge === "object")
                    message.TotalRecharge = new $util.LongBits(object.TotalRecharge.low >>> 0, object.TotalRecharge.high >>> 0).toNumber();
            if (object.DayRecharge != null)
                if ($util.Long)
                    (message.DayRecharge = $util.Long.fromValue(object.DayRecharge)).unsigned = false;
                else if (typeof object.DayRecharge === "string")
                    message.DayRecharge = parseInt(object.DayRecharge, 10);
                else if (typeof object.DayRecharge === "number")
                    message.DayRecharge = object.DayRecharge;
                else if (typeof object.DayRecharge === "object")
                    message.DayRecharge = new $util.LongBits(object.DayRecharge.low >>> 0, object.DayRecharge.high >>> 0).toNumber();
            if (object.ControlSwitchState != null)
                message.ControlSwitchState = object.ControlSwitchState | 0;
            if (object.IsSitByNum != null)
                message.IsSitByNum = object.IsSitByNum | 0;
            if (object.TableID != null)
                message.TableID = object.TableID | 0;
            if (object.ChairID != null)
                message.ChairID = object.ChairID | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserRoomLogonData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.UserRoomLogonData
         * @static
         * @param {gameRoom.UserRoomLogonData} message UserRoomLogonData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserRoomLogonData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.UserType = 0;
                object.NickName = "";
                object.FaceID = 0;
                object.Sex = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CashAmount = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CashAmount = options.longs === String ? "0" : 0;
                object.WinCount = 0;
                object.LoseCount = 0;
                object.DrawCount = 0;
                object.ServerAddr = "";
                object.GameBuff = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TotalScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TotalScore = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.XiuXianScore = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.XiuXianScore = options.longs === String ? "0" : 0;
                object.IsSuperUser = false;
                object.TracedUserID = 0;
                object.TodayScoreDan = 0;
                object.TotalWinDan = 0;
                object.ChargeDan = 0;
                object.WinRateDan = 0;
                object.GameTimeDan = 0;
                object.IsNewBee = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BankMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BankMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CurrGameLoseWin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CurrGameLoseWin = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.PlatformLoseWin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.PlatformLoseWin = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.FirstGameTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FirstGameTimestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.TotalRecharge = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TotalRecharge = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.DayRecharge = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.DayRecharge = options.longs === String ? "0" : 0;
                object.ControlSwitchState = 0;
                object.IsSitByNum = 0;
                object.TableID = 0;
                object.ChairID = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.UserType != null && message.hasOwnProperty("UserType"))
                object.UserType = message.UserType;
            if (message.NickName != null && message.hasOwnProperty("NickName"))
                object.NickName = message.NickName;
            if (message.FaceID != null && message.hasOwnProperty("FaceID"))
                object.FaceID = message.FaceID;
            if (message.Sex != null && message.hasOwnProperty("Sex"))
                object.Sex = message.Sex;
            if (message.CashAmount != null && message.hasOwnProperty("CashAmount"))
                if (typeof message.CashAmount === "number")
                    object.CashAmount = options.longs === String ? String(message.CashAmount) : message.CashAmount;
                else
                    object.CashAmount = options.longs === String ? $util.Long.prototype.toString.call(message.CashAmount) : options.longs === Number ? new $util.LongBits(message.CashAmount.low >>> 0, message.CashAmount.high >>> 0).toNumber() : message.CashAmount;
            if (message.WinCount != null && message.hasOwnProperty("WinCount"))
                object.WinCount = message.WinCount;
            if (message.LoseCount != null && message.hasOwnProperty("LoseCount"))
                object.LoseCount = message.LoseCount;
            if (message.DrawCount != null && message.hasOwnProperty("DrawCount"))
                object.DrawCount = message.DrawCount;
            if (message.ServerAddr != null && message.hasOwnProperty("ServerAddr"))
                object.ServerAddr = message.ServerAddr;
            if (message.GameBuff != null && message.hasOwnProperty("GameBuff"))
                object.GameBuff = message.GameBuff;
            if (message.TotalScore != null && message.hasOwnProperty("TotalScore"))
                if (typeof message.TotalScore === "number")
                    object.TotalScore = options.longs === String ? String(message.TotalScore) : message.TotalScore;
                else
                    object.TotalScore = options.longs === String ? $util.Long.prototype.toString.call(message.TotalScore) : options.longs === Number ? new $util.LongBits(message.TotalScore.low >>> 0, message.TotalScore.high >>> 0).toNumber() : message.TotalScore;
            if (message.XiuXianScore != null && message.hasOwnProperty("XiuXianScore"))
                if (typeof message.XiuXianScore === "number")
                    object.XiuXianScore = options.longs === String ? String(message.XiuXianScore) : message.XiuXianScore;
                else
                    object.XiuXianScore = options.longs === String ? $util.Long.prototype.toString.call(message.XiuXianScore) : options.longs === Number ? new $util.LongBits(message.XiuXianScore.low >>> 0, message.XiuXianScore.high >>> 0).toNumber() : message.XiuXianScore;
            if (message.IsSuperUser != null && message.hasOwnProperty("IsSuperUser"))
                object.IsSuperUser = message.IsSuperUser;
            if (message.TracedUserID != null && message.hasOwnProperty("TracedUserID"))
                object.TracedUserID = message.TracedUserID;
            if (message.TodayScoreDan != null && message.hasOwnProperty("TodayScoreDan"))
                object.TodayScoreDan = message.TodayScoreDan;
            if (message.TotalWinDan != null && message.hasOwnProperty("TotalWinDan"))
                object.TotalWinDan = message.TotalWinDan;
            if (message.ChargeDan != null && message.hasOwnProperty("ChargeDan"))
                object.ChargeDan = message.ChargeDan;
            if (message.WinRateDan != null && message.hasOwnProperty("WinRateDan"))
                object.WinRateDan = message.WinRateDan;
            if (message.GameTimeDan != null && message.hasOwnProperty("GameTimeDan"))
                object.GameTimeDan = message.GameTimeDan;
            if (message.IsNewBee != null && message.hasOwnProperty("IsNewBee"))
                object.IsNewBee = message.IsNewBee;
            if (message.BankMoney != null && message.hasOwnProperty("BankMoney"))
                if (typeof message.BankMoney === "number")
                    object.BankMoney = options.longs === String ? String(message.BankMoney) : message.BankMoney;
                else
                    object.BankMoney = options.longs === String ? $util.Long.prototype.toString.call(message.BankMoney) : options.longs === Number ? new $util.LongBits(message.BankMoney.low >>> 0, message.BankMoney.high >>> 0).toNumber() : message.BankMoney;
            if (message.CurrGameLoseWin != null && message.hasOwnProperty("CurrGameLoseWin"))
                if (typeof message.CurrGameLoseWin === "number")
                    object.CurrGameLoseWin = options.longs === String ? String(message.CurrGameLoseWin) : message.CurrGameLoseWin;
                else
                    object.CurrGameLoseWin = options.longs === String ? $util.Long.prototype.toString.call(message.CurrGameLoseWin) : options.longs === Number ? new $util.LongBits(message.CurrGameLoseWin.low >>> 0, message.CurrGameLoseWin.high >>> 0).toNumber() : message.CurrGameLoseWin;
            if (message.PlatformLoseWin != null && message.hasOwnProperty("PlatformLoseWin"))
                if (typeof message.PlatformLoseWin === "number")
                    object.PlatformLoseWin = options.longs === String ? String(message.PlatformLoseWin) : message.PlatformLoseWin;
                else
                    object.PlatformLoseWin = options.longs === String ? $util.Long.prototype.toString.call(message.PlatformLoseWin) : options.longs === Number ? new $util.LongBits(message.PlatformLoseWin.low >>> 0, message.PlatformLoseWin.high >>> 0).toNumber() : message.PlatformLoseWin;
            if (message.FirstGameTimestamp != null && message.hasOwnProperty("FirstGameTimestamp"))
                if (typeof message.FirstGameTimestamp === "number")
                    object.FirstGameTimestamp = options.longs === String ? String(message.FirstGameTimestamp) : message.FirstGameTimestamp;
                else
                    object.FirstGameTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.FirstGameTimestamp) : options.longs === Number ? new $util.LongBits(message.FirstGameTimestamp.low >>> 0, message.FirstGameTimestamp.high >>> 0).toNumber() : message.FirstGameTimestamp;
            if (message.TotalRecharge != null && message.hasOwnProperty("TotalRecharge"))
                if (typeof message.TotalRecharge === "number")
                    object.TotalRecharge = options.longs === String ? String(message.TotalRecharge) : message.TotalRecharge;
                else
                    object.TotalRecharge = options.longs === String ? $util.Long.prototype.toString.call(message.TotalRecharge) : options.longs === Number ? new $util.LongBits(message.TotalRecharge.low >>> 0, message.TotalRecharge.high >>> 0).toNumber() : message.TotalRecharge;
            if (message.DayRecharge != null && message.hasOwnProperty("DayRecharge"))
                if (typeof message.DayRecharge === "number")
                    object.DayRecharge = options.longs === String ? String(message.DayRecharge) : message.DayRecharge;
                else
                    object.DayRecharge = options.longs === String ? $util.Long.prototype.toString.call(message.DayRecharge) : options.longs === Number ? new $util.LongBits(message.DayRecharge.low >>> 0, message.DayRecharge.high >>> 0).toNumber() : message.DayRecharge;
            if (message.ControlSwitchState != null && message.hasOwnProperty("ControlSwitchState"))
                object.ControlSwitchState = message.ControlSwitchState;
            if (message.IsSitByNum != null && message.hasOwnProperty("IsSitByNum"))
                object.IsSitByNum = message.IsSitByNum;
            if (message.TableID != null && message.hasOwnProperty("TableID"))
                object.TableID = message.TableID;
            if (message.ChairID != null && message.hasOwnProperty("ChairID"))
                object.ChairID = message.ChairID;
            return object;
        };

        /**
         * Converts this UserRoomLogonData to JSON.
         * @function toJSON
         * @memberof gameRoom.UserRoomLogonData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserRoomLogonData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserRoomLogonData;
    })();

    gameRoom.UserSit = (function() {

        /**
         * Properties of a UserSit.
         * @memberof gameRoom
         * @interface IUserSit
         * @property {number} TableNo UserSit TableNo
         * @property {number} SeatNo UserSit SeatNo
         */

        /**
         * Constructs a new UserSit.
         * @memberof gameRoom
         * @classdesc Represents a UserSit.
         * @implements IUserSit
         * @constructor
         * @param {gameRoom.IUserSit=} [properties] Properties to set
         */
        function UserSit(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserSit TableNo.
         * @member {number} TableNo
         * @memberof gameRoom.UserSit
         * @instance
         */
        UserSit.prototype.TableNo = 0;

        /**
         * UserSit SeatNo.
         * @member {number} SeatNo
         * @memberof gameRoom.UserSit
         * @instance
         */
        UserSit.prototype.SeatNo = 0;

        /**
         * Creates a new UserSit instance using the specified properties.
         * @function create
         * @memberof gameRoom.UserSit
         * @static
         * @param {gameRoom.IUserSit=} [properties] Properties to set
         * @returns {gameRoom.UserSit} UserSit instance
         */
        UserSit.create = function create(properties) {
            return new UserSit(properties);
        };

        /**
         * Encodes the specified UserSit message. Does not implicitly {@link gameRoom.UserSit.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.UserSit
         * @static
         * @param {gameRoom.IUserSit} message UserSit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSit.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TableNo);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.SeatNo);
            return writer;
        };

        /**
         * Encodes the specified UserSit message, length delimited. Does not implicitly {@link gameRoom.UserSit.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.UserSit
         * @static
         * @param {gameRoom.IUserSit} message UserSit message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSit.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserSit message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.UserSit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.UserSit} UserSit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSit.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.UserSit();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TableNo = reader.int32();
                    break;
                case 2:
                    message.SeatNo = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("TableNo"))
                throw $util.ProtocolError("missing required 'TableNo'", { instance: message });
            if (!message.hasOwnProperty("SeatNo"))
                throw $util.ProtocolError("missing required 'SeatNo'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserSit message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.UserSit
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.UserSit} UserSit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSit.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserSit message.
         * @function verify
         * @memberof gameRoom.UserSit
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserSit.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.TableNo))
                return "TableNo: integer expected";
            if (!$util.isInteger(message.SeatNo))
                return "SeatNo: integer expected";
            return null;
        };

        /**
         * Creates a UserSit message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.UserSit
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.UserSit} UserSit
         */
        UserSit.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.UserSit)
                return object;
            var message = new $root.gameRoom.UserSit();
            if (object.TableNo != null)
                message.TableNo = object.TableNo | 0;
            if (object.SeatNo != null)
                message.SeatNo = object.SeatNo | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserSit message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.UserSit
         * @static
         * @param {gameRoom.UserSit} message UserSit
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserSit.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.TableNo = 0;
                object.SeatNo = 0;
            }
            if (message.TableNo != null && message.hasOwnProperty("TableNo"))
                object.TableNo = message.TableNo;
            if (message.SeatNo != null && message.hasOwnProperty("SeatNo"))
                object.SeatNo = message.SeatNo;
            return object;
        };

        /**
         * Converts this UserSit to JSON.
         * @function toJSON
         * @memberof gameRoom.UserSit
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserSit.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserSit;
    })();

    gameRoom.GameVerInfo = (function() {

        /**
         * Properties of a GameVerInfo.
         * @memberof gameRoom
         * @interface IGameVerInfo
         * @property {string} AndroidVersion GameVerInfo AndroidVersion
         * @property {string} IOSVersion GameVerInfo IOSVersion
         */

        /**
         * Constructs a new GameVerInfo.
         * @memberof gameRoom
         * @classdesc Represents a GameVerInfo.
         * @implements IGameVerInfo
         * @constructor
         * @param {gameRoom.IGameVerInfo=} [properties] Properties to set
         */
        function GameVerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GameVerInfo AndroidVersion.
         * @member {string} AndroidVersion
         * @memberof gameRoom.GameVerInfo
         * @instance
         */
        GameVerInfo.prototype.AndroidVersion = "";

        /**
         * GameVerInfo IOSVersion.
         * @member {string} IOSVersion
         * @memberof gameRoom.GameVerInfo
         * @instance
         */
        GameVerInfo.prototype.IOSVersion = "";

        /**
         * Creates a new GameVerInfo instance using the specified properties.
         * @function create
         * @memberof gameRoom.GameVerInfo
         * @static
         * @param {gameRoom.IGameVerInfo=} [properties] Properties to set
         * @returns {gameRoom.GameVerInfo} GameVerInfo instance
         */
        GameVerInfo.create = function create(properties) {
            return new GameVerInfo(properties);
        };

        /**
         * Encodes the specified GameVerInfo message. Does not implicitly {@link gameRoom.GameVerInfo.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.GameVerInfo
         * @static
         * @param {gameRoom.IGameVerInfo} message GameVerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameVerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.AndroidVersion);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.IOSVersion);
            return writer;
        };

        /**
         * Encodes the specified GameVerInfo message, length delimited. Does not implicitly {@link gameRoom.GameVerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.GameVerInfo
         * @static
         * @param {gameRoom.IGameVerInfo} message GameVerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GameVerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GameVerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.GameVerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.GameVerInfo} GameVerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameVerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.GameVerInfo();
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
         * Decodes a GameVerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.GameVerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.GameVerInfo} GameVerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GameVerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GameVerInfo message.
         * @function verify
         * @memberof gameRoom.GameVerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GameVerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.AndroidVersion))
                return "AndroidVersion: string expected";
            if (!$util.isString(message.IOSVersion))
                return "IOSVersion: string expected";
            return null;
        };

        /**
         * Creates a GameVerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.GameVerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.GameVerInfo} GameVerInfo
         */
        GameVerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.GameVerInfo)
                return object;
            var message = new $root.gameRoom.GameVerInfo();
            if (object.AndroidVersion != null)
                message.AndroidVersion = String(object.AndroidVersion);
            if (object.IOSVersion != null)
                message.IOSVersion = String(object.IOSVersion);
            return message;
        };

        /**
         * Creates a plain object from a GameVerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.GameVerInfo
         * @static
         * @param {gameRoom.GameVerInfo} message GameVerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GameVerInfo.toObject = function toObject(message, options) {
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
         * Converts this GameVerInfo to JSON.
         * @function toJSON
         * @memberof gameRoom.GameVerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GameVerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GameVerInfo;
    })();

    gameRoom.RoomInfo = (function() {

        /**
         * Properties of a RoomInfo.
         * @memberof gameRoom
         * @interface IRoomInfo
         * @property {number} GameID RoomInfo GameID
         * @property {string} GameName RoomInfo GameName
         * @property {string} Flag RoomInfo Flag
         * @property {number} BaseScore RoomInfo BaseScore
         */

        /**
         * Constructs a new RoomInfo.
         * @memberof gameRoom
         * @classdesc Represents a RoomInfo.
         * @implements IRoomInfo
         * @constructor
         * @param {gameRoom.IRoomInfo=} [properties] Properties to set
         */
        function RoomInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomInfo GameID.
         * @member {number} GameID
         * @memberof gameRoom.RoomInfo
         * @instance
         */
        RoomInfo.prototype.GameID = 0;

        /**
         * RoomInfo GameName.
         * @member {string} GameName
         * @memberof gameRoom.RoomInfo
         * @instance
         */
        RoomInfo.prototype.GameName = "";

        /**
         * RoomInfo Flag.
         * @member {string} Flag
         * @memberof gameRoom.RoomInfo
         * @instance
         */
        RoomInfo.prototype.Flag = "";

        /**
         * RoomInfo BaseScore.
         * @member {number} BaseScore
         * @memberof gameRoom.RoomInfo
         * @instance
         */
        RoomInfo.prototype.BaseScore = 0;

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @function create
         * @memberof gameRoom.RoomInfo
         * @static
         * @param {gameRoom.IRoomInfo=} [properties] Properties to set
         * @returns {gameRoom.RoomInfo} RoomInfo instance
         */
        RoomInfo.create = function create(properties) {
            return new RoomInfo(properties);
        };

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link gameRoom.RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.RoomInfo
         * @static
         * @param {gameRoom.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.GameName);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.Flag);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.BaseScore);
            return writer;
        };

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link gameRoom.RoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.RoomInfo
         * @static
         * @param {gameRoom.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.RoomInfo();
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
                    message.Flag = reader.string();
                    break;
                case 4:
                    message.BaseScore = reader.int32();
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
            if (!message.hasOwnProperty("Flag"))
                throw $util.ProtocolError("missing required 'Flag'", { instance: message });
            if (!message.hasOwnProperty("BaseScore"))
                throw $util.ProtocolError("missing required 'BaseScore'", { instance: message });
            return message;
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomInfo message.
         * @function verify
         * @memberof gameRoom.RoomInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (!$util.isString(message.GameName))
                return "GameName: string expected";
            if (!$util.isString(message.Flag))
                return "Flag: string expected";
            if (!$util.isInteger(message.BaseScore))
                return "BaseScore: integer expected";
            return null;
        };

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.RoomInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.RoomInfo} RoomInfo
         */
        RoomInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.RoomInfo)
                return object;
            var message = new $root.gameRoom.RoomInfo();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.GameName != null)
                message.GameName = String(object.GameName);
            if (object.Flag != null)
                message.Flag = String(object.Flag);
            if (object.BaseScore != null)
                message.BaseScore = object.BaseScore | 0;
            return message;
        };

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.RoomInfo
         * @static
         * @param {gameRoom.RoomInfo} message RoomInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameID = 0;
                object.GameName = "";
                object.Flag = "";
                object.BaseScore = 0;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.GameName != null && message.hasOwnProperty("GameName"))
                object.GameName = message.GameName;
            if (message.Flag != null && message.hasOwnProperty("Flag"))
                object.Flag = message.Flag;
            if (message.BaseScore != null && message.hasOwnProperty("BaseScore"))
                object.BaseScore = message.BaseScore;
            return object;
        };

        /**
         * Converts this RoomInfo to JSON.
         * @function toJSON
         * @memberof gameRoom.RoomInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomInfo;
    })();

    gameRoom.SlotGetGameProgress = (function() {

        /**
         * Properties of a SlotGetGameProgress.
         * @memberof gameRoom
         * @interface ISlotGetGameProgress
         * @property {number} UserID SlotGetGameProgress UserID
         * @property {number} GameID SlotGetGameProgress GameID
         */

        /**
         * Constructs a new SlotGetGameProgress.
         * @memberof gameRoom
         * @classdesc Represents a SlotGetGameProgress.
         * @implements ISlotGetGameProgress
         * @constructor
         * @param {gameRoom.ISlotGetGameProgress=} [properties] Properties to set
         */
        function SlotGetGameProgress(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SlotGetGameProgress UserID.
         * @member {number} UserID
         * @memberof gameRoom.SlotGetGameProgress
         * @instance
         */
        SlotGetGameProgress.prototype.UserID = 0;

        /**
         * SlotGetGameProgress GameID.
         * @member {number} GameID
         * @memberof gameRoom.SlotGetGameProgress
         * @instance
         */
        SlotGetGameProgress.prototype.GameID = 0;

        /**
         * Creates a new SlotGetGameProgress instance using the specified properties.
         * @function create
         * @memberof gameRoom.SlotGetGameProgress
         * @static
         * @param {gameRoom.ISlotGetGameProgress=} [properties] Properties to set
         * @returns {gameRoom.SlotGetGameProgress} SlotGetGameProgress instance
         */
        SlotGetGameProgress.create = function create(properties) {
            return new SlotGetGameProgress(properties);
        };

        /**
         * Encodes the specified SlotGetGameProgress message. Does not implicitly {@link gameRoom.SlotGetGameProgress.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.SlotGetGameProgress
         * @static
         * @param {gameRoom.ISlotGetGameProgress} message SlotGetGameProgress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlotGetGameProgress.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GameID);
            return writer;
        };

        /**
         * Encodes the specified SlotGetGameProgress message, length delimited. Does not implicitly {@link gameRoom.SlotGetGameProgress.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.SlotGetGameProgress
         * @static
         * @param {gameRoom.ISlotGetGameProgress} message SlotGetGameProgress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlotGetGameProgress.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SlotGetGameProgress message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.SlotGetGameProgress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.SlotGetGameProgress} SlotGetGameProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlotGetGameProgress.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.SlotGetGameProgress();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.GameID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance: message });
            return message;
        };

        /**
         * Decodes a SlotGetGameProgress message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.SlotGetGameProgress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.SlotGetGameProgress} SlotGetGameProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlotGetGameProgress.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SlotGetGameProgress message.
         * @function verify
         * @memberof gameRoom.SlotGetGameProgress
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SlotGetGameProgress.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            return null;
        };

        /**
         * Creates a SlotGetGameProgress message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.SlotGetGameProgress
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.SlotGetGameProgress} SlotGetGameProgress
         */
        SlotGetGameProgress.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.SlotGetGameProgress)
                return object;
            var message = new $root.gameRoom.SlotGetGameProgress();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            return message;
        };

        /**
         * Creates a plain object from a SlotGetGameProgress message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.SlotGetGameProgress
         * @static
         * @param {gameRoom.SlotGetGameProgress} message SlotGetGameProgress
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SlotGetGameProgress.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.GameID = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            return object;
        };

        /**
         * Converts this SlotGetGameProgress to JSON.
         * @function toJSON
         * @memberof gameRoom.SlotGetGameProgress
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SlotGetGameProgress.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SlotGetGameProgress;
    })();

    gameRoom.SlotGetGameProgressRet = (function() {

        /**
         * Properties of a SlotGetGameProgressRet.
         * @memberof gameRoom
         * @interface ISlotGetGameProgressRet
         * @property {number} UserID SlotGetGameProgressRet UserID
         * @property {number} GameID SlotGetGameProgressRet GameID
         * @property {number} Version SlotGetGameProgressRet Version
         * @property {string} GameData SlotGetGameProgressRet GameData
         * @property {number|Long|null} [Money] SlotGetGameProgressRet Money
         * @property {number|null} [CtrlType] SlotGetGameProgressRet CtrlType
         * @property {number|Long|null} [EndTimestamp] SlotGetGameProgressRet EndTimestamp
         * @property {number|Long|null} [CtrlLoseMoney] SlotGetGameProgressRet CtrlLoseMoney
         * @property {number|Long|null} [CtrlWinMoneyMin] SlotGetGameProgressRet CtrlWinMoneyMin
         * @property {number|Long|null} [CtrlWinMoneyMax] SlotGetGameProgressRet CtrlWinMoneyMax
         * @property {number|Long|null} [LoseWinMoney] SlotGetGameProgressRet LoseWinMoney
         * @property {number|null} [KickoutFreeRate] SlotGetGameProgressRet KickoutFreeRate
         * @property {number|null} [AddFreeRate] SlotGetGameProgressRet AddFreeRate
         * @property {number|null} [MinRange] SlotGetGameProgressRet MinRange
         * @property {number|null} [MaxRange] SlotGetGameProgressRet MaxRange
         */

        /**
         * Constructs a new SlotGetGameProgressRet.
         * @memberof gameRoom
         * @classdesc Represents a SlotGetGameProgressRet.
         * @implements ISlotGetGameProgressRet
         * @constructor
         * @param {gameRoom.ISlotGetGameProgressRet=} [properties] Properties to set
         */
        function SlotGetGameProgressRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SlotGetGameProgressRet UserID.
         * @member {number} UserID
         * @memberof gameRoom.SlotGetGameProgressRet
         * @instance
         */
        SlotGetGameProgressRet.prototype.UserID = 0;

        /**
         * SlotGetGameProgressRet GameID.
         * @member {number} GameID
         * @memberof gameRoom.SlotGetGameProgressRet
         * @instance
         */
        SlotGetGameProgressRet.prototype.GameID = 0;

        /**
         * SlotGetGameProgressRet Version.
         * @member {number} Version
         * @memberof gameRoom.SlotGetGameProgressRet
         * @instance
         */
        SlotGetGameProgressRet.prototype.Version = 0;

        /**
         * SlotGetGameProgressRet GameData.
         * @member {string} GameData
         * @memberof gameRoom.SlotGetGameProgressRet
         * @instance
         */
        SlotGetGameProgressRet.prototype.GameData = "";

        /**
         * SlotGetGameProgressRet Money.
         * @member {number|Long} Money
         * @memberof gameRoom.SlotGetGameProgressRet
         * @instance
         */
        SlotGetGameProgressRet.prototype.Money = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SlotGetGameProgressRet CtrlType.
         * @member {number} CtrlType
         * @memberof gameRoom.SlotGetGameProgressRet
         * @instance
         */
        SlotGetGameProgressRet.prototype.CtrlType = 0;

        /**
         * SlotGetGameProgressRet EndTimestamp.
         * @member {number|Long} EndTimestamp
         * @memberof gameRoom.SlotGetGameProgressRet
         * @instance
         */
        SlotGetGameProgressRet.prototype.EndTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SlotGetGameProgressRet CtrlLoseMoney.
         * @member {number|Long} CtrlLoseMoney
         * @memberof gameRoom.SlotGetGameProgressRet
         * @instance
         */
        SlotGetGameProgressRet.prototype.CtrlLoseMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SlotGetGameProgressRet CtrlWinMoneyMin.
         * @member {number|Long} CtrlWinMoneyMin
         * @memberof gameRoom.SlotGetGameProgressRet
         * @instance
         */
        SlotGetGameProgressRet.prototype.CtrlWinMoneyMin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SlotGetGameProgressRet CtrlWinMoneyMax.
         * @member {number|Long} CtrlWinMoneyMax
         * @memberof gameRoom.SlotGetGameProgressRet
         * @instance
         */
        SlotGetGameProgressRet.prototype.CtrlWinMoneyMax = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SlotGetGameProgressRet LoseWinMoney.
         * @member {number|Long} LoseWinMoney
         * @memberof gameRoom.SlotGetGameProgressRet
         * @instance
         */
        SlotGetGameProgressRet.prototype.LoseWinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SlotGetGameProgressRet KickoutFreeRate.
         * @member {number} KickoutFreeRate
         * @memberof gameRoom.SlotGetGameProgressRet
         * @instance
         */
        SlotGetGameProgressRet.prototype.KickoutFreeRate = 0;

        /**
         * SlotGetGameProgressRet AddFreeRate.
         * @member {number} AddFreeRate
         * @memberof gameRoom.SlotGetGameProgressRet
         * @instance
         */
        SlotGetGameProgressRet.prototype.AddFreeRate = 0;

        /**
         * SlotGetGameProgressRet MinRange.
         * @member {number} MinRange
         * @memberof gameRoom.SlotGetGameProgressRet
         * @instance
         */
        SlotGetGameProgressRet.prototype.MinRange = 0;

        /**
         * SlotGetGameProgressRet MaxRange.
         * @member {number} MaxRange
         * @memberof gameRoom.SlotGetGameProgressRet
         * @instance
         */
        SlotGetGameProgressRet.prototype.MaxRange = 0;

        /**
         * Creates a new SlotGetGameProgressRet instance using the specified properties.
         * @function create
         * @memberof gameRoom.SlotGetGameProgressRet
         * @static
         * @param {gameRoom.ISlotGetGameProgressRet=} [properties] Properties to set
         * @returns {gameRoom.SlotGetGameProgressRet} SlotGetGameProgressRet instance
         */
        SlotGetGameProgressRet.create = function create(properties) {
            return new SlotGetGameProgressRet(properties);
        };

        /**
         * Encodes the specified SlotGetGameProgressRet message. Does not implicitly {@link gameRoom.SlotGetGameProgressRet.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.SlotGetGameProgressRet
         * @static
         * @param {gameRoom.ISlotGetGameProgressRet} message SlotGetGameProgressRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlotGetGameProgressRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GameID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Version);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.GameData);
            if (message.Money != null && Object.hasOwnProperty.call(message, "Money"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.Money);
            if (message.CtrlType != null && Object.hasOwnProperty.call(message, "CtrlType"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.CtrlType);
            if (message.EndTimestamp != null && Object.hasOwnProperty.call(message, "EndTimestamp"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.EndTimestamp);
            if (message.CtrlLoseMoney != null && Object.hasOwnProperty.call(message, "CtrlLoseMoney"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.CtrlLoseMoney);
            if (message.CtrlWinMoneyMin != null && Object.hasOwnProperty.call(message, "CtrlWinMoneyMin"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.CtrlWinMoneyMin);
            if (message.CtrlWinMoneyMax != null && Object.hasOwnProperty.call(message, "CtrlWinMoneyMax"))
                writer.uint32(/* id 10, wireType 0 =*/80).int64(message.CtrlWinMoneyMax);
            if (message.LoseWinMoney != null && Object.hasOwnProperty.call(message, "LoseWinMoney"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.LoseWinMoney);
            if (message.KickoutFreeRate != null && Object.hasOwnProperty.call(message, "KickoutFreeRate"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.KickoutFreeRate);
            if (message.AddFreeRate != null && Object.hasOwnProperty.call(message, "AddFreeRate"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.AddFreeRate);
            if (message.MinRange != null && Object.hasOwnProperty.call(message, "MinRange"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.MinRange);
            if (message.MaxRange != null && Object.hasOwnProperty.call(message, "MaxRange"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.MaxRange);
            return writer;
        };

        /**
         * Encodes the specified SlotGetGameProgressRet message, length delimited. Does not implicitly {@link gameRoom.SlotGetGameProgressRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.SlotGetGameProgressRet
         * @static
         * @param {gameRoom.ISlotGetGameProgressRet} message SlotGetGameProgressRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlotGetGameProgressRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SlotGetGameProgressRet message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.SlotGetGameProgressRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.SlotGetGameProgressRet} SlotGetGameProgressRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlotGetGameProgressRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.SlotGetGameProgressRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.GameID = reader.int32();
                    break;
                case 3:
                    message.Version = reader.int32();
                    break;
                case 4:
                    message.GameData = reader.string();
                    break;
                case 5:
                    message.Money = reader.int64();
                    break;
                case 6:
                    message.CtrlType = reader.int32();
                    break;
                case 7:
                    message.EndTimestamp = reader.int64();
                    break;
                case 8:
                    message.CtrlLoseMoney = reader.int64();
                    break;
                case 9:
                    message.CtrlWinMoneyMin = reader.int64();
                    break;
                case 10:
                    message.CtrlWinMoneyMax = reader.int64();
                    break;
                case 11:
                    message.LoseWinMoney = reader.int64();
                    break;
                case 12:
                    message.KickoutFreeRate = reader.int32();
                    break;
                case 13:
                    message.AddFreeRate = reader.int32();
                    break;
                case 14:
                    message.MinRange = reader.int32();
                    break;
                case 15:
                    message.MaxRange = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance: message });
            if (!message.hasOwnProperty("Version"))
                throw $util.ProtocolError("missing required 'Version'", { instance: message });
            if (!message.hasOwnProperty("GameData"))
                throw $util.ProtocolError("missing required 'GameData'", { instance: message });
            return message;
        };

        /**
         * Decodes a SlotGetGameProgressRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.SlotGetGameProgressRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.SlotGetGameProgressRet} SlotGetGameProgressRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlotGetGameProgressRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SlotGetGameProgressRet message.
         * @function verify
         * @memberof gameRoom.SlotGetGameProgressRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SlotGetGameProgressRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (!$util.isInteger(message.Version))
                return "Version: integer expected";
            if (!$util.isString(message.GameData))
                return "GameData: string expected";
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (!$util.isInteger(message.Money) && !(message.Money && $util.isInteger(message.Money.low) && $util.isInteger(message.Money.high)))
                    return "Money: integer|Long expected";
            if (message.CtrlType != null && message.hasOwnProperty("CtrlType"))
                if (!$util.isInteger(message.CtrlType))
                    return "CtrlType: integer expected";
            if (message.EndTimestamp != null && message.hasOwnProperty("EndTimestamp"))
                if (!$util.isInteger(message.EndTimestamp) && !(message.EndTimestamp && $util.isInteger(message.EndTimestamp.low) && $util.isInteger(message.EndTimestamp.high)))
                    return "EndTimestamp: integer|Long expected";
            if (message.CtrlLoseMoney != null && message.hasOwnProperty("CtrlLoseMoney"))
                if (!$util.isInteger(message.CtrlLoseMoney) && !(message.CtrlLoseMoney && $util.isInteger(message.CtrlLoseMoney.low) && $util.isInteger(message.CtrlLoseMoney.high)))
                    return "CtrlLoseMoney: integer|Long expected";
            if (message.CtrlWinMoneyMin != null && message.hasOwnProperty("CtrlWinMoneyMin"))
                if (!$util.isInteger(message.CtrlWinMoneyMin) && !(message.CtrlWinMoneyMin && $util.isInteger(message.CtrlWinMoneyMin.low) && $util.isInteger(message.CtrlWinMoneyMin.high)))
                    return "CtrlWinMoneyMin: integer|Long expected";
            if (message.CtrlWinMoneyMax != null && message.hasOwnProperty("CtrlWinMoneyMax"))
                if (!$util.isInteger(message.CtrlWinMoneyMax) && !(message.CtrlWinMoneyMax && $util.isInteger(message.CtrlWinMoneyMax.low) && $util.isInteger(message.CtrlWinMoneyMax.high)))
                    return "CtrlWinMoneyMax: integer|Long expected";
            if (message.LoseWinMoney != null && message.hasOwnProperty("LoseWinMoney"))
                if (!$util.isInteger(message.LoseWinMoney) && !(message.LoseWinMoney && $util.isInteger(message.LoseWinMoney.low) && $util.isInteger(message.LoseWinMoney.high)))
                    return "LoseWinMoney: integer|Long expected";
            if (message.KickoutFreeRate != null && message.hasOwnProperty("KickoutFreeRate"))
                if (!$util.isInteger(message.KickoutFreeRate))
                    return "KickoutFreeRate: integer expected";
            if (message.AddFreeRate != null && message.hasOwnProperty("AddFreeRate"))
                if (!$util.isInteger(message.AddFreeRate))
                    return "AddFreeRate: integer expected";
            if (message.MinRange != null && message.hasOwnProperty("MinRange"))
                if (!$util.isInteger(message.MinRange))
                    return "MinRange: integer expected";
            if (message.MaxRange != null && message.hasOwnProperty("MaxRange"))
                if (!$util.isInteger(message.MaxRange))
                    return "MaxRange: integer expected";
            return null;
        };

        /**
         * Creates a SlotGetGameProgressRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.SlotGetGameProgressRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.SlotGetGameProgressRet} SlotGetGameProgressRet
         */
        SlotGetGameProgressRet.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.SlotGetGameProgressRet)
                return object;
            var message = new $root.gameRoom.SlotGetGameProgressRet();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.Version != null)
                message.Version = object.Version | 0;
            if (object.GameData != null)
                message.GameData = String(object.GameData);
            if (object.Money != null)
                if ($util.Long)
                    (message.Money = $util.Long.fromValue(object.Money)).unsigned = false;
                else if (typeof object.Money === "string")
                    message.Money = parseInt(object.Money, 10);
                else if (typeof object.Money === "number")
                    message.Money = object.Money;
                else if (typeof object.Money === "object")
                    message.Money = new $util.LongBits(object.Money.low >>> 0, object.Money.high >>> 0).toNumber();
            if (object.CtrlType != null)
                message.CtrlType = object.CtrlType | 0;
            if (object.EndTimestamp != null)
                if ($util.Long)
                    (message.EndTimestamp = $util.Long.fromValue(object.EndTimestamp)).unsigned = false;
                else if (typeof object.EndTimestamp === "string")
                    message.EndTimestamp = parseInt(object.EndTimestamp, 10);
                else if (typeof object.EndTimestamp === "number")
                    message.EndTimestamp = object.EndTimestamp;
                else if (typeof object.EndTimestamp === "object")
                    message.EndTimestamp = new $util.LongBits(object.EndTimestamp.low >>> 0, object.EndTimestamp.high >>> 0).toNumber();
            if (object.CtrlLoseMoney != null)
                if ($util.Long)
                    (message.CtrlLoseMoney = $util.Long.fromValue(object.CtrlLoseMoney)).unsigned = false;
                else if (typeof object.CtrlLoseMoney === "string")
                    message.CtrlLoseMoney = parseInt(object.CtrlLoseMoney, 10);
                else if (typeof object.CtrlLoseMoney === "number")
                    message.CtrlLoseMoney = object.CtrlLoseMoney;
                else if (typeof object.CtrlLoseMoney === "object")
                    message.CtrlLoseMoney = new $util.LongBits(object.CtrlLoseMoney.low >>> 0, object.CtrlLoseMoney.high >>> 0).toNumber();
            if (object.CtrlWinMoneyMin != null)
                if ($util.Long)
                    (message.CtrlWinMoneyMin = $util.Long.fromValue(object.CtrlWinMoneyMin)).unsigned = false;
                else if (typeof object.CtrlWinMoneyMin === "string")
                    message.CtrlWinMoneyMin = parseInt(object.CtrlWinMoneyMin, 10);
                else if (typeof object.CtrlWinMoneyMin === "number")
                    message.CtrlWinMoneyMin = object.CtrlWinMoneyMin;
                else if (typeof object.CtrlWinMoneyMin === "object")
                    message.CtrlWinMoneyMin = new $util.LongBits(object.CtrlWinMoneyMin.low >>> 0, object.CtrlWinMoneyMin.high >>> 0).toNumber();
            if (object.CtrlWinMoneyMax != null)
                if ($util.Long)
                    (message.CtrlWinMoneyMax = $util.Long.fromValue(object.CtrlWinMoneyMax)).unsigned = false;
                else if (typeof object.CtrlWinMoneyMax === "string")
                    message.CtrlWinMoneyMax = parseInt(object.CtrlWinMoneyMax, 10);
                else if (typeof object.CtrlWinMoneyMax === "number")
                    message.CtrlWinMoneyMax = object.CtrlWinMoneyMax;
                else if (typeof object.CtrlWinMoneyMax === "object")
                    message.CtrlWinMoneyMax = new $util.LongBits(object.CtrlWinMoneyMax.low >>> 0, object.CtrlWinMoneyMax.high >>> 0).toNumber();
            if (object.LoseWinMoney != null)
                if ($util.Long)
                    (message.LoseWinMoney = $util.Long.fromValue(object.LoseWinMoney)).unsigned = false;
                else if (typeof object.LoseWinMoney === "string")
                    message.LoseWinMoney = parseInt(object.LoseWinMoney, 10);
                else if (typeof object.LoseWinMoney === "number")
                    message.LoseWinMoney = object.LoseWinMoney;
                else if (typeof object.LoseWinMoney === "object")
                    message.LoseWinMoney = new $util.LongBits(object.LoseWinMoney.low >>> 0, object.LoseWinMoney.high >>> 0).toNumber();
            if (object.KickoutFreeRate != null)
                message.KickoutFreeRate = object.KickoutFreeRate | 0;
            if (object.AddFreeRate != null)
                message.AddFreeRate = object.AddFreeRate | 0;
            if (object.MinRange != null)
                message.MinRange = object.MinRange | 0;
            if (object.MaxRange != null)
                message.MaxRange = object.MaxRange | 0;
            return message;
        };

        /**
         * Creates a plain object from a SlotGetGameProgressRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.SlotGetGameProgressRet
         * @static
         * @param {gameRoom.SlotGetGameProgressRet} message SlotGetGameProgressRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SlotGetGameProgressRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.GameID = 0;
                object.Version = 0;
                object.GameData = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Money = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Money = options.longs === String ? "0" : 0;
                object.CtrlType = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.EndTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.EndTimestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CtrlLoseMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CtrlLoseMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CtrlWinMoneyMin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CtrlWinMoneyMin = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CtrlWinMoneyMax = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CtrlWinMoneyMax = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.LoseWinMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.LoseWinMoney = options.longs === String ? "0" : 0;
                object.KickoutFreeRate = 0;
                object.AddFreeRate = 0;
                object.MinRange = 0;
                object.MaxRange = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.Version != null && message.hasOwnProperty("Version"))
                object.Version = message.Version;
            if (message.GameData != null && message.hasOwnProperty("GameData"))
                object.GameData = message.GameData;
            if (message.Money != null && message.hasOwnProperty("Money"))
                if (typeof message.Money === "number")
                    object.Money = options.longs === String ? String(message.Money) : message.Money;
                else
                    object.Money = options.longs === String ? $util.Long.prototype.toString.call(message.Money) : options.longs === Number ? new $util.LongBits(message.Money.low >>> 0, message.Money.high >>> 0).toNumber() : message.Money;
            if (message.CtrlType != null && message.hasOwnProperty("CtrlType"))
                object.CtrlType = message.CtrlType;
            if (message.EndTimestamp != null && message.hasOwnProperty("EndTimestamp"))
                if (typeof message.EndTimestamp === "number")
                    object.EndTimestamp = options.longs === String ? String(message.EndTimestamp) : message.EndTimestamp;
                else
                    object.EndTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.EndTimestamp) : options.longs === Number ? new $util.LongBits(message.EndTimestamp.low >>> 0, message.EndTimestamp.high >>> 0).toNumber() : message.EndTimestamp;
            if (message.CtrlLoseMoney != null && message.hasOwnProperty("CtrlLoseMoney"))
                if (typeof message.CtrlLoseMoney === "number")
                    object.CtrlLoseMoney = options.longs === String ? String(message.CtrlLoseMoney) : message.CtrlLoseMoney;
                else
                    object.CtrlLoseMoney = options.longs === String ? $util.Long.prototype.toString.call(message.CtrlLoseMoney) : options.longs === Number ? new $util.LongBits(message.CtrlLoseMoney.low >>> 0, message.CtrlLoseMoney.high >>> 0).toNumber() : message.CtrlLoseMoney;
            if (message.CtrlWinMoneyMin != null && message.hasOwnProperty("CtrlWinMoneyMin"))
                if (typeof message.CtrlWinMoneyMin === "number")
                    object.CtrlWinMoneyMin = options.longs === String ? String(message.CtrlWinMoneyMin) : message.CtrlWinMoneyMin;
                else
                    object.CtrlWinMoneyMin = options.longs === String ? $util.Long.prototype.toString.call(message.CtrlWinMoneyMin) : options.longs === Number ? new $util.LongBits(message.CtrlWinMoneyMin.low >>> 0, message.CtrlWinMoneyMin.high >>> 0).toNumber() : message.CtrlWinMoneyMin;
            if (message.CtrlWinMoneyMax != null && message.hasOwnProperty("CtrlWinMoneyMax"))
                if (typeof message.CtrlWinMoneyMax === "number")
                    object.CtrlWinMoneyMax = options.longs === String ? String(message.CtrlWinMoneyMax) : message.CtrlWinMoneyMax;
                else
                    object.CtrlWinMoneyMax = options.longs === String ? $util.Long.prototype.toString.call(message.CtrlWinMoneyMax) : options.longs === Number ? new $util.LongBits(message.CtrlWinMoneyMax.low >>> 0, message.CtrlWinMoneyMax.high >>> 0).toNumber() : message.CtrlWinMoneyMax;
            if (message.LoseWinMoney != null && message.hasOwnProperty("LoseWinMoney"))
                if (typeof message.LoseWinMoney === "number")
                    object.LoseWinMoney = options.longs === String ? String(message.LoseWinMoney) : message.LoseWinMoney;
                else
                    object.LoseWinMoney = options.longs === String ? $util.Long.prototype.toString.call(message.LoseWinMoney) : options.longs === Number ? new $util.LongBits(message.LoseWinMoney.low >>> 0, message.LoseWinMoney.high >>> 0).toNumber() : message.LoseWinMoney;
            if (message.KickoutFreeRate != null && message.hasOwnProperty("KickoutFreeRate"))
                object.KickoutFreeRate = message.KickoutFreeRate;
            if (message.AddFreeRate != null && message.hasOwnProperty("AddFreeRate"))
                object.AddFreeRate = message.AddFreeRate;
            if (message.MinRange != null && message.hasOwnProperty("MinRange"))
                object.MinRange = message.MinRange;
            if (message.MaxRange != null && message.hasOwnProperty("MaxRange"))
                object.MaxRange = message.MaxRange;
            return object;
        };

        /**
         * Converts this SlotGetGameProgressRet to JSON.
         * @function toJSON
         * @memberof gameRoom.SlotGetGameProgressRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SlotGetGameProgressRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SlotGetGameProgressRet;
    })();

    gameRoom.SlotSaveGameProgress = (function() {

        /**
         * Properties of a SlotSaveGameProgress.
         * @memberof gameRoom
         * @interface ISlotSaveGameProgress
         * @property {number} UserID SlotSaveGameProgress UserID
         * @property {number} GameID SlotSaveGameProgress GameID
         * @property {number} GameStation SlotSaveGameProgress GameStation
         * @property {number} Version SlotSaveGameProgress Version
         * @property {string} GameData SlotSaveGameProgress GameData
         */

        /**
         * Constructs a new SlotSaveGameProgress.
         * @memberof gameRoom
         * @classdesc Represents a SlotSaveGameProgress.
         * @implements ISlotSaveGameProgress
         * @constructor
         * @param {gameRoom.ISlotSaveGameProgress=} [properties] Properties to set
         */
        function SlotSaveGameProgress(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SlotSaveGameProgress UserID.
         * @member {number} UserID
         * @memberof gameRoom.SlotSaveGameProgress
         * @instance
         */
        SlotSaveGameProgress.prototype.UserID = 0;

        /**
         * SlotSaveGameProgress GameID.
         * @member {number} GameID
         * @memberof gameRoom.SlotSaveGameProgress
         * @instance
         */
        SlotSaveGameProgress.prototype.GameID = 0;

        /**
         * SlotSaveGameProgress GameStation.
         * @member {number} GameStation
         * @memberof gameRoom.SlotSaveGameProgress
         * @instance
         */
        SlotSaveGameProgress.prototype.GameStation = 0;

        /**
         * SlotSaveGameProgress Version.
         * @member {number} Version
         * @memberof gameRoom.SlotSaveGameProgress
         * @instance
         */
        SlotSaveGameProgress.prototype.Version = 0;

        /**
         * SlotSaveGameProgress GameData.
         * @member {string} GameData
         * @memberof gameRoom.SlotSaveGameProgress
         * @instance
         */
        SlotSaveGameProgress.prototype.GameData = "";

        /**
         * Creates a new SlotSaveGameProgress instance using the specified properties.
         * @function create
         * @memberof gameRoom.SlotSaveGameProgress
         * @static
         * @param {gameRoom.ISlotSaveGameProgress=} [properties] Properties to set
         * @returns {gameRoom.SlotSaveGameProgress} SlotSaveGameProgress instance
         */
        SlotSaveGameProgress.create = function create(properties) {
            return new SlotSaveGameProgress(properties);
        };

        /**
         * Encodes the specified SlotSaveGameProgress message. Does not implicitly {@link gameRoom.SlotSaveGameProgress.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.SlotSaveGameProgress
         * @static
         * @param {gameRoom.ISlotSaveGameProgress} message SlotSaveGameProgress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlotSaveGameProgress.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GameID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.GameStation);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Version);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.GameData);
            return writer;
        };

        /**
         * Encodes the specified SlotSaveGameProgress message, length delimited. Does not implicitly {@link gameRoom.SlotSaveGameProgress.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.SlotSaveGameProgress
         * @static
         * @param {gameRoom.ISlotSaveGameProgress} message SlotSaveGameProgress message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlotSaveGameProgress.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SlotSaveGameProgress message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.SlotSaveGameProgress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.SlotSaveGameProgress} SlotSaveGameProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlotSaveGameProgress.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.SlotSaveGameProgress();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.GameID = reader.int32();
                    break;
                case 3:
                    message.GameStation = reader.int32();
                    break;
                case 4:
                    message.Version = reader.int32();
                    break;
                case 5:
                    message.GameData = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance: message });
            if (!message.hasOwnProperty("GameStation"))
                throw $util.ProtocolError("missing required 'GameStation'", { instance: message });
            if (!message.hasOwnProperty("Version"))
                throw $util.ProtocolError("missing required 'Version'", { instance: message });
            if (!message.hasOwnProperty("GameData"))
                throw $util.ProtocolError("missing required 'GameData'", { instance: message });
            return message;
        };

        /**
         * Decodes a SlotSaveGameProgress message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.SlotSaveGameProgress
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.SlotSaveGameProgress} SlotSaveGameProgress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlotSaveGameProgress.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SlotSaveGameProgress message.
         * @function verify
         * @memberof gameRoom.SlotSaveGameProgress
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SlotSaveGameProgress.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (!$util.isInteger(message.GameStation))
                return "GameStation: integer expected";
            if (!$util.isInteger(message.Version))
                return "Version: integer expected";
            if (!$util.isString(message.GameData))
                return "GameData: string expected";
            return null;
        };

        /**
         * Creates a SlotSaveGameProgress message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.SlotSaveGameProgress
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.SlotSaveGameProgress} SlotSaveGameProgress
         */
        SlotSaveGameProgress.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.SlotSaveGameProgress)
                return object;
            var message = new $root.gameRoom.SlotSaveGameProgress();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.GameStation != null)
                message.GameStation = object.GameStation | 0;
            if (object.Version != null)
                message.Version = object.Version | 0;
            if (object.GameData != null)
                message.GameData = String(object.GameData);
            return message;
        };

        /**
         * Creates a plain object from a SlotSaveGameProgress message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.SlotSaveGameProgress
         * @static
         * @param {gameRoom.SlotSaveGameProgress} message SlotSaveGameProgress
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SlotSaveGameProgress.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.GameID = 0;
                object.GameStation = 0;
                object.Version = 0;
                object.GameData = "";
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.GameStation != null && message.hasOwnProperty("GameStation"))
                object.GameStation = message.GameStation;
            if (message.Version != null && message.hasOwnProperty("Version"))
                object.Version = message.Version;
            if (message.GameData != null && message.hasOwnProperty("GameData"))
                object.GameData = message.GameData;
            return object;
        };

        /**
         * Converts this SlotSaveGameProgress to JSON.
         * @function toJSON
         * @memberof gameRoom.SlotSaveGameProgress
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SlotSaveGameProgress.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SlotSaveGameProgress;
    })();

    gameRoom.SlotGetJackpot = (function() {

        /**
         * Properties of a SlotGetJackpot.
         * @memberof gameRoom
         * @interface ISlotGetJackpot
         * @property {number} GameID SlotGetJackpot GameID
         * @property {number} PoolCount SlotGetJackpot PoolCount
         */

        /**
         * Constructs a new SlotGetJackpot.
         * @memberof gameRoom
         * @classdesc Represents a SlotGetJackpot.
         * @implements ISlotGetJackpot
         * @constructor
         * @param {gameRoom.ISlotGetJackpot=} [properties] Properties to set
         */
        function SlotGetJackpot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SlotGetJackpot GameID.
         * @member {number} GameID
         * @memberof gameRoom.SlotGetJackpot
         * @instance
         */
        SlotGetJackpot.prototype.GameID = 0;

        /**
         * SlotGetJackpot PoolCount.
         * @member {number} PoolCount
         * @memberof gameRoom.SlotGetJackpot
         * @instance
         */
        SlotGetJackpot.prototype.PoolCount = 0;

        /**
         * Creates a new SlotGetJackpot instance using the specified properties.
         * @function create
         * @memberof gameRoom.SlotGetJackpot
         * @static
         * @param {gameRoom.ISlotGetJackpot=} [properties] Properties to set
         * @returns {gameRoom.SlotGetJackpot} SlotGetJackpot instance
         */
        SlotGetJackpot.create = function create(properties) {
            return new SlotGetJackpot(properties);
        };

        /**
         * Encodes the specified SlotGetJackpot message. Does not implicitly {@link gameRoom.SlotGetJackpot.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.SlotGetJackpot
         * @static
         * @param {gameRoom.ISlotGetJackpot} message SlotGetJackpot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlotGetJackpot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.PoolCount);
            return writer;
        };

        /**
         * Encodes the specified SlotGetJackpot message, length delimited. Does not implicitly {@link gameRoom.SlotGetJackpot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.SlotGetJackpot
         * @static
         * @param {gameRoom.ISlotGetJackpot} message SlotGetJackpot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlotGetJackpot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SlotGetJackpot message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.SlotGetJackpot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.SlotGetJackpot} SlotGetJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlotGetJackpot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.SlotGetJackpot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    message.PoolCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance: message });
            if (!message.hasOwnProperty("PoolCount"))
                throw $util.ProtocolError("missing required 'PoolCount'", { instance: message });
            return message;
        };

        /**
         * Decodes a SlotGetJackpot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.SlotGetJackpot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.SlotGetJackpot} SlotGetJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlotGetJackpot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SlotGetJackpot message.
         * @function verify
         * @memberof gameRoom.SlotGetJackpot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SlotGetJackpot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (!$util.isInteger(message.PoolCount))
                return "PoolCount: integer expected";
            return null;
        };

        /**
         * Creates a SlotGetJackpot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.SlotGetJackpot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.SlotGetJackpot} SlotGetJackpot
         */
        SlotGetJackpot.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.SlotGetJackpot)
                return object;
            var message = new $root.gameRoom.SlotGetJackpot();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.PoolCount != null)
                message.PoolCount = object.PoolCount | 0;
            return message;
        };

        /**
         * Creates a plain object from a SlotGetJackpot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.SlotGetJackpot
         * @static
         * @param {gameRoom.SlotGetJackpot} message SlotGetJackpot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SlotGetJackpot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameID = 0;
                object.PoolCount = 0;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.PoolCount != null && message.hasOwnProperty("PoolCount"))
                object.PoolCount = message.PoolCount;
            return object;
        };

        /**
         * Converts this SlotGetJackpot to JSON.
         * @function toJSON
         * @memberof gameRoom.SlotGetJackpot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SlotGetJackpot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SlotGetJackpot;
    })();

    gameRoom.SlotGetJackpotRet = (function() {

        /**
         * Properties of a SlotGetJackpotRet.
         * @memberof gameRoom
         * @interface ISlotGetJackpotRet
         * @property {number} GameID SlotGetJackpotRet GameID
         * @property {Array.<number|Long>|null} [Jackpots] SlotGetJackpotRet Jackpots
         */

        /**
         * Constructs a new SlotGetJackpotRet.
         * @memberof gameRoom
         * @classdesc Represents a SlotGetJackpotRet.
         * @implements ISlotGetJackpotRet
         * @constructor
         * @param {gameRoom.ISlotGetJackpotRet=} [properties] Properties to set
         */
        function SlotGetJackpotRet(properties) {
            this.Jackpots = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SlotGetJackpotRet GameID.
         * @member {number} GameID
         * @memberof gameRoom.SlotGetJackpotRet
         * @instance
         */
        SlotGetJackpotRet.prototype.GameID = 0;

        /**
         * SlotGetJackpotRet Jackpots.
         * @member {Array.<number|Long>} Jackpots
         * @memberof gameRoom.SlotGetJackpotRet
         * @instance
         */
        SlotGetJackpotRet.prototype.Jackpots = $util.emptyArray;

        /**
         * Creates a new SlotGetJackpotRet instance using the specified properties.
         * @function create
         * @memberof gameRoom.SlotGetJackpotRet
         * @static
         * @param {gameRoom.ISlotGetJackpotRet=} [properties] Properties to set
         * @returns {gameRoom.SlotGetJackpotRet} SlotGetJackpotRet instance
         */
        SlotGetJackpotRet.create = function create(properties) {
            return new SlotGetJackpotRet(properties);
        };

        /**
         * Encodes the specified SlotGetJackpotRet message. Does not implicitly {@link gameRoom.SlotGetJackpotRet.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.SlotGetJackpotRet
         * @static
         * @param {gameRoom.ISlotGetJackpotRet} message SlotGetJackpotRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlotGetJackpotRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            if (message.Jackpots != null && message.Jackpots.length)
                for (var i = 0; i < message.Jackpots.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Jackpots[i]);
            return writer;
        };

        /**
         * Encodes the specified SlotGetJackpotRet message, length delimited. Does not implicitly {@link gameRoom.SlotGetJackpotRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.SlotGetJackpotRet
         * @static
         * @param {gameRoom.ISlotGetJackpotRet} message SlotGetJackpotRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlotGetJackpotRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SlotGetJackpotRet message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.SlotGetJackpotRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.SlotGetJackpotRet} SlotGetJackpotRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlotGetJackpotRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.SlotGetJackpotRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    if (!(message.Jackpots && message.Jackpots.length))
                        message.Jackpots = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Jackpots.push(reader.int64());
                    } else
                        message.Jackpots.push(reader.int64());
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
         * Decodes a SlotGetJackpotRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.SlotGetJackpotRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.SlotGetJackpotRet} SlotGetJackpotRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlotGetJackpotRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SlotGetJackpotRet message.
         * @function verify
         * @memberof gameRoom.SlotGetJackpotRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SlotGetJackpotRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (message.Jackpots != null && message.hasOwnProperty("Jackpots")) {
                if (!Array.isArray(message.Jackpots))
                    return "Jackpots: array expected";
                for (var i = 0; i < message.Jackpots.length; ++i)
                    if (!$util.isInteger(message.Jackpots[i]) && !(message.Jackpots[i] && $util.isInteger(message.Jackpots[i].low) && $util.isInteger(message.Jackpots[i].high)))
                        return "Jackpots: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a SlotGetJackpotRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.SlotGetJackpotRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.SlotGetJackpotRet} SlotGetJackpotRet
         */
        SlotGetJackpotRet.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.SlotGetJackpotRet)
                return object;
            var message = new $root.gameRoom.SlotGetJackpotRet();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.Jackpots) {
                if (!Array.isArray(object.Jackpots))
                    throw TypeError(".gameRoom.SlotGetJackpotRet.Jackpots: array expected");
                message.Jackpots = [];
                for (var i = 0; i < object.Jackpots.length; ++i)
                    if ($util.Long)
                        (message.Jackpots[i] = $util.Long.fromValue(object.Jackpots[i])).unsigned = false;
                    else if (typeof object.Jackpots[i] === "string")
                        message.Jackpots[i] = parseInt(object.Jackpots[i], 10);
                    else if (typeof object.Jackpots[i] === "number")
                        message.Jackpots[i] = object.Jackpots[i];
                    else if (typeof object.Jackpots[i] === "object")
                        message.Jackpots[i] = new $util.LongBits(object.Jackpots[i].low >>> 0, object.Jackpots[i].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from a SlotGetJackpotRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.SlotGetJackpotRet
         * @static
         * @param {gameRoom.SlotGetJackpotRet} message SlotGetJackpotRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SlotGetJackpotRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Jackpots = [];
            if (options.defaults)
                object.GameID = 0;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.Jackpots && message.Jackpots.length) {
                object.Jackpots = [];
                for (var j = 0; j < message.Jackpots.length; ++j)
                    if (typeof message.Jackpots[j] === "number")
                        object.Jackpots[j] = options.longs === String ? String(message.Jackpots[j]) : message.Jackpots[j];
                    else
                        object.Jackpots[j] = options.longs === String ? $util.Long.prototype.toString.call(message.Jackpots[j]) : options.longs === Number ? new $util.LongBits(message.Jackpots[j].low >>> 0, message.Jackpots[j].high >>> 0).toNumber() : message.Jackpots[j];
            }
            return object;
        };

        /**
         * Converts this SlotGetJackpotRet to JSON.
         * @function toJSON
         * @memberof gameRoom.SlotGetJackpotRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SlotGetJackpotRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SlotGetJackpotRet;
    })();

    gameRoom.SlotUpdateJackpot = (function() {

        /**
         * Properties of a SlotUpdateJackpot.
         * @memberof gameRoom
         * @interface ISlotUpdateJackpot
         * @property {number} GameID SlotUpdateJackpot GameID
         * @property {Array.<number|Long>|null} [ChangeJackpots] SlotUpdateJackpot ChangeJackpots
         */

        /**
         * Constructs a new SlotUpdateJackpot.
         * @memberof gameRoom
         * @classdesc Represents a SlotUpdateJackpot.
         * @implements ISlotUpdateJackpot
         * @constructor
         * @param {gameRoom.ISlotUpdateJackpot=} [properties] Properties to set
         */
        function SlotUpdateJackpot(properties) {
            this.ChangeJackpots = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SlotUpdateJackpot GameID.
         * @member {number} GameID
         * @memberof gameRoom.SlotUpdateJackpot
         * @instance
         */
        SlotUpdateJackpot.prototype.GameID = 0;

        /**
         * SlotUpdateJackpot ChangeJackpots.
         * @member {Array.<number|Long>} ChangeJackpots
         * @memberof gameRoom.SlotUpdateJackpot
         * @instance
         */
        SlotUpdateJackpot.prototype.ChangeJackpots = $util.emptyArray;

        /**
         * Creates a new SlotUpdateJackpot instance using the specified properties.
         * @function create
         * @memberof gameRoom.SlotUpdateJackpot
         * @static
         * @param {gameRoom.ISlotUpdateJackpot=} [properties] Properties to set
         * @returns {gameRoom.SlotUpdateJackpot} SlotUpdateJackpot instance
         */
        SlotUpdateJackpot.create = function create(properties) {
            return new SlotUpdateJackpot(properties);
        };

        /**
         * Encodes the specified SlotUpdateJackpot message. Does not implicitly {@link gameRoom.SlotUpdateJackpot.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.SlotUpdateJackpot
         * @static
         * @param {gameRoom.ISlotUpdateJackpot} message SlotUpdateJackpot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlotUpdateJackpot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            if (message.ChangeJackpots != null && message.ChangeJackpots.length)
                for (var i = 0; i < message.ChangeJackpots.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.ChangeJackpots[i]);
            return writer;
        };

        /**
         * Encodes the specified SlotUpdateJackpot message, length delimited. Does not implicitly {@link gameRoom.SlotUpdateJackpot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.SlotUpdateJackpot
         * @static
         * @param {gameRoom.ISlotUpdateJackpot} message SlotUpdateJackpot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlotUpdateJackpot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SlotUpdateJackpot message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.SlotUpdateJackpot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.SlotUpdateJackpot} SlotUpdateJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlotUpdateJackpot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.SlotUpdateJackpot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    if (!(message.ChangeJackpots && message.ChangeJackpots.length))
                        message.ChangeJackpots = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.ChangeJackpots.push(reader.int64());
                    } else
                        message.ChangeJackpots.push(reader.int64());
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
         * Decodes a SlotUpdateJackpot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.SlotUpdateJackpot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.SlotUpdateJackpot} SlotUpdateJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlotUpdateJackpot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SlotUpdateJackpot message.
         * @function verify
         * @memberof gameRoom.SlotUpdateJackpot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SlotUpdateJackpot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (message.ChangeJackpots != null && message.hasOwnProperty("ChangeJackpots")) {
                if (!Array.isArray(message.ChangeJackpots))
                    return "ChangeJackpots: array expected";
                for (var i = 0; i < message.ChangeJackpots.length; ++i)
                    if (!$util.isInteger(message.ChangeJackpots[i]) && !(message.ChangeJackpots[i] && $util.isInteger(message.ChangeJackpots[i].low) && $util.isInteger(message.ChangeJackpots[i].high)))
                        return "ChangeJackpots: integer|Long[] expected";
            }
            return null;
        };

        /**
         * Creates a SlotUpdateJackpot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.SlotUpdateJackpot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.SlotUpdateJackpot} SlotUpdateJackpot
         */
        SlotUpdateJackpot.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.SlotUpdateJackpot)
                return object;
            var message = new $root.gameRoom.SlotUpdateJackpot();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.ChangeJackpots) {
                if (!Array.isArray(object.ChangeJackpots))
                    throw TypeError(".gameRoom.SlotUpdateJackpot.ChangeJackpots: array expected");
                message.ChangeJackpots = [];
                for (var i = 0; i < object.ChangeJackpots.length; ++i)
                    if ($util.Long)
                        (message.ChangeJackpots[i] = $util.Long.fromValue(object.ChangeJackpots[i])).unsigned = false;
                    else if (typeof object.ChangeJackpots[i] === "string")
                        message.ChangeJackpots[i] = parseInt(object.ChangeJackpots[i], 10);
                    else if (typeof object.ChangeJackpots[i] === "number")
                        message.ChangeJackpots[i] = object.ChangeJackpots[i];
                    else if (typeof object.ChangeJackpots[i] === "object")
                        message.ChangeJackpots[i] = new $util.LongBits(object.ChangeJackpots[i].low >>> 0, object.ChangeJackpots[i].high >>> 0).toNumber();
            }
            return message;
        };

        /**
         * Creates a plain object from a SlotUpdateJackpot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.SlotUpdateJackpot
         * @static
         * @param {gameRoom.SlotUpdateJackpot} message SlotUpdateJackpot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SlotUpdateJackpot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ChangeJackpots = [];
            if (options.defaults)
                object.GameID = 0;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.ChangeJackpots && message.ChangeJackpots.length) {
                object.ChangeJackpots = [];
                for (var j = 0; j < message.ChangeJackpots.length; ++j)
                    if (typeof message.ChangeJackpots[j] === "number")
                        object.ChangeJackpots[j] = options.longs === String ? String(message.ChangeJackpots[j]) : message.ChangeJackpots[j];
                    else
                        object.ChangeJackpots[j] = options.longs === String ? $util.Long.prototype.toString.call(message.ChangeJackpots[j]) : options.longs === Number ? new $util.LongBits(message.ChangeJackpots[j].low >>> 0, message.ChangeJackpots[j].high >>> 0).toNumber() : message.ChangeJackpots[j];
            }
            return object;
        };

        /**
         * Converts this SlotUpdateJackpot to JSON.
         * @function toJSON
         * @memberof gameRoom.SlotUpdateJackpot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SlotUpdateJackpot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SlotUpdateJackpot;
    })();

    gameRoom.SlotGetJackpotGroup = (function() {

        /**
         * Properties of a SlotGetJackpotGroup.
         * @memberof gameRoom
         * @interface ISlotGetJackpotGroup
         * @property {number} GameID SlotGetJackpotGroup GameID
         * @property {number} PoolCount SlotGetJackpotGroup PoolCount
         * @property {number} GroupID SlotGetJackpotGroup GroupID
         */

        /**
         * Constructs a new SlotGetJackpotGroup.
         * @memberof gameRoom
         * @classdesc Represents a SlotGetJackpotGroup.
         * @implements ISlotGetJackpotGroup
         * @constructor
         * @param {gameRoom.ISlotGetJackpotGroup=} [properties] Properties to set
         */
        function SlotGetJackpotGroup(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SlotGetJackpotGroup GameID.
         * @member {number} GameID
         * @memberof gameRoom.SlotGetJackpotGroup
         * @instance
         */
        SlotGetJackpotGroup.prototype.GameID = 0;

        /**
         * SlotGetJackpotGroup PoolCount.
         * @member {number} PoolCount
         * @memberof gameRoom.SlotGetJackpotGroup
         * @instance
         */
        SlotGetJackpotGroup.prototype.PoolCount = 0;

        /**
         * SlotGetJackpotGroup GroupID.
         * @member {number} GroupID
         * @memberof gameRoom.SlotGetJackpotGroup
         * @instance
         */
        SlotGetJackpotGroup.prototype.GroupID = 0;

        /**
         * Creates a new SlotGetJackpotGroup instance using the specified properties.
         * @function create
         * @memberof gameRoom.SlotGetJackpotGroup
         * @static
         * @param {gameRoom.ISlotGetJackpotGroup=} [properties] Properties to set
         * @returns {gameRoom.SlotGetJackpotGroup} SlotGetJackpotGroup instance
         */
        SlotGetJackpotGroup.create = function create(properties) {
            return new SlotGetJackpotGroup(properties);
        };

        /**
         * Encodes the specified SlotGetJackpotGroup message. Does not implicitly {@link gameRoom.SlotGetJackpotGroup.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.SlotGetJackpotGroup
         * @static
         * @param {gameRoom.ISlotGetJackpotGroup} message SlotGetJackpotGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlotGetJackpotGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.PoolCount);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.GroupID);
            return writer;
        };

        /**
         * Encodes the specified SlotGetJackpotGroup message, length delimited. Does not implicitly {@link gameRoom.SlotGetJackpotGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.SlotGetJackpotGroup
         * @static
         * @param {gameRoom.ISlotGetJackpotGroup} message SlotGetJackpotGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlotGetJackpotGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SlotGetJackpotGroup message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.SlotGetJackpotGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.SlotGetJackpotGroup} SlotGetJackpotGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlotGetJackpotGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.SlotGetJackpotGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    message.PoolCount = reader.int32();
                    break;
                case 3:
                    message.GroupID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance: message });
            if (!message.hasOwnProperty("PoolCount"))
                throw $util.ProtocolError("missing required 'PoolCount'", { instance: message });
            if (!message.hasOwnProperty("GroupID"))
                throw $util.ProtocolError("missing required 'GroupID'", { instance: message });
            return message;
        };

        /**
         * Decodes a SlotGetJackpotGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.SlotGetJackpotGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.SlotGetJackpotGroup} SlotGetJackpotGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlotGetJackpotGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SlotGetJackpotGroup message.
         * @function verify
         * @memberof gameRoom.SlotGetJackpotGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SlotGetJackpotGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (!$util.isInteger(message.PoolCount))
                return "PoolCount: integer expected";
            if (!$util.isInteger(message.GroupID))
                return "GroupID: integer expected";
            return null;
        };

        /**
         * Creates a SlotGetJackpotGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.SlotGetJackpotGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.SlotGetJackpotGroup} SlotGetJackpotGroup
         */
        SlotGetJackpotGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.SlotGetJackpotGroup)
                return object;
            var message = new $root.gameRoom.SlotGetJackpotGroup();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.PoolCount != null)
                message.PoolCount = object.PoolCount | 0;
            if (object.GroupID != null)
                message.GroupID = object.GroupID | 0;
            return message;
        };

        /**
         * Creates a plain object from a SlotGetJackpotGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.SlotGetJackpotGroup
         * @static
         * @param {gameRoom.SlotGetJackpotGroup} message SlotGetJackpotGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SlotGetJackpotGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameID = 0;
                object.PoolCount = 0;
                object.GroupID = 0;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.PoolCount != null && message.hasOwnProperty("PoolCount"))
                object.PoolCount = message.PoolCount;
            if (message.GroupID != null && message.hasOwnProperty("GroupID"))
                object.GroupID = message.GroupID;
            return object;
        };

        /**
         * Converts this SlotGetJackpotGroup to JSON.
         * @function toJSON
         * @memberof gameRoom.SlotGetJackpotGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SlotGetJackpotGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SlotGetJackpotGroup;
    })();

    gameRoom.SlotGetJackpotGroupRet = (function() {

        /**
         * Properties of a SlotGetJackpotGroupRet.
         * @memberof gameRoom
         * @interface ISlotGetJackpotGroupRet
         * @property {number} GameID SlotGetJackpotGroupRet GameID
         * @property {Array.<number|Long>|null} [Jackpots] SlotGetJackpotGroupRet Jackpots
         * @property {number} GroupID SlotGetJackpotGroupRet GroupID
         */

        /**
         * Constructs a new SlotGetJackpotGroupRet.
         * @memberof gameRoom
         * @classdesc Represents a SlotGetJackpotGroupRet.
         * @implements ISlotGetJackpotGroupRet
         * @constructor
         * @param {gameRoom.ISlotGetJackpotGroupRet=} [properties] Properties to set
         */
        function SlotGetJackpotGroupRet(properties) {
            this.Jackpots = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SlotGetJackpotGroupRet GameID.
         * @member {number} GameID
         * @memberof gameRoom.SlotGetJackpotGroupRet
         * @instance
         */
        SlotGetJackpotGroupRet.prototype.GameID = 0;

        /**
         * SlotGetJackpotGroupRet Jackpots.
         * @member {Array.<number|Long>} Jackpots
         * @memberof gameRoom.SlotGetJackpotGroupRet
         * @instance
         */
        SlotGetJackpotGroupRet.prototype.Jackpots = $util.emptyArray;

        /**
         * SlotGetJackpotGroupRet GroupID.
         * @member {number} GroupID
         * @memberof gameRoom.SlotGetJackpotGroupRet
         * @instance
         */
        SlotGetJackpotGroupRet.prototype.GroupID = 0;

        /**
         * Creates a new SlotGetJackpotGroupRet instance using the specified properties.
         * @function create
         * @memberof gameRoom.SlotGetJackpotGroupRet
         * @static
         * @param {gameRoom.ISlotGetJackpotGroupRet=} [properties] Properties to set
         * @returns {gameRoom.SlotGetJackpotGroupRet} SlotGetJackpotGroupRet instance
         */
        SlotGetJackpotGroupRet.create = function create(properties) {
            return new SlotGetJackpotGroupRet(properties);
        };

        /**
         * Encodes the specified SlotGetJackpotGroupRet message. Does not implicitly {@link gameRoom.SlotGetJackpotGroupRet.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.SlotGetJackpotGroupRet
         * @static
         * @param {gameRoom.ISlotGetJackpotGroupRet} message SlotGetJackpotGroupRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlotGetJackpotGroupRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            if (message.Jackpots != null && message.Jackpots.length)
                for (var i = 0; i < message.Jackpots.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Jackpots[i]);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.GroupID);
            return writer;
        };

        /**
         * Encodes the specified SlotGetJackpotGroupRet message, length delimited. Does not implicitly {@link gameRoom.SlotGetJackpotGroupRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.SlotGetJackpotGroupRet
         * @static
         * @param {gameRoom.ISlotGetJackpotGroupRet} message SlotGetJackpotGroupRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlotGetJackpotGroupRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SlotGetJackpotGroupRet message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.SlotGetJackpotGroupRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.SlotGetJackpotGroupRet} SlotGetJackpotGroupRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlotGetJackpotGroupRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.SlotGetJackpotGroupRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    if (!(message.Jackpots && message.Jackpots.length))
                        message.Jackpots = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Jackpots.push(reader.int64());
                    } else
                        message.Jackpots.push(reader.int64());
                    break;
                case 3:
                    message.GroupID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance: message });
            if (!message.hasOwnProperty("GroupID"))
                throw $util.ProtocolError("missing required 'GroupID'", { instance: message });
            return message;
        };

        /**
         * Decodes a SlotGetJackpotGroupRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.SlotGetJackpotGroupRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.SlotGetJackpotGroupRet} SlotGetJackpotGroupRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlotGetJackpotGroupRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SlotGetJackpotGroupRet message.
         * @function verify
         * @memberof gameRoom.SlotGetJackpotGroupRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SlotGetJackpotGroupRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (message.Jackpots != null && message.hasOwnProperty("Jackpots")) {
                if (!Array.isArray(message.Jackpots))
                    return "Jackpots: array expected";
                for (var i = 0; i < message.Jackpots.length; ++i)
                    if (!$util.isInteger(message.Jackpots[i]) && !(message.Jackpots[i] && $util.isInteger(message.Jackpots[i].low) && $util.isInteger(message.Jackpots[i].high)))
                        return "Jackpots: integer|Long[] expected";
            }
            if (!$util.isInteger(message.GroupID))
                return "GroupID: integer expected";
            return null;
        };

        /**
         * Creates a SlotGetJackpotGroupRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.SlotGetJackpotGroupRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.SlotGetJackpotGroupRet} SlotGetJackpotGroupRet
         */
        SlotGetJackpotGroupRet.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.SlotGetJackpotGroupRet)
                return object;
            var message = new $root.gameRoom.SlotGetJackpotGroupRet();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.Jackpots) {
                if (!Array.isArray(object.Jackpots))
                    throw TypeError(".gameRoom.SlotGetJackpotGroupRet.Jackpots: array expected");
                message.Jackpots = [];
                for (var i = 0; i < object.Jackpots.length; ++i)
                    if ($util.Long)
                        (message.Jackpots[i] = $util.Long.fromValue(object.Jackpots[i])).unsigned = false;
                    else if (typeof object.Jackpots[i] === "string")
                        message.Jackpots[i] = parseInt(object.Jackpots[i], 10);
                    else if (typeof object.Jackpots[i] === "number")
                        message.Jackpots[i] = object.Jackpots[i];
                    else if (typeof object.Jackpots[i] === "object")
                        message.Jackpots[i] = new $util.LongBits(object.Jackpots[i].low >>> 0, object.Jackpots[i].high >>> 0).toNumber();
            }
            if (object.GroupID != null)
                message.GroupID = object.GroupID | 0;
            return message;
        };

        /**
         * Creates a plain object from a SlotGetJackpotGroupRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.SlotGetJackpotGroupRet
         * @static
         * @param {gameRoom.SlotGetJackpotGroupRet} message SlotGetJackpotGroupRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SlotGetJackpotGroupRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Jackpots = [];
            if (options.defaults) {
                object.GameID = 0;
                object.GroupID = 0;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.Jackpots && message.Jackpots.length) {
                object.Jackpots = [];
                for (var j = 0; j < message.Jackpots.length; ++j)
                    if (typeof message.Jackpots[j] === "number")
                        object.Jackpots[j] = options.longs === String ? String(message.Jackpots[j]) : message.Jackpots[j];
                    else
                        object.Jackpots[j] = options.longs === String ? $util.Long.prototype.toString.call(message.Jackpots[j]) : options.longs === Number ? new $util.LongBits(message.Jackpots[j].low >>> 0, message.Jackpots[j].high >>> 0).toNumber() : message.Jackpots[j];
            }
            if (message.GroupID != null && message.hasOwnProperty("GroupID"))
                object.GroupID = message.GroupID;
            return object;
        };

        /**
         * Converts this SlotGetJackpotGroupRet to JSON.
         * @function toJSON
         * @memberof gameRoom.SlotGetJackpotGroupRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SlotGetJackpotGroupRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SlotGetJackpotGroupRet;
    })();

    gameRoom.SlotUpdateJackpotGroup = (function() {

        /**
         * Properties of a SlotUpdateJackpotGroup.
         * @memberof gameRoom
         * @interface ISlotUpdateJackpotGroup
         * @property {number} GameID SlotUpdateJackpotGroup GameID
         * @property {Array.<number|Long>|null} [ChangeJackpots] SlotUpdateJackpotGroup ChangeJackpots
         * @property {number} GroupID SlotUpdateJackpotGroup GroupID
         */

        /**
         * Constructs a new SlotUpdateJackpotGroup.
         * @memberof gameRoom
         * @classdesc Represents a SlotUpdateJackpotGroup.
         * @implements ISlotUpdateJackpotGroup
         * @constructor
         * @param {gameRoom.ISlotUpdateJackpotGroup=} [properties] Properties to set
         */
        function SlotUpdateJackpotGroup(properties) {
            this.ChangeJackpots = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SlotUpdateJackpotGroup GameID.
         * @member {number} GameID
         * @memberof gameRoom.SlotUpdateJackpotGroup
         * @instance
         */
        SlotUpdateJackpotGroup.prototype.GameID = 0;

        /**
         * SlotUpdateJackpotGroup ChangeJackpots.
         * @member {Array.<number|Long>} ChangeJackpots
         * @memberof gameRoom.SlotUpdateJackpotGroup
         * @instance
         */
        SlotUpdateJackpotGroup.prototype.ChangeJackpots = $util.emptyArray;

        /**
         * SlotUpdateJackpotGroup GroupID.
         * @member {number} GroupID
         * @memberof gameRoom.SlotUpdateJackpotGroup
         * @instance
         */
        SlotUpdateJackpotGroup.prototype.GroupID = 0;

        /**
         * Creates a new SlotUpdateJackpotGroup instance using the specified properties.
         * @function create
         * @memberof gameRoom.SlotUpdateJackpotGroup
         * @static
         * @param {gameRoom.ISlotUpdateJackpotGroup=} [properties] Properties to set
         * @returns {gameRoom.SlotUpdateJackpotGroup} SlotUpdateJackpotGroup instance
         */
        SlotUpdateJackpotGroup.create = function create(properties) {
            return new SlotUpdateJackpotGroup(properties);
        };

        /**
         * Encodes the specified SlotUpdateJackpotGroup message. Does not implicitly {@link gameRoom.SlotUpdateJackpotGroup.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.SlotUpdateJackpotGroup
         * @static
         * @param {gameRoom.ISlotUpdateJackpotGroup} message SlotUpdateJackpotGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlotUpdateJackpotGroup.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            if (message.ChangeJackpots != null && message.ChangeJackpots.length)
                for (var i = 0; i < message.ChangeJackpots.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.ChangeJackpots[i]);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.GroupID);
            return writer;
        };

        /**
         * Encodes the specified SlotUpdateJackpotGroup message, length delimited. Does not implicitly {@link gameRoom.SlotUpdateJackpotGroup.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.SlotUpdateJackpotGroup
         * @static
         * @param {gameRoom.ISlotUpdateJackpotGroup} message SlotUpdateJackpotGroup message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlotUpdateJackpotGroup.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SlotUpdateJackpotGroup message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.SlotUpdateJackpotGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.SlotUpdateJackpotGroup} SlotUpdateJackpotGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlotUpdateJackpotGroup.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.SlotUpdateJackpotGroup();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    if (!(message.ChangeJackpots && message.ChangeJackpots.length))
                        message.ChangeJackpots = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.ChangeJackpots.push(reader.int64());
                    } else
                        message.ChangeJackpots.push(reader.int64());
                    break;
                case 3:
                    message.GroupID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance: message });
            if (!message.hasOwnProperty("GroupID"))
                throw $util.ProtocolError("missing required 'GroupID'", { instance: message });
            return message;
        };

        /**
         * Decodes a SlotUpdateJackpotGroup message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.SlotUpdateJackpotGroup
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.SlotUpdateJackpotGroup} SlotUpdateJackpotGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlotUpdateJackpotGroup.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SlotUpdateJackpotGroup message.
         * @function verify
         * @memberof gameRoom.SlotUpdateJackpotGroup
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SlotUpdateJackpotGroup.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (message.ChangeJackpots != null && message.hasOwnProperty("ChangeJackpots")) {
                if (!Array.isArray(message.ChangeJackpots))
                    return "ChangeJackpots: array expected";
                for (var i = 0; i < message.ChangeJackpots.length; ++i)
                    if (!$util.isInteger(message.ChangeJackpots[i]) && !(message.ChangeJackpots[i] && $util.isInteger(message.ChangeJackpots[i].low) && $util.isInteger(message.ChangeJackpots[i].high)))
                        return "ChangeJackpots: integer|Long[] expected";
            }
            if (!$util.isInteger(message.GroupID))
                return "GroupID: integer expected";
            return null;
        };

        /**
         * Creates a SlotUpdateJackpotGroup message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.SlotUpdateJackpotGroup
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.SlotUpdateJackpotGroup} SlotUpdateJackpotGroup
         */
        SlotUpdateJackpotGroup.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.SlotUpdateJackpotGroup)
                return object;
            var message = new $root.gameRoom.SlotUpdateJackpotGroup();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.ChangeJackpots) {
                if (!Array.isArray(object.ChangeJackpots))
                    throw TypeError(".gameRoom.SlotUpdateJackpotGroup.ChangeJackpots: array expected");
                message.ChangeJackpots = [];
                for (var i = 0; i < object.ChangeJackpots.length; ++i)
                    if ($util.Long)
                        (message.ChangeJackpots[i] = $util.Long.fromValue(object.ChangeJackpots[i])).unsigned = false;
                    else if (typeof object.ChangeJackpots[i] === "string")
                        message.ChangeJackpots[i] = parseInt(object.ChangeJackpots[i], 10);
                    else if (typeof object.ChangeJackpots[i] === "number")
                        message.ChangeJackpots[i] = object.ChangeJackpots[i];
                    else if (typeof object.ChangeJackpots[i] === "object")
                        message.ChangeJackpots[i] = new $util.LongBits(object.ChangeJackpots[i].low >>> 0, object.ChangeJackpots[i].high >>> 0).toNumber();
            }
            if (object.GroupID != null)
                message.GroupID = object.GroupID | 0;
            return message;
        };

        /**
         * Creates a plain object from a SlotUpdateJackpotGroup message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.SlotUpdateJackpotGroup
         * @static
         * @param {gameRoom.SlotUpdateJackpotGroup} message SlotUpdateJackpotGroup
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SlotUpdateJackpotGroup.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ChangeJackpots = [];
            if (options.defaults) {
                object.GameID = 0;
                object.GroupID = 0;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.ChangeJackpots && message.ChangeJackpots.length) {
                object.ChangeJackpots = [];
                for (var j = 0; j < message.ChangeJackpots.length; ++j)
                    if (typeof message.ChangeJackpots[j] === "number")
                        object.ChangeJackpots[j] = options.longs === String ? String(message.ChangeJackpots[j]) : message.ChangeJackpots[j];
                    else
                        object.ChangeJackpots[j] = options.longs === String ? $util.Long.prototype.toString.call(message.ChangeJackpots[j]) : options.longs === Number ? new $util.LongBits(message.ChangeJackpots[j].low >>> 0, message.ChangeJackpots[j].high >>> 0).toNumber() : message.ChangeJackpots[j];
            }
            if (message.GroupID != null && message.hasOwnProperty("GroupID"))
                object.GroupID = message.GroupID;
            return object;
        };

        /**
         * Converts this SlotUpdateJackpotGroup to JSON.
         * @function toJSON
         * @memberof gameRoom.SlotUpdateJackpotGroup
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SlotUpdateJackpotGroup.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SlotUpdateJackpotGroup;
    })();

    gameRoom.SendUserVipBrowReq = (function() {

        /**
         * Properties of a SendUserVipBrowReq.
         * @memberof gameRoom
         * @interface ISendUserVipBrowReq
         * @property {number} UserID SendUserVipBrowReq UserID
         * @property {number} BrowID SendUserVipBrowReq BrowID
         * @property {number} TUserID SendUserVipBrowReq TUserID
         */

        /**
         * Constructs a new SendUserVipBrowReq.
         * @memberof gameRoom
         * @classdesc Represents a SendUserVipBrowReq.
         * @implements ISendUserVipBrowReq
         * @constructor
         * @param {gameRoom.ISendUserVipBrowReq=} [properties] Properties to set
         */
        function SendUserVipBrowReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendUserVipBrowReq UserID.
         * @member {number} UserID
         * @memberof gameRoom.SendUserVipBrowReq
         * @instance
         */
        SendUserVipBrowReq.prototype.UserID = 0;

        /**
         * SendUserVipBrowReq BrowID.
         * @member {number} BrowID
         * @memberof gameRoom.SendUserVipBrowReq
         * @instance
         */
        SendUserVipBrowReq.prototype.BrowID = 0;

        /**
         * SendUserVipBrowReq TUserID.
         * @member {number} TUserID
         * @memberof gameRoom.SendUserVipBrowReq
         * @instance
         */
        SendUserVipBrowReq.prototype.TUserID = 0;

        /**
         * Creates a new SendUserVipBrowReq instance using the specified properties.
         * @function create
         * @memberof gameRoom.SendUserVipBrowReq
         * @static
         * @param {gameRoom.ISendUserVipBrowReq=} [properties] Properties to set
         * @returns {gameRoom.SendUserVipBrowReq} SendUserVipBrowReq instance
         */
        SendUserVipBrowReq.create = function create(properties) {
            return new SendUserVipBrowReq(properties);
        };

        /**
         * Encodes the specified SendUserVipBrowReq message. Does not implicitly {@link gameRoom.SendUserVipBrowReq.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.SendUserVipBrowReq
         * @static
         * @param {gameRoom.ISendUserVipBrowReq} message SendUserVipBrowReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserVipBrowReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.BrowID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TUserID);
            return writer;
        };

        /**
         * Encodes the specified SendUserVipBrowReq message, length delimited. Does not implicitly {@link gameRoom.SendUserVipBrowReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.SendUserVipBrowReq
         * @static
         * @param {gameRoom.ISendUserVipBrowReq} message SendUserVipBrowReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserVipBrowReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserVipBrowReq message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.SendUserVipBrowReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.SendUserVipBrowReq} SendUserVipBrowReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserVipBrowReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.SendUserVipBrowReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.BrowID = reader.int32();
                    break;
                case 3:
                    message.TUserID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("BrowID"))
                throw $util.ProtocolError("missing required 'BrowID'", { instance: message });
            if (!message.hasOwnProperty("TUserID"))
                throw $util.ProtocolError("missing required 'TUserID'", { instance: message });
            return message;
        };

        /**
         * Decodes a SendUserVipBrowReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.SendUserVipBrowReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.SendUserVipBrowReq} SendUserVipBrowReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserVipBrowReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendUserVipBrowReq message.
         * @function verify
         * @memberof gameRoom.SendUserVipBrowReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendUserVipBrowReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.BrowID))
                return "BrowID: integer expected";
            if (!$util.isInteger(message.TUserID))
                return "TUserID: integer expected";
            return null;
        };

        /**
         * Creates a SendUserVipBrowReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.SendUserVipBrowReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.SendUserVipBrowReq} SendUserVipBrowReq
         */
        SendUserVipBrowReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.SendUserVipBrowReq)
                return object;
            var message = new $root.gameRoom.SendUserVipBrowReq();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.BrowID != null)
                message.BrowID = object.BrowID | 0;
            if (object.TUserID != null)
                message.TUserID = object.TUserID | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendUserVipBrowReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.SendUserVipBrowReq
         * @static
         * @param {gameRoom.SendUserVipBrowReq} message SendUserVipBrowReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendUserVipBrowReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.BrowID = 0;
                object.TUserID = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.BrowID != null && message.hasOwnProperty("BrowID"))
                object.BrowID = message.BrowID;
            if (message.TUserID != null && message.hasOwnProperty("TUserID"))
                object.TUserID = message.TUserID;
            return object;
        };

        /**
         * Converts this SendUserVipBrowReq to JSON.
         * @function toJSON
         * @memberof gameRoom.SendUserVipBrowReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserVipBrowReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserVipBrowReq;
    })();

    gameRoom.SendUserVipBrowRet = (function() {

        /**
         * Properties of a SendUserVipBrowRet.
         * @memberof gameRoom
         * @interface ISendUserVipBrowRet
         * @property {number} UserID SendUserVipBrowRet UserID
         * @property {number} BrowID SendUserVipBrowRet BrowID
         * @property {number} ErrCode SendUserVipBrowRet ErrCode
         * @property {number} TUserID SendUserVipBrowRet TUserID
         */

        /**
         * Constructs a new SendUserVipBrowRet.
         * @memberof gameRoom
         * @classdesc Represents a SendUserVipBrowRet.
         * @implements ISendUserVipBrowRet
         * @constructor
         * @param {gameRoom.ISendUserVipBrowRet=} [properties] Properties to set
         */
        function SendUserVipBrowRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SendUserVipBrowRet UserID.
         * @member {number} UserID
         * @memberof gameRoom.SendUserVipBrowRet
         * @instance
         */
        SendUserVipBrowRet.prototype.UserID = 0;

        /**
         * SendUserVipBrowRet BrowID.
         * @member {number} BrowID
         * @memberof gameRoom.SendUserVipBrowRet
         * @instance
         */
        SendUserVipBrowRet.prototype.BrowID = 0;

        /**
         * SendUserVipBrowRet ErrCode.
         * @member {number} ErrCode
         * @memberof gameRoom.SendUserVipBrowRet
         * @instance
         */
        SendUserVipBrowRet.prototype.ErrCode = 0;

        /**
         * SendUserVipBrowRet TUserID.
         * @member {number} TUserID
         * @memberof gameRoom.SendUserVipBrowRet
         * @instance
         */
        SendUserVipBrowRet.prototype.TUserID = 0;

        /**
         * Creates a new SendUserVipBrowRet instance using the specified properties.
         * @function create
         * @memberof gameRoom.SendUserVipBrowRet
         * @static
         * @param {gameRoom.ISendUserVipBrowRet=} [properties] Properties to set
         * @returns {gameRoom.SendUserVipBrowRet} SendUserVipBrowRet instance
         */
        SendUserVipBrowRet.create = function create(properties) {
            return new SendUserVipBrowRet(properties);
        };

        /**
         * Encodes the specified SendUserVipBrowRet message. Does not implicitly {@link gameRoom.SendUserVipBrowRet.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.SendUserVipBrowRet
         * @static
         * @param {gameRoom.ISendUserVipBrowRet} message SendUserVipBrowRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserVipBrowRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.BrowID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ErrCode);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.TUserID);
            return writer;
        };

        /**
         * Encodes the specified SendUserVipBrowRet message, length delimited. Does not implicitly {@link gameRoom.SendUserVipBrowRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.SendUserVipBrowRet
         * @static
         * @param {gameRoom.ISendUserVipBrowRet} message SendUserVipBrowRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SendUserVipBrowRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SendUserVipBrowRet message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.SendUserVipBrowRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.SendUserVipBrowRet} SendUserVipBrowRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserVipBrowRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.SendUserVipBrowRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.BrowID = reader.int32();
                    break;
                case 3:
                    message.ErrCode = reader.int32();
                    break;
                case 4:
                    message.TUserID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("BrowID"))
                throw $util.ProtocolError("missing required 'BrowID'", { instance: message });
            if (!message.hasOwnProperty("ErrCode"))
                throw $util.ProtocolError("missing required 'ErrCode'", { instance: message });
            if (!message.hasOwnProperty("TUserID"))
                throw $util.ProtocolError("missing required 'TUserID'", { instance: message });
            return message;
        };

        /**
         * Decodes a SendUserVipBrowRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.SendUserVipBrowRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.SendUserVipBrowRet} SendUserVipBrowRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SendUserVipBrowRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SendUserVipBrowRet message.
         * @function verify
         * @memberof gameRoom.SendUserVipBrowRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SendUserVipBrowRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.BrowID))
                return "BrowID: integer expected";
            if (!$util.isInteger(message.ErrCode))
                return "ErrCode: integer expected";
            if (!$util.isInteger(message.TUserID))
                return "TUserID: integer expected";
            return null;
        };

        /**
         * Creates a SendUserVipBrowRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.SendUserVipBrowRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.SendUserVipBrowRet} SendUserVipBrowRet
         */
        SendUserVipBrowRet.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.SendUserVipBrowRet)
                return object;
            var message = new $root.gameRoom.SendUserVipBrowRet();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.BrowID != null)
                message.BrowID = object.BrowID | 0;
            if (object.ErrCode != null)
                message.ErrCode = object.ErrCode | 0;
            if (object.TUserID != null)
                message.TUserID = object.TUserID | 0;
            return message;
        };

        /**
         * Creates a plain object from a SendUserVipBrowRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.SendUserVipBrowRet
         * @static
         * @param {gameRoom.SendUserVipBrowRet} message SendUserVipBrowRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SendUserVipBrowRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.BrowID = 0;
                object.ErrCode = 0;
                object.TUserID = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.BrowID != null && message.hasOwnProperty("BrowID"))
                object.BrowID = message.BrowID;
            if (message.ErrCode != null && message.hasOwnProperty("ErrCode"))
                object.ErrCode = message.ErrCode;
            if (message.TUserID != null && message.hasOwnProperty("TUserID"))
                object.TUserID = message.TUserID;
            return object;
        };

        /**
         * Converts this SendUserVipBrowRet to JSON.
         * @function toJSON
         * @memberof gameRoom.SendUserVipBrowRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SendUserVipBrowRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SendUserVipBrowRet;
    })();

    gameRoom.BroadcastUserVipBrow = (function() {

        /**
         * Properties of a BroadcastUserVipBrow.
         * @memberof gameRoom
         * @interface IBroadcastUserVipBrow
         * @property {number} UserID BroadcastUserVipBrow UserID
         * @property {number} BrowID BroadcastUserVipBrow BrowID
         * @property {number} TUserID BroadcastUserVipBrow TUserID
         */

        /**
         * Constructs a new BroadcastUserVipBrow.
         * @memberof gameRoom
         * @classdesc Represents a BroadcastUserVipBrow.
         * @implements IBroadcastUserVipBrow
         * @constructor
         * @param {gameRoom.IBroadcastUserVipBrow=} [properties] Properties to set
         */
        function BroadcastUserVipBrow(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BroadcastUserVipBrow UserID.
         * @member {number} UserID
         * @memberof gameRoom.BroadcastUserVipBrow
         * @instance
         */
        BroadcastUserVipBrow.prototype.UserID = 0;

        /**
         * BroadcastUserVipBrow BrowID.
         * @member {number} BrowID
         * @memberof gameRoom.BroadcastUserVipBrow
         * @instance
         */
        BroadcastUserVipBrow.prototype.BrowID = 0;

        /**
         * BroadcastUserVipBrow TUserID.
         * @member {number} TUserID
         * @memberof gameRoom.BroadcastUserVipBrow
         * @instance
         */
        BroadcastUserVipBrow.prototype.TUserID = 0;

        /**
         * Creates a new BroadcastUserVipBrow instance using the specified properties.
         * @function create
         * @memberof gameRoom.BroadcastUserVipBrow
         * @static
         * @param {gameRoom.IBroadcastUserVipBrow=} [properties] Properties to set
         * @returns {gameRoom.BroadcastUserVipBrow} BroadcastUserVipBrow instance
         */
        BroadcastUserVipBrow.create = function create(properties) {
            return new BroadcastUserVipBrow(properties);
        };

        /**
         * Encodes the specified BroadcastUserVipBrow message. Does not implicitly {@link gameRoom.BroadcastUserVipBrow.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.BroadcastUserVipBrow
         * @static
         * @param {gameRoom.IBroadcastUserVipBrow} message BroadcastUserVipBrow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastUserVipBrow.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.BrowID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.TUserID);
            return writer;
        };

        /**
         * Encodes the specified BroadcastUserVipBrow message, length delimited. Does not implicitly {@link gameRoom.BroadcastUserVipBrow.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.BroadcastUserVipBrow
         * @static
         * @param {gameRoom.IBroadcastUserVipBrow} message BroadcastUserVipBrow message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BroadcastUserVipBrow.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BroadcastUserVipBrow message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.BroadcastUserVipBrow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.BroadcastUserVipBrow} BroadcastUserVipBrow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastUserVipBrow.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.BroadcastUserVipBrow();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.BrowID = reader.int32();
                    break;
                case 3:
                    message.TUserID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("BrowID"))
                throw $util.ProtocolError("missing required 'BrowID'", { instance: message });
            if (!message.hasOwnProperty("TUserID"))
                throw $util.ProtocolError("missing required 'TUserID'", { instance: message });
            return message;
        };

        /**
         * Decodes a BroadcastUserVipBrow message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.BroadcastUserVipBrow
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.BroadcastUserVipBrow} BroadcastUserVipBrow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BroadcastUserVipBrow.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BroadcastUserVipBrow message.
         * @function verify
         * @memberof gameRoom.BroadcastUserVipBrow
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BroadcastUserVipBrow.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.BrowID))
                return "BrowID: integer expected";
            if (!$util.isInteger(message.TUserID))
                return "TUserID: integer expected";
            return null;
        };

        /**
         * Creates a BroadcastUserVipBrow message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.BroadcastUserVipBrow
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.BroadcastUserVipBrow} BroadcastUserVipBrow
         */
        BroadcastUserVipBrow.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.BroadcastUserVipBrow)
                return object;
            var message = new $root.gameRoom.BroadcastUserVipBrow();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.BrowID != null)
                message.BrowID = object.BrowID | 0;
            if (object.TUserID != null)
                message.TUserID = object.TUserID | 0;
            return message;
        };

        /**
         * Creates a plain object from a BroadcastUserVipBrow message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.BroadcastUserVipBrow
         * @static
         * @param {gameRoom.BroadcastUserVipBrow} message BroadcastUserVipBrow
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BroadcastUserVipBrow.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.BrowID = 0;
                object.TUserID = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.BrowID != null && message.hasOwnProperty("BrowID"))
                object.BrowID = message.BrowID;
            if (message.TUserID != null && message.hasOwnProperty("TUserID"))
                object.TUserID = message.TUserID;
            return object;
        };

        /**
         * Converts this BroadcastUserVipBrow to JSON.
         * @function toJSON
         * @memberof gameRoom.BroadcastUserVipBrow
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BroadcastUserVipBrow.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BroadcastUserVipBrow;
    })();

    gameRoom.AddUserTaskGameEventReq = (function() {

        /**
         * Properties of an AddUserTaskGameEventReq.
         * @memberof gameRoom
         * @interface IAddUserTaskGameEventReq
         * @property {number} UserID AddUserTaskGameEventReq UserID
         * @property {number} GameID AddUserTaskGameEventReq GameID
         * @property {number} GameType AddUserTaskGameEventReq GameType
         * @property {number} EventID AddUserTaskGameEventReq EventID
         * @property {number} AddValue AddUserTaskGameEventReq AddValue
         */

        /**
         * Constructs a new AddUserTaskGameEventReq.
         * @memberof gameRoom
         * @classdesc Represents an AddUserTaskGameEventReq.
         * @implements IAddUserTaskGameEventReq
         * @constructor
         * @param {gameRoom.IAddUserTaskGameEventReq=} [properties] Properties to set
         */
        function AddUserTaskGameEventReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AddUserTaskGameEventReq UserID.
         * @member {number} UserID
         * @memberof gameRoom.AddUserTaskGameEventReq
         * @instance
         */
        AddUserTaskGameEventReq.prototype.UserID = 0;

        /**
         * AddUserTaskGameEventReq GameID.
         * @member {number} GameID
         * @memberof gameRoom.AddUserTaskGameEventReq
         * @instance
         */
        AddUserTaskGameEventReq.prototype.GameID = 0;

        /**
         * AddUserTaskGameEventReq GameType.
         * @member {number} GameType
         * @memberof gameRoom.AddUserTaskGameEventReq
         * @instance
         */
        AddUserTaskGameEventReq.prototype.GameType = 0;

        /**
         * AddUserTaskGameEventReq EventID.
         * @member {number} EventID
         * @memberof gameRoom.AddUserTaskGameEventReq
         * @instance
         */
        AddUserTaskGameEventReq.prototype.EventID = 0;

        /**
         * AddUserTaskGameEventReq AddValue.
         * @member {number} AddValue
         * @memberof gameRoom.AddUserTaskGameEventReq
         * @instance
         */
        AddUserTaskGameEventReq.prototype.AddValue = 0;

        /**
         * Creates a new AddUserTaskGameEventReq instance using the specified properties.
         * @function create
         * @memberof gameRoom.AddUserTaskGameEventReq
         * @static
         * @param {gameRoom.IAddUserTaskGameEventReq=} [properties] Properties to set
         * @returns {gameRoom.AddUserTaskGameEventReq} AddUserTaskGameEventReq instance
         */
        AddUserTaskGameEventReq.create = function create(properties) {
            return new AddUserTaskGameEventReq(properties);
        };

        /**
         * Encodes the specified AddUserTaskGameEventReq message. Does not implicitly {@link gameRoom.AddUserTaskGameEventReq.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.AddUserTaskGameEventReq
         * @static
         * @param {gameRoom.IAddUserTaskGameEventReq} message AddUserTaskGameEventReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddUserTaskGameEventReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GameID);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.GameType);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.EventID);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.AddValue);
            return writer;
        };

        /**
         * Encodes the specified AddUserTaskGameEventReq message, length delimited. Does not implicitly {@link gameRoom.AddUserTaskGameEventReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.AddUserTaskGameEventReq
         * @static
         * @param {gameRoom.IAddUserTaskGameEventReq} message AddUserTaskGameEventReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AddUserTaskGameEventReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AddUserTaskGameEventReq message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.AddUserTaskGameEventReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.AddUserTaskGameEventReq} AddUserTaskGameEventReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddUserTaskGameEventReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.AddUserTaskGameEventReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.GameID = reader.int32();
                    break;
                case 3:
                    message.GameType = reader.int32();
                    break;
                case 4:
                    message.EventID = reader.int32();
                    break;
                case 5:
                    message.AddValue = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance: message });
            if (!message.hasOwnProperty("GameType"))
                throw $util.ProtocolError("missing required 'GameType'", { instance: message });
            if (!message.hasOwnProperty("EventID"))
                throw $util.ProtocolError("missing required 'EventID'", { instance: message });
            if (!message.hasOwnProperty("AddValue"))
                throw $util.ProtocolError("missing required 'AddValue'", { instance: message });
            return message;
        };

        /**
         * Decodes an AddUserTaskGameEventReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.AddUserTaskGameEventReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.AddUserTaskGameEventReq} AddUserTaskGameEventReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AddUserTaskGameEventReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AddUserTaskGameEventReq message.
         * @function verify
         * @memberof gameRoom.AddUserTaskGameEventReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AddUserTaskGameEventReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (!$util.isInteger(message.GameType))
                return "GameType: integer expected";
            if (!$util.isInteger(message.EventID))
                return "EventID: integer expected";
            if (!$util.isInteger(message.AddValue))
                return "AddValue: integer expected";
            return null;
        };

        /**
         * Creates an AddUserTaskGameEventReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.AddUserTaskGameEventReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.AddUserTaskGameEventReq} AddUserTaskGameEventReq
         */
        AddUserTaskGameEventReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.AddUserTaskGameEventReq)
                return object;
            var message = new $root.gameRoom.AddUserTaskGameEventReq();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.GameType != null)
                message.GameType = object.GameType | 0;
            if (object.EventID != null)
                message.EventID = object.EventID | 0;
            if (object.AddValue != null)
                message.AddValue = object.AddValue | 0;
            return message;
        };

        /**
         * Creates a plain object from an AddUserTaskGameEventReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.AddUserTaskGameEventReq
         * @static
         * @param {gameRoom.AddUserTaskGameEventReq} message AddUserTaskGameEventReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AddUserTaskGameEventReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.GameID = 0;
                object.GameType = 0;
                object.EventID = 0;
                object.AddValue = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.GameType != null && message.hasOwnProperty("GameType"))
                object.GameType = message.GameType;
            if (message.EventID != null && message.hasOwnProperty("EventID"))
                object.EventID = message.EventID;
            if (message.AddValue != null && message.hasOwnProperty("AddValue"))
                object.AddValue = message.AddValue;
            return object;
        };

        /**
         * Converts this AddUserTaskGameEventReq to JSON.
         * @function toJSON
         * @memberof gameRoom.AddUserTaskGameEventReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AddUserTaskGameEventReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AddUserTaskGameEventReq;
    })();

    gameRoom.UserSingleControlReq = (function() {

        /**
         * Properties of a UserSingleControlReq.
         * @memberof gameRoom
         * @interface IUserSingleControlReq
         * @property {number} UserID UserSingleControlReq UserID
         * @property {number} ServerID UserSingleControlReq ServerID
         */

        /**
         * Constructs a new UserSingleControlReq.
         * @memberof gameRoom
         * @classdesc Represents a UserSingleControlReq.
         * @implements IUserSingleControlReq
         * @constructor
         * @param {gameRoom.IUserSingleControlReq=} [properties] Properties to set
         */
        function UserSingleControlReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserSingleControlReq UserID.
         * @member {number} UserID
         * @memberof gameRoom.UserSingleControlReq
         * @instance
         */
        UserSingleControlReq.prototype.UserID = 0;

        /**
         * UserSingleControlReq ServerID.
         * @member {number} ServerID
         * @memberof gameRoom.UserSingleControlReq
         * @instance
         */
        UserSingleControlReq.prototype.ServerID = 0;

        /**
         * Creates a new UserSingleControlReq instance using the specified properties.
         * @function create
         * @memberof gameRoom.UserSingleControlReq
         * @static
         * @param {gameRoom.IUserSingleControlReq=} [properties] Properties to set
         * @returns {gameRoom.UserSingleControlReq} UserSingleControlReq instance
         */
        UserSingleControlReq.create = function create(properties) {
            return new UserSingleControlReq(properties);
        };

        /**
         * Encodes the specified UserSingleControlReq message. Does not implicitly {@link gameRoom.UserSingleControlReq.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.UserSingleControlReq
         * @static
         * @param {gameRoom.IUserSingleControlReq} message UserSingleControlReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSingleControlReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ServerID);
            return writer;
        };

        /**
         * Encodes the specified UserSingleControlReq message, length delimited. Does not implicitly {@link gameRoom.UserSingleControlReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.UserSingleControlReq
         * @static
         * @param {gameRoom.IUserSingleControlReq} message UserSingleControlReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSingleControlReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserSingleControlReq message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.UserSingleControlReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.UserSingleControlReq} UserSingleControlReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSingleControlReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.UserSingleControlReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.ServerID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("ServerID"))
                throw $util.ProtocolError("missing required 'ServerID'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserSingleControlReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.UserSingleControlReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.UserSingleControlReq} UserSingleControlReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSingleControlReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserSingleControlReq message.
         * @function verify
         * @memberof gameRoom.UserSingleControlReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserSingleControlReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.ServerID))
                return "ServerID: integer expected";
            return null;
        };

        /**
         * Creates a UserSingleControlReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.UserSingleControlReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.UserSingleControlReq} UserSingleControlReq
         */
        UserSingleControlReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.UserSingleControlReq)
                return object;
            var message = new $root.gameRoom.UserSingleControlReq();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.ServerID != null)
                message.ServerID = object.ServerID | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserSingleControlReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.UserSingleControlReq
         * @static
         * @param {gameRoom.UserSingleControlReq} message UserSingleControlReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserSingleControlReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.ServerID = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                object.ServerID = message.ServerID;
            return object;
        };

        /**
         * Converts this UserSingleControlReq to JSON.
         * @function toJSON
         * @memberof gameRoom.UserSingleControlReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserSingleControlReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserSingleControlReq;
    })();

    gameRoom.UserSingleControlRes = (function() {

        /**
         * Properties of a UserSingleControlRes.
         * @memberof gameRoom
         * @interface IUserSingleControlRes
         * @property {number} UserID UserSingleControlRes UserID
         * @property {number} ServerID UserSingleControlRes ServerID
         * @property {number|Long} GameWin UserSingleControlRes GameWin
         * @property {number|Long} ControlMoney UserSingleControlRes ControlMoney
         * @property {number} ControlLevel UserSingleControlRes ControlLevel
         */

        /**
         * Constructs a new UserSingleControlRes.
         * @memberof gameRoom
         * @classdesc Represents a UserSingleControlRes.
         * @implements IUserSingleControlRes
         * @constructor
         * @param {gameRoom.IUserSingleControlRes=} [properties] Properties to set
         */
        function UserSingleControlRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserSingleControlRes UserID.
         * @member {number} UserID
         * @memberof gameRoom.UserSingleControlRes
         * @instance
         */
        UserSingleControlRes.prototype.UserID = 0;

        /**
         * UserSingleControlRes ServerID.
         * @member {number} ServerID
         * @memberof gameRoom.UserSingleControlRes
         * @instance
         */
        UserSingleControlRes.prototype.ServerID = 0;

        /**
         * UserSingleControlRes GameWin.
         * @member {number|Long} GameWin
         * @memberof gameRoom.UserSingleControlRes
         * @instance
         */
        UserSingleControlRes.prototype.GameWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserSingleControlRes ControlMoney.
         * @member {number|Long} ControlMoney
         * @memberof gameRoom.UserSingleControlRes
         * @instance
         */
        UserSingleControlRes.prototype.ControlMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserSingleControlRes ControlLevel.
         * @member {number} ControlLevel
         * @memberof gameRoom.UserSingleControlRes
         * @instance
         */
        UserSingleControlRes.prototype.ControlLevel = 0;

        /**
         * Creates a new UserSingleControlRes instance using the specified properties.
         * @function create
         * @memberof gameRoom.UserSingleControlRes
         * @static
         * @param {gameRoom.IUserSingleControlRes=} [properties] Properties to set
         * @returns {gameRoom.UserSingleControlRes} UserSingleControlRes instance
         */
        UserSingleControlRes.create = function create(properties) {
            return new UserSingleControlRes(properties);
        };

        /**
         * Encodes the specified UserSingleControlRes message. Does not implicitly {@link gameRoom.UserSingleControlRes.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.UserSingleControlRes
         * @static
         * @param {gameRoom.IUserSingleControlRes} message UserSingleControlRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSingleControlRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ServerID);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.GameWin);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.ControlMoney);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.ControlLevel);
            return writer;
        };

        /**
         * Encodes the specified UserSingleControlRes message, length delimited. Does not implicitly {@link gameRoom.UserSingleControlRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.UserSingleControlRes
         * @static
         * @param {gameRoom.IUserSingleControlRes} message UserSingleControlRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserSingleControlRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserSingleControlRes message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.UserSingleControlRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.UserSingleControlRes} UserSingleControlRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSingleControlRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.UserSingleControlRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.ServerID = reader.int32();
                    break;
                case 3:
                    message.GameWin = reader.int64();
                    break;
                case 4:
                    message.ControlMoney = reader.int64();
                    break;
                case 5:
                    message.ControlLevel = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("ServerID"))
                throw $util.ProtocolError("missing required 'ServerID'", { instance: message });
            if (!message.hasOwnProperty("GameWin"))
                throw $util.ProtocolError("missing required 'GameWin'", { instance: message });
            if (!message.hasOwnProperty("ControlMoney"))
                throw $util.ProtocolError("missing required 'ControlMoney'", { instance: message });
            if (!message.hasOwnProperty("ControlLevel"))
                throw $util.ProtocolError("missing required 'ControlLevel'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserSingleControlRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.UserSingleControlRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.UserSingleControlRes} UserSingleControlRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserSingleControlRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserSingleControlRes message.
         * @function verify
         * @memberof gameRoom.UserSingleControlRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserSingleControlRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.ServerID))
                return "ServerID: integer expected";
            if (!$util.isInteger(message.GameWin) && !(message.GameWin && $util.isInteger(message.GameWin.low) && $util.isInteger(message.GameWin.high)))
                return "GameWin: integer|Long expected";
            if (!$util.isInteger(message.ControlMoney) && !(message.ControlMoney && $util.isInteger(message.ControlMoney.low) && $util.isInteger(message.ControlMoney.high)))
                return "ControlMoney: integer|Long expected";
            if (!$util.isInteger(message.ControlLevel))
                return "ControlLevel: integer expected";
            return null;
        };

        /**
         * Creates a UserSingleControlRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.UserSingleControlRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.UserSingleControlRes} UserSingleControlRes
         */
        UserSingleControlRes.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.UserSingleControlRes)
                return object;
            var message = new $root.gameRoom.UserSingleControlRes();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.ServerID != null)
                message.ServerID = object.ServerID | 0;
            if (object.GameWin != null)
                if ($util.Long)
                    (message.GameWin = $util.Long.fromValue(object.GameWin)).unsigned = false;
                else if (typeof object.GameWin === "string")
                    message.GameWin = parseInt(object.GameWin, 10);
                else if (typeof object.GameWin === "number")
                    message.GameWin = object.GameWin;
                else if (typeof object.GameWin === "object")
                    message.GameWin = new $util.LongBits(object.GameWin.low >>> 0, object.GameWin.high >>> 0).toNumber();
            if (object.ControlMoney != null)
                if ($util.Long)
                    (message.ControlMoney = $util.Long.fromValue(object.ControlMoney)).unsigned = false;
                else if (typeof object.ControlMoney === "string")
                    message.ControlMoney = parseInt(object.ControlMoney, 10);
                else if (typeof object.ControlMoney === "number")
                    message.ControlMoney = object.ControlMoney;
                else if (typeof object.ControlMoney === "object")
                    message.ControlMoney = new $util.LongBits(object.ControlMoney.low >>> 0, object.ControlMoney.high >>> 0).toNumber();
            if (object.ControlLevel != null)
                message.ControlLevel = object.ControlLevel | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserSingleControlRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.UserSingleControlRes
         * @static
         * @param {gameRoom.UserSingleControlRes} message UserSingleControlRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserSingleControlRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.ServerID = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.GameWin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.GameWin = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.ControlMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ControlMoney = options.longs === String ? "0" : 0;
                object.ControlLevel = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                object.ServerID = message.ServerID;
            if (message.GameWin != null && message.hasOwnProperty("GameWin"))
                if (typeof message.GameWin === "number")
                    object.GameWin = options.longs === String ? String(message.GameWin) : message.GameWin;
                else
                    object.GameWin = options.longs === String ? $util.Long.prototype.toString.call(message.GameWin) : options.longs === Number ? new $util.LongBits(message.GameWin.low >>> 0, message.GameWin.high >>> 0).toNumber() : message.GameWin;
            if (message.ControlMoney != null && message.hasOwnProperty("ControlMoney"))
                if (typeof message.ControlMoney === "number")
                    object.ControlMoney = options.longs === String ? String(message.ControlMoney) : message.ControlMoney;
                else
                    object.ControlMoney = options.longs === String ? $util.Long.prototype.toString.call(message.ControlMoney) : options.longs === Number ? new $util.LongBits(message.ControlMoney.low >>> 0, message.ControlMoney.high >>> 0).toNumber() : message.ControlMoney;
            if (message.ControlLevel != null && message.hasOwnProperty("ControlLevel"))
                object.ControlLevel = message.ControlLevel;
            return object;
        };

        /**
         * Converts this UserSingleControlRes to JSON.
         * @function toJSON
         * @memberof gameRoom.UserSingleControlRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserSingleControlRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserSingleControlRes;
    })();

    gameRoom.SlotGetUserControlReq = (function() {

        /**
         * Properties of a SlotGetUserControlReq.
         * @memberof gameRoom
         * @interface ISlotGetUserControlReq
         * @property {number} UserID SlotGetUserControlReq UserID
         */

        /**
         * Constructs a new SlotGetUserControlReq.
         * @memberof gameRoom
         * @classdesc Represents a SlotGetUserControlReq.
         * @implements ISlotGetUserControlReq
         * @constructor
         * @param {gameRoom.ISlotGetUserControlReq=} [properties] Properties to set
         */
        function SlotGetUserControlReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SlotGetUserControlReq UserID.
         * @member {number} UserID
         * @memberof gameRoom.SlotGetUserControlReq
         * @instance
         */
        SlotGetUserControlReq.prototype.UserID = 0;

        /**
         * Creates a new SlotGetUserControlReq instance using the specified properties.
         * @function create
         * @memberof gameRoom.SlotGetUserControlReq
         * @static
         * @param {gameRoom.ISlotGetUserControlReq=} [properties] Properties to set
         * @returns {gameRoom.SlotGetUserControlReq} SlotGetUserControlReq instance
         */
        SlotGetUserControlReq.create = function create(properties) {
            return new SlotGetUserControlReq(properties);
        };

        /**
         * Encodes the specified SlotGetUserControlReq message. Does not implicitly {@link gameRoom.SlotGetUserControlReq.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.SlotGetUserControlReq
         * @static
         * @param {gameRoom.ISlotGetUserControlReq} message SlotGetUserControlReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlotGetUserControlReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            return writer;
        };

        /**
         * Encodes the specified SlotGetUserControlReq message, length delimited. Does not implicitly {@link gameRoom.SlotGetUserControlReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.SlotGetUserControlReq
         * @static
         * @param {gameRoom.ISlotGetUserControlReq} message SlotGetUserControlReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlotGetUserControlReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SlotGetUserControlReq message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.SlotGetUserControlReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.SlotGetUserControlReq} SlotGetUserControlReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlotGetUserControlReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.SlotGetUserControlReq();
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
         * Decodes a SlotGetUserControlReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.SlotGetUserControlReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.SlotGetUserControlReq} SlotGetUserControlReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlotGetUserControlReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SlotGetUserControlReq message.
         * @function verify
         * @memberof gameRoom.SlotGetUserControlReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SlotGetUserControlReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            return null;
        };

        /**
         * Creates a SlotGetUserControlReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.SlotGetUserControlReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.SlotGetUserControlReq} SlotGetUserControlReq
         */
        SlotGetUserControlReq.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.SlotGetUserControlReq)
                return object;
            var message = new $root.gameRoom.SlotGetUserControlReq();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            return message;
        };

        /**
         * Creates a plain object from a SlotGetUserControlReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.SlotGetUserControlReq
         * @static
         * @param {gameRoom.SlotGetUserControlReq} message SlotGetUserControlReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SlotGetUserControlReq.toObject = function toObject(message, options) {
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
         * Converts this SlotGetUserControlReq to JSON.
         * @function toJSON
         * @memberof gameRoom.SlotGetUserControlReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SlotGetUserControlReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SlotGetUserControlReq;
    })();

    gameRoom.SlotGetUserControlRet = (function() {

        /**
         * Properties of a SlotGetUserControlRet.
         * @memberof gameRoom
         * @interface ISlotGetUserControlRet
         * @property {number} UserID SlotGetUserControlRet UserID
         * @property {number|null} [CtrlType] SlotGetUserControlRet CtrlType
         * @property {number|Long|null} [EndTimestamp] SlotGetUserControlRet EndTimestamp
         * @property {number|Long|null} [CtrlLoseMoney] SlotGetUserControlRet CtrlLoseMoney
         * @property {number|Long|null} [CtrlWinMoneyMin] SlotGetUserControlRet CtrlWinMoneyMin
         * @property {number|Long|null} [CtrlWinMoneyMax] SlotGetUserControlRet CtrlWinMoneyMax
         * @property {number|Long|null} [LoseWinMoney] SlotGetUserControlRet LoseWinMoney
         * @property {number|null} [KickoutFreeRate] SlotGetUserControlRet KickoutFreeRate
         * @property {number|null} [AddFreeRate] SlotGetUserControlRet AddFreeRate
         * @property {number|null} [MinRange] SlotGetUserControlRet MinRange
         * @property {number|null} [MaxRange] SlotGetUserControlRet MaxRange
         */

        /**
         * Constructs a new SlotGetUserControlRet.
         * @memberof gameRoom
         * @classdesc Represents a SlotGetUserControlRet.
         * @implements ISlotGetUserControlRet
         * @constructor
         * @param {gameRoom.ISlotGetUserControlRet=} [properties] Properties to set
         */
        function SlotGetUserControlRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SlotGetUserControlRet UserID.
         * @member {number} UserID
         * @memberof gameRoom.SlotGetUserControlRet
         * @instance
         */
        SlotGetUserControlRet.prototype.UserID = 0;

        /**
         * SlotGetUserControlRet CtrlType.
         * @member {number} CtrlType
         * @memberof gameRoom.SlotGetUserControlRet
         * @instance
         */
        SlotGetUserControlRet.prototype.CtrlType = 0;

        /**
         * SlotGetUserControlRet EndTimestamp.
         * @member {number|Long} EndTimestamp
         * @memberof gameRoom.SlotGetUserControlRet
         * @instance
         */
        SlotGetUserControlRet.prototype.EndTimestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SlotGetUserControlRet CtrlLoseMoney.
         * @member {number|Long} CtrlLoseMoney
         * @memberof gameRoom.SlotGetUserControlRet
         * @instance
         */
        SlotGetUserControlRet.prototype.CtrlLoseMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SlotGetUserControlRet CtrlWinMoneyMin.
         * @member {number|Long} CtrlWinMoneyMin
         * @memberof gameRoom.SlotGetUserControlRet
         * @instance
         */
        SlotGetUserControlRet.prototype.CtrlWinMoneyMin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SlotGetUserControlRet CtrlWinMoneyMax.
         * @member {number|Long} CtrlWinMoneyMax
         * @memberof gameRoom.SlotGetUserControlRet
         * @instance
         */
        SlotGetUserControlRet.prototype.CtrlWinMoneyMax = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SlotGetUserControlRet LoseWinMoney.
         * @member {number|Long} LoseWinMoney
         * @memberof gameRoom.SlotGetUserControlRet
         * @instance
         */
        SlotGetUserControlRet.prototype.LoseWinMoney = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * SlotGetUserControlRet KickoutFreeRate.
         * @member {number} KickoutFreeRate
         * @memberof gameRoom.SlotGetUserControlRet
         * @instance
         */
        SlotGetUserControlRet.prototype.KickoutFreeRate = 0;

        /**
         * SlotGetUserControlRet AddFreeRate.
         * @member {number} AddFreeRate
         * @memberof gameRoom.SlotGetUserControlRet
         * @instance
         */
        SlotGetUserControlRet.prototype.AddFreeRate = 0;

        /**
         * SlotGetUserControlRet MinRange.
         * @member {number} MinRange
         * @memberof gameRoom.SlotGetUserControlRet
         * @instance
         */
        SlotGetUserControlRet.prototype.MinRange = 0;

        /**
         * SlotGetUserControlRet MaxRange.
         * @member {number} MaxRange
         * @memberof gameRoom.SlotGetUserControlRet
         * @instance
         */
        SlotGetUserControlRet.prototype.MaxRange = 0;

        /**
         * Creates a new SlotGetUserControlRet instance using the specified properties.
         * @function create
         * @memberof gameRoom.SlotGetUserControlRet
         * @static
         * @param {gameRoom.ISlotGetUserControlRet=} [properties] Properties to set
         * @returns {gameRoom.SlotGetUserControlRet} SlotGetUserControlRet instance
         */
        SlotGetUserControlRet.create = function create(properties) {
            return new SlotGetUserControlRet(properties);
        };

        /**
         * Encodes the specified SlotGetUserControlRet message. Does not implicitly {@link gameRoom.SlotGetUserControlRet.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.SlotGetUserControlRet
         * @static
         * @param {gameRoom.ISlotGetUserControlRet} message SlotGetUserControlRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlotGetUserControlRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            if (message.CtrlType != null && Object.hasOwnProperty.call(message, "CtrlType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.CtrlType);
            if (message.EndTimestamp != null && Object.hasOwnProperty.call(message, "EndTimestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.EndTimestamp);
            if (message.CtrlLoseMoney != null && Object.hasOwnProperty.call(message, "CtrlLoseMoney"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.CtrlLoseMoney);
            if (message.CtrlWinMoneyMin != null && Object.hasOwnProperty.call(message, "CtrlWinMoneyMin"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.CtrlWinMoneyMin);
            if (message.CtrlWinMoneyMax != null && Object.hasOwnProperty.call(message, "CtrlWinMoneyMax"))
                writer.uint32(/* id 6, wireType 0 =*/48).int64(message.CtrlWinMoneyMax);
            if (message.LoseWinMoney != null && Object.hasOwnProperty.call(message, "LoseWinMoney"))
                writer.uint32(/* id 7, wireType 0 =*/56).int64(message.LoseWinMoney);
            if (message.KickoutFreeRate != null && Object.hasOwnProperty.call(message, "KickoutFreeRate"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.KickoutFreeRate);
            if (message.AddFreeRate != null && Object.hasOwnProperty.call(message, "AddFreeRate"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.AddFreeRate);
            if (message.MinRange != null && Object.hasOwnProperty.call(message, "MinRange"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.MinRange);
            if (message.MaxRange != null && Object.hasOwnProperty.call(message, "MaxRange"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.MaxRange);
            return writer;
        };

        /**
         * Encodes the specified SlotGetUserControlRet message, length delimited. Does not implicitly {@link gameRoom.SlotGetUserControlRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.SlotGetUserControlRet
         * @static
         * @param {gameRoom.ISlotGetUserControlRet} message SlotGetUserControlRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SlotGetUserControlRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SlotGetUserControlRet message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.SlotGetUserControlRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.SlotGetUserControlRet} SlotGetUserControlRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlotGetUserControlRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.SlotGetUserControlRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.CtrlType = reader.int32();
                    break;
                case 3:
                    message.EndTimestamp = reader.int64();
                    break;
                case 4:
                    message.CtrlLoseMoney = reader.int64();
                    break;
                case 5:
                    message.CtrlWinMoneyMin = reader.int64();
                    break;
                case 6:
                    message.CtrlWinMoneyMax = reader.int64();
                    break;
                case 7:
                    message.LoseWinMoney = reader.int64();
                    break;
                case 8:
                    message.KickoutFreeRate = reader.int32();
                    break;
                case 9:
                    message.AddFreeRate = reader.int32();
                    break;
                case 10:
                    message.MinRange = reader.int32();
                    break;
                case 11:
                    message.MaxRange = reader.int32();
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
         * Decodes a SlotGetUserControlRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.SlotGetUserControlRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.SlotGetUserControlRet} SlotGetUserControlRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SlotGetUserControlRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SlotGetUserControlRet message.
         * @function verify
         * @memberof gameRoom.SlotGetUserControlRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SlotGetUserControlRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (message.CtrlType != null && message.hasOwnProperty("CtrlType"))
                if (!$util.isInteger(message.CtrlType))
                    return "CtrlType: integer expected";
            if (message.EndTimestamp != null && message.hasOwnProperty("EndTimestamp"))
                if (!$util.isInteger(message.EndTimestamp) && !(message.EndTimestamp && $util.isInteger(message.EndTimestamp.low) && $util.isInteger(message.EndTimestamp.high)))
                    return "EndTimestamp: integer|Long expected";
            if (message.CtrlLoseMoney != null && message.hasOwnProperty("CtrlLoseMoney"))
                if (!$util.isInteger(message.CtrlLoseMoney) && !(message.CtrlLoseMoney && $util.isInteger(message.CtrlLoseMoney.low) && $util.isInteger(message.CtrlLoseMoney.high)))
                    return "CtrlLoseMoney: integer|Long expected";
            if (message.CtrlWinMoneyMin != null && message.hasOwnProperty("CtrlWinMoneyMin"))
                if (!$util.isInteger(message.CtrlWinMoneyMin) && !(message.CtrlWinMoneyMin && $util.isInteger(message.CtrlWinMoneyMin.low) && $util.isInteger(message.CtrlWinMoneyMin.high)))
                    return "CtrlWinMoneyMin: integer|Long expected";
            if (message.CtrlWinMoneyMax != null && message.hasOwnProperty("CtrlWinMoneyMax"))
                if (!$util.isInteger(message.CtrlWinMoneyMax) && !(message.CtrlWinMoneyMax && $util.isInteger(message.CtrlWinMoneyMax.low) && $util.isInteger(message.CtrlWinMoneyMax.high)))
                    return "CtrlWinMoneyMax: integer|Long expected";
            if (message.LoseWinMoney != null && message.hasOwnProperty("LoseWinMoney"))
                if (!$util.isInteger(message.LoseWinMoney) && !(message.LoseWinMoney && $util.isInteger(message.LoseWinMoney.low) && $util.isInteger(message.LoseWinMoney.high)))
                    return "LoseWinMoney: integer|Long expected";
            if (message.KickoutFreeRate != null && message.hasOwnProperty("KickoutFreeRate"))
                if (!$util.isInteger(message.KickoutFreeRate))
                    return "KickoutFreeRate: integer expected";
            if (message.AddFreeRate != null && message.hasOwnProperty("AddFreeRate"))
                if (!$util.isInteger(message.AddFreeRate))
                    return "AddFreeRate: integer expected";
            if (message.MinRange != null && message.hasOwnProperty("MinRange"))
                if (!$util.isInteger(message.MinRange))
                    return "MinRange: integer expected";
            if (message.MaxRange != null && message.hasOwnProperty("MaxRange"))
                if (!$util.isInteger(message.MaxRange))
                    return "MaxRange: integer expected";
            return null;
        };

        /**
         * Creates a SlotGetUserControlRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.SlotGetUserControlRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.SlotGetUserControlRet} SlotGetUserControlRet
         */
        SlotGetUserControlRet.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.SlotGetUserControlRet)
                return object;
            var message = new $root.gameRoom.SlotGetUserControlRet();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.CtrlType != null)
                message.CtrlType = object.CtrlType | 0;
            if (object.EndTimestamp != null)
                if ($util.Long)
                    (message.EndTimestamp = $util.Long.fromValue(object.EndTimestamp)).unsigned = false;
                else if (typeof object.EndTimestamp === "string")
                    message.EndTimestamp = parseInt(object.EndTimestamp, 10);
                else if (typeof object.EndTimestamp === "number")
                    message.EndTimestamp = object.EndTimestamp;
                else if (typeof object.EndTimestamp === "object")
                    message.EndTimestamp = new $util.LongBits(object.EndTimestamp.low >>> 0, object.EndTimestamp.high >>> 0).toNumber();
            if (object.CtrlLoseMoney != null)
                if ($util.Long)
                    (message.CtrlLoseMoney = $util.Long.fromValue(object.CtrlLoseMoney)).unsigned = false;
                else if (typeof object.CtrlLoseMoney === "string")
                    message.CtrlLoseMoney = parseInt(object.CtrlLoseMoney, 10);
                else if (typeof object.CtrlLoseMoney === "number")
                    message.CtrlLoseMoney = object.CtrlLoseMoney;
                else if (typeof object.CtrlLoseMoney === "object")
                    message.CtrlLoseMoney = new $util.LongBits(object.CtrlLoseMoney.low >>> 0, object.CtrlLoseMoney.high >>> 0).toNumber();
            if (object.CtrlWinMoneyMin != null)
                if ($util.Long)
                    (message.CtrlWinMoneyMin = $util.Long.fromValue(object.CtrlWinMoneyMin)).unsigned = false;
                else if (typeof object.CtrlWinMoneyMin === "string")
                    message.CtrlWinMoneyMin = parseInt(object.CtrlWinMoneyMin, 10);
                else if (typeof object.CtrlWinMoneyMin === "number")
                    message.CtrlWinMoneyMin = object.CtrlWinMoneyMin;
                else if (typeof object.CtrlWinMoneyMin === "object")
                    message.CtrlWinMoneyMin = new $util.LongBits(object.CtrlWinMoneyMin.low >>> 0, object.CtrlWinMoneyMin.high >>> 0).toNumber();
            if (object.CtrlWinMoneyMax != null)
                if ($util.Long)
                    (message.CtrlWinMoneyMax = $util.Long.fromValue(object.CtrlWinMoneyMax)).unsigned = false;
                else if (typeof object.CtrlWinMoneyMax === "string")
                    message.CtrlWinMoneyMax = parseInt(object.CtrlWinMoneyMax, 10);
                else if (typeof object.CtrlWinMoneyMax === "number")
                    message.CtrlWinMoneyMax = object.CtrlWinMoneyMax;
                else if (typeof object.CtrlWinMoneyMax === "object")
                    message.CtrlWinMoneyMax = new $util.LongBits(object.CtrlWinMoneyMax.low >>> 0, object.CtrlWinMoneyMax.high >>> 0).toNumber();
            if (object.LoseWinMoney != null)
                if ($util.Long)
                    (message.LoseWinMoney = $util.Long.fromValue(object.LoseWinMoney)).unsigned = false;
                else if (typeof object.LoseWinMoney === "string")
                    message.LoseWinMoney = parseInt(object.LoseWinMoney, 10);
                else if (typeof object.LoseWinMoney === "number")
                    message.LoseWinMoney = object.LoseWinMoney;
                else if (typeof object.LoseWinMoney === "object")
                    message.LoseWinMoney = new $util.LongBits(object.LoseWinMoney.low >>> 0, object.LoseWinMoney.high >>> 0).toNumber();
            if (object.KickoutFreeRate != null)
                message.KickoutFreeRate = object.KickoutFreeRate | 0;
            if (object.AddFreeRate != null)
                message.AddFreeRate = object.AddFreeRate | 0;
            if (object.MinRange != null)
                message.MinRange = object.MinRange | 0;
            if (object.MaxRange != null)
                message.MaxRange = object.MaxRange | 0;
            return message;
        };

        /**
         * Creates a plain object from a SlotGetUserControlRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.SlotGetUserControlRet
         * @static
         * @param {gameRoom.SlotGetUserControlRet} message SlotGetUserControlRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SlotGetUserControlRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.CtrlType = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.EndTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.EndTimestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CtrlLoseMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CtrlLoseMoney = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CtrlWinMoneyMin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CtrlWinMoneyMin = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.CtrlWinMoneyMax = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.CtrlWinMoneyMax = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.LoseWinMoney = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.LoseWinMoney = options.longs === String ? "0" : 0;
                object.KickoutFreeRate = 0;
                object.AddFreeRate = 0;
                object.MinRange = 0;
                object.MaxRange = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.CtrlType != null && message.hasOwnProperty("CtrlType"))
                object.CtrlType = message.CtrlType;
            if (message.EndTimestamp != null && message.hasOwnProperty("EndTimestamp"))
                if (typeof message.EndTimestamp === "number")
                    object.EndTimestamp = options.longs === String ? String(message.EndTimestamp) : message.EndTimestamp;
                else
                    object.EndTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.EndTimestamp) : options.longs === Number ? new $util.LongBits(message.EndTimestamp.low >>> 0, message.EndTimestamp.high >>> 0).toNumber() : message.EndTimestamp;
            if (message.CtrlLoseMoney != null && message.hasOwnProperty("CtrlLoseMoney"))
                if (typeof message.CtrlLoseMoney === "number")
                    object.CtrlLoseMoney = options.longs === String ? String(message.CtrlLoseMoney) : message.CtrlLoseMoney;
                else
                    object.CtrlLoseMoney = options.longs === String ? $util.Long.prototype.toString.call(message.CtrlLoseMoney) : options.longs === Number ? new $util.LongBits(message.CtrlLoseMoney.low >>> 0, message.CtrlLoseMoney.high >>> 0).toNumber() : message.CtrlLoseMoney;
            if (message.CtrlWinMoneyMin != null && message.hasOwnProperty("CtrlWinMoneyMin"))
                if (typeof message.CtrlWinMoneyMin === "number")
                    object.CtrlWinMoneyMin = options.longs === String ? String(message.CtrlWinMoneyMin) : message.CtrlWinMoneyMin;
                else
                    object.CtrlWinMoneyMin = options.longs === String ? $util.Long.prototype.toString.call(message.CtrlWinMoneyMin) : options.longs === Number ? new $util.LongBits(message.CtrlWinMoneyMin.low >>> 0, message.CtrlWinMoneyMin.high >>> 0).toNumber() : message.CtrlWinMoneyMin;
            if (message.CtrlWinMoneyMax != null && message.hasOwnProperty("CtrlWinMoneyMax"))
                if (typeof message.CtrlWinMoneyMax === "number")
                    object.CtrlWinMoneyMax = options.longs === String ? String(message.CtrlWinMoneyMax) : message.CtrlWinMoneyMax;
                else
                    object.CtrlWinMoneyMax = options.longs === String ? $util.Long.prototype.toString.call(message.CtrlWinMoneyMax) : options.longs === Number ? new $util.LongBits(message.CtrlWinMoneyMax.low >>> 0, message.CtrlWinMoneyMax.high >>> 0).toNumber() : message.CtrlWinMoneyMax;
            if (message.LoseWinMoney != null && message.hasOwnProperty("LoseWinMoney"))
                if (typeof message.LoseWinMoney === "number")
                    object.LoseWinMoney = options.longs === String ? String(message.LoseWinMoney) : message.LoseWinMoney;
                else
                    object.LoseWinMoney = options.longs === String ? $util.Long.prototype.toString.call(message.LoseWinMoney) : options.longs === Number ? new $util.LongBits(message.LoseWinMoney.low >>> 0, message.LoseWinMoney.high >>> 0).toNumber() : message.LoseWinMoney;
            if (message.KickoutFreeRate != null && message.hasOwnProperty("KickoutFreeRate"))
                object.KickoutFreeRate = message.KickoutFreeRate;
            if (message.AddFreeRate != null && message.hasOwnProperty("AddFreeRate"))
                object.AddFreeRate = message.AddFreeRate;
            if (message.MinRange != null && message.hasOwnProperty("MinRange"))
                object.MinRange = message.MinRange;
            if (message.MaxRange != null && message.hasOwnProperty("MaxRange"))
                object.MaxRange = message.MaxRange;
            return object;
        };

        /**
         * Converts this SlotGetUserControlRet to JSON.
         * @function toJSON
         * @memberof gameRoom.SlotGetUserControlRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SlotGetUserControlRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SlotGetUserControlRet;
    })();

    gameRoom.UpdateGameJackpot = (function() {

        /**
         * Properties of an UpdateGameJackpot.
         * @memberof gameRoom
         * @interface IUpdateGameJackpot
         * @property {number} GameID UpdateGameJackpot GameID
         * @property {number} Flag UpdateGameJackpot Flag
         * @property {number|Long} BaseJackpot UpdateGameJackpot BaseJackpot
         * @property {number|Long} AddJackpot UpdateGameJackpot AddJackpot
         * @property {number} GroupID UpdateGameJackpot GroupID
         * @property {number} IsOpen UpdateGameJackpot IsOpen
         */

        /**
         * Constructs a new UpdateGameJackpot.
         * @memberof gameRoom
         * @classdesc Represents an UpdateGameJackpot.
         * @implements IUpdateGameJackpot
         * @constructor
         * @param {gameRoom.IUpdateGameJackpot=} [properties] Properties to set
         */
        function UpdateGameJackpot(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateGameJackpot GameID.
         * @member {number} GameID
         * @memberof gameRoom.UpdateGameJackpot
         * @instance
         */
        UpdateGameJackpot.prototype.GameID = 0;

        /**
         * UpdateGameJackpot Flag.
         * @member {number} Flag
         * @memberof gameRoom.UpdateGameJackpot
         * @instance
         */
        UpdateGameJackpot.prototype.Flag = 0;

        /**
         * UpdateGameJackpot BaseJackpot.
         * @member {number|Long} BaseJackpot
         * @memberof gameRoom.UpdateGameJackpot
         * @instance
         */
        UpdateGameJackpot.prototype.BaseJackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UpdateGameJackpot AddJackpot.
         * @member {number|Long} AddJackpot
         * @memberof gameRoom.UpdateGameJackpot
         * @instance
         */
        UpdateGameJackpot.prototype.AddJackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UpdateGameJackpot GroupID.
         * @member {number} GroupID
         * @memberof gameRoom.UpdateGameJackpot
         * @instance
         */
        UpdateGameJackpot.prototype.GroupID = 0;

        /**
         * UpdateGameJackpot IsOpen.
         * @member {number} IsOpen
         * @memberof gameRoom.UpdateGameJackpot
         * @instance
         */
        UpdateGameJackpot.prototype.IsOpen = 0;

        /**
         * Creates a new UpdateGameJackpot instance using the specified properties.
         * @function create
         * @memberof gameRoom.UpdateGameJackpot
         * @static
         * @param {gameRoom.IUpdateGameJackpot=} [properties] Properties to set
         * @returns {gameRoom.UpdateGameJackpot} UpdateGameJackpot instance
         */
        UpdateGameJackpot.create = function create(properties) {
            return new UpdateGameJackpot(properties);
        };

        /**
         * Encodes the specified UpdateGameJackpot message. Does not implicitly {@link gameRoom.UpdateGameJackpot.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.UpdateGameJackpot
         * @static
         * @param {gameRoom.IUpdateGameJackpot} message UpdateGameJackpot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateGameJackpot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GameID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Flag);
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.BaseJackpot);
            writer.uint32(/* id 4, wireType 0 =*/32).int64(message.AddJackpot);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.GroupID);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.IsOpen);
            return writer;
        };

        /**
         * Encodes the specified UpdateGameJackpot message, length delimited. Does not implicitly {@link gameRoom.UpdateGameJackpot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.UpdateGameJackpot
         * @static
         * @param {gameRoom.IUpdateGameJackpot} message UpdateGameJackpot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateGameJackpot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateGameJackpot message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.UpdateGameJackpot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.UpdateGameJackpot} UpdateGameJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateGameJackpot.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.UpdateGameJackpot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.GameID = reader.int32();
                    break;
                case 2:
                    message.Flag = reader.int32();
                    break;
                case 3:
                    message.BaseJackpot = reader.int64();
                    break;
                case 4:
                    message.AddJackpot = reader.int64();
                    break;
                case 5:
                    message.GroupID = reader.int32();
                    break;
                case 6:
                    message.IsOpen = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("GameID"))
                throw $util.ProtocolError("missing required 'GameID'", { instance: message });
            if (!message.hasOwnProperty("Flag"))
                throw $util.ProtocolError("missing required 'Flag'", { instance: message });
            if (!message.hasOwnProperty("BaseJackpot"))
                throw $util.ProtocolError("missing required 'BaseJackpot'", { instance: message });
            if (!message.hasOwnProperty("AddJackpot"))
                throw $util.ProtocolError("missing required 'AddJackpot'", { instance: message });
            if (!message.hasOwnProperty("GroupID"))
                throw $util.ProtocolError("missing required 'GroupID'", { instance: message });
            if (!message.hasOwnProperty("IsOpen"))
                throw $util.ProtocolError("missing required 'IsOpen'", { instance: message });
            return message;
        };

        /**
         * Decodes an UpdateGameJackpot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.UpdateGameJackpot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.UpdateGameJackpot} UpdateGameJackpot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateGameJackpot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateGameJackpot message.
         * @function verify
         * @memberof gameRoom.UpdateGameJackpot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateGameJackpot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.GameID))
                return "GameID: integer expected";
            if (!$util.isInteger(message.Flag))
                return "Flag: integer expected";
            if (!$util.isInteger(message.BaseJackpot) && !(message.BaseJackpot && $util.isInteger(message.BaseJackpot.low) && $util.isInteger(message.BaseJackpot.high)))
                return "BaseJackpot: integer|Long expected";
            if (!$util.isInteger(message.AddJackpot) && !(message.AddJackpot && $util.isInteger(message.AddJackpot.low) && $util.isInteger(message.AddJackpot.high)))
                return "AddJackpot: integer|Long expected";
            if (!$util.isInteger(message.GroupID))
                return "GroupID: integer expected";
            if (!$util.isInteger(message.IsOpen))
                return "IsOpen: integer expected";
            return null;
        };

        /**
         * Creates an UpdateGameJackpot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.UpdateGameJackpot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.UpdateGameJackpot} UpdateGameJackpot
         */
        UpdateGameJackpot.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.UpdateGameJackpot)
                return object;
            var message = new $root.gameRoom.UpdateGameJackpot();
            if (object.GameID != null)
                message.GameID = object.GameID | 0;
            if (object.Flag != null)
                message.Flag = object.Flag | 0;
            if (object.BaseJackpot != null)
                if ($util.Long)
                    (message.BaseJackpot = $util.Long.fromValue(object.BaseJackpot)).unsigned = false;
                else if (typeof object.BaseJackpot === "string")
                    message.BaseJackpot = parseInt(object.BaseJackpot, 10);
                else if (typeof object.BaseJackpot === "number")
                    message.BaseJackpot = object.BaseJackpot;
                else if (typeof object.BaseJackpot === "object")
                    message.BaseJackpot = new $util.LongBits(object.BaseJackpot.low >>> 0, object.BaseJackpot.high >>> 0).toNumber();
            if (object.AddJackpot != null)
                if ($util.Long)
                    (message.AddJackpot = $util.Long.fromValue(object.AddJackpot)).unsigned = false;
                else if (typeof object.AddJackpot === "string")
                    message.AddJackpot = parseInt(object.AddJackpot, 10);
                else if (typeof object.AddJackpot === "number")
                    message.AddJackpot = object.AddJackpot;
                else if (typeof object.AddJackpot === "object")
                    message.AddJackpot = new $util.LongBits(object.AddJackpot.low >>> 0, object.AddJackpot.high >>> 0).toNumber();
            if (object.GroupID != null)
                message.GroupID = object.GroupID | 0;
            if (object.IsOpen != null)
                message.IsOpen = object.IsOpen | 0;
            return message;
        };

        /**
         * Creates a plain object from an UpdateGameJackpot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.UpdateGameJackpot
         * @static
         * @param {gameRoom.UpdateGameJackpot} message UpdateGameJackpot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateGameJackpot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.GameID = 0;
                object.Flag = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.BaseJackpot = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.BaseJackpot = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.AddJackpot = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.AddJackpot = options.longs === String ? "0" : 0;
                object.GroupID = 0;
                object.IsOpen = 0;
            }
            if (message.GameID != null && message.hasOwnProperty("GameID"))
                object.GameID = message.GameID;
            if (message.Flag != null && message.hasOwnProperty("Flag"))
                object.Flag = message.Flag;
            if (message.BaseJackpot != null && message.hasOwnProperty("BaseJackpot"))
                if (typeof message.BaseJackpot === "number")
                    object.BaseJackpot = options.longs === String ? String(message.BaseJackpot) : message.BaseJackpot;
                else
                    object.BaseJackpot = options.longs === String ? $util.Long.prototype.toString.call(message.BaseJackpot) : options.longs === Number ? new $util.LongBits(message.BaseJackpot.low >>> 0, message.BaseJackpot.high >>> 0).toNumber() : message.BaseJackpot;
            if (message.AddJackpot != null && message.hasOwnProperty("AddJackpot"))
                if (typeof message.AddJackpot === "number")
                    object.AddJackpot = options.longs === String ? String(message.AddJackpot) : message.AddJackpot;
                else
                    object.AddJackpot = options.longs === String ? $util.Long.prototype.toString.call(message.AddJackpot) : options.longs === Number ? new $util.LongBits(message.AddJackpot.low >>> 0, message.AddJackpot.high >>> 0).toNumber() : message.AddJackpot;
            if (message.GroupID != null && message.hasOwnProperty("GroupID"))
                object.GroupID = message.GroupID;
            if (message.IsOpen != null && message.hasOwnProperty("IsOpen"))
                object.IsOpen = message.IsOpen;
            return object;
        };

        /**
         * Converts this UpdateGameJackpot to JSON.
         * @function toJSON
         * @memberof gameRoom.UpdateGameJackpot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateGameJackpot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateGameJackpot;
    })();

    gameRoom.UpdateGameJackpotRet = (function() {

        /**
         * Properties of an UpdateGameJackpotRet.
         * @memberof gameRoom
         * @interface IUpdateGameJackpotRet
         * @property {number|Long} Jackpot UpdateGameJackpotRet Jackpot
         */

        /**
         * Constructs a new UpdateGameJackpotRet.
         * @memberof gameRoom
         * @classdesc Represents an UpdateGameJackpotRet.
         * @implements IUpdateGameJackpotRet
         * @constructor
         * @param {gameRoom.IUpdateGameJackpotRet=} [properties] Properties to set
         */
        function UpdateGameJackpotRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateGameJackpotRet Jackpot.
         * @member {number|Long} Jackpot
         * @memberof gameRoom.UpdateGameJackpotRet
         * @instance
         */
        UpdateGameJackpotRet.prototype.Jackpot = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new UpdateGameJackpotRet instance using the specified properties.
         * @function create
         * @memberof gameRoom.UpdateGameJackpotRet
         * @static
         * @param {gameRoom.IUpdateGameJackpotRet=} [properties] Properties to set
         * @returns {gameRoom.UpdateGameJackpotRet} UpdateGameJackpotRet instance
         */
        UpdateGameJackpotRet.create = function create(properties) {
            return new UpdateGameJackpotRet(properties);
        };

        /**
         * Encodes the specified UpdateGameJackpotRet message. Does not implicitly {@link gameRoom.UpdateGameJackpotRet.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.UpdateGameJackpotRet
         * @static
         * @param {gameRoom.IUpdateGameJackpotRet} message UpdateGameJackpotRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateGameJackpotRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int64(message.Jackpot);
            return writer;
        };

        /**
         * Encodes the specified UpdateGameJackpotRet message, length delimited. Does not implicitly {@link gameRoom.UpdateGameJackpotRet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.UpdateGameJackpotRet
         * @static
         * @param {gameRoom.IUpdateGameJackpotRet} message UpdateGameJackpotRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateGameJackpotRet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateGameJackpotRet message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.UpdateGameJackpotRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.UpdateGameJackpotRet} UpdateGameJackpotRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateGameJackpotRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.UpdateGameJackpotRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Jackpot = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("Jackpot"))
                throw $util.ProtocolError("missing required 'Jackpot'", { instance: message });
            return message;
        };

        /**
         * Decodes an UpdateGameJackpotRet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.UpdateGameJackpotRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.UpdateGameJackpotRet} UpdateGameJackpotRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateGameJackpotRet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateGameJackpotRet message.
         * @function verify
         * @memberof gameRoom.UpdateGameJackpotRet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateGameJackpotRet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.Jackpot) && !(message.Jackpot && $util.isInteger(message.Jackpot.low) && $util.isInteger(message.Jackpot.high)))
                return "Jackpot: integer|Long expected";
            return null;
        };

        /**
         * Creates an UpdateGameJackpotRet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.UpdateGameJackpotRet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.UpdateGameJackpotRet} UpdateGameJackpotRet
         */
        UpdateGameJackpotRet.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.UpdateGameJackpotRet)
                return object;
            var message = new $root.gameRoom.UpdateGameJackpotRet();
            if (object.Jackpot != null)
                if ($util.Long)
                    (message.Jackpot = $util.Long.fromValue(object.Jackpot)).unsigned = false;
                else if (typeof object.Jackpot === "string")
                    message.Jackpot = parseInt(object.Jackpot, 10);
                else if (typeof object.Jackpot === "number")
                    message.Jackpot = object.Jackpot;
                else if (typeof object.Jackpot === "object")
                    message.Jackpot = new $util.LongBits(object.Jackpot.low >>> 0, object.Jackpot.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an UpdateGameJackpotRet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.UpdateGameJackpotRet
         * @static
         * @param {gameRoom.UpdateGameJackpotRet} message UpdateGameJackpotRet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateGameJackpotRet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.Jackpot = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Jackpot = options.longs === String ? "0" : 0;
            if (message.Jackpot != null && message.hasOwnProperty("Jackpot"))
                if (typeof message.Jackpot === "number")
                    object.Jackpot = options.longs === String ? String(message.Jackpot) : message.Jackpot;
                else
                    object.Jackpot = options.longs === String ? $util.Long.prototype.toString.call(message.Jackpot) : options.longs === Number ? new $util.LongBits(message.Jackpot.low >>> 0, message.Jackpot.high >>> 0).toNumber() : message.Jackpot;
            return object;
        };

        /**
         * Converts this UpdateGameJackpotRet to JSON.
         * @function toJSON
         * @memberof gameRoom.UpdateGameJackpotRet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateGameJackpotRet.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateGameJackpotRet;
    })();

    gameRoom.UserGameJackpotLog = (function() {

        /**
         * Properties of a UserGameJackpotLog.
         * @memberof gameRoom
         * @interface IUserGameJackpotLog
         * @property {number} UserID UserGameJackpotLog UserID
         * @property {number} ServerID UserGameJackpotLog ServerID
         * @property {string} JackpotName UserGameJackpotLog JackpotName
         * @property {number} JackpotRate UserGameJackpotLog JackpotRate
         * @property {number|Long} JackpotPool UserGameJackpotLog JackpotPool
         * @property {number|Long} JackpotWin UserGameJackpotLog JackpotWin
         * @property {number} GroupID UserGameJackpotLog GroupID
         */

        /**
         * Constructs a new UserGameJackpotLog.
         * @memberof gameRoom
         * @classdesc Represents a UserGameJackpotLog.
         * @implements IUserGameJackpotLog
         * @constructor
         * @param {gameRoom.IUserGameJackpotLog=} [properties] Properties to set
         */
        function UserGameJackpotLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserGameJackpotLog UserID.
         * @member {number} UserID
         * @memberof gameRoom.UserGameJackpotLog
         * @instance
         */
        UserGameJackpotLog.prototype.UserID = 0;

        /**
         * UserGameJackpotLog ServerID.
         * @member {number} ServerID
         * @memberof gameRoom.UserGameJackpotLog
         * @instance
         */
        UserGameJackpotLog.prototype.ServerID = 0;

        /**
         * UserGameJackpotLog JackpotName.
         * @member {string} JackpotName
         * @memberof gameRoom.UserGameJackpotLog
         * @instance
         */
        UserGameJackpotLog.prototype.JackpotName = "";

        /**
         * UserGameJackpotLog JackpotRate.
         * @member {number} JackpotRate
         * @memberof gameRoom.UserGameJackpotLog
         * @instance
         */
        UserGameJackpotLog.prototype.JackpotRate = 0;

        /**
         * UserGameJackpotLog JackpotPool.
         * @member {number|Long} JackpotPool
         * @memberof gameRoom.UserGameJackpotLog
         * @instance
         */
        UserGameJackpotLog.prototype.JackpotPool = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserGameJackpotLog JackpotWin.
         * @member {number|Long} JackpotWin
         * @memberof gameRoom.UserGameJackpotLog
         * @instance
         */
        UserGameJackpotLog.prototype.JackpotWin = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * UserGameJackpotLog GroupID.
         * @member {number} GroupID
         * @memberof gameRoom.UserGameJackpotLog
         * @instance
         */
        UserGameJackpotLog.prototype.GroupID = 0;

        /**
         * Creates a new UserGameJackpotLog instance using the specified properties.
         * @function create
         * @memberof gameRoom.UserGameJackpotLog
         * @static
         * @param {gameRoom.IUserGameJackpotLog=} [properties] Properties to set
         * @returns {gameRoom.UserGameJackpotLog} UserGameJackpotLog instance
         */
        UserGameJackpotLog.create = function create(properties) {
            return new UserGameJackpotLog(properties);
        };

        /**
         * Encodes the specified UserGameJackpotLog message. Does not implicitly {@link gameRoom.UserGameJackpotLog.verify|verify} messages.
         * @function encode
         * @memberof gameRoom.UserGameJackpotLog
         * @static
         * @param {gameRoom.IUserGameJackpotLog} message UserGameJackpotLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserGameJackpotLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserID);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ServerID);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.JackpotName);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.JackpotRate);
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.JackpotPool);
            writer.uint32(/* id 6, wireType 0 =*/48).int64(message.JackpotWin);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.GroupID);
            return writer;
        };

        /**
         * Encodes the specified UserGameJackpotLog message, length delimited. Does not implicitly {@link gameRoom.UserGameJackpotLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof gameRoom.UserGameJackpotLog
         * @static
         * @param {gameRoom.IUserGameJackpotLog} message UserGameJackpotLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserGameJackpotLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserGameJackpotLog message from the specified reader or buffer.
         * @function decode
         * @memberof gameRoom.UserGameJackpotLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {gameRoom.UserGameJackpotLog} UserGameJackpotLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserGameJackpotLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.gameRoom.UserGameJackpotLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.int32();
                    break;
                case 2:
                    message.ServerID = reader.int32();
                    break;
                case 3:
                    message.JackpotName = reader.string();
                    break;
                case 4:
                    message.JackpotRate = reader.int32();
                    break;
                case 5:
                    message.JackpotPool = reader.int64();
                    break;
                case 6:
                    message.JackpotWin = reader.int64();
                    break;
                case 7:
                    message.GroupID = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("UserID"))
                throw $util.ProtocolError("missing required 'UserID'", { instance: message });
            if (!message.hasOwnProperty("ServerID"))
                throw $util.ProtocolError("missing required 'ServerID'", { instance: message });
            if (!message.hasOwnProperty("JackpotName"))
                throw $util.ProtocolError("missing required 'JackpotName'", { instance: message });
            if (!message.hasOwnProperty("JackpotRate"))
                throw $util.ProtocolError("missing required 'JackpotRate'", { instance: message });
            if (!message.hasOwnProperty("JackpotPool"))
                throw $util.ProtocolError("missing required 'JackpotPool'", { instance: message });
            if (!message.hasOwnProperty("JackpotWin"))
                throw $util.ProtocolError("missing required 'JackpotWin'", { instance: message });
            if (!message.hasOwnProperty("GroupID"))
                throw $util.ProtocolError("missing required 'GroupID'", { instance: message });
            return message;
        };

        /**
         * Decodes a UserGameJackpotLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof gameRoom.UserGameJackpotLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {gameRoom.UserGameJackpotLog} UserGameJackpotLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserGameJackpotLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserGameJackpotLog message.
         * @function verify
         * @memberof gameRoom.UserGameJackpotLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserGameJackpotLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.UserID))
                return "UserID: integer expected";
            if (!$util.isInteger(message.ServerID))
                return "ServerID: integer expected";
            if (!$util.isString(message.JackpotName))
                return "JackpotName: string expected";
            if (!$util.isInteger(message.JackpotRate))
                return "JackpotRate: integer expected";
            if (!$util.isInteger(message.JackpotPool) && !(message.JackpotPool && $util.isInteger(message.JackpotPool.low) && $util.isInteger(message.JackpotPool.high)))
                return "JackpotPool: integer|Long expected";
            if (!$util.isInteger(message.JackpotWin) && !(message.JackpotWin && $util.isInteger(message.JackpotWin.low) && $util.isInteger(message.JackpotWin.high)))
                return "JackpotWin: integer|Long expected";
            if (!$util.isInteger(message.GroupID))
                return "GroupID: integer expected";
            return null;
        };

        /**
         * Creates a UserGameJackpotLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof gameRoom.UserGameJackpotLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {gameRoom.UserGameJackpotLog} UserGameJackpotLog
         */
        UserGameJackpotLog.fromObject = function fromObject(object) {
            if (object instanceof $root.gameRoom.UserGameJackpotLog)
                return object;
            var message = new $root.gameRoom.UserGameJackpotLog();
            if (object.UserID != null)
                message.UserID = object.UserID | 0;
            if (object.ServerID != null)
                message.ServerID = object.ServerID | 0;
            if (object.JackpotName != null)
                message.JackpotName = String(object.JackpotName);
            if (object.JackpotRate != null)
                message.JackpotRate = object.JackpotRate | 0;
            if (object.JackpotPool != null)
                if ($util.Long)
                    (message.JackpotPool = $util.Long.fromValue(object.JackpotPool)).unsigned = false;
                else if (typeof object.JackpotPool === "string")
                    message.JackpotPool = parseInt(object.JackpotPool, 10);
                else if (typeof object.JackpotPool === "number")
                    message.JackpotPool = object.JackpotPool;
                else if (typeof object.JackpotPool === "object")
                    message.JackpotPool = new $util.LongBits(object.JackpotPool.low >>> 0, object.JackpotPool.high >>> 0).toNumber();
            if (object.JackpotWin != null)
                if ($util.Long)
                    (message.JackpotWin = $util.Long.fromValue(object.JackpotWin)).unsigned = false;
                else if (typeof object.JackpotWin === "string")
                    message.JackpotWin = parseInt(object.JackpotWin, 10);
                else if (typeof object.JackpotWin === "number")
                    message.JackpotWin = object.JackpotWin;
                else if (typeof object.JackpotWin === "object")
                    message.JackpotWin = new $util.LongBits(object.JackpotWin.low >>> 0, object.JackpotWin.high >>> 0).toNumber();
            if (object.GroupID != null)
                message.GroupID = object.GroupID | 0;
            return message;
        };

        /**
         * Creates a plain object from a UserGameJackpotLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof gameRoom.UserGameJackpotLog
         * @static
         * @param {gameRoom.UserGameJackpotLog} message UserGameJackpotLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserGameJackpotLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.UserID = 0;
                object.ServerID = 0;
                object.JackpotName = "";
                object.JackpotRate = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.JackpotPool = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.JackpotPool = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.JackpotWin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.JackpotWin = options.longs === String ? "0" : 0;
                object.GroupID = 0;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = message.UserID;
            if (message.ServerID != null && message.hasOwnProperty("ServerID"))
                object.ServerID = message.ServerID;
            if (message.JackpotName != null && message.hasOwnProperty("JackpotName"))
                object.JackpotName = message.JackpotName;
            if (message.JackpotRate != null && message.hasOwnProperty("JackpotRate"))
                object.JackpotRate = message.JackpotRate;
            if (message.JackpotPool != null && message.hasOwnProperty("JackpotPool"))
                if (typeof message.JackpotPool === "number")
                    object.JackpotPool = options.longs === String ? String(message.JackpotPool) : message.JackpotPool;
                else
                    object.JackpotPool = options.longs === String ? $util.Long.prototype.toString.call(message.JackpotPool) : options.longs === Number ? new $util.LongBits(message.JackpotPool.low >>> 0, message.JackpotPool.high >>> 0).toNumber() : message.JackpotPool;
            if (message.JackpotWin != null && message.hasOwnProperty("JackpotWin"))
                if (typeof message.JackpotWin === "number")
                    object.JackpotWin = options.longs === String ? String(message.JackpotWin) : message.JackpotWin;
                else
                    object.JackpotWin = options.longs === String ? $util.Long.prototype.toString.call(message.JackpotWin) : options.longs === Number ? new $util.LongBits(message.JackpotWin.low >>> 0, message.JackpotWin.high >>> 0).toNumber() : message.JackpotWin;
            if (message.GroupID != null && message.hasOwnProperty("GroupID"))
                object.GroupID = message.GroupID;
            return object;
        };

        /**
         * Converts this UserGameJackpotLog to JSON.
         * @function toJSON
         * @memberof gameRoom.UserGameJackpotLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserGameJackpotLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserGameJackpotLog;
    })();

    return gameRoom;
})();

module.exports = $root;
