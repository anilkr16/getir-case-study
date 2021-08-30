// load the things we need
let mongoose = require('mongoose');
// Required model ====================================
const Records = mongoose.model('Records');
module.exports = {
    getRecords: async function (data) {
        const {minCount, maxCount, startDate, endDate} = data
        return await(
            Records.aggregate([
                {
                    $project: {
                        _id: 0, key: 1, createdAt: 1,
                        totalCount: { $cond: {
                                if: {
                                    $isArray: "$counts"
                                },
                                then: {
                                    $sum: "$counts"
                                },
                                else: "NA"
                            }
                        }
                    }
                },
                {
                    $match: {
                        totalCount: {
                            $gte: Number(minCount),
                            $lte: Number(maxCount)
                        },
                        createdAt: {
                            $gte: new Date(startDate),
                            $lte: new Date(endDate)
                        }
                    }
                }
            ])
        )
    }
}