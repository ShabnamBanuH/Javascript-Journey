const prompt = require("prompt-sync")();
console.log("-------------------------------------------------------------")
console.log("addLast --> 1\nremoveLast --> 2\naddFirst --> 3\nremoveFirst --> 4\nlength --> 5\nfind value of index --> 6slice --> 7\ndisplay --> 8")
console.log("-------------------------------------------------------------\n")
var arr = new Array();

console.log(arr)
while(choice !=0){
                
                var choice =  Number(prompt("Enter your choice :  "));
                switch(choice){
                  case 1:     console.log("\n--------------------OUTPUT--------------------")
                             console.log("Value is added to an arr : " , arr.push(prompt("Entre the value : ")))
                              break
                  case 2: console.log("\n--------------------OUTPUT--------------------")
                                console.log("Value is removed for an array : " , arr.pop())
                                  break
                  case 3: console.log("\n--------------------OUTPUT--------------------")
                                console.log("Value is added to an arr : " , arr.unshift(prompt("Enter the value : ")))
                                  break
                  case 4: console.log("\n--------------------OUTPUT--------------------")
                                console.log("Value is removed for an array : " , arr.shift())
                                       break
                  case 5: console.log("\n--------------------OUTPUT--------------------")
                                console.log("Length is : " , arr.length)
                                  break;
                  case 6: console.log("\n--------------------OUTPUT--------------------")
                                console.log("Value fount at index : " , arr.indexOf(prompt("Enter the value : ")))
                                     break     
                  case 7: console.log("\n--------------------OUTPUT--------------------")
                                console.log("Slice value " , arr.slice(Number.parseInt(prompt("Start value :  ")) , Number.parseInt(prompt("End value :  "))))
                                                
                                     break   
                  case 8: console.log("\n--------------------OUTPUT--------------------")
                                console.log(arr)
                          break
                default : console.log("exit......")

                }
}
