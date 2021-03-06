import React, { PureComponent, PropTypes } from 'react'
import classNames from 'classnames'
import { ON, ON1, ON2, ON_MONITOR_CUE } from './on'
import { OFF, OFF1, OFF2, OFF_MONITOR_CUE } from './off'
import { pointerCoord } from './util'

class Toggle extends PureComponent {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleTouchStart = this.handleTouchStart.bind(this)
    this.handleTouchMove = this.handleTouchMove.bind(this)
    this.handleTouchEnd = this.handleTouchEnd.bind(this)
    this.handleFocus = this.setState.bind(this, { hasFocus: true }, () => {})
    this.handleBlur = this.setState.bind(this, { hasFocus: false }, () => {})
    this.previouslyChecked = !!(props.checked || props.defaultChecked)
    this.state = {
      checked: !!(props.checked || props.defaultChecked),
      hasFocus: false,
    }
  }

  componentWillReceiveProps (nextProps) {
    if ('checked' in nextProps) {
      this.setState({checked: !!nextProps.checked})
    }
  }

  handleClick (event) {
    const checkbox = this.input
    if (event.target !== checkbox && !this.moved) {
      this.previouslyChecked = checkbox.checked
      event.preventDefault()
      checkbox.focus()
      checkbox.click()
      return
    }

    this.setState({checked: checkbox.checked})
  }

  handleTouchStart (event) {
    this.startX = pointerCoord(event).x
    this.activated = true
  }

  handleTouchMove (event) {
    if (!this.activated) return
    this.moved = true

    if (this.startX) {
      let currentX = pointerCoord(event).x
      if (this.state.checked && currentX + 15 < this.startX) {
        this.setState({ checked: false })
        this.startX = currentX
        this.activated = true
      } else if (currentX - 15 > this.startX) {
        this.setState({ checked: true })
        this.startX = currentX
        this.activated = (currentX < this.startX + 5)
      }
    }
  }

  handleTouchEnd (event) {
    if (!this.moved) return
    const checkbox = this.input
    event.preventDefault()

    if (this.startX) {
      let endX = pointerCoord(event).x
      if (this.previouslyChecked === true && this.startX + 4 > endX) {
        if (this.previouslyChecked !== this.state.checked) {
          this.setState({ checked: false })
          this.previouslyChecked = this.state.checked
          checkbox.click()
        }
      } else if (this.startX - 4 < endX) {
        if (this.previouslyChecked !== this.state.checked) {
          this.setState({ checked: true })
          this.previouslyChecked = this.state.checked
          checkbox.click()
        }
      }

      this.activated = false
      this.startX = null
      this.moved = false
    }
  }

  getIcon (type) {
    const { icons } = this.props
    if (!icons) {
      return null
    }
    return icons[type] === undefined
      ? Toggle.defaultProps.icons[type]
      : icons[type]
  }

  render () {
    const { className, icons: _icons, ...inputProps } = this.props
    const classes = classNames('treactr-toggle', {
      'treactr-toggle--checked': this.state.checked,
      'treactr-toggle--focus': this.state.hasFocus,
      'treactr-toggle--disabled': this.props.disabled,
    }, className)

    return (
      <div className={classes}
        onClick={this.handleClick}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}>
        <div className='treactr-toggle-track'>
          <div className='treactr-toggle-track-check'>
            {this.getIcon('checked')}
          </div>
          <div className='treactr-toggle-track-x'>
            {this.getIcon('unchecked')}
          </div>
        </div>
        <div className='treactr-toggle-thumb' />

        <input
          {...inputProps}
          ref={ref => { this.input = ref }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className='treactr-toggle-screenreader-only'
          type='checkbox' />
      </div>
    )
  }
}

Toggle.displayName = 'Toggle'

Toggle.defaultProps = {
  icons: {
    checked: <ON />,
    unchecked: <OFF />,
  },
}

Toggle.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  'aria-labelledby': PropTypes.string,
  'aria-label': PropTypes.string,
  icons: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      checked: PropTypes.node,
      unchecked: PropTypes.node,
    }),
  ]),
}

class FxToggle extends Toggle {
  render () {
    const { className, icons: _icons, ...inputProps } = this.props
    const classes = classNames('treactr-fxtoggle', {
      'treactr-fxtoggle--checked': this.state.checked,
      'treactr-fxtoggle--focus': this.state.hasFocus,
      'treactr-fxtoggle--disabled': this.props.disabled,
    }, className)

    return (
      <div className={classes}
        onClick={this.handleClick}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}>
        <div className='treactr-fxtoggle-track'>
          <div className='treactr-fxtoggle-track-check'>
            {this.getIcon('checked')}
          </div>
          <div className='treactr-fxtoggle-track-x'>
            {this.getIcon('unchecked')}
          </div>
        </div>

        <input
          {...inputProps}
          ref={ref => { this.input = ref }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className='treactr-fxtoggle-screenreader-only'
          type='checkbox' />
      </div>
    )
  }
}

class FxToggle1 extends FxToggle {
}

FxToggle1.defaultProps = {
  icons: {
    checked: <ON1 />,
    unchecked: <OFF1 />,
  },
}

class FxToggle2 extends FxToggle {
}

FxToggle2.defaultProps = {
  icons: {
    checked: <ON2 />,
    unchecked: <OFF2 />,
  },
}

class ToggleMonitorCue extends Toggle {
  render () {
    const { className, icons: _icons, ...inputProps } = this.props
    const classes = classNames('treactr-mc', {
      'treactr-mc--checked': this.state.checked,
      'treactr-mc--focus': this.state.hasFocus,
      'treactr-mc--disabled': this.props.disabled,
    }, className)

    return (
      <div className={classes}
        onClick={this.handleClick}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}>
        <div className='treactr-mc-track'>
          <div className='treactr-mc-track-check'>
            {this.getIcon('checked')}
          </div>
          <div className='treactr-mc-track-x'>
            {this.getIcon('unchecked')}
          </div>
        </div>
        <div className='treactr-mc-thumb' />

        <input
          {...inputProps}
          ref={ref => { this.input = ref }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className='treactr-mc-screenreader-only'
          type='checkbox' />
      </div>
    )
  }
}

ToggleMonitorCue.defaultProps = {
  icons: {
    checked: <ON_MONITOR_CUE />,
    unchecked: <OFF_MONITOR_CUE />,
  },
}

class Kill extends Toggle {
  render () {
    const { className, icons: _icons, ...inputProps } = this.props
    const classes = classNames('treactr-kill', {
      'treactr-kill--checked': this.state.checked,
      'treactr-kill--focus': this.state.hasFocus,
      'treactr-kill--disabled': this.props.disabled,
    }, className)

    return (
      <div className={classes}
        onClick={this.handleClick}
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}>
        <div className='treactr-kill-track'>
          <div className='treactr-kill-track-check' />
          <div className='treactr-kill-track-x' />
        </div>

        <input
          {...inputProps}
          ref={ref => { this.input = ref }}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className='treactr-kill-screenreader-only'
          type='checkbox' />
      </div>
    )
  }
}

export { Toggle, Kill, FxToggle1, FxToggle2, ToggleMonitorCue }
