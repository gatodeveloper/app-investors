export const GenericError = function (debugMessage, userMessage = 'Sorry, there was a problem. Please try again.') {
  this.debugMessage = debugMessage
  this.userMessage = userMessage
}
