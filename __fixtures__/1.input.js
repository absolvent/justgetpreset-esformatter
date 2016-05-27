/**
 * Copyright (c) 2016-present, lookly
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

"use strict";

import React from "react";

export default React.createClass({
    "render": function () {
        var foo = 1,
            bar = "world's";

        return (
            <div className="wrapper">
                {/* test */}
                <div></div>
                    <div>
                        <span>{foo}</span>
                    </div>
                Hello, {bar}!

                        <div style={{
                            padding: 4,
                            margin: 1
                        }} className="test">{foo => (
                            <span />
                        )}</div>
            </div>
        );
    }
});
