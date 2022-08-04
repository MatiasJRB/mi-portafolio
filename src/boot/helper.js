
import { boot } from 'quasar/wrappers'
import { Notify, openURL } from 'quasar'
import Vue from 'vue'
import print from 'print-js'
import VueHtml2pdf from 'vue-html2pdf'
import html2pdf from 'html2pdf.js'


function printHTML (element) {

    const domElement = document.getElementById(element);
    const opt = {
      margin: 2,
      filename: 'Matias Rios CV'
    }
    html2pdf(domElement,opt)

}

function positiveNotify (msg) {
  Notify.create({
    color: 'accent',
    textColor: 'white',
    icon: 'done',
    message: msg || 'Operación realizada correctamente'
  })
}

function negativeNotify (msg) {
  Notify.create({
    color: 'primary',
    textColor: 'white',
    position: 'top',
    message: msg || 'Inténtalo de nuevo más tarde',
    icon: 'report_problem'
  })
}

function warningNotify (msg) {
  Notify.create({
    position: 'top',
    color: 'secondary',
    textColor: 'dark',
    icon: 'warning',
    message: msg
  })
}


function isNumeric (str) {
  return !isNaN(str) &&
        !isNaN(parseFloat(str))
}

function formatPrice (price) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  const number = price.price
  let toret = formatter.format(number)
  toret = toret.toString().replaceAll(',', '.')
  const sepByDot = toret.split('.')
  toret = ''
  for (const r in sepByDot) {
    if (r == sepByDot.length - 2) {
      toret += sepByDot[r] + ','
    } else {
      toret += sepByDot[r]
      if (r != sepByDot.length - 1) {
        toret += '.'
      }
    }
  }
  price.price = toret
  return toret
}

function formatDate (dateStr, withHours) {
  function pad (number) {
    if (number < 10) {
      return '0' + number
    }
    return number
  }

  const date = new Date(dateStr)
  let toret = date.getUTCDate() +
    '/' + pad(date.getUTCMonth() + 1) +
    '/' + pad(date.getUTCFullYear())
  if (withHours) {
    toret += ' ' + pad(date.getUTCHours()) + ':' + pad(date.getUTCMinutes())
  }
  if (!toret.toString().includes('NaN')) { return toret } else { return '' }
}

const array = {
  shuffle: (array) => {
    alert('uwu')
    let currentIndex = array.length; let randomIndex
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]]
    }
    return array
  },
}

function isFloat (n) {
  return n === +n && n !== (n | 0)
}

const helper = {
  notify: {
    positive: positiveNotify,
    negative: negativeNotify,
    warning: warningNotify
  },
  array,
  openURL,
  isNumeric,
  isFloat,
  formatPrice,
  formatDate,
  printHTML
}

Vue.prototype.$helper = helper

export { helper }

