'use strict';

import React from 'react';

// 保存预览
var SaveImg = React.createClass({
    render: function () {
        //this.props.params.id  
        return (
            <img src={this.props.imgUrl} />
        )
    }
})
export default SaveImg
