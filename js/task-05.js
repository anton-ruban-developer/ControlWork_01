const checkForSpam = function (message) {
  let messageToCheck = message.toLowerCase();
  return messageToCheck.includes("spam") || messageToCheck.includes("sale");
};

console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("JavaScript weekly newsletter"));
console.log(checkForSpam("Get best sale offers now!"));
console.log(checkForSpam("[SPAM] How to earn fast money?"));
