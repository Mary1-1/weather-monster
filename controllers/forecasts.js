const Temperature = require('../models/temperature')
const Forecasts = require('../models/forecasts')
const Helpers = require('../helpers/helpers')

exports.foreCasts = async (req, res, next) => {
    try {
        const now = new Date;
        const before = Helpers.subMonths(new Date, 1);
        before.setHours(00, 00, 00);
        now.setHours(23, 59, 59);
        const averageTemp = await Temperature.aggregate([{
            $group: {
              _id: {
                city_id: "$city_id",
                min: {
                  $min: "$min",
                },
                max: {
                  $max: "$max",
                },
                sample: {$avg: ["$min", "$max"]},
              },
            },
          },
        ]);
        return res.status(200).json({
            error: false,
            message: "Succesfully gotten the sum of min and max",
            data: {
                averageTemp
            },
          });
    } catch(err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: "something went wrong, could not sum up min and max",
          });
    }
 }





















































 

/*exports.foreCasts = async (req, res, next) => {
  try {
      // const avgTemp = await Temperature.aggregate(
      //     [
      //       {
      //         $group:
      //           {
      //             _id: "$item",
      //             avgAmount: { $avg: { $multiply: [ "$min", "$max" ] } },
      //             avgQuantity: { $avg: "$quantity" }
      //           }
      //       }
      //     ]
      //  )
      const now = new Date;
      const before = Helpers.subMonths(new Date, 1);
      before.setHours(00, 00, 00);
      now.setHours(23, 59, 59);
      //const temp =btemperature.aggregate(match{city_id: req.pq})
      const averageTemp = await Temperature.aggregate([{
          $match: {
          //   min: "",
          //   max: "",
            createdAt: {
              $gte: before,
              $lt: now,
            },
          },
        },
        {
          $group: {
            _id: {
              min: {
                $min: "$min",
              },
              max: {
                $max: "$max",
              },
              sample: {
                $avg: "$avg"
              }
            },
            // total: {
            //   smaple: "$min+$max",
            // },
          },
        },
      ]);
      averageTemp.sort((a, b) => (a._id.month < b._id.month ? -1 : 1));
      return res.status(200).json({
          error: false,
          message: "Succesfully gotten the sum of min and max",
          data: {
              averageTemp

          //   total_savings: user.total_savings_amount,
          //   total_investment: user.total_investment_amount,
          //   pending_loans: user.pending_loan_payment,
          //   recent_transaction: recent_transaction.docs
          },
        });
  } catch(err) {
      console.log(err);
      return res.status(500).json({
          error: true,
          message: "something went wrong, could not sum up min and max",
        });
  }
}*/

/* exports.foreCasts = async (req, res, next) => {
    try {
        // const avgTemp = await Temperature.aggregate(
        //     [
        //       {
        //         $group:
        //           {
        //             _id: "$item",
        //             avgAmount: { $avg: { $multiply: [ "$min", "$max" ] } },
        //             avgQuantity: { $avg: "$quantity" }
        //           }
        //       }
        //     ]
        //  )
        const now = new Date;
        const before = Helpers.subMonths(new Date, 1);
        before.setHours(00, 00, 00);
        now.setHours(23, 59, 59);
        //const temp =btemperature.aggregate(match{city_id: req.pq})
        //const averageTemp = Temperature.aggregate([{$group: {_id: {min: "$min", max: "$max"}}, sample: {$avg: "$"}}])
        //const averageTemp = Temperature.aggregate([{$group: {_id: "$city_id"}, sample: {$avg: {min: "$min", max: ""}}}])
        const averageTemp = Temperature.aggregate([{$group: {_id: "$min", avgAge: {$avg: "$max"}}}])
        return res.status(200).json({
            error: false,
            message: "Succesfully gotten the sum of min and max",
            data: {
                averageTemp

            //   total_savings: user.total_savings_amount,
            //   total_investment: user.total_investment_amount,
            //   pending_loans: user.pending_loan_payment,
            //   recent_transaction: recent_transaction.docs
            },
          });
    } catch(err) {
        console.log(err);
        return res.status(500).json({
            error: true,
            message: "something went wrong, could not sum up min and max",
          });
    }
 }*/