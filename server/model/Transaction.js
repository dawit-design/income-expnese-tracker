const mongoose = require("mongoose");

//transactions shcema

const transactionSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    transactionType: {
      type: String,
      enum: [
        "Income", "Expenses"
      ],
      required: true,
    },
    ammount: {
      type: Number,
      required: true,
    },
    category: {
        type: String,
        enum: [
          "Food", "Transportation", "Entertainment", "Shopping", "Utilities", "Health", "Travel", "Education", "Personal", "Groceries", "Bills", "Uncategorized"
        ],
        required: true,
      },
      color: {
        type: String,

      },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    dateRecoreded: {
        
    },
    notes: {
        type: String,
        required: true,
    }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
  }
);

//model
const Account = mongoose.model("User", accountSchema);
module.exports = Account;
