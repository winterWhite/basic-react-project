import * as React from "react";

const styles = require("./index.scss");

export default class IndexComponent extends React.Component {
  render () {
    return <div className={styles.wrap}>Another Component!</div>
  }
}