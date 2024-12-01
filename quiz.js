function calculateResult(){
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const q3 = document.querySelector('input[name="q3"]:checked');
    const q4 = document.querySelector('input[name="q4"]:checked');
    const q5 = document.querySelector('input[name="q5"]:checked');

    let stem = 0;
    let humanities = 0;

    if(q1 && q1.value == 'stem') stem++;
    if(q1 && q1.value == "humanities") humanities++;

    if(q2 && q2.value == 'stem') stem++;
    if(q2 && q2.value == "humanities") humanities++;

    if(q3 && q3.value == 'stem') stem++;
    if(q3 && q3.value == "humanities") humanities++;

    if(q4 && q4.value == 'stem') stem++;
    if(q4 && q4.value == "humanities") humanities++;

    if(q5 && q5.value == 'stem') stem++;
    if(q5 && q5.value == "humanities") humanities++;

    let result = '';
    if(stem > humanities){
        result = 'You should look into STEM based careers';
    } else if (humanities > stem){
        result = 'You should look into the Humanities';
    } else {
        result = 'You are a balanced Jack of all Trades'
    }

    document.getElementById('result').innerText = result;
}
