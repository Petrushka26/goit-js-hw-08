function e(e){return e&&e.__esModule?e.default:e}var t,n,o,r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof r&&r&&r.Object===Object&&r,d="object"==typeof self&&self&&self.Object===Object&&self,s=c||d||Function("return this")(),m=Object.prototype.toString,v=Math.max,g=Math.min,p=function(){return s.Date.now()};function b(e,t,n){var o,r,i,a,u,f,l=0,c=!1,d=!1,s=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function m(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function b(e){return l=e,u=setTimeout(O,t),c?m(e):a}function x(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-l>=i}function O(){var e=p();if(x(e))return j(e);u=setTimeout(O,function(e){var n=t-(e-f);return d?g(n,i-(e-l)):n}(e))}function j(e){return u=void 0,s&&o?m(e):(o=r=void 0,a)}function T(){var e=p(),n=x(e);if(o=arguments,r=this,f=e,n){if(void 0===u)return b(f);if(d)return u=setTimeout(O,t),m(f)}return void 0===u&&(u=setTimeout(O,t)),a}return t=S(t)||0,y(n)&&(c=!!n.leading,i=(d="maxWait"in n)?v(S(n.maxWait)||0,t):i,s="trailing"in n?!!n.trailing:s),T.cancel=function(){void 0!==u&&clearTimeout(u),l=0,o=f=r=u=void 0},T.flush=function(){return void 0===u?a:j(p())},T}function y(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(y(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=y(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=u.test(e);return n||f.test(e)?l(e.slice(2),n?2:8):a.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return y(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:o,maxWait:t,trailing:r})};var x,O;let j={email:null!==(x=null===(n=JSON.parse(localStorage.getItem("feedback-form-state")))||void 0===n?void 0:n.email)&&void 0!==x?x:"",message:null!==(O=null===(o=JSON.parse(localStorage.getItem("feedback-form-state")))||void 0===o?void 0:o.message)&&void 0!==O?O:""};const T={form:document.querySelector(".feedback-form"),input:document.querySelector(".feedback-form input"),textarea:document.querySelector(".feedback-form textarea")};T.form.addEventListener("submit",(function(e){e.preventDefault(),console.log({email:T.input.value,message:T.textarea.value}),e.currentTarget.reset(),j={},localStorage.removeItem("feedback-form-state")})),T.form.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));var t,n;T.input.value=null!==(t=null==e?void 0:e.email)&&void 0!==t?t:"",T.textarea.value=null!==(n=null==e?void 0:e.message)&&void 0!==n?n:""}();
//# sourceMappingURL=03-feedback.ba92c60d.js.map
