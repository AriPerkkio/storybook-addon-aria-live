(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{456:function(module,exports,__webpack_require__){__webpack_require__(457),__webpack_require__(841),__webpack_require__(847),__webpack_require__(850),__webpack_require__(842),__webpack_require__(845),__webpack_require__(844),__webpack_require__(846),__webpack_require__(843),__webpack_require__(848),module.exports=__webpack_require__(849)},524:function(module,exports){},847:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _templateObject,_templateObject2,_templateObject3,esm=__webpack_require__(115),types=__webpack_require__(432),ADDON_ID="storybook/aria-live",PANEL_ID="".concat(ADDON_ID,"/panel"),EVENTS={CAPTURE:"".concat(ADDON_ID,"/capture")},react=__webpack_require__(0),react_default=__webpack_require__.n(react),dist_esm=__webpack_require__(7),addon_panel=__webpack_require__(858),core_events_dist_esm=__webpack_require__(20),theming_dist_esm=__webpack_require__(1);function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=arr&&("undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"]);if(null==_i)return;var _s,_e,_arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||_unsupportedIterableToArray(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var List=theming_dist_esm.styled.ol(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  list-style: none;\n  margin: 0;\n  padding: 1rem;\n"]))),ListItem=theming_dist_esm.styled.li(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  font-size: 14px;\n  margin: 0.5rem 0;\n"]))),PolitenessLabel=theming_dist_esm.styled.span(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  font-weight: 600;\n  text-transform: uppercase;\n  padding-right: 0.5rem;\n  color: ",";\n"])),(function(props){return"assertive"===props.politenessSetting?"red":"blue"})),Panel_Panel=function Panel(props){var _useChannel,_useAddonState2=_slicedToArray(Object(dist_esm.i)(ADDON_ID,[]),2),captures=_useAddonState2[0],setCaptures=_useAddonState2[1];return Object(dist_esm.l)((_defineProperty(_useChannel={},EVENTS.CAPTURE,(function(announcement){setCaptures((function(previous){return[].concat(_toConsumableArray(previous),[announcement])}))})),_defineProperty(_useChannel,core_events_dist_esm.STORY_CHANGED,(function(){setCaptures([])})),_useChannel)),react_default.a.createElement(addon_panel.a,props,react_default.a.createElement(List,null,captures.map((function(capture,index){return react_default.a.createElement(ListItem,{key:index},react_default.a.createElement(PolitenessLabel,capture,"[",capture.politenessSetting,"]")," ",capture.textContent)}))))};esm.a.register(ADDON_ID,(function(){esm.a.add(PANEL_ID,{type:types.a.PANEL,title:"ARIA Live",match:function match(_ref){return"story"===_ref.viewMode},render:Panel_Panel})}))}},[[456,2,3]]]);