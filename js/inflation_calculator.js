function get_data(value, year) {
    var request = new XMLHttpRequest();
    var url = 'inflation-api.herokuapp.com/api/?value='.concat(value,'&year=',year);
    request.open('GET', 'inflation-api.herokuapp.com/api/?value=100&year=1955');
    console.log('hello')
}
