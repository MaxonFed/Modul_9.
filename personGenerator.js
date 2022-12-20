const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,

    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
             "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    firstNameFemaleJson: `{
        "count": 8,
        "list": {
            "id_1": "Екатерина",
            "id_2": "Марина",
            "id_3": "Анастасия",
            "id_4": "Ирина",
            "id_5": "Юлия",
            "id_6": "Елена",
            "id_7": "Мария",
            "id_8": "Лидия"
        }
        
    }`,

    patronymicFemaleJson: `{
        "count": 8,
        "list": {
            "id_1": "Михайловна",
            "id_2": "Андреевна",
            "id_3": "Владимировна",
            "id_4": "Генадьевна",
            "id_5": "Аркадьевна",
            "id_6": "Петровна",
            "id_7": "Алексеевна",
            "id_8": "Леонидовна" 
        }
    }`,

    patronymicMaleJson: `{
        "count": 8,
        "list": {
            "id_1": "Юрьевич",
            "id_2": "Сергеевич",
            "id_3": "Владимирович",
            "id_4": "Генадьевич",
            "id_5": "Максимович",
            "id_6": "Евгеньевич",
            "id_7": "Алексеевич",
            "id_8": "Петрович" 
        }
    }`,



    femaleSpecializationJson: `{
        "count": 6,
        "list": {
            "id_1": "Парикмахер",
            "id_2": "Кассир",
            "id_3": "Педагог",
            "id_4": "Секретарь",
            "id_5": "Бухгалтер",
            "id_6": "Пекарь" 

        }
    }`,


    maleSpecializationJson: `{
        "count": 6,
        "list": {
            "id_1": "Грузчик",
            "id_2": "Строполь",
            "id_3": "Спасатель",
            "id_4": "Слесарь",
            "id_5": "Водитель",
            "id_6": "Тренер" 
        }
    }`,


    birthMounthJson: `{
        "count": 12,
        "list": {
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,

    

 
    
    GENDER_MALE : "мужчина",
    GENDER_FEMALE: "женщина",

    

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },       


    randomBirthDate: function() {
        let Mounth = this.randomValue(this.birthMounthJson);
        let day;
        if (Mounth === "Февраля") {
            day = this.randomIntNumber(28,1); 
        } else if (Mounth === "Апреля" || "Июня" || "Сентября" || "Ноября") {
            day = this.randomIntNumber(30, 1);
        } else {
            day = this.randomIntNumber(31,1);
        }
        return day + ' ' + Mounth;
    },

    randomBirthYear: function () {
        return this.randomIntNumber(2002, 1985);
       },
    

    randomFirstName: function() {
        if (this.person.gender === this.GENDER_FEMALE)  {
       return this.randomValue(this.firstNameFemaleJson);
    } else { 
        return this.randomValue(this.firstNameMaleJson);
    }
    
    },
 

    randomSurname: function() { 
         return this.person.gender === this.GENDER_FEMALE ? this.randomValue(this.surnameJson) + `a` : 
         this.randomValue(this.surnameJson);   
    },

    randomPatronomic: function() { 
        if (this.person.gender === this.GENDER_FEMALE) {
        return this.randomValue(this.patronymicFemaleJson); 
    } else {
        return this.randomValue(this.patronymicMaleJson);
    }
    },

  

   randomGender: function() {
    return this.randomIntNumber() ? this.GENDER_MALE : this.GENDER_FEMALE;
   },

   randomSpecialization: function() {
    return this.person.gender === this.GENDER_FEMALE ? this.randomValue(this.femaleSpecializationJson) :
    this.randomValue(this.maleSpecializationJson);
   },

    

     

   

    getPerson: function() {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.Surname = this.randomSurname();
        this.person.mounth = this.randomBirthDate();
        this.person.year = this.randomBirthYear();
        this.person.specialization = this.randomSpecialization();
        this.person.patronomic = this.randomPatronomic();
        return this.person; 
        }
};
