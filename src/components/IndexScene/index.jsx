import React from 'react'
import { array, object } from 'prop-types'
import { Card, withStyles } from '@material-ui/core'

// import MyCalendar from './MyCalendar'
import MyTableHead from './MyTableHead'
import MyTableBody from './MyTableBody'

import LocalStorage from 'services/LocalStorage'
import connector from './connector'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: 30,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  card: {
    padding: 20,
    height: '100%',
    background: 'rgba(255, 255, 255, 0.7)',
  },
})

class IndexScene extends React.Component {
  componentDidMount() {
    const { actions, rows } = this.props
    actions.layout.background('/images/blue.jpg')
    actions.header.color('blue')

    document.title = 'Cubex'

    actions.table.getRows()

    if (!LocalStorage.get('rows')) {
      LocalStorage.put('rows', rows)
    }
  }

  componentWillUnmount() {
    const { actions } = this.props
    actions.layout.removeBackground()
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        {/*<MyCalendar />*/}
        <Card className={classes.card}>
          <div>
            <MyTableHead />
            <MyTableBody />
          </div>
        </Card>
      </div>
    )
  }
}

IndexScene.propTypes = {
  classes: object.isRequired,
  actions: object.isRequired,
  rows: array.isRequired,
}

export default withStyles(styles)(connector(IndexScene))
