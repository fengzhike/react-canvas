'use strict';
import React from 'react';

// 操作按钮
var CanvasBtn = React.createClass({
    clearCanvas:function(){
        this.props.callbackClear();
    },
    revokeCanvas:function(){
        this.props.callbackRevoke();
    },
    saveCanvas:function(){
        this.props.callbackSave();
    },
    render: function () {
        return (
            <div>
                <input className="btn clear" onClick={this.clearCanvas} type="button" value="Clear" />
                <input className="btn revoke" onClick={this.revokeCanvas} type="button" value="Revoke" />
                <input className="btn" onClick={this.saveCanvas} type="button" value="PreView" />
            </div>
        )
    }
})

export default CanvasBtn
