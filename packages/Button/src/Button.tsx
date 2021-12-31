import * as React from 'react'
import classNames from 'classnames'
import * as PropTypes from 'prop-types'
import {
  BaseEventOrig,
  Button,
  ButtonProps,
  CommonEvent,
} from '@tarojs/components'
import { GaButtonProps } from '../../../types/button'

export const GaButton: React.FunctionComponent<
  Partial<GaButtonProps>
> = props => {
  const {
    disable,
    circle,
    full,
    size,
    theme,
    loading,
    className,
    customStyle,
  } = props

  const rootClassNames = ['ga-button']
  const clsobj = {
    'ga-button--disabled': disable,
    'ga-button--circle': circle,
    'ga-button--full': full,
    [`ga-button--${size}`]: size,
    [`ga-button--${theme}`]: theme,
  }

  const handleClick: (ev: CommonEvent) => void = ev => {
    if (!disable) props.onClick && props.onClick(ev)
  }

  const handleGetUserInfo: (ev: CommonEvent) => void = ev =>
    props.onGetUserInfo && props.onGetUserInfo(ev)

  const handleContact: (
    ev: BaseEventOrig<ButtonProps.onContactEventDetail>
  ) => void = ev => props.onContact && props.onContact(ev)

  const handleGetPhoneNumber: (ev: CommonEvent) => void = ev =>
    props.onGetPhoneNumber && props.onGetPhoneNumber(ev)

  const handleError: (ev: CommonEvent) => void = ev =>
    props.onError && props.onError(ev)

  const handleOpenSetting: (ev: CommonEvent) => void = ev =>
    props.onOpenSetting && props.onOpenSetting(ev)

  return (
    <Button
      className={classNames(rootClassNames, clsobj, className)}
      style={customStyle}
      loading={loading}
      disabled={disable}
      onClick={handleClick}
      onGetUserInfo={handleGetUserInfo}
      onContact={handleContact}
      onGetPhoneNumber={handleGetPhoneNumber}
      onError={handleError}
      onOpenSetting={handleOpenSetting}
    >
      {props.children}
    </Button>
  )
}

GaButton.defaultProps = {
  size: 'default',
  circle: false,
  theme: 'default',
  type: 'primary',
  loading: false,
  disable: false,
  full: false,
  customStyle: {},
  // Button Props
  lang: 'en',
  sessionFrom: '',
  sendMessageTitle: '',
  sendMessagePath: '',
  sendMessageImg: '',
  showMessageCard: false,
  appParameter: '',
}

GaButton.propTypes = {
  size: PropTypes.oneOf(['default', 'large', 'small']),
  theme: PropTypes.oneOf(['ghost', 'text', 'default']),
  type: PropTypes.oneOf(['secondary', 'danger', 'primary']),
  circle: PropTypes.bool,
  loading: PropTypes.bool,
  disable: PropTypes.bool,
  full: PropTypes.bool,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}
