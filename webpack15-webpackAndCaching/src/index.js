import _ from 'lodash'
import $ from 'jquery';

const dom = $('<div>')
dom.html(_.join(['first', 'name'], '=='))
$('body').append(dom)