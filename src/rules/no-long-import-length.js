
"use strict";

module.exports = function(context) {

    return {
        "ImportDeclaration": function(node) {
          var importLength = node.source.range[1];
          if(importLength > 100) {
            context.report(node, 'Maintain a limited import length for a better readable code');
          }
        }
    };

};

module.exports.schema = [];