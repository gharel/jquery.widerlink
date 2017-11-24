(function ($) {
	const defaults = {}

	$.fn.wider = function (options) {
		if (this.length === 0) {
			return this
		}

		// support multiple elements
		if (this.length > 1) {
			this.each(function () {
				console.log($(this))
				$(this).wider(options)
			})
			return this
		}

		const wider = {}

		// set a reference to our slider element
		const el = this

		if ($(el).data('wide')) {
			return
		}

		function init() {
			if ($(el).data('wide')) {
				return
			}

			// merge user-supplied options with the defaults
			wider.settings = $.extend({}, defaults, options)

			$(el).css('cursor', 'pointer').on('click.wider', function () {
				const target = $(this).data('wider-target')
				const $link = $(`[data-wider="${target}"]`)
				window.location.href = $link.prop('href')
			})
		}

		init()

		$(el).data('wide', this)

		// returns the current jQuery object
		return this
	}

	// auto initialization
	jQuery(($) => {
		$('[data-wider-target]').wider()
	})
})(jQuery)
