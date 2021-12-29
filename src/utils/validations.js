const verifyEmail = function (text) {
  var regex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
  return regex.test(text)
}

const isMobile = {
  Android: function() {
    return navigator.userAgent.match(/Android/i);
  },
  iOS: function() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
    return (isMobile.Android() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};

const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

export { verifyEmail, isMobile, isInStandaloneMode }
