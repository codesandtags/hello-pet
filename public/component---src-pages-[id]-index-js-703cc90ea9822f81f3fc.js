"use strict";(self.webpackChunkhello_pet=self.webpackChunkhello_pet||[]).push([[77],{6909:function(e,t,l){var a=l(7294);t.Z=function(e){var t=e.message;return a.createElement("header",{className:"site-home-header"},a.createElement("div",null,a.createElement("h2",{className:"w-screen flex justify-center item-center m-o"},t)))}},9739:function(e,t,l){l.r(t);var a=l(7294),m=l(8037),s=l(6909);t.default=function(e){var t=e.id,l=(0,a.useState)(void 0),c=l[0],n=l[1],r=(0,a.useState)(200),x=r[0],i=r[1];return(0,a.useEffect)((function(){fetch("../../model/foundation.json").then((function(e){if(200===e.status)return e.json();404===e.status?i(404):i(500)})).then((function(e){var l=e.foundationName[0].pets.find((function(e){return e.id===Number(t)}));n(l),l&&void 0!==typeof l||i(404)})).catch((function(e){console.log(e),i(500)}))}),[]),a.createElement("div",{className:"container"},c&&a.createElement("main",{className:"bg-gray-100 mx-auto space-y-2  min-h-screen m-20"},a.createElement("div",{className:"flex flex-col m-20 sm:m-14"},a.createElement("div",{className:"flex justify-end"},a.createElement("button",{onClick:function(){return(0,m.c4)("/")},className:"px-24 bg-violet hover:bg-transparent text-white font-semibold hover:text-violet  border border-violet hover:border-violet rounded  md:text-lg w-15 mt-14 h-8 md:w-1/4 md:h-1/4 md:px-0 xs:text-xs sm:mt-0 sm:w-full"},"Volver al inicio")),a.createElement("div",{className:" flex-1 flex items-center justify-center m-7 sm:mt-4"},a.createElement("h2",{className:"text-7xl"},c.name))),a.createElement("div",{className:"pl-14 md:pl-9"},a.createElement("div",{className:"flex flex-wrap md:w-3/5 sm:w-4/5"},a.createElement("div",{className:"flex md:flex-auto md:mt-4"},a.createElement("p",{className:"text-2xl text-gray-900 font-medium title-font sm:text-xl"},"Tipo de Mascota:"),a.createElement("p",{className:"text-2xl  sm:text-xl mr-4 ml-2"},c.type)),a.createElement("div",{className:"flex md:flex-auto md:mt-4"},a.createElement("p",{className:"text-2xl sm:text-xl text-gray-900 font-medium title-font"},"Edad:"),a.createElement("p",{className:"text-2xl sm:text-xl mr-4 ml-2"},c.age)),a.createElement("div",{className:"flex md:flex-auto md:mt-4"},a.createElement("p",{className:"text-2xl sm:text-xl text-gray-900 font-medium title-font"},"Género:"),a.createElement("p",{className:"text-2xl sm:text-xl mr-4 ml-2"},c.gender)),a.createElement("div",{className:"flex md:flex-auto  md:mt-4"},a.createElement("p",{className:"text-2xl sm:text-xl text-gray-900 font-black title-font"},"Color:"),a.createElement("p",{className:"text-2xl sm:text-xl mr-4 ml-2"},c.color))),a.createElement("div",{className:"flex  flex-col md:mt-6"},a.createElement("p",{className:"text-2xl sm:text-xl pt-4"},c.dewormed),a.createElement("p",{className:"text-2xl sm:text-xl pt-4"},c.sterilized),a.createElement("div",{className:"flex pt-4"},a.createElement("p",{className:"text-2xl sm:text-xl text-gray-900 font-medium title-font mb-4 "},"No Virales:"),a.createElement("p",{className:"text-2xl sm:text-xl"},c.noVirals))),a.createElement("div",null,a.createElement("h3",{className:"text-2xl text-gray-900 font-medium title-font mb-4 mr-4 mt-10 font-black text-4xl"},"Historia"),a.createElement("p",{className:"text-2xl sm:text-xl"},c.history),c.gallery.map((function(e,t){return a.createElement("div",{key:t,className:"mt-12 flex flex-row justify-center items-center"},a.createElement("img",{src:e.url,width:"450",height:"450",className:"sm:w-4/5 sm:h-4/5",alt:e.alt}))}))),a.createElement("div",{className:"flex pt-12"},a.createElement("p",{className:"text-2xl sm:text-xl font-black "},"Cualidades:"),a.createElement("p",{className:"text-2xl sm:text-xl ml-2 sm:w-4/5"},c.qualities)),a.createElement("div",{className:"py-14 flex"},a.createElement("p",{className:"text-2xl  sm:text-sl font-black md:w-4/5"},"Necesidades especiales:"),a.createElement("p",{className:"text-2xl  sm:text-xl ml-2"},c.specialneeds)))),404===x&&a.createElement(s.Z,{message:"No se encontró mascota"}),500===x&&a.createElement(s.Z,{message:"Error en el servidor"}))}}}]);
//# sourceMappingURL=component---src-pages-[id]-index-js-703cc90ea9822f81f3fc.js.map