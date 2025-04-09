import { _decorator, Component, Node } from 'cc';
import proto from '../../packages/hall/proto/hall_proto.js';
import { NetworkManager } from '../framework/net/networkManager';

const { ccclass, property } = _decorator;
export const netproto = proto.netproto;
export const MessageBClassID = proto.netproto.MessageBClassID;
export const PlatformCommonClassID = proto.netproto.PlatformCommonClassID;

export const HallMsgRegister = function () {
    //Common
    NetworkManager.RegisterMessage(MessageBClassID.Common, netproto.PlatformCommonClassID.IPReportID, netproto.IPReport)
    NetworkManager.RegisterMessage(MessageBClassID.Common, netproto.PlatformCommonClassID.HeartBeatConfigID, netproto.HeartBeatConfig)
    NetworkManager.RegisterMessage(MessageBClassID.Common, netproto.PlatformCommonClassID.TipMessageID, netproto.TipMessage)

    //NotifyServer
    NetworkManager.RegisterMessage(MessageBClassID.NotifyServer, netproto.NotifyServerClassID.AnnID, netproto.AnnList)
    NetworkManager.RegisterMessage(MessageBClassID.NotifyServer, netproto.NotifyServerClassID.AttrChangeID, netproto.AttrChangeList)
    NetworkManager.RegisterMessage(MessageBClassID.NotifyServer, netproto.NotifyServerClassID.VersionID, netproto.VersionList)
    NetworkManager.RegisterMessage(MessageBClassID.NotifyServer, netproto.NotifyServerClassID.JackpotID, netproto.JackpotList)

    //登录
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.GuestLoginID, netproto.GuestLogin)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.LoginRetID, netproto.UserLoginRet)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.UserLoginID, netproto.UserLogin)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.ReliefConfigReq, netproto.UserLoginRet)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.RequestGameServerAddrID, netproto.RequestGameServerAddrInfo)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.UserLogoutID, netproto.UserLogout)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.ServerListDataID, netproto.AllGameServerInfo)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.GameServerAddrInfoID, netproto.GameServerAddr)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.HallVerInfoID, netproto.HallVerInfo)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.RequestUserHallInfoID, netproto.RequestUserHallInfo)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.UserHallInfoID, netproto.UserLoginRet)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.GameListNtf, netproto.GameListNtf)

    //大厅->个人信息
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.BindZhifubaoID, netproto.ZhifubaoInfo)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.BindZhifubaoRetID, netproto.RetMessage)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.ModifyPasswordID, netproto.ModifyPassword)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.ModifyPasswordRetID, netproto.RetMessage)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.SendPhoneVCodeID, netproto.SendPhoneVCode)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.SendPhoneVCodeRetID, netproto.SendPhoneVCodeRet)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.BindGuestAccountID, netproto.BindGuestAccount)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.BindGuestAccountRetID, netproto.RetMessage)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.FindSetPwdByPhoneID, netproto.FindSetPwdByPhone)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.FindSetPwdByPhoneRetID, netproto.RetMessage)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.BindBankCardID, netproto.BankCardInfo)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.BindBankCardRetID, netproto.RetMessage)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.UnbindConvertTypeID, netproto.UnbindConvertType)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.UnbindConvertTypeRetID, netproto.RetMessage)
    //大厅->个人信息->修改头像
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.ModifyFaceID, netproto.ModifyFace)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.ModifyFaceRetID, netproto.RetMessage)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.VideoGameLoginID, netproto.VideoGameAPIReq)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.VideoGameLoginRetID, netproto.VideoGameAPIRet)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.VideoGameLogoutID, netproto.VideoGameAPIReq)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.VideoGameLogoutRetID, netproto.VideoGameAPIRet)

    //大厅->银行
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.DepositMoneyID, netproto.MoneyDeposit)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.DepositMoneyRetID, netproto.MoneyDepositRet)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.ModifyBankPasswordID, netproto.ModifyBankPassword)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.ModifyBankPasswordRetID, netproto.RetMessage)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.FindSetBankPwdByPhoneID, netproto.FindSetBankPwdByPhone)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.FindSetBankPwdByPhoneRetID, netproto.RetMessage)

    //大厅->邮件
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.GetMailListRetID, netproto.MailList)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.GetMailDetailID, netproto.RequestMailDetail)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.GetMailDetailRetID, netproto.MailDetail)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.ReceiveMailAnnexReq, netproto.ReceiveMailAnnexReq)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.ReceiveMailAnnexRet, netproto.ReceiveMailAnnexRet)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.ClearReadMailReq, netproto.ClearReadMailReq)

    //大厅->联系客服
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.ContactServiceID, netproto.ContactService)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.ContactServiceRetID, netproto.RetMessage)

    //大厅-游戏充值->订单申请
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.CreatePayOrderID, netproto.CreatePayOrder)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.CreatePayOrderRetID, netproto.CreatePayOrderRet)

    //大厅-游戏充值->代理列表
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.GetAgentListID, netproto.RequestAgentList)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.GetAgentListRetID, netproto.AgentList)

    //大厅-游戏充值->代理列表
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.GetAgentListID, netproto.RequestAgentList)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.GetAgentListRetID, netproto.AgentList)

    //游戏充值->举报代理
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.ReportAgentID, netproto.ReportAgent)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.ReportAgentRetID, netproto.RetMessage)

    //大厅->兑换
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.ConvertMoneyID, netproto.ConvertMoney)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.ConvertMoneyRetID, netproto.RetMessage)

    //大厅->FAQ
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.GetFAQID, netproto.GetFAQ)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.GetFAQRetID, netproto.FAQDetail)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.ActivityGetInfoRet, netproto.ActivityInfoRet)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.ActivityGetRewardRet, netproto.ActivityInfoRet)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.ActivityEnrollRet, netproto.ActivityInfoRet)

    //第三方游戏URL
    // NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.GameServerUrlReq, netproto.GameServerUrlReq)
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.GameServerUrlRes, netproto.GameServerUrlRes)

    //玩家切换语言
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.UserLanguageUpdate, netproto.UserLanguageUpdateReq)
    //手机注册
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.RegisterLogin, netproto.RegisterLogin)
    //第三方登录
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.ThirdPartyLogin, netproto.ThirdPartyLogin)
    //数据上报回包
    NetworkManager.RegisterMessage(MessageBClassID.Hall, netproto.HallMsgClassID.AttrFocusSuccessID, netproto.AttrFocusSuccess)
    
    //GameRoom
    NetworkManager.RegisterMessage(MessageBClassID.GameRoom, netproto.GameRoomClassID.LoginRoomID, netproto.LoginGameRoomInfo)
    NetworkManager.RegisterMessage(MessageBClassID.GameRoom, netproto.GameRoomClassID.LoginRoomRetID, netproto.LoginGameRoomRet)
    NetworkManager.RegisterMessage(MessageBClassID.GameRoom, netproto.GameRoomClassID.UserForceLeaveRoomID, netproto.RetMessage)

    
}
