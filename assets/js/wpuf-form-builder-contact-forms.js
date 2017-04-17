;(function($) {
    'use strict';

    /**
     * Only proceed if current page is a 'Profile Forms' form builder page
     */
    if (!$('#wpuf-form-builder.wpuf-form-builder-contact_form').length) {
        // return;
    }

    window.wpuf_forms_mixin_root = {
        data: function () {
            return {
                validation_error_msg: wpuf_form_builder.i18n.email_needed,
            };
        },

        methods: {
            // wpuf_profile must have 'user_email'
            // field template
            validate_form_before_submit: function () {
                return true;
            }
        }
    };

    window.wpuf_forms_mixin_builder_stage = {
        data: function () {
            return {
                form_settings: {
                    submit_text: 'Submit'
                }
            };
        },

        mounted: function () {
            var self = this;
            var wrap = $('#wpuf-metabox-settings-restriction');

            // submit button text
            this.form_settings.submit_text = $('[name="wpuf_settings[submit_text]"]').val();

            $('[name="wpuf_settings[submit_text]"]').on('change', function () {
                self.form_settings.submit_text = $(this).val();
            });


            wrap.on('change', 'input[type=checkbox][name="wpuf_settings[limit_entries]"]', function() {
                if ( $(this).is(':checked') ) {
                    $('.show-if-limit-entry').show();
                } else {
                    $('.show-if-limit-entry').hide();
                }
            });

            wrap.on('change', 'input[type=checkbox][name="wpuf_settings[require_login]"]', function() {
                if ( $(this).is(':checked') ) {
                    $('.show-if-require-login').show();
                } else {
                    $('.show-if-require-login').hide();
                }
            });

            // trigger initial change
            $('input[type=checkbox][name="wpuf_settings[limit_entries]"]').trigger('change');
            $('input[type=checkbox][name="wpuf_settings[require_login]"]').trigger('change');
        }
    };

})(jQuery);
