import { ButtonProps, CommonEventFunction } from '@tarojs/components'

import GaComponent from './base'
import { FunctionComponent } from 'react'

type MiniButtonProps = Pick<
  ButtonProps,
  | 'formType'
  | 'openType'
  | 'lang'
  | 'sessionFrom'
  | 'sendMessageTitle'
  | 'sendMessagePath'
  | 'sendMessageImg'
  | 'showMessageCard'
  | 'appParameter'
  | 'onContact'
  | 'onGetUserInfo'
  | 'onGetPhoneNumber'
  | 'onOpenSetting'
  | 'onError'
>

export interface GaButtonProps extends GaComponent, MiniButtonProps {
  /**
   * @desc 按钮大小
   * @default 'default'
   */
  size?: 'default' | 'large' | 'small'

  /**
   * @desc 按钮是否圆角
   * @default false
   */
  circle?: boolean

  /**
   * @desc 按钮风格：幽灵按钮、文本按钮、默认按钮
   * @default 'default'
   */
  theme?: 'ghost' | 'text' | 'default'

  /**
   * @desc 按钮类型：次要、警告、主要
   * @default 'primary'
   */
  type?: 'secondary' | 'danger' | 'primary'

  /**
   * @desc 是否加载中
   * @default false
   */
  loading?: boolean

  /**
   * @desc 按钮是否禁用
   * @default false
   */
  disable?: boolean

  /**
   * @desc 按钮是否通栏
   * @default false
   */
  full?: boolean

  /**
   * @desc 按钮点击事件
   * @default () => ()
   */
  onClick?: CommonEventFunction
}

declare const GaButton: FunctionComponent<GaButtonProps>

export default GaButton
