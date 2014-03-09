collection2-insert-allow-bug
============================

Run the following commands in chrome console

    Items.insert({}, {validate: false})
      > "7ByyawrZ92GkY2Nbc"
      > insert failed: Access denied debug.js:41
    Items.insert({name: "Joe"}, {validate: false})
      > "9GnoWAwqaDxLfYoSw"
    Items.insert({name: "Joe"})
      > "eoLLWCtPYmj2qRpkY"
