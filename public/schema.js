const schema = {
	"structs": {
		"Field":{
			"GetCardinal": {
				"In": [],
				"Out": []
			},
			"GetAndMode": {
				"In": [],
				"Out": []
			},
			"SelectValues": {
				"In": [{ "Name": "qFieldValues","DefaultValue": [{"qText": "", "qIsNumeric": false, "qNumber": 0}] }, { "Name": "qToggleMode","DefaultValue": false, "Optional": true }, { "Name": "qSoftLock","DefaultValue": false, "Optional": true }],
				"Out": []
			},
			"Select": {
				"In": [{ "Name": "qMatch","DefaultValue": "" }, { "Name": "qSoftLock","DefaultValue": false, "Optional": true }, { "Name": "qExcludedValuesMode","DefaultValue": 0, "Optional": true }],
				"Out": []
			},
			"ToggleSelect": {
				"In": [{ "Name": "qMatch","DefaultValue": "" }, { "Name": "qSoftLock","DefaultValue": false, "Optional": true }, { "Name": "qExcludedValuesMode","DefaultValue": 0, "Optional": true }],
				"Out": []
			},
			"ClearAllButThis": {
				"In": [{ "Name": "qSoftLock","DefaultValue": false, "Optional": true }],
				"Out": []
			},
			"SelectPossible": {
				"In": [{ "Name": "qSoftLock","DefaultValue": false, "Optional": true }],
				"Out": []
			},
			"SelectExcluded": {
				"In": [{ "Name": "qSoftLock","DefaultValue": false, "Optional": true }],
				"Out": []
			},
			"SelectAll": {
				"In": [{ "Name": "qSoftLock","DefaultValue": false, "Optional": true }],
				"Out": []
			},
			"Lock": {
				"In": [],
				"Out": []
			},
			"Unlock": {
				"In": [],
				"Out": []
			},
			"GetNxProperties": {
				"In": [],
				"Out": [{ "Name": "qProperties" }]
			},
			"SetNxProperties": {
				"In": [{ "Name": "qProperties","DefaultValue": {"qOneAndOnlyOne": false} }],
				"Out": []
			},
			"SetAndMode": {
				"In": [{ "Name": "qAndMode","DefaultValue": false }],
				"Out": []
			},
			"SelectAlternative": {
				"In": [{ "Name": "qSoftLock","DefaultValue": false, "Optional": true }],
				"Out": []
			},
			"LowLevelSelect": {
				"In": [{ "Name": "qValues","DefaultValue": [0] }, { "Name": "qToggleMode","DefaultValue": false }, { "Name": "qSoftLock","DefaultValue": false, "Optional": true }],
				"Out": []
			},
			"Clear": {
				"In": [],
				"Out": []
			}
		},
		"Variable":{
			"GetContent": {
				"In": [],
				"Out": [{ "Name": "qContent" }]
			},
			"GetRawContent": {
				"In": [],
				"Out": []
			},
			"SetContent": {
				"In": [{ "Name": "qContent","DefaultValue": "" }, { "Name": "qUpdateMRU","DefaultValue": false }],
				"Out": []
			},
			"ForceContent": {
				"In": [{ "Name": "qs","DefaultValue": "" }, { "Name": "qd","DefaultValue": 0 }],
				"Out": []
			},
			"GetNxProperties": {
				"In": [],
				"Out": [{ "Name": "qProperties" }]
			},
			"SetNxProperties": {
				"In": [{ "Name": "qProperties","DefaultValue": {"qName": "", "qNumberPresentation": {"qType": 0, "qnDec": 0, "qUseThou": 0, "qFmt": "", "qDec": "", "qThou": ""}, "qIncludeInBookmark": false, "qUsePredefListedValues": false, "qPreDefinedList": [""]} }],
				"Out": []
			}
		},
		"SheetObject":{
			"SetFrameDef": {
				"In": [{ "Name": "qFrame","DefaultValue": {"qBorderWidth": 0, "qBorderEffect": 0, "qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qCaptionFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qName": {"qv": ""}, "qInternalCtlNo": 0, "qRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qBmp_OBSOLETE": [0], "qBmpMode_OBSOLETE": 0, "qMinimizedRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qShowMode": 0, "qDetached": false, "qAllowMinimize": false, "qAutoMinimize": false, "qAllowMaximize": false, "qAllowInfo": false, "qPrintIcon": false, "qCopyIcon": false, "qXLIcon": false, "qSearchIcon": false, "qSelectPossibleIcon": false, "qSelectExcludedIcon": false, "qSelectAllIcon": false, "qClearIcon": false, "qClearOtherIcon": false, "qLockIcon": false, "qHelpText": {"qv": ""}, "qObjectId": "", "qZedLevel": 0, "qShrinkFrameToData": false, "qShowCaption": false, "qMultiLine": 0, "qActiveBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qActiveFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFixCorner": false, "qFixCornerSize": 0, "qRelCornerSize": 0, "qPower": 0, "qRoundedShape": false, "qEnableTopLeftRounded": false, "qEnableTopRightRounded": false, "qEnableBottomLeftRounded": false, "qEnableBottomRightRounded": false, "qLight": 0, "qDark": 0, "qRainbow": false, "qTextAdjustHorizontal": 0, "qTextAdjustVertical": 0, "qShow": {"qAlways": false, "qExpression": {"qv": ""}}, "qOnActivateMacro_OBSOLETE": "", "qOnDeactivateMacro_OBSOLETE": "", "qAllowMoveSize": false, "qAllowCopyClone": false, "qdummy": [false], "qCustomObjectGuid": [0], "qCustomObjectProperties": [0], "qScrollBkgColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollButtonColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollStyle": 0, "qScrollWidth": 0, "qIconColor_OBSOLETE": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qIconStyle_OBSOLETE": 0, "qAllowModify": false, "qCopyImageIcon": false, "qPreserveScrollPosition": false, "qShadowIntensity": 0, "qOnActivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qOnDeactivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qExtension": "", "qBackground": {"qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qImageBlob": [0], "qImageLayout": {"qStretchMode": 0, "qHorizontalAdjust": 0, "qVerticalAdjust": 0, "qAlpha": 0}, "qUseColor": false, "qUseImage": false}, "qMenuIcon": false, "qExtendedProperties": [{"qName": "", "qValue": ""}], "qExtendedValues": [{"qName": "", "qValue": {"qv": ""}}], "qStateName": ""} }],
				"Out": []
			},
			"GetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qIn","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}} }],
				"Out": [{ "Name": "qData" }]
			},
			"SetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qData","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}, "qExpansionInfo": [{"qExcludeList": false, "qPos": {"qDimName": "", "qElemNo": [0], "qElemValues": [[0]]}}], "qLeftCollapsed": false, "qTopCollapsed": false, "qSortData": [{"qName": "", "qReversed": false}], "qDimensionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qExpressionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qUseGraphMode": false, "qGraphMode": 0, "qActiveContainerChildObjectId": "", "qExtendedPivotState": {"qExpressionPosition": 0, "qNumberOfLeftDimensions": 0, "qDimensionNames": [""], "qEnableConditions": [""]}} }],
				"Out": []
			},
			"GetCellsDataForExport": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qData" }]
			},
			"GetCellsLayoutForExport": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			}
		},
		"CustomDropDown":{
			"SetFrameDef": {
				"In": [{ "Name": "qFrame","DefaultValue": {"qBorderWidth": 0, "qBorderEffect": 0, "qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qCaptionFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qName": {"qv": ""}, "qInternalCtlNo": 0, "qRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qBmp_OBSOLETE": [0], "qBmpMode_OBSOLETE": 0, "qMinimizedRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qShowMode": 0, "qDetached": false, "qAllowMinimize": false, "qAutoMinimize": false, "qAllowMaximize": false, "qAllowInfo": false, "qPrintIcon": false, "qCopyIcon": false, "qXLIcon": false, "qSearchIcon": false, "qSelectPossibleIcon": false, "qSelectExcludedIcon": false, "qSelectAllIcon": false, "qClearIcon": false, "qClearOtherIcon": false, "qLockIcon": false, "qHelpText": {"qv": ""}, "qObjectId": "", "qZedLevel": 0, "qShrinkFrameToData": false, "qShowCaption": false, "qMultiLine": 0, "qActiveBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qActiveFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFixCorner": false, "qFixCornerSize": 0, "qRelCornerSize": 0, "qPower": 0, "qRoundedShape": false, "qEnableTopLeftRounded": false, "qEnableTopRightRounded": false, "qEnableBottomLeftRounded": false, "qEnableBottomRightRounded": false, "qLight": 0, "qDark": 0, "qRainbow": false, "qTextAdjustHorizontal": 0, "qTextAdjustVertical": 0, "qShow": {"qAlways": false, "qExpression": {"qv": ""}}, "qOnActivateMacro_OBSOLETE": "", "qOnDeactivateMacro_OBSOLETE": "", "qAllowMoveSize": false, "qAllowCopyClone": false, "qdummy": [false], "qCustomObjectGuid": [0], "qCustomObjectProperties": [0], "qScrollBkgColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollButtonColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollStyle": 0, "qScrollWidth": 0, "qIconColor_OBSOLETE": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qIconStyle_OBSOLETE": 0, "qAllowModify": false, "qCopyImageIcon": false, "qPreserveScrollPosition": false, "qShadowIntensity": 0, "qOnActivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qOnDeactivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qExtension": "", "qBackground": {"qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qImageBlob": [0], "qImageLayout": {"qStretchMode": 0, "qHorizontalAdjust": 0, "qVerticalAdjust": 0, "qAlpha": 0}, "qUseColor": false, "qUseImage": false}, "qMenuIcon": false, "qExtendedProperties": [{"qName": "", "qValue": ""}], "qExtendedValues": [{"qName": "", "qValue": {"qv": ""}}], "qStateName": ""} }],
				"Out": []
			},
			"GetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qIn","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}} }],
				"Out": [{ "Name": "qData" }]
			},
			"SetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qData","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}, "qExpansionInfo": [{"qExcludeList": false, "qPos": {"qDimName": "", "qElemNo": [0], "qElemValues": [[0]]}}], "qLeftCollapsed": false, "qTopCollapsed": false, "qSortData": [{"qName": "", "qReversed": false}], "qDimensionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qExpressionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qUseGraphMode": false, "qGraphMode": 0, "qActiveContainerChildObjectId": "", "qExtendedPivotState": {"qExpressionPosition": 0, "qNumberOfLeftDimensions": 0, "qDimensionNames": [""], "qEnableConditions": [""]}} }],
				"Out": []
			},
			"GetCellsDataForExport": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qData" }]
			},
			"GetCellsLayoutForExport": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			}
		},
		"GraphBasics":{
			"SetFrameDef": {
				"In": [{ "Name": "qFrame","DefaultValue": {"qBorderWidth": 0, "qBorderEffect": 0, "qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qCaptionFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qName": {"qv": ""}, "qInternalCtlNo": 0, "qRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qBmp_OBSOLETE": [0], "qBmpMode_OBSOLETE": 0, "qMinimizedRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qShowMode": 0, "qDetached": false, "qAllowMinimize": false, "qAutoMinimize": false, "qAllowMaximize": false, "qAllowInfo": false, "qPrintIcon": false, "qCopyIcon": false, "qXLIcon": false, "qSearchIcon": false, "qSelectPossibleIcon": false, "qSelectExcludedIcon": false, "qSelectAllIcon": false, "qClearIcon": false, "qClearOtherIcon": false, "qLockIcon": false, "qHelpText": {"qv": ""}, "qObjectId": "", "qZedLevel": 0, "qShrinkFrameToData": false, "qShowCaption": false, "qMultiLine": 0, "qActiveBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qActiveFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFixCorner": false, "qFixCornerSize": 0, "qRelCornerSize": 0, "qPower": 0, "qRoundedShape": false, "qEnableTopLeftRounded": false, "qEnableTopRightRounded": false, "qEnableBottomLeftRounded": false, "qEnableBottomRightRounded": false, "qLight": 0, "qDark": 0, "qRainbow": false, "qTextAdjustHorizontal": 0, "qTextAdjustVertical": 0, "qShow": {"qAlways": false, "qExpression": {"qv": ""}}, "qOnActivateMacro_OBSOLETE": "", "qOnDeactivateMacro_OBSOLETE": "", "qAllowMoveSize": false, "qAllowCopyClone": false, "qdummy": [false], "qCustomObjectGuid": [0], "qCustomObjectProperties": [0], "qScrollBkgColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollButtonColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollStyle": 0, "qScrollWidth": 0, "qIconColor_OBSOLETE": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qIconStyle_OBSOLETE": 0, "qAllowModify": false, "qCopyImageIcon": false, "qPreserveScrollPosition": false, "qShadowIntensity": 0, "qOnActivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qOnDeactivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qExtension": "", "qBackground": {"qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qImageBlob": [0], "qImageLayout": {"qStretchMode": 0, "qHorizontalAdjust": 0, "qVerticalAdjust": 0, "qAlpha": 0}, "qUseColor": false, "qUseImage": false}, "qMenuIcon": false, "qExtendedProperties": [{"qName": "", "qValue": ""}], "qExtendedValues": [{"qName": "", "qValue": {"qv": ""}}], "qStateName": ""} }],
				"Out": []
			},
			"GetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qIn","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}} }],
				"Out": [{ "Name": "qData" }]
			},
			"SetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qData","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}, "qExpansionInfo": [{"qExcludeList": false, "qPos": {"qDimName": "", "qElemNo": [0], "qElemValues": [[0]]}}], "qLeftCollapsed": false, "qTopCollapsed": false, "qSortData": [{"qName": "", "qReversed": false}], "qDimensionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qExpressionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qUseGraphMode": false, "qGraphMode": 0, "qActiveContainerChildObjectId": "", "qExtendedPivotState": {"qExpressionPosition": 0, "qNumberOfLeftDimensions": 0, "qDimensionNames": [""], "qEnableConditions": [""]}} }],
				"Out": []
			},
			"GetCellsDataForExport": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qData" }]
			},
			"GetCellsLayoutForExport": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			}
		},
		"Graph":{
			"SetFrameDef": {
				"In": [{ "Name": "qFrame","DefaultValue": {"qBorderWidth": 0, "qBorderEffect": 0, "qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qCaptionFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qName": {"qv": ""}, "qInternalCtlNo": 0, "qRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qBmp_OBSOLETE": [0], "qBmpMode_OBSOLETE": 0, "qMinimizedRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qShowMode": 0, "qDetached": false, "qAllowMinimize": false, "qAutoMinimize": false, "qAllowMaximize": false, "qAllowInfo": false, "qPrintIcon": false, "qCopyIcon": false, "qXLIcon": false, "qSearchIcon": false, "qSelectPossibleIcon": false, "qSelectExcludedIcon": false, "qSelectAllIcon": false, "qClearIcon": false, "qClearOtherIcon": false, "qLockIcon": false, "qHelpText": {"qv": ""}, "qObjectId": "", "qZedLevel": 0, "qShrinkFrameToData": false, "qShowCaption": false, "qMultiLine": 0, "qActiveBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qActiveFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFixCorner": false, "qFixCornerSize": 0, "qRelCornerSize": 0, "qPower": 0, "qRoundedShape": false, "qEnableTopLeftRounded": false, "qEnableTopRightRounded": false, "qEnableBottomLeftRounded": false, "qEnableBottomRightRounded": false, "qLight": 0, "qDark": 0, "qRainbow": false, "qTextAdjustHorizontal": 0, "qTextAdjustVertical": 0, "qShow": {"qAlways": false, "qExpression": {"qv": ""}}, "qOnActivateMacro_OBSOLETE": "", "qOnDeactivateMacro_OBSOLETE": "", "qAllowMoveSize": false, "qAllowCopyClone": false, "qdummy": [false], "qCustomObjectGuid": [0], "qCustomObjectProperties": [0], "qScrollBkgColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollButtonColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollStyle": 0, "qScrollWidth": 0, "qIconColor_OBSOLETE": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qIconStyle_OBSOLETE": 0, "qAllowModify": false, "qCopyImageIcon": false, "qPreserveScrollPosition": false, "qShadowIntensity": 0, "qOnActivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qOnDeactivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qExtension": "", "qBackground": {"qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qImageBlob": [0], "qImageLayout": {"qStretchMode": 0, "qHorizontalAdjust": 0, "qVerticalAdjust": 0, "qAlpha": 0}, "qUseColor": false, "qUseImage": false}, "qMenuIcon": false, "qExtendedProperties": [{"qName": "", "qValue": ""}], "qExtendedValues": [{"qName": "", "qValue": {"qv": ""}}], "qStateName": ""} }],
				"Out": []
			},
			"GetRowCount": {
				"In": [],
				"Out": []
			},
			"GetColumnCount": {
				"In": [],
				"Out": []
			},
			"GetCells": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qCells" }]
			},
			"GetTableInfo": {
				"In": [],
				"Out": [{ "Name": "qTableInfo" }]
			},
			"GetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qIn","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}} }],
				"Out": [{ "Name": "qData" }]
			},
			"SetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qData","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}, "qExpansionInfo": [{"qExcludeList": false, "qPos": {"qDimName": "", "qElemNo": [0], "qElemValues": [[0]]}}], "qLeftCollapsed": false, "qTopCollapsed": false, "qSortData": [{"qName": "", "qReversed": false}], "qDimensionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qExpressionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qUseGraphMode": false, "qGraphMode": 0, "qActiveContainerChildObjectId": "", "qExtendedPivotState": {"qExpressionPosition": 0, "qNumberOfLeftDimensions": 0, "qDimensionNames": [""], "qEnableConditions": [""]}} }],
				"Out": []
			},
			"GetCellsDataForExport": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qData" }]
			},
			"GetCellsLayoutForExport": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			}
		},
		"StraightTableBox":{
			"GetRowCount": {
				"In": [],
				"Out": []
			},
			"GetColumnCount": {
				"In": [],
				"Out": []
			},
			"GetCells": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qCells" }]
			},
			"GetTableInfo": {
				"In": [],
				"Out": [{ "Name": "qTableInfo" }]
			},
			"SetFrameDef": {
				"In": [{ "Name": "qFrame","DefaultValue": {"qBorderWidth": 0, "qBorderEffect": 0, "qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qCaptionFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qName": {"qv": ""}, "qInternalCtlNo": 0, "qRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qBmp_OBSOLETE": [0], "qBmpMode_OBSOLETE": 0, "qMinimizedRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qShowMode": 0, "qDetached": false, "qAllowMinimize": false, "qAutoMinimize": false, "qAllowMaximize": false, "qAllowInfo": false, "qPrintIcon": false, "qCopyIcon": false, "qXLIcon": false, "qSearchIcon": false, "qSelectPossibleIcon": false, "qSelectExcludedIcon": false, "qSelectAllIcon": false, "qClearIcon": false, "qClearOtherIcon": false, "qLockIcon": false, "qHelpText": {"qv": ""}, "qObjectId": "", "qZedLevel": 0, "qShrinkFrameToData": false, "qShowCaption": false, "qMultiLine": 0, "qActiveBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qActiveFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFixCorner": false, "qFixCornerSize": 0, "qRelCornerSize": 0, "qPower": 0, "qRoundedShape": false, "qEnableTopLeftRounded": false, "qEnableTopRightRounded": false, "qEnableBottomLeftRounded": false, "qEnableBottomRightRounded": false, "qLight": 0, "qDark": 0, "qRainbow": false, "qTextAdjustHorizontal": 0, "qTextAdjustVertical": 0, "qShow": {"qAlways": false, "qExpression": {"qv": ""}}, "qOnActivateMacro_OBSOLETE": "", "qOnDeactivateMacro_OBSOLETE": "", "qAllowMoveSize": false, "qAllowCopyClone": false, "qdummy": [false], "qCustomObjectGuid": [0], "qCustomObjectProperties": [0], "qScrollBkgColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollButtonColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollStyle": 0, "qScrollWidth": 0, "qIconColor_OBSOLETE": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qIconStyle_OBSOLETE": 0, "qAllowModify": false, "qCopyImageIcon": false, "qPreserveScrollPosition": false, "qShadowIntensity": 0, "qOnActivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qOnDeactivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qExtension": "", "qBackground": {"qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qImageBlob": [0], "qImageLayout": {"qStretchMode": 0, "qHorizontalAdjust": 0, "qVerticalAdjust": 0, "qAlpha": 0}, "qUseColor": false, "qUseImage": false}, "qMenuIcon": false, "qExtendedProperties": [{"qName": "", "qValue": ""}], "qExtendedValues": [{"qName": "", "qValue": {"qv": ""}}], "qStateName": ""} }],
				"Out": []
			},
			"GetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qIn","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}} }],
				"Out": [{ "Name": "qData" }]
			},
			"SetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qData","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}, "qExpansionInfo": [{"qExcludeList": false, "qPos": {"qDimName": "", "qElemNo": [0], "qElemValues": [[0]]}}], "qLeftCollapsed": false, "qTopCollapsed": false, "qSortData": [{"qName": "", "qReversed": false}], "qDimensionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qExpressionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qUseGraphMode": false, "qGraphMode": 0, "qActiveContainerChildObjectId": "", "qExtendedPivotState": {"qExpressionPosition": 0, "qNumberOfLeftDimensions": 0, "qDimensionNames": [""], "qEnableConditions": [""]}} }],
				"Out": []
			},
			"GetCellsDataForExport": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qData" }]
			},
			"GetCellsLayoutForExport": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			}
		},
		"PivotTableBox":{
			"GetRowCount": {
				"In": [],
				"Out": []
			},
			"GetColumnCount": {
				"In": [],
				"Out": []
			},
			"GetCells": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qCells" }]
			},
			"GetTableInfo": {
				"In": [],
				"Out": [{ "Name": "qTableInfo" }]
			},
			"SetFrameDef": {
				"In": [{ "Name": "qFrame","DefaultValue": {"qBorderWidth": 0, "qBorderEffect": 0, "qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qCaptionFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qName": {"qv": ""}, "qInternalCtlNo": 0, "qRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qBmp_OBSOLETE": [0], "qBmpMode_OBSOLETE": 0, "qMinimizedRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qShowMode": 0, "qDetached": false, "qAllowMinimize": false, "qAutoMinimize": false, "qAllowMaximize": false, "qAllowInfo": false, "qPrintIcon": false, "qCopyIcon": false, "qXLIcon": false, "qSearchIcon": false, "qSelectPossibleIcon": false, "qSelectExcludedIcon": false, "qSelectAllIcon": false, "qClearIcon": false, "qClearOtherIcon": false, "qLockIcon": false, "qHelpText": {"qv": ""}, "qObjectId": "", "qZedLevel": 0, "qShrinkFrameToData": false, "qShowCaption": false, "qMultiLine": 0, "qActiveBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qActiveFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFixCorner": false, "qFixCornerSize": 0, "qRelCornerSize": 0, "qPower": 0, "qRoundedShape": false, "qEnableTopLeftRounded": false, "qEnableTopRightRounded": false, "qEnableBottomLeftRounded": false, "qEnableBottomRightRounded": false, "qLight": 0, "qDark": 0, "qRainbow": false, "qTextAdjustHorizontal": 0, "qTextAdjustVertical": 0, "qShow": {"qAlways": false, "qExpression": {"qv": ""}}, "qOnActivateMacro_OBSOLETE": "", "qOnDeactivateMacro_OBSOLETE": "", "qAllowMoveSize": false, "qAllowCopyClone": false, "qdummy": [false], "qCustomObjectGuid": [0], "qCustomObjectProperties": [0], "qScrollBkgColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollButtonColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollStyle": 0, "qScrollWidth": 0, "qIconColor_OBSOLETE": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qIconStyle_OBSOLETE": 0, "qAllowModify": false, "qCopyImageIcon": false, "qPreserveScrollPosition": false, "qShadowIntensity": 0, "qOnActivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qOnDeactivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qExtension": "", "qBackground": {"qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qImageBlob": [0], "qImageLayout": {"qStretchMode": 0, "qHorizontalAdjust": 0, "qVerticalAdjust": 0, "qAlpha": 0}, "qUseColor": false, "qUseImage": false}, "qMenuIcon": false, "qExtendedProperties": [{"qName": "", "qValue": ""}], "qExtendedValues": [{"qName": "", "qValue": {"qv": ""}}], "qStateName": ""} }],
				"Out": []
			},
			"GetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qIn","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}} }],
				"Out": [{ "Name": "qData" }]
			},
			"SetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qData","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}, "qExpansionInfo": [{"qExcludeList": false, "qPos": {"qDimName": "", "qElemNo": [0], "qElemValues": [[0]]}}], "qLeftCollapsed": false, "qTopCollapsed": false, "qSortData": [{"qName": "", "qReversed": false}], "qDimensionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qExpressionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qUseGraphMode": false, "qGraphMode": 0, "qActiveContainerChildObjectId": "", "qExtendedPivotState": {"qExpressionPosition": 0, "qNumberOfLeftDimensions": 0, "qDimensionNames": [""], "qEnableConditions": [""]}} }],
				"Out": []
			},
			"GetCellsDataForExport": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qData" }]
			},
			"GetCellsLayoutForExport": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			}
		},
		"CurrentSelection":{
			"GetRowCount": {
				"In": [],
				"Out": []
			},
			"GetColumnCount": {
				"In": [],
				"Out": []
			},
			"GetCells": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qCells" }]
			},
			"GetTableInfo": {
				"In": [],
				"Out": [{ "Name": "qTableInfo" }]
			},
			"SetFrameDef": {
				"In": [{ "Name": "qFrame","DefaultValue": {"qBorderWidth": 0, "qBorderEffect": 0, "qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qCaptionFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qName": {"qv": ""}, "qInternalCtlNo": 0, "qRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qBmp_OBSOLETE": [0], "qBmpMode_OBSOLETE": 0, "qMinimizedRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qShowMode": 0, "qDetached": false, "qAllowMinimize": false, "qAutoMinimize": false, "qAllowMaximize": false, "qAllowInfo": false, "qPrintIcon": false, "qCopyIcon": false, "qXLIcon": false, "qSearchIcon": false, "qSelectPossibleIcon": false, "qSelectExcludedIcon": false, "qSelectAllIcon": false, "qClearIcon": false, "qClearOtherIcon": false, "qLockIcon": false, "qHelpText": {"qv": ""}, "qObjectId": "", "qZedLevel": 0, "qShrinkFrameToData": false, "qShowCaption": false, "qMultiLine": 0, "qActiveBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qActiveFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFixCorner": false, "qFixCornerSize": 0, "qRelCornerSize": 0, "qPower": 0, "qRoundedShape": false, "qEnableTopLeftRounded": false, "qEnableTopRightRounded": false, "qEnableBottomLeftRounded": false, "qEnableBottomRightRounded": false, "qLight": 0, "qDark": 0, "qRainbow": false, "qTextAdjustHorizontal": 0, "qTextAdjustVertical": 0, "qShow": {"qAlways": false, "qExpression": {"qv": ""}}, "qOnActivateMacro_OBSOLETE": "", "qOnDeactivateMacro_OBSOLETE": "", "qAllowMoveSize": false, "qAllowCopyClone": false, "qdummy": [false], "qCustomObjectGuid": [0], "qCustomObjectProperties": [0], "qScrollBkgColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollButtonColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollStyle": 0, "qScrollWidth": 0, "qIconColor_OBSOLETE": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qIconStyle_OBSOLETE": 0, "qAllowModify": false, "qCopyImageIcon": false, "qPreserveScrollPosition": false, "qShadowIntensity": 0, "qOnActivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qOnDeactivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qExtension": "", "qBackground": {"qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qImageBlob": [0], "qImageLayout": {"qStretchMode": 0, "qHorizontalAdjust": 0, "qVerticalAdjust": 0, "qAlpha": 0}, "qUseColor": false, "qUseImage": false}, "qMenuIcon": false, "qExtendedProperties": [{"qName": "", "qValue": ""}], "qExtendedValues": [{"qName": "", "qValue": {"qv": ""}}], "qStateName": ""} }],
				"Out": []
			},
			"GetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qIn","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}} }],
				"Out": [{ "Name": "qData" }]
			},
			"SetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qData","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}, "qExpansionInfo": [{"qExcludeList": false, "qPos": {"qDimName": "", "qElemNo": [0], "qElemValues": [[0]]}}], "qLeftCollapsed": false, "qTopCollapsed": false, "qSortData": [{"qName": "", "qReversed": false}], "qDimensionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qExpressionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qUseGraphMode": false, "qGraphMode": 0, "qActiveContainerChildObjectId": "", "qExtendedPivotState": {"qExpressionPosition": 0, "qNumberOfLeftDimensions": 0, "qDimensionNames": [""], "qEnableConditions": [""]}} }],
				"Out": []
			},
			"GetCellsDataForExport": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qData" }]
			},
			"GetCellsLayoutForExport": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			}
		},
		"InputBox":{
			"SetFrameDef": {
				"In": [{ "Name": "qFrame","DefaultValue": {"qBorderWidth": 0, "qBorderEffect": 0, "qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qCaptionFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qName": {"qv": ""}, "qInternalCtlNo": 0, "qRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qBmp_OBSOLETE": [0], "qBmpMode_OBSOLETE": 0, "qMinimizedRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qShowMode": 0, "qDetached": false, "qAllowMinimize": false, "qAutoMinimize": false, "qAllowMaximize": false, "qAllowInfo": false, "qPrintIcon": false, "qCopyIcon": false, "qXLIcon": false, "qSearchIcon": false, "qSelectPossibleIcon": false, "qSelectExcludedIcon": false, "qSelectAllIcon": false, "qClearIcon": false, "qClearOtherIcon": false, "qLockIcon": false, "qHelpText": {"qv": ""}, "qObjectId": "", "qZedLevel": 0, "qShrinkFrameToData": false, "qShowCaption": false, "qMultiLine": 0, "qActiveBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qActiveFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFixCorner": false, "qFixCornerSize": 0, "qRelCornerSize": 0, "qPower": 0, "qRoundedShape": false, "qEnableTopLeftRounded": false, "qEnableTopRightRounded": false, "qEnableBottomLeftRounded": false, "qEnableBottomRightRounded": false, "qLight": 0, "qDark": 0, "qRainbow": false, "qTextAdjustHorizontal": 0, "qTextAdjustVertical": 0, "qShow": {"qAlways": false, "qExpression": {"qv": ""}}, "qOnActivateMacro_OBSOLETE": "", "qOnDeactivateMacro_OBSOLETE": "", "qAllowMoveSize": false, "qAllowCopyClone": false, "qdummy": [false], "qCustomObjectGuid": [0], "qCustomObjectProperties": [0], "qScrollBkgColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollButtonColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollStyle": 0, "qScrollWidth": 0, "qIconColor_OBSOLETE": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qIconStyle_OBSOLETE": 0, "qAllowModify": false, "qCopyImageIcon": false, "qPreserveScrollPosition": false, "qShadowIntensity": 0, "qOnActivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qOnDeactivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qExtension": "", "qBackground": {"qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qImageBlob": [0], "qImageLayout": {"qStretchMode": 0, "qHorizontalAdjust": 0, "qVerticalAdjust": 0, "qAlpha": 0}, "qUseColor": false, "qUseImage": false}, "qMenuIcon": false, "qExtendedProperties": [{"qName": "", "qValue": ""}], "qExtendedValues": [{"qName": "", "qValue": {"qv": ""}}], "qStateName": ""} }],
				"Out": []
			},
			"GetRowCount": {
				"In": [],
				"Out": []
			},
			"GetColumnCount": {
				"In": [],
				"Out": []
			},
			"GetCells": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qCells" }]
			},
			"GetTableInfo": {
				"In": [],
				"Out": [{ "Name": "qTableInfo" }]
			},
			"GetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qIn","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}} }],
				"Out": [{ "Name": "qData" }]
			},
			"SetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qData","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}, "qExpansionInfo": [{"qExcludeList": false, "qPos": {"qDimName": "", "qElemNo": [0], "qElemValues": [[0]]}}], "qLeftCollapsed": false, "qTopCollapsed": false, "qSortData": [{"qName": "", "qReversed": false}], "qDimensionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qExpressionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qUseGraphMode": false, "qGraphMode": 0, "qActiveContainerChildObjectId": "", "qExtendedPivotState": {"qExpressionPosition": 0, "qNumberOfLeftDimensions": 0, "qDimensionNames": [""], "qEnableConditions": [""]}} }],
				"Out": []
			},
			"GetCellsDataForExport": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qData" }]
			},
			"GetCellsLayoutForExport": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			}
		},
		"SearchObject":{
			"SetFrameDef": {
				"In": [{ "Name": "qFrame","DefaultValue": {"qBorderWidth": 0, "qBorderEffect": 0, "qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qCaptionFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qName": {"qv": ""}, "qInternalCtlNo": 0, "qRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qBmp_OBSOLETE": [0], "qBmpMode_OBSOLETE": 0, "qMinimizedRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qShowMode": 0, "qDetached": false, "qAllowMinimize": false, "qAutoMinimize": false, "qAllowMaximize": false, "qAllowInfo": false, "qPrintIcon": false, "qCopyIcon": false, "qXLIcon": false, "qSearchIcon": false, "qSelectPossibleIcon": false, "qSelectExcludedIcon": false, "qSelectAllIcon": false, "qClearIcon": false, "qClearOtherIcon": false, "qLockIcon": false, "qHelpText": {"qv": ""}, "qObjectId": "", "qZedLevel": 0, "qShrinkFrameToData": false, "qShowCaption": false, "qMultiLine": 0, "qActiveBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qActiveFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFixCorner": false, "qFixCornerSize": 0, "qRelCornerSize": 0, "qPower": 0, "qRoundedShape": false, "qEnableTopLeftRounded": false, "qEnableTopRightRounded": false, "qEnableBottomLeftRounded": false, "qEnableBottomRightRounded": false, "qLight": 0, "qDark": 0, "qRainbow": false, "qTextAdjustHorizontal": 0, "qTextAdjustVertical": 0, "qShow": {"qAlways": false, "qExpression": {"qv": ""}}, "qOnActivateMacro_OBSOLETE": "", "qOnDeactivateMacro_OBSOLETE": "", "qAllowMoveSize": false, "qAllowCopyClone": false, "qdummy": [false], "qCustomObjectGuid": [0], "qCustomObjectProperties": [0], "qScrollBkgColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollButtonColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollStyle": 0, "qScrollWidth": 0, "qIconColor_OBSOLETE": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qIconStyle_OBSOLETE": 0, "qAllowModify": false, "qCopyImageIcon": false, "qPreserveScrollPosition": false, "qShadowIntensity": 0, "qOnActivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qOnDeactivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qExtension": "", "qBackground": {"qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qImageBlob": [0], "qImageLayout": {"qStretchMode": 0, "qHorizontalAdjust": 0, "qVerticalAdjust": 0, "qAlpha": 0}, "qUseColor": false, "qUseImage": false}, "qMenuIcon": false, "qExtendedProperties": [{"qName": "", "qValue": ""}], "qExtendedValues": [{"qName": "", "qValue": {"qv": ""}}], "qStateName": ""} }],
				"Out": []
			},
			"GetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qIn","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}} }],
				"Out": [{ "Name": "qData" }]
			},
			"SetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qData","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}, "qExpansionInfo": [{"qExcludeList": false, "qPos": {"qDimName": "", "qElemNo": [0], "qElemValues": [[0]]}}], "qLeftCollapsed": false, "qTopCollapsed": false, "qSortData": [{"qName": "", "qReversed": false}], "qDimensionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qExpressionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qUseGraphMode": false, "qGraphMode": 0, "qActiveContainerChildObjectId": "", "qExtendedPivotState": {"qExpressionPosition": 0, "qNumberOfLeftDimensions": 0, "qDimensionNames": [""], "qEnableConditions": [""]}} }],
				"Out": []
			},
			"GetCellsDataForExport": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qData" }]
			},
			"GetCellsLayoutForExport": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			}
		},
		"Container":{
			"SetFrameDef": {
				"In": [{ "Name": "qFrame","DefaultValue": {"qBorderWidth": 0, "qBorderEffect": 0, "qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qCaptionFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qName": {"qv": ""}, "qInternalCtlNo": 0, "qRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qBmp_OBSOLETE": [0], "qBmpMode_OBSOLETE": 0, "qMinimizedRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qShowMode": 0, "qDetached": false, "qAllowMinimize": false, "qAutoMinimize": false, "qAllowMaximize": false, "qAllowInfo": false, "qPrintIcon": false, "qCopyIcon": false, "qXLIcon": false, "qSearchIcon": false, "qSelectPossibleIcon": false, "qSelectExcludedIcon": false, "qSelectAllIcon": false, "qClearIcon": false, "qClearOtherIcon": false, "qLockIcon": false, "qHelpText": {"qv": ""}, "qObjectId": "", "qZedLevel": 0, "qShrinkFrameToData": false, "qShowCaption": false, "qMultiLine": 0, "qActiveBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qActiveFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFixCorner": false, "qFixCornerSize": 0, "qRelCornerSize": 0, "qPower": 0, "qRoundedShape": false, "qEnableTopLeftRounded": false, "qEnableTopRightRounded": false, "qEnableBottomLeftRounded": false, "qEnableBottomRightRounded": false, "qLight": 0, "qDark": 0, "qRainbow": false, "qTextAdjustHorizontal": 0, "qTextAdjustVertical": 0, "qShow": {"qAlways": false, "qExpression": {"qv": ""}}, "qOnActivateMacro_OBSOLETE": "", "qOnDeactivateMacro_OBSOLETE": "", "qAllowMoveSize": false, "qAllowCopyClone": false, "qdummy": [false], "qCustomObjectGuid": [0], "qCustomObjectProperties": [0], "qScrollBkgColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollButtonColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollStyle": 0, "qScrollWidth": 0, "qIconColor_OBSOLETE": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qIconStyle_OBSOLETE": 0, "qAllowModify": false, "qCopyImageIcon": false, "qPreserveScrollPosition": false, "qShadowIntensity": 0, "qOnActivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qOnDeactivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qExtension": "", "qBackground": {"qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qImageBlob": [0], "qImageLayout": {"qStretchMode": 0, "qHorizontalAdjust": 0, "qVerticalAdjust": 0, "qAlpha": 0}, "qUseColor": false, "qUseImage": false}, "qMenuIcon": false, "qExtendedProperties": [{"qName": "", "qValue": ""}], "qExtendedValues": [{"qName": "", "qValue": {"qv": ""}}], "qStateName": ""} }],
				"Out": []
			},
			"GetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qIn","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}} }],
				"Out": [{ "Name": "qData" }]
			},
			"SetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qData","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}, "qExpansionInfo": [{"qExcludeList": false, "qPos": {"qDimName": "", "qElemNo": [0], "qElemValues": [[0]]}}], "qLeftCollapsed": false, "qTopCollapsed": false, "qSortData": [{"qName": "", "qReversed": false}], "qDimensionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qExpressionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qUseGraphMode": false, "qGraphMode": 0, "qActiveContainerChildObjectId": "", "qExtendedPivotState": {"qExpressionPosition": 0, "qNumberOfLeftDimensions": 0, "qDimensionNames": [""], "qEnableConditions": [""]}} }],
				"Out": []
			},
			"GetCellsDataForExport": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qData" }]
			},
			"GetCellsLayoutForExport": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			}
		},
		"ListBox":{
			"GetRowCount": {
				"In": [],
				"Out": []
			},
			"GetColumnCount": {
				"In": [],
				"Out": []
			},
			"GetCells": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qCells" }]
			},
			"GetTableInfo": {
				"In": [],
				"Out": [{ "Name": "qTableInfo" }]
			},
			"SetFrameDef": {
				"In": [{ "Name": "qFrame","DefaultValue": {"qBorderWidth": 0, "qBorderEffect": 0, "qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qCaptionFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qName": {"qv": ""}, "qInternalCtlNo": 0, "qRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qBmp_OBSOLETE": [0], "qBmpMode_OBSOLETE": 0, "qMinimizedRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qShowMode": 0, "qDetached": false, "qAllowMinimize": false, "qAutoMinimize": false, "qAllowMaximize": false, "qAllowInfo": false, "qPrintIcon": false, "qCopyIcon": false, "qXLIcon": false, "qSearchIcon": false, "qSelectPossibleIcon": false, "qSelectExcludedIcon": false, "qSelectAllIcon": false, "qClearIcon": false, "qClearOtherIcon": false, "qLockIcon": false, "qHelpText": {"qv": ""}, "qObjectId": "", "qZedLevel": 0, "qShrinkFrameToData": false, "qShowCaption": false, "qMultiLine": 0, "qActiveBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qActiveFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFixCorner": false, "qFixCornerSize": 0, "qRelCornerSize": 0, "qPower": 0, "qRoundedShape": false, "qEnableTopLeftRounded": false, "qEnableTopRightRounded": false, "qEnableBottomLeftRounded": false, "qEnableBottomRightRounded": false, "qLight": 0, "qDark": 0, "qRainbow": false, "qTextAdjustHorizontal": 0, "qTextAdjustVertical": 0, "qShow": {"qAlways": false, "qExpression": {"qv": ""}}, "qOnActivateMacro_OBSOLETE": "", "qOnDeactivateMacro_OBSOLETE": "", "qAllowMoveSize": false, "qAllowCopyClone": false, "qdummy": [false], "qCustomObjectGuid": [0], "qCustomObjectProperties": [0], "qScrollBkgColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollButtonColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollStyle": 0, "qScrollWidth": 0, "qIconColor_OBSOLETE": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qIconStyle_OBSOLETE": 0, "qAllowModify": false, "qCopyImageIcon": false, "qPreserveScrollPosition": false, "qShadowIntensity": 0, "qOnActivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qOnDeactivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qExtension": "", "qBackground": {"qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qImageBlob": [0], "qImageLayout": {"qStretchMode": 0, "qHorizontalAdjust": 0, "qVerticalAdjust": 0, "qAlpha": 0}, "qUseColor": false, "qUseImage": false}, "qMenuIcon": false, "qExtendedProperties": [{"qName": "", "qValue": ""}], "qExtendedValues": [{"qName": "", "qValue": {"qv": ""}}], "qStateName": ""} }],
				"Out": []
			},
			"GetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qIn","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}} }],
				"Out": [{ "Name": "qData" }]
			},
			"SetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qData","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}, "qExpansionInfo": [{"qExcludeList": false, "qPos": {"qDimName": "", "qElemNo": [0], "qElemValues": [[0]]}}], "qLeftCollapsed": false, "qTopCollapsed": false, "qSortData": [{"qName": "", "qReversed": false}], "qDimensionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qExpressionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qUseGraphMode": false, "qGraphMode": 0, "qActiveContainerChildObjectId": "", "qExtendedPivotState": {"qExpressionPosition": 0, "qNumberOfLeftDimensions": 0, "qDimensionNames": [""], "qEnableConditions": [""]}} }],
				"Out": []
			},
			"GetCellsDataForExport": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qData" }]
			},
			"GetCellsLayoutForExport": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			}
		},
		"MultiBox":{
			"SetFrameDef": {
				"In": [{ "Name": "qFrame","DefaultValue": {"qBorderWidth": 0, "qBorderEffect": 0, "qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qCaptionFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qName": {"qv": ""}, "qInternalCtlNo": 0, "qRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qBmp_OBSOLETE": [0], "qBmpMode_OBSOLETE": 0, "qMinimizedRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qShowMode": 0, "qDetached": false, "qAllowMinimize": false, "qAutoMinimize": false, "qAllowMaximize": false, "qAllowInfo": false, "qPrintIcon": false, "qCopyIcon": false, "qXLIcon": false, "qSearchIcon": false, "qSelectPossibleIcon": false, "qSelectExcludedIcon": false, "qSelectAllIcon": false, "qClearIcon": false, "qClearOtherIcon": false, "qLockIcon": false, "qHelpText": {"qv": ""}, "qObjectId": "", "qZedLevel": 0, "qShrinkFrameToData": false, "qShowCaption": false, "qMultiLine": 0, "qActiveBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qActiveFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFixCorner": false, "qFixCornerSize": 0, "qRelCornerSize": 0, "qPower": 0, "qRoundedShape": false, "qEnableTopLeftRounded": false, "qEnableTopRightRounded": false, "qEnableBottomLeftRounded": false, "qEnableBottomRightRounded": false, "qLight": 0, "qDark": 0, "qRainbow": false, "qTextAdjustHorizontal": 0, "qTextAdjustVertical": 0, "qShow": {"qAlways": false, "qExpression": {"qv": ""}}, "qOnActivateMacro_OBSOLETE": "", "qOnDeactivateMacro_OBSOLETE": "", "qAllowMoveSize": false, "qAllowCopyClone": false, "qdummy": [false], "qCustomObjectGuid": [0], "qCustomObjectProperties": [0], "qScrollBkgColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollButtonColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollStyle": 0, "qScrollWidth": 0, "qIconColor_OBSOLETE": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qIconStyle_OBSOLETE": 0, "qAllowModify": false, "qCopyImageIcon": false, "qPreserveScrollPosition": false, "qShadowIntensity": 0, "qOnActivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qOnDeactivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qExtension": "", "qBackground": {"qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qImageBlob": [0], "qImageLayout": {"qStretchMode": 0, "qHorizontalAdjust": 0, "qVerticalAdjust": 0, "qAlpha": 0}, "qUseColor": false, "qUseImage": false}, "qMenuIcon": false, "qExtendedProperties": [{"qName": "", "qValue": ""}], "qExtendedValues": [{"qName": "", "qValue": {"qv": ""}}], "qStateName": ""} }],
				"Out": []
			},
			"GetRowCount": {
				"In": [],
				"Out": []
			},
			"GetColumnCount": {
				"In": [],
				"Out": []
			},
			"GetCells": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qCells" }]
			},
			"GetTableInfo": {
				"In": [],
				"Out": [{ "Name": "qTableInfo" }]
			},
			"GetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qIn","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}} }],
				"Out": [{ "Name": "qData" }]
			},
			"SetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qData","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}, "qExpansionInfo": [{"qExcludeList": false, "qPos": {"qDimName": "", "qElemNo": [0], "qElemValues": [[0]]}}], "qLeftCollapsed": false, "qTopCollapsed": false, "qSortData": [{"qName": "", "qReversed": false}], "qDimensionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qExpressionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qUseGraphMode": false, "qGraphMode": 0, "qActiveContainerChildObjectId": "", "qExtendedPivotState": {"qExpressionPosition": 0, "qNumberOfLeftDimensions": 0, "qDimensionNames": [""], "qEnableConditions": [""]}} }],
				"Out": []
			},
			"GetCellsDataForExport": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qData" }]
			},
			"GetCellsLayoutForExport": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			}
		},
		"Button":{
			"SetFrameDef": {
				"In": [{ "Name": "qFrame","DefaultValue": {"qBorderWidth": 0, "qBorderEffect": 0, "qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qCaptionFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qName": {"qv": ""}, "qInternalCtlNo": 0, "qRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qBmp_OBSOLETE": [0], "qBmpMode_OBSOLETE": 0, "qMinimizedRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qShowMode": 0, "qDetached": false, "qAllowMinimize": false, "qAutoMinimize": false, "qAllowMaximize": false, "qAllowInfo": false, "qPrintIcon": false, "qCopyIcon": false, "qXLIcon": false, "qSearchIcon": false, "qSelectPossibleIcon": false, "qSelectExcludedIcon": false, "qSelectAllIcon": false, "qClearIcon": false, "qClearOtherIcon": false, "qLockIcon": false, "qHelpText": {"qv": ""}, "qObjectId": "", "qZedLevel": 0, "qShrinkFrameToData": false, "qShowCaption": false, "qMultiLine": 0, "qActiveBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qActiveFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFixCorner": false, "qFixCornerSize": 0, "qRelCornerSize": 0, "qPower": 0, "qRoundedShape": false, "qEnableTopLeftRounded": false, "qEnableTopRightRounded": false, "qEnableBottomLeftRounded": false, "qEnableBottomRightRounded": false, "qLight": 0, "qDark": 0, "qRainbow": false, "qTextAdjustHorizontal": 0, "qTextAdjustVertical": 0, "qShow": {"qAlways": false, "qExpression": {"qv": ""}}, "qOnActivateMacro_OBSOLETE": "", "qOnDeactivateMacro_OBSOLETE": "", "qAllowMoveSize": false, "qAllowCopyClone": false, "qdummy": [false], "qCustomObjectGuid": [0], "qCustomObjectProperties": [0], "qScrollBkgColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollButtonColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollStyle": 0, "qScrollWidth": 0, "qIconColor_OBSOLETE": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qIconStyle_OBSOLETE": 0, "qAllowModify": false, "qCopyImageIcon": false, "qPreserveScrollPosition": false, "qShadowIntensity": 0, "qOnActivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qOnDeactivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qExtension": "", "qBackground": {"qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qImageBlob": [0], "qImageLayout": {"qStretchMode": 0, "qHorizontalAdjust": 0, "qVerticalAdjust": 0, "qAlpha": 0}, "qUseColor": false, "qUseImage": false}, "qMenuIcon": false, "qExtendedProperties": [{"qName": "", "qValue": ""}], "qExtendedValues": [{"qName": "", "qValue": {"qv": ""}}], "qStateName": ""} }],
				"Out": []
			},
			"GetRowCount": {
				"In": [],
				"Out": []
			},
			"GetColumnCount": {
				"In": [],
				"Out": []
			},
			"GetCells": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qCells" }]
			},
			"GetTableInfo": {
				"In": [],
				"Out": [{ "Name": "qTableInfo" }]
			},
			"GetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qIn","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}} }],
				"Out": [{ "Name": "qData" }]
			},
			"SetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qData","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}, "qExpansionInfo": [{"qExcludeList": false, "qPos": {"qDimName": "", "qElemNo": [0], "qElemValues": [[0]]}}], "qLeftCollapsed": false, "qTopCollapsed": false, "qSortData": [{"qName": "", "qReversed": false}], "qDimensionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qExpressionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qUseGraphMode": false, "qGraphMode": 0, "qActiveContainerChildObjectId": "", "qExtendedPivotState": {"qExpressionPosition": 0, "qNumberOfLeftDimensions": 0, "qDimensionNames": [""], "qEnableConditions": [""]}} }],
				"Out": []
			},
			"GetCellsDataForExport": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qData" }]
			},
			"GetCellsLayoutForExport": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			}
		},
		"TextObject":{
			"SetFrameDef": {
				"In": [{ "Name": "qFrame","DefaultValue": {"qBorderWidth": 0, "qBorderEffect": 0, "qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qCaptionFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qName": {"qv": ""}, "qInternalCtlNo": 0, "qRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qBmp_OBSOLETE": [0], "qBmpMode_OBSOLETE": 0, "qMinimizedRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qShowMode": 0, "qDetached": false, "qAllowMinimize": false, "qAutoMinimize": false, "qAllowMaximize": false, "qAllowInfo": false, "qPrintIcon": false, "qCopyIcon": false, "qXLIcon": false, "qSearchIcon": false, "qSelectPossibleIcon": false, "qSelectExcludedIcon": false, "qSelectAllIcon": false, "qClearIcon": false, "qClearOtherIcon": false, "qLockIcon": false, "qHelpText": {"qv": ""}, "qObjectId": "", "qZedLevel": 0, "qShrinkFrameToData": false, "qShowCaption": false, "qMultiLine": 0, "qActiveBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qActiveFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFixCorner": false, "qFixCornerSize": 0, "qRelCornerSize": 0, "qPower": 0, "qRoundedShape": false, "qEnableTopLeftRounded": false, "qEnableTopRightRounded": false, "qEnableBottomLeftRounded": false, "qEnableBottomRightRounded": false, "qLight": 0, "qDark": 0, "qRainbow": false, "qTextAdjustHorizontal": 0, "qTextAdjustVertical": 0, "qShow": {"qAlways": false, "qExpression": {"qv": ""}}, "qOnActivateMacro_OBSOLETE": "", "qOnDeactivateMacro_OBSOLETE": "", "qAllowMoveSize": false, "qAllowCopyClone": false, "qdummy": [false], "qCustomObjectGuid": [0], "qCustomObjectProperties": [0], "qScrollBkgColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollButtonColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollStyle": 0, "qScrollWidth": 0, "qIconColor_OBSOLETE": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qIconStyle_OBSOLETE": 0, "qAllowModify": false, "qCopyImageIcon": false, "qPreserveScrollPosition": false, "qShadowIntensity": 0, "qOnActivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qOnDeactivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qExtension": "", "qBackground": {"qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qImageBlob": [0], "qImageLayout": {"qStretchMode": 0, "qHorizontalAdjust": 0, "qVerticalAdjust": 0, "qAlpha": 0}, "qUseColor": false, "qUseImage": false}, "qMenuIcon": false, "qExtendedProperties": [{"qName": "", "qValue": ""}], "qExtendedValues": [{"qName": "", "qValue": {"qv": ""}}], "qStateName": ""} }],
				"Out": []
			},
			"GetRowCount": {
				"In": [],
				"Out": []
			},
			"GetColumnCount": {
				"In": [],
				"Out": []
			},
			"GetCells": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qCells" }]
			},
			"GetTableInfo": {
				"In": [],
				"Out": [{ "Name": "qTableInfo" }]
			},
			"GetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qIn","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}} }],
				"Out": [{ "Name": "qData" }]
			},
			"SetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qData","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}, "qExpansionInfo": [{"qExcludeList": false, "qPos": {"qDimName": "", "qElemNo": [0], "qElemValues": [[0]]}}], "qLeftCollapsed": false, "qTopCollapsed": false, "qSortData": [{"qName": "", "qReversed": false}], "qDimensionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qExpressionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qUseGraphMode": false, "qGraphMode": 0, "qActiveContainerChildObjectId": "", "qExtendedPivotState": {"qExpressionPosition": 0, "qNumberOfLeftDimensions": 0, "qDimensionNames": [""], "qEnableConditions": [""]}} }],
				"Out": []
			},
			"GetCellsDataForExport": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qData" }]
			},
			"GetCellsLayoutForExport": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			}
		},
		"CustomObject":{
			"SetFrameDef": {
				"In": [{ "Name": "qFrame","DefaultValue": {"qBorderWidth": 0, "qBorderEffect": 0, "qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qCaptionFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qName": {"qv": ""}, "qInternalCtlNo": 0, "qRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qBmp_OBSOLETE": [0], "qBmpMode_OBSOLETE": 0, "qMinimizedRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qShowMode": 0, "qDetached": false, "qAllowMinimize": false, "qAutoMinimize": false, "qAllowMaximize": false, "qAllowInfo": false, "qPrintIcon": false, "qCopyIcon": false, "qXLIcon": false, "qSearchIcon": false, "qSelectPossibleIcon": false, "qSelectExcludedIcon": false, "qSelectAllIcon": false, "qClearIcon": false, "qClearOtherIcon": false, "qLockIcon": false, "qHelpText": {"qv": ""}, "qObjectId": "", "qZedLevel": 0, "qShrinkFrameToData": false, "qShowCaption": false, "qMultiLine": 0, "qActiveBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qActiveFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFixCorner": false, "qFixCornerSize": 0, "qRelCornerSize": 0, "qPower": 0, "qRoundedShape": false, "qEnableTopLeftRounded": false, "qEnableTopRightRounded": false, "qEnableBottomLeftRounded": false, "qEnableBottomRightRounded": false, "qLight": 0, "qDark": 0, "qRainbow": false, "qTextAdjustHorizontal": 0, "qTextAdjustVertical": 0, "qShow": {"qAlways": false, "qExpression": {"qv": ""}}, "qOnActivateMacro_OBSOLETE": "", "qOnDeactivateMacro_OBSOLETE": "", "qAllowMoveSize": false, "qAllowCopyClone": false, "qdummy": [false], "qCustomObjectGuid": [0], "qCustomObjectProperties": [0], "qScrollBkgColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollButtonColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollStyle": 0, "qScrollWidth": 0, "qIconColor_OBSOLETE": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qIconStyle_OBSOLETE": 0, "qAllowModify": false, "qCopyImageIcon": false, "qPreserveScrollPosition": false, "qShadowIntensity": 0, "qOnActivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qOnDeactivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qExtension": "", "qBackground": {"qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qImageBlob": [0], "qImageLayout": {"qStretchMode": 0, "qHorizontalAdjust": 0, "qVerticalAdjust": 0, "qAlpha": 0}, "qUseColor": false, "qUseImage": false}, "qMenuIcon": false, "qExtendedProperties": [{"qName": "", "qValue": ""}], "qExtendedValues": [{"qName": "", "qValue": {"qv": ""}}], "qStateName": ""} }],
				"Out": []
			},
			"GetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qIn","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}} }],
				"Out": [{ "Name": "qData" }]
			},
			"SetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qData","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}, "qExpansionInfo": [{"qExcludeList": false, "qPos": {"qDimName": "", "qElemNo": [0], "qElemValues": [[0]]}}], "qLeftCollapsed": false, "qTopCollapsed": false, "qSortData": [{"qName": "", "qReversed": false}], "qDimensionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qExpressionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qUseGraphMode": false, "qGraphMode": 0, "qActiveContainerChildObjectId": "", "qExtendedPivotState": {"qExpressionPosition": 0, "qNumberOfLeftDimensions": 0, "qDimensionNames": [""], "qEnableConditions": [""]}} }],
				"Out": []
			},
			"GetCellsDataForExport": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qData" }]
			},
			"GetCellsLayoutForExport": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			}
		},
		"BookmarkObject":{
			"SetFrameDef": {
				"In": [{ "Name": "qFrame","DefaultValue": {"qBorderWidth": 0, "qBorderEffect": 0, "qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qCaptionFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qName": {"qv": ""}, "qInternalCtlNo": 0, "qRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qBmp_OBSOLETE": [0], "qBmpMode_OBSOLETE": 0, "qMinimizedRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qShowMode": 0, "qDetached": false, "qAllowMinimize": false, "qAutoMinimize": false, "qAllowMaximize": false, "qAllowInfo": false, "qPrintIcon": false, "qCopyIcon": false, "qXLIcon": false, "qSearchIcon": false, "qSelectPossibleIcon": false, "qSelectExcludedIcon": false, "qSelectAllIcon": false, "qClearIcon": false, "qClearOtherIcon": false, "qLockIcon": false, "qHelpText": {"qv": ""}, "qObjectId": "", "qZedLevel": 0, "qShrinkFrameToData": false, "qShowCaption": false, "qMultiLine": 0, "qActiveBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qActiveFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFixCorner": false, "qFixCornerSize": 0, "qRelCornerSize": 0, "qPower": 0, "qRoundedShape": false, "qEnableTopLeftRounded": false, "qEnableTopRightRounded": false, "qEnableBottomLeftRounded": false, "qEnableBottomRightRounded": false, "qLight": 0, "qDark": 0, "qRainbow": false, "qTextAdjustHorizontal": 0, "qTextAdjustVertical": 0, "qShow": {"qAlways": false, "qExpression": {"qv": ""}}, "qOnActivateMacro_OBSOLETE": "", "qOnDeactivateMacro_OBSOLETE": "", "qAllowMoveSize": false, "qAllowCopyClone": false, "qdummy": [false], "qCustomObjectGuid": [0], "qCustomObjectProperties": [0], "qScrollBkgColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollButtonColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollStyle": 0, "qScrollWidth": 0, "qIconColor_OBSOLETE": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qIconStyle_OBSOLETE": 0, "qAllowModify": false, "qCopyImageIcon": false, "qPreserveScrollPosition": false, "qShadowIntensity": 0, "qOnActivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qOnDeactivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qExtension": "", "qBackground": {"qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qImageBlob": [0], "qImageLayout": {"qStretchMode": 0, "qHorizontalAdjust": 0, "qVerticalAdjust": 0, "qAlpha": 0}, "qUseColor": false, "qUseImage": false}, "qMenuIcon": false, "qExtendedProperties": [{"qName": "", "qValue": ""}], "qExtendedValues": [{"qName": "", "qValue": {"qv": ""}}], "qStateName": ""} }],
				"Out": []
			},
			"GetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qIn","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}} }],
				"Out": [{ "Name": "qData" }]
			},
			"SetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qData","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}, "qExpansionInfo": [{"qExcludeList": false, "qPos": {"qDimName": "", "qElemNo": [0], "qElemValues": [[0]]}}], "qLeftCollapsed": false, "qTopCollapsed": false, "qSortData": [{"qName": "", "qReversed": false}], "qDimensionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qExpressionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qUseGraphMode": false, "qGraphMode": 0, "qActiveContainerChildObjectId": "", "qExtendedPivotState": {"qExpressionPosition": 0, "qNumberOfLeftDimensions": 0, "qDimensionNames": [""], "qEnableConditions": [""]}} }],
				"Out": []
			},
			"GetCellsDataForExport": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qData" }]
			},
			"GetCellsLayoutForExport": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			}
		},
		"Slider":{
			"SetFrameDef": {
				"In": [{ "Name": "qFrame","DefaultValue": {"qBorderWidth": 0, "qBorderEffect": 0, "qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qCaptionFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qName": {"qv": ""}, "qInternalCtlNo": 0, "qRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qBmp_OBSOLETE": [0], "qBmpMode_OBSOLETE": 0, "qMinimizedRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qShowMode": 0, "qDetached": false, "qAllowMinimize": false, "qAutoMinimize": false, "qAllowMaximize": false, "qAllowInfo": false, "qPrintIcon": false, "qCopyIcon": false, "qXLIcon": false, "qSearchIcon": false, "qSelectPossibleIcon": false, "qSelectExcludedIcon": false, "qSelectAllIcon": false, "qClearIcon": false, "qClearOtherIcon": false, "qLockIcon": false, "qHelpText": {"qv": ""}, "qObjectId": "", "qZedLevel": 0, "qShrinkFrameToData": false, "qShowCaption": false, "qMultiLine": 0, "qActiveBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qActiveFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFixCorner": false, "qFixCornerSize": 0, "qRelCornerSize": 0, "qPower": 0, "qRoundedShape": false, "qEnableTopLeftRounded": false, "qEnableTopRightRounded": false, "qEnableBottomLeftRounded": false, "qEnableBottomRightRounded": false, "qLight": 0, "qDark": 0, "qRainbow": false, "qTextAdjustHorizontal": 0, "qTextAdjustVertical": 0, "qShow": {"qAlways": false, "qExpression": {"qv": ""}}, "qOnActivateMacro_OBSOLETE": "", "qOnDeactivateMacro_OBSOLETE": "", "qAllowMoveSize": false, "qAllowCopyClone": false, "qdummy": [false], "qCustomObjectGuid": [0], "qCustomObjectProperties": [0], "qScrollBkgColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollButtonColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollStyle": 0, "qScrollWidth": 0, "qIconColor_OBSOLETE": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qIconStyle_OBSOLETE": 0, "qAllowModify": false, "qCopyImageIcon": false, "qPreserveScrollPosition": false, "qShadowIntensity": 0, "qOnActivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qOnDeactivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qExtension": "", "qBackground": {"qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qImageBlob": [0], "qImageLayout": {"qStretchMode": 0, "qHorizontalAdjust": 0, "qVerticalAdjust": 0, "qAlpha": 0}, "qUseColor": false, "qUseImage": false}, "qMenuIcon": false, "qExtendedProperties": [{"qName": "", "qValue": ""}], "qExtendedValues": [{"qName": "", "qValue": {"qv": ""}}], "qStateName": ""} }],
				"Out": []
			},
			"GetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qIn","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}} }],
				"Out": [{ "Name": "qData" }]
			},
			"SetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qData","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}, "qExpansionInfo": [{"qExcludeList": false, "qPos": {"qDimName": "", "qElemNo": [0], "qElemValues": [[0]]}}], "qLeftCollapsed": false, "qTopCollapsed": false, "qSortData": [{"qName": "", "qReversed": false}], "qDimensionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qExpressionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qUseGraphMode": false, "qGraphMode": 0, "qActiveContainerChildObjectId": "", "qExtendedPivotState": {"qExpressionPosition": 0, "qNumberOfLeftDimensions": 0, "qDimensionNames": [""], "qEnableConditions": [""]}} }],
				"Out": []
			},
			"GetCellsDataForExport": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qData" }]
			},
			"GetCellsLayoutForExport": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			}
		},
		"LineArrow":{
			"SetFrameDef": {
				"In": [{ "Name": "qFrame","DefaultValue": {"qBorderWidth": 0, "qBorderEffect": 0, "qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qCaptionFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qName": {"qv": ""}, "qInternalCtlNo": 0, "qRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qBmp_OBSOLETE": [0], "qBmpMode_OBSOLETE": 0, "qMinimizedRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qShowMode": 0, "qDetached": false, "qAllowMinimize": false, "qAutoMinimize": false, "qAllowMaximize": false, "qAllowInfo": false, "qPrintIcon": false, "qCopyIcon": false, "qXLIcon": false, "qSearchIcon": false, "qSelectPossibleIcon": false, "qSelectExcludedIcon": false, "qSelectAllIcon": false, "qClearIcon": false, "qClearOtherIcon": false, "qLockIcon": false, "qHelpText": {"qv": ""}, "qObjectId": "", "qZedLevel": 0, "qShrinkFrameToData": false, "qShowCaption": false, "qMultiLine": 0, "qActiveBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qActiveFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFixCorner": false, "qFixCornerSize": 0, "qRelCornerSize": 0, "qPower": 0, "qRoundedShape": false, "qEnableTopLeftRounded": false, "qEnableTopRightRounded": false, "qEnableBottomLeftRounded": false, "qEnableBottomRightRounded": false, "qLight": 0, "qDark": 0, "qRainbow": false, "qTextAdjustHorizontal": 0, "qTextAdjustVertical": 0, "qShow": {"qAlways": false, "qExpression": {"qv": ""}}, "qOnActivateMacro_OBSOLETE": "", "qOnDeactivateMacro_OBSOLETE": "", "qAllowMoveSize": false, "qAllowCopyClone": false, "qdummy": [false], "qCustomObjectGuid": [0], "qCustomObjectProperties": [0], "qScrollBkgColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollButtonColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollStyle": 0, "qScrollWidth": 0, "qIconColor_OBSOLETE": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qIconStyle_OBSOLETE": 0, "qAllowModify": false, "qCopyImageIcon": false, "qPreserveScrollPosition": false, "qShadowIntensity": 0, "qOnActivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qOnDeactivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qExtension": "", "qBackground": {"qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qImageBlob": [0], "qImageLayout": {"qStretchMode": 0, "qHorizontalAdjust": 0, "qVerticalAdjust": 0, "qAlpha": 0}, "qUseColor": false, "qUseImage": false}, "qMenuIcon": false, "qExtendedProperties": [{"qName": "", "qValue": ""}], "qExtendedValues": [{"qName": "", "qValue": {"qv": ""}}], "qStateName": ""} }],
				"Out": []
			},
			"GetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qIn","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}} }],
				"Out": [{ "Name": "qData" }]
			},
			"SetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qData","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}, "qExpansionInfo": [{"qExcludeList": false, "qPos": {"qDimName": "", "qElemNo": [0], "qElemValues": [[0]]}}], "qLeftCollapsed": false, "qTopCollapsed": false, "qSortData": [{"qName": "", "qReversed": false}], "qDimensionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qExpressionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qUseGraphMode": false, "qGraphMode": 0, "qActiveContainerChildObjectId": "", "qExtendedPivotState": {"qExpressionPosition": 0, "qNumberOfLeftDimensions": 0, "qDimensionNames": [""], "qEnableConditions": [""]}} }],
				"Out": []
			},
			"GetCellsDataForExport": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qData" }]
			},
			"GetCellsLayoutForExport": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			}
		},
		"TableBox":{
			"GetRowCount": {
				"In": [],
				"Out": []
			},
			"GetColumnCount": {
				"In": [],
				"Out": []
			},
			"GetCells": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qCells" }]
			},
			"GetTableInfo": {
				"In": [],
				"Out": [{ "Name": "qTableInfo" }]
			},
			"SetFrameDef": {
				"In": [{ "Name": "qFrame","DefaultValue": {"qBorderWidth": 0, "qBorderEffect": 0, "qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qCaptionFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qName": {"qv": ""}, "qInternalCtlNo": 0, "qRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qBmp_OBSOLETE": [0], "qBmpMode_OBSOLETE": 0, "qMinimizedRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qShowMode": 0, "qDetached": false, "qAllowMinimize": false, "qAutoMinimize": false, "qAllowMaximize": false, "qAllowInfo": false, "qPrintIcon": false, "qCopyIcon": false, "qXLIcon": false, "qSearchIcon": false, "qSelectPossibleIcon": false, "qSelectExcludedIcon": false, "qSelectAllIcon": false, "qClearIcon": false, "qClearOtherIcon": false, "qLockIcon": false, "qHelpText": {"qv": ""}, "qObjectId": "", "qZedLevel": 0, "qShrinkFrameToData": false, "qShowCaption": false, "qMultiLine": 0, "qActiveBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qActiveFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFixCorner": false, "qFixCornerSize": 0, "qRelCornerSize": 0, "qPower": 0, "qRoundedShape": false, "qEnableTopLeftRounded": false, "qEnableTopRightRounded": false, "qEnableBottomLeftRounded": false, "qEnableBottomRightRounded": false, "qLight": 0, "qDark": 0, "qRainbow": false, "qTextAdjustHorizontal": 0, "qTextAdjustVertical": 0, "qShow": {"qAlways": false, "qExpression": {"qv": ""}}, "qOnActivateMacro_OBSOLETE": "", "qOnDeactivateMacro_OBSOLETE": "", "qAllowMoveSize": false, "qAllowCopyClone": false, "qdummy": [false], "qCustomObjectGuid": [0], "qCustomObjectProperties": [0], "qScrollBkgColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollButtonColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollStyle": 0, "qScrollWidth": 0, "qIconColor_OBSOLETE": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qIconStyle_OBSOLETE": 0, "qAllowModify": false, "qCopyImageIcon": false, "qPreserveScrollPosition": false, "qShadowIntensity": 0, "qOnActivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qOnDeactivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qExtension": "", "qBackground": {"qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qImageBlob": [0], "qImageLayout": {"qStretchMode": 0, "qHorizontalAdjust": 0, "qVerticalAdjust": 0, "qAlpha": 0}, "qUseColor": false, "qUseImage": false}, "qMenuIcon": false, "qExtendedProperties": [{"qName": "", "qValue": ""}], "qExtendedValues": [{"qName": "", "qValue": {"qv": ""}}], "qStateName": ""} }],
				"Out": []
			},
			"GetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qIn","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}} }],
				"Out": [{ "Name": "qData" }]
			},
			"SetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qData","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}, "qExpansionInfo": [{"qExcludeList": false, "qPos": {"qDimName": "", "qElemNo": [0], "qElemValues": [[0]]}}], "qLeftCollapsed": false, "qTopCollapsed": false, "qSortData": [{"qName": "", "qReversed": false}], "qDimensionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qExpressionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qUseGraphMode": false, "qGraphMode": 0, "qActiveContainerChildObjectId": "", "qExtendedPivotState": {"qExpressionPosition": 0, "qNumberOfLeftDimensions": 0, "qDimensionNames": [""], "qEnableConditions": [""]}} }],
				"Out": []
			},
			"GetCellsDataForExport": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qData" }]
			},
			"GetCellsLayoutForExport": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			}
		},
		"StatisticsBox":{
			"GetRowCount": {
				"In": [],
				"Out": []
			},
			"GetColumnCount": {
				"In": [],
				"Out": []
			},
			"GetCells": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qCells" }]
			},
			"GetTableInfo": {
				"In": [],
				"Out": [{ "Name": "qTableInfo" }]
			},
			"SetFrameDef": {
				"In": [{ "Name": "qFrame","DefaultValue": {"qBorderWidth": 0, "qBorderEffect": 0, "qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qCaptionFont": {"qFontName": "", "qPointSize1000": 0, "qUnderline": false, "qBold": false, "qItalic": false, "qDropShadow": false, "qAntiAlias_OBSOLETE": 0}, "qName": {"qv": ""}, "qInternalCtlNo": 0, "qRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qBmp_OBSOLETE": [0], "qBmpMode_OBSOLETE": 0, "qMinimizedRect": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qShowMode": 0, "qDetached": false, "qAllowMinimize": false, "qAutoMinimize": false, "qAllowMaximize": false, "qAllowInfo": false, "qPrintIcon": false, "qCopyIcon": false, "qXLIcon": false, "qSearchIcon": false, "qSelectPossibleIcon": false, "qSelectExcludedIcon": false, "qSelectAllIcon": false, "qClearIcon": false, "qClearOtherIcon": false, "qLockIcon": false, "qHelpText": {"qv": ""}, "qObjectId": "", "qZedLevel": 0, "qShrinkFrameToData": false, "qShowCaption": false, "qMultiLine": 0, "qActiveBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qBgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qActiveFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFgColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qFixCorner": false, "qFixCornerSize": 0, "qRelCornerSize": 0, "qPower": 0, "qRoundedShape": false, "qEnableTopLeftRounded": false, "qEnableTopRightRounded": false, "qEnableBottomLeftRounded": false, "qEnableBottomRightRounded": false, "qLight": 0, "qDark": 0, "qRainbow": false, "qTextAdjustHorizontal": 0, "qTextAdjustVertical": 0, "qShow": {"qAlways": false, "qExpression": {"qv": ""}}, "qOnActivateMacro_OBSOLETE": "", "qOnDeactivateMacro_OBSOLETE": "", "qAllowMoveSize": false, "qAllowCopyClone": false, "qdummy": [false], "qCustomObjectGuid": [0], "qCustomObjectProperties": [0], "qScrollBkgColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollButtonColor": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qScrollStyle": 0, "qScrollWidth": 0, "qIconColor_OBSOLETE": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qIconStyle_OBSOLETE": 0, "qAllowModify": false, "qCopyImageIcon": false, "qPreserveScrollPosition": false, "qShadowIntensity": 0, "qOnActivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qOnDeactivateActionItems": [{"qType": 0, "qParameters": [{"qv": ""}], "qStateName": {"qv": ""}}], "qExtension": "", "qBackground": {"qColor": {"qMode": 0, "qLuminosity": 0, "qFillDirection": 0, "qFillPattern": 0, "qPrimaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qSecondaryCol": {"qCol": {"qRed": 0, "qGreen": 0, "qBlue": 0, "qAlpha": 0}, "qIsCalculated": false, "qColorExpr": {"qv": ""}}, "qAlpha": 0}, "qImageBlob": [0], "qImageLayout": {"qStretchMode": 0, "qHorizontalAdjust": 0, "qVerticalAdjust": 0, "qAlpha": 0}, "qUseColor": false, "qUseImage": false}, "qMenuIcon": false, "qExtendedProperties": [{"qName": "", "qValue": ""}], "qExtendedValues": [{"qName": "", "qValue": {"qv": ""}}], "qStateName": ""} }],
				"Out": []
			},
			"GetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qIn","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}} }],
				"Out": [{ "Name": "qData" }]
			},
			"SetExtendedBookmarkLayoutData": {
				"In": [{ "Name": "qData","DefaultValue": {"qId": "", "qActive": false, "qShowMode": 0, "qScrollPos": {"qUsePosition": false, "qPos": {"qx": 0, "qy": 0}}, "qExpansionInfo": [{"qExcludeList": false, "qPos": {"qDimName": "", "qElemNo": [0], "qElemValues": [[0]]}}], "qLeftCollapsed": false, "qTopCollapsed": false, "qSortData": [{"qName": "", "qReversed": false}], "qDimensionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qExpressionGroupPos": [{"qGroupName": "", "qCurrentItemName": ""}], "qUseGraphMode": false, "qGraphMode": 0, "qActiveContainerChildObjectId": "", "qExtendedPivotState": {"qExpressionPosition": 0, "qNumberOfLeftDimensions": 0, "qDimensionNames": [""], "qEnableConditions": [""]}} }],
				"Out": []
			},
			"GetCellsDataForExport": {
				"In": [{ "Name": "qRect","DefaultValue": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0} }],
				"Out": [{ "Name": "qData" }]
			},
			"GetCellsLayoutForExport": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			}
		},
		"GenericObject":{
			"GetLayout": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			},
			"GetListObjectData": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qPages","DefaultValue": [{"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}] }],
				"Out": [{ "Name": "qDataPages" }]
			},
			"GetHyperCubeData": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qPages","DefaultValue": [{"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}] }],
				"Out": [{ "Name": "qDataPages" }]
			},
			"GetHyperCubeReducedData": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qPages","DefaultValue": [{"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}] }, { "Name": "qZoomFactor","DefaultValue": 0 }, { "Name": "qReductionMode","DefaultValue": 0 }],
				"Out": [{ "Name": "qDataPages" }]
			},
			"GetHyperCubePivotData": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qPages","DefaultValue": [{"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}] }],
				"Out": [{ "Name": "qDataPages" }]
			},
			"GetHyperCubeStackData": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qPages","DefaultValue": [{"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}] }, { "Name": "qMaxNbrCells","DefaultValue": 0, "Optional": true }],
				"Out": [{ "Name": "qDataPages" }]
			},
			"GetHyperCubeContinuousData": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qOptions","DefaultValue": {"qStart": 0, "qEnd": 0, "qNbrPoints": 0, "qMaxNbrTicks": 0, "qMaxNumberLines": 0} }, { "Name": "qReverseSort","DefaultValue": false, "Optional": true }],
				"Out": [{ "Name": "qDataPages" }, { "Name": "qAxisData" }]
			},
			"GetHyperCubeTreeData": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qNodeOptions","DefaultValue": {"qMaxNbrOfNodes": 0, "qTreeNodes": [{"qArea": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qAllValues": false}], "qTreeLevels": {"qLeft": 0, "qDepth": 0}}, "Optional": true }],
				"Out": [{ "Name": "qNodes" }]
			},
			"GetHyperCubeBinnedData": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qPages","DefaultValue": [{"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}] }, { "Name": "qViewport","DefaultValue": {"qWidth": 0, "qHeight": 0, "qZoomLevel": 0} }, { "Name": "qDataRanges","DefaultValue": [{"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}] }, { "Name": "qMaxNbrCells","DefaultValue": 0 }, { "Name": "qQueryLevel","DefaultValue": 0 }, { "Name": "qBinningMethod","DefaultValue": 0 }],
				"Out": [{ "Name": "qDataPages" }]
			},
			"ApplyPatches": {
				"In": [{ "Name": "qPatches","DefaultValue": [{"qOp": 0, "qPath": "", "qValue": ""}] }, { "Name": "qSoftPatch","DefaultValue": false, "Optional": true }],
				"Out": []
			},
			"ClearSoftPatches": {
				"In": [],
				"Out": []
			},
			"SetProperties": {
				"In": [{ "Name": "qProp","DefaultValue": {"qInfo": {"qId": "", "qType": ""}, "qExtendsId": "", "qMetaDef": {}, "qStateName": ""} }],
				"Out": []
			},
			"GetProperties": {
				"In": [],
				"Out": [{ "Name": "qProp" }]
			},
			"GetEffectiveProperties": {
				"In": [],
				"Out": [{ "Name": "qProp" }]
			},
			"SetFullPropertyTree": {
				"In": [{ "Name": "qPropEntry","DefaultValue": {"qProperty": {"qInfo": {"qId": "", "qType": ""}, "qExtendsId": "", "qMetaDef": {}, "qStateName": ""}, "qChildren": [], "qEmbeddedSnapshotRef": null} }],
				"Out": []
			},
			"GetFullPropertyTree": {
				"In": [],
				"Out": [{ "Name": "qPropEntry" }]
			},
			"GetInfo": {
				"In": [],
				"Out": [{ "Name": "qInfo" }]
			},
			"ClearSelections": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qColIndices","DefaultValue": [0], "Optional": true }],
				"Out": []
			},
			"ExportData": {
				"In": [{ "Name": "qFileType","DefaultValue": 0 }, { "Name": "qPath","DefaultValue": "", "Optional": true }, { "Name": "qFileName","DefaultValue": "", "Optional": true }, { "Name": "qExportState","DefaultValue": 0, "Optional": true }, { "Name": "qServeOnce","DefaultValue": false, "Optional": true }],
				"Out": [{ "Name": "qUrl" }, { "Name": "qWarnings" }]
			},
			"StoreData": {
				"In": [{ "Name": "qFileType","DefaultValue": 0 }, { "Name": "qPath","DefaultValue": "", "Optional": true }, { "Name": "qLibRef","DefaultValue": "" }, { "Name": "qExportState","DefaultValue": 0, "Optional": true }, { "Name": "qParquetCompression","DefaultValue": 0, "Optional": true }],
				"Out": [{ "Name": "qUrl" }, { "Name": "qWarnings" }]
			},
			"SelectListObjectValues": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qValues","DefaultValue": [0] }, { "Name": "qToggleMode","DefaultValue": false }, { "Name": "qSoftLock","DefaultValue": false, "Optional": true }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"SelectListObjectPossible": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qSoftLock","DefaultValue": false, "Optional": true }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"SelectListObjectExcluded": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qSoftLock","DefaultValue": false, "Optional": true }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"SelectListObjectAlternative": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qSoftLock","DefaultValue": false, "Optional": true }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"SelectListObjectAll": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qSoftLock","DefaultValue": false, "Optional": true }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"SelectListObjectContinuousRange": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qRanges","DefaultValue": [{"qMin": 0, "qMax": 0, "qMinInclEq": false, "qMaxInclEq": false}] }, { "Name": "qSoftLock","DefaultValue": false, "Optional": true }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"SearchListObjectFor": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qMatch","DefaultValue": "" }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"AbortListObjectSearch": {
				"In": [{ "Name": "qPath","DefaultValue": "" }],
				"Out": []
			},
			"AcceptListObjectSearch": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qToggleMode","DefaultValue": false }, { "Name": "qSoftLock","DefaultValue": false, "Optional": true }],
				"Out": []
			},
			"ExpandLeft": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qRow","DefaultValue": 0 }, { "Name": "qCol","DefaultValue": 0 }, { "Name": "qAll","DefaultValue": false }],
				"Out": []
			},
			"ExpandTop": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qRow","DefaultValue": 0 }, { "Name": "qCol","DefaultValue": 0 }, { "Name": "qAll","DefaultValue": false }],
				"Out": []
			},
			"CollapseLeft": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qRow","DefaultValue": 0 }, { "Name": "qCol","DefaultValue": 0 }, { "Name": "qAll","DefaultValue": false }],
				"Out": []
			},
			"CollapseTop": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qRow","DefaultValue": 0 }, { "Name": "qCol","DefaultValue": 0 }, { "Name": "qAll","DefaultValue": false }],
				"Out": []
			},
			"DrillUp": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qDimNo","DefaultValue": 0 }, { "Name": "qNbrSteps","DefaultValue": 0 }],
				"Out": []
			},
			"Lock": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qColIndices","DefaultValue": [0], "Optional": true }],
				"Out": []
			},
			"Unlock": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qColIndices","DefaultValue": [0], "Optional": true }],
				"Out": []
			},
			"SelectHyperCubeValues": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qDimNo","DefaultValue": 0 }, { "Name": "qValues","DefaultValue": [0] }, { "Name": "qToggleMode","DefaultValue": false }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"SelectHyperCubeCells": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qRowIndices","DefaultValue": [0] }, { "Name": "qColIndices","DefaultValue": [0] }, { "Name": "qSoftLock","DefaultValue": false, "Optional": true }, { "Name": "qDeselectOnlyOneSelected","DefaultValue": false, "Optional": true }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"SelectPivotCells": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qSelections","DefaultValue": [{"qType": 0, "qCol": 0, "qRow": 0}] }, { "Name": "qSoftLock","DefaultValue": false, "Optional": true }, { "Name": "qDeselectOnlyOneSelected","DefaultValue": false, "Optional": true }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"RangeSelectHyperCubeValues": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qRanges","DefaultValue": [{"qRange": {"qMin": 0, "qMax": 0, "qMinInclEq": false, "qMaxInclEq": false}, "qMeasureIx": 0}] }, { "Name": "qColumnsToSelect","DefaultValue": [0], "Optional": true }, { "Name": "qOrMode","DefaultValue": false, "Optional": true }, { "Name": "qDeselectOnlyOneSelected","DefaultValue": false, "Optional": true }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"MultiRangeSelectHyperCubeValues": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qRanges","DefaultValue": [{"qRanges": [{"qRange": {"qMin": 0, "qMax": 0, "qMinInclEq": false, "qMaxInclEq": false}, "qMeasureIx": 0}], "qColumnsToSelect": [0]}] }, { "Name": "qOrMode","DefaultValue": false, "Optional": true }, { "Name": "qDeselectOnlyOneSelected","DefaultValue": false, "Optional": true }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"MultiRangeSelectTreeDataValues": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qRanges","DefaultValue": [{"qRanges": [{"qRange": {"qMin": 0, "qMax": 0, "qMinInclEq": false, "qMaxInclEq": false}, "qMeasureIx": 0, "qDimensionIx": 0}]}] }, { "Name": "qOrMode","DefaultValue": false, "Optional": true }, { "Name": "qDeselectOnlyOneSelected","DefaultValue": false, "Optional": true }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"SelectHyperCubeContinuousRange": {
				"In": [{ "Name": "qPath","DefaultValue": "" }, { "Name": "qRanges","DefaultValue": [{"qRange": {"qMin": 0, "qMax": 0, "qMinInclEq": false, "qMaxInclEq": false}, "qDimIx": 0}] }, { "Name": "qSoftLock","DefaultValue": false, "Optional": true }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"GetChild": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": []
			},
			"GetParent": {
				"In": [],
				"Out": []
			},
			"GetChildInfos": {
				"In": [],
				"Out": [{ "Name": "qInfos" }]
			},
			"CreateChild": {
				"In": [{ "Name": "qProp","DefaultValue": {"qInfo": {"qId": "", "qType": ""}, "qExtendsId": "", "qMetaDef": {}, "qStateName": ""} }, { "Name": "qPropForThis","DefaultValue": null, "Optional": true }],
				"Out": [{ "Name": "qInfo" }]
			},
			"DestroyChild": {
				"In": [{ "Name": "qId","DefaultValue": "" }, { "Name": "qPropForThis","DefaultValue": null, "Optional": true }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"DestroyAllChildren": {
				"In": [{ "Name": "qPropForThis","DefaultValue": null, "Optional": true }],
				"Out": []
			},
			"SetChildArrayOrder": {
				"In": [{ "Name": "qIds","DefaultValue": [""] }],
				"Out": []
			},
			"GetLinkedObjects": {
				"In": [],
				"Out": [{ "Name": "qItems" }]
			},
			"CopyFrom": {
				"In": [{ "Name": "qFromId","DefaultValue": "" }],
				"Out": []
			},
			"BeginSelections": {
				"In": [{ "Name": "qPaths","DefaultValue": [""] }],
				"Out": []
			},
			"EndSelections": {
				"In": [{ "Name": "qAccept","DefaultValue": false }],
				"Out": []
			},
			"ResetMadeSelections": {
				"In": [],
				"Out": []
			},
			"EmbedSnapshotObject": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": []
			},
			"GetSnapshotObject": {
				"In": [],
				"Out": []
			},
			"Publish": {
				"In": [],
				"Out": []
			},
			"UnPublish": {
				"In": [],
				"Out": []
			},
			"Approve": {
				"In": [],
				"Out": []
			},
			"UnApprove": {
				"In": [],
				"Out": []
			}
		},
		"GenericDimension":{
			"GetLayout": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			},
			"ApplyPatches": {
				"In": [{ "Name": "qPatches","DefaultValue": [{"qOp": 0, "qPath": "", "qValue": ""}] }],
				"Out": []
			},
			"SetProperties": {
				"In": [{ "Name": "qProp","DefaultValue": {"qInfo": {"qId": "", "qType": ""}, "qDim": {"qGrouping": 0, "qFieldDefs": [""], "qFieldLabels": [""], "qLabelExpression": ""}, "qMetaDef": {}} }],
				"Out": []
			},
			"GetProperties": {
				"In": [],
				"Out": [{ "Name": "qProp" }]
			},
			"GetInfo": {
				"In": [],
				"Out": [{ "Name": "qInfo" }]
			},
			"GetDimension": {
				"In": [],
				"Out": [{ "Name": "qDim" }]
			},
			"GetLinkedObjects": {
				"In": [],
				"Out": [{ "Name": "qItems" }]
			},
			"Publish": {
				"In": [],
				"Out": []
			},
			"UnPublish": {
				"In": [],
				"Out": []
			},
			"Approve": {
				"In": [],
				"Out": []
			},
			"UnApprove": {
				"In": [],
				"Out": []
			},
			"StepCycle": {
				"In": [{ "Name": "qStep","DefaultValue": 0 }],
				"Out": []
			},
			"SetActiveField": {
				"In": [{ "Name": "qIx","DefaultValue": 0 }],
				"Out": []
			},
			"GetActiveField": {
				"In": [],
				"Out": []
			}
		},
		"GenericBookmark":{
			"GetFieldValues": {
				"In": [{ "Name": "qField","DefaultValue": "" }, { "Name": "qGetExcludedValues","DefaultValue": false }, { "Name": "qDataPage","DefaultValue": {"qStartIndex": 0, "qEndIndex": 0} }],
				"Out": [{ "Name": "qFieldValues" }]
			},
			"GetLayout": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			},
			"ApplyPatches": {
				"In": [{ "Name": "qPatches","DefaultValue": [{"qOp": 0, "qPath": "", "qValue": ""}] }],
				"Out": []
			},
			"SetProperties": {
				"In": [{ "Name": "qProp","DefaultValue": {"qInfo": {"qId": "", "qType": ""}, "qMetaDef": {}, "qIncludeVariables": false, "qDistinctValues": false} }],
				"Out": []
			},
			"GetProperties": {
				"In": [],
				"Out": [{ "Name": "qProp" }]
			},
			"GetInfo": {
				"In": [],
				"Out": [{ "Name": "qInfo" }]
			},
			"Apply": {
				"In": [],
				"Out": [{ "Name": "qSuccess" }]
			},
			"ApplyAndVerify": {
				"In": [],
				"Out": [{ "Name": "qResult" }]
			},
			"Publish": {
				"In": [],
				"Out": []
			},
			"UnPublish": {
				"In": [],
				"Out": []
			},
			"Approve": {
				"In": [],
				"Out": []
			},
			"UnApprove": {
				"In": [],
				"Out": []
			}
		},
		"GenericVariable":{
			"GetLayout": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			},
			"ApplyPatches": {
				"In": [{ "Name": "qPatches","DefaultValue": [{"qOp": 0, "qPath": "", "qValue": ""}] }],
				"Out": []
			},
			"SetProperties": {
				"In": [{ "Name": "qProp","DefaultValue": {"qInfo": {"qId": "", "qType": ""}, "qMetaDef": {}, "qName": "", "qComment": "", "qNumberPresentation": {"qType": 0, "qnDec": 0, "qUseThou": 0, "qFmt": "", "qDec": "", "qThou": ""}, "qIncludeInBookmark": false, "qDefinition": ""} }],
				"Out": []
			},
			"GetProperties": {
				"In": [],
				"Out": [{ "Name": "qProp" }]
			},
			"GetInfo": {
				"In": [],
				"Out": [{ "Name": "qInfo" }]
			},
			"SetStringValue": {
				"In": [{ "Name": "qVal","DefaultValue": "" }],
				"Out": []
			},
			"SetNumValue": {
				"In": [{ "Name": "qVal","DefaultValue": 0 }],
				"Out": []
			},
			"SetDualValue": {
				"In": [{ "Name": "qText","DefaultValue": "" }, { "Name": "qNum","DefaultValue": 0 }],
				"Out": []
			},
			"GetRawContent": {
				"In": [],
				"Out": []
			}
		},
		"GenericMeasure":{
			"GetLayout": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			},
			"ApplyPatches": {
				"In": [{ "Name": "qPatches","DefaultValue": [{"qOp": 0, "qPath": "", "qValue": ""}] }],
				"Out": []
			},
			"SetProperties": {
				"In": [{ "Name": "qProp","DefaultValue": {"qInfo": {"qId": "", "qType": ""}, "qMeasure": {"qLabel": "", "qDef": "", "qGrouping": 0, "qExpressions": [""], "qActiveExpression": 0, "qLabelExpression": "", "qNumFormat": {"qType": 0, "qnDec": 0, "qUseThou": 0, "qFmt": "", "qDec": "", "qThou": ""}}, "qMetaDef": {}} }],
				"Out": []
			},
			"GetProperties": {
				"In": [],
				"Out": [{ "Name": "qProp" }]
			},
			"GetInfo": {
				"In": [],
				"Out": [{ "Name": "qInfo" }]
			},
			"GetMeasure": {
				"In": [],
				"Out": [{ "Name": "qMeasure" }]
			},
			"GetLinkedObjects": {
				"In": [],
				"Out": [{ "Name": "qItems" }]
			},
			"Publish": {
				"In": [],
				"Out": []
			},
			"UnPublish": {
				"In": [],
				"Out": []
			},
			"Approve": {
				"In": [],
				"Out": []
			},
			"UnApprove": {
				"In": [],
				"Out": []
			}
		},
		"Doc":{
			"GetSheetObject": {
				"In": [{ "Name": "qObjectId","DefaultValue": "" }],
				"Out": []
			},
			"GetField": {
				"In": [{ "Name": "qFieldName","DefaultValue": "" }, { "Name": "qStateName","DefaultValue": "", "Optional": true }],
				"Out": []
			},
			"GetFieldDescription": {
				"In": [{ "Name": "qFieldName","DefaultValue": "" }],
				"Out": []
			},
			"GetVariable": {
				"In": [{ "Name": "qName","DefaultValue": "" }],
				"Out": []
			},
			"GetLooselyCoupledVector": {
				"In": [],
				"Out": [{ "Name": "qv" }]
			},
			"SetLooselyCoupledVector": {
				"In": [{ "Name": "qv","DefaultValue": [0] }],
				"Out": []
			},
			"Evaluate": {
				"In": [{ "Name": "qExpression","DefaultValue": "" }],
				"Out": []
			},
			"EvaluateEx": {
				"In": [{ "Name": "qExpression","DefaultValue": "" }],
				"Out": [{ "Name": "qValue" }]
			},
			"ClearAll": {
				"In": [{ "Name": "qLockedAlso","DefaultValue": false, "Optional": true }, { "Name": "qStateName","DefaultValue": "", "Optional": true }],
				"Out": []
			},
			"LockAll": {
				"In": [{ "Name": "qStateName","DefaultValue": "", "Optional": true }],
				"Out": []
			},
			"UnlockAll": {
				"In": [{ "Name": "qStateName","DefaultValue": "", "Optional": true }],
				"Out": []
			},
			"Back": {
				"In": [],
				"Out": []
			},
			"Forward": {
				"In": [],
				"Out": []
			},
			"CreateVariable": {
				"In": [{ "Name": "qName","DefaultValue": "" }],
				"Out": []
			},
			"RemoveVariable": {
				"In": [{ "Name": "qName","DefaultValue": "" }],
				"Out": []
			},
			"GetLocaleInfo": {
				"In": [],
				"Out": []
			},
			"GetTablesAndKeys": {
				"In": [{ "Name": "qWindowSize","DefaultValue": {"qcx": 0, "qcy": 0} }, { "Name": "qNullSize","DefaultValue": {"qcx": 0, "qcy": 0} }, { "Name": "qCellHeight","DefaultValue": 0 }, { "Name": "qSyntheticMode","DefaultValue": false }, { "Name": "qIncludeSysVars","DefaultValue": false }, { "Name": "qIncludeProfiling","DefaultValue": false, "Optional": true }],
				"Out": [{ "Name": "qtr" }, { "Name": "qk" }]
			},
			"GetViewDlgSaveInfo": {
				"In": [],
				"Out": []
			},
			"SetViewDlgSaveInfo": {
				"In": [{ "Name": "qInfo","DefaultValue": {"qPos": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qCtlInfo": {"qInternalView": {"qTables": [{"qPos": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qCaption": ""}], "qBroomPoints": [{"qPos": {"qx": 0, "qy": 0}, "qTable": "", "qFields": [""]}], "qConnectionPoints": [{"qPos": {"qx": 0, "qy": 0}, "qFields": [""]}], "qZoomFactor": 0}, "qSourceView": {"qTables": [{"qPos": {"qLeft": 0, "qTop": 0, "qWidth": 0, "qHeight": 0}, "qCaption": ""}], "qBroomPoints": [{"qPos": {"qx": 0, "qy": 0}, "qTable": "", "qFields": [""]}], "qConnectionPoints": [{"qPos": {"qx": 0, "qy": 0}, "qFields": [""]}], "qZoomFactor": 0}}, "qMode": 0} }],
				"Out": []
			},
			"GetEmptyScript": {
				"In": [{ "Name": "qLocalizedMainSection","DefaultValue": "", "Optional": true }],
				"Out": []
			},
			"DoReload": {
				"In": [{ "Name": "qMode","DefaultValue": 0, "Optional": true }, { "Name": "qPartial","DefaultValue": false, "Optional": true }, { "Name": "qDebug","DefaultValue": false, "Optional": true }],
				"Out": []
			},
			"GetScriptBreakpoints": {
				"In": [],
				"Out": [{ "Name": "qBreakpoints" }]
			},
			"SetScriptBreakpoints": {
				"In": [{ "Name": "qBreakpoints","DefaultValue": [{"qbufferName": "", "qlineIx": 0, "qEnabled": false}] }],
				"Out": []
			},
			"GetScript": {
				"In": [],
				"Out": [{ "Name": "qScript" }]
			},
			"GetTextMacros": {
				"In": [],
				"Out": [{ "Name": "qMacros" }]
			},
			"SetFetchLimit": {
				"In": [{ "Name": "qLimit","DefaultValue": 0 }],
				"Out": []
			},
			"DoSave": {
				"In": [{ "Name": "qFileName","DefaultValue": "", "Optional": true }],
				"Out": []
			},
			"GetTableData": {
				"In": [{ "Name": "qOffset","DefaultValue": 0 }, { "Name": "qRows","DefaultValue": 0 }, { "Name": "qSyntheticMode","DefaultValue": false }, { "Name": "qTableName","DefaultValue": "" }],
				"Out": [{ "Name": "qData" }]
			},
			"GetAppLayout": {
				"In": [],
				"Out": [{ "Name": "qLayout" }]
			},
			"SetAppProperties": {
				"In": [{ "Name": "qProp","DefaultValue": {"qTitle": "", "qLastReloadTime": "", "qMigrationHash": "", "qSavedInProductVersion": "", "qThumbnail": {"qUrl": ""}, "qHasSectionAccess": false, "qUsage": 0} }],
				"Out": []
			},
			"GetAppProperties": {
				"In": [],
				"Out": [{ "Name": "qProp" }]
			},
			"GetLineage": {
				"In": [],
				"Out": [{ "Name": "qLineage" }]
			},
			"CreateSessionObject": {
				"In": [{ "Name": "qProp","DefaultValue": {"qInfo": {"qId": "", "qType": ""}, "qExtendsId": "", "qMetaDef": {}, "qStateName": ""} }],
				"Out": []
			},
			"DestroySessionObject": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"CreateObject": {
				"In": [{ "Name": "qProp","DefaultValue": {"qInfo": {"qId": "", "qType": ""}, "qExtendsId": "", "qMetaDef": {}, "qStateName": ""} }],
				"Out": [{ "Name": "qInfo" }]
			},
			"DestroyObject": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"GetObject": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": []
			},
			"GetObjects": {
				"In": [{ "Name": "qOptions","DefaultValue": {"qTypes": [""], "qIncludeSessionObjects": false, "qData": {}} }],
				"Out": [{ "Name": "qList" }]
			},
			"GetBookmarks": {
				"In": [{ "Name": "qOptions","DefaultValue": {"qTypes": [""], "qData": {}, "qIncludePatches": false} }],
				"Out": [{ "Name": "qList" }]
			},
			"CloneObject": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": [{ "Name": "qCloneId" }]
			},
			"CreateDraft": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": [{ "Name": "qDraftId" }]
			},
			"CommitDraft": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": []
			},
			"DestroyDraft": {
				"In": [{ "Name": "qId","DefaultValue": "" }, { "Name": "qSourceId","DefaultValue": "" }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"Undo": {
				"In": [],
				"Out": [{ "Name": "qSuccess" }]
			},
			"Redo": {
				"In": [],
				"Out": [{ "Name": "qSuccess" }]
			},
			"ClearUndoBuffer": {
				"In": [],
				"Out": []
			},
			"CreateDimension": {
				"In": [{ "Name": "qProp","DefaultValue": {"qInfo": {"qId": "", "qType": ""}, "qDim": {"qGrouping": 0, "qFieldDefs": [""], "qFieldLabels": [""], "qLabelExpression": ""}, "qMetaDef": {}} }],
				"Out": [{ "Name": "qInfo" }]
			},
			"DestroyDimension": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"GetDimension": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": []
			},
			"CloneDimension": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": [{ "Name": "qCloneId" }]
			},
			"CreateMeasure": {
				"In": [{ "Name": "qProp","DefaultValue": {"qInfo": {"qId": "", "qType": ""}, "qMeasure": {"qLabel": "", "qDef": "", "qGrouping": 0, "qExpressions": [""], "qActiveExpression": 0, "qLabelExpression": "", "qNumFormat": {"qType": 0, "qnDec": 0, "qUseThou": 0, "qFmt": "", "qDec": "", "qThou": ""}}, "qMetaDef": {}} }],
				"Out": [{ "Name": "qInfo" }]
			},
			"DestroyMeasure": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"GetMeasure": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": []
			},
			"CloneMeasure": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": [{ "Name": "qCloneId" }]
			},
			"CreateSessionVariable": {
				"In": [{ "Name": "qProp","DefaultValue": {"qInfo": {"qId": "", "qType": ""}, "qMetaDef": {}, "qName": "", "qComment": "", "qNumberPresentation": {"qType": 0, "qnDec": 0, "qUseThou": 0, "qFmt": "", "qDec": "", "qThou": ""}, "qIncludeInBookmark": false, "qDefinition": ""} }],
				"Out": []
			},
			"DestroySessionVariable": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"CreateVariableEx": {
				"In": [{ "Name": "qProp","DefaultValue": {"qInfo": {"qId": "", "qType": ""}, "qMetaDef": {}, "qName": "", "qComment": "", "qNumberPresentation": {"qType": 0, "qnDec": 0, "qUseThou": 0, "qFmt": "", "qDec": "", "qThou": ""}, "qIncludeInBookmark": false, "qDefinition": ""} }],
				"Out": [{ "Name": "qInfo" }]
			},
			"DestroyVariableById": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"DestroyVariableByName": {
				"In": [{ "Name": "qName","DefaultValue": "" }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"GetVariableById": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": []
			},
			"GetVariableByName": {
				"In": [{ "Name": "qName","DefaultValue": "" }],
				"Out": []
			},
			"MigrateVariables": {
				"In": [],
				"Out": []
			},
			"MigrateDerivedFields": {
				"In": [],
				"Out": []
			},
			"CheckExpression": {
				"In": [{ "Name": "qExpr","DefaultValue": "" }, { "Name": "qLabels","DefaultValue": [""], "Optional": true }],
				"Out": [{ "Name": "qErrorMsg" }, { "Name": "qBadFieldNames" }, { "Name": "qDangerousFieldNames" }]
			},
			"CheckNumberOrExpression": {
				"In": [{ "Name": "qExpr","DefaultValue": "" }],
				"Out": [{ "Name": "qErrorMsg" }, { "Name": "qBadFieldNames" }]
			},
			"AddAlternateState": {
				"In": [{ "Name": "qStateName","DefaultValue": "" }],
				"Out": []
			},
			"RemoveAlternateState": {
				"In": [{ "Name": "qStateName","DefaultValue": "" }],
				"Out": []
			},
			"AddSessionAlternateState": {
				"In": [{ "Name": "qStateName","DefaultValue": "" }, { "Name": "qSourceStateName","DefaultValue": "", "Optional": true }],
				"Out": []
			},
			"RemoveSessionAlternateState": {
				"In": [{ "Name": "qStateName","DefaultValue": "" }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"CreateBookmark": {
				"In": [{ "Name": "qProp","DefaultValue": {"qInfo": {"qId": "", "qType": ""}, "qMetaDef": {}, "qIncludeVariables": false, "qDistinctValues": false} }],
				"Out": [{ "Name": "qInfo" }]
			},
			"DestroyBookmark": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"GetBookmark": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": []
			},
			"ApplyBookmark": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"ApplyAndVerifyBookmark": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": [{ "Name": "qResult" }]
			},
			"CloneBookmark": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": [{ "Name": "qCloneId" }]
			},
			"AddFieldFromExpression": {
				"In": [{ "Name": "qName","DefaultValue": "" }, { "Name": "qExpr","DefaultValue": "" }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"GetFieldOnTheFlyByName": {
				"In": [{ "Name": "qReadableName","DefaultValue": "" }],
				"Out": [{ "Name": "qName" }]
			},
			"GetAllInfos": {
				"In": [],
				"Out": [{ "Name": "qInfos" }]
			},
			"Resume": {
				"In": [],
				"Out": []
			},
			"AbortModal": {
				"In": [{ "Name": "qAccept","DefaultValue": false }],
				"Out": []
			},
			"Publish": {
				"In": [{ "Name": "qStreamId","DefaultValue": "" }, { "Name": "qName","DefaultValue": "", "Optional": true }],
				"Out": []
			},
			"UnPublish": {
				"In": [],
				"Out": []
			},
			"GetMatchingFields": {
				"In": [{ "Name": "qTags","DefaultValue": [""] }, { "Name": "qMatchingFieldMode","DefaultValue": 0, "Optional": true }],
				"Out": [{ "Name": "qFieldNames" }]
			},
			"FindMatchingFields": {
				"In": [{ "Name": "qFieldName","DefaultValue": "" }, { "Name": "qTags","DefaultValue": [""] }],
				"Out": [{ "Name": "qFieldNames" }]
			},
			"Scramble": {
				"In": [{ "Name": "qFieldName","DefaultValue": "" }],
				"Out": []
			},
			"SaveObjects": {
				"In": [],
				"Out": []
			},
			"GetAssociationScores": {
				"In": [{ "Name": "qTable1","DefaultValue": "" }, { "Name": "qTable2","DefaultValue": "" }],
				"Out": [{ "Name": "qScore" }]
			},
			"GetMediaList": {
				"In": [],
				"Out": [{ "Name": "qList" }]
			},
			"GetContentLibraries": {
				"In": [],
				"Out": [{ "Name": "qList" }]
			},
			"GetLibraryContent": {
				"In": [{ "Name": "qName","DefaultValue": "" }],
				"Out": [{ "Name": "qList" }]
			},
			"DoReloadEx": {
				"In": [{ "Name": "qParams","DefaultValue": {"qMode": 0, "qPartial": false, "qDebug": false, "qReloadId": "", "qSkipStore": false, "qRowLimit": 0}, "Optional": true }],
				"Out": [{ "Name": "qResult" }]
			},
			"BackCount": {
				"In": [],
				"Out": []
			},
			"ForwardCount": {
				"In": [],
				"Out": []
			},
			"ExportReducedData": {
				"In": [{ "Name": "qOptions","DefaultValue": {"qBookmarkId": "", "qExpires": 0, "qServeOnce": false}, "Optional": true }],
				"Out": [{ "Name": "qDownloadInfo" }]
			},
			"GetSetAnalysis": {
				"In": [{ "Name": "qStateName","DefaultValue": "", "Optional": true }, { "Name": "qBookmarkId","DefaultValue": "", "Optional": true }],
				"Out": [{ "Name": "qSetExpression" }]
			},
			"SetScript": {
				"In": [{ "Name": "qScript","DefaultValue": "" }],
				"Out": []
			},
			"CheckScriptSyntax": {
				"In": [],
				"Out": [{ "Name": "qErrors" }]
			},
			"GetFavoriteVariables": {
				"In": [],
				"Out": [{ "Name": "qNames" }]
			},
			"SetFavoriteVariables": {
				"In": [{ "Name": "qNames","DefaultValue": [""] }],
				"Out": []
			},
			"GetIncludeFileContent": {
				"In": [{ "Name": "qPath","DefaultValue": "" }],
				"Out": [{ "Name": "qContent" }]
			},
			"CreateConnection": {
				"In": [{ "Name": "qConnection","DefaultValue": {"qId": "", "qName": "", "qConnectionString": "", "qType": "", "qUserName": "", "qPassword": "", "qModifiedDate": "", "qMeta": {"qName": ""}, "qLogOn": 0} }],
				"Out": [{ "Name": "qConnectionId" }]
			},
			"ModifyConnection": {
				"In": [{ "Name": "qConnectionId","DefaultValue": "" }, { "Name": "qConnection","DefaultValue": {"qId": "", "qName": "", "qConnectionString": "", "qType": "", "qUserName": "", "qPassword": "", "qModifiedDate": "", "qMeta": {"qName": ""}, "qLogOn": 0} }, { "Name": "qOverrideCredentials","DefaultValue": false, "Optional": true }],
				"Out": []
			},
			"DeleteConnection": {
				"In": [{ "Name": "qConnectionId","DefaultValue": "" }],
				"Out": []
			},
			"GetConnection": {
				"In": [{ "Name": "qConnectionId","DefaultValue": "" }],
				"Out": [{ "Name": "qConnection" }]
			},
			"GetConnections": {
				"In": [],
				"Out": [{ "Name": "qConnections" }]
			},
			"GetDatabaseInfo": {
				"In": [{ "Name": "qConnectionId","DefaultValue": "" }],
				"Out": [{ "Name": "qInfo" }]
			},
			"GetDatabases": {
				"In": [{ "Name": "qConnectionId","DefaultValue": "" }],
				"Out": [{ "Name": "qDatabases" }]
			},
			"GetDatabaseOwners": {
				"In": [{ "Name": "qConnectionId","DefaultValue": "" }, { "Name": "qDatabase","DefaultValue": "", "Optional": true }],
				"Out": [{ "Name": "qOwners" }]
			},
			"GetDatabaseTables": {
				"In": [{ "Name": "qConnectionId","DefaultValue": "" }, { "Name": "qDatabase","DefaultValue": "", "Optional": true }, { "Name": "qOwner","DefaultValue": "", "Optional": true }],
				"Out": [{ "Name": "qTables" }]
			},
			"GetDatabaseTableFields": {
				"In": [{ "Name": "qConnectionId","DefaultValue": "" }, { "Name": "qDatabase","DefaultValue": "", "Optional": true }, { "Name": "qOwner","DefaultValue": "", "Optional": true }, { "Name": "qTable","DefaultValue": "" }],
				"Out": [{ "Name": "qFields" }]
			},
			"GetDatabaseTablePreview": {
				"In": [{ "Name": "qConnectionId","DefaultValue": "" }, { "Name": "qDatabase","DefaultValue": "", "Optional": true }, { "Name": "qOwner","DefaultValue": "", "Optional": true }, { "Name": "qTable","DefaultValue": "" }, { "Name": "qConditions","DefaultValue": {"qType": 0, "qWherePredicate": ""}, "Optional": true }],
				"Out": [{ "Name": "qPreview" }, { "Name": "qRowCount" }]
			},
			"GetFolderItemsForConnection": {
				"In": [{ "Name": "qConnectionId","DefaultValue": "" }, { "Name": "qRelativePath","DefaultValue": "", "Optional": true }],
				"Out": [{ "Name": "qFolderItems" }]
			},
			"GuessFileType": {
				"In": [{ "Name": "qConnectionId","DefaultValue": "" }, { "Name": "qRelativePath","DefaultValue": "", "Optional": true }],
				"Out": [{ "Name": "qDataFormat" }]
			},
			"GetFileTables": {
				"In": [{ "Name": "qConnectionId","DefaultValue": "" }, { "Name": "qRelativePath","DefaultValue": "", "Optional": true }, { "Name": "qDataFormat","DefaultValue": {"qType": 0, "qLabel": "", "qQuote": "", "qComment": "", "qDelimiter": {"qName": "", "qScriptCode": "", "qNumber": 0, "qIsMultiple": false}, "qCodePage": 0, "qHeaderSize": 0, "qRecordSize": 0, "qTabSize": 0, "qIgnoreEOF": false, "qFixedWidthDelimiters": ""} }],
				"Out": [{ "Name": "qTables" }]
			},
			"GetFileTableFields": {
				"In": [{ "Name": "qConnectionId","DefaultValue": "" }, { "Name": "qRelativePath","DefaultValue": "", "Optional": true }, { "Name": "qDataFormat","DefaultValue": {"qType": 0, "qLabel": "", "qQuote": "", "qComment": "", "qDelimiter": {"qName": "", "qScriptCode": "", "qNumber": 0, "qIsMultiple": false}, "qCodePage": 0, "qHeaderSize": 0, "qRecordSize": 0, "qTabSize": 0, "qIgnoreEOF": false, "qFixedWidthDelimiters": ""} }, { "Name": "qTable","DefaultValue": "" }],
				"Out": [{ "Name": "qFields" }, { "Name": "qFormatSpec" }]
			},
			"GetFileTablePreview": {
				"In": [{ "Name": "qConnectionId","DefaultValue": "" }, { "Name": "qRelativePath","DefaultValue": "", "Optional": true }, { "Name": "qDataFormat","DefaultValue": {"qType": 0, "qLabel": "", "qQuote": "", "qComment": "", "qDelimiter": {"qName": "", "qScriptCode": "", "qNumber": 0, "qIsMultiple": false}, "qCodePage": 0, "qHeaderSize": 0, "qRecordSize": 0, "qTabSize": 0, "qIgnoreEOF": false, "qFixedWidthDelimiters": ""} }, { "Name": "qTable","DefaultValue": "" }],
				"Out": [{ "Name": "qPreview" }, { "Name": "qFormatSpec" }]
			},
			"GetFileTablesEx": {
				"In": [{ "Name": "qConnectionId","DefaultValue": "" }, { "Name": "qRelativePath","DefaultValue": "", "Optional": true }, { "Name": "qDataFormat","DefaultValue": {"qType": 0, "qLabel": "", "qQuote": "", "qComment": "", "qDelimiter": {"qName": "", "qScriptCode": "", "qNumber": 0, "qIsMultiple": false}, "qCodePage": 0, "qHeaderSize": 0, "qRecordSize": 0, "qTabSize": 0, "qIgnoreEOF": false, "qFixedWidthDelimiters": ""} }],
				"Out": [{ "Name": "qTables" }]
			},
			"SendGenericCommandToCustomConnector": {
				"In": [{ "Name": "qProvider","DefaultValue": "" }, { "Name": "qCommand","DefaultValue": "" }, { "Name": "qMethod","DefaultValue": "" }, { "Name": "qParameters","DefaultValue": [""] }, { "Name": "qAppendConnection","DefaultValue": "" }],
				"Out": [{ "Name": "qResult" }]
			},
			"SearchSuggest": {
				"In": [{ "Name": "qOptions","DefaultValue": {"qSearchFields": [""], "qContext": 0, "qCharEncoding": 0, "qAttributes": [""]} }, { "Name": "qTerms","DefaultValue": [""] }],
				"Out": [{ "Name": "qResult" }]
			},
			"SearchAssociations": {
				"In": [{ "Name": "qOptions","DefaultValue": {"qSearchFields": [""], "qContext": 0, "qCharEncoding": 0, "qAttributes": [""]} }, { "Name": "qTerms","DefaultValue": [""] }, { "Name": "qPage","DefaultValue": {"qOffset": 0, "qCount": 0, "qMaxNbrFieldMatches": 0, "qGroupOptions": [{"qGroupType": 0, "qOffset": 0, "qCount": 0}], "qGroupItemOptions": [{"qGroupItemType": 0, "qOffset": 0, "qCount": 0}]} }],
				"Out": [{ "Name": "qResults" }]
			},
			"SelectAssociations": {
				"In": [{ "Name": "qOptions","DefaultValue": {"qSearchFields": [""], "qContext": 0, "qCharEncoding": 0, "qAttributes": [""]} }, { "Name": "qTerms","DefaultValue": [""] }, { "Name": "qMatchIx","DefaultValue": 0 }, { "Name": "qSoftLock","DefaultValue": null, "Optional": true }],
				"Out": []
			},
			"SearchResults": {
				"In": [{ "Name": "qOptions","DefaultValue": {"qSearchFields": [""], "qContext": 0, "qCharEncoding": 0, "qAttributes": [""]} }, { "Name": "qTerms","DefaultValue": [""] }, { "Name": "qPage","DefaultValue": {"qOffset": 0, "qCount": 0, "qMaxNbrFieldMatches": 0, "qGroupOptions": [{"qGroupType": 0, "qOffset": 0, "qCount": 0}], "qGroupItemOptions": [{"qGroupItemType": 0, "qOffset": 0, "qCount": 0}]} }],
				"Out": [{ "Name": "qResult" }]
			},
			"SearchObjects": {
				"In": [{ "Name": "qOptions","DefaultValue": {"qAttributes": [""], "qCharEncoding": 0} }, { "Name": "qTerms","DefaultValue": [""] }, { "Name": "qPage","DefaultValue": {"qOffset": 0, "qCount": 0, "qMaxNbrFieldMatches": 0, "qGroupOptions": [{"qGroupType": 0, "qOffset": 0, "qCount": 0}], "qGroupItemOptions": [{"qGroupItemType": 0, "qOffset": 0, "qCount": 0}]} }],
				"Out": [{ "Name": "qResult" }]
			},
			"GetFieldAndColumnSamples": {
				"In": [{ "Name": "qFieldsOrColumnsWithWildcards","DefaultValue": [{"qFieldName": "", "qTableName": ""}] }, { "Name": "qMaxNumberOfValues","DefaultValue": 0 }, { "Name": "qRandSeed","DefaultValue": 0, "Optional": true }],
				"Out": [{ "Name": "qResult" }]
			},
			"GetScriptEx": {
				"In": [],
				"Out": [{ "Name": "qScript" }]
			},
			"GetVariables": {
				"In": [{ "Name": "qListDef","DefaultValue": {"qType": "", "qShowReserved": false, "qShowConfig": false, "qData": {}, "qShowSession": false} }],
				"Out": [{ "Name": "qList" }]
			},
			"ExpandExpression": {
				"In": [{ "Name": "qExpression","DefaultValue": "" }],
				"Out": [{ "Name": "qExpandedExpression" }]
			},
			"DestroySessionVariableById": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"DestroySessionVariableByName": {
				"In": [{ "Name": "qName","DefaultValue": "" }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"SetAppObjectSortingRank": {
				"In": [{ "Name": "qId","DefaultValue": "" }, { "Name": "qRank","DefaultValue": 0 }],
				"Out": []
			},
			"GetActiveSheetId": {
				"In": [],
				"Out": [{ "Name": "qId" }]
			},
			"GetLayoutProperties": {
				"In": [],
				"Out": [{ "Name": "qLayoutProp" }]
			},
			"CreateBookmarkEx": {
				"In": [{ "Name": "qProp","DefaultValue": {"qInfo": {"qId": "", "qType": ""}, "qMetaDef": {}, "qIncludeVariables": false, "qDistinctValues": false} }, { "Name": "qObjectIdsToPatch","DefaultValue": [""], "Optional": true }],
				"Out": [{ "Name": "qInfo" }]
			},
			"SaveAs": {
				"In": [{ "Name": "qNewAppName","DefaultValue": "" }],
				"Out": [{ "Name": "qNewAppId" }]
			},
			"StoreTempSelectionState": {
				"In": [{ "Name": "qTTLOfTempState","DefaultValue": 0, "Optional": true }],
				"Out": [{ "Name": "qId" }]
			},
			"RestoreTempSelectionState": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": []
			},
			"ChangeSessionAppOwner": {
				"In": [{ "Name": "qNewOwnerId","DefaultValue": "" }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"ChangeSessionAppSpace": {
				"In": [{ "Name": "qSpaceId","DefaultValue": "" }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"GetTableProfileData": {
				"In": [{ "Name": "qTableName","DefaultValue": "" }],
				"Out": [{ "Name": "qProfiling" }]
			},
			"GetMeasureWithLabel": {
				"In": [{ "Name": "qLabel","DefaultValue": "" }],
				"Out": []
			},
			"SearchValues": {
				"In": [{ "Name": "qOptions","DefaultValue": {"qSearchFields": [""]} }, { "Name": "qTerms","DefaultValue": [""] }, { "Name": "qPage","DefaultValue": {"qOffset": 0, "qCount": 0, "qMaxNbrFieldMatches": 0} }],
				"Out": [{ "Name": "qResult" }]
			},
			"GetFieldsFromExpression": {
				"In": [{ "Name": "qExpr","DefaultValue": "" }],
				"Out": [{ "Name": "qFieldNames" }]
			},
			"GetFieldsResourceIds": {
				"In": [{ "Name": "qFieldNames","DefaultValue": [""] }],
				"Out": [{ "Name": "qFields" }]
			},
			"UploadTable": {
				"In": [{ "Name": "qDomain","DefaultValue": 0 }, { "Name": "qDatasetId","DefaultValue": "" }, { "Name": "qTableName","DefaultValue": "" }, { "Name": "qFieldNames","DefaultValue": [""], "Optional": true }],
				"Out": []
			},
			"GetExpressionBNF": {
				"In": [],
				"Out": [{ "Name": "qBnfDefs" }, { "Name": "qBnfHash" }]
			},
			"GetExpressionBNFHash": {
				"In": [],
				"Out": [{ "Name": "qBnfHash" }]
			},
			"SetProhibitBinaryLoad": {
				"In": [{ "Name": "qProhibit","DefaultValue": false }],
				"Out": []
			},
			"TransformApp": {
				"In": [{ "Name": "qDstParameters","DefaultValue": {"qName": "", "qSpaceId": "", "qScriptParameterPrefix": ""} }],
				"Out": [{ "Name": "qResult" }]
			},
			"CreateTemporaryBookmark": {
				"In": [{ "Name": "qOptions","DefaultValue": {"qIncludeVariables": false, "qIncludeAllPatches": false} }, { "Name": "qObjectIdsToPatch","DefaultValue": [""], "Optional": true }],
				"Out": [{ "Name": "qId" }]
			},
			"ApplyTemporaryBookmark": {
				"In": [{ "Name": "qId","DefaultValue": "" }],
				"Out": []
			},
			"GetScriptMeta": {
				"In": [],
				"Out": [{ "Name": "qMeta" }]
			},
			"ReplaceBookmark": {
				"In": [{ "Name": "qId","DefaultValue": "" }, { "Name": "qIgnorePatches","DefaultValue": false, "Optional": true }, { "Name": "qObjectIdsToPatch","DefaultValue": [""], "Optional": true }],
				"Out": [{ "Name": "qInfo" }]
			},
			"ClearAllSoftPatches": {
				"In": [],
				"Out": []
			},
			"BulkRequest": {
				"In": [{ "Name": "qReqs","DefaultValue": {"qOperations": [{"qMethod": "", "qId": "", "qTarget": 0, "qArgs": {}}]} }],
				"Out": [{ "Name": "qBulkRes" }]
			},
			"CommitScript": {
				"In": [{ "Name": "qCommitMessage","DefaultValue": "", "Optional": true }],
				"Out": []
			}
		},
		"Global":{
			"AbortRequest": {
				"In": [{ "Name": "qRequestId","DefaultValue": 0 }],
				"Out": []
			},
			"AbortAll": {
				"In": [],
				"Out": []
			},
			"GetProgress": {
				"In": [{ "Name": "qRequestId","DefaultValue": 0 }],
				"Out": [{ "Name": "qProgressData" }]
			},
			"QvVersion": {
				"In": [],
				"Out": []
			},
			"OSVersion": {
				"In": [],
				"Out": []
			},
			"OSName": {
				"In": [],
				"Out": []
			},
			"QTProduct": {
				"In": [],
				"Out": []
			},
			"GetDocList": {
				"In": [],
				"Out": [{ "Name": "qDocList" }]
			},
			"GetInteract": {
				"In": [{ "Name": "qRequestId","DefaultValue": 0 }],
				"Out": [{ "Name": "qDef" }]
			},
			"InteractDone": {
				"In": [{ "Name": "qRequestId","DefaultValue": 0 }, { "Name": "qDef","DefaultValue": {"qType": 0, "qTitle": "", "qMsg": "", "qButtons": 0, "qLine": "", "qOldLineNr": 0, "qNewLineNr": 0, "qPath": "", "qHidden": false, "qResult": 0, "qInput": ""} }],
				"Out": []
			},
			"GetAuthenticatedUser": {
				"In": [],
				"Out": []
			},
			"CreateDocEx": {
				"In": [{ "Name": "qDocName","DefaultValue": "" }, { "Name": "qUserName","DefaultValue": "", "Optional": true }, { "Name": "qPassword","DefaultValue": "", "Optional": true }, { "Name": "qSerial","DefaultValue": "", "Optional": true }, { "Name": "qLocalizedScriptMainSection","DefaultValue": "", "Optional": true }],
				"Out": [{ "Name": "qDocId" }]
			},
			"GetActiveDoc": {
				"In": [],
				"Out": []
			},
			"AllowCreateApp": {
				"In": [],
				"Out": []
			},
			"CreateApp": {
				"In": [{ "Name": "qAppName","DefaultValue": "" }, { "Name": "qLocalizedScriptMainSection","DefaultValue": "", "Optional": true }, { "Name": "qLocale","DefaultValue": "", "Optional": true }],
				"Out": [{ "Name": "qSuccess" }, { "Name": "qAppId" }]
			},
			"DeleteApp": {
				"In": [{ "Name": "qAppId","DefaultValue": "" }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"IsDesktopMode": {
				"In": [],
				"Out": []
			},
			"GetConfiguration": {
				"In": [],
				"Out": [{ "Name": "qConfig" }]
			},
			"CancelRequest": {
				"In": [{ "Name": "qRequestId","DefaultValue": 0 }],
				"Out": []
			},
			"ShutdownProcess": {
				"In": [],
				"Out": []
			},
			"ReloadExtensionList": {
				"In": [],
				"Out": []
			},
			"ReplaceAppFromID": {
				"In": [{ "Name": "qTargetAppId","DefaultValue": "" }, { "Name": "qSrcAppID","DefaultValue": "" }, { "Name": "qIds","DefaultValue": [""] }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"ReplaceAppFromPath": {
				"In": [{ "Name": "qTargetAppId","DefaultValue": "" }, { "Name": "qSrcPath","DefaultValue": "" }, { "Name": "qIds","DefaultValue": [""] }, { "Name": "qNoData","DefaultValue": false }],
				"Out": []
			},
			"CopyApp": {
				"In": [{ "Name": "qTargetAppId","DefaultValue": "" }, { "Name": "qSrcAppId","DefaultValue": "" }, { "Name": "qIds","DefaultValue": [""] }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"ImportApp": {
				"In": [{ "Name": "qAppId","DefaultValue": "" }, { "Name": "qSrcPath","DefaultValue": "" }, { "Name": "qIds","DefaultValue": [""] }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"ImportAppEx": {
				"In": [{ "Name": "qAppId","DefaultValue": "" }, { "Name": "qSrcPath","DefaultValue": "" }, { "Name": "qIds","DefaultValue": [""] }, { "Name": "qExcludeConnections","DefaultValue": false }],
				"Out": []
			},
			"ExportApp": {
				"In": [{ "Name": "qTargetPath","DefaultValue": "" }, { "Name": "qSrcAppId","DefaultValue": "" }, { "Name": "qIds","DefaultValue": [""] }, { "Name": "qNoData","DefaultValue": false, "Optional": true }],
				"Out": [{ "Name": "qSuccess" }]
			},
			"PublishApp": {
				"In": [{ "Name": "qAppId","DefaultValue": "" }, { "Name": "qName","DefaultValue": "" }, { "Name": "qStreamId","DefaultValue": "" }],
				"Out": []
			},
			"IsPersonalMode": {
				"In": [],
				"Out": []
			},
			"GetUniqueID": {
				"In": [],
				"Out": [{ "Name": "qUniqueID" }]
			},
			"OpenDoc": {
				"In": [{ "Name": "qDocName","DefaultValue": "" }, { "Name": "qUserName","DefaultValue": "", "Optional": true }, { "Name": "qPassword","DefaultValue": "", "Optional": true }, { "Name": "qSerial","DefaultValue": "", "Optional": true }, { "Name": "qNoData","DefaultValue": false, "Optional": true }],
				"Out": []
			},
			"CreateSessionApp": {
				"In": [],
				"Out": [{ "Name": "qSessionAppId" }]
			},
			"CreateSessionAppFromApp": {
				"In": [{ "Name": "qSrcAppId","DefaultValue": "" }],
				"Out": [{ "Name": "qSessionAppId" }]
			},
			"ProductVersion": {
				"In": [],
				"Out": []
			},
			"GetAppEntry": {
				"In": [{ "Name": "qAppID","DefaultValue": "" }],
				"Out": [{ "Name": "qEntry" }]
			},
			"ConfigureReload": {
				"In": [{ "Name": "qCancelOnScriptError","DefaultValue": false }, { "Name": "qUseErrorData","DefaultValue": false }, { "Name": "qInteractOnError","DefaultValue": false }],
				"Out": []
			},
			"CancelReload": {
				"In": [{ "Name": "qReason","DefaultValue": "", "Optional": true }],
				"Out": []
			},
			"GetBNF": {
				"In": [{ "Name": "qBnfType","DefaultValue": 0 }],
				"Out": [{ "Name": "qBnfDefs" }]
			},
			"GetFunctions": {
				"In": [{ "Name": "qGroup","DefaultValue": 0, "Optional": true }],
				"Out": [{ "Name": "qFunctions" }]
			},
			"GetOdbcDsns": {
				"In": [],
				"Out": [{ "Name": "qOdbcDsns" }]
			},
			"GetOleDbProviders": {
				"In": [],
				"Out": [{ "Name": "qOleDbProviders" }]
			},
			"GetDatabasesFromConnectionString": {
				"In": [{ "Name": "qConnection","DefaultValue": {"qId": "", "qName": "", "qConnectionString": "", "qType": "", "qUserName": "", "qPassword": "", "qModifiedDate": "", "qMeta": {"qName": ""}, "qLogOn": 0} }],
				"Out": [{ "Name": "qDatabases" }]
			},
			"IsValidConnectionString": {
				"In": [{ "Name": "qConnection","DefaultValue": {"qId": "", "qName": "", "qConnectionString": "", "qType": "", "qUserName": "", "qPassword": "", "qModifiedDate": "", "qMeta": {"qName": ""}, "qLogOn": 0} }],
				"Out": []
			},
			"GetDefaultAppFolder": {
				"In": [],
				"Out": [{ "Name": "qPath" }]
			},
			"GetMyDocumentsFolder": {
				"In": [],
				"Out": [{ "Name": "qFolder" }]
			},
			"GetLogicalDriveStrings": {
				"In": [],
				"Out": [{ "Name": "qDrives" }]
			},
			"GetFolderItemsForPath": {
				"In": [{ "Name": "qPath","DefaultValue": "" }],
				"Out": [{ "Name": "qFolderItems" }]
			},
			"GetSupportedCodePages": {
				"In": [],
				"Out": [{ "Name": "qCodePages" }]
			},
			"GetCustomConnectors": {
				"In": [{ "Name": "qReloadList","DefaultValue": false, "Optional": true }],
				"Out": [{ "Name": "qConnectors" }]
			},
			"GetStreamList": {
				"In": [],
				"Out": [{ "Name": "qStreamList" }]
			},
			"EngineVersion": {
				"In": [],
				"Out": [{ "Name": "qVersion" }]
			},
			"GetBaseBNF": {
				"In": [{ "Name": "qBnfType","DefaultValue": 0 }],
				"Out": [{ "Name": "qBnfDefs" }, { "Name": "qBnfHash" }]
			},
			"GetBaseBNFHash": {
				"In": [{ "Name": "qBnfType","DefaultValue": 0 }],
				"Out": [{ "Name": "qBnfHash" }]
			},
			"GetBaseBNFString": {
				"In": [{ "Name": "qBnfType","DefaultValue": 0 }],
				"Out": [{ "Name": "qBnfStr" }, { "Name": "qBnfHash" }]
			},
			"SaveAs": {
				"In": [{ "Name": "qNewAppName","DefaultValue": "" }],
				"Out": [{ "Name": "qNewAppId" }]
			}
		}
	},
	"enums": {
		"LocalizedMessageCode": {
			"LOCMSG_SCRIPTEDITOR_EMPTY_MESSAGE": 0,
			"LOCMSG_SCRIPTEDITOR_PROGRESS_SAVING_STARTED": 1,
			"LOCMSG_SCRIPTEDITOR_PROGRESS_BYTES_LEFT": 2,
			"LOCMSG_SCRIPTEDITOR_PROGRESS_STORING_TABLES": 3,
			"LOCMSG_SCRIPTEDITOR_PROGRESS_QVD_ROWS_SO_FAR": 4,
			"LOCMSG_SCRIPTEDITOR_PROGRESS_CONNECTED": 5,
			"LOCMSG_SCRIPTEDITOR_PROGRESS_CONNECTING_TO": 6,
			"LOCMSG_SCRIPTEDITOR_PROGRESS_CONNECT_FAILED": 7,
			"LOCMSG_SCRIPTEDITOR_PROGRESS_QVD_ROWISH": 8,
			"LOCMSG_SCRIPTEDITOR_PROGRESS_QVD_COLUMNAR": 9,
			"LOCMSG_SCRIPTEDITOR_ERROR": 10,
			"LOCMSG_SCRIPTEDITOR_DONE": 11,
			"LOCMSG_SCRIPTEDITOR_LOAD_EXTERNAL_DATA": 12,
			"LOCMSG_SCRIPTEDITOR_PROGRESS_OLD_QVD_ISLOADING": 13,
			"LOCMSG_SCRIPTEDITOR_PROGRESS_QVC_LOADING": 14,
			"LOCMSG_SCRIPTEDITOR_PROGRESS_QVD_BUFFERED": 15,
			"LOCMSG_SCRIPTEDITOR_PROGRESS_QVC_PREPARING": 16,
			"LOCMSG_SCRIPTEDITOR_PROGRESS_QVC_APPENDING": 17,
			"LOCMSG_SCRIPTEDITOR_REMOVE_SYNTHETIC": 18,
			"LOCMSG_SCRIPTEDITOR_PENDING_LINKEDTABLE_FETCHING": 19,
			"LOCMSG_SCRIPTEDITOR_RELOAD": 20,
			"LOCMSG_SCRIPTEDITOR_LINES_FETCHED": 21,
			"LOCMSG_SCRIPTEDITOR_SEARCHINDEX_START": 22,
			"LOCMSG_SCRIPTEDITOR_SEARCHINDEX_FIELD": 23,
			"LOCMSG_SCRIPTEDITOR_SEARCHINDEX_SUCCESS": 24,
			"LOCMSG_SCRIPTEDITOR_SEARCHINDEX_FAILURE": 25,
			"LOCMSG_SCRIPTEDITOR_SEARCHINDEX_STARTABORT": 26,
			"LOCMSG_SCRIPTEDITOR_SEARCHINDEX_ENDABORT": 27,
			"LOCMSG_SCRIPTEDITOR_SEARCHINDEX_TIMEOUT": 28,
			"LOCMSG_SCRIPTEDITOR_SEARCHINDEX_OUTOFMEMORY": 29,
			"LOCMSG_SCRIPTEDITOR_ACCESS_DENIED_AFTER_RELOAD": 30,
			"LOCMSG_SCRIPTEDITOR_MERGED_UPDATES": 31,
			"LOCMSG_SCRIPTEDITOR_MERGED_INSERTS": 32,
			"LOCMSG_SCRIPTEDITOR_MERGED_DELETES": 33
		},
		"LocalizedErrorCode": {
			"LOCERR_INTERNAL_ERROR": -128,
			"LOCERR_GENERIC_UNKNOWN": -1,
			"LOCERR_GENERIC_OK": 0,
			"LOCERR_GENERIC_NOT_SET": 1,
			"LOCERR_GENERIC_NOT_FOUND": 2,
			"LOCERR_GENERIC_ALREADY_EXISTS": 3,
			"LOCERR_GENERIC_INVALID_PATH": 4,
			"LOCERR_GENERIC_ACCESS_DENIED": 5,
			"LOCERR_GENERIC_OUT_OF_MEMORY": 6,
			"LOCERR_GENERIC_NOT_INITIALIZED": 7,
			"LOCERR_GENERIC_INVALID_PARAMETERS": 8,
			"LOCERR_GENERIC_EMPTY_PARAMETERS": 9,
			"LOCERR_GENERIC_INTERNAL_ERROR": 10,
			"LOCERR_GENERIC_CORRUPT_DATA": 11,
			"LOCERR_GENERIC_MEMORY_INCONSISTENCY": 12,
			"LOCERR_GENERIC_INVISIBLE_OWNER_ABORT": 13,
			"LOCERR_GENERIC_PROHIBIT_VALIDATE": 14,
			"LOCERR_GENERIC_ABORTED": 15,
			"LOCERR_GENERIC_CONNECTION_LOST": 16,
			"LOCERR_GENERIC_UNSUPPORTED_IN_PRODUCT_VERSION": 17,
			"LOCERR_GENERIC_REST_CONNECTION_FAILURE": 18,
			"LOCERR_GENERIC_MEMORY_LIMIT_REACHED": 19,
			"LOCERR_GENERIC_NOT_IMPLEMENTED": 20,
			"LOCERR_HTTP_400": 400,
			"LOCERR_HTTP_401": 401,
			"LOCERR_HTTP_402": 402,
			"LOCERR_HTTP_403": 403,
			"LOCERR_HTTP_404": 404,
			"LOCERR_HTTP_405": 405,
			"LOCERR_HTTP_406": 406,
			"LOCERR_HTTP_407": 407,
			"LOCERR_HTTP_408": 408,
			"LOCERR_HTTP_409": 409,
			"LOCERR_HTTP_410": 410,
			"LOCERR_HTTP_411": 411,
			"LOCERR_HTTP_412": 412,
			"LOCERR_HTTP_413": 413,
			"LOCERR_HTTP_414": 414,
			"LOCERR_HTTP_415": 415,
			"LOCERR_HTTP_416": 416,
			"LOCERR_HTTP_417": 417,
			"LOCERR_HTTP_422": 422,
			"LOCERR_HTTP_423": 423,
			"LOCERR_HTTP_429": 429,
			"LOCERR_HTTP_500": 500,
			"LOCERR_HTTP_501": 501,
			"LOCERR_HTTP_502": 502,
			"LOCERR_HTTP_503": 503,
			"LOCERR_HTTP_504": 504,
			"LOCERR_HTTP_505": 505,
			"LOCERR_HTTP_509": 509,
			"LOCERR_HTTP_COULD_NOT_RESOLVE_HOST": 700,
			"LOCERR_APP_ALREADY_EXISTS": 1000,
			"LOCERR_APP_INVALID_NAME": 1001,
			"LOCERR_APP_ALREADY_OPEN": 1002,
			"LOCERR_APP_NOT_FOUND": 1003,
			"LOCERR_APP_IMPORT_FAILED": 1004,
			"LOCERR_APP_SAVE_FAILED": 1005,
			"LOCERR_APP_CREATE_FAILED": 1006,
			"LOCERR_APP_INVALID": 1007,
			"LOCERR_APP_CONNECT_FAILED": 1008,
			"LOCERR_APP_ALREADY_OPEN_IN_DIFFERENT_MODE": 1009,
			"LOCERR_APP_MIGRATION_COULD_NOT_CONTACT_MIGRATION_SERVICE": 1010,
			"LOCERR_APP_MIGRATION_COULD_NOT_START_MIGRATION": 1011,
			"LOCERR_APP_MIGRATION_FAILURE": 1012,
			"LOCERR_APP_SCRIPT_MISSING": 1013,
			"LOCERR_APP_EXPORT_FAILED": 1014,
			"LOCERR_APP_SIZE_EXCEEDED": 1015,
			"LOCERR_APP_DIRECT_QUERY_WORKLOAD_NOT_SUPPORTED": 1016,
			"LOCERR_APP_NOT_OPEN": 1017,
			"LOCERR_APP_EVENT_SOURCE_TIMEOUT": 1018,
			"LOCERR_CONNECTION_ALREADY_EXISTS": 2000,
			"LOCERR_CONNECTION_NOT_FOUND": 2001,
			"LOCERR_CONNECTION_FAILED_TO_LOAD": 2002,
			"LOCERR_CONNECTION_FAILED_TO_IMPORT": 2003,
			"LOCERR_CONNECTION_NAME_IS_INVALID": 2004,
			"LOCERR_CONNECTION_MISSING_CREDENTIALS": 2005,
			"LOCERR_CONNECTOR_NO_FILE_STREAMING_SUPPORT": 2300,
			"LOCERR_CONNECTOR_FILESIZE_EXCEEDED_BUFFER_SIZE": 2301,
			"LOCERR_FILE_ACCESS_DENIED": 3000,
			"LOCERR_FILE_NAME_INVALID": 3001,
			"LOCERR_FILE_CORRUPT": 3002,
			"LOCERR_FILE_NOT_FOUND": 3003,
			"LOCERR_FILE_FORMAT_UNSUPPORTED": 3004,
			"LOCERR_FILE_OPENED_IN_UNSUPPORTED_MODE": 3005,
			"LOCERR_FILE_TABLE_NOT_FOUND": 3006,
			"LOCERR_USER_ACCESS_DENIED": 4000,
			"LOCERR_USER_IMPERSONATION_FAILED": 4001,
			"LOCERR_SERVER_OUT_OF_SESSION_AND_USER_CALS": 5000,
			"LOCERR_SERVER_OUT_OF_SESSION_CALS": 5001,
			"LOCERR_SERVER_OUT_OF_USAGE_CALS": 5002,
			"LOCERR_SERVER_OUT_OF_CALS": 5003,
			"LOCERR_SERVER_OUT_OF_NAMED_CALS": 5004,
			"LOCERR_SERVER_OFF_DUTY": 5005,
			"LOCERR_SERVER_BUSY": 5006,
			"LOCERR_SERVER_LICENSE_EXPIRED": 5007,
			"LOCERR_SERVER_AJAX_DISABLED": 5008,
			"LOCERR_SERVER_NO_TOKEN": 5009,
			"LOCERR_HC_INVALID_OBJECT": 6000,
			"LOCERR_HC_RESULT_TOO_LARGE": 6001,
			"LOCERR_HC_INVALID_OBJECT_STATE": 6002,
			"LOCERR_HC_MODAL_OBJECT_ERROR": 6003,
			"LOCERR_CALC_INVALID_DEF": 7000,
			"LOCERR_CALC_NOT_IN_LIB": 7001,
			"LOCERR_CALC_HEAP_ERROR": 7002,
			"LOCERR_CALC_TOO_LARGE": 7003,
			"LOCERR_CALC_TIMEOUT": 7004,
			"LOCERR_CALC_EVAL_CONDITION_FAILED": 7005,
			"LOCERR_CALC_MIXED_LINKED_AGGREGATION": 7006,
			"LOCERR_CALC_MISSING_LINKED": 7007,
			"LOCERR_CALC_INVALID_COL_SORT": 7008,
			"LOCERR_CALC_PAGES_TOO_LARGE": 7009,
			"LOCERR_CALC_SEMANTIC_FIELD_NOT_ALLOWED": 7010,
			"LOCERR_CALC_VALIDATION_STATE_INVALID": 7011,
			"LOCERR_CALC_PIVOT_DIMENSIONS_ALREADY_EXISTS": 7012,
			"LOCERR_CALC_MISSING_LINKED_FIELD": 7013,
			"LOCERR_CALC_NOT_CALCULATED": 7014,
			"LOCERR_LAYOUT_EXTENDS_INVALID_ID": 8000,
			"LOCERR_LAYOUT_LINKED_OBJECT_NOT_FOUND": 8001,
			"LOCERR_LAYOUT_LINKED_OBJECT_INVALID": 8002,
			"LOCERR_PERSISTENCE_WRITE_FAILED": 9000,
			"LOCERR_PERSISTENCE_READ_FAILED": 9001,
			"LOCERR_PERSISTENCE_DELETE_FAILED": 9002,
			"LOCERR_PERSISTENCE_NOT_FOUND": 9003,
			"LOCERR_PERSISTENCE_UNSUPPORTED_VERSION": 9004,
			"LOCERR_PERSISTENCE_MIGRATION_FAILED_READ_ONLY": 9005,
			"LOCERR_PERSISTENCE_MIGRATION_CANCELLED": 9006,
			"LOCERR_PERSISTENCE_MIGRATION_BACKUP_FAILED": 9007,
			"LOCERR_PERSISTENCE_DISK_FULL": 9008,
			"LOCERR_PERSISTENCE_NOT_SUPPORTED_FOR_SESSION_APP": 9009,
			"LOCERR_PERSISTENCE_MOVE_FAILED": 9010,
			"LOCERR_PERSISTENCE_OBJECT_LOCKED": 9011,
			"LOCERR_PERSISTENCE_ENCRYPTION_KEY_MIGRATION_ONGOING": 9012,
			"LOCERR_PERSISTENCE_SYNC_SET_CHUNK_INVALID_PARAMETERS": 9510,
			"LOCERR_PERSISTENCE_SYNC_GET_CHUNK_INVALID_PARAMETERS": 9511,
			"LOCERR_SCRIPT_DATASOURCE_ACCESS_DENIED": 10000,
			"LOCERR_RELOAD_IN_PROGRESS": 11000,
			"LOCERR_RELOAD_TABLE_X_NOT_FOUND": 11001,
			"LOCERR_RELOAD_UNKNOWN_STATEMENT": 11002,
			"LOCERR_RELOAD_EXPECTED_SOMETHING_FOUND_UNKNOWN": 11003,
			"LOCERR_RELOAD_EXPECTED_NOTHING_FOUND_UNKNOWN": 11004,
			"LOCERR_RELOAD_EXPECTED_ONE_OF_1_TOKENS_FOUND_UNKNOWN": 11005,
			"LOCERR_RELOAD_EXPECTED_ONE_OF_2_TOKENS_FOUND_UNKNOWN": 11006,
			"LOCERR_RELOAD_EXPECTED_ONE_OF_3_TOKENS_FOUND_UNKNOWN": 11007,
			"LOCERR_RELOAD_EXPECTED_ONE_OF_4_TOKENS_FOUND_UNKNOWN": 11008,
			"LOCERR_RELOAD_EXPECTED_ONE_OF_5_TOKENS_FOUND_UNKNOWN": 11009,
			"LOCERR_RELOAD_EXPECTED_ONE_OF_6_TOKENS_FOUND_UNKNOWN": 11010,
			"LOCERR_RELOAD_EXPECTED_ONE_OF_7_TOKENS_FOUND_UNKNOWN": 11011,
			"LOCERR_RELOAD_EXPECTED_ONE_OF_8_OR_MORE_TOKENS_FOUND_UNKNOWN": 11012,
			"LOCERR_RELOAD_FIELD_X_NOT_FOUND": 11013,
			"LOCERR_RELOAD_MAPPING_TABLE_X_NOT_FOUND": 11014,
			"LOCERR_RELOAD_LIB_CONNECTION_X_NOT_FOUND": 11015,
			"LOCERR_RELOAD_NAME_ALREADY_TAKEN": 11016,
			"LOCERR_RELOAD_WRONG_FILE_FORMAT_DIF": 11017,
			"LOCERR_RELOAD_WRONG_FILE_FORMAT_BIFF": 11018,
			"LOCERR_RELOAD_WRONG_FILE_FORMAT_ENCRYPTED": 11019,
			"LOCERR_RELOAD_OPEN_FILE_ERROR": 11020,
			"LOCERR_RELOAD_AUTO_GENERATE_COUNT": 11021,
			"LOCERR_RELOAD_PE_ILLEGAL_PREFIX_COMB": 11022,
			"LOCERR_RELOAD_MATCHING_CONTROL_STATEMENT_ERROR": 11023,
			"LOCERR_RELOAD_MATCHING_LIBPATH_X_NOT_FOUND": 11024,
			"LOCERR_RELOAD_MATCHING_LIBPATH_X_INVALID": 11025,
			"LOCERR_RELOAD_MATCHING_LIBPATH_X_OUTSIDE": 11026,
			"LOCERR_RELOAD_NO_QUALIFIED_PATH_FOR_FILE": 11027,
			"LOCERR_RELOAD_MODE_STATEMENT_ONLY_FOR_LIB_PATHS": 11028,
			"LOCERR_RELOAD_INCONSISTENT_USE_OF_SEMANTIC_FIELDS": 11029,
			"LOCERR_RELOAD_NO_OPEN_DATABASE": 11030,
			"LOCERR_RELOAD_AGGREGATION_REQUIRED_BY_GROUP_BY": 11031,
			"LOCERR_RELOAD_CONNECT_MUST_USE_LIB_PREFIX_IN_THIS_MODE": 11032,
			"LOCERR_RELOAD_ODBC_CONNECT_FAILED": 11033,
			"LOCERR_RELOAD_OLEDB_CONNECT_FAILED": 11034,
			"LOCERR_RELOAD_CUSTOM_CONNECT_FAILED": 11035,
			"LOCERR_RELOAD_ODBC_READ_FAILED": 11036,
			"LOCERR_RELOAD_OLEDB_READ_FAILED": 11037,
			"LOCERR_RELOAD_CUSTOM_READ_FAILED": 11038,
			"LOCERR_RELOAD_BINARY_LOAD_PROHIBITED": 11039,
			"LOCERR_RELOAD_CONNECTOR_START_FAILED": 11040,
			"LOCERR_RELOAD_CONNECTOR_NOT_RESPONDING": 11041,
			"LOCERR_RELOAD_CONNECTOR_REPLY_ERROR": 11042,
			"LOCERR_RELOAD_CONNECTOR_CONNECT_ERROR": 11043,
			"LOCERR_RELOAD_CONNECTOR_NOT_FOUND_ERROR": 11044,
			"LOCERR_RELOAD_INPUT_FIELD_WITH_DUPLICATE_KEYS": 11045,
			"LOCERR_RELOAD_CONCATENATE_LOAD_NO_PREVIOUS_TABLE": 11046,
			"LOCERR_RELOAD_WRONG_FILE_FORMAT_QVD": 11047,
			"LOCERR_RELOAD_ACTION_BLOCKED_ENTITLEMENT": 11048,
			"LOCERR_PERSONAL_NEW_VERSION_AVAILABLE": 12000,
			"LOCERR_PERSONAL_VERSION_EXPIRED": 12001,
			"LOCERR_PERSONAL_SECTION_ACCESS_DETECTED": 12002,
			"LOCERR_PERSONAL_APP_DELETION_FAILED": 12003,
			"LOCERR_USER_AUTHENTICATION_FAILURE": 12004,
			"LOCERR_EXPORT_OUT_OF_MEMORY": 13000,
			"LOCERR_EXPORT_NO_DATA": 13001,
			"LOCERR_SYNC_INVALID_OFFSET": 14000,
			"LOCERR_SEARCH_TIMEOUT": 15000,
			"LOCERR_DIRECT_DISCOVERY_LINKED_EXPRESSION_FAIL": 16000,
			"LOCERR_DIRECT_DISCOVERY_ROWCOUNT_OVERFLOW": 16001,
			"LOCERR_DIRECT_DISCOVERY_EMPTY_RESULT": 16002,
			"LOCERR_DIRECT_DISCOVERY_DB_CONNECTION_FAILED": 16003,
			"LOCERR_DIRECT_DISCOVERY_MEASURE_NOT_ALLOWED": 16004,
			"LOCERR_DIRECT_DISCOVERY_DETAIL_NOT_ALLOWED": 16005,
			"LOCERR_DIRECT_DISCOVERY_NOT_SYNTH_CIRCULAR_ALLOWED": 16006,
			"LOCERR_DIRECT_DISCOVERY_ONLY_ONE_DD_TABLE_ALLOWED": 16007,
			"LOCERR_DIRECT_DISCOVERY_DB_AUTHORIZATION_FAILED": 16008,
			"LOCERR_SMART_LOAD_TABLE_NOT_FOUND": 17000,
			"LOCERR_SMART_LOAD_TABLE_DUPLICATED": 17001,
			"LOCERR_VARIABLE_NO_NAME": 18000,
			"LOCERR_VARIABLE_DUPLICATE_NAME": 18001,
			"LOCERR_VARIABLE_INCONSISTENCY": 18002,
			"LOCERR_MEDIA_LIBRARY_LIST_FAILED": 19000,
			"LOCERR_MEDIA_LIBRARY_CONTENT_FAILED": 19001,
			"LOCERR_MEDIA_BUNDLING_FAILED": 19002,
			"LOCERR_MEDIA_UNBUNDLING_FAILED": 19003,
			"LOCERR_MEDIA_LIBRARY_NOT_FOUND": 19004,
			"LOCERR_FEATURE_DISABLED": 20000,
			"LOCERR_JSON_RPC_INVALID_REQUEST": -32600,
			"LOCERR_JSON_RPC_METHOD_NOT_FOUND": -32601,
			"LOCERR_JSON_RPC_INVALID_PARAMETERS": -32602,
			"LOCERR_JSON_RPC_INTERNAL_ERROR": -32603,
			"LOCERR_JSON_RPC_PARSE_ERROR": -32700,
			"LOCERR_MQ_SOCKET_CONNECT_FAILURE": 33000,
			"LOCERR_MQ_SOCKET_OPEN_FAILURE": 33001,
			"LOCERR_MQ_PROTOCOL_NO_RESPONE": 33002,
			"LOCERR_MQ_PROTOCOL_LIBRARY_EXCEPTION": 33003,
			"LOCERR_MQ_PROTOCOL_CONNECTION_CLOSED": 33004,
			"LOCERR_MQ_PROTOCOL_CHANNEL_CLOSED": 33005,
			"LOCERR_MQ_PROTOCOL_UNKNOWN_ERROR": 33006,
			"LOCERR_MQ_PROTOCOL_INVALID_STATUS": 33007,
			"LOCERR_EXTENGINE_GRPC_STATUS_OK": 22000,
			"LOCERR_EXTENGINE_GRPC_STATUS_CANCELLED": 22001,
			"LOCERR_EXTENGINE_GRPC_STATUS_UNKNOWN": 22002,
			"LOCERR_EXTENGINE_GRPC_STATUS_INVALID_ARGUMENT": 22003,
			"LOCERR_EXTENGINE_GRPC_STATUS_DEADLINE_EXCEEDED": 22004,
			"LOCERR_EXTENGINE_GRPC_STATUS_NOT_FOUND": 22005,
			"LOCERR_EXTENGINE_GRPC_STATUS_ALREADY_EXISTS": 22006,
			"LOCERR_EXTENGINE_GRPC_STATUS_PERMISSION_DENIED": 22007,
			"LOCERR_EXTENGINE_GRPC_STATUS_RESOURCE_EXHAUSTED": 22008,
			"LOCERR_EXTENGINE_GRPC_STATUS_FAILED_PRECONDITION": 22009,
			"LOCERR_EXTENGINE_GRPC_STATUS_ABORTED": 22010,
			"LOCERR_EXTENGINE_GRPC_STATUS_OUT_OF_RANGE": 22011,
			"LOCERR_EXTENGINE_GRPC_STATUS_UNIMPLEMENTED": 22012,
			"LOCERR_EXTENGINE_GRPC_STATUS_INTERNAL": 22013,
			"LOCERR_EXTENGINE_GRPC_STATUS_UNAVAILABLE": 22014,
			"LOCERR_EXTENGINE_GRPC_STATUS_DATA_LOSS": 22015,
			"LOCERR_EXTENGINE_GRPC_STATUS_UNAUTHENTICATED": 22016,
			"LOCERR_LXW_INVALID_OBJ": 23001,
			"LOCERR_LXW_INVALID_FILE": 23002,
			"LOCERR_LXW_INVALID_SHEET": 23003,
			"LOCERR_LXW_INVALID_EXPORT_RANGE": 23004,
			"LOCERR_LXW_ERROR": 23005,
			"LOCERR_LXW_ERROR_MEMORY_MALLOC_FAILED": 23006,
			"LOCERR_LXW_ERROR_CREATING_XLSX_FILE": 23007,
			"LOCERR_LXW_ERROR_CREATING_TMPFILE": 23008,
			"LOCERR_LXW_ERROR_ZIP_FILE_OPERATION": 23009,
			"LOCERR_LXW_ERROR_ZIP_FILE_ADD": 23010,
			"LOCERR_LXW_ERROR_ZIP_CLOSE": 23011,
			"LOCERR_LXW_ERROR_NULL_PARAMETER_IGNORED": 23012,
			"LOCERR_LXW_ERROR_MAX_STRING_LENGTH_EXCEEDED": 23013,
			"LOCERR_LXW_ERROR_255_STRING_LENGTH_EXCEEDED": 23014,
			"LOCERR_LXW_ERROR_SHARED_STRING_INDEX_NOT_FOUND": 23015,
			"LOCERR_LXW_ERROR_WORKSHEET_INDEX_OUT_OF_RANGE": 23016,
			"LOCERR_LXW_ERROR_WORKSHEET_MAX_NUMBER_URLS_EXCEEDED": 23017,
			"LOCERR_BDI_STATUS_OK": 24000,
			"LOCERR_BDI_GENERIC_ERROR_NOT_TRANSLATED": 24001,
			"LOCERR_TRENDLINE_INVALID_DEF": 25000,
			"LOCERR_TRENDLINE_INVALID_MATH_ERROR": 25001,
			"LOCERR_CURL_UNSUPPORTED_PROTOCOL": 30000,
			"LOCERR_CURL_COULDNT_RESOLVE_PROXY": 30001,
			"LOCERR_CURL_COULDNT_CONNECT": 30002,
			"LOCERR_CURL_REMOTE_ACCESS_DENIED": 30003,
			"LOCERR_CURL_FTP_ACCEPT_FAILED": 30004,
			"LOCERR_CURL_FTP_ACCEPT_TIMEOUT": 30005,
			"LOCERR_CURL_FTP_CANT_GET_HOST": 30006,
			"LOCERR_CURL_PARTIAL_FILE": 30007,
			"LOCERR_CURL_QUOTE_ERROR": 30008,
			"LOCERR_CURL_WRITE_ERROR": 30009,
			"LOCERR_CURL_UPLOAD_FAILED": 30010,
			"LOCERR_CURL_OUT_OF_MEMORY": 30011,
			"LOCERR_CURL_OPERATION_TIMEDOUT": 30012,
			"LOCERR_CURL_FTP_COULDNT_USE_REST": 30013,
			"LOCERR_CURL_HTTP_POST_ERROR": 30014,
			"LOCERR_CURL_SSL_CONNECT_ERROR": 30015,
			"LOCERR_CURL_FILE_COULDNT_READ_FILE": 30016,
			"LOCERR_CURL_LDAP_CANNOT_BIND": 30017,
			"LOCERR_CURL_LDAP_SEARCH_FAILED": 30018,
			"LOCERR_CURL_TOO_MANY_REDIRECTS": 30019,
			"LOCERR_CURL_PEER_FAILED_VERIFICATION": 30020,
			"LOCERR_CURL_GOT_NOTHING": 30021,
			"LOCERR_CURL_SSL_ENGINE_NOTFOUND": 30022,
			"LOCERR_CURL_SSL_ENGINE_SETFAILED": 30023,
			"LOCERR_CURL_SSL_CERTPROBLEM": 30024,
			"LOCERR_CURL_SSL_CIPHER": 30025,
			"LOCERR_CURL_SSL_CACERT": 30026,
			"LOCERR_CURL_BAD_CONTENT_ENCODING": 30027,
			"LOCERR_CURL_LDAP_INVALID_URL": 30028,
			"LOCERR_CURL_USE_SSL_FAILED": 30029,
			"LOCERR_CURL_SSL_ENGINE_INITFAILED": 30030,
			"LOCERR_CURL_LOGIN_DENIED": 30031,
			"LOCERR_CURL_TFTP_NOTFOUND": 30032,
			"LOCERR_CURL_TFTP_ILLEGAL": 30033,
			"LOCERR_CURL_SSH": 30034,
			"LOCERR_SETEXPRESSION_TOO_LARGE": 30100,
			"LOCERR_RELOAD_MERGE_LOAD_ERROR": 30101,
			"LOCERR_WIN_FTP_DROPPED": 30200,
			"LOCERR_WIN_FTP_NO_PASSIVE_MODE": 30201,
			"LOCERR_WIN_HTTP_DOWNLEVEL_SERVER": 30210,
			"LOCERR_WIN_HTTP_INVALID_SERVER_RESPONSE": 30211,
			"LOCERR_WIN_HTTP_REDIRECT_NEEDS_CONFIRMATION": 30212,
			"LOCERR_WIN_INTERNET_FORCE_RETRY": 30220,
			"LOCERR_WIN_INTERNET_CANNOT_CONNECT": 30221,
			"LOCERR_WIN_INTERNET_CONNECTION_ABORTED": 30222,
			"LOCERR_WIN_INTERNET_CONNECTION_RESET": 30223,
			"LOCERR_WIN_INTERNET_DISCONNECTED": 30224,
			"LOCERR_WIN_INTERNET_INCORRECT_FORMAT": 30225,
			"LOCERR_WIN_INTERNET_INVALID_CA": 30226,
			"LOCERR_WIN_INTERNET_INVALID_OPERATION": 30227,
			"LOCERR_WIN_INTERNET_INVALID_URL": 30228,
			"LOCERR_WIN_INTERNET_ITEM_NOT_FOUND": 30229,
			"LOCERR_WIN_INTERNET_LOGIN_FAILURE": 30230,
			"LOCERR_WIN_INTERNET_NAME_NOT_RESOLVED": 30231,
			"LOCERR_WIN_INTERNET_NEED_UI": 30232,
			"LOCERR_WIN_INTERNET_SEC_CERT_CN_INVALID": 30233,
			"LOCERR_WIN_INTERNET_SEC_CERT_DATE_INVALID": 30234,
			"LOCERR_WIN_INTERNET_SEC_CERT_ERRORS": 30235,
			"LOCERR_WIN_INTERNET_SEC_INVALID_CERT": 30236,
			"LOCERR_WIN_INTERNET_SERVER_UNREACHABLE": 30237
		},
		"LocalizedWarningCode": {
			"LOCWARN_PERSONAL_RELOAD_REQUIRED": 0,
			"LOCWARN_PERSONAL_VERSION_EXPIRES_SOON": 1,
			"LOCWARN_EXPORT_DATA_TRUNCATED": 1000,
			"LOCWARN_COULD_NOT_OPEN_ALL_OBJECTS": 2000,
			"LOCWARN_SEARCH_INVALID_SEARCHFIELD_DETECTED": 3000
		},
		"GrpType": {
			"GRP_NX_NONE": 0,
			"GRP_NX_HIEARCHY": 1,
			"GRP_NX_COLLECTION": 2
		},
		"ExportFileType": {
			"EXPORT_CSV_C": 0,
			"EXPORT_CSV_T": 1,
			"EXPORT_OOXML": 2,
			"EXPORT_PARQUET": 3
		},
		"ExportState": {
			"EXPORT_POSSIBLE": 0,
			"EXPORT_ALL": 1
		},
		"ParquetCompression": {
			"PARQUET_UNCOMPRESSED": 1,
			"PARQUET_SNAPPY": 2,
			"PARQUET_GZIP": 3,
			"PARQUET_BROTLI": 4,
			"PARQUET_ZSTD": 5,
			"PARQUET_LZ4": 6,
			"PARQUET_LZ4_HADOOP": 10
		},
		"Feature": {
			"FEATURE_BINNING_DATA": 0,
			"FEATURE_BOOKMARKS": 1,
			"FEATURE_CALCULATED_FIELDS": 2,
			"FEATURE_CONTINUOUS_DATA": 3,
			"FEATURE_INVERTED_SELECTIONS": 4,
			"FEATURE_RANGE_SELECTIONS": 5,
			"FEATURE_REDUCING_DATA": 6,
			"FEATURE_SEARCH": 7,
			"FEATURE_SELECTION_COUNT": 8,
			"FEATURE_SELECTION_INSIGHTS": 9,
			"FEATURE_TABLE_MINI_CHART": 10,
			"FEATURE_TRENDLINES": 11,
			"FEATURE_CALCULATED_DIMENSIONS": 12,
			"FEATURE_INCLUDE_ZERO_VALUES": 13,
			"FEATURE_INCLUDE_NULL_VALUES": 14,
			"FEATURE_FILTER_PANE_PAGING": 15,
			"FEATURE_FILTER_PANE_CUSTOM_SORTING": 16,
			"FEATURE_SHOW_FREQUENCY": 17,
			"FEATURE_LIMITATION": 18,
			"FEATURE_TOTALS": 19
		},
		"LTrendlineType": {
			"Average": 0,
			"Linear": 1,
			"Polynomial2": 2,
			"Polynomial3": 3,
			"Polynomial4": 4,
			"Exponential": 5,
			"Power": 6,
			"Logarithmic": 7
		},
		"ContinuousMode": {
			"CONTINUOUS_NEVER": 0,
			"CONTINUOUS_IF_POSSIBLE": 1,
			"CONTINUOUS_IF_TIME": 2
		},
		"TrendlineMode": {
			"TRENDLINE_MULTILINE": 0,
			"TRENDLINE_SUM": 1
		},
		"DimCellType": {
			"NX_DIM_CELL_VALUE": 0,
			"NX_DIM_CELL_EMPTY": 1,
			"NX_DIM_CELL_NORMAL": 2,
			"NX_DIM_CELL_TOTAL": 3,
			"NX_DIM_CELL_OTHER": 4,
			"NX_DIM_CELL_AGGR": 5,
			"NX_DIM_CELL_PSEUDO": 6,
			"NX_DIM_CELL_ROOT": 7,
			"NX_DIM_CELL_NULL": 8,
			"NX_DIM_CELL_GENERATED": 9
		},
		"StackElemType": {
			"NX_STACK_CELL_NORMAL": 0,
			"NX_STACK_CELL_TOTAL": 1,
			"NX_STACK_CELL_OTHER": 2,
			"NX_STACK_CELL_SUM": 3,
			"NX_STACK_CELL_VALUE": 4,
			"NX_STACK_CELL_PSEUDO": 5
		},
		"SortIndicatorType": {
			"NX_SORT_INDICATE_NONE": 0,
			"NX_SORT_INDICATE_ASC": 1,
			"NX_SORT_INDICATE_DESC": 2
		},
		"DimensionType": {
			"NX_DIMENSION_TYPE_DISCRETE": 0,
			"NX_DIMENSION_TYPE_NUMERIC": 1,
			"NX_DIMENSION_TYPE_TIME": 2
		},
		"FieldSelectionMode": {
			"SELECTION_MODE_NORMAL": 0,
			"SELECTION_MODE_AND": 1,
			"SELECTION_MODE_NOT": 2
		},
		"FrequencyMode": {
			"NX_FREQUENCY_NONE": 0,
			"NX_FREQUENCY_VALUE": 1,
			"NX_FREQUENCY_PERCENT": 2,
			"NX_FREQUENCY_RELATIVE": 3
		},
		"DataReductionMode": {
			"DATA_REDUCTION_NONE": 0,
			"DATA_REDUCTION_ONEDIM": 1,
			"DATA_REDUCTION_SCATTERED": 2,
			"DATA_REDUCTION_CLUSTERED": 3,
			"DATA_REDUCTION_STACKED": 4
		},
		"HypercubeMode": {
			"DATA_MODE_STRAIGHT": 0,
			"DATA_MODE_PIVOT": 1,
			"DATA_MODE_PIVOT_STACK": 2,
			"DATA_MODE_TREE": 3,
			"DATA_MODE_DYNAMIC": 4
		},
		"PatchOperationType": {
			"Add": 0,
			"Remove": 1,
			"Replace": 2
		},
		"SelectionCellType": {
			"NX_CELL_DATA": 0,
			"NX_CELL_TOP": 1,
			"NX_CELL_LEFT": 2
		},
		"MatchingFieldMode": {
			"MATCHINGFIELDMODE_MATCH_ALL": 0,
			"MATCHINGFIELDMODE_MATCH_ONE": 1
		},
		"SessionState": {
			"SESSION_CREATED": 0,
			"SESSION_ATTACHED": 1,
			"SESSION_ERROR_NO_LICENSE": 2,
			"SESSION_ERROR_LICENSE_RENEW": 3,
			"SESSION_ERROR_LIMIT_EXCEEDED": 4,
			"SESSION_ERROR_SECURITY_HEADER_CHANGED": 5,
			"SESSION_ACCESS_CONTROL_SETUP_FAILURE": 6,
			"SESSION_ERROR_APP_ACCESS_DENIED": 7,
			"SESSION_ERROR_APP_FAILURE": 8
		},
		"ReloadState": {
			"RELOAD_PAUSED": 0,
			"RELOAD_STARTED": 1,
			"RELOAD_ABORTED": 2
		},
		"OpenApiVersion": {
			"V2": 0,
			"V3": 1
		},
		"QrsChangeType": {
			"QRS_CHANGE_UNDEFINED": 0,
			"QRS_CHANGE_ADD": 1,
			"QRS_CHANGE_UPDATE": 2,
			"QRS_CHANGE_DELETE": 3
		},
		"ExtEngineDataType": {
			"NX_EXT_DATATYPE_STRING": 0,
			"NX_EXT_DATATYPE_DOUBLE": 1,
			"NX_EXT_DATATYPE_BOTH": 2
		},
		"ExtEngineFunctionType": {
			"NX_EXT_FUNCTIONTYPE_SCALAR": 0,
			"NX_EXT_FUNCTIONTYPE_AGGR": 1,
			"NX_EXT_FUNCTIONTYPE_TENSOR": 2
		},
		"ExtEngineMsgType": {
			"NX_EXT_MSGTYPE_FUNCTION_CALL": 1,
			"NX_EXT_MSGTYPE_SCRIPT_CALL": 2,
			"NX_EXT_MSGTYPE_RETURN_VALUE": 3,
			"NX_EXT_MSGTYPE_RETURN_MULTIPLE": 4,
			"NX_EXT_MSGTYPE_RETURN_ERROR": 5
		}
	}
}