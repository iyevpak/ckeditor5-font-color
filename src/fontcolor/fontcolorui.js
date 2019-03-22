/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

/**
 * @module font/fontcolor/fontcolorui
 */

import ColorUI from '../ui/colorui';
import { FONT_COLOR } from '../utils';
import fontColorIcon from '../../theme/icons/font-color.svg';

/**
 * The font background color UI plugin. It introduces the `'fontBackgroundColor'` dropdown.
 *
 * @extends module:core/plugin~Plugin
 */
export default class FontColorUI extends ColorUI {
	constructor( editor ) {
		super( editor, {
			commandName: FONT_COLOR,
			componentName: FONT_COLOR,
			icon: fontColorIcon,
			dropdownLabel: 'Font Color'
		} );
	}

	/**
	 * @inheritDoc
	 */
	static get pluginName() {
		return 'FontColorUI';
	}
}
