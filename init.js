
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.Surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.mounth + ' ' + initPerson.year;
    document.getElementById('specializationOutput').innerText = initPerson.specialization;
    document.getElementById('patronymicOutput').innerText = initPerson.patronomic;
};

document.querySelector('#clear').addEventListener('click', () => {
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('specializationOutput').innerText = '';
    document.getElementById('patronymicOutput').innerText = '';
});

document.querySelector('#generate').addEventListener('click', () => {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.Surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.mounth + ' ' + initPerson.year;
    document.getElementById('specializationOutput').innerText = initPerson.specialization;
    document.getElementById('patronymicOutput').innerText = initPerson.patronomic;
})
