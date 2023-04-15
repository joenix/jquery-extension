// Use Vue
import Vue from 'vue';

/* !!
 * Use VueTempalteCompiler
 * @api compile
 * @api compileToFunctions
 * @api generateCodeFrame
 * @api parseComponent
 * @api ssrCompile
 * @api ssrCompileToFunctions
 * ========== ========== ==========
 */
import { compile } from 'vue-template-compiler';

/* !!
 * Render as Vue
 * @param data { json }
 * ========== ========== ==========
 */
function render(lifecycle = {}) {
  // Check Dom
  if (!this.length) {
    return;
  }

  // Get Template
  const template = this.html().replace(/&lt;/g, `<`).replace(/&gt;/g, `>`);

  // Get Render and Fns
  const { render, staticRenderFns } = compile(template);

  // Render by Vue
  new Vue({
    el: this.get(0),
    render: new Function(render),
    staticRenderFns,
    ...lifecycle,
  });
}

// Extend by jQuery
$.fn.extend({ render });

// Export
export default render;
