(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{273:function(module,exports,__webpack_require__){__webpack_require__(274),__webpack_require__(383),module.exports=__webpack_require__(384)},295:function(module,exports){},384:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(268);Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(592),module)}.call(this,__webpack_require__(385)(module))},592:function(module,exports,__webpack_require__){var map={"./0-Btn.stories.js":607};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=592},605:function(module,exports,__webpack_require__){},606:function(module,exports,__webpack_require__){},607:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(1),react_default=__webpack_require__.n(react),dist=__webpack_require__(53),defineProperty=__webpack_require__(272),objectWithoutProperties=__webpack_require__(121);__webpack_require__(605);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(source,!0).forEach((function(key){Object(defineProperty.a)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(source).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}var Background_Background_Background=function Background(props){var children=props.children,_props$color=props.color,color=void 0===_props$color?"#171b1f":_props$color,_props$style=props.style,style=void 0===_props$style?{}:_props$style,center=props.center,rest=Object(objectWithoutProperties.a)(props,["children","color","style","center"]),colorStyle={"--color":color},_style=center?_objectSpread({},colorStyle,{},{display:"flex",justifyContent:"center",alignItems:"center"},{},style):_objectSpread({},colorStyle,{},style);return react_default.a.createElement("div",Object.assign({className:"Background",style:_style},rest),children)},components_Background_Background=Background_Background_Background;Background_Background_Background.__docgenInfo={description:"",methods:[],displayName:"Background"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Background\\Background.js"]={name:"Background",docgenInfo:Background_Background_Background.__docgenInfo,path:"src\\components\\Background\\Background.js"});var components_Background=components_Background_Background,Btn_Btn_Btn=(__webpack_require__(606),function Btn(props){var onClick=props.onClick,label=props.label,disabled=props.disabled,dense=props.dense,invert=props.invert,children=props.children,color=props.color,background=props.background,_props$className=props.className,className=void 0===_props$className?"":_props$className,rest=Object(objectWithoutProperties.a)(props,["onClick","label","disabled","dense","invert","children","color","background","className"]),content=children||label,title=children&&label?label:"",_className="Btn".concat(dense?" Btn-dense":"").concat(invert?" Btn-invert":""," ").concat(className).trim(),primary=color||"#61DAFB",secondary=invert?background||"#171b1f":background||"transparent",style={"--primary":invert?secondary:primary,"--secondary":invert?primary:secondary};return react_default.a.createElement("button",Object.assign({style:style,className:_className,onClick:onClick,disabled:disabled,title:title},rest),content)}),components_Btn_Btn=Btn_Btn_Btn;Btn_Btn_Btn.__docgenInfo={description:"",methods:[],displayName:"Btn"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Btn\\Btn.js"]={name:"Btn",docgenInfo:Btn_Btn_Btn.__docgenInfo,path:"src\\components\\Btn\\Btn.js"});var components_Btn=components_Btn_Btn;__webpack_require__.d(__webpack_exports__,"Basic",(function(){return _0_Btn_stories_Basic})),__webpack_require__.d(__webpack_exports__,"Dense",(function(){return _0_Btn_stories_Dense})),__webpack_require__.d(__webpack_exports__,"Color",(function(){return _0_Btn_stories_Color})),__webpack_require__.d(__webpack_exports__,"Invert",(function(){return _0_Btn_stories_Invert})),__webpack_require__.d(__webpack_exports__,"Icon",(function(){return _0_Btn_stories_Icon})),__webpack_require__.d(__webpack_exports__,"Children",(function(){return _0_Btn_stories_Children}));__webpack_exports__.default={title:"Btn"};var _0_Btn_stories_Basic=function Basic(){return react_default.a.createElement(components_Background,{center:!0},react_default.a.createElement(components_Btn,{onClick:Object(dist.action)("clicked"),label:"Hello Button"}))};_0_Btn_stories_Basic.story={name:"Basic"};var _0_Btn_stories_Dense=function Dense(){return react_default.a.createElement(components_Background,{center:!0},react_default.a.createElement(components_Btn,{onClick:Object(dist.action)("clicked"),label:"Hello Button",dense:!0}))};_0_Btn_stories_Dense.story={name:"Dense"};var _0_Btn_stories_Color=function Color(){return react_default.a.createElement(components_Background,{center:!0},react_default.a.createElement(components_Btn,{onClick:Object(dist.action)("clicked"),label:"Hello Button",color:"#e91e63"}))};_0_Btn_stories_Color.story={name:"Color"};var _0_Btn_stories_Invert=function Invert(){return react_default.a.createElement(components_Background,{center:!0,color:"#dedede"},react_default.a.createElement(components_Btn,{onClick:Object(dist.action)("clicked"),label:"Hello Button",invert:!0}))};_0_Btn_stories_Invert.story={name:"Invert"};var _0_Btn_stories_Icon=function Icon(){return react_default.a.createElement(components_Background,{center:!0},react_default.a.createElement(components_Btn,{onClick:Object(dist.action)("clicked"),dense:!0},react_default.a.createElement("img",{src:"./img/Btn/react-logo.svg",alt:"react-logo",width:"42"})))};_0_Btn_stories_Icon.story={name:"Icon"};var _0_Btn_stories_Children=function Children(){return react_default.a.createElement(components_Background,{center:!0},react_default.a.createElement(components_Btn,{onClick:Object(dist.action)("clicked"),label:"Hello Button"},react_default.a.createElement("img",{src:"./img/Btn/react-logo.svg",alt:"react-logo"}),"Children Text"))};_0_Btn_stories_Children.story={name:"Children + Label"},_0_Btn_stories_Basic.__docgenInfo={description:"",methods:[],displayName:"Basic"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\stories\\0-Btn.stories.js"]={name:"Basic",docgenInfo:_0_Btn_stories_Basic.__docgenInfo,path:"src\\stories\\0-Btn.stories.js"}),_0_Btn_stories_Dense.__docgenInfo={description:"",methods:[],displayName:"Dense"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\stories\\0-Btn.stories.js"]={name:"Dense",docgenInfo:_0_Btn_stories_Dense.__docgenInfo,path:"src\\stories\\0-Btn.stories.js"}),_0_Btn_stories_Color.__docgenInfo={description:"",methods:[],displayName:"Color"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\stories\\0-Btn.stories.js"]={name:"Color",docgenInfo:_0_Btn_stories_Color.__docgenInfo,path:"src\\stories\\0-Btn.stories.js"}),_0_Btn_stories_Invert.__docgenInfo={description:"",methods:[],displayName:"Invert"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\stories\\0-Btn.stories.js"]={name:"Invert",docgenInfo:_0_Btn_stories_Invert.__docgenInfo,path:"src\\stories\\0-Btn.stories.js"}),_0_Btn_stories_Icon.__docgenInfo={description:"",methods:[],displayName:"Icon"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\stories\\0-Btn.stories.js"]={name:"Icon",docgenInfo:_0_Btn_stories_Icon.__docgenInfo,path:"src\\stories\\0-Btn.stories.js"}),_0_Btn_stories_Children.__docgenInfo={description:"",methods:[],displayName:"Children"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\stories\\0-Btn.stories.js"]={name:"Children",docgenInfo:_0_Btn_stories_Children.__docgenInfo,path:"src\\stories\\0-Btn.stories.js"})}},[[273,1,2]]]);
//# sourceMappingURL=main.d59ca812e9be4e42c7b6.bundle.js.map