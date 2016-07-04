;(function($, window, document, undefined){

    //FileChooser constructor
    var Checkbox = function(el, o){
        this.$check = $(el);
        this.$label = $(el).parent('label');
        this.state = this.$check.is(':checked');
    };

    // the plugin prototype
    Checkbox.prototype = {

        init: function() {

            var _t = this,
                $fancyCheck = $('<span class="fancy-check" />')
                    .height(_t.$check.height())
                    .width(_t.$check.width());

            this.$label.addClass('fancy-check');
            this.$check.hide();

            //if native is checked, check fancycheck
            if (_t.state) {$fancyCheck.addClass('checked');}

            //append fancy check
            this.$label.prepend($fancyCheck);

            //bind event on label
            this.$label.on('mouseup', function() {
                $fancyCheck.toggleClass('checked');
            });
        },

        destroy: function() {}
    };

    $.fn.fancyCheck = function(o) {
        return this.each(function() {
            new Checkbox(this, o).init();
        });
    };

})(jQuery, window , document);