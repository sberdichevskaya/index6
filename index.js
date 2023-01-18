let event1 = ["01:15", "02:00"];
let event2 = ["02:00", "03:00"];
let k = 1;

let eventt = event1.concat(event2);

for (let i = 0; i < event1.length; i++)
{
  //console.log(event1.length);
  for (let j = event1.length; j < eventt.length; j++)
  {
    if (event1[i] === eventt[j])
    {
      k++;
    }
  }
  if (k > 1)
    {

      console.log("ошибка: в " + event1[i] + " несколько задач (" + k + ")");
    }
  k = 1;
}

console.log(eventt);
