"use strict";(self.webpackChunkmingdao_web=self.webpackChunkmingdao_web||[]).push([[4911],{4911:(On,G,o)=>{o.r(G),o.d(G,{default:()=>Un});var Gn=o(11378),rn=o(56697),$n=o(52262),ln=o(65400),Jn=o(35246),cn=o(74806),$=o(26581),sn=o(33867),A=o(12424),n=o(67294),P=o(86735),j=o(5017),pn=(0,P.Z)([`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
  padding-top: 0;
  box-sizing: border-box;
  overflow-y: auto;
  background: #f5f5f5;
  .infoWrap {
    display: flex;
    @media (max-width: 1320px) {
      display: block;
      .infoBox {
        width: 100%;
      }
    }
  }
  .Hidden {
    display: none !important;
  }
  .hoverColor {
    &:hover {
      color: #1764c0 !important;
    }
  }
  .userInfoWrap {
    .content {
      ul {
        height: 110px !important;
      }
      ul li {
        padding-top: 10px !important;
      }
    }
  }
  .infoWrapCopy {
    display: flex;
    .content {
      padding: 32px 24px !important;
      ul li {
        padding-top: 32px !important;
      }
    }
    @media screen and (max-width: 1920px) {
      display: block;
      .infoBox {
        width: 100%;
        padding: 0 !important;
        &.pTitle {
          padding-top: 16px !important;
        }
      }
    }
    @media screen and (max-width: 1367px) {
      .content {
        height: unset !important;
        padding: 30px 20px !important;
        ul {
          flex-wrap: wrap;
          li {
            width: calc((100% - 40px) / 3);
            flex: unset !important;
            padding: 30px 0 30px 30px !important;
            text-align: left !important;
            margin-bottom: 8px;
          }
        }
      }
    }
  }
  .infoWrap,
  .analysis {
    flex-shrink: 0;
    .content {
      background-color: #fff;
      height: 210px;
      box-sizing: border-box;
      padding: 24px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
      border-radius: 3px;
      .count {
        font-size: 28px;
      }
      .name {
        color: #757575;
        margin-top: 4px;
      }
    }
    .useCount {
      display: flex;
      justify-content: space-between;
      width: 100%;
      color: #757575;
      span {
        display: inline-block;
      }
    }
    .workflowTitle {
      margin-top: 4px;
      text-align: left;
      font-weight: 600;
    }
  }
  .analysis {
    .content {
      height: 180px;
    }
    .limitUser {
      color: #7d7d7d;
    }
  }
  .infoBox {
    width: 50%;
    padding: 0 12px 0 0;
    &.pTitle {
      padding-top: 56px !important;
    }
  }
  .userInfo,
  .financeInfo {
    flex: 1;
  }
  .userInfo .content {
    display: flex;
    align-items: center;
    padding: 32px 24px 50px 24px;
    position: relative;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
    border-radius: 3px;
    .computeMethod {
      position: absolute;
      top: 12px;
      right: 12px;
      color: #9e9e9e;
      font-size: 12px;
      cursor: pointer;
      .Hover_21:hover {
        color: #2196f3 !important;
      }
    }
    .limitUser {
      font-size: 13px;
      color: #9e9e9e;
    }
    .name {
      font-size: 14px;
      color: #7d7d7d;
      font-weight: 600;
    }
    ul {
      display: flex;
      flex: 1;
      align-items: center;
      height: 100%;
      li {
        flex: 1;
        text-align: center;
        height: 100%;
        padding-top: 20px;
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          border-radius: 15px;
          background-color: #f5f5f5;
        }
        &.useAnalysis:hover {
          background-color: #fff;
        }
        &.useAnalysisHover {
          cursor: pointer;
        }
        &.useAnalysisHover:hover {
          border-radius: 16px;
          background-color: #f5f5f5;
          .limitUser {
            color: #9e9e9e;
          }
        }
        &.effectiveDataPipelineRowCount {
          &:hover {
            cursor: auto;
            background-color: #fff;
          }
        }
      }
    }
  }
  .title {
    margin: 24px 0 16px 0;
    font-size: 16px;
    line-height: 16px;
  }

  .purchaseUser,
  .recharge,
  .inviteUser {
    position: absolute;
    right: 24px;
    bottom: 16px;
    padding: 0 24px;
    line-height: 32px;
    transition: background-color 0.25s;
    background: rgba(18, 148, 247, 0.1);
    font-weight: 600;
    &:hover {
      background: rgba(18, 148, 247, 0.2);
    }
    color: rgba(18, 148, 247);
    border-radius: 24px;
    cursor: pointer;
  }
  .inviteUser {
    left: 65px;
    right: unset;
    background-color: rgb(76, 175, 80, 0.1);
    color: #4caf50;
  }
  .inviteUser:hover {
    background-color: #c8e6c9;
  }

  .inviteUserWrap {
    position: absolute;
    bottom: 16px;
    width: calc(100% - 48px);
    .inviteUserBox {
      width: 25%;
      display: flex;
      justify-content: center;
      .inviteUser {
        position: unset;
        background-color: rgb(76, 175, 80, 0.1);
        color: #4caf50;
        margin: 0 auto;
        display: inline-block;
        white-space: nowrap;
      }
      .inviteUser:hover {
        background-color: #c8e6c9;
      }
    }
  }
  .financeInfo {
    .content {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px 24px;
      border-radius: 3px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
    }
    .licenseInfoWrap {
      display: flex;
      flex-direction: column;
    }
    .accountInfo {
      display: flex;
      align-items: center;
      i {
        font-size: 24px;
        color: #2196f3;
      }
      span {
        color: #757575;
        font-size: 14px;
        margin: 0 12px 0 10px;
      }
      .balance {
        color: #333;
        font-size: 16px;
        margin: 0;
        font-weight: 600;
      }
    }

    .trialInfo {
      position: absolute;
      top: 4px;
      right: 4px;
      line-height: 26px;
      padding: 0 12px;
      color: #fff;
      border-radius: 3px;
      background: linear-gradient(281deg, #ff9a00 0%, #ffad12 100%);
      z-index: 2;
      i {
        margin-right: 4px;
      }
    }
    .renew {
      display: flex;
      align-items: center;
      align-self: flex-start;
      padding: 0 16px;
      margin-top: 8px;
      line-height: 24px;
      background: #ff9a00;
      color: #fff;
      border-radius: 12px;
      cursor: pointer;
      font-weight: 600;
    }
  }
  .licenseInfo,
  .nextLicenseInfo {
    display: flex;
    position: relative;
    margin-left: 24px;
    align-items: center;
    line-height: 24px;
    padding: 12px 0;

    .licenseFlag {
      position: absolute;
      width: 6px;
      height: 6px;
      top: 22px;
      left: -18px;
      border-radius: 50%;
      background-color: #00c43b;
      &::before {
        content: '';
        position: absolute;
        top: -3px;
        left: -3px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: rgba(0, 196, 59, 0.1);
      }
    }
    .expireDays {
      margin: 0 12px;
      span {
        font-size: 16px;
        color: #2196f3;
        margin: 0 4px;
      }
    }
    .expireDate {
      margin: 0 5px;
      font-size: 12px;
      color: #757575;
    }
    .upgrade {
      color: #2196f3;
      margin-left: 6px;
    }
    .delayTrial {
      color: #757575;
      margin-left: 6px;
      cursor: pointer;
      i {
        color: #ff9a00;
      }
      span {
        margin-left: 4px;
        &:hover {
          color: #2196f3;
        }
      }
    }
    .licenseType {
      font-weight: 600;
    }
  }
  .nextLicenseInfo {
    .licenseFlag {
      background-color: #bdbdbd;
      &::before {
        background-color: rgba(189, 189, 189, 0.1);
      }
    }
  }
  .analysis {
    .content {
      height: auto;
      display: flex;
      align-items: center;
      padding: 24px 0;
      border-radius: 3px;
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 60%;
        padding: 0 12px;
      }
    }

    li {
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-radius: 10px;
      flex: 1;
      &:hover {
        background-color: #f5f5f5;
      }
      .name {
        word-break: keep-all;
      }
    }
    @media (max-width: 1320px) {
      .content {
        display: block;
        ul {
          width: 100%;
        }
      }
      .workflowInfo {
        margin-top: 20px;
        padding: 0 calc(10%+24px);
        width: 100%;
      }
    }
  }
  .quickEntry {
    .content {
      padding: 16px;
      background-color: #fff;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
      border-radius: 3px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 25%;
        padding: 8px;
        box-sizing: border-box;
        cursor: pointer;
        .wrap {
          display: flex;
          align-items: center;
          border: 1px solid #f0f0f0;
          border-radius: 4px;
          padding: 24px 16px;
          height: 100%;
          box-sizing: border-box;
          &:hover {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
          }
          .iconWrap {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            margin-right: 12px;
            flex-shrink: 0;
            color: #fff;
            font-size: 18px;
          }
          .explain {
            margin-top: 8px;
            color: #bdbdbd;
          }
        }
      }
    }
  }
`],[`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 24px;
  padding-top: 0;
  box-sizing: border-box;
  overflow-y: auto;
  background: #f5f5f5;
  .infoWrap {
    display: flex;
    @media (max-width: 1320px) {
      display: block;
      .infoBox {
        width: 100%;
      }
    }
  }
  .Hidden {
    display: none !important;
  }
  .hoverColor {
    &:hover {
      color: #1764c0 !important;
    }
  }
  .userInfoWrap {
    .content {
      ul {
        height: 110px !important;
      }
      ul li {
        padding-top: 10px !important;
      }
    }
  }
  .infoWrapCopy {
    display: flex;
    .content {
      padding: 32px 24px !important;
      ul li {
        padding-top: 32px !important;
      }
    }
    @media screen and (max-width: 1920px) {
      display: block;
      .infoBox {
        width: 100%;
        padding: 0 !important;
        &.pTitle {
          padding-top: 16px !important;
        }
      }
    }
    @media screen and (max-width: 1367px) {
      .content {
        height: unset !important;
        padding: 30px 20px !important;
        ul {
          flex-wrap: wrap;
          li {
            width: calc((100% - 40px) / 3);
            flex: unset !important;
            padding: 30px 0 30px 30px !important;
            text-align: left !important;
            margin-bottom: 8px;
          }
        }
      }
    }
  }
  .infoWrap,
  .analysis {
    flex-shrink: 0;
    .content {
      background-color: #fff;
      height: 210px;
      box-sizing: border-box;
      padding: 24px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
      border-radius: 3px;
      .count {
        font-size: 28px;
      }
      .name {
        color: #757575;
        margin-top: 4px;
      }
    }
    .useCount {
      display: flex;
      justify-content: space-between;
      width: 100%;
      color: #757575;
      span {
        display: inline-block;
      }
    }
    .workflowTitle {
      margin-top: 4px;
      text-align: left;
      font-weight: 600;
    }
  }
  .analysis {
    .content {
      height: 180px;
    }
    .limitUser {
      color: #7d7d7d;
    }
  }
  .infoBox {
    width: 50%;
    padding: 0 12px 0 0;
    &.pTitle {
      padding-top: 56px !important;
    }
  }
  .userInfo,
  .financeInfo {
    flex: 1;
  }
  .userInfo .content {
    display: flex;
    align-items: center;
    padding: 32px 24px 50px 24px;
    position: relative;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
    border-radius: 3px;
    .computeMethod {
      position: absolute;
      top: 12px;
      right: 12px;
      color: #9e9e9e;
      font-size: 12px;
      cursor: pointer;
      .Hover_21:hover {
        color: #2196f3 !important;
      }
    }
    .limitUser {
      font-size: 13px;
      color: #9e9e9e;
    }
    .name {
      font-size: 14px;
      color: #7d7d7d;
      font-weight: 600;
    }
    ul {
      display: flex;
      flex: 1;
      align-items: center;
      height: 100%;
      li {
        flex: 1;
        text-align: center;
        height: 100%;
        padding-top: 20px;
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
        &:hover {
          border-radius: 15px;
          background-color: #f5f5f5;
        }
        &.useAnalysis:hover {
          background-color: #fff;
        }
        &.useAnalysisHover {
          cursor: pointer;
        }
        &.useAnalysisHover:hover {
          border-radius: 16px;
          background-color: #f5f5f5;
          .limitUser {
            color: #9e9e9e;
          }
        }
        &.effectiveDataPipelineRowCount {
          &:hover {
            cursor: auto;
            background-color: #fff;
          }
        }
      }
    }
  }
  .title {
    margin: 24px 0 16px 0;
    font-size: 16px;
    line-height: 16px;
  }

  .purchaseUser,
  .recharge,
  .inviteUser {
    position: absolute;
    right: 24px;
    bottom: 16px;
    padding: 0 24px;
    line-height: 32px;
    transition: background-color 0.25s;
    background: rgba(18, 148, 247, 0.1);
    font-weight: 600;
    &:hover {
      background: rgba(18, 148, 247, 0.2);
    }
    color: rgba(18, 148, 247);
    border-radius: 24px;
    cursor: pointer;
  }
  .inviteUser {
    left: 65px;
    right: unset;
    background-color: rgb(76, 175, 80, 0.1);
    color: #4caf50;
  }
  .inviteUser:hover {
    background-color: #c8e6c9;
  }

  .inviteUserWrap {
    position: absolute;
    bottom: 16px;
    width: calc(100% - 48px);
    .inviteUserBox {
      width: 25%;
      display: flex;
      justify-content: center;
      .inviteUser {
        position: unset;
        background-color: rgb(76, 175, 80, 0.1);
        color: #4caf50;
        margin: 0 auto;
        display: inline-block;
        white-space: nowrap;
      }
      .inviteUser:hover {
        background-color: #c8e6c9;
      }
    }
  }
  .financeInfo {
    .content {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 20px 24px;
      border-radius: 3px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
    }
    .licenseInfoWrap {
      display: flex;
      flex-direction: column;
    }
    .accountInfo {
      display: flex;
      align-items: center;
      i {
        font-size: 24px;
        color: #2196f3;
      }
      span {
        color: #757575;
        font-size: 14px;
        margin: 0 12px 0 10px;
      }
      .balance {
        color: #333;
        font-size: 16px;
        margin: 0;
        font-weight: 600;
      }
    }

    .trialInfo {
      position: absolute;
      top: 4px;
      right: 4px;
      line-height: 26px;
      padding: 0 12px;
      color: #fff;
      border-radius: 3px;
      background: linear-gradient(281deg, #ff9a00 0%, #ffad12 100%);
      z-index: 2;
      i {
        margin-right: 4px;
      }
    }
    .renew {
      display: flex;
      align-items: center;
      align-self: flex-start;
      padding: 0 16px;
      margin-top: 8px;
      line-height: 24px;
      background: #ff9a00;
      color: #fff;
      border-radius: 12px;
      cursor: pointer;
      font-weight: 600;
    }
  }
  .licenseInfo,
  .nextLicenseInfo {
    display: flex;
    position: relative;
    margin-left: 24px;
    align-items: center;
    line-height: 24px;
    padding: 12px 0;

    .licenseFlag {
      position: absolute;
      width: 6px;
      height: 6px;
      top: 22px;
      left: -18px;
      border-radius: 50%;
      background-color: #00c43b;
      &::before {
        content: '';
        position: absolute;
        top: -3px;
        left: -3px;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background-color: rgba(0, 196, 59, 0.1);
      }
    }
    .expireDays {
      margin: 0 12px;
      span {
        font-size: 16px;
        color: #2196f3;
        margin: 0 4px;
      }
    }
    .expireDate {
      margin: 0 5px;
      font-size: 12px;
      color: #757575;
    }
    .upgrade {
      color: #2196f3;
      margin-left: 6px;
    }
    .delayTrial {
      color: #757575;
      margin-left: 6px;
      cursor: pointer;
      i {
        color: #ff9a00;
      }
      span {
        margin-left: 4px;
        &:hover {
          color: #2196f3;
        }
      }
    }
    .licenseType {
      font-weight: 600;
    }
  }
  .nextLicenseInfo {
    .licenseFlag {
      background-color: #bdbdbd;
      &::before {
        background-color: rgba(189, 189, 189, 0.1);
      }
    }
  }
  .analysis {
    .content {
      height: auto;
      display: flex;
      align-items: center;
      padding: 24px 0;
      border-radius: 3px;
      ul {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 60%;
        padding: 0 12px;
      }
    }

    li {
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-radius: 10px;
      flex: 1;
      &:hover {
        background-color: #f5f5f5;
      }
      .name {
        word-break: keep-all;
      }
    }
    @media (max-width: 1320px) {
      .content {
        display: block;
        ul {
          width: 100%;
        }
      }
      .workflowInfo {
        margin-top: 20px;
        padding: 0 calc(10%+24px);
        width: 100%;
      }
    }
  }
  .quickEntry {
    .content {
      padding: 16px;
      background-color: #fff;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
      border-radius: 3px;
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 25%;
        padding: 8px;
        box-sizing: border-box;
        cursor: pointer;
        .wrap {
          display: flex;
          align-items: center;
          border: 1px solid #f0f0f0;
          border-radius: 4px;
          padding: 24px 16px;
          height: 100%;
          box-sizing: border-box;
          &:hover {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
          }
          .iconWrap {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            margin-right: 12px;
            flex-shrink: 0;
            color: #fff;
            font-size: 18px;
          }
          .explain {
            margin-top: 8px;
            color: #bdbdbd;
          }
        }
      }
    }
  }
`]),dn=(0,P.Z)([`
  text-align: center;
  padding: 0 24px;
  .title {
    font-size: 28px;
  }
  .subTitle {
    margin-top: 8px;
    font-size: 16px;
  }
  .invitePerson {
    font-size: 18px;
    margin-top: 20px;
    span {
      color: #2196f3;
      font-size: 24px;
      margin: 0 6px;
    }
  }
  .expire {
    color: #757575;
    margin: 12px 0;
  }
  .remainTime {
    color: #2196f3;
    margin-left: 6px;
  }
  .inviteRules {
    display: flex;
    align-items: center;
    margin: 36px 0;
    li {
      min-width: 80px;
      .achieveDays {
        color: #2196f3;
        font-size: 14px;
        span {
          margin-right: 4px;
          font-size: 28px;
        }
      }
      &:last-child {
        text-align: right;
        .iconWrap {
          left: auto;
          right: 0;
          transform: none;
        }
      }
    }
    .activeSymbolWrap {
      background: #2196f3 !important;
      .iconWrap {
        background: #2196f3 !important;
      }
    }
    .symbolWrap {
      position: relative;
      background-color: #e0e0e0;
      height: 8px;
      margin: 24px 0;
      .iconWrap {
        position: absolute;
        top: -15px;
        left: 50%;
        transform: translateX(-18px);
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: #e8e8e8;
        text-align: center;
        line-height: 36px;
        color: #fff;
        font-size: 20px;
      }
    }
  }
`],[`
  text-align: center;
  padding: 0 24px;
  .title {
    font-size: 28px;
  }
  .subTitle {
    margin-top: 8px;
    font-size: 16px;
  }
  .invitePerson {
    font-size: 18px;
    margin-top: 20px;
    span {
      color: #2196f3;
      font-size: 24px;
      margin: 0 6px;
    }
  }
  .expire {
    color: #757575;
    margin: 12px 0;
  }
  .remainTime {
    color: #2196f3;
    margin-left: 6px;
  }
  .inviteRules {
    display: flex;
    align-items: center;
    margin: 36px 0;
    li {
      min-width: 80px;
      .achieveDays {
        color: #2196f3;
        font-size: 14px;
        span {
          margin-right: 4px;
          font-size: 28px;
        }
      }
      &:last-child {
        text-align: right;
        .iconWrap {
          left: auto;
          right: 0;
          transform: none;
        }
      }
    }
    .activeSymbolWrap {
      background: #2196f3 !important;
      .iconWrap {
        background: #2196f3 !important;
      }
    }
    .symbolWrap {
      position: relative;
      background-color: #e0e0e0;
      height: 8px;
      margin: 24px 0;
      .iconWrap {
        position: absolute;
        top: -15px;
        left: 50%;
        transform: translateX(-18px);
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background: #e8e8e8;
        text-align: center;
        line-height: 36px;
        color: #fff;
        font-size: 20px;
      }
    }
  }
`]),fn=j.ZP.div(pn),xn=j.ZP.div(dn),mn=o(93967),S=o.n(mn),N=o(28829),gn=o(81912),f=o(15694),un=o(30381),I=o.n(un),J=o(15577),X=o(36021),vn=o(97553),hn=o(42723),bn=o(20640),yn=o.n(bn),En=o(96486),p=o.n(En),kn=o(75809),Cn=(0,P.Z)([`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  transition: all 0.75s;
  visibility: hidden;
  opacity: 0;
  &.desktop,
  &.app {
    visibility: visible;
    opacity: 0.9;
  }
  z-index: 3;

  .title {
    font-size: 36px;
  }
  .explain {
    font-size: 18px;
    margin-top: 6px;
  }
  .copyBtn {
    margin: 32px auto;
  }
  .shareContent {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    .iconWrap {
      width: 76px;
      height: 76px;
      border-radius: 50%;
      background-color: #eee;
      text-align: center;
      line-height: 76px;
      font-size: 32px;
    }
    .line {
      width: 160px;
      margin: 0 16px;
      border-top: 4px dashed #eee;
    }
  }
  .text {
    margin: 32px;
    font-size: 18px;
    color: #999;
  }
  .selectUser {
    span {
      color: #2196f3;
      margin-left: 4px;
      cursor: pointer;
    }
  }
`],[`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  transition: all 0.75s;
  visibility: hidden;
  opacity: 0;
  &.desktop,
  &.app {
    visibility: visible;
    opacity: 0.9;
  }
  z-index: 3;

  .title {
    font-size: 36px;
  }
  .explain {
    font-size: 18px;
    margin-top: 6px;
  }
  .copyBtn {
    margin: 32px auto;
  }
  .shareContent {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 32px;
    .iconWrap {
      width: 76px;
      height: 76px;
      border-radius: 50%;
      background-color: #eee;
      text-align: center;
      line-height: 76px;
      font-size: 32px;
    }
    .line {
      width: 160px;
      margin: 0 16px;
      border-top: 4px dashed #eee;
    }
  }
  .text {
    margin: 32px;
    font-size: 18px;
    color: #999;
  }
  .selectUser {
    span {
      color: #2196f3;
      margin-left: 4px;
      cursor: pointer;
    }
  }
`]),wn={desktop:{title:_l("\u5B89\u88C5\u684C\u9762\u5BA2\u6237\u7AEF"),explain:_l("\u4E3A\u60A8\u7684\u6210\u5458\u5B89\u88C5\u684C\u9762\u5BA2\u6237\u7AEF\uFF0C\u652F\u6301MAC\u6216\u8005Windows\u7CFB\u7EDF"),text:_l("\u5C06\u94FE\u63A5\u5206\u4EAB\u7ED9\u4F60\u7684\u6210\u5458")},app:{title:_l("\u5B89\u88C5\u624B\u673A\u79FB\u52A8\u5BA2\u6237\u7AEF"),explain:_l("\u4E3A\u60A8\u7684\u6210\u5458\u5B89\u88C5App\uFF08\u652F\u6301IOS\u6216\u8005Andriod)"),text:_l("\u626B\u63CF\u4E8C\u7EF4\u7801\uFF0C\u5C06\u9875\u9762\u53D1\u9001\u7ED9\u60A8\u7684\u597D\u53CB")}},Nn=j.ZP.div(Cn);function In(x){var W=x.projectId,m=x.type,L=x.onClose,r=(0,hn.Z)(x,["projectId","type","onClose"]),b=wn[m]||{},F=b.title,R=b.explain,z=b.text,a=p().get(md,["global","Config"]),v=a.AjaxApiUrl,D=a.WebUrl,y=m==="desktop",U=(0,n.useRef)(null),E=(0,n.useRef)(null),B=function(){(0,kn.Z)({fromAdmin:!0,SelectUserSettings:{projectId:W,filterAccountIds:[md.global.Account.accountId],filterAll:!0,filterFriend:!0,filterOthers:!0,filterOtherProject:!0,dataRange:2,allowSelectNull:!1,callback:function(T){N.Z.pushInstallClientMsg({projectId:W,accountIds:p().map(T,function(g){return g.accountId}),clientType:m==="app"?0:1}).then(function(){alert(_l("\u53D1\u9001\u6210\u529F"),1)})}}})};return n.createElement(Nn,{ref:U,className:m,type:m,onClick:function(h){h.target.isEqualNode(U.current)&&L()}},n.createElement("div",{className:"title"},F),n.createElement("div",{className:"explain"},R),n.createElement("div",{className:"shareContent"},y?n.createElement(n.Fragment,null,n.createElement("div",{className:"iconWrap"},n.createElement("i",{className:"icon-link"})),n.createElement("div",{className:"line"}),n.createElement("div",{className:"iconWrap"},n.createElement("i",{className:"icon-group"}))):n.createElement("img",{src:v+"code/CreateQrCodeImage?url="+D+"download"})),n.createElement("div",{className:"text"},z),y&&n.createElement(vn.ZP,{ref:E,className:"copyBtn",style:{width:"260px"},onClick:function(){yn()(D+"download"),alert(_l("\u5DF2\u7ECF\u590D\u5236\u5230\u7C98\u8D34\u677F\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528Ctrl+V \u8D34\u5230\u9700\u8981\u7684\u5730\u65B9\u53BB\u4E86\u54E6"))}},_l("\u590D\u5236\u9080\u8BF7\u94FE\u63A5")),n.createElement("div",{className:"selectUser"},_l("\u6216"),n.createElement("span",{onClick:B},_l("\u4ECE\u901A\u8BAF\u5F55\u4E2D\u9009\u62E9"))))}var Wn=o(94408),zn=o(16921),Dn=o(93002);function Un(x){var W=x.match,m=x.location,L=p().get(W,"params"),r=L.projectId,b=(0,J.vo)(r),F=b.companyName,R=(0,Dn.Z)({}),z=(0,A.Z)(R,2),a=z[0],v=z[1],D=(0,n.useState)(""),y=(0,A.Z)(D,2),U=y[0],E=y[1],B=(0,n.useState)(p().includes(m.pathname,"showInvite")),k=(0,A.Z)(B,2),h=k[0],T=k[1],g=a.licenseType===2,Z=a.licenseType===0,H=(0,n.useRef)(null),Q=(0,n.useRef)(null),K=(0,n.useRef)(null),q=md.global.Account.lang==="en";(0,n.useEffect)(function(){document.title=_l("\u7EC4\u7EC7\u7BA1\u7406 - \u9996\u9875 - %0",F),An(),Pn(),Tn()},[]),(0,n.useEffect)(function(){!h||a.rules||N.Z.getInviteGiveRule({projectId:r}).then(function(t){v(t)})},[h]);var Tn=function(){gn.Z.getProcessUseCount({companyId:r}).then(function(e){v(e)})},An=function(){N.Z.getProjectLicenseSupportInfo({projectId:r,onlyNormal:!0,onlyUsage:!1}).then(function(e){e.currentLicense.version||(e.currentLicense.version={name:_l("\u514D\u8D39\u7248")}),v(e)})},Pn=function(e){N.Z.getProjectLicenseSupportInfo({projectId:r,onlyNormal:!1,onlyUsage:!0}).then(function(i){var l=i.effectiveApkCount,s=i.effectiveApkStorageCount,d=i.effectiveWorkflowCount,u=i.effectiveWorksheetCount,O=i.effectiveWorksheetRowCount,w=i.effectiveDataPipelineJobCount,on=i.effectiveDataPipelineRowCount,Vn=i.effectiveAggregationTableCount;v({effectiveApkCount:l,effectiveApkStorageCount:s,effectiveWorkflowCount:d,effectiveWorksheetCount:u,effectiveWorksheetRowCount:O,effectiveDataPipelineJobCount:w,effectiveDataPipelineRowCount:on,effectiveAggregationTableCount:Vn})})},Y=function(e,i){i?(0,X.T8)("/admin/"+e+"/"+r+"/"+i):(0,X.T8)("/admin/"+e+"/"+r)},M=function(e){switch(e){case"addPerson":(0,Wn.ZP)({projectId:r,fromType:4});break;case"createDepartment":location.assign("/admin/structure/"+r+"/create");break;case"batchImport":location.assign("/admin/structure/"+r+"/importusers");break;case"settingAdmin":location.assign("/admin/sysroles/"+r);break;case"completeInfo":location.assign("/admin/sysinfo/"+r);break;case"installDesktop":E("desktop");break;case"installApp":E("app");break}},jn=function(e){p().includes(["user","workflow","storage","portaluser","portalupgrade","dataSync"],e)&&location.assign("/admin/expansionservice/"+r+"/"+e),e==="recharge"&&location.assign("/admin/valueaddservice/"+r),e==="upgrade"&&location.assign("/admin/upgradeservice/"+r),e==="renew"&&(0,zn.F)({projectId:r,isTrial:g}),e==="toast"&&alert(_l("\u5355\u5E94\u7528\u7248\u6682\u4E0D\u652F\u6301\u7EBF\u4E0A\u7EED\u8D39\uFF0C\u8BF7\u8054\u7CFB\u987E\u95EE\u8FDB\u884C\u7EED\u8D39"),3)},_=a.currentLicense,V=_===void 0?{}:_,nn=a.nextLicense,C=nn===void 0?{}:nn,Sn=V.endDate,en=V.expireDays,tn=V.version,an=tn===void 0?{}:tn,Ln=C.version,Fn=C.startDate,Rn=C.endDate,Bn=parseInt(an.versionIdV2),c=function(e){return p().isUndefined(e)||p().isNaN(e)?"-":e},Zn=function(e,i,l){var s=e==="effectiveApkStorageCount",d=s?(a[e]/(c(a[i])*Math.pow(1024,3))*100).toFixed(2):a[e]/a[i]>0&&a[e]/a[i]*1e4<=1?.01:(a[e]/a[i]*100).toFixed(2),u=!1;return H.current&&(u=Q.current.clientWidth+K.current.clientWidth+20>=H.current.clientWidth),n.createElement("div",{className:"useCount"},n.createElement("dov",null,_l("\u5DF2\u7528"),n.createElement("span",{className:"Gray mLeft4"},(d==="NaN"?"-":d)+"%")),n.createElement("div",{className:"flex TxtRight",ref:H},n.createElement("span",{ref:Q},s?(0,f.sS)(a[e]):q?(0,f.Bw)(a[e])+l:a[e]>=1e4?c(a[e]/1e4)+" "+_l("\u4E07")+l:c(a[e])+" "+l),n.createElement("span",{className:"mLeft4"},"/"),u&&n.createElement("br",null),n.createElement("span",{className:"mLeft4",ref:K},s?c(a[i])+"GB":q?(0,f.Bw)(a[i])+l:a[i]>=1e4?c(a[i]/1e4)+" "+_l("\u4E07")+l:c(a[i]||0)+" "+l)))},Hn=function(e,i){var l=0;return e==="useExecCount"||e==="effectiveDataPipelineRowCount"?l=a[e]/a[i]>0&&a[e]/a[i]*1e4<=1?.01:(a[e]/a[i]*100).toFixed(2):l=(a[e]/(c(a[i])*Math.pow(1024,3))*100).toFixed(2),l},Yn=function(){return null},Xn=function(){return Bn===3||g&&!p().isEmpty(C)?null:g?n.createElement("div",{className:"delayTrial",onClick:function(){T(!0)}},n.createElement("i",{className:"icon-box_trial"}),n.createElement("span",null,_l("\u5EF6\u957F\u8BD5\u7528"))):n.createElement("div",{className:"upgrade pointer",onClick:function(){return jn("upgrade")}},_l("\u5347\u7EA7"))},Mn=(md.global.Account.projects||[]).some(function(t){return t.licenseType===1});return n.createElement(fn,null,n.createElement("div",{className:"infoWrap"},n.createElement("div",{className:"infoBox"},n.createElement("div",{className:"userInfo userInfoWrap"},n.createElement("div",{className:"title bold"},_l("\u6210\u5458")),n.createElement("div",{className:"content"},n.createElement("ul",null,f.c4.map(function(t){var e=t.key,i=t.text,l=t.link;return n.createElement("li",{className:S()("pointer",{}),key:e,onClick:function(){return Y(l,e==="notActiveUserCount"?"uncursor":null)}},n.createElement("div",{className:"name"},i),n.createElement("div",{className:"count"},(0,f.Bw)(c(a[e]||0))),e==="effectiveUserCount"&&n.createElement(n.Fragment,{onClick:function(d){return d.stopPropagation()}},n.createElement("div",{className:"limitUser"},n.createElement("span",{className:"nowrap"},_l("\u4E0A\u9650 %0 \u4EBA",c(a.limitUserCount||0))))),e==="effectiveExternalUserCount"&&n.createElement(n.Fragment,null,n.createElement("div",{className:"limitUser"},_l("\u4E0A\u9650 %0 \u4EBA",c(a.limitExternalUserCount||0)))))})),Mn&&n.createElement("div",{className:"inviteUserWrap"},n.createElement("div",{className:"inviteUserBox"},n.createElement("div",{className:"inviteUser",onClick:function(){return M("addPerson")}},_l("\u9080\u8BF7\u6210\u5458"))))))),n.createElement("div",{className:"infoBox pRight0"},n.createElement("div",{className:"financeInfo"},n.createElement("div",{className:"title bold"},_l("\u7248\u672C")),n.createElement("div",{className:"content"},g&&n.createElement("div",{className:"trialInfo"},n.createElement("i",{className:"icon-watch_latersvg_22"}),_l("\u8BD5\u7528\u8FD8\u5269 %0 \u5929",c(en||0))),n.createElement("div",{className:"licenseInfoWrap"},n.createElement("div",{className:"licenseInfo"},n.createElement("div",{className:"licenseFlag"}),n.createElement("div",{className:"licenseType Font15"},c(an.name)),g&&n.createElement("span",null,_l("-\u8BD5\u7528")),Z?null:n.createElement(n.Fragment,null,n.createElement("div",{className:"expireDays"},_l("\u5269\u4F59"),n.createElement("span",null,c(en||0)),_l("\u5929")),n.createElement("div",{className:"expireDate"},_l("%0\u5230\u671F",c(I()(Sn).format("YYYY\u5E74MM\u6708DD\u65E5")))))),!p().isEmpty(C)&&n.createElement("div",{className:"nextLicenseInfo"},n.createElement("div",{className:"licenseFlag"}),n.createElement("div",{className:"licenseType Font15"},Ln.name),n.createElement("div",{className:"expireDate"},_l("%0 ~ %1",I()(Fn).format("YYYY\u5E74MM\u6708DD\u65E5"),I()(Rn).format("YYYY\u5E74MM\u6708DD\u65E5")))),Yn()),md.global.Config.IsPlatformLocal&&n.createElement("div",{className:"accountInfo"},n.createElement("i",{className:"icon-sp_account_balance_wallet_white"}),n.createElement("span",null,_l("\u5F53\u524D\u8D26\u6237\u4F59\u989D (\uFFE5)")),n.createElement("span",{className:"balance"},c(a.balance||0).toLocaleString())))))),n.createElement("div",{className:"infoWrap infoWrapCopy"},n.createElement("div",{className:"infoBox"},n.createElement("div",{className:"userInfo"},n.createElement("div",{className:"title overflowHidden"},n.createElement("span",{className:"Left bold"},_l("\u4F7F\u7528")),n.createElement("span",{className:"Right Hand Font14 Gray_75",onClick:function(){location.assign("/admin/analytics/"+r)}},_l("\u67E5\u770B\u8BE6\u60C5"),n.createElement(sn.Z,{icon:"arrow-right-border",className:"mLeft6"}))),n.createElement("div",{className:"content"},n.createElement("ul",null,f.ys.map(function(t){var e=t.key,i=t.text,l=t.link,s=t.featureId;if(!(s&&!(0,J.XH)(r,s)))return n.createElement("li",{key:e,className:S()("useAnalysis",{useAnalysisHover:p().includes(["effectiveApkCount","useProcessCount","effectiveDataPipelineJobCount","effectiveAggregationTableCount"],e)}),onClick:function(){if(e==="effectiveDataPipelineJobCount")return localStorage.setItem("currentProjectId",r),location.assign("/integration/task");p().includes(["effectiveApkCount","useProcessCount","effectiveAggregationTableCount"],e)&&Y(l)}},n.createElement("div",{className:"name"},i,e==="effectiveWorksheetRowCount"&&n.createElement($.Z,{popupPlacement:"top",text:n.createElement("span",null,_l("\u6240\u6709\u5DE5\u4F5C\u8868\u884C\u8BB0\u5F55\u603B\u6570\uFF08\u5305\u542B\u5173\u95ED\u5E94\u7528\uFF09"))},n.createElement("span",{className:"icon-help1 Font13 mLeft8 Gray_9e"}))),n.createElement("div",{className:"count"},(0,f.Bw)(c(a[e]||0))),e==="effectiveWorksheetCount"&&Z&&n.createElement("div",{className:"limitUser"},_l("\u4E0A\u9650 100 \u4E2A")),e==="effectiveWorksheetRowCount"&&Z&&n.createElement("div",{className:"limitUser"},_l("\u4E0A\u9650 5 \u4E07\u884C")),e==="effectiveAggregationTableCount"&&a.limitAggregationTableCount?n.createElement("div",{className:"limitUser"},_l("\u4E0A\u9650 %0",a.limitAggregationTableCount)):"")}))))),n.createElement("div",{className:"infoBox pRight0 pTitle"},n.createElement("div",{className:"userInfo"},n.createElement("div",{className:"content"},n.createElement("ul",null,f.yo.filter(function(t){return md.global.Config.IsPlatformLocal?t:t.key==="useExecCount"}).map(function(t){var e=t.key,i=t.limit,l=t.text,s=t.link,d=t.click,u=t.unit,O=t.numUnit,w=Hn(e,i);return n.createElement("li",{className:"pLeft10 pRight10 Hand",onClick:function(){if(e=="effectiveDataPipelineRowCount")return localStorage.setItem("currentProjectId",r),location.assign("/integration/task");Y(s)}},n.createElement("div",{className:"workflowTitle flexRow"},n.createElement("div",{className:"flex"},l,n.createElement("span",{className:"Gray_9e"},u),e==="effectiveApkStorageCount"&&n.createElement($.Z,{popupPlacement:"top",text:n.createElement("span",null,_l("\u5E94\u7528\u4E2D\u672C\u5E74\u7684\u9644\u4EF6\u4E0A\u4F20\u91CF\uFF0C\u4E0A\u4F20\u5373\u5360\u7528\uFF0C\u5220\u9664\u4E0D\u4F1A\u6062\u590D"))},n.createElement("span",{className:"icon-help1 Font13 Gray_9e"})))),n.createElement(cn.default,{showInfo:!1,style:{margin:"7px 0",textAlign:"left"},trailColor:"#eaeaea",strokeColor:p().isNaN(Number(w))?"#eaeaea":w>90?{from:"#F51744 ",to:"#FF5779"}:{from:"#2196f3 ",to:"#4bb2ff"},strokeWidth:4,percent:w}),Zn(e,i,O))})))))),n.createElement("div",{className:"quickEntry"},n.createElement("div",{className:"title bold"},_l("\u5FEB\u6377\u5165\u53E3")),n.createElement("div",{className:"content"},n.createElement("ul",null,f.Py.map(function(t){var e=t.icon,i=t.color,l=t.title,s=t.explain,d=t.action;return n.createElement("li",{key:d,onClick:function(){return M(d)}},n.createElement("div",{className:"wrap"},n.createElement("div",{className:"iconWrap",style:{backgroundColor:i}},n.createElement("i",{className:"icon-"+e})),n.createElement("div",{className:"text"},n.createElement("div",{className:"entryTitle Font14"},l),n.createElement("div",{className:"explain"},s))))})))),n.createElement(In,{type:U,projectId:r,onClose:function(){return E("")}}),n.createElement(rn.Z,{width:720,visible:h,title:null,footer:null,onCancel:function(){return T(!1)}},n.createElement(xn,null,n.createElement("div",{className:"title"},_l("\u989D\u5916\u83B7\u8D60\u6700\u591A30\u5929\u514D\u8D39\u8BD5\u7528")),n.createElement("div",{className:"subTitle"},_l("\u8BD5\u7528\u671F\u95F4\u9080\u8BF7\u540C\u4E8B\u52A0\u5165\u5373\u53EF\u83B7\u8D60\u76F8\u5E94\u8BD5\u7528\u5929\u6570")),n.createElement("div",{className:"invitePerson"},_l("\u5F53\u524D\u5DF2\u9080\u8BF7"),n.createElement("span",null,a.invitedUserCount||0),_l("\u4EBA")),n.createElement("div",{className:"expire"},_l("\u8BD5\u7528\u5230\u671F\u65F6\u95F4\uFF1A"),n.createElement("span",{className:"expireTime"},a.expireDate?I()(a.expireDate).format("YYYY-MM-DD"):""),n.createElement("span",{className:"remainTime"},_l("(\u5269\u4F59\u65F6\u95F4%0\u5929)",a.leftDays||0))),n.createElement("ul",{className:"inviteRules"},(a.rules||[]).map(function(t,e){var i=t.inviteCount,l=t.addDays,s=t.achieveDays;return n.createElement("li",{key:i,style:{flex:e+1}},n.createElement("div",{className:"achieveDays"},n.createElement("span",null,s),_l("\u5929")),n.createElement("div",{className:S()("symbolWrap",{activeSymbolWrap:a.invitedUserCount>=i})},n.createElement("div",{className:"iconWrap"},n.createElement("i",{className:"icon-ok"}))),n.createElement("span",{className:"Font12 Gray_75"},_l("\u9080\u8BF7%0\u4F4D\u7528\u6237",i)))})),n.createElement(ln.default,{style:{height:"48px",width:"320px"},type:"primary",block:!0,onClick:function(){return M("addPerson")}},_l("\u7ACB\u5373\u9080\u8BF7\u540C\u4E8B\u52A0\u5165")))))}}}]);
