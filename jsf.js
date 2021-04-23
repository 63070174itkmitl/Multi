const change = (val)=>{
    console.log(val);
    document.documentElement.style.setProperty("--h", val);
  }
  const fire = ()=>{
    var fools = ["ลาออก", "ดรอป", "ไปไถนา"]
    const response = fools[Math.floor(Math.random()*fools.length)]
    document.getElementById("outputtxt").innerHTML = response
  }