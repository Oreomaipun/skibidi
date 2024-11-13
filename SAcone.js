V = prompt("กรอกปริมาตรของทรงกรวยมา")
const pi = Math.PI;
var h = Math.cbrt((3 * V * (2.828427)**2) /pi)
var r = h / (2.828427)
var LSA = (pi * r**2) + pi * r * Math.sqrt(h**2 + r**2)
document.getElementById("radius").innerHTML ="รัศมียาว "+ r +" หน่วย"
document.getElementById("height").innerHTML ="สูง "+ h +" หน่วย"
document.getElementById("Surface area").innerHTML ="พื้นที่ผิวที่น้อยที่สุดคือ "+ LSA +" หน่วย"
//ค่าประมาณ(p)จะดีมากขึ้นหากใช้ค่า r , h ที่มีทศนิยมตำแหน่งที่มากขึ้น