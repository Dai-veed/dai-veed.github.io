<!DOCTYPE html>
<html>
<body>



<p id="demo"></p>

<script>
var cars = ["<br><pre>	|", "<pre>	-------:::index.html:::", "<pre>	|", "<pre>	-------:::style.css:::", "<pre>	|","<pre>	-------:::script.js:::"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
