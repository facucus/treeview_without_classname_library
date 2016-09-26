import React, { Component, PropTypes } from 'react'
import { NodeItem } from 'components'
import { listItem, nodeItem, nodeItemUp, nodeItemDown } from './styles.css'

class TreeView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: true,
    }
    this.handleToggle = this.handleToggle.bind(this)
  }

  handleToggle () {
    this.setState({visible: !this.state.visible})
  }

  render () {
    let item
    let objectClass
    const style = (!this.state.visible) ? {display: 'none'} : null
    const { node } = this.props

    if (node.items != null) {
      item = node.items.map((node, index) => {
        return <li key={index} className={listItem}><TreeView node={node} /></li>
      })

      if (this.state.visible && node.items.length) {
        objectClass = nodeItem + ' ' + nodeItemDown
      } else if(!this.state.visible && node.items.length) {
        objectClass = nodeItem + ' ' + nodeItemUp
      } else {
        objectClass = ''
      }

    }

    return (
      <div>
        <NodeItem
          text={ node.label }
          onToggle={ this.handleToggle }
          classStyles={ objectClass }/>
        <ul style={ style }>
          { item }
        </ul>
      </div>
    )
  }
}

TreeView.propTypes = {
  node: PropTypes.object.isRequired,
}

export default TreeView
