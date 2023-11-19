
/**
 * Formats the week data by replacing the day number with its corresponding letter.
 * @param {Object} data - The data object containing the week sessions.
 * @returns {Object} The formatted data object.
 */
const formatWeek = (data) => {
    const daysArray = ["L", "M", "M", "J", "V", "S", "D"];

    for (const day of data.data.sessions) {
        day.day = daysArray;
    }

    return data;
};


/**
 * Formats the data by adding a kind property to each object in the data array.
 * The kind property is assigned a value from the kinds array.
 * @param {Object} data - The data to be formatted.
 * @returns {Object} - The formatted data.
 */
const formatName = (data) => {
    const kinds = [
        "Cardio",
        "Energie",
        "Endurance",
        "Force",
        "Vitesse",
        "Intensité",
    ];

    for (let i = 0; i < kinds.length; i++) {
        data.data.data[i].kind = kinds[i];
    }

    return data;
};


/**
 * Formats the score data by setting the `formatedScore` property to either `todayScore` or `score`.
 * @param {Object} data - The score data to format.
 * @returns {Object} The formatted score data.
 */
const formatScore = (data) => {
    data.data.formatedScore = data.data.todayScore || data.data.score;
    return data;
};

export { formatWeek, formatName, formatScore };
