let obj = {
    name: [{
        cars: ["volvo", "benze", 'toyoto', [{
            players: ['Dhoni', "sachi", {
                ages: {
                    sachinWife: "Subbamma"
                }
            }]
        }], ["suchi", "sharma", "vivek", [{
            games: ["volleyball", "football", 'cricket']
        }]]
        ]
    }]
}


for (let i of obj.name) {
    console.log(i.cars[4][2]);
}