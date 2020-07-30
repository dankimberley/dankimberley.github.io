function get_maxes() {
    let weight = document.getElementById("weight");
    let reps = document.getElementById("reps");
    let radios = document.getElementsByName("unit")

    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            // do whatever you want with the checked radio
            var postfix = radios[i].value;

            // only one radio can be logically checked, don't check the rest
            break;
        }
    }


    document.getElementById("Epley").innerHTML = "Epley: ".concat(epley(weight.value, reps.value), postfix);
    document.getElementById("Brzycki").innerHTML = "Brzycki: ".concat(brzycki(weight.value, reps.value), postfix);
    document.getElementById("McGlothin").innerHTML = "McGlothin: ".concat(mcglothin(weight.value, reps.value), postfix);
    document.getElementById("Average").innerHTML = "Average: ".concat(average(weight.value, reps.value), postfix);
}

function epley(weight, reps=1) {
    if (reps == 1) {
        return weight
    } else {
        return Math.round(weight * (1 + (reps / 30)));
    }

}

function brzycki(weight, reps=1) {
    if (reps == 1) {
        return weight
    } else {
        return Math.round(weight * 36 / (37 - reps))
    }
}

function mcglothin(weight, reps=1) {
    if (reps == 1) {
        return weight
    } else {
        return Math.round(weight * 100 / (101.3 - 2.67123 * reps))
    }
}

function average(weight, reps) {
    if (reps == 1) {
        return weight
    } else {
        return Math.round((epley(weight, reps)+brzycki(weight,reps)+mcglothin(weight,reps))/3)
    }

}