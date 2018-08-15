import * as React from "react";
import Other from "../Other";

const styles = require("./index.scss");

export default class IndexComponent extends React.Component {
    render () {
        return <div className={styles.wrap}>
          Hello React!afdasfdsdf
          <Other/>
          <img src={require("../../assets/ff.jpeg")} />
        </div>
    }
}