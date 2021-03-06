const {
    mongoose
} = require('./login');

const timeRangeSchema = new mongoose.Schema({
    hour: {
        type: Number,
        max: 24,
        min: 8
    },
    minute: {
        type: Number,
        max: 59,
        min: 0
    },
    time: {
        type: Number,
        get() {
            return this.get('hour') * 100 + this.get('minute');
        }
    }
});

const courseSchema = new mongoose.Schema({
    name: String,
    startTime: timeRangeSchema,
    endTime: timeRangeSchema
})

module.exports = courseSchema