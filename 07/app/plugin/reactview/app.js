const util = require('util');
const assert = require('assert');
const path = require('path');
const beautifyHTML = require('js-beautify').html;
const ReactDOMServer = require('react-dom/server');
const React = require('react');
require('debug').enable('reactview');
const log = require('debug')('reactview');
require('babel-register');

const defaultOpts = {
  doctype: '<!DOCTYPE html>',
  extname: '.js',      // view层直接渲染文件名后缀
  beautify: false,     // 是否需要对dom结构进行格式化
  writeResp: false,    // 是否需要在view层直接输出
};

module.exports = function(app) {
  const opts = app.config.reactview || {};
  assert(opts && opts.viewpath && util.isString(opts.viewpath), '[reactview] viewpath is required, please check config!');
  const options = Object.assign({}, defaultOpts, opts);

  app.context.render = function(filename, _locals, internals, children) {
    let filepath = path.join(options.viewpath, filename);

    if (!path.extname(filepath)) {
      filepath += options.extname;
    }

    if (typeof _locals === 'boolean') {
      internals = _locals;
      _locals = {};
    }
    internals = internals !== undefined
      ? internals
      : options.internals;

    let render = internals
      ? ReactDOMServer.renderToString
      : ReactDOMServer.renderToStaticMarkup;

    // merge koa state
    let props = Object.assign({}, this.state, _locals);
    let markup = options.doctype || '<!DOCTYPE html>';

    try {
      let component = require(filepath);
      // Transpiled ES6 may export components as { default: Component }
      component = component.default || component;
      console.log('component', component);
      markup += render(React.createElement(component, props, children));
    } catch (err) {
      err.code = 'REACT';
      throw err;
    }
    if (options.beautify) {
      // NOTE: This will screw up some things where whitespace is important, and be
      // subtly different than prod.
      markup = beautifyHTML(markup);
    }
    log('[markup:]', markup);
    if (options.writeResp) {
      this.type = 'html';
      this.body = markup;
    }
    return markup;
  };

};
