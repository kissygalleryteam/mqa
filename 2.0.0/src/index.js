/**
 * @fileoverview
 * @author
 * @module mqa
 **/
KISSY.add(function (S, Node,Base) {
    var EMPTY = '';
    var $ = Node.all;
    /**
     *
     * @class Mqa
     * @constructor
     * @extends Base
     */
    function Mqa(comConfig) {
        var self = this;
        //调用父类构造函数
        Mqa.superclass.constructor.call(self, comConfig);
    }
    S.extend(Mqa, Base, /** @lends Mqa.prototype*/{

    }, {ATTRS : /** @lends Mqa*/{

    }});
    return Mqa;
}, {requires:['node', 'base']});



