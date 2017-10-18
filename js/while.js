// 2
// 4
// 8
// 16
// 32
// 64
// 128
// 256
// 512
// 1024
// 2048
// 4096
// 8192
// 16384
// 32768
// 65536
//
// var i = 2;
// do{
//     console.log(i);
//
//     i *= 2;
//
// } while (i < 70000);

var allCones = Math.floor(Math.random() * 50) + 50;

console.log("you have to sell " + allCones + " cones before you can go home!");

do{
    var conesRequested = Math.floor(Math.random() * 5) + 1;

    if(conesRequested > allCones){
        console.log("sorry we dont have that many cones");
        continue;
    }

    allCones = allCones - conesRequested;
    console.log(allCones);


} while (allCones > 0);

console.log("yay i sold all my cones!!");