
var i=0;var correctcount=0;var count=jsonData.length;var ans='';generate(0);function generate(index){$(".btn").css('background','#3bb5a7');document.getElementById("questions").innerHTML=jsonData[index].question;document.getElementById("opt1").innerHTML=jsonData[index].opt1;document.getElementById("opt2").innerHTML=jsonData[index].opt2;document.getElementById("opt3").innerHTML=jsonData[index].opt3;document.getElementById("opt4").innerHTML=jsonData[index].opt4}
$(".btn").click(function(){ans=this.id;if(jsonData[i].correctanswer==$("#"+ans).html())
$(this).css('background','green');else $(this).css('background','red')});function checkanswer(){if(ans=="opt1"&&jsonData[i].opt1==jsonData[i].correctanswer){correctcount++}
if(ans=="opt2"&&jsonData[i].opt2==jsonData[i].correctanswer){correctcount++}
if(ans=="opt3"&&jsonData[i].opt3==jsonData[i].correctanswer){correctcount++}
if(ans=="opt4"&&jsonData[i].opt4==jsonData[i].correctanswer){correctcount++}
i++;if(count==i){document.getElementById("qu_cd").style.display="none";document.getElementById("total_score").innerHTML=("<div id='modal'><p class='game_over blink'>game over ! </p><p class='total'> your total score is : "+correctcount+"/5</p> <button onclick='playagain()' class='restart_game'>click to Restart</button></div>")}
else{generate(i)}}
function goback(){alert("sorry u can't go back once u start")}
function playagain(){location.reload(!0)}
var colors=['purple','navy','orange','yellow','black'];function blink_text(){$('.blink').fadeOut(1000);$('.blink').fadeIn(1000);$('.blink').css('color',colors[Math.floor(Math.random()*5)])}
setInterval(blink_text,1000)
var i = 0;
var correctcount = 0;
var count = jsonData.length;
var ans = '';
generate(0);

function generate(index) {
    
    $(".btn").removeAttr('disabled');
    $(".btn").css('background', '#3bb5a7');
    document.getElementById("questions").innerHTML = jsonData[index].question;
    document.getElementById("opt1").innerHTML = jsonData[index].opt1;
    document.getElementById("opt2").innerHTML = jsonData[index].opt2;
    document.getElementById("opt3").innerHTML = jsonData[index].opt3;
    document.getElementById("opt4").innerHTML = jsonData[index].opt4
}
$(".btn").click(function() {
    ans = this.id;
    
    if (jsonData[i].correctanswer == $("#" + ans).html())
        $(this).css('background', 'green');
    else $(this).css('background', 'red');
    $(".btn").attr('disabled', 'disabled');
});
  
function checkanswer() {
    if (ans == "opt1" && jsonData[i].opt1 == jsonData[i].correctanswer) {
        correctcount++
    }
    if (ans == "opt2" && jsonData[i].opt2 == jsonData[i].correctanswer) {
        correctcount++
    }
    if (ans == "opt3" && jsonData[i].opt3 == jsonData[i].correctanswer) {
        correctcount++
    }
    if (ans == "opt4" && jsonData[i].opt4 == jsonData[i].correctanswer) {
        correctcount++
    }
    i++;
    if (count == i) {
        document.getElementById("qu_cd").style.display = "none";
        document.getElementById("total_score").innerHTML = ("<div id='modal'><p class='game_over blink'>game over ! </p><p class='total'> your total score is : " + correctcount + "/5</p> <button onclick='playagain()' class='restart_game'>click to Restart</button></div>")
    } else {
        generate(i)
    }
}

function goback() {
    alert("sorry u can't go back once u start")
}

function playagain() {
    location.reload(!0)
}
var colors = ['purple', 'navy', 'orange', 'yellow', 'black'];

function blink_text() {
    $('.blink').fadeOut(1000);
    $('.blink').fadeIn(1000);
    $('.blink').css('color', colors[Math.floor(Math.random() * 5)])
}
setInterval(blink_text, 1000)

